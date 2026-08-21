/* eslint-disable @typescript-eslint/no-explicit-any */
import { createHash } from "node:crypto";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const CDRAGON = "https://raw.communitydragon.org";
let cdragonGameData =
  `${CDRAGON}/latest/plugins/rcp-be-lol-game-data/global/default/v1`;
const SCHEMA_VERSION = 2;
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
  attackDamage: ScopedRankedValues;
  abilityPower: ScopedRankedValues;
  armor: ScopedRankedValues;
  magicResist: ScopedRankedValues;
  unsupportedParts: string[];
};

type ScopedRankedValues = {
  base: number[];
  bonus: number[];
  total: number[];
};

type SerializedFormulaNode =
  | { type: "literal"; value: number }
  | { type: "ranked"; values: number[] }
  | { type: "level-interpolation"; start: number; end: number }
  | { type: "ranked-level-interpolation"; starts: number[]; ends: number[] }
  | { type: "level-table"; values: number[] }
  | { type: "level-breakpoints"; base: number; initialPerLevel: number; breakpoints: Array<{ level: number; perLevel: number }> }
  | { type: "stat"; key: string; coefficient?: number }
  | { type: "counter"; key: string; coefficient?: number }
  | { type: "sum" | "product" | "min" | "max"; nodes: SerializedFormulaNode[] }
  | { type: "clamp"; node: SerializedFormulaNode; min: number; max: number }
  | { type: "conditional"; condition: string; whenTrue: SerializedFormulaNode; whenFalse: SerializedFormulaNode };

type ParsedBinCalculation = {
  formula: SerializedFormulaNode;
  displayAsPercent: boolean;
  unresolvedParts: string[];
};

const unknownCalculationExamples = new Map<string, unknown>();

const five = (value = 0) => Array(5).fill(value) as number[];

function addRanked(left: number[], right: number[]) {
  return Array.from({ length: 5 }, (_, index) =>
    (left[index] ?? left.at(-1) ?? 0) + (right[index] ?? right.at(-1) ?? 0));
}

const scoped = (): ScopedRankedValues => ({ base: five(), bonus: five(), total: five() });

function addScoped(left: ScopedRankedValues, right: ScopedRankedValues): ScopedRankedValues {
  return {
    base: addRanked(left.base, right.base),
    bonus: addRanked(left.bonus, right.bonus),
    total: addRanked(left.total, right.total),
  };
}

function multiplyScoped(values: ScopedRankedValues, multiplier: number[]): ScopedRankedValues {
  const multiply = (ranked: number[]) => ranked.map((value, index) => value * (multiplier[index] ?? multiplier.at(-1) ?? 1));
  return { base: multiply(values.base), bonus: multiply(values.bonus), total: multiply(values.total) };
}

function rankedBinValues(values: unknown): number[] {
  if (!Array.isArray(values)) return [0, 0, 0, 0, 0];
  const numbers = values.map(Number).filter(Number.isFinite);
  if (numbers.length >= 7) return numbers.slice(1, 6);
  return numbers.slice(0, 5);
}

function addFormula(left: ResolvedBinFormula, right: ResolvedBinFormula): ResolvedBinFormula {
  return {
    baseDamage: Array.from({ length: 5 }, (_, index) => (left.baseDamage[index] ?? left.baseDamage.at(-1) ?? 0) + (right.baseDamage[index] ?? right.baseDamage.at(-1) ?? 0)),
    attackDamage: addScoped(left.attackDamage, right.attackDamage),
    abilityPower: addScoped(left.abilityPower, right.abilityPower),
    armor: addScoped(left.armor, right.armor),
    magicResist: addScoped(left.magicResist, right.magicResist),
    unsupportedParts: [...left.unsupportedParts, ...right.unsupportedParts],
  };
}

