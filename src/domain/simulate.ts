import {
  addDamage,
  damageVector,
  emptyDamage,
  type ActionDefinition,
  type ChampionDefinition,
  type DamageType,
  type DamageVector,
  type ItemDefinition,
  type ResolvedStats,
  type RuneDefinition,
  type ScenarioV2,
  type SimulationResult,
  type SpellDefinition,
  type StepTrigger,
} from "./model";
import { evaluateFormula } from "./formula";
import {
  absorbRuntimeShield,
  applyRuntimeResistanceModifiers,
  applyRuntimeStatModifiers,
  createEffectRuntimeState,
  executeEffectEvent,
  expireRuntimeState,
  runtimeDamageMultiplier,
  type EffectEventContext,
  type EffectRuntimeState,
} from "./effect-runtime";
import { customAbilityHandler } from "./custom-effect-handlers";
import { mitigateDamage } from "./mitigation";
import { validateScenario } from "./scenario";
import { resolveStats } from "./stats";

function packet(type: DamageType | null, amount: number): DamageVector {
  if (type === "physical") return damageVector(amount, 0, 0);
  if (type === "magic") return damageVector(0, amount, 0);
  if (type === "true") return damageVector(0, 0, amount);
  return emptyDamage();
}

function rankValue(values: number[], rank: number, fallback = 0) {
  if (!values.length) return fallback;
  return values[Math.max(0, Math.min(values.length - 1, rank - 1))] ?? fallback;
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
  inputs: Record<string, boolean | number | string>,
  parameters: Record<string, boolean | number | string | undefined>,
) {
  const primaryCalculation = spell.primaryCalculation ? spell.calculations?.[spell.primaryCalculation] : undefined;
  if (primaryCalculation && primaryCalculation.unresolvedParts.length === 0) {
    const numericInputs = Object.fromEntries(Object.entries(inputs).filter((entry): entry is [string, number] => typeof entry[1] === "number"));
    const amount = evaluateFormula(primaryCalculation.formula, {
      spellRank: rank,
      championLevel,
      effects: {},
      named: numericInputs,
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
        ...numericInputs,
      },
      targetStats: {
        currentHealth: targetCurrentHealth,
        maxHealth: defender.maxHealth,
        missingHealth: Math.max(0, defender.maxHealth - targetCurrentHealth),
      },
      inputs: Object.fromEntries(Object.entries({ ...inputs, ...parameters }).filter((entry): entry is [string, boolean | number | string] => entry[1] !== undefined)),
      conditions: Object.fromEntries(Object.entries({ ...inputs, ...parameters }).map(([key, value]) => [key, Boolean(value)])),
    });
    if (Number.isFinite(amount)) return { damage: packet(spell.damageType, amount * hitCount), formula: `${spell.primaryCalculation} CommunityDragon formula tree${hitCount > 1 ? ` x ${hitCount} hits` : ""}` };
  }
  const base = rankValue(spell.baseDamage, rank);
  let amount = base;
  const terms = [base.toFixed(0)];
  if (spell.scalings?.length) {
    for (const scaling of spell.scalings) {
      const ratio = rankValue(scaling.values, rank);
      amount += statValue(attacker, scaling) * ratio;
      const scope = scaling.stat === "attackDamage" ? `${scaling.scope} AD` : scaling.stat === "abilityPower" ? "AP" : scaling.stat === "magicResist" ? "magic resist" : "armor";
      terms.push(`${(ratio * 100).toFixed(0)}% ${scope}`);
    }
  } else {
    amount += attacker.attackDamage * spell.ratioAD + attacker.abilityPower * spell.ratioAP + attacker.armor * spell.ratioArmor + attacker.magicResist * spell.ratioMagicResist;
  }
  return { damage: packet(spell.damageType, amount * hitCount), formula: `${hitCount > 1 ? `${hitCount} x (` : ""}${terms.join(" + ")}${hitCount > 1 ? ")" : ""}` };
}

