# Damage Lab

Damage Lab is a live-patch League of Legends damage calculator for champion-versus-champion and champion-versus-dummy sandbox scenarios. It derives stats by level, applies item and rune choices, supports manual stat overrides, and resolves a stateful combo into transparent pre-mitigation and post-mitigation results.

The application is a free fan project. It is not endorsed by Riot Games. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc.

## Included behavior

- Every live Summoner's Rift champion can be selected as attacker or target.
- Champion stats follow the nonlinear level growth curve.
- Builds support six version-matched Summoner's Rift items.
- Champion, item, and rune effects are visibly classified with a specific coverage reason.
- Absolute overrides are applied after champion, item, and rune-derived stats.
- Combo actions and their parameters come from generated typed action definitions, including alternate stages, hit counts, terrain collisions, and charge percentages.
- The engine separates physical, magic, and true damage before and after mitigation.
- Shields, actual health loss, target health after each step, overkill, formulas, triggers, and assumptions are reported separately.
- Scenario schema 2 autosaves locally and can be shared through versioned URL fragments. Schema 1 saves and links are rejected with a visible incompatibility message.

## Data snapshots

Run the data sync with Node.js 22 or later:

```bash
npm run data:sync
```

`scripts/sync-game-data.ts` resolves the numbered live patch from CommunityDragon, then pins every champion, item, perk, localized string, and asset request to that numbered patch. It downloads champion BIN records, the item BIN, the perk BIN, and version-matched Riot static indexes. It writes normalized immutable schema-version-3 data to `public/data/<patch>/` and records source URLs, SHA-256 hashes, BIN inspection counts, compiled effect programs, typed actions, review totals, family totals, and validation gates in the patch manifest.

The browser loads the champion index, item index, and rune index once. Full champion definitions are stored in separate files and loaded only for the selected attacker and target. Raw BIN files do not ship to the browser.

Standard spell calculations are preserved as formula trees with complete rank arrays, top-level calculation multipliers, and base, bonus, or total stat scope. The compiler resolves reviewed formula and value bindings from the pinned patch data and fails when a required binding changes structure. Raw BIN records and wiki content never ship to the browser.

The champion catalog contains one review record for each of the 173 passives and 692 Q, W, E, and R sources in patch 16.16. Each record retains relevance, disposition, coverage, a specific reason, source signatures, and formula or value bindings. Generated review pages and the family index live under `docs/champion-reviews/`. Complete review coverage does not mean complete simulation coverage. The generated manifest remains the authority for Modeled, Partially Modeled, Unsupported, and Out Of Scope totals.

Reference programs include Vayne, Olaf, reusable empowered attacks, Akshan Dirty Fighting, Diana Moonsilver Blade, Varus Blighted Quiver, Kog'Maw Bio-Arcane Barrage, Gwen Skip 'n Slash, Fizz Seastone Trident, Master Yi Wuju Style, Cho'Gath Vorpal Spikes, Sett Knuckle Down, Shen Twilight Assault, and Malphite Thunderclap. Abyssal Mask, Conqueror, and Scorch use the same source-agnostic runtime as regression fixtures. Rare handlers for Poppy, Taric, Dr. Mundo, Garen, and Ornn return generic damage operations instead of mutating simulator state. The reviewed [repeated-attack taxonomy](./docs/repeated-attack-family-audit.md) records the remaining candidates.

## Domain engine

The pure modules under `src/domain` provide:

- Formula interpretation for literals, effect values, named values, stats, target stats, state, event values, typed inputs, level interpolation, breakpoints, sums, products, clamps, modifiers, and conditionals.
- Nonlinear champion stat growth and item aggregation.
- Manual override precedence with total AD and bonus AD consistency.
- Flat and percentage resistance reduction, percentage penetration, flat penetration, lethality, and positive or negative resistance formulas.
- A reviewed stable-ID catalog compiled into source-agnostic effect programs.
- Deterministic event phases for scenario start, action start, casts, attack and ability hits, damage processing, action completion, time advancement, expiry, and target death.
- Generic participant, source, target, and source-target state for counters, bounded attack charges, buffs, debuffs, shields, lockouts, stat modifiers, amplifiers, resistance changes, cooldowns, delayed packets, and refreshable multi-tick schedules.
- Nested result nodes for program execution, state transitions, child damage, mitigation, shields, cooldown changes, and expiry.
- Versioned scenario schema 2 serialization using stable action IDs and typed effect inputs.

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

The interface uses React, TypeScript, Tailwind CSS, Vite, and customized shadcn/ui components. It is built as a static application for GitHub Pages.

## GitHub Pages

Pushes to `main` run `.github/workflows/deploy-pages.yml`. The workflow validates the calculator, builds the static Vite output with the repository base path, and publishes `dist/` through GitHub Pages.

For the first deployment, open the repository's **Settings > Pages** page and select **GitHub Actions** as the source. The expected public URL is:

```text
https://rverheggen.github.io/League_Damage_Calculator/
```

## Source credit

Game definitions and functional game icons are sourced from [CommunityDragon](https://communitydragon.org/). Structured base stat and Summoner's Rift item indexes are read from Riot's versioned Data Dragon static files when available. No Riot API key, wiki crawling, or runtime game-data service is required.
