"use client";

import { useEffect, useMemo, useState } from "react";
import { Activity, Database, FlaskConical, Layers3, Link2, Settings2, Share2, ShieldCheck } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ChampionDefinition, ScenarioV2, SimulationResult } from "@/src/domain/model";
import { decodeScenario, encodeScenario, hasIncompatibleScenario } from "@/src/domain/scenario";
import { simulate } from "@/src/domain/simulate";
import { resolveStats } from "@/src/domain/stats";
import { CombatantPanel } from "./combatant-panel";
import { ComboBuilder } from "./combo-builder";
import { sanitizeComboForChampion } from "./action-controls";
import { defaultScenario } from "./defaults";
import { ResultsPanel } from "./results-panel";
import { useGameData } from "./use-game-data";

const STORAGE_KEY = "damage-lab:scenario-v2";

function restoredScenario() {
  if (typeof window === "undefined") return null;
  const shared = decodeScenario(window.location.hash);
  if (shared) return shared;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) as ScenarioV2 : null;
    return parsed?.schemaVersion === 2 ? parsed : null;
  } catch {
    return null;
  }
}

export function DamageLab() {
  const [scenario, setScenario] = useState<ScenarioV2>(() => defaultScenario(""));
  const [requestedPatch, setRequestedPatch] = useState<string>();
  const [restorationComplete, setRestorationComplete] = useState(false);
  const data = useGameData(requestedPatch);
  const dataPatch = data.patch;
  const loadChampion = data.loadChampion;
  const [attackerChampion, setAttackerChampion] = useState<ChampionDefinition | null>(null);
  const [defenderChampion, setDefenderChampion] = useState<ChampionDefinition | null>(null);
  const [championError, setChampionError] = useState<string | null>(null);
  const [shared, setShared] = useState(false);
  const [incompatibleScenario, setIncompatibleScenario] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const restored = restoredScenario();
      setIncompatibleScenario(hasIncompatibleScenario(window.location.hash));
      if (restored) {
        setScenario(restored);
        setRequestedPatch(restored.patch || undefined);
      }
      setRestorationComplete(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!dataPatch) return;
    let cancelled = false;
    Promise.all([loadChampion(scenario.attacker.championId), loadChampion(scenario.defender.championId)])
      .then(([attacker, defender]) => {
        if (cancelled) return;
        setAttackerChampion(attacker);
        setDefenderChampion(defender);
        setChampionError(null);
      })
      .catch((reason) => { if (!cancelled) setChampionError(reason instanceof Error ? reason.message : "Champion data could not be loaded."); });
    return () => { cancelled = true; };
  }, [dataPatch, loadChampion, scenario.attacker.championId, scenario.defender.championId]);

  const activeScenario = useMemo(() => {
    const patched = scenario.patch || !dataPatch ? scenario : { ...scenario, patch: dataPatch };
    if (!attackerChampion || attackerChampion.id !== scenario.attacker.championId) return patched;
    return { ...patched, combo: sanitizeComboForChampion(patched.combo, attackerChampion) };
  }, [scenario, dataPatch, attackerChampion]);

  useEffect(() => {
    if (!restorationComplete || !activeScenario.patch) return;
    const timer = window.setTimeout(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(activeScenario)), 180);
    return () => window.clearTimeout(timer);
  }, [activeScenario, restorationComplete]);

  const itemIndex = useMemo(() => new Map(data.items.map((item) => [item.id, item])), [data.items]);
  const runeIndex = useMemo(() => new Map(data.runes.map((rune) => [rune.id, rune])), [data.runes]);
  const championIndex = useMemo(() => {
    const map = new Map<number, ChampionDefinition>();
    if (attackerChampion) map.set(attackerChampion.id, attackerChampion);
    if (defenderChampion) map.set(defenderChampion.id, defenderChampion);
    return map;
  }, [attackerChampion, defenderChampion]);

  const calculation = useMemo<{ result: SimulationResult | null; error: string | null }>(() => {
    if (!attackerChampion || !defenderChampion) return { result: null, error: null };
    try {
      return { result: simulate(activeScenario, championIndex, itemIndex, runeIndex), error: null };
    } catch (reason) {
      return { result: null, error: reason instanceof Error ? reason.message : "The scenario could not be calculated." };
    }
  }, [attackerChampion, defenderChampion, activeScenario, championIndex, itemIndex, runeIndex]);

  const attackerStats = attackerChampion ? resolveStats(scenario.attacker, attackerChampion, itemIndex, runeIndex) : null;
  const defenderStats = defenderChampion ? resolveStats(scenario.defender, defenderChampion, itemIndex, runeIndex) : null;

  const share = async () => {
    const fragment = encodeScenario(activeScenario);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${fragment}`);
    try { await navigator.clipboard.writeText(window.location.href); } catch { /* The URL remains in the address bar. */ }
    setShared(true);
    window.setTimeout(() => setShared(false), 1800);
  };

  const attackerPanel = (
    <CombatantPanel side="attacker" config={scenario.attacker} champion={attackerChampion} champions={data.champions} items={data.items} runes={data.runes} runeStyles={data.runeStyles} stats={attackerStats} onChange={(attacker) => setScenario((current) => ({ ...current, attacker }))} />
  );
  const targetPanel = (
    <CombatantPanel side="target" config={scenario.defender} champion={defenderChampion} champions={data.champions} items={data.items} runes={data.runes} runeStyles={data.runeStyles} stats={defenderStats} onChange={(defender) => setScenario((current) => ({ ...current, defender }))} />
  );
  const comboPanel = <ComboBuilder combo={activeScenario.combo} champion={attackerChampion} onChange={(combo) => setScenario((current) => ({ ...current, combo }))} />;
  const resultsPanel = <ResultsPanel result={calculation.result} error={calculation.error ?? championError ?? data.error} />;

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="lab-grid" />
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1740px] items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="brand-mark"><FlaskConical className="size-5" /></div>
            <div>
              <div className="flex items-center gap-2"><span className="text-lg font-semibold tracking-tight">Damage Lab</span><Badge className="border-primary/30 bg-primary/10 text-primary">PATCH {data.patch || "..."}</Badge></div>
              <p className="hidden text-xs text-muted-foreground sm:block">Live-Patch League Combat Calculation Workspace</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="sm" className="hidden sm:inline-flex" />}><Layers3 /> Coverage</SheetTrigger>
              <SheetContent className="border-border bg-popover sm:max-w-md">
                <SheetHeader><SheetTitle>Patch Coverage</SheetTitle><SheetDescription>Every imported effect carries an explicit coverage classification.</SheetDescription></SheetHeader>
                <div className="space-y-4 overflow-y-auto px-4 pb-6">
                  <Card><CardContent className="grid grid-cols-3 gap-2 pt-5 text-center">
                    <div><strong className="block font-mono text-xl">{data.manifest?.championCount ?? 0}</strong><span className="text-xs text-muted-foreground">Champions</span></div>
                    <div><strong className="block font-mono text-xl">{data.manifest?.itemCount ?? 0}</strong><span className="text-xs text-muted-foreground">Items</span></div>
                    <div><strong className="block font-mono text-xl">{data.manifest?.runeCount ?? 0}</strong><span className="text-xs text-muted-foreground">Perks</span></div>
                  </CardContent></Card>
                  <Alert><Database /><AlertTitle>Immutable Source Snapshot</AlertTitle><AlertDescription>CommunityDragon definitions and Riot static base stats are hashed and stored under patch {data.patch}. Share links keep that patch ID.</AlertDescription></Alert>
                  {data.manifest?.unsupportedSpells.length ? (
                    <div className="rounded-lg border border-[#f2bc55]/30 bg-[#f2bc55]/5 p-3">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#f2bc55]">Visible exceptions: {data.manifest.unsupportedSpells.length}</p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        {data.manifest.unsupportedSpells.map((spell) => <p key={`${spell.champion}-${spell.key}`}><strong className="text-foreground">{spell.champion} {spell.key}</strong> - {spell.name}</p>)}
                      </div>
                    </div>
                  ) : null}
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><Badge className="mr-2 bg-primary/10 text-primary">Modeled</Badge> The engine has an explicit packet or state hook.</p>
                    <p><Badge variant="secondary" className="mr-2">Partially Modeled</Badge> The primary formula is preserved, but at least one combat-relevant behavior still needs an explicit state module.</p>
                    <p><Badge variant="outline" className="mr-2">Stat-Only</Badge> Stats are applied, but no separate combat proc exists.</p>
                    <p><Badge variant="outline" className="mr-2">Out Of Scope</Badge> The reviewed effect does not change the supported one-on-one damage result.</p>
                    <p><Badge variant="outline" className="mr-2 border-[#f2bc55]/40 text-[#f2bc55]">Unsupported</Badge> The effect matters to the duel, but is not simulated yet. Its tooltip remains visible and the result shows a warning.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="rounded-lg border border-border bg-background/25 p-3"><strong className="block font-mono text-lg text-[#f2bc55]">{(data.manifest?.itemCoverage.unsupported ?? 0) + (data.manifest?.itemCoverage.partial ?? 0)}</strong>item effects need more modeling</div>
                    <div className="rounded-lg border border-border bg-background/25 p-3"><strong className="block font-mono text-lg text-[#f2bc55]">{(data.manifest?.runeCoverage.unsupported ?? 0) + (data.manifest?.runeCoverage.partial ?? 0)}</strong>rune effects need more modeling</div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Button variant="outline" size="sm" onClick={share}>{shared ? <Link2 /> : <Share2 />}{shared ? "Copied" : "Share"}</Button>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-[1740px] px-4 py-6 lg:px-8 lg:py-8">
        <section className="mb-6 flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><Activity className="size-4" /> Live Combat Scenario</div>
            <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Build The Hit. Trace The Outcome.</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Configure both champions, sequence each action, and inspect exact damage before and after mitigation.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border/70 bg-card/60 px-4 py-3 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" /><span>Validated Snapshot</span><Separator orientation="vertical" className="h-4" />
            <Select value={scenario.randomnessMode} onValueChange={(randomnessMode) => setScenario((current) => ({ ...current, randomnessMode: randomnessMode as ScenarioV2["randomnessMode"] }))}>
              <SelectTrigger size="sm" className="w-36">
                <SelectValue>{(value) => value === "expected" ? "Expected Value" : "Deterministic"}</SelectValue>
              </SelectTrigger>
              <SelectContent><SelectItem value="deterministic">Deterministic</SelectItem><SelectItem value="expected">Expected Value</SelectItem></SelectContent>
            </Select>
            <div className="flex items-center gap-2"><Switch size="sm" aria-label="Continue After Lethal" checked={scenario.settings.continueAfterLethal} onCheckedChange={(continueAfterLethal) => setScenario((current) => ({ ...current, settings: { ...current.settings, continueAfterLethal } }))} /> Continue After Lethal</div>
          </div>
        </section>

        {data.loading && <Alert className="mb-5"><Database /><AlertTitle>Loading Patch Snapshot</AlertTitle><AlertDescription>Preparing champion, item, and rune indexes.</AlertDescription></Alert>}
        {incompatibleScenario && <Alert className="mb-5"><Link2 /><AlertTitle>Incompatible Shared Scenario</AlertTitle><AlertDescription>This link uses an older scenario schema and was not imported. A new schema 2 scenario has been opened instead.</AlertDescription></Alert>}

        <div className="hidden grid-cols-[minmax(270px,0.78fr)_minmax(540px,1.5fr)_minmax(270px,0.78fr)] items-start gap-5 xl:grid">
          {attackerPanel}
          <div className="space-y-5">{comboPanel}{resultsPanel}</div>
          {targetPanel}
        </div>

        <Tabs defaultValue="attacker" className="xl:hidden">
          <TabsList className="sticky top-[4.2rem] z-30 grid h-10 w-full grid-cols-4 border border-border bg-card/95 p-1 backdrop-blur-xl">
            <TabsTrigger value="attacker">Attacker</TabsTrigger><TabsTrigger value="target">Target</TabsTrigger><TabsTrigger value="combo">Combo</TabsTrigger><TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>
          <TabsContent value="attacker" className="pt-3">{attackerPanel}</TabsContent>
          <TabsContent value="target" className="pt-3">{targetPanel}</TabsContent>
          <TabsContent value="combo" className="pt-3">{comboPanel}</TabsContent>
          <TabsContent value="results" className="pt-3">{resultsPanel}</TabsContent>
        </Tabs>

        <footer className="mt-8 flex flex-col justify-between gap-4 border-t border-border/60 py-6 text-xs leading-5 text-muted-foreground sm:flex-row">
          <div><p className="flex items-center gap-2 text-foreground"><Settings2 className="size-3.5 text-primary" /> Damage Lab is a free, unaffiliated fan project.</p><p>League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. This project is not endorsed by Riot Games.</p></div>
          <div className="sm:text-right"><p>Game definitions and functional icons from <a className="text-primary hover:underline" href="https://communitydragon.org/" target="_blank" rel="noreferrer">CommunityDragon</a>.</p><p>Snapshot generated {data.manifest ? new Date(data.manifest.generatedAt).toLocaleDateString() : "..."}.</p></div>
        </footer>
      </div>
    </main>
  );
}
