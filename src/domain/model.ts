import type { FormulaNode } from "./formula";

export type DamageType = "physical" | "magic" | "true";
export type Coverage =
  | "modeled"
  | "partial"
  | "out-of-scope"
  | "unsupported"
  | "estimated"
  | "non-damaging";

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

export type RankedScaling = {
  stat: "attackDamage" | "abilityPower" | "armor" | "magicResist";
  scope: "base" | "bonus" | "total";
  values: number[];
};

export type SpellEffectDefinition = {
  id: string;
  label: string;
  kind: EffectKind;
  coverage: Exclude<Coverage, "estimated" | "non-damaging">;
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
};

export type ChampionDefinition = {
  id: number;
  alias: string;
  name: string;
  title: string;
  roles: string[];
  icon: string;
  stats: ChampionStats;
  passive: { name: string; description: string; icon: string } | null;
  spells: SpellDefinition[];
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
  stacks: Record<string, number>;
  resources: Record<string, number>;
  conditions?: Record<string, boolean | number | string>;
  overrides: StatOverrides;
};

export type ComboAction = {
  id: string;
  kind: "attack" | "ability" | "wait" | "item";
  key: string;
  label?: string;
  delay: number;
  enabled: boolean;
  outcome: "hit" | "miss" | "crit" | "normal";
  parameters: {
    [key: string]: boolean | number | string | undefined;
  };
};

export type ScenarioV1 = {
  schemaVersion: 1;
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
};

export type StepTrigger = {
  source: "champion" | "item" | "rune" | "passive";
  label: string;
  preMitigation: DamageVector;
  postMitigation: DamageVector;
  note?: string;
  kind?: "damage" | "state";
};

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
