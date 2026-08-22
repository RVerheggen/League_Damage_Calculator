import type { FormulaNode } from "./formula";

export type DamageType = "physical" | "magic" | "true";
export type Coverage = "modeled" | "partial" | "out-of-scope" | "unsupported";

export type CombatRole = "attacker" | "defender" | "both" | "neither";
export type ReviewDisposition = "template" | "custom" | "out-of-scope";
export type EffectTemplateId =
  | "direct-damage"
  | "arm-next-hit"
  | "timed-on-hit"
  | "stacking-proc"
  | "mark-and-consume"
  | "timed-stat-modifier"
  | "conditional-amplifier"
  | "resistance-modifier"
  | "cooldown-modifier"
  | "shield-with-lockout"
  | "scheduled-damage"
  | "multi-hit-action"
  | "limited-attack-state"
  | "automatic-attack-sequence"
  | "recurring-attack-state"
  | "attack-cycle";

export type EffectEvent =
  | "scenario-start"
  | "action-start"
  | "cast"
  | "basic-attack-hit"
  | "ability-hit"
  | "before-damage"
  | "after-damage"
  | "action-complete"
  | "time-advanced"
  | "expiry"
  | "target-death";

export type StateScope = "participant" | "source" | "target" | "source-target";
export type RuntimeStat = "attackDamage" | "abilityPower" | "armor" | "magicResist" | "attackSpeed" | "adaptiveForce";

export type EffectCondition =
  | { type: "action-kind"; value: ComboAction["kind"] }
  | { type: "action-id"; value: string }
  | { type: "source-id"; value: string }
  | { type: "rank-at-least"; sourceId: string; value: number }
  | { type: "hit"; value: boolean }
  | { type: "state-active"; key: string; scope?: StateScope }
  | { type: "state-inactive"; key: string; scope?: StateScope }
  | { type: "state-value"; key: string; operator: "eq" | "gte" | "lt"; value: number; scope?: StateScope }
  | { type: "parameter"; key: string; operator: "eq" | "gte" | "lt"; value: boolean | number | string }
  | { type: "target-champion"; value: boolean }
  | { type: "damage-type"; value: DamageType };

export type EffectOperation =
  | { type: "set-state"; key: string; scope?: StateScope; value: FormulaNode; duration?: FormulaNode; label: string }
  | { type: "increment-state"; key: string; scope?: StateScope; amount: FormulaNode; maximum?: FormulaNode; duration?: FormulaNode; label: string }
  | { type: "decrement-state"; key: string; scope?: StateScope; amount: FormulaNode; refreshDuration?: FormulaNode; label: string }
  | { type: "consume-state"; key: string; scope?: StateScope; label: string }
  | { type: "extend-state"; key: string; scope?: StateScope; duration: FormulaNode; label: string }
  | { type: "damage"; label: string; damageType: DamageType; formula: FormulaNode; formulaLabel: string; critical?: "never" | "attack" }
  | { type: "shield"; label: string; formula: FormulaNode; duration: FormulaNode; lockoutKey?: string; lockoutDuration?: FormulaNode }
  | { type: "stat-modifier"; key: string; stat: RuntimeStat; mode: "flat" | "percent"; formula: FormulaNode; duration?: FormulaNode; activeWhileState?: string; label: string }
  | { type: "damage-amplifier"; key: string; damageType?: DamageType; formula: FormulaNode; duration?: FormulaNode; label: string }
  | { type: "resistance-modifier"; key: string; stat: "armor" | "magicResist"; mode: "flat-reduction" | "percent-reduction"; formula: FormulaNode; duration?: FormulaNode; label: string }
  | { type: "cooldown-modifier"; sourceId: string; mode: "remaining-flat" | "remaining-percent" | "total-percent" | "set-total"; formula: FormulaNode; label: string }
  | {
      type: "schedule-damage";
      label: string;
      damageType: DamageType;
      formula: FormulaNode;
      delay: FormulaNode;
      formulaLabel: string;
      tickCount?: FormulaNode;
      tickInterval?: FormulaNode;
      replaceKey?: string;
      scope?: StateScope;
    }
  | { type: "trace"; label: string; description: string };

export type EffectTriggerDefinition = {
  id: string;
  event: EffectEvent;
  priority: number;
  conditions: EffectCondition[];
  operations: EffectOperation[];
};

