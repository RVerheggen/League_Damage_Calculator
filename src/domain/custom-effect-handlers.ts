import { damageVector, emptyDamage, type ComboAction, type DamageType, type DamageVector, type ResolvedStats } from "./model";

export type CustomAbilityContext = {
  action: ComboAction;
  rank: number;
  attacker: ResolvedStats;
  defender: ResolvedStats;
  targetCurrentHealth: number;
};

export type CustomAbilityResult = {
  damage: DamageVector;
  formula: string;
  note?: string;
};

export type CustomAbilityHandler = (context: CustomAbilityContext) => CustomAbilityResult;

function packet(type: DamageType, amount: number) {
  if (type === "physical") return damageVector(amount, 0, 0);
  if (type === "magic") return damageVector(0, amount, 0);
  if (type === "true") return damageVector(0, 0, amount);
  return emptyDamage();
}

const handlers = new Map<string, CustomAbilityHandler>([
  ["champion:78:Q", ({ action, rank, attacker, defender }) => {
    const index = Math.max(0, rank - 1);
    const hits = action.key === "Q2" ? 1 : Math.max(1, Math.min(2, Number(action.parameters.hitCount ?? 1)));
    const healthRatio = [0.07, 0.075, 0.08, 0.085, 0.09][index];
    const perHit = [30, 55, 80, 105, 130][index] + attacker.attackDamage * 0.75 + defender.maxHealth * healthRatio;
    return {
      damage: packet("physical", perHit * hits),
      formula: `${hits} x (${[30, 55, 80, 105, 130][index]} + 75% total AD + ${(healthRatio * 100).toFixed(1)}% target max health)`,
      note: action.key === "Q2" ? "Delayed Hammer Shock detonation connected." : hits === 2 ? "Both Hammer Shock impacts connected in this action." : "Initial Hammer Shock impact only.",
    };
  }],
  ["champion:78:E", ({ action, rank, attacker }) => {
    const index = Math.max(0, rank - 1);
    const base = [40, 60, 80, 100, 120][index] + attacker.attackDamage * 0.6;
    const multiplier = action.parameters.wallCollision ? 2 : 1;
    return { damage: packet("physical", base * multiplier), formula: `${multiplier} x (${[40, 60, 80, 100, 120][index]} + 60% total AD)`, note: action.parameters.wallCollision ? "Terrain collision damage included." : "No terrain collision." };
  }],
  ["champion:78:R", ({ action, rank, attacker }) => {
    const index = Math.max(0, Math.min(2, rank - 1));
    const charge = Math.max(0, Math.min(1, Number(action.parameters.chargePercent ?? 0) / 100));
    const multiplier = 0.5 + charge * 0.5;
    const amount = ([200, 300, 400][index] + attacker.attackDamage * 0.9) * multiplier;
    return { damage: packet("physical", amount), formula: `${Math.round(multiplier * 100)}% x (${[200, 300, 400][index]} + 90% total AD)`, note: `${Math.round(charge * 100)}% charge selected.` };
  }],
  ["champion:44:E", ({ rank, attacker }) => {
    const index = Math.max(0, rank - 1);
    return { damage: packet("magic", [90, 130, 170, 210, 250][index] + attacker.abilityPower * 0.5 + attacker.armor * 0.5), formula: `${[90, 130, 170, 210, 250][index]} + 50% AP + 50% armor` };
  }],
  ["champion:36:Q", ({ rank, targetCurrentHealth }) => {
    const index = Math.max(0, rank - 1);
    const ratio = [0.2, 0.225, 0.25, 0.275, 0.3][index];
    const minimum = [80, 130, 180, 230, 280][index];
    return { damage: packet("magic", Math.max(minimum, targetCurrentHealth * ratio)), formula: `max(${minimum}, ${(ratio * 100).toFixed(1)}% target current health)`, note: "Champion minimum damage is applied. Monster caps are outside duel scope." };
  }],
  ["champion:86:R", ({ rank, defender, targetCurrentHealth }) => {
    const index = Math.max(0, Math.min(2, rank - 1));
    const base = [150, 300, 450][index];
    const ratio = [0.25, 0.3, 0.35][index];
    return { damage: packet("true", base + Math.max(0, defender.maxHealth - targetCurrentHealth) * ratio), formula: `${base} + ${(ratio * 100).toFixed(0)}% target missing health` };
  }],
  ["champion:516:W", ({ rank, defender }) => {
    const ratio = [0.12, 0.13, 0.14, 0.15, 0.16][Math.max(0, rank - 1)];
    return { damage: packet("magic", defender.maxHealth * ratio), formula: `${(ratio * 100).toFixed(0)}% target max health across the full breath`, note: "All Bellows Breath ticks are selected." };
  }],
]);

export function customAbilityHandler(sourceId: string) {
  return handlers.get(sourceId);
}

export const customEffectHandlerIds = new Set(handlers.keys());
