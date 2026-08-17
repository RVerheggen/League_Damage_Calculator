"use client";

import { useState } from "react";
import { Copy, GripVertical, Plus, Trash2, ArrowUp, ArrowDown, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import type { ChampionDefinition, ComboAction } from "@/src/domain/model";
import { getActionControls } from "./action-controls";
import { action as createAction } from "./defaults";

function actionName(action: ComboAction, champion: ChampionDefinition | null) {
  if (action.label) return action.label;
  if (action.kind === "attack") return "Basic Attack";
  if (action.kind === "wait") return "Wait";
  return champion?.spells.find((spell) => spell.key === action.key)?.name ?? action.key;
}

export function ComboBuilder({
  combo,
  champion,
  onChange,
}: {
  combo: ComboAction[];
  champion: ChampionDefinition | null;
  onChange: (combo: ComboAction[]) => void;
}) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const update = (id: string, next: Partial<ComboAction>) => onChange(combo.map((entry) => entry.id === id ? { ...entry, ...next } : entry));
  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= combo.length) return;
    const next = [...combo];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };
  const add = (kind: ComboAction["kind"], key: string) => onChange([...combo, createAction(kind, key, kind === "wait" ? 1 : 0.15)]);
  const duplicate = (entry: ComboAction, index: number) => {
    const next = [...combo];
    next.splice(index + 1, 0, { ...entry, id: crypto.randomUUID(), parameters: { ...entry.parameters } });
    onChange(next);
  };
  const drop = (from: number, to: number) => {
    if (from === to || from < 0) return;
    const next = [...combo];
    const [entry] = next.splice(from, 1);
    next.splice(to, 0, entry);
    onChange(next);
  };

  return (
    <Card className="lab-card overflow-hidden border-border/80 bg-card/86 shadow-2xl shadow-black/20">
      <CardHeader className="border-b border-border/60">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <Badge variant="outline" className="lab-eyebrow mb-3">COMBO TIMELINE</Badge>
            <CardTitle className="text-xl">Stateful Combat Sequence</CardTitle>
            <CardDescription className="mt-1">Drag actions or use the arrow controls. Delays advance buffs and cooldowns.</CardDescription>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Button size="sm" variant="outline" onClick={() => add("attack", "AA")}><Plus /> AA</Button>
            {champion?.spells.slice(0, 4).map((spell) => (
              <Button key={spell.key} size="sm" variant="outline" onClick={() => add("ability", spell.key)}><Plus /> {spell.key}</Button>
            ))}
            {champion?.alias === "Poppy" && <Button size="sm" variant="outline" onClick={() => onChange([...combo, { ...createAction("ability", "Q2", 1), label: "Hammer Shock Detonation" }])}><Plus /> Q2</Button>}
            <Button size="sm" onClick={() => add("wait", "WAIT")}><Clock3 /> Wait</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border/60">
          {combo.length === 0 && <div className="p-10 text-center text-sm text-muted-foreground">Add an attack, ability, or wait action to begin the trace.</div>}
          {combo.map((entry, index) => {
            const controls = new Set(getActionControls(champion, entry));
            return (
            <div
              key={entry.id}
              onDragOver={(event) => {
                if (draggedIndex === null) return;
                event.preventDefault();
                event.dataTransfer.dropEffect = "move";
              }}
              onDrop={(event) => {
                event.preventDefault();
                const from = Number(event.dataTransfer.getData("text/plain"));
                drop(Number.isInteger(from) ? from : draggedIndex ?? -1, index);
                setDraggedIndex(null);
              }}
              className="group grid grid-cols-[auto_auto_minmax(9rem,1fr)_auto] items-center gap-2 bg-background/10 px-2 py-3 transition-colors hover:bg-background/28 sm:grid-cols-[auto_auto_minmax(9rem,1fr)_auto_auto_auto]"
            >
              <button
                type="button"
                draggable
                onDragStart={(event) => {
                  event.dataTransfer.effectAllowed = "move";
                  event.dataTransfer.setData("text/plain", String(index));
                  event.dataTransfer.setDragImage(event.currentTarget, 8, 8);
                  setDraggedIndex(index);
                }}
                onDragEnd={() => setDraggedIndex(null)}
                className="cursor-grab touch-none p-1 text-muted-foreground active:cursor-grabbing"
                aria-label={`Drag Action ${index + 1}`}
                title="Drag To Reorder"
              ><GripVertical className="size-4" /></button>
              <span className={`action-glyph ${entry.kind === "ability" ? "magic" : entry.kind === "wait" ? "utility" : "physical"}`}>{entry.key}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-medium">{actionName(entry, champion)}</p>
                  {!entry.enabled && <Badge variant="secondary">OFF</Badge>}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground">
                  <div className="flex items-center gap-1 font-mono">
                    +<Input aria-label="Delay before action" type="number" min={0} step={0.05} value={entry.delay} onChange={(event) => update(entry.id, { delay: Math.max(0, Number(event.target.value)) })} className="h-6 w-16 px-1 font-mono text-[10px]" />s
                  </div>
                  {entry.kind === "attack" && (
                    <Select value={entry.outcome} onValueChange={(value) => update(entry.id, { outcome: value as ComboAction["outcome"] })}>
                      <SelectTrigger size="sm" className="h-6 w-20 text-[10px]"><SelectValue>{(value) => typeof value === "string" ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : "Normal"}</SelectValue></SelectTrigger>
                      <SelectContent><SelectItem value="normal">Normal</SelectItem><SelectItem value="crit">Crit</SelectItem><SelectItem value="miss">Miss</SelectItem></SelectContent>
                    </Select>
                  )}
                  {controls.has("hitCount") && (
                    <div className="flex items-center gap-1">Hits <Input aria-label="Ability Hit Count" type="number" min={1} max={2} value={entry.parameters.hitCount ?? 1} onChange={(event) => update(entry.id, { parameters: { ...entry.parameters, hitCount: Math.max(1, Math.min(2, Number(event.target.value) || 1)) } })} className="h-6 w-12 px-1 text-[10px]" /></div>
                  )}
                  {controls.has("wallCollision") && (
                    <div className="flex items-center gap-1.5"><Switch size="sm" aria-label="Terrain Collision" checked={entry.parameters.wallCollision ?? false} onCheckedChange={(checked) => update(entry.id, { parameters: { ...entry.parameters, wallCollision: checked } })} /> Wall</div>
                  )}
                  {controls.has("chargePercent") && (
                    <div className="flex items-center gap-1">Charge <Input aria-label="Charge Percentage" type="number" min={0} max={100} value={entry.parameters.chargePercent ?? 0} onChange={(event) => update(entry.id, { parameters: { ...entry.parameters, chargePercent: Number(event.target.value) } })} className="h-6 w-14 px-1 text-[10px]" />%</div>
                  )}
                </div>
              </div>
              <Switch checked={entry.enabled} onCheckedChange={(checked) => update(entry.id, { enabled: checked })} aria-label={`Enable action ${index + 1}`} />
              <div className="hidden items-center sm:flex">
                <Button variant="ghost" size="icon-xs" onClick={() => move(index, -1)} disabled={index === 0} aria-label="Move action up"><ArrowUp /></Button>
                <Button variant="ghost" size="icon-xs" onClick={() => move(index, 1)} disabled={index === combo.length - 1} aria-label="Move action down"><ArrowDown /></Button>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" size="icon-xs" onClick={() => duplicate(entry, index)} aria-label="Duplicate action"><Copy /></Button>
                <Button variant="ghost" size="icon-xs" onClick={() => onChange(combo.filter((candidate) => candidate.id !== entry.id))} aria-label="Remove action"><Trash2 /></Button>
              </div>
            </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