export type EffectProgramDefinition = {
  id: string;
  label: string;
  owner: "champion" | "item" | "rune";
  sourceId: string;
  rankSource?: string;
  template: EffectTemplateId;
  triggers: EffectTriggerDefinition[];
};

export type ReviewedEffectComponent = {
  id: string;
  label: string;
  description: string;
  relevance: CombatRole;
  disposition: ReviewDisposition;
  coverage: Coverage;
  reason: string;
  template?: EffectTemplateId;
  customHandlerId?: string;
  omissions?: string[];
  formulaBindings?: string[];
  valueBindings?: string[];
};

export type CombatSourceReview = {
  sourceId: string;
  sourceHash: string;
  sourceHashes: Record<string, string>;
  reviewedPatch: string;
  validationNotes: string[];
  components: ReviewedEffectComponent[];
};

export type EffectKind =
  | "direct-damage"
  | "passive-proc"
  | "next-attack"
  | "stat-buff"
  | "debuff"
  | "shield"
  | "cooldown-modifier"
  | "utility"
  | "healing";

export type ActionParameterDefinition = {
  id: string;
  type: "boolean" | "number" | "select";
  label: string;
  defaultValue: boolean | number | string;
  min?: number;
  max?: number;
  step?: number;
  options?: Array<{ value: string; label: string }>;
};

export type ScenarioInputDefinition = ActionParameterDefinition & {
  description: string;
};

export type ActionDefinition = {
  id: string;
  sourceId: string;
  kind: "attack" | "ability";
  key: string;
  label: string;
  defaultDelay: number;
  parameters: ActionParameterDefinition[];
  cooldownPolicy?: "cast" | "consume-or-expire";
};

export type RankedScaling = {
  stat: "attackDamage" | "abilityPower" | "armor" | "magicResist";
  scope: "base" | "bonus" | "total";
  values: number[];
};

export type SpellEffectDefinition = {
  id: string;
  label: string;
  kind: EffectKind;
  coverage: Coverage;
  description: string;
  damageType?: DamageType;
  formula?: FormulaNode;
  formulaLabel?: string;
};

export type DamageVector = {
  physical: number;
  magic: number;
  true: number;
  total: number;
};

export type ChampionStats = {
  health: number;
  healthPerLevel: number;
  mana: number;
  manaPerLevel: number;
  armor: number;
  armorPerLevel: number;
  magicResist: number;
  magicResistPerLevel: number;
  attackDamage: number;
  attackDamagePerLevel: number;
  attackSpeed: number;
  attackSpeedPerLevel: number;
  moveSpeed: number;
  attackRange: number;
};

export type SpellDefinition = {
  key: string;
  name: string;
  description: string;
  icon: string;
  damageType: DamageType | null;
  baseDamage: number[];
  ratioAD: number;
  ratioAP: number;
  ratioArmor: number;
  ratioMagicResist: number;
  cooldown: number[];
  classification: Coverage;
  coverageNote: string;
  castable?: boolean;
  actionParameters?: ActionParameterDefinition[];
  scalings?: RankedScaling[];
  calculations?: Record<string, { formula: FormulaNode; displayAsPercent: boolean; unresolvedParts: string[] }>;
  primaryCalculation?: string;
  effects?: SpellEffectDefinition[];
  review?: CombatSourceReview;
  actions?: ActionDefinition[];
};

export type PassiveDefinition = {
  key: "P";
  name: string;
  description: string;
  icon: string;
  classification: Coverage;
  coverageNote: string;
  effects: SpellEffectDefinition[];
  review: CombatSourceReview;
};

export type ChampionDefinition = {
  id: number;
  alias: string;
  name: string;
  title: string;
  roles: string[];
  icon: string;
  stats: ChampionStats;
  passive: PassiveDefinition | null;
  spells: SpellDefinition[];
  actions: ActionDefinition[];
  inputs: ScenarioInputDefinition[];
  effectPrograms: EffectProgramDefinition[];
};

export type ItemStats = {
  health: number;
  mana: number;
  attackDamage: number;
  abilityPower: number;
  armor: number;
  magicResist: number;
  attackSpeedPercent: number;
  critChancePercent: number;
  moveSpeedPercent: number;
  lethality: number;
  flatMagicPen: number;
};

