import { evaluateFormula, type FormulaContext, type FormulaNode } from "./formula";
import {
  addDamage,
  damageVector,
  emptyDamage,
  type ComboAction,
  type DamageType,
  type DamageVector,
  type EffectCondition,
  type EffectEvent,
  type EffectOperation,
  type EffectProgramDefinition,
  type ResolvedStats,
  type RuntimeStat,
  type StateScope,
  type StepTrigger,
} from "./model";

export type RuntimeSide = "attacker" | "defender";

type RuntimeStateValue = {
  key: string;
  scope: StateScope;
  side: RuntimeSide;
  sourceId: string;
  value: number;
  expiresAt: number | null;
  label: string;
};

type RuntimeStatModifier = {
  key: string;
  side: RuntimeSide;
  sourceId: string;
  stat: RuntimeStat;
  mode: "flat" | "percent";
  formula: FormulaNode;
  rank: number;
  level: number;
  expiresAt: number | null;
  activeWhileState?: string;
  label: string;
};

type RuntimeAmplifier = {
  key: string;
  side: RuntimeSide;
  damageType?: DamageType;
  amount: number;
  expiresAt: number | null;
  label: string;
};

type RuntimeResistanceModifier = {
  key: string;
  side: RuntimeSide;
  stat: "armor" | "magicResist";
  mode: "flat-reduction" | "percent-reduction";
  amount: number;
  expiresAt: number | null;
  label: string;
};

export type ScheduledRuntimePacket = {
  id: string;
  replaceKey?: string;
  executeAt: number;
  label: string;
  raw: DamageVector;
  source: StepTrigger["source"];
  note: string;
};

export type EffectRuntimeState = {
  values: Map<string, RuntimeStateValue>;
  statModifiers: Map<string, RuntimeStatModifier>;
  amplifiers: Map<string, RuntimeAmplifier>;
  resistanceModifiers: Map<string, RuntimeResistanceModifier>;
  cooldownReadyAt: Record<string, number>;
  scheduledPackets: ScheduledRuntimePacket[];
  shields: Record<RuntimeSide, number>;
  shieldEntries: Map<string, { side: RuntimeSide; amount: number; expiresAt: number; label: string; source: StepTrigger["source"] }>;
};

export type EffectEventContext = {
  event: EffectEvent;
  timestamp: number;
  side: RuntimeSide;
  action?: ComboAction;
  sourceId?: string;
  hit: boolean;
  damageType?: DamageType;
  attacker: ResolvedStats;
  defender: ResolvedStats;
  targetCurrentHealth: number;
  targetId: number | string;
  ranks: Record<string, number>;
  level: number;
  inputs: Record<string, boolean | number | string>;
  eventValues?: Record<string, boolean | number | string>;
};

export type EffectExecution = {
  damage: DamageVector;
  nodes: StepTrigger[];
};

export function createEffectRuntimeState(startingAttackerShield = 0, startingDefenderShield = 0): EffectRuntimeState {
  return {
    values: new Map(),
    statModifiers: new Map(),
    amplifiers: new Map(),
    resistanceModifiers: new Map(),
    cooldownReadyAt: {},
    scheduledPackets: [],
    shields: {
      attacker: Math.max(0, startingAttackerShield),
      defender: Math.max(0, startingDefenderShield),
    },
    shieldEntries: new Map(),
  };
}

export function absorbRuntimeShield(state: EffectRuntimeState, side: RuntimeSide, incomingDamage: number) {
  const absorbed = Math.min(state.shields[side], Math.max(0, incomingDamage));
  state.shields[side] -= absorbed;
  let generatedShieldDamage = absorbed;
  const entries = [...state.shieldEntries.entries()]
    .filter(([, entry]) => entry.side === side)
    .sort((left, right) => left[1].expiresAt - right[1].expiresAt);
  for (const [key, entry] of entries) {
    if (generatedShieldDamage <= 0) break;
    const consumed = Math.min(entry.amount, generatedShieldDamage);
    entry.amount -= consumed;
    generatedShieldDamage -= consumed;
    if (entry.amount <= 0) state.shieldEntries.delete(key);
  }
  return absorbed;
}

