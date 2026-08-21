import {
  addDamage,
  damageVector,
  emptyDamage,
  type ChampionDefinition,
  type DamageType,
  type DamageVector,
  type ItemDefinition,
  type ResolvedStats,
  type RuneDefinition,
  type ScenarioV1,
  type SimulationResult,
  type SpellDefinition,
  type StepTrigger,
} from "./model";
import { mitigateDamage } from "./mitigation";
import { validateScenario } from "./scenario";
import { resolveStats } from "./stats";
import {
  championEffectModule,
  empoweredAttackDuration,
  isEmpoweredAttackModule,
  itemEffectModule,
  perkEffectModule,
  type EmpoweredAttackModuleId,
} from "./effect-modules";
import { evaluateFormula } from "./formula";

type CombatState = {
  hitCounter: number;
  attackCounter: number;
  spellbladeReady: boolean;
  scorchReadyAt: number;
  cooldownReadyAt: Record<string, number>;
  vayneTumbleExpiresAt: number;
  vayneFinalHourExpiresAt: number;
  silverBoltsStacks: number;
  silverBoltsExpiresAt: number;
  olafRagnarokExpiresAt: number;
  conquerorStacks: number;
  conquerorExpiresAt: number;
  empoweredAttack: {
    module: EmpoweredAttackModuleId;
    spellKey: string;
    label: string;
    rank: number;
    expiresAt: number;
    cooldownDuration: number | null;
  } | null;
  scheduledPackets: Array<{
    id: string;
    executeAt: number;
    label: string;
    raw: DamageVector;
    source: StepTrigger["source"];
    note: string;
  }>;
};

const createCombatState = (): CombatState => ({
  hitCounter: 0,
  attackCounter: 0,
  spellbladeReady: false,
  scorchReadyAt: 0,
  cooldownReadyAt: {},
  vayneTumbleExpiresAt: 0,
  vayneFinalHourExpiresAt: 0,
  silverBoltsStacks: 0,
  silverBoltsExpiresAt: 0,
  olafRagnarokExpiresAt: 0,
  conquerorStacks: 0,
  conquerorExpiresAt: 0,
  empoweredAttack: null,
  scheduledPackets: [],
});

function packet(type: DamageType | null, amount: number): DamageVector {
  if (type === "physical") return damageVector(amount, 0, 0);
  if (type === "magic") return damageVector(0, amount, 0);
  if (type === "true") return damageVector(0, 0, amount);
  return emptyDamage();
}

function levelValue(start: number, end: number, level: number) {
  return start + (end - start) * ((Math.max(1, Math.min(18, level)) - 1) / 17);
}

function rankValue(values: number[], rank: number, fallback = 0) {
  if (!values.length) return fallback;
  return values[Math.max(0, Math.min(values.length - 1, rank - 1))] ?? fallback;
}

function stateTrigger(label: string, note: string, source: StepTrigger["source"] = "champion"): StepTrigger {
  return { source, label, note, kind: "state", preMitigation: emptyDamage(), postMitigation: emptyDamage() };
}

function runePageWarnings(label: string, runes: RuneDefinition[]) {
  if (!runes.length) return [];
  const warnings: string[] = [];
  const treeRunes = runes.filter((rune) => rune.styleId > 0);
  const shards = runes.filter((rune) => rune.styleId === 0);
  const keystones = treeRunes.filter((rune) => rune.slotType === "kKeyStone");
  if (keystones.length > 1) warnings.push(`${label} rune page has more than one keystone.`);
  const styleGroups = new Map<number, RuneDefinition[]>();
  for (const rune of treeRunes) styleGroups.set(rune.styleId, [...(styleGroups.get(rune.styleId) ?? []), rune]);
  if (styleGroups.size > 2) warnings.push(`${label} rune page uses more than two rune trees.`);
  const styleCounts = [...styleGroups.values()].map((group) => group.length).sort((a, b) => b - a);
  if ((styleCounts[0] ?? 0) > 4 || (styleCounts[1] ?? 0) > 2) warnings.push(`${label} rune page exceeds the four primary and two secondary perk limits.`);
  for (const group of styleGroups.values()) {
    const occupied = new Set<number>();
    for (const rune of group) {
      if (occupied.has(rune.slot)) warnings.push(`${label} rune page selects multiple perks from ${rune.styleName} row ${rune.slot + 1}.`);
      occupied.add(rune.slot);
    }
  }
  if (shards.length > 3 || new Set(shards.map((rune) => rune.slot)).size !== shards.length) warnings.push(`${label} rune page has an impossible stat shard allocation.`);
  if (runes.some((rune) => rune.styleId < 0)) warnings.push(`${label} rune page contains an unassigned perk from the patch data.`);
  return warnings;
}