function multiplyFormula(formula: ResolvedBinFormula, multiplier: number[]): ResolvedBinFormula {
  return {
    baseDamage: formula.baseDamage.map((value, index) => value * (multiplier[index] ?? multiplier.at(-1) ?? 1)),
    attackDamage: multiplyScoped(formula.attackDamage, multiplier),
    abilityPower: multiplyScoped(formula.abilityPower, multiplier),
    armor: multiplyScoped(formula.armor, multiplier),
    magicResist: multiplyScoped(formula.magicResist, multiplier),
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
  const zero = (): ResolvedBinFormula => ({ baseDamage: five(), attackDamage: scoped(), abilityPower: scoped(), armor: scoped(), magicResist: scoped(), unsupportedParts: [] });

  const statRatio = (part: any, coefficient: number[]): ResolvedBinFormula => {
    const stat = Number(part.mStat ?? 0);
    const formula = Number(part.mStatFormula ?? 2);
    const scope = formula === 0 ? "base" : formula === 1 ? "bonus" : formula === 2 ? "total" : null;
    if (!scope) return { ...zero(), unsupportedParts: [`StatFormula:${formula}`] };
    if (stat === 2) return { ...zero(), attackDamage: { ...scoped(), [scope]: coefficient } };
    if (stat === 1) return { ...zero(), armor: { ...scoped(), [scope]: coefficient } };
    if (stat === 6) return { ...zero(), magicResist: { ...scoped(), [scope]: coefficient } };
    if (stat === 0) return { ...zero(), abilityPower: { ...scoped(), [scope]: coefficient } };
    return { ...zero(), unsupportedParts: [`ChampionStat:${stat}`] };
  };

  const resolvePart = (part: any): ResolvedBinFormula => {
    if (!part || typeof part !== "object") return zero();
    const type = String(part.__type ?? "UnknownCalculationPart");
    if (type === "NumberCalculationPart") return { ...zero(), baseDamage: Array(5).fill(Number(part.mNumber ?? 0)) };
    if (type === "NamedDataValueCalculationPart") return { ...zero(), baseDamage: dataValues.get(String(part.mDataValue).toLowerCase()) ?? [0, 0, 0, 0, 0] };
    if (type === "EffectValueCalculationPart") return { ...zero(), baseDamage: effects[Math.max(0, Number(part.mEffectIndex ?? 1) - 1)] ?? [0, 0, 0, 0, 0] };
    if (type === "StatByCoefficientCalculationPart") {
      const coefficient = five(Number(part.mCoefficient ?? 0));
      return statRatio(part, coefficient);
    }
    if (type === "StatByNamedDataValueCalculationPart") {
      const coefficient = dataValues.get(String(part.mDataValue).toLowerCase()) ?? five();
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

function parseBinCalculation(name: string, spellData: any, seen = new Set<string>()): ParsedBinCalculation | null {
  const calculations = spellData?.mSpellCalculations ?? {};
  const entry = Object.entries<any>(calculations).find(([key]) => key.toLowerCase() === name.toLowerCase());
  if (!entry || seen.has(entry[0])) return null;
  seen.add(entry[0]);
  const calculation = entry[1];
  const dataValues = new Map<string, number[]>((spellData?.DataValues ?? []).map((value: any) => [String(value.name).toLowerCase(), rankedBinValues(value.values)]));
  const effects = (spellData?.mEffectAmount ?? []).map((effect: any) => rankedBinValues(effect.value));
  const unresolvedParts: string[] = [];
  const statKey = (part: any) => {
    const stat = Number(part.mStat ?? 0);
    const statName = stat === 2 ? "attackDamage" : stat === 1 ? "armor" : stat === 6 ? "magicResist" : stat === 0 ? "abilityPower" : `unknownStat${stat}`;
    const rawFormula = Number(part.mStatFormula ?? 2);
    const scope = rawFormula === 0 ? "base" : rawFormula === 1 ? "bonus" : rawFormula === 2 ? "total" : `unknownFormula${rawFormula}`;
    if (scope.startsWith("unknown")) unresolvedParts.push(`StatFormula:${rawFormula}`);
    return `${scope}${statName.charAt(0).toUpperCase()}${statName.slice(1)}`;
  };
  const parsePart = (part: any): SerializedFormulaNode => {
    if (!part || typeof part !== "object") return { type: "literal", value: 0 };
    const type = String(part.__type ?? "UnknownCalculationPart");
    if (type === "NumberCalculationPart") return { type: "literal", value: Number(part.mNumber ?? 0) };
    if (type === "NamedDataValueCalculationPart") return { type: "ranked", values: dataValues.get(String(part.mDataValue).toLowerCase()) ?? five() };
    if (type === "EffectValueCalculationPart") return { type: "ranked", values: effects[Math.max(0, Number(part.mEffectIndex ?? 1) - 1)] ?? five() };
    if (type === "StatByCoefficientCalculationPart") return { type: "stat", key: statKey(part), coefficient: Number(part.mCoefficient ?? 0) };
    if (type === "StatByNamedDataValueCalculationPart") {
      return { type: "product", nodes: [
        { type: "stat", key: statKey(part) },
        { type: "ranked", values: dataValues.get(String(part.mDataValue).toLowerCase()) ?? five() },
      ] };
    }
    if (type === "BuffCounterByCoefficientCalculationPart") return { type: "counter", key: String(part.mBuffName ?? part.mBuffHash ?? "buff"), coefficient: Number(part.mCoefficient ?? 0) };
    if (type === "BuffCounterByNamedDataValueCalculationPart") return { type: "product", nodes: [
      { type: "counter", key: String(part.mBuffName ?? part.mBuffHash ?? "buff") },
      { type: "ranked", values: dataValues.get(String(part.mDataValue).toLowerCase()) ?? five() },
    ] };
    if (type === "ByCharLevelInterpolationCalculationPart") return { type: "level-interpolation", start: Number(part.mStartValue ?? 0), end: Number(part.mEndValue ?? 0) };
    if (type === "ByCharLevelFormulaCalculationPart") return { type: "level-table", values: Array.isArray(part.mValues) ? part.mValues.map(Number) : [] };
    if (type === "ByCharLevelBreakpointsCalculationPart") {
      const initialEntry = Object.entries(part).find(([key, value]) => !["mLevel1Value", "mBreakpoints", "__type"].includes(key) && typeof value === "number");
      const breakpoints = (Array.isArray(part.mBreakpoints) ? part.mBreakpoints : []).flatMap((breakpoint: any) => {
        const perLevelEntry = Object.entries(breakpoint).find(([key, value]) => !["mLevel", "__type"].includes(key) && typeof value === "number");
        return typeof breakpoint.mLevel === "number" && perLevelEntry ? [{ level: Number(breakpoint.mLevel), perLevel: Number(perLevelEntry[1]) }] : [];
      });
      return { type: "level-breakpoints", base: Number(part.mLevel1Value ?? 0), initialPerLevel: Number(initialEntry?.[1] ?? 0), breakpoints };
    }
    if (type === "AbilityResourceByCoefficientCalculationPart") {
      const resource = Number(part.mAbilityResource ?? 0);
      const formula = Number(part.mStatFormula ?? 2);
      return { type: "stat", key: `resource${resource}Formula${formula}`, coefficient: Number(part.mCoefficient ?? 0) };
    }
    if (type === "CooldownMultiplierCalculationPart") return { type: "stat", key: "cooldownMultiplier" };
    if (type === "ClampSubPartsCalculationPart") {
      const nodes = (Array.isArray(part.mSubparts) ? part.mSubparts : []).map(parsePart);
      const node: SerializedFormulaNode = nodes.length === 0 ? { type: "literal", value: 0 } : nodes.length === 1 ? nodes[0] : { type: "sum", nodes };
      return { type: "clamp", node, min: Number(part.mFloor ?? Number.MIN_SAFE_INTEGER), max: Number(part.mCeiling ?? Number.MAX_SAFE_INTEGER) };
    }
    if (type === "PercentageOfBuffNameElapsed") return { type: "counter", key: `buffElapsed:${String(part.buffName ?? "buff")}`, coefficient: Number(part.Coefficient ?? 1) };
    if (type === "{f3cbe7b2}" && part.mSpellCalculationKey) {
      const referenced = parseBinCalculation(String(part.mSpellCalculationKey), spellData, new Set(seen));
      if (referenced) {
        unresolvedParts.push(...referenced.unresolvedParts);
        return referenced.formula;
      }
    }
    if (type === "{ee18a47b}") {
      const names = Object.values(part).filter((value): value is string => typeof value === "string" && value !== type);
      const starts = dataValues.get(String(names[0] ?? "").toLowerCase());
      const ends = dataValues.get(String(names[1] ?? "").toLowerCase());
      if (starts && ends) return { type: "ranked-level-interpolation", starts, ends };
    }
    const children = part.mSubparts ?? part.mSubParts ?? part.mFormulaParts;
    if (type === "ProductOfSubPartsCalculationPart") {
      const nodes = [part.mPart1, part.mPart2].filter(Boolean).map(parsePart);
      return nodes.length ? { type: "product", nodes } : { type: "literal", value: 0 };
    }
    if (type === "SumOfSubPartsCalculationPart" && Array.isArray(children)) return { type: "sum", nodes: children.map(parsePart) };
    if (type === "StatBySubPartCalculationPart") return { type: "product", nodes: [{ type: "stat", key: statKey(part) }, parsePart(part.mSubpart ?? part.mSubPart)] };
    if (type === "ClampBySubpartCalculationPart") return {
      type: "clamp",
      node: parsePart(part.mSubpart ?? part.mSubPart),
      min: Number(part.mFloor ?? part.mMin ?? Number.MIN_SAFE_INTEGER),
      max: Number(part.mCeiling ?? part.mMax ?? Number.MAX_SAFE_INTEGER),
    };
    unresolvedParts.push(type);
    if (!unknownCalculationExamples.has(type)) unknownCalculationExamples.set(type, part);
    return { type: "literal", value: 0 };
  };

  if (calculation.__type === "GameCalculationModified" && calculation.mModifiedGameCalculation) {
    const base = parseBinCalculation(String(calculation.mModifiedGameCalculation), spellData, seen);
    if (!base) return null;
    const multiplier = parsePart(calculation.mMultiplier);
    return { formula: { type: "product", nodes: [base.formula, multiplier] }, displayAsPercent: Boolean(calculation.mDisplayAsPercent), unresolvedParts: [...base.unresolvedParts, ...unresolvedParts] };
  }
  if (calculation.__type === "GameCalculationConditional") {
    const whenTrueName = calculation.mConditionalGameCalculation ?? calculation.mDefaultGameCalculation;
    const whenFalseName = calculation.mDefaultGameCalculation ?? calculation.mConditionalGameCalculation;
    const whenTrue = whenTrueName ? parseBinCalculation(String(whenTrueName), spellData, new Set(seen)) : null;
    const whenFalse = whenFalseName ? parseBinCalculation(String(whenFalseName), spellData, new Set(seen)) : null;
    if (!whenTrue || !whenFalse) return null;
    return {
      formula: { type: "conditional", condition: String(calculation.mConditionalGameCalculation ?? name), whenTrue: whenTrue.formula, whenFalse: whenFalse.formula },
      displayAsPercent: Boolean(calculation.mDisplayAsPercent),
      unresolvedParts: [...whenTrue.unresolvedParts, ...whenFalse.unresolvedParts, ...unresolvedParts],
    };
  }
  return {
    formula: { type: "sum", nodes: (calculation.mFormulaParts ?? []).map(parsePart) },
    displayAsPercent: Boolean(calculation.mDisplayAsPercent),
    unresolvedParts,
  };
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
  const parsedPrimaryCalculation = calculationName ? parseBinCalculation(calculationName, binSpellData) : null;
  const values = resolved?.baseDamage.some((value) => value > 0) ? resolved.baseDamage : fallbackValues;
  const attackDamage = resolved?.attackDamage ?? { ...scoped(), total: five(type === "physical" ? fallbackCoefficient : 0) };
  const abilityPower = resolved?.abilityPower ?? { ...scoped(), total: five(type === "magic" ? fallbackCoefficient : 0) };
  const armor = resolved?.armor ?? scoped();
  const magicResist = resolved?.magicResist ?? scoped();
  const ratioAD = attackDamage.total[0] ?? 0;
  const ratioAP = abilityPower.total[0] ?? 0;
  const ratioArmor = armor.total[0] ?? 0;
  const ratioMagicResist = magicResist.total[0] ?? 0;
  const allRatios = [attackDamage, abilityPower, armor, magicResist].flatMap((stat) => [stat.base, stat.bonus, stat.total]);
  const structuredDamage = Boolean(parsedPrimaryCalculation && parsedPrimaryCalculation.unresolvedParts.length === 0);
  const resolvedDamage = Boolean(type) && (values.some((value) => value > 0) || allRatios.some((ranked) => ranked.some((value) => value > 0)) || structuredDamage);
  const hasDamageTag = Boolean(type);
  const unsupported = hasDamageTag && !resolvedDamage;
  const calculationEntries = Object.keys(binSpellData?.mSpellCalculations ?? {})
    .map((name) => [name, parseBinCalculation(name, binSpellData)] as const)
    .filter((entry): entry is readonly [string, ParsedBinCalculation] => Boolean(entry[1]));
  const combatRelevantNonDamage = /attack damage|ability power|armor|magic resist|shield|damage reduction|increased damage|takes? .*damage|cooldown/i.test(cleanHtml(spell.dynamicDescription ?? spell.description));
  const scalings = (Object.entries({ attackDamage, abilityPower, armor, magicResist }) as Array<["attackDamage" | "abilityPower" | "armor" | "magicResist", ScopedRankedValues]>)
    .flatMap(([stat, scopes]) => (Object.entries(scopes) as Array<["base" | "bonus" | "total", number[]]>)
      .filter(([, ranked]) => ranked.some(Boolean))
      .map(([scope, ranked]) => ({ stat, scope, values: ranked })));
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
    classification: resolvedDamage ? "partial" : unsupported || combatRelevantNonDamage ? "unsupported" : "out-of-scope",
    coverageNote: resolvedDamage
      ? `CommunityDragon calculation ${calculationName ?? "fallback effect values"} was preserved. ${parsedPrimaryCalculation?.unresolvedParts.length ? `Unresolved parts: ${[...new Set(parsedPrimaryCalculation.unresolvedParts)].join(", ")}.` : "Stateful and alternate effects require an explicit module."}`
      : unsupported
        ? "The tooltip identifies damage, but the current BIN calculation structure could not be reduced safely."
        : combatRelevantNonDamage
          ? "This cast changes combat state, but no complete state module is registered yet."
          : "This cast has no damage-calculation effect in the current one-on-one scope.",
    castable: true,
    scalings,
    calculations: Object.fromEntries(calculationEntries),
    primaryCalculation: calculationName ?? undefined,
    effects: resolvedDamage ? [{
      id: `${String(spell.spellKey ?? "spell").toLowerCase()}-primary`,
      label: "Primary Damage",
      kind: "direct-damage",
      coverage: "partial",
      description: "The primary CommunityDragon calculation is available. Additional stateful behavior may still require a module.",
      damageType: type,
      formula: parsedPrimaryCalculation?.formula,
    }] : [],
  };
}

function applyChampionSpellModule(alias: string, spell: any) {
  const key = `${alias}:${spell.key}`;
  const modeled = (effects: any[], actionParameters: any[] = []) => {
    spell.classification = "modeled";
    spell.coverageNote = "A live-patch state module resolves every damage-relevant effect listed below.";
    spell.effects = effects;
    spell.actionParameters = actionParameters;
  };

  if (key === "Vayne:Q") {
    spell.baseDamage = five();
    spell.ratioAD = 0.75;
    spell.ratioAP = 0.5;
    spell.scalings = [
      { stat: "attackDamage", scope: "total", values: [0.75, 0.85, 0.95, 1.05, 1.15] },
      { stat: "abilityPower", scope: "total", values: five(0.5) },
    ];
    modeled([{
      id: "vayne-q-tumble",
      label: "Empowered Next Attack",
      kind: "next-attack",
      coverage: "modeled",
      description: "For 3 seconds, the next basic attack adds physical damage and consumes the buff.",
      damageType: "physical",
      formulaLabel: "75 / 85 / 95 / 105 / 115% total AD + 50% AP",
      formula: { type: "sum", nodes: [
        { type: "product", nodes: [{ type: "ranked", values: [0.75, 0.85, 0.95, 1.05, 1.15] }, { type: "stat", key: "totalAttackDamage" }] },
        { type: "product", nodes: [{ type: "ranked", values: five(0.5) }, { type: "stat", key: "totalAbilityPower" }] },
      ] },
    }]);
  } else if (key === "Vayne:W") {
    spell.baseDamage = five();
    spell.ratioAD = 0;
    spell.ratioAP = 0;
    spell.scalings = [];
    spell.castable = false;
    modeled([{
      id: "vayne-w-silver-bolts",
      label: "Silver Bolts Third Hit",
      kind: "passive-proc",
      coverage: "modeled",
      description: "Basic attacks and Condemn add a 3.5 second stack. The third stack deals maximum-health true damage with a rank-based minimum.",
      damageType: "true",
      formulaLabel: "max(6 / 7 / 8 / 9 / 10% target max health, 50 / 65 / 80 / 95 / 110)",
      formula: { type: "max", nodes: [
        { type: "product", nodes: [{ type: "ranked", values: [0.06, 0.07, 0.08, 0.09, 0.1] }, { type: "target-stat", key: "maxHealth" }] },
        { type: "ranked", values: [50, 65, 80, 95, 110] },
      ] },
    }]);
  } else if (key === "Vayne:E") {
    spell.ratioAD = 0.5;
    spell.scalings = [{ stat: "attackDamage", scope: "bonus", values: five(0.5) }];
    modeled([{
      id: "vayne-e-condemn",
      label: "Condemn",
      kind: "direct-damage",
      coverage: "modeled",
      description: "Deals physical damage and applies one Silver Bolts stack. Terrain collision adds a separate 150% bonus packet.",
      damageType: "physical",
      formulaLabel: "50 / 85 / 120 / 155 / 190 + 50% bonus AD, multiplied by 2.5 on terrain collision",
    }], [{ id: "wallCollision", type: "boolean", label: "Hits Terrain", defaultValue: false }]);
  } else if (key === "Vayne:R") {
    spell.damageType = null;
    spell.baseDamage = five();
    spell.ratioAD = 0;
    spell.ratioAP = 0;
    spell.scalings = [];
    modeled([
      { id: "vayne-r-final-hour", label: "Final Hour", kind: "stat-buff", coverage: "modeled", description: "Grants 35 / 50 / 65 bonus attack damage for 8 / 10 / 12 seconds.", formulaLabel: "+35 / 50 / 65 attack damage" },
      { id: "vayne-r-tumble-cooldown", label: "Tumble Cooldown", kind: "cooldown-modifier", coverage: "modeled", description: "Reduces Tumble cooldown by 30 / 40 / 50% while Final Hour is active.", formulaLabel: "30 / 40 / 50% cooldown reduction" },
      { id: "vayne-r-utility", label: "Movement And Invisibility", kind: "utility", coverage: "out-of-scope", description: "Movement speed and invisibility do not change the supported damage result." },
    ]);
  } else if (key === "Olaf:R") {
    spell.damageType = null;
    spell.baseDamage = five();
    spell.ratioAD = 0;
    spell.ratioAP = 0;
    spell.scalings = [];
    modeled([
      { id: "olaf-r-passive", label: "Ragnarok Passive", kind: "stat-buff", coverage: "modeled", description: "Always grants 10 / 15 / 20 armor and magic resistance.", formulaLabel: "+10 / 15 / 20 armor and magic resistance" },
      { id: "olaf-r-active", label: "Ragnarok Active", kind: "stat-buff", coverage: "modeled", description: "For 3 seconds, grants 10 / 20 / 30 plus 25% total attack damage. Basic attacks and Reckless Swing extend the duration by 2.5 seconds.", formulaLabel: "+10 / 20 / 30 + 25% total AD" },
      { id: "olaf-r-utility", label: "Crowd Control And Movement", kind: "utility", coverage: "out-of-scope", description: "Crowd-control immunity and movement speed do not change the supported damage result." },
    ]);
  } else if (key === "Jax:W") {
    spell.damageType = "magic";
    spell.baseDamage = five();
    spell.ratioAD = 0;
    spell.ratioAP = 0;
    spell.scalings = [];
    modeled([
      {
        id: "jax-w-empower",
        label: "Empowered Attack",
        kind: "next-attack",
        coverage: "modeled",
        description: "For 10 seconds, the next successful basic attack or Leap Strike adds magic damage and consumes the buff.",
        damageType: "magic",
        formulaLabel: "50 / 85 / 120 / 155 / 190 + 60% AP",
        formula: { type: "sum", nodes: [
          { type: "ranked", values: [50, 85, 120, 155, 190] },
          { type: "stat", key: "totalAbilityPower", coefficient: 0.6 },
        ] },
      },
      { id: "jax-w-utility", label: "Attack Reset And Range", kind: "utility", coverage: "out-of-scope", description: "The attack reset and bonus range do not change a manually timed damage result." },
    ]);
  } else if (key === "Darius:W") {
    spell.damageType = "physical";
    spell.baseDamage = five();
    spell.ratioAD = 0;
    spell.ratioAP = 0;
    spell.scalings = [];
    modeled([
      {
        id: "darius-w-crippling-strike",
        label: "Crippling Strike",
        kind: "next-attack",
        coverage: "modeled",
        description: "For 4 seconds, the next successful basic attack deals rank-scaled total attack damage. Its bonus damage uses the attack's critical modifier.",
        damageType: "physical",
        formulaLabel: "+40 / 45 / 50 / 55 / 60% total AD, for 140 / 145 / 150 / 155 / 160% total AD before critical modifiers",
        formula: { type: "product", nodes: [
          { type: "ranked", values: [0.4, 0.45, 0.5, 0.55, 0.6] },
          { type: "stat", key: "totalAttackDamage" },
        ] },
      },
      { id: "darius-w-utility", label: "Slow And Kill Refund", kind: "utility", coverage: "out-of-scope", description: "The slow and post-kill mana and cooldown refund do not change the supported damage result against the same target." },
    ]);
  } else if (key === "Garen:Q") {
    spell.damageType = "physical";
    spell.baseDamage = five();
    spell.ratioAD = 0;
    spell.ratioAP = 0;
    spell.scalings = [];
    modeled([
      {
        id: "garen-q-decisive-strike",
        label: "Decisive Strike",
        kind: "next-attack",
        coverage: "modeled",
        description: "For 4.5 seconds, the next successful basic attack adds physical damage and consumes the buff. The bonus packet does not critically strike.",
        damageType: "physical",
        formulaLabel: "30 / 60 / 90 / 120 / 150 + 50% total AD",
        formula: { type: "sum", nodes: [
          { type: "ranked", values: [30, 60, 90, 120, 150] },
          { type: "stat", key: "totalAttackDamage", coefficient: 0.5 },
        ] },
      },
      { id: "garen-q-utility", label: "Movement And Silence", kind: "utility", coverage: "out-of-scope", description: "Slow cleansing, movement speed, the attack reset, and silence do not change a manually timed damage result." },
    ]);
  } else if (key === "Blitzcrank:E") {
    spell.damageType = "physical";
    spell.baseDamage = five();
    spell.ratioAD = 0;
    spell.ratioAP = 0;
    spell.scalings = [];
    modeled([
      {
        id: "blitzcrank-e-power-fist",
        label: "Power Fist",
        kind: "next-attack",
        coverage: "modeled",
        description: "For 5 seconds, the next successful basic attack adds physical damage and consumes the buff.",
        damageType: "physical",
        formulaLabel: "+100% total AD + 25% AP; the basic attack's separate 100% total AD can critically strike",
        formula: { type: "sum", nodes: [
          { type: "stat", key: "totalAttackDamage" },
          { type: "stat", key: "totalAbilityPower", coefficient: 0.25 },
        ] },
      },
      { id: "blitzcrank-e-cooldown", label: "Cooldown Timing", kind: "cooldown-modifier", coverage: "modeled", description: "The cooldown begins when Power Fist is consumed or when its 5-second armed state expires." },
      { id: "blitzcrank-e-utility", label: "Knockup And Attack Reset", kind: "utility", coverage: "out-of-scope", description: "The knockup and attack reset do not change a manually timed damage result." },
    ]);
  } else if (key === "Leona:Q") {
    spell.damageType = "magic";
    spell.baseDamage = five();
    spell.ratioAD = 0;
    spell.ratioAP = 0;
    spell.scalings = [];
    modeled([
      {
        id: "leona-q-shield-of-daybreak",
        label: "Shield Of Daybreak",
        kind: "next-attack",
        coverage: "modeled",
        description: "For 6 seconds, the next successful basic attack adds magic damage and consumes the buff. The bonus packet does not critically strike.",
        damageType: "magic",
        formulaLabel: "10 / 35 / 60 / 85 / 110 + 30% AP",
        formula: { type: "sum", nodes: [
          { type: "ranked", values: [10, 35, 60, 85, 110] },
          { type: "stat", key: "totalAbilityPower", coefficient: 0.3 },
        ] },
      },
      { id: "leona-q-utility", label: "Stun And Attack Reset", kind: "utility", coverage: "out-of-scope", description: "The stun, bonus range, and attack reset do not change a manually timed damage result. Sunlight needs an ally to detonate and is outside one-on-one scope." },
    ]);
  } else if (key === "Poppy:Q") {
    modeled(spell.effects ?? [], [{ id: "hitCount", type: "number", label: "Hits", defaultValue: 1, min: 1, max: 2, step: 1 }]);
  } else if (key === "Poppy:E") {
    modeled(spell.effects ?? [], [{ id: "wallCollision", type: "boolean", label: "Hits Terrain", defaultValue: false }]);
  } else if (key === "Poppy:R") {
    modeled(spell.effects ?? [], [{ id: "chargePercent", type: "number", label: "Charge", defaultValue: 0, min: 0, max: 100, step: 5 }]);
  } else if (["Taric:E", "DrMundo:Q", "Garen:R", "Ornn:W"].includes(key)) {
    modeled(spell.effects ?? []);
  }
  return spell;
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
  const modeled = new Set(["Press the Attack", "Electrocute", "Scorch", "Coup de Grace", "Conqueror"]);
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
  if (irrelevant.has(name)) return "out-of-scope";
  return "unsupported";
}

function runeCoverageNote(name: string, classification: string) {
  if (name === "Conqueror") return "Melee and ranged stacks, five-second expiry, the 12-stack cap, and adaptive AD or AP are modeled. Full-stack healing is outside the current healing scope.";
  if (classification === "modeled") return "A reviewed engine hook applies this perk's damage-affecting behavior.";
  if (classification === "stat-only") return "The structured stat is applied during combatant stat setup and requires no separate proc.";
  if (classification === "out-of-scope") return "The reviewed effect changes healing, movement, economy, vision, resources, or crowd control without changing the supported damage result.";
  return "The perk can change a supported combat result, but a complete reviewed effect module is not registered yet.";
}

function itemClassification(name: string, description: string) {
  if (/Sheen|Trinity Force|Lich Bane|Iceborn Gauntlet|Blade of The Ruined King|Nashor's Tooth|Abyssal Mask/i.test(name)) return "modeled";
  if (/\bdeal(?:s|ing)?\b|on-hit|spellblade|burn|wound|shield|detonat|explode|immolate|lifeline|stasis|invulnerab|reduce incoming|damage reduction|take(?:s)?\s+\d+(?:\.\d+)?%\s+more\s+(?:physical|magic|true|adaptive)?\s*damage|amplif(?:y|ies)|increased?\s+(?:physical|magic|true|adaptive)?\s*damage/i.test(description)) return "unsupported";
  return "stat-only";
}

function itemCoverageNote(name: string, classification: string) {
  if (name === "Abyssal Mask") return "Unmake applies 12% increased incoming magic damage when the Within 700 Range condition is enabled.";
  if (classification === "modeled") return "A reviewed engine hook applies this item's one-on-one damage effect in addition to its structured stats.";
  if (classification === "stat-only") return "Only the structured item stats affect the current one-on-one damage result.";
  return "The description contains a damage, mitigation, shield, or proc effect that still needs a complete reviewed module.";
}

function assertFiniteNumbers(value: unknown, location = "snapshot") {
  if (typeof value === "number" && !Number.isFinite(value)) throw new Error(`${location} contains a non-finite number.`);
  if (Array.isArray(value)) value.forEach((entry, index) => assertFiniteNumbers(entry, `${location}[${index}]`));
  else if (value && typeof value === "object") {
    for (const [key, entry] of Object.entries(value)) assertFiniteNumbers(entry, `${location}.${key}`);
  }
}

function validateSnapshot(champions: any[], items: any[], runes: any[]) {
  const spells = champions.flatMap((champion) => champion.spells.map((spell: any) => ({ champion: champion.name, ...spell })));
  const legacy = spells.filter((spell) => spell.classification === "estimated" || spell.classification === "non-damaging");
  if (legacy.length) throw new Error(`Legacy ability coverage states remain: ${legacy.map((spell) => `${spell.champion} ${spell.key}`).join(", ")}`);
  const missingSpellReasons = spells.filter((spell) => !spell.coverageNote);
  if (missingSpellReasons.length) throw new Error(`Ability coverage reasons are missing for ${missingSpellReasons.length} spells.`);
  if (items.some((item) => !item.coverageNote) || runes.some((rune) => !rune.coverageNote)) throw new Error("Every item and rune classification must include a reviewed reason.");
  const malformedScalings = spells.flatMap((spell) => spell.scalings ?? []).filter((scaling: any) => !Array.isArray(scaling.values) || scaling.values.length < 5 || scaling.values.some((value: number) => !Number.isFinite(value)));
  if (malformedScalings.length) throw new Error("A spell scaling was flattened or contains a non-finite rank value.");
  const vayne = champions.find((champion) => champion.alias === "Vayne");
  const vayneQ = vayne?.spells.find((spell: any) => spell.key === "Q");
  const vayneW = vayne?.spells.find((spell: any) => spell.key === "W");
  if (vayneQ?.scalings?.find((scaling: any) => scaling.stat === "attackDamage")?.values?.[4] !== 1.15) throw new Error("Vayne Tumble rank-five scaling was not preserved.");
  if (vayneQ?.baseDamage?.some(Boolean) || vayneW?.castable !== false) throw new Error("A stateful Vayne effect was represented as immediate cast damage.");
  const empoweredAttackKeys = ["Jax:W", "Darius:W", "Garen:Q", "Blitzcrank:E", "Leona:Q"];
  const malformedEmpoweredAttacks = champions.flatMap((champion) => champion.spells
    .filter((spell: any) => empoweredAttackKeys.includes(`${champion.alias}:${spell.key}`))
    .filter((spell: any) => spell.classification !== "modeled" || spell.baseDamage.some(Boolean) || !spell.effects.some((effect: any) => effect.kind === "next-attack" && effect.formula))
    .map((spell: any) => `${champion.alias}:${spell.key}`));
  if (malformedEmpoweredAttacks.length) throw new Error(`Empowered attacks must be modeled as structured next-attack state: ${malformedEmpoweredAttacks.join(", ")}`);
  if (items.find((item) => item.name === "Abyssal Mask")?.classification !== "modeled") throw new Error("Abyssal Mask must remain modeled.");
  if (runes.find((rune) => rune.name === "Conqueror")?.classification !== "modeled") throw new Error("Conqueror must remain modeled.");
  assertFiniteNumbers({ champions, items, runes });
}

async function main() {
  const metadataResult = await getJson<{ version: string }>(`${CDRAGON}/latest/compat-version-metadata.json`);
  const patchMatch = metadataResult.data.version.match(/releases-(\d+)-(\d+)/);
  if (!patchMatch) throw new Error(`Unable to resolve a numbered patch from ${metadataResult.data.version}`);
  const patch = `${Number(patchMatch[1])}.${Number(patchMatch[2])}`;
  resolvedAssetPatch = patch;
  cdragonGameData = `${CDRAGON}/${patch}/plugins/rcp-be-lol-game-data/global/default/v1`;
  const versionsResult = await getJson<string[]>("https://ddragon.leagueoflegends.com/api/versions.json");
  const ddragonPatch = versionsResult.data.find((version) => version.startsWith(`${patch}.`)) ?? versionsResult.data[0];
  const outputDir = path.join(process.cwd(), "public", "data", patch);
  const championDir = path.join(outputDir, "champions");
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(championDir, { recursive: true });

  const [summaryResult, itemsResult, perksResult, stylesResult, ddragonChampions, ddragonItems, itemBinResult, perkBinResult, stringsResult] = await Promise.all([
    getJson<any[]>(`${cdragonGameData}/champion-summary.json`),
    getJson<any[]>(`${cdragonGameData}/items.json`),
    getJson<any[]>(`${cdragonGameData}/perks.json`),
    getJson<any[]>(`${cdragonGameData}/perkstyles.json`),
    getJson<any>(`https://ddragon.leagueoflegends.com/cdn/${ddragonPatch}/data/en_US/champion.json`),
    getJson<any>(`https://ddragon.leagueoflegends.com/cdn/${ddragonPatch}/data/en_US/item.json`),
    getJson<any>(`${CDRAGON}/${patch}/game/items.cdtb.bin.json`),
    getJson<any>(`${CDRAGON}/${patch}/game/perks.cdtb.bin.json`),
    getJson<any>(`${CDRAGON}/${patch}/game/en_us/data/menu/en_us/lol.stringtable.json`),
  ]);

  const summaries = summaryResult.data.filter((champion) => champion.id > 0 && champion.id < 1000 && champion.name);
  const champions: any[] = [];
  const detailSources: SourceRecord[] = [];
  const binSources: SourceRecord[] = [];
  for (let index = 0; index < summaries.length; index += 10) {
    const batch = summaries.slice(index, index + 10);
    const details = await Promise.all(batch.map((champion) => getJson<any>(`${cdragonGameData}/champions/${champion.id}.json`)));
    const bins = await Promise.all(batch.map((champion) =>
      getJson<any>(`${CDRAGON}/${patch}/game/data/characters/${String(champion.alias).toLowerCase()}/${String(champion.alias).toLowerCase()}.bin.json`)
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
      const normalizedSpells = (detail.spells ?? []).map((spell: any, spellIndex: number) =>
        applyChampionSpellModule(String(summary.alias), normalizeSpell(spell, binSpells[spellIndex])));
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
      const name = cdragon?.name ?? item.name;
      const cleanedDescription = cleanHtml(description);
      const classification = itemClassification(name, cleanedDescription);
      return {
        id: Number(id),
        name,
        description: cleanedDescription,
        ...itemTextSections(description),
        icon: cdragon ? assetUrl(cdragon.iconPath) : `${CDRAGON}/${resolvedAssetPatch}/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/${id}.png`,
        price: Number(item.gold.total),
        stats: itemStats(item.stats, description),
        classification,
        coverageNote: itemCoverageNote(name, classification),
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
      const classification = runeClassification(perk.name);
      return {
        id: perk.id,
        name: perk.name,
        description: cleanHtml(perk.longDesc ?? perk.shortDesc),
        icon: assetUrl(perk.iconPath),
        classification,
        coverageNote: runeCoverageNote(perk.name, classification),
        styleId: slot?.styleId ?? -1,
        styleName: slot?.styleName ?? "Unassigned",
        slot: slot?.slot ?? -1,
        slotType: slot?.slotType ?? "unknown",
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  validateSnapshot(champions, items, runes);

  const sources = [
    metadataResult.source,
    versionsResult.source,
    summaryResult.source,
    itemsResult.source,
    perksResult.source,
    stylesResult.source,
    ddragonChampions.source,
    ddragonItems.source,
    itemBinResult.source,
    perkBinResult.source,
    stringsResult.source,
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
  const unknownCalculationParts = allSpells
    .flatMap((spell) => Object.values<any>(spell.calculations ?? {}).flatMap((calculation) => calculation.unresolvedParts ?? []))
    .reduce((counts, part) => {
      counts[part] = (counts[part] ?? 0) + 1;
      return counts;
    }, {} as Record<string, number>);
  const unknownPrimaryCalculationParts = allSpells
    .flatMap((spell) => spell.primaryCalculation ? (spell.calculations?.[spell.primaryCalculation]?.unresolvedParts ?? []) : [])
    .reduce((counts, part) => {
      counts[part] = (counts[part] ?? 0) + 1;
      return counts;
    }, {} as Record<string, number>);
  if (Object.keys(unknownPrimaryCalculationParts).length) {
    throw new Error(`Unknown calculation structures affect primary combat results: ${Object.keys(unknownPrimaryCalculationParts).join(", ")}`);
  }
  const localizedStringData = (stringsResult.data as any).entries ?? (stringsResult.data as any).strings ?? stringsResult.data;
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
    unknownCalculationParts,
    unknownPrimaryCalculationParts,
    unknownCalculationExamples: Object.fromEntries(unknownCalculationExamples),
    binInspection: {
      itemEntryCount: Object.keys(itemBinResult.data).length,
      perkEntryCount: Object.keys(perkBinResult.data).length,
      localizedStringCount: Object.keys(localizedStringData ?? {}).length,
    },
    validation: {
      finiteNumbers: true,
      rankArraysPreserved: true,
      legacyEstimatedStates: 0,
      reviewedCoverageReasons: true,
      unknownRequiredCalculationParts: 0,
    },
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
