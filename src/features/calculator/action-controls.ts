import type { ActionDefinition, ChampionDefinition, ComboAction } from "@/src/domain/model";

export type ActionControl = string;

export function getActionDefinition(champion: ChampionDefinition | null, action: ComboAction): ActionDefinition | undefined {
  if (!champion || action.kind === "wait" || action.kind === "item") return undefined;
  return champion.actions.find((definition) => definition.id === action.actionId)
    ?? champion.actions.find((definition) => definition.kind === action.kind && definition.key === action.key);
}

export function getActionControls(champion: ChampionDefinition | null, action: ComboAction): ActionControl[] {
  return getActionDefinition(champion, action)?.parameters.map((parameter) => parameter.id) ?? [];
}

export function sanitizeComboForChampion(combo: ComboAction[], champion: ChampionDefinition): ComboAction[] {
  return combo.flatMap((entry) => {
    if (entry.kind === "wait" || entry.kind === "item") return [entry];
    const definition = getActionDefinition(champion, entry);
    if (!definition) return [];
    const parameters: ComboAction["parameters"] = {};
    for (const parameter of definition.parameters) parameters[parameter.id] = entry.parameters[parameter.id] ?? parameter.defaultValue;
    return [{
      ...entry,
      actionId: definition.id,
      key: definition.key,
      label: definition.label,
      parameters,
    }];
  });
}
