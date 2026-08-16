/* eslint-disable @typescript-eslint/no-explicit-any */
import { createHash } from "node:crypto";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const CDRAGON = "https://raw.communitydragon.org";
const CDRAGON_GAME_DATA =
  `${CDRAGON}/latest/plugins/rcp-be-lol-game-data/global/default/v1`;
const SCHEMA_VERSION = 1;
let resolvedAssetPatch = "latest";

type Json = Record<string, unknown> | unknown[];

type SourceRecord = {
  url: string;
  sha256: string;
};

async function getJson<T extends Json>(url: string): Promise<{ data: T; source: SourceRecord }> {
  const response = await fetch(url, { headers: { "user-agent": "DamageLabDataSync/1.0" } });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  const text = await response.text();
  return {
    data: JSON.parse(text) as T,
    source: { url, sha256: createHash("sha256").update(text).digest("hex") },
  };
}

function cleanHtml(value = "") {
  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/@[^@]+@/g, "")
    .replace(/[\u2013\u2014]/g, " - ")
    .replace(/\s+/g, " ")
    .trim();
}

function itemTextSections(value = "") {
  const statsMatch = value.match(/<stats\b[^>]*>([\s\S]*?)<\/stats>/i);
  const statsText = statsMatch?.[1]
    .split(/<br\s*\/?>/i)
    .map((line) => cleanHtml(line))
    .filter(Boolean) ?? [];
  const effectText = cleanHtml(statsMatch ? value.replace(statsMatch[0], "") : value);
  return { statsText, effectText };
}

