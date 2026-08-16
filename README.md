# Damage Lab

Damage Lab is a live-patch League of Legends damage calculator for champion-versus-champion and champion-versus-dummy sandbox scenarios. It derives stats by level, applies item and rune choices, supports manual stat overrides, and resolves a stateful combo into transparent pre-mitigation and post-mitigation results.

The application is a free fan project. It is not endorsed by Riot Games. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc.

## Included behavior

- Every live Summoner's Rift champion can be selected as attacker or target.
- Champion stats follow the nonlinear level growth curve.
- Builds support six version-matched Summoner's Rift items.
- Rune effects are visibly classified as modeled, stat-only, irrelevant, or unsupported.
- Absolute overrides are applied after champion, item, and rune-derived stats.
- Combo actions support attacks, Q, W, E, R, waits, delays, deterministic crits, selected hit counts, terrain collisions, and charge percentages.
- The engine separates physical, magic, and true damage before and after mitigation.
- Shields, actual health loss, target health after each step, overkill, formulas, triggers, and assumptions are reported separately.
- Scenarios autosave locally and can be shared through versioned URL fragments.

## Data snapshots

Run the data sync with Node.js 22 or later:

```bash
npm run data:sync
```

`scripts/sync-game-data.ts` resolves the numbered live patch from CommunityDragon, downloads champion summaries, champion details, champion BIN records, items, perks, perk styles, and version-matched Riot static indexes. It writes normalized immutable data to `public/data/<patch>/` and records source URLs plus SHA-256 hashes in the patch manifest.

The browser loads the champion index, item index, and rune index once. Full champion definitions are stored in separate files and loaded only for the selected attacker and target. Raw BIN files do not ship to the browser.

Standard spells are resolved from CommunityDragon base values and primary coefficients. Poppy and Taric have explicit override formulas for their relevant multi-part mechanics. Imported spells that need deeper champion-specific interpretation remain visibly marked as estimated. No effect is silently presented as fully modeled.

## Domain engine

The pure modules under `src/domain` provide:

- Formula interpretation for literals, effect values, named values, stat references, level interpolation, breakpoints, sums, products, clamps, modifiers, and conditionals.
- Nonlinear champion stat growth and item aggregation.
- Manual override precedence with total AD and bonus AD consistency.
- Flat and percentage resistance reduction, percentage penetration, flat penetration, lethality, and positive or negative resistance formulas.
- Stateful simulation for delays, shields, health, crit modes, lethal stopping, spellblade, common on-hit items, and common damage runes.
- Versioned scenario serialization for autosave and share links.

## Development

```bash
npm install
npm run data:sync
npm run dev
```

Validation commands:

```bash
npm run test:domain
npm run lint
npm run build
npm test
```

The interface uses React, TypeScript, Tailwind CSS, and customized shadcn/ui components on the Sites Vinext runtime.

## Source credit

Game definitions and functional game icons are sourced from [CommunityDragon](https://communitydragon.org/). Structured base stat and Summoner's Rift item indexes are read from Riot's versioned Data Dragon static files when available. No Riot API key, wiki crawling, or runtime game-data service is required.