function packet(type: DamageType, amount: number) {
  if (type === "physical") return damageVector(amount, 0, 0);
  if (type === "magic") return damageVector(0, amount, 0);
  return damageVector(0, 0, amount);
}

function triggerSource(program: EffectProgramDefinition): StepTrigger["source"] {
  if (program.owner === "item") return "item";
  if (program.owner === "rune") return "rune";
  return program.sourceId.endsWith(":P") ? "passive" : "champion";
}

function scopedKey(program: EffectProgramDefinition, side: RuntimeSide, scope: StateScope, key: string, targetId: number | string = "target") {
  if (scope === "participant") return `${side}:participant:${key}`;
  if (scope === "target") return `${side === "attacker" ? "defender" : "attacker"}:target:${targetId}:${key}`;
  if (scope === "source") return `${side}:${program.sourceId}:${key}`;
  return `${side}:${program.sourceId}:target:${targetId}:${key}`;
}

function getStateValue(state: EffectRuntimeState, program: EffectProgramDefinition, context: EffectEventContext, key: string, scope: StateScope = "source-target") {
  return state.values.get(scopedKey(program, context.side, scope, key, context.targetId));
}

function rankFor(program: EffectProgramDefinition, context: EffectEventContext) {
  if (!program.rankSource || program.rankSource === "P") return 1;
  return Math.max(1, context.ranks[program.rankSource] ?? 1);
}

function formulaContext(
  state: EffectRuntimeState,
  program: EffectProgramDefinition,
  context: EffectEventContext,
  stats = context.attacker,
): FormulaContext {
  const values: Record<string, number> = {};
  for (const entry of state.values.values()) {
    if (entry.side === context.side && (entry.sourceId === program.sourceId || entry.scope === "participant")) values[entry.key] = entry.value;
  }
  return {
    spellRank: rankFor(program, context),
    championLevel: context.level,
    effects: {},
    named: {},
    stats: {
      baseAttackDamage: stats.baseAttackDamage,
      bonusAttackDamage: stats.bonusAttackDamage,
      totalAttackDamage: stats.attackDamage,
      baseAbilityPower: 0,
      bonusAbilityPower: stats.abilityPower,
      totalAbilityPower: stats.abilityPower,
      baseArmor: stats.baseArmor ?? stats.armor,
      bonusArmor: stats.bonusArmor ?? 0,
      totalArmor: stats.armor,
      baseMagicResist: stats.baseMagicResist ?? stats.magicResist,
      bonusMagicResist: stats.bonusMagicResist ?? 0,
      totalMagicResist: stats.magicResist,
      attackSpeed: stats.attackSpeed ?? 0,
    },
    targetStats: {
      currentHealth: context.targetCurrentHealth,
      maxHealth: context.defender.maxHealth,
      missingHealth: Math.max(0, context.defender.maxHealth - context.targetCurrentHealth),
    },
    counters: values,
    state: values,
    inputs: Object.fromEntries(Object.entries({ ...context.inputs, ...context.action?.parameters }).filter((entry): entry is [string, boolean | number | string] => entry[1] !== undefined)),
    event: context.eventValues,
    conditions: Object.fromEntries(Object.entries({ ...context.inputs, ...context.action?.parameters })
      .map(([key, value]) => [key, Boolean(value)])),
  };
}

function evaluate(
  node: FormulaNode,
  state: EffectRuntimeState,
  program: EffectProgramDefinition,
  context: EffectEventContext,
  stats = context.attacker,
) {
  return evaluateFormula(node, formulaContext(state, program, context, stats));
}

function compare(actual: boolean | number | string | undefined, operator: "eq" | "gte" | "lt", expected: boolean | number | string) {
  if (operator === "eq") return actual === expected;
  if (typeof actual !== "number" || typeof expected !== "number") return false;
  return operator === "gte" ? actual >= expected : actual < expected;
}

