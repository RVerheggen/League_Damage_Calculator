import type { ChampionDefinition, ComboAction } from "@/src/domain/model";

export type ActionControl = "hitCount" | "wallCollision" | "chargePercent";

const championActionControls: Record<string, Partial<Record<string, ActionControl[]>>> = {
  Poppy: {
    Q: ["hitCount"],
    E: ["wallCollision"],
    R: ["chargePercent"],
  },
};

export function getActionControls(champion: ChampionDefinition | null, action: ComboAction): ActionControl[] {
  if (!champion || action.kind !== "ability") return [];
  return championActionControls[champion.alias]?.[action.key] ?? [];
}

export function sanitizeComboForChampion(combo: ComboAction[], champion: ChampionDefinition): ComboAction[] {
  const allowedAbilityKeys = new Set(champion.spells.map((spell) => spell.key));
  if (champion.alias === "Poppy") allowedAbilityKeys.add("Q2");

  return combo
    .filter((entry) => entry.kind !== "ability" || allowedAbilityKeys.has(entry.key))
    .map((entry) => {
      if (entry.kind !== "ability") return entry;

      const controls = new Set(getActionControls(champion, entry));
      const parameters: ComboAction["parameters"] = {};
      if (controls.has("hitCount") && entry.parameters.hitCount !== undefined) parameters.hitCount = entry.parameters.hitCount;
      if (controls.has("wallCollision") && entry.parameters.wallCollision !== undefined) parameters.wallCollision = entry.parameters.wallCollision;
      if (controls.has("chargePercent") && entry.parameters.chargePercent !== undefined) parameters.chargePercent = entry.parameters.chargePercent;

      return {
        ...entry,
        label: champion.alias === "Poppy" && entry.key === "Q2" ? "Hammer Shock Detonation" : undefined,
        parameters,
      };
    });
}