function programsFor(champion: ChampionDefinition, items: ItemDefinition[], runes: RuneDefinition[]) {
  return [
    ...champion.effectPrograms,
    ...items.flatMap((item) => item.effectPrograms ?? []),
    ...runes.flatMap((rune) => rune.effectPrograms ?? []),
  ];
}

function sourceKey(sourceId: string) {
  return sourceId.split(":").at(-1) ?? sourceId;
}

function actionDefinition(champion: ChampionDefinition, actionId: string, key: string, kind: "attack" | "ability") {
  return champion.actions.find((entry) => entry.id === actionId)
    ?? champion.actions.find((entry) => entry.kind === kind && entry.key === key);
}

function cooldownValues(champion: ChampionDefinition, ranks: Record<string, number>) {
  return Object.fromEntries(champion.spells.map((spell) => [`cooldown:${spell.key}`, rankValue(spell.cooldown, Math.max(1, ranks[spell.key] ?? 1))]));
}

function applyMultipliers(damage: DamageVector, state: EffectRuntimeState, timestamp: number) {
  return damageVector(
    damage.physical * runtimeDamageMultiplier(state, "attacker", "physical", timestamp),
    damage.magic * runtimeDamageMultiplier(state, "attacker", "magic", timestamp),
    damage.true * runtimeDamageMultiplier(state, "attacker", "true", timestamp),
  );
}

function resolveNodeMitigation(node: StepTrigger, attacker: ResolvedStats, defender: ResolvedStats, state: EffectRuntimeState, timestamp: number): StepTrigger {
  if (node.children?.length) {
    const children = node.children.map((child) => resolveNodeMitigation(child, attacker, defender, state, timestamp));
    return {
      ...node,
      children,
      preMitigation: children.reduce((total, child) => addDamage(total, child.preMitigation), emptyDamage()),
      postMitigation: children.reduce((total, child) => addDamage(total, child.postMitigation), emptyDamage()),
    };
  }
  if (node.kind === "state") return node;
  const preMitigation = applyMultipliers(node.preMitigation, state, timestamp);
  return { ...node, preMitigation, postMitigation: mitigateDamage(preMitigation, attacker, defender) };
}

function eventContext(
  event: EffectEventContext["event"],
  timestamp: number,
  action: ScenarioV2["combo"][number] | undefined,
  sourceId: string | undefined,
  hit: boolean,
  attacker: ResolvedStats,
  defender: ResolvedStats,
  targetCurrentHealth: number,
  scenario: ScenarioV2,
  eventValues: Record<string, boolean | number | string> = {},
): EffectEventContext {
  return {
    event,
    timestamp,
    side: "attacker",
    action,
    sourceId,
    hit,
    attacker,
    defender,
    targetCurrentHealth,
    targetId: scenario.defender.championId,
    ranks: scenario.attacker.abilityRanks,
    level: scenario.attacker.level,
    inputs: scenario.attacker.inputs,
    eventValues,
  };
}

function defenderEventContext(
  event: EffectEventContext["event"],
  timestamp: number,
  action: ScenarioV2["combo"][number] | undefined,
  sourceId: string | undefined,
  hit: boolean,
  defender: ResolvedStats,
  attacker: ResolvedStats,
  scenario: ScenarioV2,
  eventValues: Record<string, boolean | number | string> = {},
  damageType?: DamageType,
): EffectEventContext {
  return {
    event,
    timestamp,
    side: "defender",
    action,
    sourceId,
    hit,
    damageType,
    attacker: defender,
    defender: attacker,
    targetCurrentHealth: attacker.currentHealth,
    targetId: scenario.attacker.championId,
    ranks: scenario.defender.abilityRanks,
    level: scenario.defender.level,
    inputs: scenario.defender.inputs,
    eventValues,
  };
}

function singleDamageType(damage: DamageVector): DamageType | undefined {
  const types = (["physical", "magic", "true"] as const).filter((type) => damage[type] > 0);
  return types.length === 1 ? types[0] : undefined;
}

