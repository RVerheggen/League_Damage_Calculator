"use client";

import { TooltipContent } from "@/components/ui/tooltip";
import type { ItemDefinition } from "@/src/domain/model";

type TooltipSide = "top" | "right" | "bottom" | "left";

const coverageCopy: Record<ItemDefinition["classification"], string> = {
  modeled: "Stats and the combat effect are included in the simulation.",
  partial: "The listed combat effect is only partially modeled. Omitted behavior is reported in results.",
  "out-of-scope": "The effect does not change the supported one-on-one damage result.",
  estimated: "The combat effect uses a documented calculation assumption.",
  "non-damaging": "The item does not create a damage packet.",
  unsupported: "Stats are applied. The active or passive is visible but not simulated yet.",
  "stat-only": "Structured stats are applied. No separate duel effect is required.",
  irrelevant: "This effect does not change the supported duel calculation.",
};

const coverageLabel: Record<ItemDefinition["classification"], string> = {
  modeled: "Modeled",
  partial: "Partially Modeled",
  "out-of-scope": "Out Of Scope",
  estimated: "Partially Modeled",
  "non-damaging": "No Direct Damage",
  unsupported: "Unsupported",
  "stat-only": "Stat-Only",
  irrelevant: "Out Of Scope",
};

const structuredStatLabels: Array<[keyof ItemDefinition["stats"], string, string]> = [
  ["health", "Health", ""],
  ["mana", "Mana", ""],
  ["attackDamage", "Attack Damage", ""],
  ["abilityPower", "Ability Power", ""],
  ["armor", "Armor", ""],
  ["magicResist", "Magic Resist", ""],
  ["attackSpeedPercent", "Attack Speed", "%"],
  ["critChancePercent", "Critical Strike", "%"],
  ["moveSpeedPercent", "Move Speed", "%"],
  ["lethality", "Lethality", ""],
  ["flatMagicPen", "Magic Penetration", ""],
];

function fallbackStats(item: ItemDefinition) {
  return structuredStatLabels
    .filter(([key]) => item.stats[key] !== 0)
    .map(([key, label, suffix]) => `${item.stats[key]}${suffix} ${label}`);
}

export function ItemDetailsTooltipContent({
  item,
  side = "top",
}: {
  item: ItemDefinition;
  side?: TooltipSide;
}) {
  const stats = item.statsText?.length ? item.statsText : fallbackStats(item);
  const effectText = item.effectText === undefined ? item.description : item.effectText.trim();

  return (
    <TooltipContent
      side={side}
      sideOffset={10}
      className="grid w-[22rem] max-w-[calc(100vw-2rem)] items-stretch gap-0 overflow-hidden rounded-xl border border-border/90 bg-popover p-0 text-popover-foreground shadow-2xl shadow-black/55"
      arrowClassName="bg-popover fill-popover"
    >
      <div className="flex min-w-0 items-center gap-3 border-b border-border/70 bg-background/35 p-3">
        <span className="size-12 shrink-0 overflow-hidden border border-primary/30 bg-muted p-0.5">
          <img src={item.icon} alt="" className="size-full object-cover" />
        </span>
        <span className="min-w-0 flex-1 text-left">
          <strong className="block truncate text-sm text-foreground">{item.name}</strong>
          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.13em] text-muted-foreground">
            {item.price.toLocaleString()} Gold
          </span>
        </span>
        <span className="rounded-full border border-primary/25 bg-primary/8 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-primary">
          {coverageLabel[item.classification]}
        </span>
      </div>

      <div className="space-y-3 p-3 text-left">
        <section>
          <h4 className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">Stats</h4>
          {stats.length ? (
            <div className="grid grid-cols-2 gap-1.5">
              {stats.map((stat) => (
                <span key={stat} className="border border-border/70 bg-background/35 px-2 py-1.5 text-[11px] text-foreground">
                  {stat}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">No structured stats in the patch data.</p>
          )}
        </section>

        <section className="border-t border-border/70 pt-3">
          <h4 className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">Passives And Actives</h4>
          <p className="text-xs leading-5 text-muted-foreground [overflow-wrap:anywhere]">
            {effectText || "No active or passive text in the patch data."}
          </p>
        </section>

        <p className="border-t border-border/70 pt-2 text-[10px] leading-4 text-muted-foreground">
          {coverageCopy[item.classification]} {item.coverageNote}
        </p>
      </div>
    </TooltipContent>
  );
}
