import { damageVector, type DamageVector, type ResolvedStats } from "./model";

export type ResistanceModifiers = {
  flatReduction?: number;
  percentReduction?: number;
  percentPenetration?: number;
  flatPenetration?: number;
};

export function effectiveResistance(resistance: number, modifiers: ResistanceModifiers) {
  let value = resistance;
  value -= modifiers.flatReduction ?? 0;
  value *= 1 - (modifiers.percentReduction ?? 0) / 100;
  value *= 1 - (modifiers.percentPenetration ?? 0) / 100;
  value -= modifiers.flatPenetration ?? 0;
  return value;
}

export function resistanceMultiplier(resistance: number) {
  return resistance >= 0
    ? 100 / (100 + resistance)
    : 2 - 100 / (100 - resistance);
}

export function mitigateDamage(
  damage: DamageVector,
  attacker: ResolvedStats,
  defender: ResolvedStats,
  reductions: { armorFlat?: number; armorPercent?: number; magicFlat?: number; magicPercent?: number } = {},
): DamageVector {
  const armor = effectiveResistance(defender.armor, {
    flatReduction: reductions.armorFlat,
    percentReduction: reductions.armorPercent,
    percentPenetration: attacker.percentArmorPen,
    flatPenetration: attacker.lethality,
  });
  const magicResist = effectiveResistance(defender.magicResist, {
    flatReduction: reductions.magicFlat,
    percentReduction: reductions.magicPercent,
    percentPenetration: attacker.percentMagicPen,
    flatPenetration: attacker.flatMagicPen,
  });
  return damageVector(
    damage.physical * resistanceMultiplier(armor),
    damage.magic * resistanceMultiplier(magicResist),
    damage.true,
  );
}