function matchesCondition(condition: EffectCondition, state: EffectRuntimeState, program: EffectProgramDefinition, context: EffectEventContext) {
  if (condition.type === "action-kind") return context.action?.kind === condition.value;
  if (condition.type === "action-id") return context.action?.actionId === condition.value;
  if (condition.type === "source-id") return context.sourceId === condition.value;
  if (condition.type === "rank-at-least") return (context.ranks[condition.sourceId] ?? 0) >= condition.value;
  if (condition.type === "hit") return context.hit === condition.value;
  if (condition.type === "target-champion") return condition.value;
  if (condition.type === "damage-type") return context.damageType === condition.value;
  if (condition.type === "state-active") return Boolean(getStateValue(state, program, context, condition.key, condition.scope));
  if (condition.type === "state-inactive") return !getStateValue(state, program, context, condition.key, condition.scope);
  if (condition.type === "state-value") {
    return compare(getStateValue(state, program, context, condition.key, condition.scope)?.value, condition.operator, condition.value);
  }
  return compare(
    context.action?.parameters[condition.key] ?? context.inputs[condition.key],
    condition.operator,
    condition.value,
  );
}

function durationExpiry(duration: FormulaNode | undefined, state: EffectRuntimeState, program: EffectProgramDefinition, context: EffectEventContext) {
  if (!duration) return null;
  return context.timestamp + Math.max(0, evaluate(duration, state, program, context));
}

function stateNode(source: StepTrigger["source"], label: string, note: string): StepTrigger {
  return { source, label, note, kind: "state", preMitigation: emptyDamage(), postMitigation: emptyDamage() };
}

