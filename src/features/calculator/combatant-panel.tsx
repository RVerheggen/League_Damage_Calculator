"use client";

import { useMemo, useState } from "react";
import { ChevronRight, Plus, RotateCcw, Sparkles, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type {
  ChampionDefinition,
  CombatantConfig,
  ItemDefinition,
  ResolvedStats,
  RuneDefinition,
  RuneStyleDefinition,
  StatOverrides,
} from "@/src/domain/model";
import { itemEffectModule } from "@/src/domain/effect-modules";
import type { ChampionSummary } from "./use-game-data";
import { AbilityDetailsTooltipContent } from "./ability-details-tooltip";
import { PickerDialog } from "./picker-dialog";
import { ItemDetailsTooltipContent } from "./item-details-tooltip";
import { RunePageDialog } from "./rune-page-dialog";

const overrideFields: Array<{ key: keyof StatOverrides; label: string; min?: number; max?: number }> = [
  { key: "maxHealth", label: "Max Health", min: 1 },
  { key: "attackDamage", label: "Total AD", min: 0 },
  { key: "abilityPower", label: "AP", min: 0 },
  { key: "armor", label: "Armor", min: -999 },
  { key: "magicResist", label: "Magic Resist", min: -999 },
  { key: "lethality", label: "Lethality", min: 0 },
  { key: "percentArmorPen", label: "Armor Pen %", min: 0, max: 100 },
  { key: "flatMagicPen", label: "Flat Magic Pen", min: 0 },
  { key: "percentMagicPen", label: "Magic Pen %", min: 0, max: 100 },
  { key: "critChance", label: "Crit Chance %", min: 0, max: 100 },
];

export function CombatantPanel({
  side,
  config,
  champion,
  champions,
  items,
  runes,
  runeStyles,
  stats,
  onChange,
}: {
  side: "attacker" | "target";
  config: CombatantConfig;
  champion: ChampionDefinition | null;
  champions: ChampionSummary[];
  items: ItemDefinition[];
  runes: RuneDefinition[];
  runeStyles: RuneStyleDefinition[];
  stats: ResolvedStats | null;
  onChange: (next: CombatantConfig) => void;
}) {
  const [picker, setPicker] = useState<"champion" | "item" | "rune" | null>(null);
  const [itemSlot, setItemSlot] = useState(0);
  const itemSlots = useMemo(() => Array.from({ length: 6 }, (_, index) => items.find((item) => item.id === config.itemIds[index])), [config.itemIds, items]);
  const selectedItems = useMemo(() => itemSlots.filter(Boolean) as ItemDefinition[], [itemSlots]);
  const runeIndex = useMemo(() => new Map(runes.map((rune) => [rune.id, rune])), [runes]);
  const treeRuneIds = useMemo(() => config.runeIds.filter((id) => (runeIndex.get(id)?.styleId ?? 1) > 0), [config.runeIds, runeIndex]);
  const legacyShardIds = useMemo(() => config.runeIds.filter((id) => runeIndex.get(id)?.styleId === 0), [config.runeIds, runeIndex]);
  const selectedShardIds = config.shardIds ?? legacyShardIds;
  const selectedRunes = useMemo(
    () => [...treeRuneIds, ...selectedShardIds.filter((id): id is number => typeof id === "number")].map((id) => runeIndex.get(id)).filter(Boolean) as RuneDefinition[],
    [treeRuneIds, selectedShardIds, runeIndex],
  );

  const setOverride = (key: keyof StatOverrides, raw: string) => {
    const overrides = { ...config.overrides };
    if (raw === "") delete overrides[key];
    else overrides[key] = Number(raw);
    onChange({ ...config, overrides });
  };

  const pickerEntities = picker === "champion"
    ? champions.map((entry) => ({ id: entry.id, name: entry.name, icon: entry.icon, subtitle: entry.title, badge: entry.roles[0] }))
    : picker === "item"
      ? items.map((item) => ({ id: item.id, name: item.name, icon: item.icon, subtitle: `${item.price.toLocaleString()} Gold`, badge: item.classification, item }))
      : [];

  const handlePick = (id: number) => {
    if (picker === "champion") {
      onChange({ ...config, championId: id, currentHealth: null });
      setPicker(null);
    } else if (picker === "item") {
      const next = [...config.itemIds];
      next[itemSlot] = id;
      onChange({ ...config, itemIds: next.slice(0, 6) });
      setPicker(null);
    }
  };

  return (
    <Card className="lab-card h-fit overflow-hidden border-border/80 bg-card/86 shadow-2xl shadow-black/20">
      <CardHeader className="gap-4 border-b border-border/60 pb-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="lab-eyebrow">{side === "attacker" ? "Attacker" : "Target"}</Badge>
          <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">LEVEL {config.level}</span>
        </div>
        <button className="group flex items-center gap-4 text-left" onClick={() => setPicker("champion")}>
          <div className="champion-frame size-[4.4rem]">
            {champion && <img src={champion.icon} alt="" className="size-full object-cover" />}
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="truncate text-2xl tracking-tight">{champion?.name ?? "Loading Champion"}</CardTitle>
            <p className="mt-1 truncate text-xs capitalize tracking-[0.12em] text-muted-foreground">
              {champion?.roles.join(" / ") || "Snapshot Lookup"}
            </p>
          </div>
          <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </button>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <label htmlFor={`${side}-level`} className="font-mono text-muted-foreground">CHAMPION LEVEL</label>
            <Input
              id={`${side}-level`}
              type="number"
              min={1}
              max={18}
              value={config.level}
              onChange={(event) => onChange({ ...config, level: Math.max(1, Math.min(18, Number(event.target.value) || 1)) })}
              className="h-7 w-16 font-mono"
            />
          </div>
          <Slider value={[config.level]} min={1} max={18} step={1} onValueChange={(value) => onChange({ ...config, level: Array.isArray(value) ? value[0] : value })} />
        </div>
      </CardHeader>
      <CardContent className="space-y-5 pt-5">
        <div className="grid grid-cols-4 gap-2">
          {[
            ["HP", stats?.maxHealth],
            ["AD", stats?.attackDamage],
            ["ARM", stats?.armor],
            ["MR", stats?.magicResist],
          ].map(([label, value]) => (
            <div className="stat-cell" key={label as string}>
              <span>{label}</span>
              <strong>{typeof value === "number" ? Math.round(value).toLocaleString() : "..."}</strong>
            </div>
          ))}
        </div>

        {champion && (
          <div>
            <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>ABILITY RANKS</span><span>Sandbox Editable</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {champion.spells.slice(0, 4).map((spell) => (
                <div key={spell.key} className="ability-rank-control">
                  <Tooltip>
                    <TooltipTrigger
                      render={<button type="button" className="ability-rank-icon cursor-help transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40" aria-label={`View ${spell.name} Details`} />}
                    >
                      <img src={spell.icon} alt="" />
                      <span>{spell.key}</span>
                    </TooltipTrigger>
                    <AbilityDetailsTooltipContent spell={spell} rank={config.abilityRanks[spell.key] ?? 0} />
                  </Tooltip>
                  <Input
                    id={`${side}-${spell.key}-rank`}
                    aria-label={`${spell.name} Rank`}
                    type="number"
                    min={0}
                    max={spell.key === "R" ? 3 : 5}
                    value={config.abilityRanks[spell.key] ?? 0}
                    onChange={(event) => onChange({ ...config, abilityRanks: { ...config.abilityRanks, [spell.key]: Number(event.target.value) } })}
                    className="ability-rank-input h-8 px-0 text-center font-mono leading-none tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground"><span>BUILD</span><span>{selectedItems.length} / 6 ITEMS</span></div>
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 6 }).map((_, index) => {
              const item = itemSlots[index];
              return (
                <div key={index} className="group/item relative min-w-0">
                  <Tooltip>
                    <TooltipTrigger
                      className="item-slot relative w-full overflow-hidden"
                      onClick={() => { setItemSlot(index); setPicker("item"); }}
                      aria-label={item ? `Replace ${item.name}` : `Add Item ${index + 1}`}
                    >
                      {item ? <img src={item.icon} alt="" className="size-full object-cover" /> : <Plus className="size-3.5" />}
                    </TooltipTrigger>
                    {item ? <ItemDetailsTooltipContent item={item} /> : <TooltipContent>Add Item</TooltipContent>}
                  </Tooltip>
                  {item && (
                    <button
                      type="button"
                      aria-label={`Remove ${item.name}`}
                      title={`Remove ${item.name}`}
                      onClick={() => {
                        const next = [...config.itemIds];
                        next.splice(index, 1);
                        onChange({ ...config, itemIds: next });
                      }}
                      className="absolute -right-1.5 -top-1.5 z-10 grid size-5 place-items-center rounded-full border border-border bg-background text-muted-foreground shadow-md transition-colors hover:border-destructive/60 hover:bg-destructive hover:text-white focus-visible:border-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive/35"
                    >
                      <X className="size-3" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          {selectedItems.length > 0 && (
            <div className="mt-2 flex justify-end"><Button variant="ghost" size="xs" onClick={() => onChange({ ...config, itemIds: [] })}><RotateCcw /> Clear Build</Button></div>
          )}
          {selectedItems.some((item) => itemEffectModule(item.id) === "abyssal-mask-unmake") && (
            <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs">
              <span>
                <strong className="block text-foreground">Unmake Aura</strong>
                <span className="text-muted-foreground">Opponent Within 700 Range</span>
              </span>
              <Switch
                size="sm"
                aria-label="Opponent Within 700 Range"
                checked={Boolean(config.conditions?.abyssalMaskInRange)}
                onCheckedChange={(abyssalMaskInRange) => onChange({ ...config, conditions: { ...config.conditions, abyssalMaskInRange } })}
              />
            </div>
          )}
        </div>

        <div>
          <Button variant="outline" className="w-full justify-between border-border/70 bg-background/30" onClick={() => setPicker("rune")}>
            <span className="flex items-center gap-2"><Sparkles className="size-4 text-primary" /> Runes And Shards</span>
            <Badge variant="secondary">{selectedRunes.length}</Badge>
          </Button>
          {selectedRunes.length > 0 && (
            <ScrollArea className="mt-2 max-h-24">
              <div className="flex flex-wrap gap-1.5">
                {selectedRunes.map((rune, selectionIndex) => (
                  <button
                    key={`${rune.id}-${selectionIndex}`}
                    onClick={() => {
                      if (selectionIndex < treeRuneIds.length) {
                        onChange({ ...config, runeIds: treeRuneIds.filter((id) => id !== rune.id), shardIds: selectedShardIds });
                      } else {
                        const shardIds = [...selectedShardIds];
                        shardIds[selectionIndex - treeRuneIds.length] = null;
                        onChange({ ...config, runeIds: treeRuneIds, shardIds });
                      }
                    }}
                    className="flex items-center gap-1.5 rounded-md border border-border bg-background/30 px-2 py-1 text-[11px]"
                  >
                    <img src={rune.icon} alt="" className="size-4" />{rune.name}<X className="size-3 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>

        <Accordion>
          <AccordionItem value="advanced" className="border-y border-border/60">
            <AccordionTrigger className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Advanced Stats And Overrides</AccordionTrigger>
            <AccordionContent className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1 text-xs text-muted-foreground">
                  <label htmlFor={`${side}-current-health`}>Current Health</label>
                  <Input id={`${side}-current-health`} type="number" min={0} value={config.currentHealth ?? ""} placeholder={stats ? Math.round(stats.maxHealth).toString() : "Derived"} onChange={(event) => onChange({ ...config, currentHealth: event.target.value === "" ? null : Number(event.target.value) })} />
                </div>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <label htmlFor={`${side}-starting-shield`}>Starting Shield</label>
                  <Input id={`${side}-starting-shield`} type="number" min={0} value={config.startingShield} onChange={(event) => onChange({ ...config, startingShield: Number(event.target.value) || 0 })} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {overrideFields.map((field) => (
                  <label key={field.key} className="space-y-1 text-xs text-muted-foreground">
                    {field.label}
                    <Input type="number" min={field.min} max={field.max} value={config.overrides[field.key] ?? ""} placeholder="Derived" onChange={(event) => setOverride(field.key, event.target.value)} />
                  </label>
                ))}
              </div>
              <Button variant="ghost" size="sm" onClick={() => onChange({ ...config, overrides: {} })}><RotateCcw /> Reset Overrides</Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>

      <PickerDialog
        open={picker === "champion" || picker === "item"}
        onOpenChange={(open) => { if (!open) setPicker(null); }}
        title={picker === "champion" ? "Choose Champion" : "Choose Item"}
        description="Search the versioned live patch snapshot."
        entities={pickerEntities}
        onSelect={handlePick}
      />
      <RunePageDialog
        open={picker === "rune"}
        onOpenChange={(open) => { if (!open) setPicker(null); }}
        runes={runes}
        styles={runeStyles}
        selectedIds={treeRuneIds}
        selectedShardIds={selectedShardIds}
        onSelectedIdsChange={(runeIds) => onChange({ ...config, runeIds, shardIds: selectedShardIds })}
        onSelectedShardIdsChange={(shardIds) => onChange({ ...config, runeIds: treeRuneIds, shardIds })}
      />
    </Card>
  );
}