function expireTimedState(state: CombatState, timestamp: number, triggers: StepTrigger[]) {
  if (state.vayneTumbleExpiresAt > 0 && timestamp >= state.vayneTumbleExpiresAt) {
    state.vayneTumbleExpiresAt = 0;
    triggers.push(stateTrigger("Tumble Expired", "The next-attack bonus expired before it was consumed."));
  }
  if (state.vayneFinalHourExpiresAt > 0 && timestamp >= state.vayneFinalHourExpiresAt) {
    state.vayneFinalHourExpiresAt = 0;
    triggers.push(stateTrigger("Final Hour Expired", "The temporary bonus attack damage and Tumble cooldown modifier ended."));
  }
  if (state.silverBoltsExpiresAt > 0 && timestamp >= state.silverBoltsExpiresAt) {
    state.silverBoltsExpiresAt = 0;
    state.silverBoltsStacks = 0;
    triggers.push(stateTrigger("Silver Bolts Expired", "The per-target stack counter reset."));
  }
  if (state.olafRagnarokExpiresAt > 0 && timestamp >= state.olafRagnarokExpiresAt) {
    state.olafRagnarokExpiresAt = 0;
    triggers.push(stateTrigger("Ragnarok Expired", "The temporary attack damage buff ended."));
  }
  if (state.conquerorExpiresAt > 0 && timestamp >= state.conquerorExpiresAt) {
    state.conquerorExpiresAt = 0;
    state.conquerorStacks = 0;
    triggers.push(stateTrigger("Conqueror Expired", "All adaptive force stacks expired.", "rune"));
  }
  if (state.empoweredAttack && timestamp >= state.empoweredAttack.expiresAt) {
    triggers.push(stateTrigger(`${state.empoweredAttack.label} Expired`, "The empowered-attack state ended before a successful attack consumed it."));
    state.empoweredAttack = null;
  }
}

function effectFormulaContext(
  attacker: ResolvedStats,
  defender: ResolvedStats,
  targetCurrentHealth: number,
  rank: number,
  championLevel: number,
) {
  return {
    spellRank: rank,
    championLevel,
    effects: {},
    named: {},
    stats: {
      baseAttackDamage: attacker.baseAttackDamage,
      bonusAttackDamage: attacker.bonusAttackDamage,
      totalAttackDamage: attacker.attackDamage,
      baseAbilityPower: 0,
      bonusAbilityPower: attacker.abilityPower,
      totalAbilityPower: attacker.abilityPower,
      baseArmor: attacker.baseArmor ?? attacker.armor,
      bonusArmor: attacker.bonusArmor ?? 0,
      totalArmor: attacker.armor,
      baseMagicResist: attacker.baseMagicResist ?? attacker.magicResist,
      bonusMagicResist: attacker.bonusMagicResist ?? 0,
      totalMagicResist: attacker.magicResist,
    },
    targetStats: {
      currentHealth: targetCurrentHealth,
      maxHealth: defender.maxHealth,
      missingHealth: Math.max(0, defender.maxHealth - targetCurrentHealth),
    },
    conditions: {},
  };
}

function consumeEmpoweredAttack(
  champion: ChampionDefinition,
  attacker: ResolvedStats,
  defender: ResolvedStats,
  targetCurrentHealth: number,
  championLevel: number,
  state: CombatState,
  triggers: StepTrigger[],
  timestamp: number,
  criticalMultiplier = 1,
) {
  const armed = state.empoweredAttack;
  if (!armed) return emptyDamage();
  const spell = champion.spells.find((candidate) => candidate.key === armed.spellKey);
  const effect = spell?.effects?.find((candidate) => candidate.kind === "next-attack" && candidate.formula && candidate.damageType);
  if (!effect?.formula || !effect.damageType) return emptyDamage();
  let amount = evaluateFormula(effect.formula, effectFormulaContext(attacker, defender, targetCurrentHealth, armed.rank, championLevel));
  if (armed.module === "darius-crippling-strike") amount *= criticalMultiplier;
  const raw = packet(effect.damageType, amount);
  if (armed.cooldownDuration !== null) {
    state.cooldownReadyAt[armed.spellKey] = timestamp + armed.cooldownDuration;
  }
  state.empoweredAttack = null;
  triggers.push({
    source: "champion",
    label: `${armed.label} - Bonus Damage`,
    kind: "damage",
    preMitigation: raw,
    postMitigation: emptyDamage(),
    note: effect.formulaLabel,
  });
  triggers.push(stateTrigger(`${armed.label} Consumed`, "The next successful qualifying hit consumed the armed state."));
  return raw;
}

function dynamicAttackerStats(
  base: ResolvedStats,
  champion: ChampionDefinition,
  ranks: Record<string, number>,
  state: CombatState,
  timestamp: number,
  level: number,
) {
  let bonusAttackDamage = base.bonusAttackDamage;
  let abilityPower = base.abilityPower;
  let adaptiveStat: "Attack Damage" | "Ability Power" | null = null;

  if (state.conquerorStacks > 0 && timestamp < state.conquerorExpiresAt) {
    const adaptiveForce = levelValue(1.8, 4, level) * state.conquerorStacks;
    if (base.abilityPower > base.bonusAttackDamage * (5 / 3)) {
      abilityPower += adaptiveForce;
      adaptiveStat = "Ability Power";
    } else {
      bonusAttackDamage += adaptiveForce * 0.6;
      adaptiveStat = "Attack Damage";
    }
  }

  let attackDamage = base.baseAttackDamage + bonusAttackDamage;
  if (championEffectModule(champion.id, "R") === "vayne-final-hour" && state.vayneFinalHourExpiresAt > timestamp) {
    bonusAttackDamage += rankValue([35, 50, 65], ranks.R ?? 1);
    attackDamage = base.baseAttackDamage + bonusAttackDamage;
  }
  if (championEffectModule(champion.id, "R") === "olaf-ragnarok" && state.olafRagnarokExpiresAt > timestamp) {
    bonusAttackDamage += rankValue([10, 20, 30], ranks.R ?? 1) + attackDamage * 0.25;
    attackDamage = base.baseAttackDamage + bonusAttackDamage;
  }

  return { ...base, attackDamage, bonusAttackDamage, abilityPower, adaptiveStat };
}