function executeOperation(
  operation: EffectOperation,
  state: EffectRuntimeState,
  program: EffectProgramDefinition,
  context: EffectEventContext,
  nodes: StepTrigger[],
) {
  const source = triggerSource(program);
  const scope = "scope" in operation ? operation.scope ?? "source-target" : "source-target";
  if (operation.type === "set-state" || operation.type === "increment-state") {
    const key = scopedKey(program, context.side, scope, operation.key, context.targetId);
    const previous = state.values.get(key)?.value ?? 0;
    const raw = operation.type === "set-state"
      ? evaluate(operation.value, state, program, context)
      : previous + evaluate(operation.amount, state, program, context);
    const maximum = operation.type === "increment-state" && operation.maximum
      ? evaluate(operation.maximum, state, program, context)
      : Number.POSITIVE_INFINITY;
    const value = Math.min(maximum, raw);
    state.values.set(key, {
      key: operation.key,
      scope,
      side: context.side,
      sourceId: program.sourceId,
      value,
      expiresAt: durationExpiry(operation.duration, state, program, context),
      label: operation.label,
    });
    nodes.push(stateNode(source, operation.label, `${operation.key} is now ${Number(value.toFixed(4))}.`));
    return emptyDamage();
  }
  if (operation.type === "consume-state") {
    const key = scopedKey(program, context.side, scope, operation.key, context.targetId);
    const consumed = state.values.get(key)?.value ?? 0;
    state.values.delete(key);
    nodes.push(stateNode(source, operation.label, `Consumed ${Number(consumed.toFixed(4))} from ${operation.key}.`));
    return emptyDamage();
  }
  if (operation.type === "extend-state") {
    const entry = getStateValue(state, program, context, operation.key, scope);
    if (entry?.expiresAt !== null && entry) entry.expiresAt += Math.max(0, evaluate(operation.duration, state, program, context));
    nodes.push(stateNode(source, operation.label, `${operation.key} duration was extended.`));
    return emptyDamage();
  }
  if (operation.type === "damage") {
    let amount = evaluate(operation.formula, state, program, context);
    if (operation.critical === "attack") amount *= Number(context.eventValues?.criticalMultiplier ?? 1);
    const raw = packet(operation.damageType, Math.max(0, amount));
    nodes.push({ source, label: operation.label, kind: "damage", preMitigation: raw, postMitigation: emptyDamage(), note: operation.formulaLabel });
    return raw;
  }
  if (operation.type === "shield") {
    const lockout = operation.lockoutKey ? getStateValue(state, program, context, operation.lockoutKey, "participant") : undefined;
    if (lockout) return emptyDamage();
    const amount = Math.max(0, evaluate(operation.formula, state, program, context));
    state.shields[context.side] += amount;
    const shieldKey = `${context.side}:${program.id}:${operation.label}`;
    const previousShield = state.shieldEntries.get(shieldKey);
    if (previousShield) state.shields[context.side] = Math.max(0, state.shields[context.side] - previousShield.amount);
    state.shieldEntries.set(shieldKey, {
      side: context.side,
      amount,
      expiresAt: context.timestamp + Math.max(0, evaluate(operation.duration, state, program, context)),
      label: operation.label,
      source,
    });
    if (operation.lockoutKey && operation.lockoutDuration) {
      const key = scopedKey(program, context.side, "participant", operation.lockoutKey, context.targetId);
      state.values.set(key, {
        key: operation.lockoutKey,
        scope: "participant",
        side: context.side,
        sourceId: program.sourceId,
        value: 1,
        expiresAt: durationExpiry(operation.lockoutDuration, state, program, context),
        label: `${operation.label} Lockout`,
      });
    }
    nodes.push(stateNode(source, operation.label, `Granted a ${Number(amount.toFixed(2))} shield for ${Number(evaluate(operation.duration, state, program, context).toFixed(2))} seconds.`));
    return emptyDamage();
  }
  if (operation.type === "stat-modifier") {
    const key = `${context.side}:${program.sourceId}:${operation.key}`;
    state.statModifiers.set(key, {
      key: operation.key,
      side: context.side,
      sourceId: program.sourceId,
      stat: operation.stat,
      mode: operation.mode,
      formula: operation.formula,
      rank: rankFor(program, context),
      level: context.level,
      expiresAt: durationExpiry(operation.duration, state, program, context),
      activeWhileState: operation.activeWhileState,
      label: operation.label,
    });
    nodes.push(stateNode(source, operation.label, `Applied a ${operation.stat} modifier.`));
    return emptyDamage();
  }
  if (operation.type === "damage-amplifier") {
    const amount = evaluate(operation.formula, state, program, context);
    state.amplifiers.set(`${context.side}:${program.sourceId}:${operation.key}`, {
      key: operation.key,
      side: context.side,
      damageType: operation.damageType,
      amount,
      expiresAt: durationExpiry(operation.duration, state, program, context),
      label: operation.label,
    });
    nodes.push(stateNode(source, operation.label, `Applied ${Number((amount * 100).toFixed(2))}% damage amplification.`));
    return emptyDamage();
  }
  if (operation.type === "resistance-modifier") {
    const amount = evaluate(operation.formula, state, program, context);
    state.resistanceModifiers.set(`${context.side}:${program.sourceId}:${operation.key}`, {
      key: operation.key,
      side: context.side,
      stat: operation.stat,
      mode: operation.mode,
      amount,
      expiresAt: durationExpiry(operation.duration, state, program, context),
      label: operation.label,
    });
    nodes.push(stateNode(source, operation.label, `Applied a ${operation.stat} reduction.`));
    return emptyDamage();
  }
  if (operation.type === "cooldown-modifier") {
    const amount = evaluate(operation.formula, state, program, context);
    const current = state.cooldownReadyAt[operation.sourceId] ?? context.timestamp;
    if (operation.mode === "set-total") state.cooldownReadyAt[operation.sourceId] = context.timestamp + Math.max(0, amount);
    else if (operation.mode === "remaining-percent") state.cooldownReadyAt[operation.sourceId] = context.timestamp + Math.max(0, current - context.timestamp) * Math.max(0, 1 - amount);
    else if (operation.mode === "remaining-flat") state.cooldownReadyAt[operation.sourceId] = Math.max(context.timestamp, current - amount);
    else state.cooldownReadyAt[operation.sourceId] = context.timestamp + Math.max(0, amount);
    nodes.push(stateNode(source, operation.label, `${operation.sourceId} cooldown now ends at ${state.cooldownReadyAt[operation.sourceId].toFixed(2)} seconds.`));
    return emptyDamage();
  }
  if (operation.type === "schedule-damage") {
    const delay = Math.max(0, evaluate(operation.delay, state, program, context));
    const tickCount = Math.max(1, Math.floor(operation.tickCount ? evaluate(operation.tickCount, state, program, context) : 1));
    const tickInterval = Math.max(0, operation.tickInterval ? evaluate(operation.tickInterval, state, program, context) : 0);
    const amountPerTick = Math.max(0, evaluate(operation.formula, state, program, context)) / tickCount;
    const replacementKey = operation.replaceKey
      ? scopedKey(program, context.side, operation.scope ?? "source-target", operation.replaceKey, context.targetId)
      : undefined;
    if (replacementKey) state.scheduledPackets = state.scheduledPackets.filter((scheduled) => scheduled.replaceKey !== replacementKey);
    for (let tick = 1; tick <= tickCount; tick += 1) {
      const executeAt = context.timestamp + delay + tickInterval * (tick - 1);
      state.scheduledPackets.push({
        id: `${context.action?.id ?? program.id}:${operation.label}:${context.timestamp}:${tick}`,
        replaceKey: replacementKey,
        executeAt,
        label: tickCount === 1 ? operation.label : `${operation.label} ${tick}/${tickCount}`,
        raw: packet(operation.damageType, amountPerTick),
        source,
        note: operation.formulaLabel,
      });
    }
    const duration = delay + tickInterval * (tickCount - 1);
    nodes.push(stateNode(source, `${operation.label} Scheduled`, `${tickCount} packet${tickCount === 1 ? "" : "s"} will resolve over ${duration.toFixed(2)} seconds.`));
    return emptyDamage();
  }
  nodes.push(stateNode(source, operation.label, operation.description));
  return emptyDamage();
}

