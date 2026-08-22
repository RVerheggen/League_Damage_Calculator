/* eslint-disable @typescript-eslint/no-explicit-any */
import { createHash } from "node:crypto";
import type { FormulaNode } from "../src/domain/formula";
import type {
  ActionDefinition,
  ActionParameterDefinition,
  ChampionDefinition,
  CombatSourceReview,
  Coverage,
  EffectProgramDefinition,
  EffectTemplateId,
  PassiveDefinition,
  ReviewedEffectComponent,
  ScenarioInputDefinition,
  SpellDefinition,
  SpellEffectDefinition,
} from "../src/domain/model";

const five = (value = 0) => [value, value, value, value, value];
const literal = (value: number): FormulaNode => ({ type: "literal", value });
const ranked = (values: number[]): FormulaNode => ({ type: "ranked", values });
const stat = (key: string, coefficient?: number): FormulaNode => ({ type: "stat", key, coefficient });
const state = (key: string, coefficient?: number): FormulaNode => ({ type: "state", key, coefficient });
const event = (key: string, coefficient?: number, fallback?: number): FormulaNode => ({ type: "event", key, coefficient, fallback });
const input = (key: string, coefficient?: number, fallback?: number): FormulaNode => ({ type: "input", key, coefficient, fallback });
const sum = (...nodes: FormulaNode[]): FormulaNode => ({ type: "sum", nodes });
const product = (...nodes: FormulaNode[]): FormulaNode => ({ type: "product", nodes });

type ChampionLike = Pick<ChampionDefinition, "id" | "alias" | "name" | "title" | "roles" | "icon" | "stats"> & {
  passive: { name: string; description: string; icon: string } | PassiveDefinition | null;
  spells: SpellDefinition[];
  actions?: ActionDefinition[];
  inputs?: ScenarioInputDefinition[];
  effectPrograms?: EffectProgramDefinition[];
};

type KnownSource = {
  components: ReviewedEffectComponent[];
  programs?: EffectProgramDefinition[];
  effects?: SpellEffectDefinition[];
  coverage?: Coverage;
  coverageNote?: string;
  castable?: boolean;
  parameters?: ActionParameterDefinition[];
  extraActions?: ActionDefinition[];
  primaryCalculation?: string | null;
  cooldownPolicy?: ActionDefinition["cooldownPolicy"];
  inputs?: ScenarioInputDefinition[];
  spellPatch?: Partial<Pick<SpellDefinition, "damageType" | "baseDamage" | "ratioAD" | "ratioAP" | "scalings">>;
};

const sourceId = (championId: number, key: string) => `champion:${championId}:${key}`;
const castActionId = (championId: number, key: string) => `${sourceId(championId, key)}:cast`;
const attackActionId = (championId: number) => `${sourceId(championId, "AA")}:attack`;

