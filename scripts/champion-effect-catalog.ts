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
  damageType: "physical" | "magic",
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
  if (coverage === "out-of-scope") {
    return [component(`${key}:scope`, name, description, "out-of-scope", null, "The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.")];
  }
  const template = inferredTemplate(description);
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
      ? `The full patch description is retained and assigned to the ${template} family, but a complete reviewed binding has not been compiled yet.`
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

function dataValue(spell: any, name: string) {
  const values = spell?.DataValues?.find((entry: any) => entry.name === name)?.values;
  const value = Array.isArray(values) ? values[1] ?? values[0] : undefined;
  if (!Number.isFinite(value)) throw new Error(`CommunityDragon data binding ${name} is missing or non-numeric.`);
  return Number(value);
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
    const components = knownSpell?.components ?? genericComponents(source, spell.name, spell.description, spell.classification, Boolean(spell.primaryCalculation));
    spell.review = review(source, spell.description, patch, components, sourceHashes);
    if (!knownSpell) spell.classification = aggregateCoverage(components);
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