export type ItemDefinition = {
  id: number;
  name: string;
  description: string;
  statsText?: string[];
  effectText?: string;
  icon: string;
  price: number;
  stats: ItemStats;
  classification: Coverage | "stat-only" | "irrelevant";
  coverageNote?: string;
  inputs?: ScenarioInputDefinition[];
  effectPrograms?: EffectProgramDefinition[];
};

export type RuneDefinition = {
  id: number;
  name: string;
  description: string;
  icon: string;
  classification: Coverage | "stat-only" | "irrelevant";
  coverageNote?: string;
  styleId: number;
  styleName: string;
  slot: number;
  slotType: string;
  effectPrograms?: EffectProgramDefinition[];
  staticModifiers?: Array<{ stat: "health" | "attackDamage" | "abilityPower"; mode: "flat" | "level-linear" | "adaptive"; values: number[] }>;
};

export type RuneStyleDefinition = {
  id: number;
  name: string;
  icon: string;
  slots: Array<{
    index: number;
    type: string;
    runeIds: number[];
  }>;
};

export type StatOverrides = Partial<{
  maxHealth: number;
  attackDamage: number;
  abilityPower: number;
  armor: number;
  magicResist: number;
  lethality: number;
  percentArmorPen: number;
  flatMagicPen: number;
  percentMagicPen: number;
  critChance: number;
  critDamage: number;
}>;

export type CombatantConfig = {
  championId: number;
  level: number;
  abilityRanks: Record<string, number>;
  itemIds: number[];
  runeIds: number[];
  shardIds?: Array<number | null>;
  currentHealth: number | null;
  startingShield: number;
  inputs: Record<string, boolean | number | string>;
  overrides: StatOverrides;
};

export type ComboAction = {
  id: string;
  kind: "attack" | "ability" | "wait" | "item";
  actionId: string;
  key: string;
  label?: string;
  delay: number;
  enabled: boolean;
  outcome: "hit" | "miss" | "crit" | "normal";
  parameters: {
    [key: string]: boolean | number | string | undefined;
  };
};

export type ScenarioV2 = {
  schemaVersion: 2;
  patch: string;
  randomnessMode: "deterministic" | "expected";
  attacker: CombatantConfig;
  defender: CombatantConfig;
  combo: ComboAction[];
  settings: {
    resolvePendingDamage: boolean;
    continueAfterLethal: boolean;
  };
};

export type ResolvedStats = {
  maxHealth: number;
  currentHealth: number;
  baseAttackDamage: number;
  bonusAttackDamage: number;
  attackDamage: number;
  abilityPower: number;
  baseArmor?: number;
  bonusArmor?: number;
  armor: number;
  baseMagicResist?: number;
  bonusMagicResist?: number;
  magicResist: number;
  lethality: number;
  percentArmorPen: number;
  flatMagicPen: number;
  percentMagicPen: number;
  critChance: number;
  critDamage: number;
  attackSpeed?: number;
};

export type StepTrigger = {
  source: "champion" | "item" | "rune" | "passive";
  label: string;
  preMitigation: DamageVector;
  postMitigation: DamageVector;
  note?: string;
  kind?: "damage" | "state";
  children?: StepTrigger[];
};

export type SimulationResultNode = StepTrigger;

export type SimulationStep = {
  id: string;
  timestamp: number;
  label: string;
  preMitigation: DamageVector;
  postMitigation: DamageVector;
  shieldAbsorbed: number;
  healthDamage: number;
  targetHealth: number;
  overkill: number;
  triggers: StepTrigger[];
  warnings: string[];
  formula: string;
};

export type SimulationResult = {
  steps: SimulationStep[];
  totals: {
    preMitigation: DamageVector;
    postMitigation: DamageVector;
    shieldAbsorbed: number;
    healthDamage: number;
  };
  attackerStats: ResolvedStats;
  defenderStats: ResolvedStats;
  lethalStepId: string | null;
  warnings: string[];
};

export const emptyDamage = (): DamageVector => ({ physical: 0, magic: 0, true: 0, total: 0 });

export function damageVector(physical = 0, magic = 0, trueDamage = 0): DamageVector {
  return { physical, magic, true: trueDamage, total: physical + magic + trueDamage };
}

export function addDamage(left: DamageVector, right: DamageVector): DamageVector {
  return damageVector(left.physical + right.physical, left.magic + right.magic, left.true + right.true);
}
