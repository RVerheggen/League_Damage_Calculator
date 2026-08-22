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
  let runeHealth = 0;
  for (const rune of selectedRunes) {
    for (const modifier of rune.staticModifiers ?? []) {
      if (modifier.stat === "health") {
        runeHealth += modifier.mode === "level-linear"
          ? (modifier.values[0] ?? 0) + ((modifier.values[1] ?? modifier.values[0] ?? 0) - (modifier.values[0] ?? 0)) * (Math.max(1, config.level) - 1) / 17
          : modifier.values[0] ?? 0;
      } else if (modifier.mode === "adaptive") {
        if (abilityPower > itemAttackDamage * 1.67) abilityPower += modifier.values[1] ?? 0;
        else itemAttackDamage += modifier.values[0] ?? 0;
      }
    }
  }

  const maxHealthDerived = champion.stats.health + champion.stats.healthPerLevel * growth + itemHealth + runeHealth;
  const armorDerived = champion.stats.armor + champion.stats.armorPerLevel * growth + itemArmor;
  const magicResistDerived = champion.stats.magicResist + champion.stats.magicResistPerLevel * growth + itemMagicResist;
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
    attackSpeed: champion.stats.attackSpeed * (1 + champion.stats.attackSpeedPerLevel * growth / 100),
  };
}
