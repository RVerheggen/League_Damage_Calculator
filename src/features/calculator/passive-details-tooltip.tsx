"use client";

import { TooltipContent } from "@/components/ui/tooltip";
import type { PassiveDefinition } from "@/src/domain/model";

const labels: Record<PassiveDefinition["classification"], string> = {
  modeled: "Modeled",
  partial: "Partially Modeled",
  unsupported: "Unsupported",
  "out-of-scope": "Out Of Scope",
};

export function PassiveDetailsTooltipContent({ passive }: { passive: PassiveDefinition }) {
  return (
    <TooltipContent side="top" sideOffset={10} className="grid w-[23rem] max-w-[calc(100vw-2rem)] gap-0 overflow-hidden rounded-xl border border-border/90 bg-popover p-0 text-popover-foreground shadow-2xl shadow-black/55">
      <div className="flex items-center gap-3 border-b border-border/70 bg-background/35 p-3">
        <span className="relative size-12 shrink-0 overflow-hidden border border-primary/30 bg-muted p-0.5"><img src={passive.icon} alt="" className="size-full object-cover" /><span className="absolute bottom-0 right-0 grid size-4 place-items-center bg-background/90 font-mono text-[9px] font-bold text-primary">P</span></span>
        <span className="min-w-0 flex-1"><strong className="block truncate text-sm text-foreground">{passive.name}</strong><span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.13em] text-muted-foreground">Champion Passive</span></span>
        <span className="rounded-full border border-primary/25 bg-primary/8 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-primary">{labels[passive.classification]}</span>
      </div>
      <div className="space-y-3 p-3 text-left">
        <p className="text-xs leading-5 text-muted-foreground">{passive.description}</p>
        <section className="border-t border-border/70 pt-3">
          <h4 className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">Effect Coverage</h4>
          <div className="space-y-2">{passive.review.components.map((component) => (
            <div key={component.id} className="border border-border/70 bg-background/35 p-2">
              <div className="flex items-center justify-between gap-2"><strong className="text-[11px] text-foreground">{component.label}</strong><span className="font-mono text-[8px] uppercase tracking-[0.08em] text-primary">{labels[component.coverage]}</span></div>
              <p className="mt-1 text-[10px] leading-4 text-muted-foreground">{component.description}</p>
              <p className="mt-1 text-[10px] leading-4 text-foreground">{component.reason}</p>
              <p className="mt-1 font-mono text-[9px] text-muted-foreground">{component.template ?? component.customHandlerId ?? component.disposition}</p>
            </div>
          ))}</div>
        </section>
        <p className="border-t border-border/70 pt-2 text-[10px] leading-4 text-muted-foreground">{passive.coverageNote}</p>
      </div>
    </TooltipContent>
  );
}