function statValue(stats: ResolvedStats, scaling: NonNullable<SpellDefinition["scalings"]>[number]) {
  if (scaling.stat === "attackDamage") {
    if (scaling.scope === "base") return stats.baseAttackDamage;
    if (scaling.scope === "bonus") return stats.bonusAttackDamage;
    return stats.attackDamage;
  }
  if (scaling.stat === "abilityPower") return scaling.scope === "base" ? 0 : stats.abilityPower;
  if (scaling.stat === "armor") {
    if (scaling.scope === "base") return stats.baseArmor ?? stats.armor;
    if (scaling.scope === "bonus") return stats.bonusArmor ?? 0;
    return stats.armor;
  }
  if (scaling.scope === "base") return stats.baseMagicResist ?? stats.magicResist;
  if (scaling.scope === "bonus") return stats.bonusMagicResist ?? 0;
  return stats.magicResist;
}

function genericAbilityDamage(
  spell: SpellDefinition,
  rank: number,
  attacker: ResolvedStats,
  defender: ResolvedStats,
  targetCurrentHealth: number,
  championLevel: number,
  hitCount: number,
  resources: Record<string, number>,
  counters: Record<string, number>,
  conditions: Record<string, boolean | number | string>,
) {
  const primaryCalculation = spell.primaryCalculation ? spell.calculations?.[spell.primaryCalculation] : undefined;
  if (primaryCalculation && primaryCalculation.unresolvedParts.length === 0) {
    const resourceStats = Object.fromEntries(Object.entries(resources).flatMap(([key, value]) => [
      [key, value],
      [`resource${key}Formula2`, value],
    ]));
    const amount = evaluateFormula(primaryCalculation.formula, {
      spellRank: rank,
      championLevel,
      effects: {},
      named: {},
      stats: {
        baseAttackDamage: attacker.baseAttackDamage,
        bonusAttackDamage: attacker.bonusAttackDamage,
        totalAttackDamage: attacker.attackDamage,
        baseAbilityPower: 0,
        bonusAbilityPower: attacker.abilityPower,
        totalAbilityPower: attacker.abilityPower,
        baseArmor: attacker.baseArmor ?? attacker.armor,
        bonusArmor: attacker.bonusArmor ?? 0,
        totalArmor: attacker.armor,
        baseMagicResist: attacker.baseMagicResist ?? attacker.magicResist,
        bonusMagicResist: attacker.bonusMagicResist ?? 0,
        totalMagicResist: attacker.magicResist,
        ...resourceStats,
      },
      targetStats: {
        currentHealth: targetCurrentHealth,
        maxHealth: defender.maxHealth,
        missingHealth: Math.max(0, defender.maxHealth - targetCurrentHealth),
      },
      counters,
      conditions: Object.fromEntries(Object.entries(conditions).map(([key, value]) => [key, Boolean(value)])),
    });
    if (Number.isFinite(amount)) {
      return { damage: packet(spell.damageType, amount * hitCount), formula: `${spell.primaryCalculation} CommunityDragon formula tree${hitCount > 1 ? ` x ${hitCount} hits` : ""}` };
    }
  }
  const base = rankValue(spell.baseDamage, rank);
  let amount = base;
  const terms: string[] = [base.toFixed(0)];
  if (spell.scalings?.length) {
    for (const scaling of spell.scalings) {
      const ratio = rankValue(scaling.values, rank);
      amount += statValue(attacker, scaling) * ratio;
      const scope = scaling.stat === "attackDamage" ? `${scaling.scope} AD` : scaling.stat === "abilityPower" ? "AP" : scaling.stat === "magicResist" ? "magic resist" : "armor";
      terms.push(`${(ratio * 100).toFixed(0)}% ${scope}`);
    }
  } else {
    amount += attacker.attackDamage * spell.ratioAD + attacker.abilityPower * spell.ratioAP + attacker.armor * spell.ratioArmor + attacker.magicResist * spell.ratioMagicResist;
    if (spell.ratioAD) terms.push(`${(spell.ratioAD * 100).toFixed(0)}% total AD`);
    if (spell.ratioAP) terms.push(`${(spell.ratioAP * 100).toFixed(0)}% AP`);
    if (spell.ratioArmor) terms.push(`${(spell.ratioArmor * 100).toFixed(0)}% armor`);
    if (spell.ratioMagicResist) terms.push(`${(spell.ratioMagicResist * 100).toFixed(0)}% magic resist`);
  }
  return { damage: packet(spell.damageType, amount * hitCount), formula: `${hitCount > 1 ? `${hitCount} x (` : ""}${terms.join(" + ")}${hitCount > 1 ? ")" : ""}` };
}

function overrideAbility(
  champion: ChampionDefinition,
  key: string,
  rank: number,
  attacker: ResolvedStats,
  defender: ResolvedStats,
  targetCurrentHealth: number,
  parameters: Record<string, boolean | number | string | undefined>,
): { damage: DamageVector; formula: string; note?: string } | null {
  const index = Math.max(0, rank - 1);
  const module = championEffectModule(champion.id, key === "Q2" ? "Q" : key);
  if (module === "poppy-hammer-shock") {
    if (key === "Q" || key === "Q2") {
      const hits = key === "Q2" ? 1 : Math.max(1, Math.min(2, Number(parameters.hitCount ?? 1)));
      const healthRatio = [0.07, 0.075, 0.08, 0.085, 0.09][index];
      const perHit = [30, 55, 80, 105, 130][index] + attacker.attackDamage * 0.75 + defender.maxHealth * healthRatio;
      return { damage: packet("physical", perHit * hits), formula: `${hits} x (${[30, 55, 80, 105, 130][index]} + 75% total AD + ${(healthRatio * 100).toFixed(1)}% target max health)`, note: key === "Q2" ? "Delayed Hammer Shock detonation connected." : hits === 2 ? "Both Hammer Shock impacts connected in this action." : "Initial Hammer Shock impact only." };
    }
  }
  if (module === "poppy-heroic-charge") {
    if (key === "E") {
      const base = [40, 60, 80, 100, 120][index] + attacker.attackDamage * 0.6;
      const multiplier = parameters.wallCollision ? 2 : 1;
      return { damage: packet("physical", base * multiplier), formula: `${multiplier} x (${[40, 60, 80, 100, 120][index]} + 60% total AD)`, note: parameters.wallCollision ? "Terrain collision damage included." : "No terrain collision." };
    }
  }
  if (module === "poppy-keepers-verdict") {
    if (key === "R") {
      const charge = Math.max(0, Math.min(1, Number(parameters.chargePercent ?? 0) / 100));
      const ultimateIndex = Math.max(0, Math.min(2, rank - 1));
      const full = [200, 300, 400][ultimateIndex] + attacker.attackDamage * 0.9;
      const multiplier = 0.5 + charge * 0.5;
      return { damage: packet("physical", full * multiplier), formula: `${Math.round(multiplier * 100)}% x (${[200, 300, 400][ultimateIndex]} + 90% total AD)`, note: `${Math.round(charge * 100)}% charge selected.` };
    }
  }
  if (module === "taric-dazzle") {
    const base = [90, 130, 170, 210, 250][index] + attacker.abilityPower * 0.5 + attacker.armor * 0.5;
    return { damage: packet("magic", base), formula: `${[90, 130, 170, 210, 250][index]} + 50% AP + 50% armor` };
  }
  if (module === "mundo-infected-bonesaw") {
    const ratio = [0.2, 0.225, 0.25, 0.275, 0.3][index];
    const minimum = [80, 130, 180, 230, 280][index];
    const amount = Math.max(minimum, targetCurrentHealth * ratio);
    return { damage: packet("magic", amount), formula: `max(${minimum}, ${(ratio * 100).toFixed(1)}% target current health)`, note: "Champion minimum damage is applied. Monster caps are outside duel scope." };
  }
  if (module === "garen-demacian-justice") {
    const ultimateIndex = Math.max(0, Math.min(2, rank - 1));
    const base = [150, 300, 450][ultimateIndex];
    const ratio = [0.25, 0.3, 0.35][ultimateIndex];
    const missingHealth = Math.max(0, defender.maxHealth - targetCurrentHealth);
    return { damage: packet("true", base + missingHealth * ratio), formula: `${base} + ${(ratio * 100).toFixed(0)}% target missing health` };
  }
  if (module === "ornn-bellows-breath") {
    const ratio = [0.12, 0.13, 0.14, 0.15, 0.16][index];
    return { damage: packet("magic", defender.maxHealth * ratio), formula: `${(ratio * 100).toFixed(0)}% target max health across the full breath`, note: "All Bellows Breath ticks are selected." };
  }
  return null;
}

function addSilverBoltsStack(
  rank: number,
  defender: ResolvedStats,
  state: CombatState,
  timestamp: number,
  triggers: StepTrigger[],
) {
  state.silverBoltsStacks += 1;
  state.silverBoltsExpiresAt = timestamp + 3.5;
  if (state.silverBoltsStacks < 3) {
    triggers.push(stateTrigger("Silver Bolts", `Stack ${state.silverBoltsStacks} of 3 gained. The stack expires after 3.5 seconds.`, "passive"));
    return emptyDamage();
  }
  state.silverBoltsStacks = 0;
  state.silverBoltsExpiresAt = 0;
  const minimum = rankValue([50, 65, 80, 95, 110], rank);
  const ratio = rankValue([0.06, 0.07, 0.08, 0.09, 0.1], rank);
  const raw = packet("true", Math.max(minimum, defender.maxHealth * ratio));
  triggers.push({
    source: "passive",
    label: "Silver Bolts - Third Hit",
    kind: "damage",
    preMitigation: raw,
    postMitigation: raw,
    note: `Consumed three stacks for max(${minimum}, ${(ratio * 100).toFixed(0)}% target maximum health) true damage.`,
  });
  return raw;
}

function applyOutgoingMultipliers(damage: DamageVector, physical: number, magic: number) {
  return damageVector(damage.physical * physical, damage.magic * magic, damage.true);
}

export function simulate(
  scenario: ScenarioV1,
  championIndex: Map<number, ChampionDefinition>,
  itemIndex: Map<number, ItemDefinition>,
  runeIndex: Map<number, RuneDefinition>,
): SimulationResult {
  const attackerChampion = championIndex.get(scenario.attacker.championId);
  const defenderChampion = championIndex.get(scenario.defender.championId);
  if (!attackerChampion || !defenderChampion) throw new Error("The selected champion data is unavailable for this patch.");
  const baseAttacker = resolveStats(scenario.attacker, attackerChampion, itemIndex, runeIndex);
  const defender = resolveStats(scenario.defender, defenderChampion, itemIndex, runeIndex);
  let health = defender.currentHealth;
  let shield = Math.max(0, scenario.defender.startingShield);
  let timestamp = 0;
  let lethalStepId: string | null = null;
  const state = createCombatState();
  const steps: SimulationResult["steps"] = [];
  const warnings = validateScenario(scenario);
  const attackerItems = scenario.attacker.itemIds.map((id) => itemIndex.get(id)).filter(Boolean) as ItemDefinition[];
  const defenderItems = scenario.defender.itemIds.map((id) => itemIndex.get(id)).filter(Boolean) as ItemDefinition[];
  const attackerRunes = [...scenario.attacker.runeIds, ...(scenario.attacker.shardIds ?? []).filter((id): id is number => typeof id === "number")]
    .map((id) => runeIndex.get(id)).filter(Boolean) as RuneDefinition[];
  const defenderRunes = [...scenario.defender.runeIds, ...(scenario.defender.shardIds ?? []).filter((id): id is number => typeof id === "number")]
    .map((id) => runeIndex.get(id)).filter(Boolean) as RuneDefinition[];
  const hasConqueror = attackerRunes.some((rune) => perkEffectModule(rune.id) === "conqueror");
  const abyssalMaskActive = attackerItems.some((item) => itemEffectModule(item.id) === "abyssal-mask-unmake") && scenario.attacker.conditions?.abyssalMaskInRange === true;
  warnings.push(...runePageWarnings("Attacker", attackerRunes), ...runePageWarnings("Target", defenderRunes));

  const resolveScheduledPackets = (until: number) => {
    const due = state.scheduledPackets.filter((scheduled) => scheduled.executeAt <= until).sort((left, right) => left.executeAt - right.executeAt);
    state.scheduledPackets = state.scheduledPackets.filter((scheduled) => scheduled.executeAt > until);
    for (const scheduled of due) {
      const scheduledAttacker = dynamicAttackerStats(baseAttacker, attackerChampion, scenario.attacker.abilityRanks, state, scheduled.executeAt, scenario.attacker.level);
      const coupActive = attackerRunes.some((rune) => rune.name === "Coup de Grace") && health / defender.maxHealth < 0.4;
      const physicalMultiplier = coupActive ? 1.08 : 1;
      const magicMultiplier = (coupActive ? 1.08 : 1) * (abyssalMaskActive ? 1.12 : 1);
      const pre = applyOutgoingMultipliers(scheduled.raw, physicalMultiplier, magicMultiplier);
      const post = mitigateDamage(pre, scheduledAttacker, defender);
      const absorbed = Math.min(shield, post.total);
      shield -= absorbed;
      const healthDamage = Math.max(0, post.total - absorbed);
      const healthBefore = health;
      health = Math.max(0, health - healthDamage);
      const overkill = Math.max(0, healthDamage - healthBefore);
      if (!lethalStepId && health <= 0 && healthDamage > 0) lethalStepId = scheduled.id;
      const stepWarnings = [
        ...(coupActive ? ["Coup de Grace increased physical and magic damage by 8% below 40% health."] : []),
        ...(abyssalMaskActive && pre.magic > 0 ? ["Abyssal Mask - Unmake increased incoming magic damage by 12% within 700 range."] : []),
      ];
      steps.push({
        id: scheduled.id,
        timestamp: scheduled.executeAt,
        label: scheduled.label,
        preMitigation: pre,
        postMitigation: post,
        shieldAbsorbed: absorbed,
        healthDamage,
        targetHealth: health,
        overkill,
        triggers: [{ source: scheduled.source, label: scheduled.label, kind: "damage", preMitigation: pre, postMitigation: post, note: scheduled.note }],
        warnings: stepWarnings,
        formula: scheduled.note,
      });
    }
  };

  for (const action of scenario.combo) {
    if (!action.enabled) continue;
    if (lethalStepId && !scenario.settings.continueAfterLethal) break;
    timestamp += Math.max(0, action.delay);
    resolveScheduledPackets(timestamp);
    if (lethalStepId && !scenario.settings.continueAfterLethal) break;
    const triggers: StepTrigger[] = [];
    const stepWarnings: string[] = [];
    expireTimedState(state, timestamp, triggers);
    const attacker = dynamicAttackerStats(baseAttacker, attackerChampion, scenario.attacker.abilityRanks, state, timestamp, scenario.attacker.level);
    let pre = emptyDamage();
    let formula = "No damage";
    let connectedAttack = false;
    let connectedDamagingAbility = false;
    let hitCountAdvanced = false;
    let attackCountAdvanced = false;
    let castSpell: SpellDefinition | undefined;

    if (action.kind === "wait") {
      formula = `Advanced combat state by ${action.delay.toFixed(2)} seconds.`;
    } else if (action.kind === "attack") {
      if (action.outcome === "miss") {
        formula = "The basic attack was explicitly selected to miss.";
      } else {
        connectedAttack = true;
        state.attackCounter += 1;
        state.hitCounter += 1;
        attackCountAdvanced = true;
        hitCountAdvanced = true;
        let attackDamage = attacker.attackDamage;
        let attackCriticalMultiplier = 1;
        if (scenario.randomnessMode === "expected") {
          attackCriticalMultiplier = 1 + (Math.max(0, Math.min(100, attacker.critChance)) / 100) * (attacker.critDamage / 100 - 1);
          attackDamage *= attackCriticalMultiplier;
          formula = `Total AD weighted by ${attacker.critChance.toFixed(1)}% critical chance.`;
        } else if (action.outcome === "crit") {
          attackCriticalMultiplier = attacker.critDamage / 100;
          attackDamage *= attackCriticalMultiplier;
          formula = `Total AD x ${attacker.critDamage.toFixed(0)}% selected critical strike.`;
        } else {
          formula = "One basic attack using current total AD.";
        }
        pre = packet("physical", attackDamage);

        if (state.empoweredAttack) {
          pre = addDamage(pre, consumeEmpoweredAttack(
            attackerChampion,
            attacker,
            defender,
            health,
            scenario.attacker.level,
            state,
            triggers,
            timestamp,
            attackCriticalMultiplier,
          ));
        }

        if (championEffectModule(attackerChampion.id, "Q") === "vayne-tumble" && state.vayneTumbleExpiresAt > timestamp) {
          const rank = Math.max(1, scenario.attacker.abilityRanks.Q ?? 1);
          const ratio = rankValue([0.75, 0.85, 0.95, 1.05, 1.15], rank);
          const raw = packet("physical", attacker.attackDamage * ratio + attacker.abilityPower * 0.5);
          pre = addDamage(pre, raw);
          triggers.push({ source: "champion", label: "Tumble - Next Attack", kind: "damage", preMitigation: raw, postMitigation: emptyDamage(), note: `${(ratio * 100).toFixed(0)}% total AD + 50% AP. The bonus portion cannot critically strike.` });
          state.vayneTumbleExpiresAt = 0;
        }

        const spellblade = attackerItems.find((item) => /Sheen|Trinity Force|Lich Bane|Iceborn Gauntlet/i.test(item.name));
        if (state.spellbladeReady && spellblade) {
          const lichBane = /Lich Bane/i.test(spellblade.name);
          const amount = lichBane ? attacker.baseAttackDamage * 0.75 + attacker.abilityPower * 0.4 : attacker.baseAttackDamage * (/Trinity Force/i.test(spellblade.name) ? 2 : 1.5);
          const raw = packet(lichBane ? "magic" : "physical", amount);
          pre = addDamage(pre, raw);
          triggers.push({ source: "item", label: `${spellblade.name} - Spellblade`, kind: "damage", preMitigation: raw, postMitigation: emptyDamage() });
          state.spellbladeReady = false;
        }
        const bork = attackerItems.find((item) => /Blade of The Ruined King/i.test(item.name));
        if (bork) {
          const raw = packet("physical", health * 0.08);
          pre = addDamage(pre, raw);
          triggers.push({ source: "item", label: `${bork.name} - Current Health On-Hit`, kind: "damage", preMitigation: raw, postMitigation: emptyDamage() });
        }
        const nashor = attackerItems.find((item) => /Nashor's Tooth/i.test(item.name));
        if (nashor) {
          const raw = packet("magic", 15 + attacker.abilityPower * 0.15);
          pre = addDamage(pre, raw);
          triggers.push({ source: "item", label: `${nashor.name} - Icathian Bite`, kind: "damage", preMitigation: raw, postMitigation: emptyDamage() });
        }
        if (championEffectModule(attackerChampion.id, "W") === "vayne-silver-bolts" && (scenario.attacker.abilityRanks.W ?? 0) > 0) {
          pre = addDamage(pre, addSilverBoltsStack(scenario.attacker.abilityRanks.W, defender, state, timestamp, triggers));
        }
      }
    } else if (action.kind === "ability") {
      const spellKey = action.key === "Q2" ? "Q" : action.key;
      castSpell = attackerChampion.spells.find((candidate) => candidate.key === spellKey);
      const rank = Math.max(1, scenario.attacker.abilityRanks[spellKey] ?? 1);
      if (!castSpell) {
        formula = "Ability definition unavailable.";
        stepWarnings.push(`${action.key} is not present in this champion snapshot.`);
      } else if (castSpell.castable === false) {
        formula = `${castSpell.name} is a passive and cannot be cast.`;
        stepWarnings.push("This legacy combo action was retained for link compatibility but did not execute.");
      } else {
        const module = championEffectModule(attackerChampion.id, spellKey);
        state.spellbladeReady = action.key !== "Q2";
        const cooldown = rankValue(castSpell.cooldown, rank);
        const cooldownMultiplier = module === "vayne-tumble" && state.vayneFinalHourExpiresAt > timestamp
          ? 1 - rankValue([0.3, 0.4, 0.5], scenario.attacker.abilityRanks.R ?? 1)
          : 1;
        const readyAt = state.cooldownReadyAt[spellKey] ?? 0;
        if (timestamp < readyAt) stepWarnings.push(`${castSpell.name} was used ${(readyAt - timestamp).toFixed(2)} seconds before its modeled cooldown ended. Sandbox execution continued.`);
        state.cooldownReadyAt[spellKey] = timestamp + cooldown * cooldownMultiplier;

        if (module === "vayne-tumble") {
          state.vayneTumbleExpiresAt = timestamp + 3;
          formula = "Applied a three-second next-attack damage buff. The cast deals no immediate damage.";
          triggers.push(stateTrigger("Tumble Armed", "The next successful basic attack gains rank-scaled physical damage."));
        } else if (module === "vayne-final-hour") {
          const duration = rankValue([8, 10, 12], rank);
          const bonus = rankValue([35, 50, 65], rank);
          state.vayneFinalHourExpiresAt = timestamp + duration;
          formula = `Granted ${bonus} bonus attack damage for ${duration} seconds and reduced Tumble cooldown.`;
          triggers.push(stateTrigger("Final Hour", `+${bonus} attack damage for ${duration} seconds. Tumble cooldown is reduced by ${rankValue([30, 40, 50], rank)}%.`));
        } else if (module === "olaf-ragnarok") {
          state.olafRagnarokExpiresAt = timestamp + 3;
          formula = `Applied Ragnarok's three-second attack damage buff.`;
          triggers.push(stateTrigger("Ragnarok", `Granted ${rankValue([10, 20, 30], rank)} + 25% current total AD as attack damage. Crowd control immunity and movement speed are outside damage scope.`));
        } else if (isEmpoweredAttackModule(module)) {
          const duration = empoweredAttackDuration(module);
          const cooldownStartsOnConsumption = module === "blitzcrank-power-fist";
          state.empoweredAttack = {
            module,
            spellKey,
            label: castSpell.name,
            rank,
            expiresAt: timestamp + duration,
            cooldownDuration: cooldownStartsOnConsumption ? cooldown : null,
          };
          if (cooldownStartsOnConsumption) state.cooldownReadyAt[spellKey] = timestamp + duration + cooldown;
          formula = `Armed ${castSpell.name} for ${duration} seconds. The cast deals no immediate damage.`;
          triggers.push(stateTrigger(`${castSpell.name} Armed`, `The next successful qualifying hit before ${duration} seconds adds the reviewed damage packet.${cooldownStartsOnConsumption ? " Cooldown starts when the attack consumes the buff or when the buff expires." : ""}`));
        } else if (module === "vayne-condemn") {
          connectedDamagingAbility = action.outcome !== "miss";
          if (connectedDamagingAbility) {
            const wallCollision = action.parameters.wallCollision === true;
            const base = rankValue([50, 85, 120, 155, 190], rank) + attacker.bonusAttackDamage * 0.5;
            pre = packet("physical", base);
            if (wallCollision) {
              const terrainPacket = packet("physical", base * 1.5);
              pre = addDamage(pre, terrainPacket);
              triggers.push({ source: "champion", label: "Condemn - Terrain Collision", kind: "damage", preMitigation: terrainPacket, postMitigation: emptyDamage(), note: "Separate 150% bonus physical damage packet." });
            }
            formula = `${wallCollision ? "250" : "100"}% x (${rankValue([50, 85, 120, 155, 190], rank)} + 50% bonus AD)`;
            stepWarnings.push(wallCollision ? "Terrain collision bonus damage included." : "No terrain collision.");
            if ((scenario.attacker.abilityRanks.W ?? 0) > 0) pre = addDamage(pre, addSilverBoltsStack(scenario.attacker.abilityRanks.W, defender, state, timestamp, triggers));
          }
        } else {
          const override = overrideAbility(attackerChampion, action.key, rank, attacker, defender, health, action.parameters);
          if (override) {
            pre = override.damage;
            formula = override.formula;
            connectedDamagingAbility = pre.total > 0 && action.outcome !== "miss";
            if (action.outcome === "miss") pre = emptyDamage();
            if (override.note) stepWarnings.push(override.note);
          } else if (!castSpell.damageType) {
            formula = `${castSpell.name} does not create an immediate damage packet.`;
            if (castSpell.classification === "unsupported" || castSpell.classification === "partial") stepWarnings.push(castSpell.coverageNote);
          } else if (castSpell.classification === "unsupported") {
            formula = `${castSpell.name} has an unsupported damage structure.`;
            stepWarnings.push(castSpell.coverageNote);
          } else if (action.outcome === "miss") {
            formula = `${castSpell.name} was explicitly selected to miss.`;
          } else {
            const generic = genericAbilityDamage(
              castSpell,
              rank,
              attacker,
              defender,
              health,
              scenario.attacker.level,
              Math.max(1, Number(action.parameters.hitCount ?? 1)),
              scenario.attacker.resources,
              scenario.attacker.stacks,
              Object.fromEntries(Object.entries({ ...(scenario.attacker.conditions ?? {}), ...action.parameters }).filter((entry): entry is [string, boolean | number | string] => entry[1] !== undefined)),
            );
            pre = generic.damage;
            formula = generic.formula;
            connectedDamagingAbility = pre.total > 0;
            if (castSpell.classification !== "modeled") stepWarnings.push(castSpell.coverageNote);
          }
        }

        if (
          connectedDamagingAbility
          && action.key === "Q"
          && state.empoweredAttack?.module === "jax-empower"
        ) {
          pre = addDamage(pre, consumeEmpoweredAttack(
            attackerChampion,
            attacker,
            defender,
            health,
            scenario.attacker.level,
            state,
            triggers,
            timestamp,
          ));
        }

        if (connectedDamagingAbility) {
          state.hitCounter += 1;
          hitCountAdvanced = true;
          const scorch = attackerRunes.find((rune) => rune.name === "Scorch");
          if (scorch && timestamp >= state.scorchReadyAt) {
            const raw = packet("magic", levelValue(20, 40, scenario.attacker.level));
            state.scheduledPackets.push({
              id: `${action.id}:scorch`,
              executeAt: timestamp + 1,
              label: "Scorch",
              raw,
              source: "rune",
              note: "Triggered by ability damage and resolved after its one-second delay.",
            });
            triggers.push(stateTrigger("Scorch Scheduled", "A magic damage packet will resolve in one second. The 10-second cooldown started.", "rune"));
            state.scorchReadyAt = timestamp + 10;
          }
        }
      }
    }

    if (hitCountAdvanced && state.hitCounter === 3) {
      const electrocute = attackerRunes.find((rune) => rune.name === "Electrocute");
      if (electrocute) {
        const raw = packet("magic", levelValue(70, 240, scenario.attacker.level) + attacker.bonusAttackDamage * 0.1 + attacker.abilityPower * 0.05);
        pre = addDamage(pre, raw);
        triggers.push({ source: "rune", label: "Electrocute", kind: "damage", preMitigation: raw, postMitigation: emptyDamage() });
      }
    }
    if (attackCountAdvanced && state.attackCounter === 3) {
      const pta = attackerRunes.find((rune) => rune.name === "Press the Attack");
      if (pta) {
        const raw = packet("physical", levelValue(40, 160, scenario.attacker.level));
        pre = addDamage(pre, raw);
        triggers.push({ source: "rune", label: "Press the Attack", kind: "damage", preMitigation: raw, postMitigation: emptyDamage(), note: "Exposure is represented by its activation packet." });
      }
    }

    const coupActive = attackerRunes.some((rune) => rune.name === "Coup de Grace") && health / defender.maxHealth < 0.4;
    const physicalMultiplier = coupActive ? 1.08 : 1;
    const magicMultiplier = (coupActive ? 1.08 : 1) * (abyssalMaskActive ? 1.12 : 1);
    if (coupActive && pre.total > 0) stepWarnings.push("Coup de Grace increased physical and magic damage by 8% below 40% health.");
    if (abyssalMaskActive && pre.magic > 0) {
      stepWarnings.push("Abyssal Mask - Unmake increased incoming magic damage by 12% within 700 range.");
      triggers.push(stateTrigger("Abyssal Mask - Unmake", "Only magic damage was amplified by 12%.", "item"));
    }
    pre = applyOutgoingMultipliers(pre, physicalMultiplier, magicMultiplier);
    for (const trigger of triggers) {
      if (trigger.kind === "state") continue;
      trigger.preMitigation = applyOutgoingMultipliers(trigger.preMitigation, physicalMultiplier, magicMultiplier);
      trigger.postMitigation = mitigateDamage(trigger.preMitigation, attacker, defender);
    }

    const post = mitigateDamage(pre, attacker, defender);
    const absorbed = Math.min(shield, post.total);
    shield -= absorbed;
    const healthDamage = Math.max(0, post.total - absorbed);
    const healthBefore = health;
    health = Math.max(0, health - healthDamage);
    const overkill = Math.max(0, healthDamage - healthBefore);
    if (!lethalStepId && health <= 0 && healthDamage > 0) lethalStepId = action.id;

    if (hasConqueror && (connectedAttack || connectedDamagingAbility)) {
      const gained = connectedAttack && attackerChampion.stats.attackRange > 300 ? 1 : 2;
      state.conquerorStacks = Math.min(12, state.conquerorStacks + gained);
      state.conquerorExpiresAt = timestamp + 5;
      const forcePerStack = levelValue(1.8, 4, scenario.attacker.level);
      const nextStats = dynamicAttackerStats(baseAttacker, attackerChampion, scenario.attacker.abilityRanks, state, timestamp, scenario.attacker.level);
      triggers.push(stateTrigger("Conqueror", `Gained ${gained} stack${gained === 1 ? "" : "s"}. ${state.conquerorStacks}/12 stacks grant ${(forcePerStack * state.conquerorStacks).toFixed(2)} adaptive force as ${nextStats.adaptiveStat}. Healing at full stacks is outside the current analysis scope.`, "rune"));
    }
    if (championEffectModule(attackerChampion.id, "R") === "olaf-ragnarok" && state.olafRagnarokExpiresAt > timestamp && (connectedAttack || (connectedDamagingAbility && action.key === "E"))) {
      state.olafRagnarokExpiresAt += 2.5;
      triggers.push(stateTrigger("Ragnarok Extended", "The active duration increased by 2.5 seconds."));
    }

    steps.push({
      id: action.id,
      timestamp,
      label: action.label ?? (action.kind === "attack" ? "Basic Attack" : action.kind === "wait" ? "Wait" : action.key),
      preMitigation: pre,
      postMitigation: post,
      shieldAbsorbed: absorbed,
      healthDamage,
      targetHealth: health,
      overkill,
      triggers,
      warnings: stepWarnings,
      formula,
    });
  }

  if (scenario.settings.resolvePendingDamage && state.scheduledPackets.length) {
    resolveScheduledPackets(Math.max(...state.scheduledPackets.map((scheduled) => scheduled.executeAt)));
  }

  const totals = steps.reduce((total, step) => ({
    preMitigation: addDamage(total.preMitigation, step.preMitigation),
    postMitigation: addDamage(total.postMitigation, step.postMitigation),
    shieldAbsorbed: total.shieldAbsorbed + step.shieldAbsorbed,
    healthDamage: total.healthDamage + step.healthDamage,
  }), { preMitigation: emptyDamage(), postMitigation: emptyDamage(), shieldAbsorbed: 0, healthDamage: 0 });

  const unsupportedRunes = attackerRunes.filter((rune) => rune.classification === "unsupported" || rune.classification === "partial");
  if (unsupportedRunes.length) warnings.push(`Partially modeled or unsupported rune effects: ${unsupportedRunes.map((rune) => rune.name).join(", ")}.`);
  const unsupportedDefenderRunes = defenderRunes.filter((rune) => rune.classification === "unsupported" || rune.classification === "partial");
  if (unsupportedDefenderRunes.length) warnings.push(`Partially modeled or unsupported target rune effects: ${unsupportedDefenderRunes.map((rune) => rune.name).join(", ")}.`);
  const unsupportedItems = attackerItems.filter((item) => item.classification === "unsupported" || item.classification === "partial");
  if (unsupportedItems.length) warnings.push(`Partially modeled or unsupported item effects: ${unsupportedItems.map((item) => item.name).join(", ")}. Their structured stats are still applied.`);
  const unsupportedDefenderItems = defenderItems.filter((item) => item.classification === "unsupported" || item.classification === "partial");
  if (unsupportedDefenderItems.length) warnings.push(`Partially modeled or unsupported target item effects: ${unsupportedDefenderItems.map((item) => item.name).join(", ")}. Their structured stats are still applied.`);
  return { steps, totals, attackerStats: baseAttacker, defenderStats: defender, lethalStepId, warnings };
}
