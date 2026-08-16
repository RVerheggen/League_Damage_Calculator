"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Check, CircleAlert, RotateCcw, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
      <TooltipContent side="top" className="max-w-64 space-y-1.5">
        <div className="flex items-center justify-between gap-3">
          <strong>{rune.name}</strong>
          <Badge variant="outline" className="text-[9px] uppercase">{rune.classification}</Badge>
        </div>
        <p className="text-xs leading-5 text-muted-foreground">{rune.description}</p>
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
        {slots.map((slot, rowIndex) => {
          const rowRunes = slot.runeIds.map((id) => runes.get(id)).filter(Boolean) as RuneDefinition[];
          const rowLabel = slot.type === "kKeyStone" ? "Keystone" : secondary ? `Choice ${rowIndex + 1}` : `Branch ${rowIndex}`;
          return (
            <div className="rune-row" key={`${style.id}-${slot.index}`}>
              <span className="rune-node" aria-hidden="true" />
              <p>{rowLabel}</p>
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
      <DialogContent className="rune-page-dialog w-[min(96vw,68rem)] max-w-[68rem] gap-0 overflow-hidden border border-border bg-popover/98 p-0 shadow-2xl shadow-black/60">
        <DialogHeader className="border-b border-border px-5 py-4 pr-14">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <DialogTitle className="flex items-center gap-2"><Sparkles className="size-4 text-primary" /> Configure rune page</DialogTitle>
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
              <StyleSelector label="Primary path" styles={orderedStyles} selectedId={primaryStyleId} onSelect={setPrimaryStyle} />
              <StyleSelector label="Secondary path" styles={orderedStyles} selectedId={secondaryStyleId} disabledId={primaryStyleId} onSelect={setSecondaryStyle} />
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              <RuneTree heading="Primary" style={primary} runes={runeIndex} selectedIds={selectedIds} onSelect={selectPrimaryRune} />
              <RuneTree heading="Secondary" style={secondary} runes={runeIndex} selectedIds={selectedIds} secondary onSelect={selectSecondaryRune} />
            </div>

            <section className="shard-panel">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">Stat calibration</p>
                  <h3 className="mt-1 text-base font-semibold">Shards</h3>
                </div>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><CircleAlert className="size-3.5" /> One shard from each row</p>
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
          <Button variant="ghost" size="sm" onClick={() => { onSelectedIdsChange([]); onSelectedShardIdsChange([]); }} disabled={!selectedIds.length && !shardSelections}><RotateCcw /> Clear page</Button>
          <Button size="sm" onClick={() => onOpenChange(false)}>Apply rune page</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