function assetUrl(assetPath = "") {
  if (!assetPath) return "";
  const normalized = assetPath
    .replace(/^\/lol-game-data\/assets\//i, "plugins/rcp-be-lol-game-data/global/default/")
    .replace(/^\//, "")
    .toLowerCase();
  return `${CDRAGON}/${resolvedAssetPatch}/${normalized}`;
}

function rankValues(spell: any): number[] {
  const candidates = Object.values(spell.effectAmounts ?? {})
    .filter(Array.isArray)
    .map((values: any) => values.slice(1, 6).map(Number))
    .filter((values: number[]) => values.some((value) => value >= 15 && value <= 1200))
    .filter((values: number[]) => values.every((value) => Number.isFinite(value) && value >= 0));
  const progressive = candidates.find((values) => values.some((value: number, index: number) => index > 0 && value !== values[0]));
  return progressive ?? candidates[0] ?? [0, 0, 0, 0, 0];
}

function damageType(description: string) {
  if (/<trueDamage>/i.test(description)) return "true";
  if (/<magicDamage>/i.test(description)) return "magic";
  if (/<physicalDamage>/i.test(description)) return "physical";
  return null;
}

type ResolvedBinFormula = {
  baseDamage: number[];
  ratioAD: number;
  ratioAP: number;
  ratioArmor: number;
  ratioMagicResist: number;
  unsupportedParts: string[];
};

function rankedBinValues(values: unknown): number[] {
  if (!Array.isArray(values)) return [0, 0, 0, 0, 0];
  const numbers = values.map(Number).filter(Number.isFinite);
  if (numbers.length >= 7) return numbers.slice(1, 6);
  return numbers.slice(0, 5);
}

function addFormula(left: ResolvedBinFormula, right: ResolvedBinFormula): ResolvedBinFormula {
  return {
    baseDamage: Array.from({ length: 5 }, (_, index) => (left.baseDamage[index] ?? left.baseDamage.at(-1) ?? 0) + (right.baseDamage[index] ?? right.baseDamage.at(-1) ?? 0)),
    ratioAD: left.ratioAD + right.ratioAD,
    ratioAP: left.ratioAP + right.ratioAP,
    ratioArmor: left.ratioArmor + right.ratioArmor,
    ratioMagicResist: left.ratioMagicResist + right.ratioMagicResist,
    unsupportedParts: [...left.unsupportedParts, ...right.unsupportedParts],
  };
}

function multiplyFormula(formula: ResolvedBinFormula, multiplier: number[]): ResolvedBinFormula {
  const scalar = multiplier[0] ?? 1;
  return {
    baseDamage: formula.baseDamage.map((value, index) => value * (multiplier[index] ?? multiplier.at(-1) ?? scalar)),
    ratioAD: formula.ratioAD * scalar,
    ratioAP: formula.ratioAP * scalar,
    ratioArmor: formula.ratioArmor * scalar,
    ratioMagicResist: formula.ratioMagicResist * scalar,
    unsupportedParts: formula.unsupportedParts,
  };
}

function resolveBinCalculation(name: string, spellData: any, seen = new Set<string>()): ResolvedBinFormula | null {
  const calculations = spellData?.mSpellCalculations ?? {};
  const entry = Object.entries<any>(calculations).find(([key]) => key.toLowerCase() === name.toLowerCase());
  if (!entry || seen.has(entry[0])) return null;
  seen.add(entry[0]);
  const calculation = entry[1];
  const dataValues = new Map<string, number[]>((spellData?.DataValues ?? []).map((value: any) => [String(value.name).toLowerCase(), rankedBinValues(value.values)]));
  const effects = (spellData?.mEffectAmount ?? []).map((effect: any) => rankedBinValues(effect.value));
  const zero = (): ResolvedBinFormula => ({ baseDamage: [0, 0, 0, 0, 0], ratioAD: 0, ratioAP: 0, ratioArmor: 0, ratioMagicResist: 0, unsupportedParts: [] });

  const statRatio = (part: any, coefficient: number): ResolvedBinFormula => {
    const stat = Number(part.mStat ?? 0);
    if (stat === 2) return { ...zero(), ratioAD: coefficient };
    if (stat === 1) return { ...zero(), ratioArmor: coefficient };
    if (stat === 6) return { ...zero(), ratioMagicResist: coefficient };
    if (stat === 0) return { ...zero(), ratioAP: coefficient };
    return { ...zero(), unsupportedParts: [`ChampionStat:${stat}`] };
  };

  const resolvePart = (part: any): ResolvedBinFormula => {
    if (!part || typeof part !== "object") return zero();
    const type = String(part.__type ?? "UnknownCalculationPart");
    if (type === "NumberCalculationPart") return { ...zero(), baseDamage: Array(5).fill(Number(part.mNumber ?? 0)) };
    if (type === "NamedDataValueCalculationPart") return { ...zero(), baseDamage: dataValues.get(String(part.mDataValue).toLowerCase()) ?? [0, 0, 0, 0, 0] };
    if (type === "EffectValueCalculationPart") return { ...zero(), baseDamage: effects[Math.max(0, Number(part.mEffectIndex ?? 1) - 1)] ?? [0, 0, 0, 0, 0] };
    if (type === "StatByCoefficientCalculationPart") {
      const coefficient = Number(part.mCoefficient ?? 0);
      return statRatio(part, coefficient);
    }
    if (type === "StatByNamedDataValueCalculationPart") {
      const coefficient = dataValues.get(String(part.mDataValue).toLowerCase())?.[0] ?? 0;
      return statRatio(part, coefficient);
    }
    return { ...zero(), unsupportedParts: [type] };
  };

  if (calculation.__type === "GameCalculationModified" && calculation.mModifiedGameCalculation) {
    const base = resolveBinCalculation(String(calculation.mModifiedGameCalculation), spellData, seen);
    if (!base) return null;
    const multiplierPart = resolvePart(calculation.mMultiplier);
    const multiplier = multiplierPart.baseDamage.some((value) => value !== 0) ? multiplierPart.baseDamage : [1, 1, 1, 1, 1];
    return multiplyFormula(base, multiplier);
  }
  if (calculation.__type === "GameCalculationConditional") {
    const fallbackName = calculation.mDefaultGameCalculation ?? calculation.mConditionalGameCalculation;
    const fallback = fallbackName ? resolveBinCalculation(String(fallbackName), spellData, seen) : null;
    return fallback ? { ...fallback, unsupportedParts: [...fallback.unsupportedParts, "GameCalculationConditional"] } : null;
  }
  let resolved = zero();
  for (const part of calculation.mFormulaParts ?? []) resolved = addFormula(resolved, resolvePart(part));
  if (calculation.mMultiplier) {
    const multiplierPart = resolvePart(calculation.mMultiplier);
    const multiplier = multiplierPart.baseDamage.some((value) => value !== 0) ? multiplierPart.baseDamage : [1, 1, 1, 1, 1];
    resolved = multiplyFormula(resolved, multiplier);
  }
  return resolved;
}

function findDamageCalculationName(spell: any, spellData: any) {
  const calculations = Object.keys(spellData?.mSpellCalculations ?? {});
  const taggedDamage = [...String(spell.dynamicDescription ?? "").matchAll(/<(?:physicalDamage|magicDamage|trueDamage)>(.*?)<\//gi)]
    .flatMap((match) => [...match[1].matchAll(/@([^@*]+)(?:\*[^@]+)?@/g)].map((token) => token[1]));
  for (const token of taggedDamage) {
    const exact = calculations.find((name) => name.toLowerCase() === token.toLowerCase());
    if (exact) return exact;
  }
  return calculations.find((name) => /damage/i.test(name) && !/reduction|taken|amp|percent/i.test(name)) ?? null;
}

function normalizeSpell(spell: any, binSpellData?: any) {
  const type = damageType(spell.dynamicDescription ?? "");
  const calculationName = findDamageCalculationName(spell, binSpellData);
  const resolved = calculationName ? resolveBinCalculation(calculationName, binSpellData) : null;
  const fallbackCoefficient = Number(spell.coefficients?.coefficient1 ?? 0);
  const fallbackValues = rankValues(spell);
  const values = resolved?.baseDamage.some((value) => value > 0) ? resolved.baseDamage : fallbackValues;
  const ratioAD = resolved ? resolved.ratioAD : type === "physical" ? fallbackCoefficient : 0;
  const ratioAP = resolved ? resolved.ratioAP : type === "magic" ? fallbackCoefficient : 0;
  const ratioArmor = resolved?.ratioArmor ?? 0;
  const ratioMagicResist = resolved?.ratioMagicResist ?? 0;
  const resolvedDamage = Boolean(type) && (values.some((value) => value > 0) || ratioAD > 0 || ratioAP > 0 || ratioArmor > 0 || ratioMagicResist > 0);
  const hasDamageTag = Boolean(type);
  const unsupported = hasDamageTag && !resolvedDamage;
  return {
    key: String(spell.spellKey ?? "?").toUpperCase(),
    name: String(spell.name ?? "Unknown ability"),
    description: cleanHtml(spell.dynamicDescription ?? spell.description),
    icon: assetUrl(spell.abilityIconPath),
    damageType: type,
    baseDamage: values,
    ratioAD,
    ratioAP,
    ratioArmor,
    ratioMagicResist,
    cooldown: Array.isArray(spell.cooldownCoefficients)
      ? spell.cooldownCoefficients.slice(0, 5).map(Number)
      : [],
    classification: resolvedDamage ? "estimated" : unsupported ? "unsupported" : "non-damaging",
    coverageNote: resolvedDamage
      ? `CommunityDragon calculation ${calculationName ?? "fallback effect values"} was normalized. ${resolved?.unsupportedParts.length ? `Unresolved parts: ${[...new Set(resolved.unsupportedParts)].join(", ")}.` : "Complex subcasts remain selectable assumptions."}`
      : unsupported
        ? "The tooltip identifies damage, but the current BIN calculation structure could not be reduced safely."
        : "No champion damage packet is present for this cast.",
  };
}

function normalizeStats(stats: any) {
  return {
    health: Number(stats.hp ?? 600),
    healthPerLevel: Number(stats.hpperlevel ?? 100),
    mana: Number(stats.mp ?? 0),
    manaPerLevel: Number(stats.mpperlevel ?? 0),
    armor: Number(stats.armor ?? 30),
    armorPerLevel: Number(stats.armorperlevel ?? 4.5),
    magicResist: Number(stats.spellblock ?? 30),
    magicResistPerLevel: Number(stats.spellblockperlevel ?? 1.3),
    attackDamage: Number(stats.attackdamage ?? 60),
    attackDamagePerLevel: Number(stats.attackdamageperlevel ?? 3),
    attackSpeed: Number(stats.attackspeed ?? 0.65),
    attackSpeedPerLevel: Number(stats.attackspeedperlevel ?? 2),
    moveSpeed: Number(stats.movespeed ?? 335),
    attackRange: Number(stats.attackrange ?? 125),
  };
}

function findCharacterRecord(value: any): any {
  if (!value || typeof value !== "object") return null;
  if ((value.baseHP != null || value.baseHPModifiable != null) &&
      (value.baseDamage != null || value.baseDamageModifiable != null)) return value;
  for (const child of Object.values(value)) {
    const found = findCharacterRecord(child);
    if (found) return found;
  }
  return null;
}

function normalizeBinStats(record: any) {
  const numeric = (value: any, fallback: number) => {
    const candidate = typeof value === "object" && value
      ? value.mBaseValue ?? value.baseValue ?? value.value ?? value.mValue
      : value;
    return Number.isFinite(Number(candidate)) ? Number(candidate) : fallback;
  };
  return {
    health: numeric(record.baseHP ?? record.baseHPModifiable, 600),
    healthPerLevel: numeric(record.hpPerLevel ?? record.hpPerLevelModifiable, 100),
    mana: numeric(record.primaryAbilityResource?.arBase ?? record.baseMP, 0),
    manaPerLevel: numeric(record.primaryAbilityResource?.arPerLevel ?? record.mpPerLevel, 0),
    armor: numeric(record.baseArmor ?? record.baseArmorModifiable, 30),
    armorPerLevel: numeric(record.armorPerLevel ?? record.armorPerLevelModifiable, 4.5),
    magicResist: numeric(record.baseSpellBlock ?? record.baseMR, 30),
    magicResistPerLevel: numeric(record.spellBlockPerLevel ?? record.mPerLevelStats?.mSpellBlock, 1.3),
    attackDamage: numeric(record.baseDamage ?? record.baseDamageModifiable, 60),
    attackDamagePerLevel: numeric(record.damagePerLevel ?? record.damagePerLevelModifiable, 3),
    attackSpeed: numeric(record.attackSpeed ?? record.attackSpeedModifiable ?? record.baseAttackSpeed, 0.65),
    attackSpeedPerLevel: numeric(record.attackSpeedPerLevel ?? record.attackSpeedPerLevelModifiable, 2),
    moveSpeed: numeric(record.mMoveSpeed ?? record.baseMoveSpeedModifiable, 335),
    attackRange: numeric(record.attackRange ?? record.attackRangeModifiable, 125),
  };
}

function itemStats(stats: any, description: string) {
  const read = (key: string) => Number(stats?.[key] ?? 0);
  const lethalityMatch = description.match(/<attention>\s*([\d.]+)\s*<\/attention>\s*Lethality/i);
  const magicPenMatch = description.match(/<attention>\s*([\d.]+)\s*<\/attention>\s*Magic Penetration/i);
  return {
    health: read("FlatHPPoolMod"),
    mana: read("FlatMPPoolMod"),
    attackDamage: read("FlatPhysicalDamageMod"),
    abilityPower: read("FlatMagicDamageMod"),
    armor: read("FlatArmorMod"),
    magicResist: read("FlatSpellBlockMod"),
    attackSpeedPercent: read("PercentAttackSpeedMod") * 100,
    critChancePercent: read("FlatCritChanceMod") * 100,
    moveSpeedPercent: read("PercentMovementSpeedMod") * 100,
    lethality: Number(lethalityMatch?.[1] ?? 0),
    flatMagicPen: Number(magicPenMatch?.[1] ?? 0),
  };
}

function runeClassification(name: string) {
  const modeled = new Set(["Press the Attack", "Electrocute", "Scorch", "Coup de Grace"]);
  const statOnly = new Set(["Adaptive Force", "Health", "Health Scaling"]);
  const irrelevant = new Set([
    "Taste of Blood", "Deep Ward", "Grisly Mementos", "Sixth Sense", "Relentless Hunter", "Treasure Hunter",
    "Glacial Augment", "Unsealed Spellbook", "Cash Back", "Hextech Flashtraption", "Magical Footwear",
    "Time Warp Tonic", "Approach Velocity", "Fleet Footwork", "Absorb Life", "Presence of Mind", "Triumph",
    "Guardian", "Demolish", "Font of Life", "Second Wind", "Stormraider's Surge", "Nimbus Cloak", "Celerity",
    "Move Speed", "Tenacity and Slow Resist",
  ]);
  if (modeled.has(name)) return "modeled";
  if (statOnly.has(name)) return "stat-only";
  if (irrelevant.has(name)) return "irrelevant";
  return "unsupported";
}

function itemClassification(name: string, description: string) {
  if (/Sheen|Trinity Force|Lich Bane|Iceborn Gauntlet|Blade of The Ruined King|Nashor's Tooth/i.test(name)) return "modeled";
  if (/\bdeal(?:s|ing)?\b|on-hit|spellblade|burn|wound|shield|detonat|explode|immolate|lifeline|stasis|invulnerab|reduce incoming|damage reduction|take(?:s)?\s+\d+(?:\.\d+)?%\s+more\s+(?:physical|magic|true|adaptive)?\s*damage|amplif(?:y|ies)|increased?\s+(?:physical|magic|true|adaptive)?\s*damage/i.test(description)) return "unsupported";
  return "stat-only";
}

async function main() {
  const metadataResult = await getJson<{ version: string }>(`${CDRAGON}/latest/compat-version-metadata.json`);
  const patchMatch = metadataResult.data.version.match(/releases-(\d+)-(\d+)/);
  if (!patchMatch) throw new Error(`Unable to resolve a numbered patch from ${metadataResult.data.version}`);
  const patch = `${Number(patchMatch[1])}.${Number(patchMatch[2])}`;
  resolvedAssetPatch = patch;
  const versionsResult = await getJson<string[]>("https://ddragon.leagueoflegends.com/api/versions.json");
  const ddragonPatch = versionsResult.data.find((version) => version.startsWith(`${patch}.`)) ?? versionsResult.data[0];
  const outputDir = path.join(process.cwd(), "public", "data", patch);
  const championDir = path.join(outputDir, "champions");
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(championDir, { recursive: true });

  const [summaryResult, itemsResult, perksResult, stylesResult, ddragonChampions, ddragonItems] = await Promise.all([
    getJson<any[]>(`${CDRAGON_GAME_DATA}/champion-summary.json`),
    getJson<any[]>(`${CDRAGON_GAME_DATA}/items.json`),
    getJson<any[]>(`${CDRAGON_GAME_DATA}/perks.json`),
    getJson<any[]>(`${CDRAGON_GAME_DATA}/perkstyles.json`),
    getJson<any>(`https://ddragon.leagueoflegends.com/cdn/${ddragonPatch}/data/en_US/champion.json`),
    getJson<any>(`https://ddragon.leagueoflegends.com/cdn/${ddragonPatch}/data/en_US/item.json`),
  ]);

  const summaries = summaryResult.data.filter((champion) => champion.id > 0 && champion.id < 1000 && champion.name);
  const champions: any[] = [];
  const detailSources: SourceRecord[] = [];
  const binSources: SourceRecord[] = [];
  for (let index = 0; index < summaries.length; index += 10) {
    const batch = summaries.slice(index, index + 10);
    const details = await Promise.all(batch.map((champion) => getJson<any>(`${CDRAGON_GAME_DATA}/champions/${champion.id}.json`)));
    const bins = await Promise.all(batch.map((champion) =>
      getJson<any>(`${CDRAGON}/latest/game/data/characters/${String(champion.alias).toLowerCase()}/${String(champion.alias).toLowerCase()}.bin.json`)
    ));
    for (let batchIndex = 0; batchIndex < batch.length; batchIndex += 1) {
      const summary = batch[batchIndex];
      const detail = details[batchIndex].data;
      detailSources.push(details[batchIndex].source);
      binSources.push(bins[batchIndex].source);
      const binRecord = findCharacterRecord(bins[batchIndex].data);
      const binObject = bins[batchIndex].data as Record<string, any>;
      const binSpells = (binRecord?.spellNames ?? []).map((spellName: string) => {
        const spellKey = Object.keys(binObject).find((key) => key.endsWith(`/Spells/${spellName}`));
        return spellKey ? binObject[spellKey]?.mSpell : null;
      });
      const ddragon = ddragonChampions.data.data?.[summary.alias] ??
        Object.values(ddragonChampions.data.data ?? {}).find((candidate: any) => Number(candidate.key) === summary.id);
      if (!ddragon && !binRecord) {
        const entries = Object.entries(bins[batchIndex].data);
        const rootEntry = entries.find(([key]) => /CharacterRecords\/Root/i.test(key));
        throw new Error(`Missing base stats for ${summary.name}; BIN root keys: ${JSON.stringify(rootEntry?.[1] ? Object.keys(rootEntry[1] as object).slice(0, 40) : entries.slice(0, 5).map(([key]) => key))}`);
      }
      const binStats = binRecord ? normalizeBinStats(binRecord) : null;
      const riotStats = ddragon ? normalizeStats(ddragon.stats) : null;
      const resolvedStats = binStats && riotStats
        ? { ...binStats, mana: riotStats.mana, manaPerLevel: riotStats.manaPerLevel, magicResistPerLevel: riotStats.magicResistPerLevel }
        : binStats ?? riotStats;
      const normalizedSpells = (detail.spells ?? []).map((spell: any, spellIndex: number) => normalizeSpell(spell, binSpells[spellIndex]));
      const explicitOverrides = new Set(["Poppy:Q", "Poppy:E", "Poppy:R", "Taric:E", "DrMundo:Q", "Garen:R", "Ornn:W"]);
      for (const spell of normalizedSpells) {
        if (explicitOverrides.has(`${summary.alias}:${spell.key}`)) {
          spell.classification = "modeled";
          spell.coverageNote = "An explicit live-patch duel module resolves this champion-specific damage packet.";
        }
      }
      const champion = {
        id: summary.id,
        alias: summary.alias,
        name: summary.name,
        title: detail.title ?? summary.description,
        roles: summary.roles ?? detail.roles ?? [],
        icon: assetUrl(summary.squarePortraitPath),
        stats: resolvedStats,
        passive: detail.passive
          ? { name: detail.passive.name, description: cleanHtml(detail.passive.description), icon: assetUrl(detail.passive.abilityIconPath) }
          : null,
        spells: normalizedSpells,
      };
      if (!champion.spells.length) throw new Error(`No ability definitions found for ${champion.name}`);
      champions.push(champion);
      await writeFile(path.join(championDir, `${champion.id}.json`), JSON.stringify(champion));
    }
  }

  const cdragonItems = new Map(itemsResult.data.map((item) => [String(item.id), item]));
  const itemCandidates = Object.entries<any>(ddragonItems.data.data ?? {})
    .filter(([, item]) => item.maps?.["11"] && item.gold?.purchasable && item.gold?.total > 0)
    .map(([id, item]) => {
      const cdragon = cdragonItems.get(id) as any;
      const description = cdragon?.description ?? item.description ?? "";
      return {
        id: Number(id),
        name: cdragon?.name ?? item.name,
        description: cleanHtml(description),
        ...itemTextSections(description),
        icon: cdragon ? assetUrl(cdragon.iconPath) : `${CDRAGON}/${resolvedAssetPatch}/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/${id}.png`,
        price: Number(item.gold.total),
        stats: itemStats(item.stats, description),
        classification: itemClassification(cdragon?.name ?? item.name, cleanHtml(description)),
      };
    });
  const items = [...new Map(
    itemCandidates
      .sort((left, right) => right.id - left.id)
      .map((item) => [item.name.toLocaleLowerCase("en-US"), item]),
  ).values()].sort((a, b) => a.name.localeCompare(b.name));

  const perkSlots = new Map<number, { styleId: number; styleName: string; slot: number; slotType: string }>();
  const perkStyles = Array.isArray((stylesResult.data as any).styles) ? (stylesResult.data as any).styles : stylesResult.data;
  const runeStyles = (perkStyles as any[])
    .filter((style) => Number(style.id) > 0 && style.name)
    .map((style) => ({
      id: Number(style.id),
      name: String(style.name),
      icon: assetUrl(style.iconPath),
      slots: (style.slots ?? [])
        .map((slot: any, slotIndex: number) => ({
          index: slotIndex,
          type: String(slot.type),
          runeIds: (slot.perks ?? []).map(Number),
        })),
    }));
  for (const style of perkStyles as any[]) {
    for (const [slotIndex, slot] of (style.slots ?? []).entries()) {
      for (const perkId of slot.perks ?? []) {
        if (!perkSlots.has(perkId) || slot.type === "kStatMod") {
          perkSlots.set(perkId, {
            styleId: slot.type === "kStatMod" ? 0 : Number(style.id),
            styleName: slot.type === "kStatMod" ? "Stat shard" : String(style.name),
            slot: slot.type === "kStatMod" ? slotIndex - 4 : slotIndex,
            slotType: String(slot.type),
          });
        }
      }
    }
  }
  const runes = perksResult.data
    .filter((perk) => perk.id > 0 && perk.name && perkSlots.has(perk.id))
    .map((perk) => {
      const slot = perkSlots.get(perk.id);
      return {
        id: perk.id,
        name: perk.name,
        description: cleanHtml(perk.longDesc ?? perk.shortDesc),
        icon: assetUrl(perk.iconPath),
        classification: runeClassification(perk.name),
        styleId: slot?.styleId ?? -1,
        styleName: slot?.styleName ?? "Unassigned",
        slot: slot?.slot ?? -1,
        slotType: slot?.slotType ?? "unknown",
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const sources = [
    metadataResult.source,
    versionsResult.source,
    summaryResult.source,
    itemsResult.source,
    perksResult.source,
    stylesResult.source,
    ddragonChampions.source,
    ddragonItems.source,
    ...detailSources,
    ...binSources,
  ];
  const allSpells = champions.flatMap((champion) => champion.spells.map((spell: any) => ({ champion: champion.name, ...spell })));
  const spellCoverage = allSpells.reduce((counts, spell) => {
    counts[spell.classification] = (counts[spell.classification] ?? 0) + 1;
    return counts;
  }, {} as Record<string, number>);
  const unsupportedSpells = allSpells
    .filter((spell) => spell.classification === "unsupported")
    .map((spell) => ({ champion: spell.champion, key: spell.key, name: spell.name, note: spell.coverageNote }));
  const itemCoverage = items.reduce((counts, item) => {
    counts[item.classification] = (counts[item.classification] ?? 0) + 1;
    return counts;
  }, {} as Record<string, number>);
  const runeCoverage = runes.reduce((counts, rune) => {
    counts[rune.classification] = (counts[rune.classification] ?? 0) + 1;
    return counts;
  }, {} as Record<string, number>);
  const manifest = {
    schemaVersion: SCHEMA_VERSION,
    patch,
    gameVersion: metadataResult.data.version,
    generatedAt: new Date().toISOString(),
    locale: "en_US",
    championCount: champions.length,
    itemCount: items.length,
    runeCount: runes.length,
    spellCoverage,
    unsupportedSpells,
    itemCoverage,
    runeCoverage,
    sources,
  };

  await Promise.all([
    writeFile(path.join(outputDir, "manifest.json"), JSON.stringify(manifest, null, 2)),
    writeFile(path.join(outputDir, "champions.json"), JSON.stringify(champions.map(({ id, alias, name, title, roles, icon }) => ({ id, alias, name, title, roles, icon })))),
    writeFile(path.join(outputDir, "items.json"), JSON.stringify(items)),
    writeFile(path.join(outputDir, "runes.json"), JSON.stringify(runes)),
    writeFile(path.join(outputDir, "rune-styles.json"), JSON.stringify(runeStyles)),
    writeFile(path.join(outputDir, "perk-styles.json"), JSON.stringify(stylesResult.data)),
    writeFile(path.join(process.cwd(), "public", "data", "current.json"), JSON.stringify({ schemaVersion: SCHEMA_VERSION, patch })),
  ]);
  console.log(`Damage Lab snapshot ${patch}: ${champions.length} champions, ${items.length} items, ${runes.length} runes`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
