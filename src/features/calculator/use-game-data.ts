"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ChampionDefinition, ItemDefinition, RuneDefinition, RuneStyleDefinition } from "@/src/domain/model";

export type ChampionSummary = Pick<ChampionDefinition, "id" | "alias" | "name" | "title" | "roles" | "icon">;
export type SnapshotManifest = {
  schemaVersion: number;
  patch: string;
  gameVersion: string;
  generatedAt: string;
  championCount: number;
  itemCount: number;
  runeCount: number;
  spellCoverage: Record<string, number>;
  unsupportedSpells: Array<{ champion: string; key: string; name: string; note: string }>;
  itemCoverage: Record<string, number>;
  runeCoverage: Record<string, number>;
  championSourceCoverage: Record<string, number>;
  reviewedChampionSourceCount: number;
  unreviewedChampionSourceCount: number;
  reviewDisposition: Record<string, number>;
  effectFamilies: Record<string, number>;
  unknownCalculationParts: Record<string, number>;
  unknownPrimaryCalculationParts: Record<string, number>;
  binInspection: { itemEntryCount: number; perkEntryCount: number; localizedStringCount: number };
  validation: { finiteNumbers: boolean; rankArraysPreserved: boolean; legacyEstimatedStates: number; reviewedCoverageReasons: boolean; reviewedChampionSources: number; unreviewedChampionSources: number; unknownRequiredCalculationParts: number };
};

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export function useGameData(initialPatch?: string) {
  const [patch, setPatch] = useState("");
  const [manifest, setManifest] = useState<SnapshotManifest | null>(null);
  const [champions, setChampions] = useState<ChampionSummary[]>([]);
  const [items, setItems] = useState<ItemDefinition[]>([]);
  const [runes, setRunes] = useState<RuneDefinition[]>([]);
  const [runeStyles, setRuneStyles] = useState<RuneStyleDefinition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cache = useRef(new Map<number, ChampionDefinition>());

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const current = await fetch(assetUrl("data/current.json")).then((response) => response.json()) as { patch: string };
        const requestedPatch = initialPatch || current.patch;
        const base = assetUrl(`data/${requestedPatch}`);
        const [manifestData, championData, itemData, runeData, runeStyleData] = await Promise.all([
          fetch(`${base}/manifest.json`).then((response) => {
            if (!response.ok) throw new Error(`Patch ${requestedPatch} is not bundled.`);
            return response.json();
          }),
          fetch(`${base}/champions.json`).then((response) => response.json()),
          fetch(`${base}/items.json`).then((response) => response.json()),
          fetch(`${base}/runes.json`).then((response) => response.json()),
          fetch(`${base}/rune-styles.json`).then((response) => response.json()),
        ]);
        if (manifestData.schemaVersion !== 3) throw new Error(`Patch ${requestedPatch} uses unsupported snapshot schema ${manifestData.schemaVersion}.`);
        if (cancelled) return;
        setPatch(requestedPatch);
        setManifest(manifestData);
        setChampions(championData);
        setItems(itemData);
        setRunes(runeData);
        setRuneStyles(runeStyleData);
        setError(null);
      } catch (reason) {
        if (!cancelled) setError(reason instanceof Error ? reason.message : "The game data snapshot could not be loaded.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => { cancelled = true; };
  }, [initialPatch]);

  const loadChampion = useCallback(async (championId: number) => {
    const cached = cache.current.get(championId);
    if (cached) return cached;
    if (!patch) throw new Error("The patch index is not ready.");
    const response = await fetch(assetUrl(`data/${patch}/champions/${championId}.json`));
    if (!response.ok) throw new Error(`Champion ${championId} is missing from patch ${patch}.`);
    const champion = await response.json() as ChampionDefinition;
    cache.current.set(championId, champion);
    return champion;
  }, [patch]);

  return { patch, manifest, champions, items, runes, runeStyles, loading, error, loadChampion };
}
