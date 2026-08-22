"use client";

import { TooltipContent } from "@/components/ui/tooltip";
import type { SpellDefinition } from "@/src/domain/model";

type TooltipSide = "top" | "right" | "bottom" | "left";

const coverageCopy: Record<SpellDefinition["classification"], string> = {
  modeled: "This ability has an explicit simulation module for its supported damage and combat state.",
  partial: "The listed primary effect is available, but at least one combat-relevant behavior still needs a state module.",
  "out-of-scope": "This ability has no effect on the supported one-on-one damage result.",
  unsupported: "This ability matters to combat, but its damage structure is not simulated yet.",
};

const coverageLabel: Record<SpellDefinition["classification"], string> = {
  modeled: "Modeled",
  partial: "Partially Modeled",
  "out-of-scope": "Out Of Scope",
  unsupported: "Unsupported",
};

function formatNumber(value: number) {
  return Number.isInteger(value) ? value.toLocaleString() : Number(value.toFixed(2)).toLocaleString();
}

function rankValue(values: number[], rank: number) {
  if (rank <= 0 || values.length === 0) return null;
  return values[Math.min(values.length - 1, rank - 1)] ?? null;
}

export function AbilityDetailsTooltipContent({
  spell,
  rank,
  side = "top",
}: {
  spell: SpellDefinition;
  rank: number;
  side?: TooltipSide;
}) {
  const maxRank = spell.key === "R" ? 3 : 5;
  const selectedRank = Math.max(0, Math.min(maxRank, rank));
  const baseDamage = rankValue(spell.baseDamage, selectedRank);
  const cooldown = rankValue(spell.cooldown, selectedRank);
  const damageLabel = spell.damageType
    ? `${spell.damageType.charAt(0).toUpperCase()}${spell.damageType.slice(1)} Damage`
    : "Non-Damaging";
  const statLabels = { attackDamage: "AD", abilityPower: "AP", armor: "Armor", magicResist: "Magic Resist" } as const;
  const scopeLabels = { base: "Base", bonus: "Bonus", total: "Total" } as const;
  const structuredScaling = spell.scalings?.map((entry) => {
    const value = rankValue(entry.values, selectedRank);
    return value ? `${formatNumber(value * 100)}% ${scopeLabels[entry.scope]} ${statLabels[entry.stat]}` : null;
  }).filter((entry): entry is string => Boolean(entry));
  const scaling = structuredScaling?.length ? structuredScaling : [
    spell.ratioAD ? `${formatNumber(spell.ratioAD * 100)}% Total AD` : null,
    spell.ratioAP ? `${formatNumber(spell.ratioAP * 100)}% Total AP` : null,
    spell.ratioArmor ? `${formatNumber(spell.ratioArmor * 100)}% Total Armor` : null,
    spell.ratioMagicResist ? `${formatNumber(spell.ratioMagicResist * 100)}% Total Magic Resist` : null,
  ].filter((entry): entry is string => Boolean(entry));

  return (
    <TooltipContent
      side={side}
      sideOffset={10}
      className="grid w-[23rem] max-w-[calc(100vw-2rem)] items-stretch gap-0 overflow-hidden rounded-xl border border-border/90 bg-popover p-0 text-popover-foreground shadow-2xl shadow-black/55"
      arrowClassName="bg-popover fill-popover"
    >
      <div className="flex min-w-0 items-center gap-3 border-b border-border/70 bg-background/35 p-3">
        <span className="relative size-12 shrink-0 overflow-hidden border border-primary/30 bg-muted p-0.5">
          <img src={spell.icon} alt="" className="size-full object-cover" />
          <span className="absolute bottom-0 right-0 grid size-4 place-items-center bg-background/90 font-mono text-[9px] font-bold text-primary">{spell.key}</span>
        </span>
        <span className="min-w-0 flex-1 text-left">
          <strong className="block truncate text-sm text-foreground">{spell.name}</strong>
          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.13em] text-muted-foreground">{damageLabel}</span>
        </span>
        <span className="rounded-full border border-primary/25 bg-primary/8 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-primary">
          {coverageLabel[spell.classification]}
        </span>
      </div>

      <div className="space-y-3 p-3 text-left">
        <p className="text-xs leading-5 text-muted-foreground [overflow-wrap:anywhere]">{spell.description}</p>

        <section className="border-t border-border/70 pt-3">
          <h4 className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">Selected Rank</h4>
          <div className="grid grid-cols-3 gap-1.5">
            <span className="border border-border/70 bg-background/35 px-2 py-1.5 text-[11px] text-foreground">
              <small className="block text-[9px] uppercase text-muted-foreground">Rank</small>
              {selectedRank} / {maxRank}
            </span>
            <span className="border border-border/70 bg-background/35 px-2 py-1.5 text-[11px] text-foreground">
              <small className="block text-[9px] uppercase text-muted-foreground">Base Damage</small>
              {baseDamage === null ? "Unranked" : spell.damageType ? formatNumber(baseDamage) : "None"}
            </span>
            <span className="border border-border/70 bg-background/35 px-2 py-1.5 text-[11px] text-foreground">
              <small className="block text-[9px] uppercase text-muted-foreground">Cooldown</small>
              {cooldown === null ? "Unranked" : `${formatNumber(cooldown)}s`}
            </span>
          </div>
        </section>

        {spell.effects?.length ? (
          <section className="border-t border-border/70 pt-3">
            <h4 className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">Effect Coverage</h4>
            <div className="space-y-2">
              {spell.effects.map((effect) => (
                <div key={effect.id} className="border border-border/70 bg-background/35 p-2">
                  <div className="flex items-center justify-between gap-2">
                    <strong className="text-[11px] text-foreground">{effect.label}</strong>
                    <span className="font-mono text-[8px] uppercase tracking-[0.08em] text-primary">{effect.coverage === "out-of-scope" ? "Out Of Scope" : effect.coverage === "partial" ? "Partially Modeled" : effect.coverage.charAt(0).toUpperCase() + effect.coverage.slice(1)}</span>
                  </div>
                  <p className="mt-1 text-[10px] leading-4 text-muted-foreground">{effect.description}</p>
                  {effect.formulaLabel && <p className="mt-1 font-mono text-[10px] leading-4 text-foreground">{effect.formulaLabel}</p>}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="border-t border-border/70 pt-3">
          <h4 className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">Scaling</h4>
          {scaling.length ? (
            <div className="flex flex-wrap gap-1.5">
              {scaling.map((ratio) => <span key={ratio} className="border border-border/70 bg-background/35 px-2 py-1 text-[11px] text-foreground">{ratio}</span>)}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">No scaling ratio is available in the patch data.</p>
          )}
        </section>

        <p className="border-t border-border/70 pt-2 text-[10px] leading-4 text-muted-foreground">
          {coverageCopy[spell.classification]} {spell.coverageNote}
        </p>
      </div>
    </TooltipContent>
  );
}
