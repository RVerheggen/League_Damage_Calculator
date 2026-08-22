import type { ScenarioV2 } from "./model";

const PREFIX = "dl=";

function bytesToBase64(bytes: Uint8Array) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64ToBytes(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "="));
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

export function encodeScenario(scenario: ScenarioV2) {
  return `${PREFIX}${bytesToBase64(new TextEncoder().encode(JSON.stringify(scenario)))}`;
}

export function decodeScenario(fragment: string): ScenarioV2 | null {
  try {
    const encoded = fragment.replace(/^#/, "");
    if (!encoded.startsWith(PREFIX)) return null;
    const parsed = JSON.parse(new TextDecoder().decode(base64ToBytes(encoded.slice(PREFIX.length))));
    if (parsed?.schemaVersion !== 2 || typeof parsed.patch !== "string") return null;
    return parsed as ScenarioV2;
  } catch {
    return null;
  }
}

export function hasIncompatibleScenario(fragment: string) {
  try {
    const encoded = fragment.replace(/^#/, "");
    if (!encoded.startsWith(PREFIX)) return false;
    const parsed = JSON.parse(new TextDecoder().decode(base64ToBytes(encoded.slice(PREFIX.length))));
    return parsed?.schemaVersion !== 2;
  } catch {
    return false;
  }
}

export function validateScenario(scenario: ScenarioV2) {
  const warnings: string[] = [];
  for (const [label, combatant] of [["Attacker", scenario.attacker], ["Target", scenario.defender]] as const) {
    if (combatant.level < 1 || combatant.level > 18) warnings.push(`${label} level must be between 1 and 18.`);
    if (combatant.itemIds.length > 6) warnings.push(`${label} has more than six items.`);
    const points = Object.values(combatant.abilityRanks).reduce((total, rank) => total + rank, 0);
    if (points > combatant.level) warnings.push(`${label} ability ranks use more points than level ${combatant.level} allows.`);
  }
  return warnings;
}