export function executeEffectEvent(
  programs: EffectProgramDefinition[],
  state: EffectRuntimeState,
  context: EffectEventContext,
): EffectExecution {
  let damage = emptyDamage();
  const nodes: StepTrigger[] = [];
  const triggers = programs
    .flatMap((program, declarationIndex) => program.triggers
      .filter((trigger) => trigger.event === context.event)
      .map((trigger) => ({ program, trigger, declarationIndex })))
    .sort((left, right) => left.trigger.priority - right.trigger.priority || left.declarationIndex - right.declarationIndex);
  for (const { program, trigger } of triggers) {
    if (!trigger.conditions.every((condition) => matchesCondition(condition, state, program, context))) continue;
    const children: StepTrigger[] = [];
    for (const operation of trigger.operations) damage = addDamage(damage, executeOperation(operation, state, program, context, children));
    if (children.length) {
      nodes.push({
        source: triggerSource(program),
        label: program.label,
        note: `${trigger.event} effect program`,
        kind: "state",
        preMitigation: children.reduce((total, child) => addDamage(total, child.preMitigation), emptyDamage()),
        postMitigation: emptyDamage(),
        children,
      });
    }
  }
  return { damage, nodes };
}

export function expireRuntimeState(state: EffectRuntimeState, timestamp: number): StepTrigger[] {
  const nodes: StepTrigger[] = [];
  for (const [key, entry] of state.values) {
    if (entry.expiresAt === null || timestamp < entry.expiresAt) continue;
    state.values.delete(key);
    const label = entry.label.replace(/ (?:Armed|Stacks?|Cooldown|Active)$/, "");
    nodes.push(stateNode(entry.sourceId.includes(":P") ? "passive" : "champion", `${label} Expired`, `${entry.key} expired.`));
  }
  for (const [key, entry] of state.statModifiers) {
    if (entry.expiresAt !== null && timestamp >= entry.expiresAt) {
      state.statModifiers.delete(key);
      nodes.push(stateNode("champion", `${entry.label} Expired`, `${entry.stat} returned to its unmodified value.`));
    }
  }
  for (const [key, entry] of state.amplifiers) if (entry.expiresAt !== null && timestamp >= entry.expiresAt) state.amplifiers.delete(key);
  for (const [key, entry] of state.resistanceModifiers) if (entry.expiresAt !== null && timestamp >= entry.expiresAt) state.resistanceModifiers.delete(key);
  for (const [key, entry] of state.shieldEntries) {
    if (timestamp < entry.expiresAt) continue;
    state.shieldEntries.delete(key);
    state.shields[entry.side] = Math.max(0, state.shields[entry.side] - entry.amount);
    nodes.push(stateNode(entry.source, `${entry.label} Expired`, `The ${Number(entry.amount.toFixed(2))} shield expired.`));
  }
  return nodes;
}

