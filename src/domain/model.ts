export type DamageType = "physical" | "magic" | "true";
export type Coverage = "modeled" | "estimated" | "non-damaging" | "unsupported";

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
  icon: string;
  price: number;
  stats: ItemStats;
  classification: Coverage | "stat-only" | "irrelevant";
};

export type RuneDefinition = {
  id: number;
  name: string;
  description: string;
  icon: string;
  classification: "modeled" | "stat-only" | "irrelevant" | "unsupported";
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
    wallCollision?: boolean;
    empowered?: boolean;
    hitCount?: number;
    chargePercent?: number;
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
  armor: number;
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
