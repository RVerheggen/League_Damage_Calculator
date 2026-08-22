import type { CombatantConfig, ComboAction, ScenarioV2 } from "@/src/domain/model";

export function defaultCombatant(championId: number): CombatantConfig {
  return {
    championId,
    level: 11,
    abilityRanks: { Q: 5, W: 1, E: 3, R: 2 },
    itemIds: [],
    runeIds: [],
    shardIds: [],
    currentHealth: null,
    startingShield: 0,
    inputs: {},
    overrides: {},
  };
}

export function action(kind: ComboAction["kind"], key: string, delay = 0.15, parameters: ComboAction["parameters"] = {}): ComboAction {
  return {
    id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
    kind,
    actionId: kind === "attack" ? "unresolved:AA" : kind === "wait" ? "system:wait" : `unresolved:${key}`,
    key,
    delay,
    enabled: true,
    outcome: "normal",
    parameters,
  };
}

export function defaultScenario(patch: string): ScenarioV2 {
  return {
    schemaVersion: 2,
    patch,
    randomnessMode: "deterministic",
    attacker: defaultCombatant(78),
    defender: defaultCombatant(44),
    combo: [
      action("attack", "AA", 0),
      action("ability", "Q", 0.12, { hitCount: 1 }),
      action("wait", "WAIT", 1),
      { ...action("ability", "Q2", 0, { hitCount: 1 }), label: "Hammer Shock Detonation" },
      action("attack", "AA", 0),
      action("ability", "E", 0.18, { wallCollision: true }),
      action("ability", "R", 0.3, { chargePercent: 0 }),
    ],
    settings: { resolvePendingDamage: true, continueAfterLethal: false },
  };
}
