"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Check, CircleAlert, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { RuneDefinition, RuneStyleDefinition } from "@/src/domain/model";
import { cn } from "@/lib/utils";

const styleAccents: Record<number, string> = {
  8000: "#f28a55",
  8100: "#ef5b6c",
  8200: "#9b7cff",
  8300: "#4abac4",
  8400: "#42d2b9",
};

function RuneOption({
  rune,
  selected,
  onSelect,
  accent,
}: {
  rune: RuneDefinition;
  selected: boolean;
  onSelect: () => void;
  accent: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        type="button"
        aria-label={`${rune.name}, ${rune.classification}`}
        aria-pressed={selected}
        onClick={onSelect}
        className={cn("rune-option", selected && "is-selected")}
        style={{ "--rune-accent": accent } as CSSProperties}
      >
        <img src={rune.icon} alt="" />
        <span className="rune-check" aria-hidden="true"><Check /></span>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={10}
        className="grid w-80 max-w-[calc(100vw-2rem)] items-stretch gap-0 overflow-hidden rounded-xl border border-border/90 bg-popover p-0 text-popover-foreground shadow-2xl shadow-black/50"
        arrowClassName="bg-popover fill-popover"
      >
        <div className="flex min-w-0 items-center gap-3 border-b border-border/70 bg-background/35 p-3">
          <span className="rune-tooltip-icon" style={{ "--rune-accent": accent } as CSSProperties}>
            <img src={rune.icon} alt="" />
          </span>
          <span className="min-w-0 flex-1">
            <strong className="block truncate text-sm text-foreground">{rune.name}</strong>
            <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.13em] text-muted-foreground">{rune.styleName}</span>
          </span>
          <span className="rounded-full border border-primary/25 bg-primary/8 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-primary">{rune.classification}</span>
        </div>
        <p className="p-3 text-left text-xs leading-5 text-muted-foreground [overflow-wrap:anywhere]">{rune.description}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function StyleSelector({
  label,
  styles,
  selectedId,
  disabledId,
  onSelect,
}: {
  label: string;
  styles: RuneStyleDefinition[];
  selectedId: number;
  disabledId?: number;
  onSelect: (id: number) => void;
}) {
  return (
    <div>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={label}>
        {styles.map((style) => {
          const selected = selectedId === style.id;
          const disabled = disabledId === style.id;
          const accent = styleAccents[style.id] ?? "#42d2b9";
          return (
            <button
              key={style.id}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={disabled}
              title={disabled ? `${style.name} is already the primary path` : style.name}
              onClick={() => onSelect(style.id)}
              className={cn("rune-style-option", selected && "is-selected")}
              style={{ "--rune-accent": accent } as CSSProperties}
            >
              <img src={style.icon} alt="" />
              <span>{style.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RuneTree({
  heading,
  style,
  runes,
  selectedIds,
  secondary,
  onSelect,
}: {
  heading: string;
  style: RuneStyleDefinition | undefined;
  runes: Map<number, RuneDefinition>;
  selectedIds: number[];
  secondary?: boolean;
  onSelect: (rune: RuneDefinition) => void;
}) {
  if (!style) return null;
  const accent = styleAccents[style.id] ?? "#42d2b9";
  const slots = style.slots.filter((slot) => slot.type !== "kStatMod" && (!secondary || slot.type !== "kKeyStone"));

  return (
    <section className="rune-tree" style={{ "--tree-accent": accent } as CSSProperties}>
      <div className="rune-tree-heading">
        <span className="rune-tree-emblem"><img src={style.icon} alt="" /></span>
        <span><small>{heading}</small><strong>{style.name}</strong></span>
      </div>
      <div className="rune-tree-rail">
        {slots.map((slot) => {
          const rowRunes = slot.runeIds.map((id) => runes.get(id)).filter(Boolean) as RuneDefinition[];
          const rowLabel = slot.type === "kKeyStone" ? "Keystone" : null;
          return (
            <div className="rune-row" key={`${style.id}-${slot.index}`}>
              <span className="rune-node" aria-hidden="true" />
              {rowLabel && <p>{rowLabel}</p>}
              <div className="rune-options">
                {rowRunes.map((rune) => (
                  <RuneOption
                    key={rune.id}
                    rune={rune}
                    selected={selectedIds.includes(rune.id)}
                    onSelect={() => onSelect(rune)}
                    accent={accent}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function chooseInitialStyles(selectedIds: number[], runes: Map<number, RuneDefinition>, styles: RuneStyleDefinition[]) {
  const selected = selectedIds.map((id) => runes.get(id)).filter((rune) => rune && rune.styleId > 0) as RuneDefinition[];
  const keystone = selected.find((rune) => rune.slotType === "kKeyStone");
  const counts = new Map<number, number>();
  for (const rune of selected) counts.set(rune.styleId, (counts.get(rune.styleId) ?? 0) + 1);
  const ranked = [...counts.entries()].sort((left, right) => right[1] - left[1]).map(([id]) => id);
  const primary = keystone?.styleId ?? ranked[0] ?? styles.find((style) => style.id === 8000)?.id ?? styles[0]?.id ?? 0;
  const secondary = ranked.find((id) => id !== primary) ?? styles.find((style) => style.id === 8400 && style.id !== primary)?.id ?? styles.find((style) => style.id !== primary)?.id ?? 0;
  return { primary, secondary };
}

export function RunePageDialog({
  open,
  onOpenChange,
  runes,
  styles,
  selectedIds,
  selectedShardIds,
  onSelectedIdsChange,
  onSelectedShardIdsChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  runes: RuneDefinition[];
  styles: RuneStyleDefinition[];
  selectedIds: number[];
  selectedShardIds: Array<number | null>;
  onSelectedIdsChange: (ids: number[]) => void;
  onSelectedShardIdsChange: (ids: Array<number | null>) => void;
}) {
  const runeIndex = useMemo(() => new Map(runes.map((rune) => [rune.id, rune])), [runes]);
  const orderedStyles = useMemo(() => [...styles].sort((left, right) => left.id - right.id), [styles]);
  const initial = chooseInitialStyles(selectedIds, runeIndex, orderedStyles);
  const [primaryStyleId, setPrimaryStyleId] = useState(initial.primary);
  const [secondaryStyleId, setSecondaryStyleId] = useState(initial.secondary);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (open && !wasOpen.current) {
      const next = chooseInitialStyles(selectedIds, runeIndex, orderedStyles);
      setPrimaryStyleId(next.primary);
      setSecondaryStyleId(next.secondary);
    }
    wasOpen.current = open;
  }, [open, orderedStyles, runeIndex, selectedIds]);

  const setPrimaryStyle = (nextId: number) => {
    if (nextId === primaryStyleId) return;
    const oldSecondary = secondaryStyleId;
    const nextSecondary = oldSecondary === nextId
      ? orderedStyles.find((style) => style.id !== nextId)?.id ?? 0
      : oldSecondary;
    const kept = selectedIds.filter((id) => {
      const rune = runeIndex.get(id);
      return rune?.styleId === 0 || (rune?.styleId === oldSecondary && oldSecondary !== nextId);
    });
    setPrimaryStyleId(nextId);
    setSecondaryStyleId(nextSecondary);
    onSelectedIdsChange(kept);
  };

  const setSecondaryStyle = (nextId: number) => {
    if (nextId === secondaryStyleId || nextId === primaryStyleId) return;
    const kept = selectedIds.filter((id) => runeIndex.get(id)?.styleId !== secondaryStyleId);
    setSecondaryStyleId(nextId);
    onSelectedIdsChange(kept);
  };

  const selectPrimaryRune = (rune: RuneDefinition) => {
    if (selectedIds.includes(rune.id)) return;
    const next = selectedIds.filter((id) => {
      const selected = runeIndex.get(id);
      return !(selected?.styleId === primaryStyleId && selected.slot === rune.slot);
    });
    onSelectedIdsChange([...next, rune.id]);
  };

  const selectSecondaryRune = (rune: RuneDefinition) => {
    if (selectedIds.includes(rune.id)) {
      onSelectedIdsChange(selectedIds.filter((id) => id !== rune.id));
      return;
    }
    const chosen = selectedIds
      .map((id) => runeIndex.get(id))
      .filter((selected) => selected?.styleId === secondaryStyleId) as RuneDefinition[];
    let next = selectedIds.filter((id) => {
      const selected = runeIndex.get(id);
      return !(selected?.styleId === secondaryStyleId && selected.slot === rune.slot);
    });
    if (!chosen.some((selected) => selected.slot === rune.slot) && chosen.length >= 2) {
      next = next.filter((id) => id !== chosen[0].id);
    }
    onSelectedIdsChange([...next, rune.id]);
  };

  const selectShard = (rune: RuneDefinition, rowIndex: number) => {
    if (selectedShardIds[rowIndex] === rune.id) return;
    const next = [...selectedShardIds];
    next[rowIndex] = rune.id;
    onSelectedShardIdsChange(next);
  };

  const shardRows = useMemo(() => {
    const source = orderedStyles[0];
    return (source?.slots ?? [])
      .filter((slot) => slot.type === "kStatMod")
      .map((slot, rowIndex) => ({
        rowIndex,
        runes: slot.runeIds.map((id) => runeIndex.get(id)).filter(Boolean) as RuneDefinition[],
      }));
  }, [orderedStyles, runeIndex]);

  const primary = orderedStyles.find((style) => style.id === primaryStyleId);
  const secondary = orderedStyles.find((style) => style.id === secondaryStyleId);
  const treeSelections = selectedIds.filter((id) => (runeIndex.get(id)?.styleId ?? 0) > 0).length;
  const shardSelections = selectedShardIds.filter((id) => typeof id === "number").length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rune-page-dialog w-[min(97vw,88rem)] max-w-[88rem] gap-0 overflow-hidden border border-border bg-popover/98 p-0 shadow-2xl shadow-black/60 sm:max-w-[88rem]">
        <DialogHeader className="border-b border-border px-5 py-4 pr-14">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <DialogTitle className="flex items-center gap-2"><Sparkles className="size-4 text-primary" /> Configure Rune Page</DialogTitle>
              <DialogDescription className="mt-1">Choose one primary path, a different secondary path, and one option in each shard row.</DialogDescription>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              <span>{treeSelections} / 6 perks</span><span className="text-border">/</span><span>{shardSelections} / 3 shards</span>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[78vh]">
          <div className="space-y-5 p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-2">
              <StyleSelector label="Primary Path" styles={orderedStyles} selectedId={primaryStyleId} onSelect={setPrimaryStyle} />
              <StyleSelector label="Secondary Path" styles={orderedStyles} selectedId={secondaryStyleId} disabledId={primaryStyleId} onSelect={setSecondaryStyle} />
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              <RuneTree heading="Primary" style={primary} runes={runeIndex} selectedIds={selectedIds} onSelect={selectPrimaryRune} />
              <RuneTree heading="Secondary" style={secondary} runes={runeIndex} selectedIds={selectedIds} secondary onSelect={selectSecondaryRune} />
            </div>

            <section className="shard-panel">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">Stat Calibration</p>
                  <h3 className="mt-1 text-base font-semibold">Shards</h3>
                </div>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><CircleAlert className="size-3.5" /> One Shard From Each Row</p>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {shardRows.map(({ rowIndex, runes: rowRunes }) => (
                  <div className="shard-row" key={rowIndex}>
                    <span>Row {rowIndex + 1}</span>
                    <div className="rune-options">
                      {rowRunes.map((rune) => (
                        <RuneOption
                          key={rune.id}
                          rune={rune}
                          selected={selectedShardIds[rowIndex] === rune.id}
                          onSelect={() => selectShard(rune, rowIndex)}
                          accent="#f2bc55"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </ScrollArea>

        <div className="flex items-center justify-between gap-3 border-t border-border bg-background/35 px-5 py-3">
          <Button variant="ghost" size="sm" onClick={() => { onSelectedIdsChange([]); onSelectedShardIdsChange([]); }} disabled={!selectedIds.length && !shardSelections}><RotateCcw /> Clear Page</Button>
          <Button size="sm" onClick={() => onOpenChange(false)}>Apply Rune Page</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
