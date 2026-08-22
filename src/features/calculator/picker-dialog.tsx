"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import type { ItemDefinition } from "@/src/domain/model";
import { ItemDetailsTooltipContent } from "./item-details-tooltip";

export type PickerEntity = {
  id: number;
  name: string;
  icon: string;
  subtitle?: string;
  badge?: string;
  categories?: string[];
  item?: ItemDefinition;
};

function categoryLabel(category: string) {
  return category.split("-").map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(" ");
}

function PickerOption({
  entity,
  selected,
  onSelect,
}: {
  entity: PickerEntity;
  selected: boolean;
  onSelect: () => void;
}) {
  const displayedBadges = entity.categories?.length ? [...new Set(entity.categories)] : entity.badge ? [entity.badge] : [];
  const option = (
    <CommandItem
      value={`${entity.name} ${entity.subtitle ?? ""} ${(entity.categories ?? []).join(" ")}`}
      data-checked={selected}
      onSelect={onSelect}
      className="min-h-12 gap-3"
    >
      <img src={entity.icon} alt="" className="size-8 border border-border bg-muted object-cover" />
      <span className="min-w-0 flex-1">
        <span className="block truncate font-medium">{entity.name}</span>
        {entity.subtitle && <span className="block truncate text-xs text-muted-foreground">{entity.subtitle}</span>}
      </span>
      {displayedBadges.length > 0 && (
        <span className="ml-auto flex shrink-0 flex-wrap justify-end gap-1">
          {displayedBadges.map((badge) => (
            <Badge key={badge} variant="outline" className="text-[10px] uppercase">{categoryLabel(badge)}</Badge>
          ))}
        </span>
      )}
    </CommandItem>
  );

  if (!entity.item) return option;

  return (
    <Tooltip>
      <TooltipTrigger render={option} />
      <ItemDetailsTooltipContent item={entity.item} side="right" />
    </Tooltip>
  );
}

export function PickerDialog({
  open,
  onOpenChange,
  title,
  description,
  entities,
  selectedIds = [],
  onSelect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  entities: PickerEntity[];
  selectedIds?: number[];
  onSelect: (id: number) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const searchLabel = title === "Choose Champion" ? "Champions" : title === "Choose Item" ? "Items" : "Entries";
  const categories = useMemo(() => [...new Set(entities.flatMap((entity) => entity.categories ?? []))]
    .sort((left, right) => left.localeCompare(right, "en", { sensitivity: "base" })), [entities]);
  const activeCategory = categories.includes(selectedCategory) ? selectedCategory : "all";
  const visibleEntities = activeCategory === "all"
    ? entities
    : entities.filter((entity) => entity.categories?.includes(activeCategory));
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[min(94vw,44rem)] max-w-[44rem] gap-0 overflow-hidden border border-border bg-popover/98 p-0 shadow-2xl shadow-black/50">
        <DialogHeader className="border-b border-border px-5 py-4">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Command className="rounded-none bg-transparent p-2">
          <CommandInput placeholder={`Search ${searchLabel}...`} className="h-9" />
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-1.5 border-b border-border/60 px-2 py-2.5" aria-label="Filter champions by class">
              {["all", ...categories].map((category) => (
                <Button
                  key={category}
                  type="button"
                  size="xs"
                  variant={activeCategory === category ? "default" : "outline"}
                  aria-pressed={activeCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  className="uppercase tracking-[0.08em]"
                >
                  {category === "all" ? "All" : categoryLabel(category)}
                </Button>
              ))}
            </div>
          )}
          <CommandList className="max-h-[55vh]">
            <CommandEmpty>No matching entry found.</CommandEmpty>
            <CommandGroup>
              {visibleEntities.map((entity) => (
                <PickerOption
                  key={entity.id}
                  entity={entity}
                  selected={selectedIds.includes(entity.id)}
                  onSelect={() => onSelect(entity.id)}
                />
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
