import type { ChampionDefinition, ComboAction } from "@/src/domain/model";

export type ActionControl = string;

const championActionControls: Record<string, Partial<Record<string, ActionControl[]>>> = {
  Poppy: {
    Q: ["hitCount"],
    E: ["wallCollision"],
    R: ["chargePercent"],
  },
};

export function getActionControls(champion: ChampionDefinition | null, action: ComboAction): ActionControl[] {
  if (!champion || action.kind !== "ability") return [];
  const spellKey = action.key === "Q2" ? "Q" : action.key;
  const spell = champion.spells.find((candidate) => candidate.key === spellKey);
  if (spell?.actionParameters?.length) return spell.actionParameters.map((parameter) => parameter.id);
  return championActionControls[champion.alias]?.[action.key] ?? [];
}

export function sanitizeComboForChampion(combo: ComboAction[], champion: ChampionDefinition): ComboAction[] {
  const allowedAbilityKeys = new Set(champion.spells.filter((spell) => spell.castable !== false).map((spell) => spell.key));
  if (champion.alias === "Poppy") allowedAbilityKeys.add("Q2");

  return combo
    .filter((entry) => entry.kind !== "ability" || allowedAbilityKeys.has(entry.key))
    .map((entry) => {
      if (entry.kind !== "ability") return entry;

      const controls = new Set(getActionControls(champion, entry));
      const parameters: ComboAction["parameters"] = {};
      for (const control of controls) {
        if (entry.parameters[control] !== undefined) parameters[control] = entry.parameters[control];
      }

      return {
        ...entry,
        label: champion.alias === "Poppy" && entry.key === "Q2" ? "Hammer Shock Detonation" : undefined,
        parameters,
      };
    });
}
