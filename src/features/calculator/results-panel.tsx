"use client";

import { AlertTriangle, CheckCircle2, HeartPulse, Shield, Skull } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { DamageVector, SimulationResult } from "@/src/domain/model";

const rounded = (value: number) => Math.round(value).toLocaleString();

function DamageCells({ damage }: { damage: DamageVector }) {
  return (
    <>
      <TableCell className="font-mono text-[#f28a55]">{rounded(damage.physical)}</TableCell>
      <TableCell className="font-mono text-[#a58aff]">{rounded(damage.magic)}</TableCell>
      <TableCell className="font-mono text-foreground">{rounded(damage.true)}</TableCell>
      <TableCell className="font-mono font-semibold">{rounded(damage.total)}</TableCell>
    </>
  );
}

function BreakdownTable({ title, damage }: { title: string; damage: DamageVector }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border/70 bg-background/25">
      <div className="border-b border-border/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{title}</div>
      <Table>
        <TableHeader><TableRow><TableHead>Physical</TableHead><TableHead>Magic</TableHead><TableHead>True</TableHead><TableHead>Total</TableHead></TableRow></TableHeader>
        <TableBody><TableRow><DamageCells damage={damage} /></TableRow></TableBody>
      </Table>
    </div>
  );
}

export function ResultsPanel({ result, error }: { result: SimulationResult | null; error?: string | null }) {
  if (error) return <Alert variant="destructive"><AlertTriangle /><AlertTitle>Calculation paused</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>;
  if (!result) return <Card className="lab-card"><CardContent className="grid min-h-60 place-items-center text-sm text-muted-foreground">Loading the selected champion definitions...</CardContent></Card>;
  return (
    <Card className="lab-card overflow-hidden border-border/80 bg-card/86 shadow-2xl shadow-black/20">
      <CardHeader className="border-b border-border/60">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <Badge variant="outline" className="lab-eyebrow mb-3">RESULT TRACE</Badge>
            <CardTitle className="text-xl">{rounded(result.totals.healthDamage)} actual health damage</CardTitle>
            <CardDescription className="mt-1">Pre-mitigation, post-mitigation, shields, health, and child triggers remain separate.</CardDescription>
          </div>
          {result.lethalStepId ? <Badge className="bg-destructive/15 text-destructive"><Skull /> Lethal</Badge> : <Badge className="bg-primary/10 text-primary"><CheckCircle2 /> Target survives</Badge>}
        </div>
      </CardHeader>
      <CardContent className="space-y-5 pt-5">
        {result.warnings.length > 0 && (
          <Alert><AlertTriangle /><AlertTitle>Sandbox warnings</AlertTitle><AlertDescription>{result.warnings.join(" ")}</AlertDescription></Alert>
        )}
        <div className="grid gap-3 sm:grid-cols-2">
          <BreakdownTable title="Pre-mitigation damage" damage={result.totals.preMitigation} />
          <BreakdownTable title="Post-mitigation damage" damage={result.totals.postMitigation} />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="result-stat"><HeartPulse /><span>Health damage</span><strong>{rounded(result.totals.healthDamage)}</strong></div>
          <div className="result-stat"><Shield /><span>Shield absorbed</span><strong>{rounded(result.totals.shieldAbsorbed)}</strong></div>
          <div className="result-stat"><span className="damage-chip physical">P</span><span>Physical post</span><strong>{rounded(result.totals.postMitigation.physical)}</strong></div>
          <div className="result-stat"><span className="damage-chip magic">M</span><span>Magic post</span><strong>{rounded(result.totals.postMitigation.magic)}</strong></div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between"><h3 className="text-sm font-medium">Step-by-step trace</h3><span className="font-mono text-[10px] text-muted-foreground">{result.steps.length} RESOLVED STEPS</span></div>
          <Accordion className="overflow-hidden rounded-lg border border-border/70">
            {result.steps.map((step, index) => (
              <AccordionItem key={step.id} value={step.id} className="border-border/70 bg-background/20 px-3">
                <AccordionTrigger className="hover:no-underline">
                  <div className="grid w-full grid-cols-[2rem_minmax(7rem,1fr)_auto_auto] items-center gap-2 pr-3">
                    <span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    <span className="truncate text-left">{step.label}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">{step.timestamp.toFixed(2)}s</span>
                    <strong className="font-mono text-sm">{rounded(step.healthDamage)}</strong>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pb-4">
                  <div className="grid gap-3 sm:grid-cols-2"><BreakdownTable title="Pre-mitigation" damage={step.preMitigation} /><BreakdownTable title="Post-mitigation" damage={step.postMitigation} /></div>
                  <div className="grid gap-2 rounded-lg border border-border/60 bg-card/40 p-3 text-xs sm:grid-cols-3">
                    <span>Health after <strong className="block font-mono text-sm">{rounded(step.targetHealth)}</strong></span>
                    <span>Shield absorbed <strong className="block font-mono text-sm">{rounded(step.shieldAbsorbed)}</strong></span>
                    <span>Overkill <strong className="block font-mono text-sm">{rounded(step.overkill)}</strong></span>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-background/25 p-3"><p className="mb-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">Formula inputs</p><p className="text-xs leading-5">{step.formula}</p></div>
                  {step.triggers.map((trigger, triggerIndex) => (
                    <div key={`${trigger.label}-${triggerIndex}`} className="ml-3 border-l border-primary/40 pl-3 text-xs">
                      <div className="flex justify-between gap-3"><span><Badge variant="outline" className="mr-2 text-[9px] uppercase">{trigger.source}</Badge>{trigger.label}</span><strong className="font-mono">{rounded(trigger.postMitigation.total)}</strong></div>
                      {trigger.note && <p className="mt-1 text-muted-foreground">{trigger.note}</p>}
                    </div>
                  ))}
                  {step.warnings.map((warning) => <p key={warning} className="text-xs text-[#f2bc55]">{warning}</p>)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}