function checksum(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function component(
  id: string,
  label: string,
  description: string,
  coverage: Coverage,
  template: EffectTemplateId | null,
  reason: string,
  options: Partial<ReviewedEffectComponent> = {},
): ReviewedEffectComponent {
  return {
    id,
    label,
    description,
    relevance: coverage === "out-of-scope" ? "neither" : "attacker",
    disposition: coverage === "out-of-scope" ? "out-of-scope" : template ? "template" : "custom",
    coverage,
    reason,
    ...(template ? { template } : {}),
    ...options,
  };
}

function program(
  id: string,
  label: string,
  owner: EffectProgramDefinition["owner"],
  source: string,
  template: EffectTemplateId,
  rankSource: string | undefined,
  triggers: EffectProgramDefinition["triggers"],
): EffectProgramDefinition {
  return { id, label, owner, sourceId: source, template, rankSource, triggers };
}

function armNextHit(
  championId: number,
  key: string,
  label: string,
  duration: number,
  damageType: "physical" | "magic" | "true",
  formula: FormulaNode,
  formulaLabel: string,
  options: { consumeOnSourceIds?: string[]; critical?: "never" | "attack"; cooldownOnConsume?: number[] } = {},
) {
  const source = sourceId(championId, key);
  const stateKey = `${source}:armed`;
  const consumeOperations: EffectProgramDefinition["triggers"][number]["operations"] = [
    { type: "damage", label: `${label} - Bonus Damage`, damageType, formula, formulaLabel, critical: options.critical },
    { type: "consume-state", key: stateKey, scope: "participant", label: `${label} Consumed` },
  ];
  if (options.cooldownOnConsume) consumeOperations.push({
    type: "cooldown-modifier",
    sourceId: source,
    mode: "set-total",
    formula: ranked(options.cooldownOnConsume),
    label: `${label} Cooldown Started`,
  });
  const triggers: EffectProgramDefinition["triggers"] = [
    {
      id: `${source}:arm`, event: "cast", priority: 10,
      conditions: [{ type: "source-id", value: source }],
      operations: [{ type: "set-state", key: stateKey, scope: "participant", value: literal(1), duration: literal(duration), label: `${label} Armed` }],
    },
    {
      id: `${source}:attack`, event: "basic-attack-hit", priority: 20,
      conditions: [{ type: "state-active", key: stateKey, scope: "participant" }, { type: "hit", value: true }],
      operations: consumeOperations,
    },
  ];
  for (const consumeSourceId of options.consumeOnSourceIds ?? []) {
    triggers.push({
      id: `${source}:consume:${consumeSourceId}`, event: "ability-hit", priority: 20,
      conditions: [{ type: "source-id", value: consumeSourceId }, { type: "state-active", key: stateKey, scope: "participant" }, { type: "hit", value: true }],
      operations: consumeOperations,
    });
  }
  if (options.cooldownOnConsume) {
    triggers[0].operations.push({
      type: "cooldown-modifier",
      sourceId: source,
      mode: "set-total",
      formula: sum(literal(duration), ranked(options.cooldownOnConsume)),
      label: `${label} Expiry Cooldown Reserved`,
    });
  }
  return program(`${source}:arm-next-hit`, label, "champion", source, "arm-next-hit", key, triggers);
}

function timedOnHit(
  championId: number,
  key: string,
  label: string,
  duration: number,
  damageType: "physical" | "magic" | "true",
  formula: FormulaNode,
  formulaLabel: string,
  options: {
    stateKey?: string;
    castOperations?: EffectProgramDefinition["triggers"][number]["operations"];
    additionalTriggers?: EffectProgramDefinition["triggers"];
  } = {},
) {
  const source = sourceId(championId, key);
  const stateKey = options.stateKey ?? `${source}:active`;
  return program(`${source}:timed-on-hit`, label, "champion", source, "timed-on-hit", key, [
    {
      id: `${source}:activate`, event: "cast", priority: 10,
      conditions: [{ type: "source-id", value: source }, { type: "rank-at-least", sourceId: key, value: 1 }],
      operations: [
        { type: "set-state", key: stateKey, scope: "participant", value: literal(1), duration: literal(duration), label: `${label} Active` },
        ...(options.castOperations ?? []),
      ],
    },
    {
      id: `${source}:on-hit`, event: "basic-attack-hit", priority: 10,
      conditions: [{ type: "state-active", key: stateKey, scope: "participant" }, { type: "hit", value: true }],
      operations: [{ type: "damage", label: `${label} On-Hit`, damageType, formula, formulaLabel }],
    },
    ...(options.additionalTriggers ?? []),
  ]);
}

function limitedAttackState(
  championId: number,
  key: string,
  label: string,
  attackCount: number,
  duration: number,
  damageType: "physical" | "magic" | "true",
  formula: FormulaNode,
  formulaLabel: string,
  options: {
    stateKey?: string;
    castOperations?: EffectProgramDefinition["triggers"][number]["operations"];
    hitOperations?: EffectProgramDefinition["triggers"][number]["operations"];
    refreshDurationOnHit?: boolean;
  } = {},
) {
  const source = sourceId(championId, key);
  const stateKey = options.stateKey ?? `${source}:attacks`;
  return program(`${source}:limited-attacks`, label, "champion", source, "limited-attack-state", key, [
    {
      id: `${source}:activate`, event: "cast", priority: 10,
      conditions: [{ type: "source-id", value: source }, { type: "rank-at-least", sourceId: key, value: 1 }],
      operations: [
        { type: "set-state", key: stateKey, scope: "participant", value: literal(attackCount), duration: literal(duration), label: `${label} Attacks` },
        ...(options.castOperations ?? []),
      ],
    },
    {
      id: `${source}:attack`, event: "basic-attack-hit", priority: 10,
      conditions: [{ type: "state-active", key: stateKey, scope: "participant" }, { type: "hit", value: true }],
      operations: [
        { type: "damage", label: `${label} On-Hit`, damageType, formula, formulaLabel },
        ...(options.hitOperations ?? []),
        {
          type: "decrement-state",
          key: stateKey,
          scope: "participant",
          amount: literal(1),
          ...(options.refreshDurationOnHit ? { refreshDuration: literal(duration) } : {}),
          label: `${label} Attack Consumed`,
        },
      ],
    },
  ]);
}

function knownSources(): Map<string, KnownSource> {
  const sources = new Map<string, KnownSource>();
  const set = (championId: number, key: string, value: KnownSource) => sources.set(sourceId(championId, key), value);

  set(67, "P", {
    coverage: "out-of-scope",
    components: [component("vayne-p-movement", "Night Hunter Movement", "Movement speed while chasing does not change damage, mitigation, shields, or cooldown state in a manually timed duel.", "out-of-scope", null, "Movement is outside the supported damage result.")],
  });
  set(67, "Q", {
    coverage: "modeled",
    coverageNote: "Tumble arms a timed next-attack program using patch-ranked total AD and AP formulas.",
    effects: [{
      id: "vayne-q-tumble", label: "Empowered Next Attack", kind: "next-attack", coverage: "modeled",
      description: "For 3 seconds, the next successful basic attack adds physical damage and consumes the state.",
      damageType: "physical", formulaLabel: "75 / 85 / 95 / 105 / 115% total AD + 50% AP",
      formula: sum(product(ranked([0.75, 0.85, 0.95, 1.05, 1.15]), stat("totalAttackDamage")), stat("totalAbilityPower", 0.5)),
    }],
    components: [component("vayne-q-next-hit", "Tumble Next Attack", "A three-second single-use empowered attack that survives misses and cannot critically strike.", "modeled", "arm-next-hit", "Compiled by the generic arm-next-hit template.", { formulaBindings: ["VayneQ.AttackDamageRatio", "VayneQ.APRatio"], valueBindings: ["VayneQ.BuffDuration"] })],
    programs: [armNextHit(67, "Q", "Tumble", 3, "physical", sum(product(ranked([0.75, 0.85, 0.95, 1.05, 1.15]), stat("totalAttackDamage")), stat("totalAbilityPower", 0.5)), "75 / 85 / 95 / 105 / 115% total AD + 50% AP")],
    spellPatch: {
      damageType: "physical",
      baseDamage: five(),
      ratioAD: 0.75,
      ratioAP: 0.5,
      scalings: [
        { stat: "attackDamage", scope: "total", values: [0.75, 0.85, 0.95, 1.05, 1.15] },
        { stat: "abilityPower", scope: "total", values: five(0.5) },
      ],
    },
  });
  set(67, "W", {
    coverage: "modeled",
    castable: false,
    coverageNote: "Silver Bolts uses a per-target expiring counter and threshold damage program.",
    effects: [{
      id: "vayne-w-silver-bolts", label: "Silver Bolts Third Hit", kind: "passive-proc", coverage: "modeled",
      description: "Basic attacks and Condemn add a 3.5-second stack. The third stack consumes the counter and deals maximum-health true damage with a minimum.",
      damageType: "true", formulaLabel: "max(6 / 7 / 8 / 9 / 10% target max health, 50 / 65 / 80 / 95 / 110)",
      formula: { type: "max", nodes: [product(ranked([0.06, 0.07, 0.08, 0.09, 0.1]), { type: "target-stat", key: "maxHealth" }), ranked([50, 65, 80, 95, 110])] },
    }],
    components: [component("vayne-w-stacks", "Silver Bolts", "Basic attacks and Condemn add a per-target stack for 3.5 seconds. At three stacks, all stacks are consumed for true damage.", "modeled", "stacking-proc", "Compiled by the generic stacking-proc template.", { formulaBindings: ["VayneW.SilverBoltsDamage"], valueBindings: ["VayneW.StackDuration", "VayneW.MaxStacks"] })],
    programs: [program("champion:67:W:silver-bolts", "Silver Bolts", "champion", sourceId(67, "W"), "stacking-proc", "W", [
      { id: "vayne-w-attack-stack", event: "basic-attack-hit", priority: 10, conditions: [{ type: "hit", value: true }, { type: "rank-at-least", sourceId: "W", value: 1 }], operations: [{ type: "increment-state", key: "silver-bolts", amount: literal(1), maximum: literal(3), duration: literal(3.5), label: "Silver Bolts Stack" }] },
      { id: "vayne-w-condemn-stack", event: "ability-hit", priority: 10, conditions: [{ type: "source-id", value: sourceId(67, "E") }, { type: "hit", value: true }, { type: "rank-at-least", sourceId: "W", value: 1 }], operations: [{ type: "increment-state", key: "silver-bolts", amount: literal(1), maximum: literal(3), duration: literal(3.5), label: "Silver Bolts Stack" }] },
      { id: "vayne-w-proc-attack", event: "basic-attack-hit", priority: 20, conditions: [{ type: "state-value", key: "silver-bolts", operator: "gte", value: 3 }], operations: [{ type: "damage", label: "Silver Bolts - Third Hit", damageType: "true", formula: { type: "max", nodes: [product(ranked([0.06, 0.07, 0.08, 0.09, 0.1]), { type: "target-stat", key: "maxHealth" }), ranked([50, 65, 80, 95, 110])] }, formulaLabel: "Maximum-health true damage with a rank-based minimum" }, { type: "consume-state", key: "silver-bolts", label: "Silver Bolts Consumed" }] },
      { id: "vayne-w-proc-condemn", event: "ability-hit", priority: 20, conditions: [{ type: "source-id", value: sourceId(67, "E") }, { type: "state-value", key: "silver-bolts", operator: "gte", value: 3 }], operations: [{ type: "damage", label: "Silver Bolts - Third Hit", damageType: "true", formula: { type: "max", nodes: [product(ranked([0.06, 0.07, 0.08, 0.09, 0.1]), { type: "target-stat", key: "maxHealth" }), ranked([50, 65, 80, 95, 110])] }, formulaLabel: "Maximum-health true damage with a rank-based minimum" }, { type: "consume-state", key: "silver-bolts", label: "Silver Bolts Consumed" }] },
    ])],
    spellPatch: { baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
  });
  set(67, "E", {
    coverage: "modeled",
    coverageNote: "Condemn direct damage, terrain collision, and Silver Bolts application are modeled.",
    parameters: [{ id: "wallCollision", type: "boolean", label: "Hits Terrain", defaultValue: false }],
    components: [component("vayne-e-damage", "Condemn", "Physical damage applies one Silver Bolts stack. Terrain collision adds a separate 150% bonus packet.", "modeled", "direct-damage", "The primary packet is generic and the terrain child packet is declarative.", { formulaBindings: ["VayneE.TotalDamage"] })],
    programs: [program("champion:67:E:terrain", "Condemn Terrain Collision", "champion", sourceId(67, "E"), "multi-hit-action", "E", [{
      id: "vayne-e-terrain", event: "ability-hit", priority: 5,
      conditions: [{ type: "source-id", value: sourceId(67, "E") }, { type: "parameter", key: "wallCollision", operator: "eq", value: true }],
      operations: [{ type: "damage", label: "Condemn - Terrain Collision", damageType: "physical", formula: product(literal(1.5), sum(ranked([50, 85, 120, 155, 190]), stat("bonusAttackDamage", 0.5))), formulaLabel: "150% bonus of 50 / 85 / 120 / 155 / 190 + 50% bonus AD" }],
    }])],
    primaryCalculation: null,
    spellPatch: {
      damageType: "physical",
      baseDamage: [50, 85, 120, 155, 190],
      ratioAD: 0.5,
      ratioAP: 0,
      scalings: [{ stat: "attackDamage", scope: "bonus", values: five(0.5) }],
    },
  });
  set(67, "R", {
    coverage: "modeled",
    coverageNote: "Final Hour uses timed stat state and a declarative Tumble cooldown modifier.",
    effects: [
      { id: "vayne-r-final-hour", label: "Final Hour Attack Damage", kind: "stat-buff", coverage: "modeled", description: "Grants 35 / 50 / 65 attack damage for 8 / 10 / 12 seconds.", formulaLabel: "+35 / 50 / 65 attack damage" },
      { id: "vayne-r-tumble-cooldown", label: "Tumble Cooldown", kind: "cooldown-modifier", coverage: "modeled", description: "Reduces Tumble cooldown while Final Hour is active.", formulaLabel: "30 / 40 / 50% cooldown reduction" },
      { id: "vayne-r-utility", label: "Movement And Invisibility", kind: "utility", coverage: "out-of-scope", description: "Movement speed and invisibility do not alter the supported damage result." },
    ],
    components: [
      component("vayne-r-ad", "Final Hour Attack Damage", "Grants rank-based attack damage for 8 / 10 / 12 seconds.", "modeled", "timed-stat-modifier", "Compiled as timed state and a dynamic stat modifier."),
      component("vayne-r-q-cooldown", "Tumble Cooldown", "Tumble cooldown is reduced while Final Hour is active.", "modeled", "cooldown-modifier", "Compiled as a conditional remaining-cooldown modifier."),
      component("vayne-r-utility", "Movement And Invisibility", "Movement speed and invisibility do not alter supported damage state.", "out-of-scope", null, "Movement and visibility are outside scope."),
    ],
    programs: [program("champion:67:R:final-hour", "Final Hour", "champion", sourceId(67, "R"), "timed-stat-modifier", "R", [
      { id: "vayne-r-cast", event: "cast", priority: 10, conditions: [{ type: "source-id", value: sourceId(67, "R") }], operations: [
        { type: "set-state", key: "final-hour", scope: "participant", value: literal(1), duration: ranked([8, 10, 12]), label: "Final Hour" },
        { type: "stat-modifier", key: "final-hour-ad", stat: "attackDamage", mode: "flat", formula: ranked([35, 50, 65]), activeWhileState: "final-hour", label: "Final Hour Attack Damage" },
      ] },
      { id: "vayne-r-q-cooldown", event: "cast", priority: 30, conditions: [{ type: "source-id", value: sourceId(67, "Q") }, { type: "state-active", key: "final-hour", scope: "participant" }], operations: [{ type: "cooldown-modifier", sourceId: sourceId(67, "Q"), mode: "remaining-percent", formula: ranked([0.3, 0.4, 0.5]), label: "Final Hour Tumble Cooldown" }] },
    ])],
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
  });

  const empowered: Array<[number, string, string, number, "physical" | "magic", FormulaNode, string, Parameters<typeof armNextHit>[7]?]> = [
    [24, "W", "Empower", 10, "magic", sum(ranked([50, 85, 120, 155, 190]), stat("totalAbilityPower", 0.6)), "50 / 85 / 120 / 155 / 190 + 60% AP", { consumeOnSourceIds: [sourceId(24, "Q")] }],
    [122, "W", "Crippling Strike", 4, "physical", product(ranked([0.4, 0.45, 0.5, 0.55, 0.6]), stat("totalAttackDamage")), "+40 / 45 / 50 / 55 / 60% total AD", { critical: "attack" }],
    [86, "Q", "Decisive Strike", 4.5, "physical", sum(ranked([30, 60, 90, 120, 150]), stat("totalAttackDamage", 0.5)), "30 / 60 / 90 / 120 / 150 + 50% total AD", {}],
    [53, "E", "Power Fist", 5, "physical", sum(stat("totalAttackDamage"), stat("totalAbilityPower", 0.25)), "+100% total AD + 25% AP", { cooldownOnConsume: [7, 6.5, 6, 5.5, 5] }],
    [89, "Q", "Shield of Daybreak", 6, "magic", sum(ranked([10, 35, 60, 85, 110]), stat("totalAbilityPower", 0.3)), "10 / 35 / 60 / 85 / 110 + 30% AP", {}],
  ];
  for (const [championId, key, label, duration, damageType, formula, formulaLabel, options] of empowered) {
    set(championId, key, {
      coverage: "modeled",
      coverageNote: `${label} is compiled as a timed single-use empowered attack.`,
      effects: [{
        id: `${sourceId(championId, key)}:next-hit`, label, kind: "next-attack", coverage: "modeled",
        description: `For ${duration} seconds, the next qualifying hit adds damage and consumes the armed state.`,
        damageType, formulaLabel, formula,
      }],
      components: [component(`${sourceId(championId, key)}:next-hit`, label, `Arms the next qualifying hit for ${duration} seconds.`, "modeled", "arm-next-hit", "Compiled by the reusable arm-next-hit template.")],
      programs: [armNextHit(championId, key, label, duration, damageType, formula, formulaLabel, options)],
      cooldownPolicy: championId === 53 && key === "E" ? "consume-or-expire" : undefined,
      spellPatch: { damageType, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
    });
  }

  set(96, "W", {
    coverage: "modeled",
    coverageNote: "Bio-Arcane Barrage applies its patch-ranked maximum-health magic damage to each successful basic attack for eight seconds. Bonus range and the monster cap are outside the champion-target calculation.",
    effects: [{
      id: "kogmaw-w-on-hit", label: "Bio-Arcane Barrage On-Hit", kind: "passive-proc", coverage: "modeled",
      description: "For eight seconds, successful basic attacks add magic damage based on the target's maximum health.",
      damageType: "magic", formulaLabel: "3 / 3.75 / 4.5 / 5.25 / 6% target max health + 1.5% per 100 AP",
      formula: product({ type: "target-stat", key: "maxHealth" }, sum(ranked([0.03, 0.0375, 0.045, 0.0525, 0.06]), stat("totalAbilityPower", 0.00015))),
    }],
    components: [
      component("kogmaw-w-on-hit", "Bio-Arcane Barrage On-Hit", "Casting W empowers every successful basic attack for eight seconds with maximum-health magic damage.", "modeled", "timed-on-hit", "Compiled by the reusable timed-on-hit template.", { formulaBindings: ["KogMawW.TotalHealthDamage"], valueBindings: ["KogMawW.Duration"] }),
      component("kogmaw-w-range", "Bonus Attack Range", "W grants rank-based attack range while active.", "out-of-scope", null, "Range does not change a manually selected successful hit."),
      component("kogmaw-w-monster-cap", "Monster Damage Cap", "The on-hit damage is capped against monsters.", "out-of-scope", null, "The supported target is a champion."),
    ],
    programs: [timedOnHit(96, "W", "Bio-Arcane Barrage", 8, "magic", product({ type: "target-stat", key: "maxHealth" }, sum(ranked([0.03, 0.0375, 0.045, 0.0525, 0.06]), stat("totalAbilityPower", 0.00015))), "3 / 3.75 / 4.5 / 5.25 / 6% target max health + 1.5% per 100 AP")],
    primaryCalculation: null,
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
  });

  set(887, "E", {
    coverage: "modeled",
    coverageNote: "Skip 'n Slash applies its four-second attack-speed and magic on-hit buffs, and the first successful attack refunds the patch-ranked share of E's total cooldown. Dash, range, and attack-timer reset behavior are outside manually timed damage.",
    effects: [
      { id: "gwen-e-on-hit", label: "Skip 'n Slash On-Hit", kind: "stat-buff", coverage: "modeled", description: "For four seconds, successful basic attacks add magic damage.", damageType: "magic", formulaLabel: "15 + 20% AP", formula: sum(literal(15), stat("totalAbilityPower", 0.2)) },
      { id: "gwen-e-attack-speed", label: "Skip 'n Slash Attack Speed", kind: "stat-buff", coverage: "modeled", description: "Grants 30 / 42.5 / 55 / 67.5 / 80% attack speed for four seconds.", formulaLabel: "30 / 42.5 / 55 / 67.5 / 80% attack speed" },
      { id: "gwen-e-cooldown", label: "Skip 'n Slash Cooldown Refund", kind: "cooldown-modifier", coverage: "modeled", description: "The first successful basic attack refunds 25 / 35 / 45 / 55 / 65% of E's total cooldown.", formulaLabel: "25 / 35 / 45 / 55 / 65% of total cooldown" },
    ],
    components: [
      component("gwen-e-on-hit", "Skip 'n Slash On-Hit", "Successful basic attacks during the four-second buff add 15 plus 20% AP magic damage.", "modeled", "timed-on-hit", "Compiled by the reusable timed-on-hit template.", { formulaBindings: ["GwenE.OnHitDamage"], valueBindings: ["GwenE.BuffDuration"] }),
      component("gwen-e-attack-speed", "Skip 'n Slash Attack Speed", "Casting E grants rank-based attack speed for four seconds.", "modeled", "timed-stat-modifier", "Compiled as a dynamic timed stat modifier.", { formulaBindings: ["GwenE.BonusAttackSpeed"] }),
      component("gwen-e-cooldown", "Skip 'n Slash Cooldown Refund", "The first successful basic attack during the buff reduces E's remaining cooldown by a rank-based share of its total cooldown.", "modeled", "cooldown-modifier", "Compiled as a one-use cooldown operation.", { valueBindings: ["GwenE.CDRefund"] }),
      component("gwen-e-mobility", "Dash, Range, And Attack Reset", "E dashes, resets the basic-attack timer, and grants attack range.", "out-of-scope", null, "Movement, range, and attack-timer automation do not change a manually timed successful hit."),
    ],
    programs: [timedOnHit(887, "E", "Skip 'n Slash", 4, "magic", sum(literal(15), stat("totalAbilityPower", 0.2)), "15 + 20% AP", {
      stateKey: "skip-n-slash",
      castOperations: [
        { type: "set-state", key: "skip-n-slash-refund", scope: "participant", value: literal(1), duration: literal(4), label: "Skip 'n Slash Refund Ready" },
        { type: "stat-modifier", key: "skip-n-slash-as", stat: "attackSpeed", mode: "percent", formula: ranked([0.3, 0.425, 0.55, 0.675, 0.8]), activeWhileState: "skip-n-slash", label: "Skip 'n Slash Attack Speed" },
      ],
      additionalTriggers: [{
        id: "champion:887:E:cooldown-refund", event: "basic-attack-hit", priority: 20,
        conditions: [{ type: "state-active", key: "skip-n-slash-refund", scope: "participant" }, { type: "hit", value: true }],
        operations: [
          { type: "cooldown-modifier", sourceId: sourceId(887, "E"), mode: "remaining-flat", formula: product(event("cooldown:E"), ranked([0.25, 0.35, 0.45, 0.55, 0.65])), label: "Skip 'n Slash Cooldown Refund" },
          { type: "consume-state", key: "skip-n-slash-refund", scope: "participant", label: "Skip 'n Slash Refund Consumed" },
        ],
      }],
    })],
    primaryCalculation: null,
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
  });

  set(105, "W", {
    coverage: "modeled",
    coverageNote: "Seastone Trident applies a refreshable six-tick bleed, arms the next attack for four seconds, and empowers later attacks for five seconds after the armed hit. Kill-only mana and cooldown behavior is outside the supported same-target continuation.",
    effects: [
      { id: "fizz-w-bleed", label: "Seastone Trident Bleed", kind: "passive-proc", coverage: "modeled", description: "Each successful basic attack applies six magic-damage ticks over three seconds. A later hit refreshes and replaces the remaining ticks.", damageType: "magic", formulaLabel: "30 / 45 / 60 / 75 / 90 + 25% AP total over six ticks", formula: sum(ranked([30, 45, 60, 75, 90]), stat("totalAbilityPower", 0.25)) },
      { id: "fizz-w-active", label: "Seastone Trident Active Attack", kind: "next-attack", coverage: "modeled", description: "Casting W arms the next successful basic attack within four seconds for bonus magic damage.", damageType: "magic", formulaLabel: "50 / 75 / 100 / 125 / 150 + 45% AP", formula: sum(ranked([50, 75, 100, 125, 150]), stat("totalAbilityPower", 0.45)) },
      { id: "fizz-w-follow-up", label: "Seastone Trident Follow-Up On-Hit", kind: "stat-buff", coverage: "modeled", description: "After the armed attack, later attacks add magic damage for five seconds.", damageType: "magic", formulaLabel: "20 / 25 / 30 / 35 / 40 + 30% AP", formula: sum(ranked([20, 25, 30, 35, 40]), stat("totalAbilityPower", 0.3)) },
    ],
    components: [
      component("fizz-w-bleed", "Seastone Trident Bleed", "Basic attacks apply six half-second magic-damage ticks over three seconds. Reapplication refreshes the effect and replaces ticks that have not resolved.", "modeled", "scheduled-damage", "Compiled as refreshable source-target scheduled damage.", { formulaBindings: ["FizzW.DoTDamage"], valueBindings: ["FizzW.BleedDuration", "FizzW.DoTTicksPerSecond"] }),
      component("fizz-w-active", "Seastone Trident Active Attack", "Casting W arms one successful basic attack for four seconds. The attack consumes the armed state and adds patch-ranked magic damage.", "modeled", "arm-next-hit", "Compiled as participant state and a consuming damage operation.", { formulaBindings: ["FizzW.ActiveDamage"], valueBindings: ["FizzW.ActiveDuration"] }),
      component("fizz-w-follow-up", "Seastone Trident Follow-Up On-Hit", "After the armed attack, later successful attacks add patch-ranked magic damage for five seconds.", "modeled", "timed-on-hit", "Compiled as a timed participant state.", { formulaBindings: ["FizzW.OnHitBuffDamage"], valueBindings: ["FizzW.OnHitBuffDuration"] }),
      component("fizz-w-kill", "Kill Refund", "If the armed attack kills, W refunds mana, sets its cooldown to one second, and does not grant the follow-up buff.", "out-of-scope", null, "Mana and target-death continuation do not change the supported damage result. Simulation stops on lethal damage unless the sandbox override is enabled."),
      component("fizz-w-reset", "Basic Attack Reset", "Casting W resets Fizz's basic-attack timer.", "out-of-scope", null, "Combo delays are selected manually."),
    ],
    programs: [program("champion:105:W:seastone-trident", "Seastone Trident", "champion", sourceId(105, "W"), "timed-on-hit", "W", [
      { id: "fizz-w-follow-up-hit", event: "basic-attack-hit", priority: 5, conditions: [{ type: "state-active", key: "seastone-follow-up", scope: "participant" }, { type: "hit", value: true }], operations: [{ type: "damage", label: "Seastone Trident Follow-Up On-Hit", damageType: "magic", formula: sum(ranked([20, 25, 30, 35, 40]), stat("totalAbilityPower", 0.3)), formulaLabel: "20 / 25 / 30 / 35 / 40 + 30% AP" }] },
      { id: "fizz-w-bleed", event: "basic-attack-hit", priority: 10, conditions: [{ type: "rank-at-least", sourceId: "W", value: 1 }, { type: "hit", value: true }], operations: [{ type: "schedule-damage", label: "Seastone Trident Bleed", damageType: "magic", formula: sum(ranked([30, 45, 60, 75, 90]), stat("totalAbilityPower", 0.25)), delay: literal(0), tickCount: literal(6), tickInterval: literal(0.5), replaceKey: "seastone-bleed", scope: "source-target", formulaLabel: "30 / 45 / 60 / 75 / 90 + 25% AP total over six ticks" }] },
      { id: "fizz-w-arm", event: "cast", priority: 10, conditions: [{ type: "source-id", value: sourceId(105, "W") }, { type: "rank-at-least", sourceId: "W", value: 1 }], operations: [{ type: "set-state", key: "seastone-armed", scope: "participant", value: literal(1), duration: literal(4), label: "Seastone Trident Armed" }] },
      { id: "fizz-w-active-hit", event: "basic-attack-hit", priority: 20, conditions: [{ type: "state-active", key: "seastone-armed", scope: "participant" }, { type: "hit", value: true }], operations: [
        { type: "damage", label: "Seastone Trident Active Attack", damageType: "magic", formula: sum(ranked([50, 75, 100, 125, 150]), stat("totalAbilityPower", 0.45)), formulaLabel: "50 / 75 / 100 / 125 / 150 + 45% AP" },
        { type: "consume-state", key: "seastone-armed", scope: "participant", label: "Seastone Trident Armed State Consumed" },
        { type: "set-state", key: "seastone-follow-up", scope: "participant", value: literal(1), duration: literal(5), label: "Seastone Trident Follow-Up Active" },
      ] },
    ])],
    primaryCalculation: null,
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
  });

  set(11, "E", {
    coverage: "modeled",
    coverageNote: "Wuju Style applies its patch-ranked true damage to every successful basic attack for five seconds. Missed attacks do not create a packet, and the timed state expires explicitly.",
    effects: [{
      id: "masteryi-e-on-hit", label: "Wuju Style On-Hit", kind: "passive-proc", coverage: "modeled",
      description: "For five seconds, every successful basic attack adds true damage.",
      damageType: "true", formulaLabel: "20 / 25 / 30 / 35 / 40 + 35% total AD",
      formula: sum(ranked([20, 25, 30, 35, 40]), stat("totalAttackDamage", 0.35)),
    }],
    components: [component("masteryi-e-on-hit", "Wuju Style On-Hit", "Casting E empowers every successful basic attack for five seconds with patch-ranked true damage.", "modeled", "timed-on-hit", "Compiled by the reusable timed-on-hit template.", { formulaBindings: ["WujuStyle.TotalDamage"], valueBindings: ["WujuStyle.BaseDamage", "WujuStyle.ADRatio", "WujuStyle.Duration"] })],
    programs: [timedOnHit(11, "E", "Wuju Style", 5, "true", sum(ranked([20, 25, 30, 35, 40]), stat("totalAttackDamage", 0.35)), "20 / 25 / 30 / 35 / 40 + 35% total AD")],
    primaryCalculation: null,
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
  });

  set(31, "E", {
    coverage: "modeled",
    coverageNote: "Vorpal Spikes empowers the next three successful basic attacks for six seconds. Each hit uses the selected Feast stack input in its patch-ranked maximum-health magic damage. Slow, range, and monster-only behavior do not change champion-target damage.",
    inputs: [{ id: "feastStacks", type: "number", label: "Feast Stacks", description: "Permanent Feast stacks used by Vorpal Spikes.", defaultValue: 0, min: 0, step: 1 }],
    effects: [{
      id: "chogath-e-attacks", label: "Vorpal Spikes", kind: "passive-proc", coverage: "modeled",
      description: "The next three successful basic attacks add flat and maximum-health magic damage.",
      damageType: "magic", formulaLabel: "20 / 40 / 60 / 80 / 100 + 30% AP + (2.5 / 2.85 / 3.2 / 3.55 / 3.9% + 0.5% per Feast stack) target max health",
      formula: sum(
        ranked([20, 40, 60, 80, 100]),
        stat("totalAbilityPower", 0.3),
        product({ type: "target-stat", key: "maxHealth" }, sum(ranked([2.5, 2.85, 3.2, 3.55, 3.9]), input("feastStacks", 0.5, 0)), literal(0.01)),
      ),
    }],
    components: [
      component("chogath-e-attacks", "Vorpal Spikes Attacks", "Casting E empowers the next three successful basic attacks for six seconds with flat and maximum-health magic damage. Feast stacks are a typed pre-combat input.", "modeled", "limited-attack-state", "Compiled by the reusable limited-attack-state template.", { formulaBindings: ["VorpalSpikes.FlatDamageCalc", "VorpalSpikes.MaxHealthPercentCalc"], valueBindings: ["VorpalSpikes.MaximumAttacks", "VorpalSpikes.BuffDuration", "VorpalSpikes.FeastStackMultiplier"] }),
      component("chogath-e-slow", "Vorpal Spikes Slow", "Each spike slows its target.", "out-of-scope", null, "Movement and crowd control do not change a manually selected successful hit."),
      component("chogath-e-range", "Vorpal Spikes Range", "E grants attack range while attacks remain.", "out-of-scope", null, "Attack range does not change a manually selected successful hit."),
      component("chogath-e-monsters", "Vorpal Spikes Monster Cap", "The maximum-health packet is capped against monsters.", "out-of-scope", null, "The supported target is a champion."),
    ],
    programs: [limitedAttackState(31, "E", "Vorpal Spikes", 3, 6, "magic", sum(
      ranked([20, 40, 60, 80, 100]),
      stat("totalAbilityPower", 0.3),
      product({ type: "target-stat", key: "maxHealth" }, sum(ranked([2.5, 2.85, 3.2, 3.55, 3.9]), input("feastStacks", 0.5, 0)), literal(0.01)),
    ), "Flat damage plus Feast-scaled target maximum-health damage")],
    primaryCalculation: null,
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
  });

  set(875, "Q", {
    coverage: "modeled",
    coverageNote: "Knuckle Down empowers the next two successful basic attacks for four seconds with patch-ranked flat and maximum-health physical damage. Movement speed does not change manually timed damage.",
    effects: [{
      id: "sett-q-attacks", label: "Knuckle Down", kind: "passive-proc", coverage: "modeled",
      description: "The next two successful basic attacks add flat and target maximum-health physical damage.",
      damageType: "physical", formulaLabel: "10 / 20 / 30 / 40 / 50 + (1% target max health + 1 / 1.5 / 2 / 2.5 / 3% per 100 total AD)",
      formula: sum(ranked([10, 20, 30, 40, 50]), product({ type: "target-stat", key: "maxHealth" }, sum(ranked(five(0.01)), product(stat("totalAttackDamage"), ranked([0.0001, 0.00015, 0.0002, 0.00025, 0.0003]))))),
    }],
    components: [
      component("sett-q-attacks", "Knuckle Down Attacks", "Casting Q empowers the next two successful basic attacks for four seconds with flat and maximum-health physical damage.", "modeled", "limited-attack-state", "Compiled by the reusable limited-attack-state template. The two retained Sett Q attack records validate the attack count.", { formulaBindings: ["SettQ.MaxHealthDamageCalc"], valueBindings: ["SettQ.BaseDamage", "SettQ.Duration", "SettQAttack", "SettQAttack2"] }),
      component("sett-q-movement", "Knuckle Down Movement Speed", "Casting Q grants movement speed toward enemy champions.", "out-of-scope", null, "Movement does not change manually selected hit timing or damage."),
    ],
    programs: [limitedAttackState(875, "Q", "Knuckle Down", 2, 4, "physical", sum(ranked([10, 20, 30, 40, 50]), product({ type: "target-stat", key: "maxHealth" }, sum(ranked(five(0.01)), product(stat("totalAttackDamage"), ranked([0.0001, 0.00015, 0.0002, 0.00025, 0.0003]))))), "Flat damage plus total-AD-scaled target maximum-health damage")],
    primaryCalculation: null,
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
  });

  set(98, "Q", {
    coverage: "modeled",
    coverageNote: "Twilight Assault grants three attacks for eight seconds. The typed Spirit Blade collision control selects the normal or champion-collision damage and the champion-collision attack-speed buff. Pull slow and attack range are outside manually selected damage.",
    parameters: [{ id: "bladeHitChampion", type: "boolean", label: "Blade Hits Champion", defaultValue: false }],
    effects: [
      { id: "shen-q-normal", label: "Twilight Assault", kind: "passive-proc", coverage: "modeled", description: "Three attacks add flat and target maximum-health magic damage.", damageType: "magic", formulaLabel: "Level-scaled flat damage + 2 / 2.5 / 3 / 3.5 / 4% target max health + 1.5% per 100 AP" },
      { id: "shen-q-strong", label: "Empowered Twilight Assault", kind: "passive-proc", coverage: "modeled", description: "A champion hit by the Spirit Blade upgrades all three attacks and grants attack speed.", damageType: "magic", formulaLabel: "Level-scaled flat damage + 5 / 5.5 / 6 / 6.5 / 7% target max health + 2% per 100 AP" },
    ],
    components: [
      component("shen-q-attacks", "Twilight Assault Attacks", "Casting Q grants three successful basic attacks within eight seconds. A typed cast parameter selects normal or champion-collision damage.", "modeled", "limited-attack-state", "Compiled as mutually exclusive normal and empowered limited attack states.", { formulaBindings: ["ShenQ.BaseFlatDamage", "ShenQ.BasePercentHealth", "ShenQ.EmpPercentHealth"], valueBindings: ["ShenQ.NumEnhancedAttacks", "ShenQ.AttackBuffDuration"] }),
      component("shen-q-attack-speed", "Twilight Assault Attack Speed", "Hitting an enemy champion with the Spirit Blade grants 50% attack speed while the three empowered attacks remain.", "modeled", "timed-stat-modifier", "Compiled as a dynamic stat modifier active only while empowered attacks remain.", { valueBindings: ["ShenQ.SteroidAS"] }),
      component("shen-q-utility", "Spirit Blade Pull Slow And Range", "The pull slows an enemy moving away and the empowered attacks have increased range.", "out-of-scope", null, "Movement, crowd control, and range do not change a manually selected successful hit."),
    ],
    programs: [program("champion:98:Q:limited-attacks", "Twilight Assault", "champion", sourceId(98, "Q"), "limited-attack-state", "Q", [
      { id: "shen-q-normal-cast", event: "cast", priority: 10, conditions: [{ type: "source-id", value: sourceId(98, "Q") }], operations: [
        { type: "consume-state", key: "shen-q-strong", scope: "participant", label: "Empowered Twilight Assault Replaced" },
        { type: "set-state", key: "shen-q-normal", scope: "participant", value: literal(3), duration: literal(8), label: "Twilight Assault Attacks" },
      ] },
      { id: "shen-q-strong-cast", event: "cast", priority: 20, conditions: [{ type: "source-id", value: sourceId(98, "Q") }, { type: "parameter", key: "bladeHitChampion", operator: "eq", value: true }], operations: [
        { type: "consume-state", key: "shen-q-normal", scope: "participant", label: "Twilight Assault Replaced" },
        { type: "set-state", key: "shen-q-strong", scope: "participant", value: literal(3), duration: literal(8), label: "Empowered Twilight Assault Attacks" },
        { type: "stat-modifier", key: "shen-q-attack-speed", stat: "attackSpeed", mode: "percent", formula: literal(0.5), duration: literal(8), activeWhileState: "shen-q-strong", label: "Twilight Assault Attack Speed" },
      ] },
      { id: "shen-q-normal-hit", event: "basic-attack-hit", priority: 10, conditions: [{ type: "state-active", key: "shen-q-normal", scope: "participant" }, { type: "hit", value: true }], operations: [
        { type: "damage", label: "Twilight Assault On-Hit", damageType: "magic", formula: sum({ type: "breakpoints", values: [{ level: 1, value: 10 }, { level: 4, value: 16 }, { level: 7, value: 22 }, { level: 10, value: 28 }, { level: 13, value: 34 }, { level: 16, value: 40 }] }, product({ type: "target-stat", key: "maxHealth" }, sum(ranked([2, 2.5, 3, 3.5, 4]), stat("totalAbilityPower", 0.015)), literal(0.01))), formulaLabel: "Level-scaled flat and target maximum-health magic damage" },
        { type: "decrement-state", key: "shen-q-normal", scope: "participant", amount: literal(1), label: "Twilight Assault Attack Consumed" },
      ] },
      { id: "shen-q-strong-hit", event: "basic-attack-hit", priority: 10, conditions: [{ type: "state-active", key: "shen-q-strong", scope: "participant" }, { type: "hit", value: true }], operations: [
        { type: "damage", label: "Empowered Twilight Assault On-Hit", damageType: "magic", formula: sum({ type: "breakpoints", values: [{ level: 1, value: 10 }, { level: 4, value: 16 }, { level: 7, value: 22 }, { level: 10, value: 28 }, { level: 13, value: 34 }, { level: 16, value: 40 }] }, product({ type: "target-stat", key: "maxHealth" }, sum(ranked([5, 5.5, 6, 6.5, 7]), stat("totalAbilityPower", 0.02)), literal(0.01))), formulaLabel: "Empowered level-scaled flat and target maximum-health magic damage" },
        { type: "decrement-state", key: "shen-q-strong", scope: "participant", amount: literal(1), label: "Empowered Twilight Assault Attack Consumed" },
      ] },
    ])],
    primaryCalculation: null,
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
  });

  set(54, "W", {
    coverage: "partial",
    coverageNote: "Thunderclap's base armor passive, six-second armed attack, first aftershock, and five-second repeated aftershocks are modeled. Granite Shield can triple the passive armor, but live shield loss is not yet linked to this modifier, so that interaction remains visibly incomplete.",
    effects: [
      { id: "malphite-w-armor", label: "Thunderclap Armor", kind: "stat-buff", coverage: "modeled", description: "An invested W rank grants percent armor." },
      { id: "malphite-w-first", label: "Thunderclap First Attack", kind: "next-attack", coverage: "modeled", description: "The next successful attack within six seconds adds the initial bonus and an aftershock." },
      { id: "malphite-w-aftershock", label: "Thunderclap Aftershocks", kind: "passive-proc", coverage: "modeled", description: "Later successful attacks add aftershock damage for five seconds after the first attack." },
      { id: "malphite-w-shield-armor", label: "Granite Shield Armor Multiplier", kind: "stat-buff", coverage: "unsupported", description: "Granite Shield triples the passive armor while the shield remains active." },
    ],
    components: [
      component("malphite-w-armor", "Thunderclap Passive Armor", "An invested W rank grants 10 / 15 / 20 / 25 / 30% armor.", "modeled", "timed-stat-modifier", "Applied at scenario start from rank data.", { valueBindings: ["Obduracy.BonusArmorPassive"] }),
      component("malphite-w-attacks", "Thunderclap Attack Sequence", "Casting W arms the next attack for six seconds. That attack adds the initial damage and an aftershock, then later attacks add aftershocks for five seconds.", "modeled", "timed-on-hit", "Compiled as an armed state followed by a timed repeated on-hit state.", { formulaBindings: ["Obduracy.TotalBonusDamage", "Obduracy.ThunderclapSplash"], valueBindings: ["MalphiteCleave.Effect3", "Obduracy.ThunderclapBuffDuration"] }),
      component("malphite-w-shield-armor", "Granite Shield Armor Multiplier", "The passive armor is tripled while Granite Shield remains active.", "unsupported", "timed-stat-modifier", "The runtime does not yet link generated shield depletion and recharge to an active stat modifier. The base passive remains modeled."),
      component("malphite-w-cone", "Aftershock Cone", "Aftershock also damages enemies in a cone.", "out-of-scope", null, "The supported target is the selected champion hit by the basic attack."),
      component("malphite-w-monsters", "Aftershock Monster Modifier", "Aftershock has a monster-only damage modifier.", "out-of-scope", null, "The supported target is a champion."),
    ],
    programs: [program("champion:54:W:thunderclap", "Thunderclap", "champion", sourceId(54, "W"), "timed-on-hit", "W", [
      { id: "malphite-w-passive", event: "scenario-start", priority: 10, conditions: [{ type: "rank-at-least", sourceId: "W", value: 1 }], operations: [
        { type: "stat-modifier", key: "thunderclap-armor", stat: "armor", mode: "percent", formula: ranked([0.1, 0.15, 0.2, 0.25, 0.3]), label: "Thunderclap Passive Armor" },
      ] },
      { id: "malphite-w-follow-up", event: "basic-attack-hit", priority: 5, conditions: [{ type: "state-active", key: "thunderclap-follow-up", scope: "participant" }, { type: "hit", value: true }], operations: [
        { type: "damage", label: "Thunderclap Aftershock", damageType: "physical", formula: sum(ranked([15, 25, 35, 45, 55]), stat("totalAbilityPower", 0.3), stat("totalArmor", 0.15)), formulaLabel: "15 / 25 / 35 / 45 / 55 + 30% AP + 15% armor" },
      ] },
      { id: "malphite-w-cast", event: "cast", priority: 10, conditions: [{ type: "source-id", value: sourceId(54, "W") }], operations: [
        { type: "set-state", key: "thunderclap-armed", scope: "participant", value: literal(1), duration: literal(6), label: "Thunderclap Armed" },
      ] },
      { id: "malphite-w-first-hit", event: "basic-attack-hit", priority: 20, conditions: [{ type: "state-active", key: "thunderclap-armed", scope: "participant" }, { type: "hit", value: true }], operations: [
        { type: "damage", label: "Thunderclap First Attack", damageType: "physical", formula: sum(ranked([30, 40, 50, 60, 70]), stat("totalAbilityPower", 0.2), stat("totalArmor", 0.15)), formulaLabel: "30 / 40 / 50 / 60 / 70 + 20% AP + 15% armor" },
        { type: "damage", label: "Thunderclap First Aftershock", damageType: "physical", formula: sum(ranked([15, 25, 35, 45, 55]), stat("totalAbilityPower", 0.3), stat("totalArmor", 0.15)), formulaLabel: "15 / 25 / 35 / 45 / 55 + 30% AP + 15% armor" },
        { type: "consume-state", key: "thunderclap-armed", scope: "participant", label: "Thunderclap Armed State Consumed" },
        { type: "set-state", key: "thunderclap-follow-up", scope: "participant", value: literal(1), duration: literal(5), label: "Thunderclap Follow-Up Active" },
      ] },
    ])],
    primaryCalculation: null,
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
  });

  set(240, "W", {
    coverage: "unsupported",
    coverageNote: "Violent Tendencies is mapped to the automatic-attack-sequence family. It activates on the first qualifying attack when off cooldown, affects four attacks or four seconds, and gives the fourth attack separate damage and cooldown behavior. That automatic activation shape is not compiled yet.",
    castable: false,
    primaryCalculation: null,
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
    components: [
      component("kled-w-sequence", "Violent Tendencies Sequence", "The first qualifying attack while W is ready automatically starts a four-attack or four-second attack-speed sequence. The fourth hit adds flat and maximum-health physical damage.", "unsupported", "automatic-attack-sequence", "The generic runtime still needs automatic cooldown-ready activation before this passive sequence can compile.", { formulaBindings: ["KledW.PercentDamage"], valueBindings: ["KledW.WCooldown", "KledW.AttackSpeed", "KledW.ActiveDuration", "KledW.BaseFlatDamage", "KledW.ChampCooldownRefund"] }),
      component("kled-w-monsters", "Violent Tendencies Monster Cap", "The fourth-hit maximum-health damage is capped against monsters.", "out-of-scope", null, "The supported target is a champion."),
    ],
  });

  set(119, "Q", {
    coverage: "unsupported",
    coverageNote: "Spinning Axe is mapped to the recurring-attack-state family. A cast can add an axe up to two, each attack consumes one held axe, and a typed catch result must return it after the attack. This recurring weapon state is not compiled yet.",
    primaryCalculation: null,
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
    components: [component("draven-q-axes", "Spinning Axe Recurrence", "Casting Q readies an axe, a successful attack consumes one held axe for bonus physical damage, and catching it readies another. Draven may hold two axes.", "unsupported", "recurring-attack-state", "The runtime needs a typed per-attack catch result and post-hit axe return timing before this can compile safely.", { formulaBindings: ["DravenQ.TotalDamage"], valueBindings: ["DravenQ.AxeDuration", "DravenQ.MaxAxes"] })],
  });

  set(11, "P", {
    coverage: "unsupported",
    coverageNote: "Double Strike is damage-relevant and mapped to the attack-cycle family. It must count qualifying attacks and emit a second attack packet at its threshold.",
    components: [component("masteryi-p-double-strike", "Double Strike Cycle", "Consecutive basic attacks advance a cycle whose threshold attack strikes twice.", "unsupported", "attack-cycle", "The runtime does not yet combine a persistent attack cycle with a second basic-attack packet and its trigger policy.")],
  });

  set(875, "P", {
    coverage: "unsupported",
    coverageNote: "Pit Grit is damage-relevant and mapped to the attack-cycle family. Left and right punches alternate, and the right punch has separate damage and timing.",
    components: [
      component("sett-p-punch-cycle", "Left And Right Punch Cycle", "Basic attacks alternate between left and right punches. The right punch is faster and deals additional damage.", "unsupported", "attack-cycle", "The runtime does not yet persist an alternating attack variant while preserving the selected attack outcome."),
      component("sett-p-regeneration", "Missing-Health Regeneration", "Sett gains health regeneration based on missing health.", "out-of-scope", null, "Healing totals are outside scope because this one-way damage simulation does not use attacker regeneration to change outgoing damage."),
    ],
  });

  set(498, "W", {
    coverage: "unsupported",
    coverageNote: "Deadly Plumage is damage-relevant and mapped to timed-on-hit plus multi-hit-action behavior. Each attack during the buff fires a secondary blade and gains attack speed.",
    components: [
      component("xayah-w-blades", "Deadly Plumage Secondary Blades", "For the buff duration, each basic attack fires a secondary blade for a share of attack damage.", "unsupported", "timed-on-hit", "The runtime needs a repeated secondary attack packet with explicit proc policy before this can compile."),
      component("xayah-w-attack-speed", "Deadly Plumage Attack Speed", "The cast grants timed attack speed.", "unsupported", "timed-stat-modifier", "The attack-speed value and duration still need reviewed patch bindings."),
      component("xayah-w-movement", "Deadly Plumage Movement", "Hitting a champion grants movement speed.", "out-of-scope", null, "Movement does not change manually selected hit timing or damage."),
    ],
  });

  const customSources: Array<[number, string, string, string]> = [
    [78, "Q", "Poppy Hammer Shock", "Two-stage maximum-health damage needs explicit initial and detonation action semantics."],
    [78, "E", "Poppy Heroic Charge", "Terrain collision changes both damage and the supported action outcome."],
    [78, "R", "Poppy Keeper's Verdict", "Charge percentage continuously changes the damage multiplier."],
    [44, "E", "Taric Dazzle", "The reviewed formula combines AP and armor in a handler-backed direct packet."],
    [36, "Q", "Dr. Mundo Infected Bonesaw", "Champion damage uses current health with a rank-based minimum."],
    [86, "R", "Garen Demacian Justice", "The true-damage formula depends on target missing health."],
    [516, "W", "Ornn Bellows Breath", "The selected full-breath result aggregates all ticks into maximum-health damage."],
  ];
  for (const [championId, key, label, description] of customSources) {
    set(championId, key, {
      coverage: "modeled",
      coverageNote: `${label} is executed by a reviewed custom handler that returns generic damage operations.`,
      components: [component(`${sourceId(championId, key)}:custom`, label, description, "modeled", null, "A dedicated reviewed handler is retained because the current template vocabulary cannot express the action semantics without distortion.", { disposition: "custom", customHandlerId: sourceId(championId, key) })],
    });
  }
  const poppyQ = sources.get(sourceId(78, "Q"));
  if (poppyQ) {
    poppyQ.parameters = [{ id: "hitCount", type: "number", label: "Hits", defaultValue: 1, min: 1, max: 2, step: 1 }];
    poppyQ.extraActions = [{ id: `${sourceId(78, "Q")}:detonation`, sourceId: sourceId(78, "Q"), kind: "ability", key: "Q2", label: "Hammer Shock Detonation", defaultDelay: 1, parameters: [] }];
  }
  const poppyE = sources.get(sourceId(78, "E"));
  if (poppyE) poppyE.parameters = [{ id: "wallCollision", type: "boolean", label: "Hits Terrain", defaultValue: false }];
  const poppyR = sources.get(sourceId(78, "R"));
  if (poppyR) poppyR.parameters = [{ id: "chargePercent", type: "number", label: "Charge", defaultValue: 0, min: 0, max: 100, step: 5 }];

  set(2, "R", {
    coverage: "modeled",
    coverageNote: "Ragnarok passive defenses, active attack damage, expiry, and extensions use generic state and stat operations.",
    effects: [
      { id: "olaf-r-passive", label: "Ragnarok Passive", kind: "stat-buff", coverage: "modeled", description: "An invested ultimate rank grants armor and magic resistance.", formulaLabel: "+10 / 15 / 20 armor and magic resistance" },
      { id: "olaf-r-active", label: "Ragnarok Active", kind: "stat-buff", coverage: "modeled", description: "The cast grants attack damage for three seconds and qualifying hits extend the active state.", formulaLabel: "+10 / 20 / 30 + 25% total AD" },
      { id: "olaf-r-utility", label: "Crowd Control And Movement", kind: "utility", coverage: "out-of-scope", description: "Crowd-control immunity and movement speed do not alter the supported damage result." },
    ],
    components: [
      component("olaf-r-passive", "Ragnarok Passive", "An invested ultimate rank grants armor and magic resistance.", "modeled", "timed-stat-modifier", "Applied at scenario start from rank data."),
      component("olaf-r-active", "Ragnarok Active", "The cast grants attack damage for three seconds and qualifying hits extend the active state.", "modeled", "timed-stat-modifier", "Compiled as timed state, dynamic attack damage, and state extension."),
      component("olaf-r-utility", "Crowd Control And Movement", "Crowd-control immunity and movement speed do not change the supported damage result.", "out-of-scope", null, "Control immunity and movement are outside scope."),
    ],
    programs: [program("champion:2:R:ragnarok", "Ragnarok", "champion", sourceId(2, "R"), "timed-stat-modifier", "R", [
      { id: "olaf-r-passive", event: "scenario-start", priority: 10, conditions: [{ type: "rank-at-least", sourceId: "R", value: 1 }], operations: [
        { type: "stat-modifier", key: "ragnarok-armor", stat: "armor", mode: "flat", formula: ranked([10, 15, 20]), label: "Ragnarok Armor" },
        { type: "stat-modifier", key: "ragnarok-mr", stat: "magicResist", mode: "flat", formula: ranked([10, 15, 20]), label: "Ragnarok Magic Resistance" },
      ] },
      { id: "olaf-r-cast", event: "cast", priority: 10, conditions: [{ type: "source-id", value: sourceId(2, "R") }], operations: [
        { type: "set-state", key: "ragnarok-active", scope: "participant", value: literal(1), duration: literal(3), label: "Ragnarok Active" },
        { type: "stat-modifier", key: "ragnarok-ad", stat: "attackDamage", mode: "flat", formula: sum(ranked([10, 20, 30]), stat("totalAttackDamage", 0.25)), activeWhileState: "ragnarok-active", label: "Ragnarok Attack Damage" },
      ] },
      { id: "olaf-r-attack-extension", event: "basic-attack-hit", priority: 30, conditions: [{ type: "state-active", key: "ragnarok-active", scope: "participant" }], operations: [{ type: "extend-state", key: "ragnarok-active", scope: "participant", duration: literal(2.5), label: "Ragnarok Extended" }] },
      { id: "olaf-r-e-extension", event: "ability-hit", priority: 30, conditions: [{ type: "source-id", value: sourceId(2, "E") }, { type: "state-active", key: "ragnarok-active", scope: "participant" }], operations: [{ type: "extend-state", key: "ragnarok-active", scope: "participant", duration: literal(2.5), label: "Ragnarok Extended" }] },
    ])],
    spellPatch: { damageType: null, baseDamage: five(), ratioAD: 0, ratioAP: 0, scalings: [] },
  });

  set(166, "P", {
    coverage: "modeled",
    coverageNote: "Dirty Fighting uses generic multi-hit, per-target stacking, threshold damage, and shield-lockout programs with patch 16.16 values.",
    parameters: [{ id: "secondShot", type: "boolean", label: "Fire Second Shot", defaultValue: true }],
    components: [
      component("akshan-p-second-shot", "Second Shot", "A basic attack fires a second physical attack for 50% total AD unless canceled.", "modeled", "multi-hit-action", "The basic-attack action exposes a typed second-shot control.", { formulaBindings: ["AkshanPassive.SecondAutoDamage"] }),
      component("akshan-p-dirty-fighting", "Dirty Fighting", "Basic attacks and ability hits add per-target stacks for 4.5 seconds. Three stacks are consumed for level-scaled magic damage.", "modeled", "stacking-proc", "Compiled by the generic stacking-proc template.", { formulaBindings: ["AkshanPassive.PassiveProcDamage"], valueBindings: ["AkshanPassive.MaxStacks", "AkshanPassive.DebuffDuration"] }),
      component("akshan-p-shield", "Dirty Fighting Shield", "A champion-target proc grants a level-scaled shield with a level-scaled lockout.", "modeled", "shield-with-lockout", "Compiled as a shield operation guarded by participant proc state.", { formulaBindings: ["AkshanPassive.TotalShieldAmount", "AkshanPassive.PassiveCooldown"] }),
      component("akshan-p-movement", "Canceled Shot Movement", "Canceling the second attack grants movement speed.", "out-of-scope", null, "Movement speed does not change a manually timed damage result."),
    ],
    programs: [program("champion:166:P:dirty-fighting", "Dirty Fighting", "champion", sourceId(166, "P"), "stacking-proc", "P", [
      { id: "akshan-p-second-shot", event: "basic-attack-hit", priority: 5, conditions: [{ type: "parameter", key: "secondShot", operator: "eq", value: true }], operations: [{ type: "damage", label: "Dirty Fighting - Second Shot", damageType: "physical", formula: stat("totalAttackDamage", 0.5), formulaLabel: "50% total AD", critical: "attack" }] },
      { id: "akshan-p-attack-stack", event: "basic-attack-hit", priority: 10, conditions: [{ type: "hit", value: true }], operations: [{ type: "increment-state", key: "dirty-fighting", amount: literal(1), maximum: literal(3), duration: literal(4.5), label: "Dirty Fighting Stack" }] },
      { id: "akshan-p-ability-stack", event: "ability-hit", priority: 10, conditions: [{ type: "hit", value: true }], operations: [{ type: "increment-state", key: "dirty-fighting", amount: literal(1), maximum: literal(3), duration: literal(4.5), label: "Dirty Fighting Stack" }] },
      { id: "akshan-p-attack-proc", event: "basic-attack-hit", priority: 20, conditions: [{ type: "state-value", key: "dirty-fighting", operator: "gte", value: 3 }], operations: [
        { type: "damage", label: "Dirty Fighting - Third Hit", damageType: "magic", formula: sum({ type: "breakpoints", values: [{ level: 1, value: 15 }, { level: 6, value: 40 }, { level: 11, value: 80 }, { level: 16, value: 150 }] }, stat("totalAbilityPower", 0.6)), formulaLabel: "15 / 40 / 80 / 150 by level + 60% AP" },
        { type: "shield", label: "Dirty Fighting Shield", formula: sum({ type: "level-interpolation", start: 40, end: 280 }, stat("bonusAttackDamage", 0.35)), duration: literal(2), lockoutKey: "dirty-fighting-shield-lockout", lockoutDuration: { type: "breakpoints", values: [{ level: 1, value: 16 }, { level: 6, value: 12 }, { level: 11, value: 8 }, { level: 16, value: 4 }] } },
        { type: "consume-state", key: "dirty-fighting", label: "Dirty Fighting Consumed" },
      ] },
      { id: "akshan-p-ability-proc", event: "ability-hit", priority: 20, conditions: [{ type: "state-value", key: "dirty-fighting", operator: "gte", value: 3 }], operations: [
        { type: "damage", label: "Dirty Fighting - Third Hit", damageType: "magic", formula: sum({ type: "breakpoints", values: [{ level: 1, value: 15 }, { level: 6, value: 40 }, { level: 11, value: 80 }, { level: 16, value: 150 }] }, stat("totalAbilityPower", 0.6)), formulaLabel: "15 / 40 / 80 / 150 by level + 60% AP" },
        { type: "shield", label: "Dirty Fighting Shield", formula: sum({ type: "level-interpolation", start: 40, end: 280 }, stat("bonusAttackDamage", 0.35)), duration: literal(2), lockoutKey: "dirty-fighting-shield-lockout", lockoutDuration: { type: "breakpoints", values: [{ level: 1, value: 16 }, { level: 6, value: 12 }, { level: 11, value: 8 }, { level: 16, value: 4 }] } },
        { type: "consume-state", key: "dirty-fighting", label: "Dirty Fighting Consumed" },
      ] },
      { id: "akshan-p-second-shot-stack", event: "basic-attack-hit", priority: 30, conditions: [{ type: "hit", value: true }, { type: "parameter", key: "secondShot", operator: "eq", value: true }], operations: [{ type: "increment-state", key: "dirty-fighting", amount: literal(1), maximum: literal(3), duration: literal(4.5), label: "Dirty Fighting Second-Shot Stack" }] },
      { id: "akshan-p-second-shot-proc", event: "basic-attack-hit", priority: 40, conditions: [{ type: "parameter", key: "secondShot", operator: "eq", value: true }, { type: "state-value", key: "dirty-fighting", operator: "gte", value: 3 }], operations: [
        { type: "damage", label: "Dirty Fighting - Third Hit", damageType: "magic", formula: sum({ type: "breakpoints", values: [{ level: 1, value: 15 }, { level: 6, value: 40 }, { level: 11, value: 80 }, { level: 16, value: 150 }] }, stat("totalAbilityPower", 0.6)), formulaLabel: "15 / 40 / 80 / 150 by level + 60% AP" },
        { type: "shield", label: "Dirty Fighting Shield", formula: sum({ type: "level-interpolation", start: 40, end: 280 }, stat("bonusAttackDamage", 0.35)), duration: literal(2), lockoutKey: "dirty-fighting-shield-lockout", lockoutDuration: { type: "breakpoints", values: [{ level: 1, value: 16 }, { level: 6, value: 12 }, { level: 11, value: 8 }, { level: 16, value: 4 }] } },
        { type: "consume-state", key: "dirty-fighting", label: "Dirty Fighting Consumed" },
      ] },
      { id: "akshan-p-second-ability-stack", event: "ability-hit", priority: 30, conditions: [{ type: "hit", value: true }, { type: "parameter", key: "hitCount", operator: "gte", value: 2 }], operations: [{ type: "increment-state", key: "dirty-fighting", amount: literal(1), maximum: literal(3), duration: literal(4.5), label: "Dirty Fighting Second-Hit Stack" }] },
      { id: "akshan-p-second-ability-proc", event: "ability-hit", priority: 40, conditions: [{ type: "parameter", key: "hitCount", operator: "gte", value: 2 }, { type: "state-value", key: "dirty-fighting", operator: "gte", value: 3 }], operations: [
        { type: "damage", label: "Dirty Fighting - Third Hit", damageType: "magic", formula: sum({ type: "breakpoints", values: [{ level: 1, value: 15 }, { level: 6, value: 40 }, { level: 11, value: 80 }, { level: 16, value: 150 }] }, stat("totalAbilityPower", 0.6)), formulaLabel: "15 / 40 / 80 / 150 by level + 60% AP" },
        { type: "shield", label: "Dirty Fighting Shield", formula: sum({ type: "level-interpolation", start: 40, end: 280 }, stat("bonusAttackDamage", 0.35)), duration: literal(2), lockoutKey: "dirty-fighting-shield-lockout", lockoutDuration: { type: "breakpoints", values: [{ level: 1, value: 16 }, { level: 6, value: 12 }, { level: 11, value: 8 }, { level: 16, value: 4 }] } },
        { type: "consume-state", key: "dirty-fighting", label: "Dirty Fighting Consumed" },
      ] },
    ])],
  });

  set(166, "Q", {
    coverage: "modeled",
    coverageNote: "Avengerang direct damage and its outbound and return hits use a typed hit-count action. Movement speed is out of scope.",
    parameters: [{ id: "hitCount", type: "number", label: "Hits", defaultValue: 1, min: 1, max: 2, step: 1 }],
    components: [
      component("akshan-q-damage", "Avengerang Damage", "Deals structured physical damage once outbound and optionally once on return.", "modeled", "multi-hit-action", "The typed hit-count parameter repeats the complete CommunityDragon formula."),
      component("akshan-q-movement", "Champion-Hit Movement", "Champion hits grant decaying movement speed.", "out-of-scope", null, "Movement speed does not change a manually timed damage result."),
    ],
  });

  set(131, "P", {
    coverage: "modeled",
    coverageNote: "Moonsilver Blade uses generic timed attack stacks, threshold damage, and after-cast attack-speed state.",
    components: [
      component("diana-p-cleave", "Moonsilver Blade Cleave", "Every third successful basic attack consumes the five-second counter and adds level-scaled magic damage.", "modeled", "stacking-proc", "Compiled by the generic stacking-proc template.", { formulaBindings: ["DianaPassive.CleaveDamage"] }),
      component("diana-p-attack-speed", "Moonsilver Blade Attack Speed", "Diana has level-scaled bonus attack speed. Casting an ability triples it for five seconds.", "modeled", "timed-stat-modifier", "Compiled as permanent and timed additive attack-speed modifiers.", { formulaBindings: ["DianaPassive.BonusAS", "DianaPassive.EmpoweredAS"] }),
      component("diana-p-monster", "Monster Multiplier", "The cleave deals increased damage to monsters.", "out-of-scope", null, "The supported target is a champion."),
    ],
    programs: [program("champion:131:P:moonsilver-blade", "Moonsilver Blade", "champion", sourceId(131, "P"), "stacking-proc", "P", [
      { id: "diana-p-base-as", event: "scenario-start", priority: 10, conditions: [], operations: [{ type: "stat-modifier", key: "moonsilver-base-as", stat: "attackSpeed", mode: "percent", formula: { type: "level-interpolation", start: 0.15, end: 0.35 }, label: "Moonsilver Blade Attack Speed" }] },
      { id: "diana-p-cast-as", event: "cast", priority: 10, conditions: [], operations: [{ type: "stat-modifier", key: "moonsilver-cast-as", stat: "attackSpeed", mode: "percent", formula: product(literal(2), { type: "level-interpolation", start: 0.15, end: 0.35 }), duration: literal(5), label: "Moonsilver Blade Empowered Attack Speed" }] },
      { id: "diana-p-stack", event: "basic-attack-hit", priority: 10, conditions: [{ type: "hit", value: true }], operations: [{ type: "increment-state", key: "moonsilver", amount: literal(1), maximum: literal(3), duration: literal(5), label: "Moonsilver Blade Stack" }] },
      { id: "diana-p-proc", event: "basic-attack-hit", priority: 20, conditions: [{ type: "state-value", key: "moonsilver", operator: "gte", value: 3 }], operations: [
        { type: "damage", label: "Moonsilver Blade - Third Attack", damageType: "magic", formula: sum({ type: "level-breakpoints", base: 20, initialPerLevel: 5, breakpoints: [{ level: 7, perLevel: 10 }, { level: 12, perLevel: 15 }, { level: 17, perLevel: 25 }] }, stat("totalAbilityPower", 0.5)), formulaLabel: "20 to 220 by level + 50% AP" },
        { type: "consume-state", key: "moonsilver", label: "Moonsilver Blade Consumed" },
      ] },
    ])],
  });

  set(110, "W", {
    coverage: "partial",
    coverageNote: "Blighted Quiver on-hit damage, Blight stacks, ability detonation, Q charge amplification, expiry, and cooldown reduction are modeled. The active missing-health Q empowerment and Chain of Corruption's delayed stack application remain unsupported.",
    components: [
      component("varus-w-on-hit", "Blighted Quiver On-Hit", "Basic attacks add patch-ranked magic damage and a Blight stack.", "modeled", "timed-on-hit", "Compiled by the generic timed-on-hit template.", { formulaBindings: ["VarusW.OnHitDamage"] }),
      component("varus-w-blight", "Blight Detonation", "Q, E, and R consume up to three six-second marks for per-stack maximum-health magic damage. Q charge increases the detonation by up to 50%.", "modeled", "mark-and-consume", "Compiled by the generic mark-and-consume template.", { formulaBindings: ["VarusW.PercentHPPerStack"], valueBindings: ["VarusW.MaxStacks", "VarusW.DebuffDuration", "VarusW.CDRPerBlightStack"] }),
      component("varus-w-cooldowns", "Blight Cooldown Reduction", "Each consumed stack reduces the remaining Q, W, and E cooldowns by 13% of their total cooldown, with Q charge scaling.", "modeled", "cooldown-modifier", "Emitted as generic remaining-cooldown operations."),
      component("varus-w-active", "Blighted Quiver Active", "The active empowers the next Piercing Arrow with missing-health magic damage.", "unsupported", "mark-and-consume", "A reviewed state binding for the active missing-health packet is still required."),
      component("varus-w-r-stacks", "Chain Of Corruption Stack Application", "Chain of Corruption applies three Blight stacks over time after its initial hit.", "unsupported", "scheduled-damage", "The runtime does not yet schedule non-damage state operations."),
      component("varus-w-monster-cap", "Monster Damage Cap", "Blight damage is capped against monsters.", "out-of-scope", null, "The supported target is a champion."),
    ],
    programs: [program("champion:110:W:blighted-quiver", "Blighted Quiver", "champion", sourceId(110, "W"), "mark-and-consume", "W", [
      { id: "varus-w-on-hit", event: "basic-attack-hit", priority: 5, conditions: [{ type: "rank-at-least", sourceId: "W", value: 1 }, { type: "hit", value: true }], operations: [{ type: "damage", label: "Blighted Quiver On-Hit", damageType: "magic", formula: sum(ranked([4, 13, 22, 31, 40]), stat("totalAbilityPower", 0.25), stat("totalAttackDamage", 0.15)), formulaLabel: "4 / 13 / 22 / 31 / 40 + 25% AP + 15% total AD" }] },
      { id: "varus-w-mark", event: "basic-attack-hit", priority: 10, conditions: [{ type: "rank-at-least", sourceId: "W", value: 1 }, { type: "hit", value: true }], operations: [{ type: "increment-state", key: "blight", amount: literal(1), maximum: literal(3), duration: literal(6), label: "Blight Stack" }] },
      { id: "varus-w-q-detonate", event: "ability-hit", priority: 20, conditions: [{ type: "source-id", value: sourceId(110, "Q") }, { type: "state-value", key: "blight", operator: "gte", value: 1 }], operations: [
        { type: "damage", label: "Blight Detonation", damageType: "magic", formula: product(state("blight"), { type: "target-stat", key: "maxHealth" }, sum(ranked([0.03, 0.035, 0.04, 0.045, 0.05]), stat("totalAbilityPower", 0.00013)), sum(literal(1), input("chargePercent", 0.005, 0))), formulaLabel: "Stacks x target max health x (3 / 3.5 / 4 / 4.5 / 5% + 1.3% per 100 AP), increased by up to 50% from Q charge" },
        { type: "cooldown-modifier", sourceId: sourceId(110, "Q"), mode: "remaining-flat", formula: product(state("blight"), literal(0.13), event("cooldown:Q"), sum(literal(1), input("chargePercent", 0.005, 0))), label: "Blight Q Cooldown Reduction" },
        { type: "cooldown-modifier", sourceId: sourceId(110, "W"), mode: "remaining-flat", formula: product(state("blight"), literal(0.13), event("cooldown:W"), sum(literal(1), input("chargePercent", 0.005, 0))), label: "Blight W Cooldown Reduction" },
        { type: "cooldown-modifier", sourceId: sourceId(110, "E"), mode: "remaining-flat", formula: product(state("blight"), literal(0.13), event("cooldown:E"), sum(literal(1), input("chargePercent", 0.005, 0))), label: "Blight E Cooldown Reduction" },
        { type: "consume-state", key: "blight", label: "Blight Consumed" },
      ] },
      ...["E", "R"].map((key) => ({
        id: `varus-w-${key.toLowerCase()}-detonate`, event: "ability-hit" as const, priority: 20,
        conditions: [{ type: "source-id" as const, value: sourceId(110, key) }, { type: "state-value" as const, key: "blight", operator: "gte" as const, value: 1 }],
        operations: [
          { type: "damage" as const, label: "Blight Detonation", damageType: "magic" as const, formula: product(state("blight"), { type: "target-stat", key: "maxHealth" }, sum(ranked([0.03, 0.035, 0.04, 0.045, 0.05]), stat("totalAbilityPower", 0.00013))), formulaLabel: "Stacks x target max health x (3 / 3.5 / 4 / 4.5 / 5% + 1.3% per 100 AP)" },
          { type: "cooldown-modifier" as const, sourceId: sourceId(110, "Q"), mode: "remaining-flat" as const, formula: product(state("blight"), literal(0.13), event("cooldown:Q")), label: "Blight Q Cooldown Reduction" },
          { type: "cooldown-modifier" as const, sourceId: sourceId(110, "W"), mode: "remaining-flat" as const, formula: product(state("blight"), literal(0.13), event("cooldown:W")), label: "Blight W Cooldown Reduction" },
          { type: "cooldown-modifier" as const, sourceId: sourceId(110, "E"), mode: "remaining-flat" as const, formula: product(state("blight"), literal(0.13), event("cooldown:E")), label: "Blight E Cooldown Reduction" },
          { type: "consume-state" as const, key: "blight", label: "Blight Consumed" },
        ],
      })),
    ])],
    parameters: [],
  });

  set(110, "Q", {
    coverage: "modeled",
    coverageNote: "Piercing Arrow uses its structured minimum-charge packet plus a typed 0 to 100 charge parameter for up to 50% additional physical damage and Blight amplification.",
    parameters: [{ id: "chargePercent", type: "number", label: "Charge", defaultValue: 0, min: 0, max: 100, step: 5 }],
    components: [
      component("varus-q-damage", "Piercing Arrow Damage", "Deals minimum-charge physical damage and gains up to 50% additional damage with charge time.", "modeled", "direct-damage", "The structured minimum formula and declarative charge packet preserve the full rank array.", { formulaBindings: ["VarusQ.TotalDamageMinTooltip", "VarusQ.TotalDamageMax"] }),
      component("varus-q-pierce", "Piercing Reduction", "Damage falls after passing through earlier enemies.", "out-of-scope", null, "A one-on-one calculation targets the first champion hit."),
      component("varus-q-movement", "Charge Movement", "Charging slows Varus.", "out-of-scope", null, "Movement is outside the supported damage result."),
    ],
    programs: [program("champion:110:Q:charge", "Piercing Arrow Charge", "champion", sourceId(110, "Q"), "direct-damage", "Q", [{
      id: "varus-q-charge-damage", event: "ability-hit", priority: 5,
      conditions: [{ type: "source-id", value: sourceId(110, "Q") }, { type: "parameter", key: "chargePercent", operator: "gte", value: 1 }],
      operations: [{ type: "damage", label: "Piercing Arrow Charge Damage", damageType: "physical", formula: product(sum(ranked([53.3336, 100.0005, 146.6674, 193.3343, 240.0012]), stat("totalAttackDamage", 0.8)), input("chargePercent", 0.005, 0)), formulaLabel: "Minimum-charge damage x up to 50% additional damage" }],
    }])],
  });

  return sources;
}

const known = knownSources();

const reviewedFamilyOverrides = new Map<string, { template: EffectTemplateId; reason: string; preserveImmediateDamage?: boolean }>([
  [sourceId(28, "Q"), { template: "mark-and-consume", reason: "The next three attacks or abilities consume a per-target Hate Spike mark.", preserveImmediateDamage: true }],
  [sourceId(114, "E"), { template: "limited-attack-state", reason: "The next two attacks have distinct first and second outcomes." }],
  [sourceId(910, "W"), { template: "limited-attack-state", reason: "Stirring Lights grants three charges consumed by later attacks or abilities." }],
  [sourceId(64, "P"), { template: "limited-attack-state", reason: "A spellcast empowers the next two attacks with attack speed and resource restoration." }],
  [sourceId(236, "P"), { template: "limited-attack-state", reason: "The passive combines an armed double shot with a separate two-attack magic-damage state and needs split reviewed components." }],
  [sourceId(267, "E"), { template: "limited-attack-state", reason: "A bounded set of charges can be consumed by an allied participant's attacks or abilities." }],
  [sourceId(421, "Q"), { template: "limited-attack-state", reason: "The unburrowed form grants three attacks whose duration refreshes on each attack." }],
  [sourceId(107, "Q"), { template: "limited-attack-state", reason: "Two attacks gain attack speed, while only the first receives Savagery damage." }],
  [sourceId(92, "P"), { template: "limited-attack-state", reason: "Ability casts store bounded Runic Blade charges that later attacks consume." }],
  [sourceId(72, "Q"), { template: "limited-attack-state", reason: "Three attacks are empowered and the final attack has a separate damage result." }],
  [sourceId(517, "P"), { template: "limited-attack-state", reason: "Spellcasts store Petricite Burst charges that later attacks consume." }],
  [sourceId(44, "P"), { template: "limited-attack-state", reason: "A spellcast empowers two attacks with damage, attack speed, and cooldown changes." }],
  [sourceId(77, "P"), { template: "limited-attack-state", reason: "A stance cast grants attack speed to the next two attacks." }],
  [sourceId(77, "Q"), { template: "limited-attack-state", reason: "Claw Stance has both a timed repeated on-hit and separate next-two-attacks damage." }],
  [sourceId(77, "R"), { template: "limited-attack-state", reason: "Storm Stance grants separate damage to the next two attacks." }],
  [sourceId(5, "Q"), { template: "limited-attack-state", reason: "Three attacks add damage and cooldown reduction, with a separate third-hit result." }],
  [sourceId(498, "P"), { template: "limited-attack-state", reason: "Ability casts grant a bounded set of piercing attacks that leave feathers." }],
  [sourceId(22, "Q"), { template: "timed-on-hit", reason: "The active duration changes attack speed and each attack's ordered hit structure." }],
  [sourceId(233, "W"), { template: "timed-on-hit", reason: "Blood Frenzy grants timed attack speed and repeated surrounding attack damage." }],
  [sourceId(427, "W"), { template: "timed-on-hit", reason: "Brush presence controls a repeated magic on-hit state." }],
  [sourceId(145, "E"), { template: "timed-stat-modifier", reason: "The cast grants timed attack speed and attacks reduce its cooldown." }],
  [sourceId(111, "W"), { template: "timed-on-hit", reason: "Repeated attack damage is active only while the spell's shield persists." }],
  [sourceId(20, "P"), { template: "timed-on-hit", reason: "The temporary Call buff changes attack speed and repeated basic-attack damage." }],
  [sourceId(246, "W"), { template: "timed-on-hit", reason: "The selected weapon enchantment controls a repeated magic on-hit state." }],
  [sourceId(68, "P"), { template: "timed-on-hit", reason: "Overheat temporarily grants attack speed and repeated basic-attack damage." }],
  [sourceId(15, "W"), { template: "timed-on-hit", reason: "The timed state grants attack speed and adds secondary bounce packets to attacks." }],
  [sourceId(804, "Q"), { template: "timed-on-hit", reason: "Unleash activates timed attack speed and repeated on-hit damage." }],
  [sourceId(350, "Q"), { template: "timed-on-hit", reason: "The Best Friend branch grants a timed on-hit effect to an allied participant.", preserveImmediateDamage: true }],
  [sourceId(221, "E"), { template: "timed-on-hit", reason: "The post-dash state adds repeated magic damage and attack-driven cooldown reduction." }],
  [sourceId(523, "P"), { template: "recurring-attack-state", reason: "Weapon, off-hand, ammunition, and rotation state change later attacks and abilities." }],
  [sourceId(102, "Q"), { template: "recurring-attack-state", reason: "Human and Dragon forms expose different attack and recast sequences." }],
  [sourceId(904, "Q"), { template: "recurring-attack-state", reason: "The first armed attack unlocks a distinct recast attack." }],
  [sourceId(51, "P"), { template: "attack-cycle", reason: "Basic attacks advance a cycle, while trapped and netted targets create separate ready states." }],
  [sourceId(150, "W"), { template: "stacking-proc", reason: "Attacks and abilities share a per-target third-hit threshold." }],
  [sourceId(24, "R"), { template: "attack-cycle", reason: "Attacks advance a third-hit cycle whose threshold changes during the active state.", preserveImmediateDamage: true }],
  [sourceId(202, "P"), { template: "attack-cycle", reason: "Ammunition and the fourth shot create a persistent ordered attack cycle." }],
  [sourceId(145, "P"), { template: "stacking-proc", reason: "Basic attacks and allied crowd control build a per-target Plasma threshold." }],
  [sourceId(85, "W"), { template: "attack-cycle", reason: "Basic attacks advance a fifth-attack bonus-damage cycle." }],
  [sourceId(203, "E"), { template: "stacking-proc", reason: "The target mark counts attacks and procs on the third attack within its duration." }],
  [sourceId(518, "W"), { template: "attack-cycle", reason: "Basic attacks advance a third-attack bonus-damage cycle." }],
  [sourceId(4, "E"), { template: "attack-cycle", reason: "Basic attacks advance a fourth-attack bonus-damage cycle." }],
  [sourceId(5, "P"), { template: "attack-cycle", reason: "Basic attacks advance a third-attack damage and healing cycle." }],
]);

function inferredTemplate(description: string): EffectTemplateId | null {
  if (/third (?:hit|attack)|stack(?:ing|s|ed)? up to|mark(?:s|ed)?|detonat|consume.*stack/i.test(description)) return "stacking-proc";
  if (/on-hit|basic attacks? (?:deal|are empowered)|next (?:basic )?attack/i.test(description)) return "timed-on-hit";
  if (/shield/i.test(description)) return "shield-with-lockout";
  if (/armor|magic resist|resistance|shred/i.test(description)) return "resistance-modifier";
  if (/increased damage|takes? .*damage|damage reduction|reduce.*damage/i.test(description)) return "conditional-amplifier";
  if (/attack damage|ability power|attack speed/i.test(description)) return "timed-stat-modifier";
  if (/cooldown/i.test(description)) return "cooldown-modifier";
  if (/delay|after .*seconds?|over .*seconds?|each second/i.test(description)) return "scheduled-damage";
  if (/damage/i.test(description)) return "direct-damage";
  return null;
}

function genericComponents(key: string, name: string, description: string, coverage: Coverage, hasFormula: boolean): ReviewedEffectComponent[] {
  const reviewedFamily = reviewedFamilyOverrides.get(key);
  if (coverage === "out-of-scope" && !reviewedFamily) {
    return [component(`${key}:scope`, name, description, "out-of-scope", null, "The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.")];
  }
  const template = reviewedFamily?.template ?? inferredTemplate(description);
  const components: ReviewedEffectComponent[] = [];
  if (hasFormula) {
    components.push(component(`${key}:primary`, `${name} Primary Damage`, "The structured primary CommunityDragon calculation is executable.", "modeled", "direct-damage", "The generic direct-damage evaluator preserves the structured formula and complete rank arrays."));
  }
  components.push(component(
    `${key}:remaining`,
    `${name} Remaining Combat Behavior`,
    description,
    "unsupported",
    template,
    template
      ? reviewedFamily
        ? `${reviewedFamily.reason} The source is assigned to the ${template} family, but a complete reviewed binding has not been compiled yet.`
        : `The full patch description is retained and assigned to the ${template} family, but a complete reviewed binding has not been compiled yet.`
      : "The full patch description is retained, but this behavior needs champion-specific review before it can be expressed safely.",
    template ? {} : { customHandlerId: `${key}:review-required` },
  ));
  return components;
}

function aggregateCoverage(components: ReviewedEffectComponent[]): Coverage {
  const relevant = components.filter((entry) => entry.coverage !== "out-of-scope");
  if (!relevant.length) return "out-of-scope";
  if (relevant.every((entry) => entry.coverage === "modeled")) return "modeled";
  if (relevant.every((entry) => entry.coverage === "unsupported")) return "unsupported";
  return "partial";
}

function findBinSpell(binObject: Record<string, any>, requiredValues: string[]) {
  return Object.values(binObject)
    .map((entry) => entry?.mSpell ?? entry)
    .find((entry) => Array.isArray(entry?.DataValues) && requiredValues.every((name) => entry.DataValues.some((value: any) => value.name === name)));
}

function findBinRecord(binObject: Record<string, any>, pathSuffix: string) {
  const entry = Object.entries(binObject).find(([key]) => key.endsWith(pathSuffix));
  if (!entry) throw new Error(`CommunityDragon BIN record ${pathSuffix} is missing.`);
  return entry[1];
}

function rankedEffectValues(record: any, effectIndex: number, count = 5) {
  const values = record?.mSpell?.mEffectAmount?.[effectIndex]?.value;
  const ranks = Array.isArray(values) ? values.slice(1, count + 1).map(Number) : [];
  if (ranks.length !== count || ranks.some((value) => !Number.isFinite(value))) throw new Error(`CommunityDragon effect binding ${effectIndex + 1} is missing or changed structure.`);
  return ranks;
}

function dataValue(spell: any, name: string) {
  const values = spell?.DataValues?.find((entry: any) => entry.name === name)?.values;
  const value = Array.isArray(values) ? values[1] ?? values[0] : undefined;
  if (!Number.isFinite(value)) throw new Error(`CommunityDragon data binding ${name} is missing or non-numeric.`);
  return Number(value);
}

function rankedDataValues(spell: any, name: string, count = 5) {
  const values = spell?.DataValues?.find((entry: any) => entry.name === name)?.values;
  const ranks = Array.isArray(values) ? values.slice(1, count + 1).map(Number) : [];
  if (ranks.length !== count || ranks.some((value) => !Number.isFinite(value))) throw new Error(`CommunityDragon ranked data binding ${name} is missing or changed structure.`);
  return ranks;
}

function calculationFormula(champion: ChampionLike, key: string, name: string) {
  const formula = champion.spells.find((spell) => spell.key === key)?.calculations?.[name]?.formula;
  if (!formula) throw new Error(`CommunityDragon formula binding champion:${champion.id}:${key}:${name} is missing.`);
  return structuredClone(formula);
}

function cumulativeBreakpoints(part: any): FormulaNode {
  let value = Number(part.mLevel1Value);
  const values = [{ level: 1, value }];
  for (const breakpoint of [...(part.mBreakpoints ?? [])].sort((left, right) => left.mLevel - right.mLevel)) {
    value += Number(breakpoint.mAdditionalBonusAtThisLevel ?? 0);
    values.push({ level: Number(breakpoint.mLevel), value });
  }
  return { type: "breakpoints", values };
}

function bindCompiledProgramData(champion: ChampionLike, binObject: Record<string, any>) {
  const programs = champion.effectPrograms ?? [];
  const operations = programs.flatMap((program) => program.triggers.flatMap((trigger) => trigger.operations));

  if (champion.id === 166) {
    const passive = findBinSpell(binObject, ["MaxStacks", "DebuffDuration", "SecondAutoADRatio", "ShieldBADRatio", "ShieldDuration", "APRatio"]);
    if (!passive) throw new Error("Akshan passive CommunityDragon binding record is missing.");
    const calculations = passive.mSpellCalculations ?? {};
    const damagePart = calculations.PassiveProcDamage?.mFormulaParts?.find((part: any) => Number.isFinite(part.mLevel1Value));
    const shieldPart = calculations.TotalShieldAmount?.mFormulaParts?.find((part: any) => Number.isFinite(part.mStartValue));
    const cooldownPart = calculations.PassiveCooldown?.mFormulaParts?.find((part: any) => Number.isFinite(part.mLevel1Value));
    if (!damagePart || !shieldPart || !cooldownPart) throw new Error("Akshan passive calculation bindings changed structure.");
    const maximum = dataValue(passive, "MaxStacks");
    const duration = dataValue(passive, "DebuffDuration");
    const damage = sum(cumulativeBreakpoints(damagePart), stat("totalAbilityPower", dataValue(passive, "APRatio")));
    const shield = sum({ type: "level-interpolation", start: Number(shieldPart.mStartValue), end: Number(shieldPart.mEndValue) }, stat("bonusAttackDamage", dataValue(passive, "ShieldBADRatio")));
    const lockout = cumulativeBreakpoints(cooldownPart);
    for (const operation of operations) {
      if (operation.type === "increment-state" && operation.key === "dirty-fighting") {
        operation.maximum = literal(maximum);
        operation.duration = literal(duration);
      } else if (operation.type === "damage" && operation.label === "Dirty Fighting - Second Shot") {
        operation.formula = stat("totalAttackDamage", dataValue(passive, "SecondAutoADRatio"));
      } else if (operation.type === "damage" && operation.label === "Dirty Fighting - Third Hit") {
        operation.formula = structuredClone(damage);
      } else if (operation.type === "shield" && operation.label === "Dirty Fighting Shield") {
        operation.formula = structuredClone(shield);
        operation.duration = literal(dataValue(passive, "ShieldDuration"));
        operation.lockoutDuration = structuredClone(lockout);
      }
    }
  }

  if (champion.id === 131) {
    const passive = findBinSpell(binObject, ["APRatio", "BuffDuration", "AttackCount"]);
    if (!passive) throw new Error("Diana passive CommunityDragon binding record is missing.");
    const calculations = passive.mSpellCalculations ?? {};
    const cleavePart = calculations.CleaveDamage?.mFormulaParts?.find((part: any) => Number.isFinite(part.mLevel1Value));
    const attackSpeedPart = calculations.BonusAS?.mFormulaParts?.find((part: any) => Number.isFinite(part.mStartValue));
    const multiplier = Number(calculations.EmpoweredAS?.mMultiplier?.mNumber);
    if (!cleavePart || !attackSpeedPart || !Number.isFinite(multiplier)) throw new Error("Diana passive calculation bindings changed structure.");
    const duration = dataValue(passive, "BuffDuration");
    const attackCount = dataValue(passive, "AttackCount");
    const attackSpeed: FormulaNode = { type: "level-interpolation", start: Number(attackSpeedPart.mStartValue), end: Number(attackSpeedPart.mEndValue) };
    const cleave: FormulaNode = sum({
      type: "level-breakpoints",
      base: Number(cleavePart.mLevel1Value),
      initialPerLevel: Number(cleavePart.mInitialBonusPerLevel),
      breakpoints: (cleavePart.mBreakpoints ?? []).map((entry: any) => ({ level: Number(entry.mLevel), perLevel: Number(entry.mBonusPerLevelAtAndAfter) })),
    }, stat("totalAbilityPower", dataValue(passive, "APRatio")));
    for (const operation of operations) {
      if (operation.type === "stat-modifier" && operation.key === "moonsilver-base-as") operation.formula = structuredClone(attackSpeed);
      else if (operation.type === "stat-modifier" && operation.key === "moonsilver-cast-as") {
        operation.formula = product(literal(multiplier - 1), structuredClone(attackSpeed));
        operation.duration = literal(duration);
      } else if (operation.type === "increment-state" && operation.key === "moonsilver") {
        operation.maximum = literal(attackCount);
        operation.duration = literal(duration);
      } else if (operation.type === "damage" && operation.label === "Moonsilver Blade - Third Attack") operation.formula = structuredClone(cleave);
    }
  }

  if (champion.id === 110) {
    const w = findBinSpell(binObject, ["VarusWDebuffDuration", "VarusWMaxStacks", "CDRPerBlightStack", "VarusWMaxChargeHPDamage"]);
    if (!w) throw new Error("Varus Blighted Quiver CommunityDragon binding record is missing.");
    const duration = dataValue(w, "VarusWDebuffDuration");
    const maximum = dataValue(w, "VarusWMaxStacks");
    const cooldownRatio = dataValue(w, "CDRPerBlightStack");
    const chargeCoefficient = (dataValue(w, "VarusWMaxChargeHPDamage") - 1) / 100;
    const onHit = calculationFormula(champion, "W", "OnHitDamage");
    const percentPerStack = calculationFormula(champion, "W", "PercentHPPerStack");
    const qMinimum = calculationFormula(champion, "Q", "TotalDamageMinTooltip");
    for (const program of programs) {
      for (const trigger of program.triggers) {
        const charged = trigger.id === "varus-w-q-detonate";
        const chargeFactor = charged ? sum(literal(1), input("chargePercent", chargeCoefficient, 0)) : literal(1);
        for (const operation of trigger.operations) {
          if (operation.type === "damage" && operation.label === "Blighted Quiver On-Hit") operation.formula = structuredClone(onHit);
          else if (operation.type === "increment-state" && operation.key === "blight") {
            operation.maximum = literal(maximum);
            operation.duration = literal(duration);
          } else if (operation.type === "damage" && operation.label === "Blight Detonation") {
            operation.formula = product(state("blight"), { type: "target-stat", key: "maxHealth" }, structuredClone(percentPerStack), chargeFactor);
          } else if (operation.type === "cooldown-modifier" && operation.label.startsWith("Blight ")) {
            const cooldownKey = operation.sourceId.split(":").at(-1) ?? "Q";
            operation.formula = product(state("blight"), literal(cooldownRatio), event(`cooldown:${cooldownKey}`), chargeFactor);
          } else if (operation.type === "damage" && operation.label === "Piercing Arrow Charge Damage") {
            operation.formula = product(structuredClone(qMinimum), input("chargePercent", chargeCoefficient, 0));
          }
        }
      }
    }
  }

  if (champion.id === 96) {
    const w = findBinSpell(binObject, ["MaxHealthDamage", "APRatio", "Duration"]);
    if (!w) throw new Error("Kog'Maw Bio-Arcane Barrage CommunityDragon binding record is missing.");
    const onHit = product({ type: "target-stat", key: "maxHealth" }, calculationFormula(champion, "W", "TotalHealthDamage"));
    for (const operation of operations) {
      if (operation.type === "set-state" && operation.key === `${sourceId(96, "W")}:active`) operation.duration = literal(dataValue(w, "Duration"));
      else if (operation.type === "damage" && operation.label === "Bio-Arcane Barrage On-Hit") operation.formula = structuredClone(onHit);
    }
  }

  if (champion.id === 887) {
    const e = findBinSpell(binObject, ["BuffDuration", "BaseAttackSpeed", "CDRefund", "BonusAttackRange"]);
    if (!e) throw new Error("Gwen Skip 'n Slash CommunityDragon binding record is missing.");
    const duration = dataValue(e, "BuffDuration");
    const onHit = calculationFormula(champion, "E", "OnHitDamage");
    const attackSpeed = calculationFormula(champion, "E", "BonusAttackSpeed");
    const refund = ranked(rankedDataValues(e, "CDRefund"));
    for (const operation of operations) {
      if (operation.type === "set-state" && (operation.key === "skip-n-slash" || operation.key === "skip-n-slash-refund")) operation.duration = literal(duration);
      else if (operation.type === "damage" && operation.label === "Skip 'n Slash On-Hit") operation.formula = structuredClone(onHit);
      else if (operation.type === "stat-modifier" && operation.key === "skip-n-slash-as") operation.formula = structuredClone(attackSpeed);
      else if (operation.type === "cooldown-modifier" && operation.label === "Skip 'n Slash Cooldown Refund") operation.formula = product(event("cooldown:E"), structuredClone(refund));
    }
  }

  if (champion.id === 105) {
    const w = findBinSpell(binObject, ["BleedDuration", "DoTTicksPerSecond", "ActiveDuration", "OnHitBuffDuration", "OnKillNewCooldown"]);
    if (!w) throw new Error("Fizz Seastone Trident CommunityDragon binding record is missing.");
    const bleedDuration = dataValue(w, "BleedDuration");
    const tickRate = dataValue(w, "DoTTicksPerSecond");
    const tickCount = bleedDuration * tickRate;
    if (!Number.isInteger(tickCount) || tickCount < 1) throw new Error("Fizz Seastone Trident tick bindings do not produce a positive whole tick count.");
    const bleed = calculationFormula(champion, "W", "DoTDamage");
    const active = calculationFormula(champion, "W", "ActiveDamage");
    const followUp = calculationFormula(champion, "W", "OnHitBuffDamage");
    for (const operation of operations) {
      if (operation.type === "schedule-damage" && operation.label === "Seastone Trident Bleed") {
        operation.formula = structuredClone(bleed);
        operation.delay = literal(0);
        operation.tickCount = literal(tickCount);
        operation.tickInterval = literal(1 / tickRate);
      } else if (operation.type === "set-state" && operation.key === "seastone-armed") operation.duration = literal(dataValue(w, "ActiveDuration"));
      else if (operation.type === "set-state" && operation.key === "seastone-follow-up") operation.duration = literal(dataValue(w, "OnHitBuffDuration"));
      else if (operation.type === "damage" && operation.label === "Seastone Trident Active Attack") operation.formula = structuredClone(active);
      else if (operation.type === "damage" && operation.label === "Seastone Trident Follow-Up On-Hit") operation.formula = structuredClone(followUp);
    }
  }

  if (champion.id === 11) {
    const e = findBinSpell(binObject, ["BaseDamage", "ADRatio", "Duration"]);
    if (!e) throw new Error("Master Yi Wuju Style CommunityDragon binding record is missing.");
    const damage = calculationFormula(champion, "E", "TotalDamage");
    const duration = literal(dataValue(e, "Duration"));
    for (const operation of operations) {
      if (operation.type === "set-state" && operation.key === `${sourceId(11, "E")}:active`) operation.duration = structuredClone(duration);
      else if (operation.type === "damage" && operation.label === "Wuju Style On-Hit") operation.formula = structuredClone(damage);
    }
  }

  if (champion.id === 31) {
    const e = findBinSpell(binObject, ["BaseDamage", "APRatio", "PercentHealthDamage", "FeastStackMultiplier", "MaximumAttacks", "BuffDuration"]);
    if (!e) throw new Error("Cho'Gath Vorpal Spikes CommunityDragon binding record is missing.");
    const formula = sum(
      calculationFormula(champion, "E", "FlatDamageCalc"),
      product(
        { type: "target-stat", key: "maxHealth" },
        sum(ranked(rankedDataValues(e, "PercentHealthDamage")), input("feastStacks", dataValue(e, "FeastStackMultiplier"), 0)),
        literal(0.01),
      ),
    );
    for (const operation of operations) {
      if (operation.type === "set-state" && operation.key === `${sourceId(31, "E")}:attacks`) {
        operation.value = ranked(rankedDataValues(e, "MaximumAttacks"));
        operation.duration = ranked(rankedDataValues(e, "BuffDuration"));
      } else if (operation.type === "damage" && operation.label === "Vorpal Spikes On-Hit") operation.formula = structuredClone(formula);
    }
  }

  if (champion.id === 875) {
    const q = findBinSpell(binObject, ["Duration", "BaseDamage", "EnemyMaxHealthDamage", "MaxHealthTADRatio"]);
    if (!q) throw new Error("Sett Knuckle Down CommunityDragon binding record is missing.");
    findBinRecord(binObject, "/SettQAttack");
    findBinRecord(binObject, "/SettQAttack2");
    const formula = sum(
      ranked(rankedDataValues(q, "BaseDamage")),
      product({ type: "target-stat", key: "maxHealth" }, calculationFormula(champion, "Q", "MaxHealthDamageCalc")),
    );
    for (const operation of operations) {
      if (operation.type === "set-state" && operation.key === `${sourceId(875, "Q")}:attacks`) {
        operation.value = literal(2);
        operation.duration = ranked(rankedDataValues(q, "Duration"));
      } else if (operation.type === "damage" && operation.label === "Knuckle Down On-Hit") operation.formula = structuredClone(formula);
    }
  }

  if (champion.id === 98) {
    const q = findBinSpell(binObject, ["NumEnhancedAttacks", "AttackBuffDuration", "SteroidAS", "BasePercentDamage", "EnhancedPercentDamage"]);
    if (!q) throw new Error("Shen Twilight Assault CommunityDragon binding record is missing.");
    const count = ranked(rankedDataValues(q, "NumEnhancedAttacks"));
    const duration = ranked(rankedDataValues(q, "AttackBuffDuration"));
    const base = calculationFormula(champion, "Q", "BaseFlatDamage");
    const normal = sum(structuredClone(base), product({ type: "target-stat", key: "maxHealth" }, calculationFormula(champion, "Q", "BasePercentHealth")));
    const strong = sum(structuredClone(base), product({ type: "target-stat", key: "maxHealth" }, calculationFormula(champion, "Q", "EmpPercentHealth")));
    const attackSpeed = product(ranked(rankedDataValues(q, "SteroidAS")), literal(0.01));
    for (const operation of operations) {
      if (operation.type === "set-state" && (operation.key === "shen-q-normal" || operation.key === "shen-q-strong")) {
        operation.value = structuredClone(count);
        operation.duration = structuredClone(duration);
      } else if (operation.type === "stat-modifier" && operation.key === "shen-q-attack-speed") {
        operation.formula = structuredClone(attackSpeed);
        operation.duration = structuredClone(duration);
      } else if (operation.type === "damage" && operation.label === "Twilight Assault On-Hit") operation.formula = structuredClone(normal);
      else if (operation.type === "damage" && operation.label === "Empowered Twilight Assault On-Hit") operation.formula = structuredClone(strong);
    }
  }

  if (champion.id === 54) {
    const w = findBinSpell(binObject, ["ThunderclapBuffDuration", "BonusArmorPassive", "ThunderclapSplashDamage"]);
    if (!w) throw new Error("Malphite Thunderclap CommunityDragon binding record is missing.");
    const cleave = findBinRecord(binObject, "/ObduracyAbility/MalphiteCleave");
    const armDuration = ranked(rankedEffectValues(cleave, 2));
    const followUpDuration = ranked(rankedDataValues(w, "ThunderclapBuffDuration"));
    const first = calculationFormula(champion, "W", "TotalBonusDamage");
    const splash = calculationFormula(champion, "W", "ThunderclapSplash");
    for (const operation of operations) {
      if (operation.type === "stat-modifier" && operation.key === "thunderclap-armor") operation.formula = ranked(rankedDataValues(w, "BonusArmorPassive"));
      else if (operation.type === "set-state" && operation.key === "thunderclap-armed") operation.duration = structuredClone(armDuration);
      else if (operation.type === "set-state" && operation.key === "thunderclap-follow-up") operation.duration = structuredClone(followUpDuration);
      else if (operation.type === "damage" && operation.label === "Thunderclap First Attack") operation.formula = structuredClone(first);
      else if (operation.type === "damage" && (operation.label === "Thunderclap First Aftershock" || operation.label === "Thunderclap Aftershock")) operation.formula = structuredClone(splash);
    }
  }

  const calculationBindings: Record<string, [string, string, boolean]> = {
    [sourceId(67, "Q")]: ["Q", "ADRatioBonus", false],
    [sourceId(24, "W")]: ["W", "TotalDamage", false],
    [sourceId(122, "W")]: ["W", "EmpoweredAttackDamage", true],
    [sourceId(86, "Q")]: ["Q", "TotalDamage", true],
    [sourceId(53, "E")]: ["E", "TotalDamage", true],
    [sourceId(89, "Q")]: ["Q", "TotalDamageTooltip", false],
    [sourceId(2, "R")]: ["R", "AD", false],
  };
  for (const program of programs) {
    const binding = calculationBindings[program.sourceId];
    if (!binding) continue;
    const bound = calculationFormula(champion, binding[0], binding[1]);
    const formula = binding[2] ? sum(bound, stat("totalAttackDamage", -1)) : bound;
    for (const operation of program.triggers.flatMap((trigger) => trigger.operations)) {
      if (operation.type === "damage" || (operation.type === "stat-modifier" && operation.key === "ragnarok-ad")) operation.formula = structuredClone(formula);
    }
  }
}

function review(
  source: string,
  description: string,
  patch: string,
  components: ReviewedEffectComponent[],
  sourceHashes: Record<string, string>,
): CombatSourceReview {
  return {
    sourceId: source,
    sourceHash: checksum(description),
    sourceHashes,
    reviewedPatch: patch,
    validationNotes: [`Reviewed against pinned CommunityDragon champion detail and BIN sources for patch ${patch}.`],
    components,
  };
}

export function applyChampionCatalog(champion: ChampionLike, patch: string, sourceHashes: Record<string, string> = {}, binObject: Record<string, any> = {}) {
  const programs: EffectProgramDefinition[] = [];
  const inputs: ScenarioInputDefinition[] = [];
  const actions: ActionDefinition[] = [{
    id: attackActionId(champion.id), sourceId: sourceId(champion.id, "AA"), kind: "attack", key: "AA", label: "Basic Attack", defaultDelay: 0.15, parameters: [],
  }];

  const passiveSource = sourceId(champion.id, "P");
  const knownPassive = known.get(passiveSource);
  if (champion.passive) {
    const description = champion.passive.description;
    const components = knownPassive?.components ?? genericComponents(passiveSource, champion.passive.name, description, inferredTemplate(description) ? "unsupported" : "out-of-scope", false);
    champion.passive = {
      key: "P",
      name: champion.passive.name,
      description,
      icon: champion.passive.icon,
      classification: knownPassive?.coverage ?? aggregateCoverage(components),
      coverageNote: knownPassive?.coverageNote ?? components.map((entry) => entry.reason).join(" "),
      effects: knownPassive?.effects ?? components.map((entry) => ({ id: entry.id, label: entry.label, kind: entry.template === "shield-with-lockout" ? "shield" : entry.template === "timed-stat-modifier" ? "stat-buff" : entry.coverage === "out-of-scope" ? "utility" : "passive-proc", coverage: entry.coverage, description: entry.description })),
      review: review(passiveSource, description, patch, components, sourceHashes),
    };
    programs.push(...(knownPassive?.programs ?? []));
    if (knownPassive?.parameters?.length) actions[0].parameters.push(...knownPassive.parameters);
    if (knownPassive?.inputs?.length) inputs.push(...knownPassive.inputs);
  }

  for (const spell of champion.spells) {
    const source = sourceId(champion.id, spell.key);
    const knownSpell = known.get(source);
    if (knownSpell?.effects) spell.effects = knownSpell.effects;
    if (knownSpell?.coverage) spell.classification = knownSpell.coverage;
    if (knownSpell?.coverageNote) spell.coverageNote = knownSpell.coverageNote;
    if (knownSpell?.castable !== undefined) spell.castable = knownSpell.castable;
    if (knownSpell?.parameters) spell.actionParameters = knownSpell.parameters;
    if (knownSpell?.primaryCalculation === null) spell.primaryCalculation = undefined;
    if (knownSpell?.spellPatch) Object.assign(spell, knownSpell.spellPatch);
    const reviewedFamily = reviewedFamilyOverrides.get(source);
    if (!knownSpell && reviewedFamily && !reviewedFamily.preserveImmediateDamage) {
      spell.primaryCalculation = undefined;
      spell.damageType = null;
      spell.baseDamage = five();
      spell.ratioAD = 0;
      spell.ratioAP = 0;
      spell.ratioArmor = 0;
      spell.ratioMagicResist = 0;
      spell.scalings = [];
    }
    const components = knownSpell?.components ?? genericComponents(source, spell.name, spell.description, spell.classification, Boolean(spell.primaryCalculation));
    spell.review = review(source, spell.description, patch, components, sourceHashes);
    if (!knownSpell) {
      spell.classification = aggregateCoverage(components);
      spell.coverageNote = components.map((entry) => entry.reason).join(" ");
    }
    if (spell.castable !== false) {
      const action: ActionDefinition = {
        id: castActionId(champion.id, spell.key), sourceId: source, kind: "ability", key: spell.key, label: spell.name, defaultDelay: 0.15, parameters: spell.actionParameters ?? [],
      };
      if (knownSpell?.cooldownPolicy) action.cooldownPolicy = knownSpell.cooldownPolicy;
      actions.push(action);
      spell.actions = [action, ...(knownSpell?.extraActions ?? [])];
      actions.push(...(knownSpell?.extraActions ?? []));
    } else {
      spell.actions = [];
    }
    programs.push(...(knownSpell?.programs ?? []));
    if (knownSpell?.inputs?.length) inputs.push(...knownSpell.inputs);
  }

  champion.actions = actions;
  champion.inputs = inputs;
  champion.effectPrograms = programs;
  bindCompiledProgramData(champion, binObject);
  return champion as ChampionDefinition;
}

export function championReviewCatalog() {
  return known;
}

export const stableChampionSourceId = sourceId;

export const reviewedRosterSignatureByPatch: Record<string, string> = {
  "16.16": "6bc71ee8af2dc043bfdb7af47951218a8d88a5da7bf6a192780f521bbdd4d2e8",
};
