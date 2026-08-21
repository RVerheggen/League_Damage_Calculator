export type ChampionEffectModuleId =
  | "vayne-tumble"
  | "vayne-silver-bolts"
  | "vayne-condemn"
  | "vayne-final-hour"
  | "olaf-ragnarok"
  | "poppy-hammer-shock"
  | "poppy-heroic-charge"
  | "poppy-keepers-verdict"
  | "taric-dazzle"
  | "mundo-infected-bonesaw"
  | "garen-demacian-justice"
  | "ornn-bellows-breath";

export type ItemEffectModuleId = "abyssal-mask-unmake";
export type PerkEffectModuleId = "conqueror";

const championModules = new Map<string, ChampionEffectModuleId>([
  ["67:Q", "vayne-tumble"],
  ["67:W", "vayne-silver-bolts"],
  ["67:E", "vayne-condemn"],
  ["67:R", "vayne-final-hour"],
  ["2:R", "olaf-ragnarok"],
  ["78:Q", "poppy-hammer-shock"],
  ["78:E", "poppy-heroic-charge"],
  ["78:R", "poppy-keepers-verdict"],
  ["44:E", "taric-dazzle"],
  ["36:Q", "mundo-infected-bonesaw"],
  ["86:R", "garen-demacian-justice"],
  ["516:W", "ornn-bellows-breath"],
]);

const itemModules = new Map<number, ItemEffectModuleId>([
  [8020, "abyssal-mask-unmake"],
]);

const perkModules = new Map<number, PerkEffectModuleId>([
  [8010, "conqueror"],
]);

export const championEffectModule = (championId: number, spellKey: string) => championModules.get(`${championId}:${spellKey}`);
export const itemEffectModule = (itemId: number) => itemModules.get(itemId);
export const perkEffectModule = (perkId: number) => perkModules.get(perkId);

export const effectModuleRegistry = {
  champion: championModules,
  item: itemModules,
  perk: perkModules,
};