function modifierFormulaContext(base: ResolvedStats, modifier: RuntimeStatModifier, state: EffectRuntimeState): FormulaContext {
  const values = Object.fromEntries([...state.values.values()]
    .filter((entry) => entry.side === modifier.side)
    .map((entry) => [entry.key, entry.value]));
  return {
    spellRank: modifier.rank,
    championLevel: modifier.level,
    effects: {},
    named: {},
    stats: {
      baseAttackDamage: base.baseAttackDamage,
      bonusAttackDamage: base.bonusAttackDamage,
      totalAttackDamage: base.attackDamage,
      totalAbilityPower: base.abilityPower,
      totalArmor: base.armor,
      totalMagicResist: base.magicResist,
      attackSpeed: base.attackSpeed ?? 0,
    },
    state: values,
    counters: values,
    conditions: {},
  };
}

export function applyRuntimeStatModifiers(base: ResolvedStats, state: EffectRuntimeState, side: RuntimeSide, timestamp: number) {
  let next = { ...base };
  for (const modifier of state.statModifiers.values()) {
    if (modifier.side !== side || (modifier.expiresAt !== null && timestamp >= modifier.expiresAt)) continue;
    if (modifier.activeWhileState && ![...state.values.values()].some((entry) => entry.side === side && entry.key === modifier.activeWhileState)) continue;
    const amount = evaluateFormula(modifier.formula, modifierFormulaContext(next, modifier, state));
    if (modifier.stat === "attackDamage") {
      const delta = modifier.mode === "percent" ? base.attackDamage * amount : amount;
      next = { ...next, attackDamage: next.attackDamage + delta, bonusAttackDamage: next.bonusAttackDamage + delta };
    } else if (modifier.stat === "abilityPower") {
      next = { ...next, abilityPower: next.abilityPower + (modifier.mode === "percent" ? base.abilityPower * amount : amount) };
    } else if (modifier.stat === "armor") {
      next = { ...next, armor: next.armor + (modifier.mode === "percent" ? base.armor * amount : amount) };
    } else if (modifier.stat === "magicResist") {
      next = { ...next, magicResist: next.magicResist + (modifier.mode === "percent" ? base.magicResist * amount : amount) };
    } else if (modifier.stat === "attackSpeed") {
      const attackSpeed = next.attackSpeed ?? 0;
      next = { ...next, attackSpeed: attackSpeed + (modifier.mode === "percent" ? (base.attackSpeed ?? 0) * amount : amount) };
    } else if (next.abilityPower > next.bonusAttackDamage * (5 / 3)) {
      next = { ...next, abilityPower: next.abilityPower + amount };
    } else {
      const attackDamage = amount * 0.6;
      next = { ...next, attackDamage: next.attackDamage + attackDamage, bonusAttackDamage: next.bonusAttackDamage + attackDamage };
    }
  }
  return next;
}

export function runtimeDamageMultiplier(state: EffectRuntimeState, side: RuntimeSide, type: DamageType, timestamp: number) {
  let multiplier = 1;
  for (const entry of state.amplifiers.values()) {
    if (entry.side !== side || (entry.expiresAt !== null && timestamp >= entry.expiresAt)) continue;
    if (!entry.damageType || entry.damageType === type) multiplier *= 1 + entry.amount;
  }
  return multiplier;
}

export function applyRuntimeResistanceModifiers(base: ResolvedStats, state: EffectRuntimeState, side: RuntimeSide, timestamp: number) {
  let next = { ...base };
  for (const entry of state.resistanceModifiers.values()) {
    if (entry.side !== side || (entry.expiresAt !== null && timestamp >= entry.expiresAt)) continue;
    const current = next[entry.stat];
    next = { ...next, [entry.stat]: entry.mode === "flat-reduction" ? current - entry.amount : current * (1 - entry.amount) };
  }
  return next;
}
