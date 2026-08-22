import type { EffectProgramDefinition, ItemDefinition, RuneDefinition } from "../src/domain/model";

const literal = (value: number) => ({ type: "literal" as const, value });
const state = (key: string) => ({ type: "state" as const, key });

export function applyItemEffectCatalog(item: ItemDefinition) {
  if (item.id === 8020) {
    item.inputs = [{
      id: "item:8020:within-700",
      type: "boolean",
      label: "Unmake Aura",
      description: "Opponent Within 700 Range",
      defaultValue: false,
    }];
    item.effectPrograms = [{
      id: "item:8020:unmake",
      label: "Abyssal Mask - Unmake",
      owner: "item",
      sourceId: "item:8020",
      template: "conditional-amplifier",
      triggers: [{
        id: "item:8020:unmake:start",
        event: "scenario-start",
        priority: 30,
        conditions: [{ type: "parameter", key: "item:8020:within-700", operator: "eq", value: true }],
        operations: [{ type: "damage-amplifier", key: "unmake", damageType: "magic", formula: literal(0.12), label: "Unmake" }],
      }],
    }];
  } else {
    item.inputs ??= [];
    item.effectPrograms ??= [];
  }
  return item;
}

const conqueror: EffectProgramDefinition = {
  id: "rune:8010:conqueror",
  label: "Conqueror",
  owner: "rune",
  sourceId: "rune:8010",
  template: "timed-stat-modifier",
  triggers: [
    {
      id: "rune:8010:stats",
      event: "scenario-start",
      priority: 20,
      conditions: [],
      operations: [{
        type: "stat-modifier",
        key: "conqueror-adaptive",
        stat: "adaptiveForce",
        mode: "flat",
        formula: { type: "product", nodes: [state("conqueror"), { type: "level-interpolation", start: 1.8, end: 4 }] },
        activeWhileState: "conqueror",
        label: "Conqueror Adaptive Force",
      }],
    },
    {
      id: "rune:8010:stacks",
      event: "action-complete",
      priority: 20,
      conditions: [{ type: "hit", value: true }],
      operations: [{
        type: "increment-state",
        key: "conqueror",
        scope: "participant",
        amount: { type: "event", key: "conquerorStacks", fallback: 2 },
        maximum: literal(12),
        duration: literal(5),
        label: "Conqueror Stacks",
      }],
    },
  ],
};

const scorch: EffectProgramDefinition = {
  id: "rune:8237:scorch",
  label: "Scorch",
  owner: "rune",
  sourceId: "rune:8237",
  template: "scheduled-damage",
  triggers: [{
    id: "rune:8237:trigger",
    event: "ability-hit",
    priority: 40,
    conditions: [{ type: "hit", value: true }, { type: "state-inactive", key: "scorch-lockout", scope: "participant" }],
    operations: [
      { type: "schedule-damage", label: "Scorch", damageType: "magic", formula: { type: "level-interpolation", start: 20, end: 40 }, delay: literal(1), formulaLabel: "20 to 40 magic damage by level after one second" },
      { type: "set-state", key: "scorch-lockout", scope: "participant", value: literal(1), duration: literal(10), label: "Scorch Cooldown" },
    ],
  }],
};

export function applyRuneEffectCatalog(rune: RuneDefinition) {
  rune.effectPrograms = rune.id === 8010 ? [conqueror] : rune.id === 8237 ? [scorch] : [];
  return rune;
}
