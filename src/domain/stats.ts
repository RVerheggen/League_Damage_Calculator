import type { ChampionDefinition, CombatantConfig, ItemDefinition, ResolvedStats, RuneDefinition } from "./model";

export function growthMultiplier(level: number) {
  const levelOffset = Math.max(0, Math.min(17, level - 1));
  return levelOffset * (0.7025 + 0.0175 * levelOffset);
}

export function resolveStats(
  config: CombatantConfig,
  champion: ChampionDefinition,
  itemIndex: Map<number, ItemDefinition>,
  runeIndex: Map<number, RuneDefinition> = new Map(),
): ResolvedStats {
  const growth = growthMultiplier(config.level);
  const baseAttackDamage = champion.stats.attackDamage + champion.stats.attackDamagePerLevel * growth;
  let itemHealth = 0;
  let itemAttackDamage = 0;
  let abilityPower = 0;
  let itemArmor = 0;
  let itemMagicResist = 0;
  let lethality = 0;
  let critChance = 0;

  for (const itemId of config.itemIds.slice(0, 6)) {
    const stats = itemIndex.get(itemId)?.stats;
    if (!stats) continue;
    itemHealth += stats.health;
    itemAttackDamage += stats.attackDamage;
    abilityPower += stats.abilityPower;
    itemArmor += stats.armor;
    itemMagicResist += stats.magicResist;
    lethality += stats.lethality;
    critChance += stats.critChancePercent;
  }
  const selectedRunes = [...config.runeIds, ...(config.shardIds ?? []).filter((id): id is number => typeof id === "number")]
    .map((id) => runeIndex.get(id))
    .filter(Boolean) as RuneDefinition[];
  const flatHealthShards = selectedRunes.filter((rune) => rune.name === "Health").length * 65;
  const scalingHealthShards = selectedRunes.filter((rune) => rune.name === "Health Scaling").length * (10 + (170 * Math.max(0, config.level - 1)) / 17);
  const adaptiveShards = selectedRunes.filter((rune) => rune.name === "Adaptive Force").length;
  if (adaptiveShards > 0) {
    if (abilityPower > itemAttackDamage * 1.67) abilityPower += adaptiveShards * 9;
    else itemAttackDamage += adaptiveShards * 5.4;
  }

  const maxHealthDerived = champion.stats.health + champion.stats.healthPerLevel * growth + itemHealth + flatHealthShards + scalingHealthShards;
  const ultimateRank = Math.max(0, Math.min(3, config.abilityRanks.R ?? 0));
  const olafRPassive = champion.id === 2 && ultimateRank > 0 ? [10, 15, 20][ultimateRank - 1] : 0;
  const armorDerived = champion.stats.armor + champion.stats.armorPerLevel * growth + itemArmor + olafRPassive;
  const magicResistDerived = champion.stats.magicResist + champion.stats.magicResistPerLevel * growth + itemMagicResist + olafRPassive;
  const attackDamageDerived = baseAttackDamage + itemAttackDamage;
  const overrides = config.overrides;
  const attackDamage = overrides.attackDamage ?? attackDamageDerived;
  const maxHealth = overrides.maxHealth ?? maxHealthDerived;
  const armor = overrides.armor ?? armorDerived;
  const magicResist = overrides.magicResist ?? magicResistDerived;
  const baseArmor = champion.stats.armor + champion.stats.armorPerLevel * growth;
  const baseMagicResist = champion.stats.magicResist + champion.stats.magicResistPerLevel * growth;

  return {
    maxHealth,
    currentHealth: Math.max(0, Math.min(config.currentHealth ?? maxHealth, maxHealth)),
    baseAttackDamage,
    bonusAttackDamage: attackDamage - baseAttackDamage,
    attackDamage,
    abilityPower: overrides.abilityPower ?? abilityPower,
    baseArmor,
    bonusArmor: armor - baseArmor,
    armor,
    baseMagicResist,
    bonusMagicResist: magicResist - baseMagicResist,
    magicResist,
    lethality: overrides.lethality ?? lethality,
    percentArmorPen: overrides.percentArmorPen ?? 0,
    flatMagicPen: overrides.flatMagicPen ?? 0,
    percentMagicPen: overrides.percentMagicPen ?? 0,
    critChance: overrides.critChance ?? critChance,
    critDamage: overrides.critDamage ?? 175,
  };
}