export function simulate(
  scenario: ScenarioV2,
  championIndex: Map<number, ChampionDefinition>,
  itemIndex: Map<number, ItemDefinition>,
  runeIndex: Map<number, RuneDefinition>,
): SimulationResult {
  const attackerChampion = championIndex.get(scenario.attacker.championId);
  const defenderChampion = championIndex.get(scenario.defender.championId);
  if (!attackerChampion || !defenderChampion) throw new Error("The selected champion data is unavailable for this patch.");
  const baseAttacker = resolveStats(scenario.attacker, attackerChampion, itemIndex, runeIndex);
  const baseDefender = resolveStats(scenario.defender, defenderChampion, itemIndex, runeIndex);
  const attackerItems = scenario.attacker.itemIds.map((id) => itemIndex.get(id)).filter(Boolean) as ItemDefinition[];
  const defenderItems = scenario.defender.itemIds.map((id) => itemIndex.get(id)).filter(Boolean) as ItemDefinition[];
  const attackerRunes = [...scenario.attacker.runeIds, ...(scenario.attacker.shardIds ?? []).filter((id): id is number => typeof id === "number")].map((id) => runeIndex.get(id)).filter(Boolean) as RuneDefinition[];
  const defenderRunes = [...scenario.defender.runeIds, ...(scenario.defender.shardIds ?? []).filter((id): id is number => typeof id === "number")].map((id) => runeIndex.get(id)).filter(Boolean) as RuneDefinition[];
  const attackerPrograms = programsFor(attackerChampion, attackerItems, attackerRunes);
  const defenderPrograms = programsFor(defenderChampion, defenderItems, defenderRunes);
  const runtime = createEffectRuntimeState(scenario.attacker.startingShield, scenario.defender.startingShield);
  let health = baseDefender.currentHealth;
  let timestamp = 0;
  let lethalStepId: string | null = null;
  const steps: SimulationResult["steps"] = [];
  const warnings = [
    ...validateScenario(scenario),
    ...runePageWarnings("Attacker", attackerRunes),
    ...runePageWarnings("Target", defenderRunes),
  ];

  executeEffectEvent(attackerPrograms, runtime, eventContext("scenario-start", 0, undefined, undefined, false, baseAttacker, baseDefender, health, scenario));
  executeEffectEvent(defenderPrograms, runtime, {
    ...eventContext("scenario-start", 0, undefined, undefined, false, baseDefender, baseAttacker, baseAttacker.currentHealth, scenario),
    side: "defender",
    targetId: scenario.attacker.championId,
    ranks: scenario.defender.abilityRanks,
    level: scenario.defender.level,
    inputs: scenario.defender.inputs,
  });

  const resolveScheduledPackets = (until: number) => {
    const due = runtime.scheduledPackets.filter((scheduled) => scheduled.executeAt <= until).sort((left, right) => left.executeAt - right.executeAt);
    runtime.scheduledPackets = runtime.scheduledPackets.filter((scheduled) => scheduled.executeAt > until);
    for (const scheduled of due) {
      const attacker = applyRuntimeStatModifiers(baseAttacker, runtime, "attacker", scheduled.executeAt);
      const defender = applyRuntimeResistanceModifiers(applyRuntimeStatModifiers(baseDefender, runtime, "defender", scheduled.executeAt), runtime, "defender", scheduled.executeAt);
      const pre = applyMultipliers(scheduled.raw, runtime, scheduled.executeAt);
      const post = mitigateDamage(pre, attacker, defender);
      const absorbed = absorbRuntimeShield(runtime, "defender", post.total);
      const healthDamage = Math.max(0, post.total - absorbed);
      const healthBefore = health;
      health = Math.max(0, health - healthDamage);
      const overkill = Math.max(0, healthDamage - healthBefore);
      if (!lethalStepId && health <= 0 && healthDamage > 0) lethalStepId = scheduled.id;
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
        warnings: [],
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
    const expired = expireRuntimeState(runtime, timestamp);
    const triggers: StepTrigger[] = [...expired];
    const stepWarnings: string[] = [];
    let attacker = applyRuntimeStatModifiers(baseAttacker, runtime, "attacker", timestamp);
    let defender = applyRuntimeResistanceModifiers(applyRuntimeStatModifiers(baseDefender, runtime, "defender", timestamp), runtime, "defender", timestamp);
    let pre = emptyDamage();
    let formula = "No damage";
    let connectedAttack = false;
    let connectedAbility = false;
    let source: string | undefined;
    let definition: ActionDefinition | undefined;
    let criticalMultiplier = 1;
    const sharedEventValues: Record<string, boolean | number | string> = {
      ...cooldownValues(attackerChampion, scenario.attacker.abilityRanks),
      hitCount: Math.max(1, Number(action.parameters.hitCount ?? 1)),
      conquerorStacks: attackerChampion.stats.attackRange > 300 ? 1 : 2,
      elapsed: Math.max(0, action.delay),
    };

    if (action.delay > 0) {
      const advanced = executeEffectEvent(attackerPrograms, runtime, eventContext("time-advanced", timestamp, action, undefined, false, attacker, defender, health, scenario, sharedEventValues));
      const defenderAdvanced = executeEffectEvent(defenderPrograms, runtime, defenderEventContext("time-advanced", timestamp, action, undefined, false, defender, attacker, scenario, sharedEventValues));
      pre = addDamage(pre, advanced.damage);
      triggers.push(...advanced.nodes, ...defenderAdvanced.nodes);
    }
    if (expired.length) {
      const expiry = executeEffectEvent(attackerPrograms, runtime, eventContext("expiry", timestamp, action, undefined, false, attacker, defender, health, scenario, sharedEventValues));
      const defenderExpiry = executeEffectEvent(defenderPrograms, runtime, defenderEventContext("expiry", timestamp, action, undefined, false, defender, attacker, scenario, sharedEventValues));
      pre = addDamage(pre, expiry.damage);
      triggers.push(...expiry.nodes, ...defenderExpiry.nodes);
    }
    const actionStart = executeEffectEvent(attackerPrograms, runtime, eventContext("action-start", timestamp, action, undefined, action.outcome !== "miss", attacker, defender, health, scenario, sharedEventValues));
    const defenderActionStart = executeEffectEvent(defenderPrograms, runtime, defenderEventContext("action-start", timestamp, action, undefined, action.outcome !== "miss", defender, attacker, scenario, sharedEventValues));
    pre = addDamage(pre, actionStart.damage);
    triggers.push(...actionStart.nodes, ...defenderActionStart.nodes);
    attacker = applyRuntimeStatModifiers(baseAttacker, runtime, "attacker", timestamp);
    defender = applyRuntimeResistanceModifiers(applyRuntimeStatModifiers(baseDefender, runtime, "defender", timestamp), runtime, "defender", timestamp);

    if (action.kind === "wait") {
      formula = `Advanced combat state by ${action.delay.toFixed(2)} seconds.`;
    } else if (action.kind === "attack") {
      definition = actionDefinition(attackerChampion, action.actionId, action.key, "attack");
      source = definition?.sourceId;
      if (action.outcome === "miss") {
        formula = "The basic attack was explicitly selected to miss.";
      } else {
        connectedAttack = true;
        let attackDamage = attacker.attackDamage;
        if (scenario.randomnessMode === "expected") {
          criticalMultiplier = 1 + Math.max(0, Math.min(100, attacker.critChance)) / 100 * (attacker.critDamage / 100 - 1);
          attackDamage *= criticalMultiplier;
          formula = `Total AD weighted by ${attacker.critChance.toFixed(1)}% critical chance.`;
        } else if (action.outcome === "crit") {
          criticalMultiplier = attacker.critDamage / 100;
          attackDamage *= criticalMultiplier;
          formula = `Total AD x ${attacker.critDamage.toFixed(0)}% selected critical strike.`;
        } else {
          formula = "One basic attack using current total AD.";
        }
        pre = packet("physical", attackDamage);
        const effects = executeEffectEvent(attackerPrograms, runtime, eventContext("basic-attack-hit", timestamp, action, source, true, attacker, defender, health, scenario, { ...sharedEventValues, criticalMultiplier }));
        pre = addDamage(pre, effects.damage);
        triggers.push(...effects.nodes);
      }
    } else if (action.kind === "ability") {
      definition = actionDefinition(attackerChampion, action.actionId, action.key, "ability");
      source = definition?.sourceId;
      const key = source ? sourceKey(source) : action.key === "Q2" ? "Q" : action.key;
      const spell = attackerChampion.spells.find((candidate) => candidate.key === key);
      const rank = Math.max(1, scenario.attacker.abilityRanks[key] ?? 1);
      if (!definition || !spell) {
        formula = "Ability definition unavailable.";
        stepWarnings.push(`${action.key} is not present in this champion snapshot.`);
      } else if (spell.castable === false) {
        formula = `${spell.name} is passive and cannot be cast.`;
      } else {
        source = definition.sourceId;
        const cooldown = rankValue(spell.cooldown, rank);
        const readyAt = runtime.cooldownReadyAt[source] ?? 0;
        if (timestamp < readyAt) stepWarnings.push(`${spell.name} was used ${(readyAt - timestamp).toFixed(2)} seconds before its modeled cooldown ended. Sandbox execution continued.`);
        if (definition.cooldownPolicy !== "consume-or-expire") runtime.cooldownReadyAt[source] = timestamp + cooldown;
        const cast = executeEffectEvent(attackerPrograms, runtime, eventContext("cast", timestamp, action, source, action.outcome !== "miss", attacker, defender, health, scenario, sharedEventValues));
        pre = addDamage(pre, cast.damage);
        triggers.push(...cast.nodes);
        attacker = applyRuntimeStatModifiers(baseAttacker, runtime, "attacker", timestamp);
        defender = applyRuntimeResistanceModifiers(applyRuntimeStatModifiers(baseDefender, runtime, "defender", timestamp), runtime, "defender", timestamp);
        const armsState = attackerPrograms.some((entry) => entry.sourceId === source && entry.template === "arm-next-hit");
        const handler = customAbilityHandler(source);
        if (action.outcome === "miss") {
          formula = `${spell.name} was explicitly selected to miss.`;
        } else if (handler) {
          const result = handler({ action, rank, attacker, defender, targetCurrentHealth: health });
          pre = addDamage(pre, result.damage);
          formula = result.formula;
          connectedAbility = result.damage.total > 0;
          if (result.note) stepWarnings.push(result.note);
        } else if (armsState || !spell.damageType) {
          formula = armsState ? `${spell.name} armed a timed effect and dealt no immediate damage.` : `${spell.name} does not create an immediate damage packet.`;
          if (spell.classification === "unsupported" || spell.classification === "partial") stepWarnings.push(spell.coverageNote);
        } else if (spell.classification === "unsupported") {
          formula = `${spell.name} has an unsupported damage structure.`;
          stepWarnings.push(spell.coverageNote);
        } else {
          const direct = genericAbilityDamage(spell, rank, attacker, defender, health, scenario.attacker.level, Math.max(1, Number(action.parameters.hitCount ?? 1)), scenario.attacker.inputs, action.parameters);
          pre = addDamage(pre, direct.damage);
          formula = direct.formula;
          connectedAbility = direct.damage.total > 0;
          if (spell.classification !== "modeled") stepWarnings.push(spell.coverageNote);
        }
        if (connectedAbility) {
          const hit = executeEffectEvent(attackerPrograms, runtime, eventContext("ability-hit", timestamp, action, source, true, attacker, defender, health, scenario, { ...sharedEventValues, criticalMultiplier }));
          pre = addDamage(pre, hit.damage);
          triggers.push(...hit.nodes);
        }
      }
    }

    const connected = connectedAttack || connectedAbility;
    const before = executeEffectEvent(attackerPrograms, runtime, eventContext("before-damage", timestamp, action, source, connected, attacker, defender, health, scenario, sharedEventValues));
    pre = addDamage(pre, before.damage);
    triggers.push(...before.nodes);
    const incomingType = singleDamageType(pre);
    const defenderBefore = executeEffectEvent(defenderPrograms, runtime, defenderEventContext("before-damage", timestamp, action, source, connected, defender, attacker, scenario, sharedEventValues, incomingType));
    triggers.push(...defenderBefore.nodes);
    attacker = applyRuntimeStatModifiers(baseAttacker, runtime, "attacker", timestamp);
    defender = applyRuntimeResistanceModifiers(applyRuntimeStatModifiers(baseDefender, runtime, "defender", timestamp), runtime, "defender", timestamp);
    pre = applyMultipliers(pre, runtime, timestamp);
    const resolvedTriggers = triggers.map((trigger) => resolveNodeMitigation(trigger, attacker, defender, runtime, timestamp));
    const post = mitigateDamage(pre, attacker, defender);
    const absorbed = absorbRuntimeShield(runtime, "defender", post.total);
    const healthDamage = Math.max(0, post.total - absorbed);
    const healthBefore = health;
    health = Math.max(0, health - healthDamage);
    const overkill = Math.max(0, healthDamage - healthBefore);
    if (!lethalStepId && health <= 0 && healthDamage > 0) lethalStepId = action.id;

    const after = executeEffectEvent(attackerPrograms, runtime, eventContext("after-damage", timestamp, action, source, connected, attacker, defender, health, scenario, sharedEventValues));
    const defenderAfter = executeEffectEvent(defenderPrograms, runtime, defenderEventContext("after-damage", timestamp, action, source, connected, defender, attacker, scenario, sharedEventValues, incomingType));
    const complete = executeEffectEvent(attackerPrograms, runtime, eventContext("action-complete", timestamp, action, source, connected, attacker, defender, health, scenario, sharedEventValues));
    resolvedTriggers.push(...after.nodes, ...defenderAfter.nodes, ...complete.nodes);
    if (health <= 0 && healthDamage > 0) {
      const death = executeEffectEvent(attackerPrograms, runtime, eventContext("target-death", timestamp, action, source, connected, attacker, defender, health, scenario, sharedEventValues));
      resolvedTriggers.push(...death.nodes);
    }

    steps.push({
      id: action.id,
      timestamp,
      label: action.label ?? definition?.label ?? (action.kind === "wait" ? "Wait" : action.key),
      preMitigation: pre,
      postMitigation: post,
      shieldAbsorbed: absorbed,
      healthDamage,
      targetHealth: health,
      overkill,
      triggers: resolvedTriggers,
      warnings: stepWarnings,
      formula,
    });
  }

  if (scenario.settings.resolvePendingDamage && runtime.scheduledPackets.length) resolveScheduledPackets(Math.max(...runtime.scheduledPackets.map((scheduled) => scheduled.executeAt)));

  const totals = steps.reduce((total, step) => ({
    preMitigation: addDamage(total.preMitigation, step.preMitigation),
    postMitigation: addDamage(total.postMitigation, step.postMitigation),
    shieldAbsorbed: total.shieldAbsorbed + step.shieldAbsorbed,
    healthDamage: total.healthDamage + step.healthDamage,
  }), { preMitigation: emptyDamage(), postMitigation: emptyDamage(), shieldAbsorbed: 0, healthDamage: 0 });

  const incompleteRunes = [...attackerRunes, ...defenderRunes].filter((rune) => rune.classification === "unsupported" || rune.classification === "partial");
  if (incompleteRunes.length) warnings.push(`Partially modeled or unsupported rune effects: ${[...new Set(incompleteRunes.map((rune) => rune.name))].join(", ")}.`);
  const incompleteItems = [...attackerItems, ...defenderItems].filter((item) => item.classification === "unsupported" || item.classification === "partial");
  if (incompleteItems.length) warnings.push(`Partially modeled or unsupported item effects: ${[...new Set(incompleteItems.map((item) => item.name))].join(", ")}. Their structured stats are still applied.`);
  return {
    steps,
    totals,
    attackerStats: applyRuntimeStatModifiers(baseAttacker, runtime, "attacker", 0),
    defenderStats: applyRuntimeStatModifiers(baseDefender, runtime, "defender", 0),
    lethalStepId,
    warnings,
  };
}
