# Combat coverage backlog

The machine-readable champion review catalog is the source of truth for champion combat coverage. This file summarizes the generated patch 16.16 report and records the next reusable effect families. An effect must never be labeled Out Of Scope merely because it has not been implemented.

## Classification contract

- Modeled: every reviewed duel-relevant component for the source is executed.
- Partially Modeled: at least one reviewed component is executed, but another duel-relevant component remains incomplete.
- Unsupported: the source can change a supported result but has no executable reviewed component yet.
- Out Of Scope: review confirmed that the component cannot change damage, mitigation, shields, offensive stats, defenses, cooldown state, or another supported one-on-one result.

Estimated and Non-Damaging are not valid generated coverage states. Every incomplete state requires a visible, specific reason. Static item and rune stats may still use their separate stat-only presentation because they do not represent champion review coverage.

## Patch 16.16 review audit

Schema 3 contains review records for all 865 primary champion sources:

- 173 passives
- 692 Q, W, E, and R sources
- 865 reviewed sources
- 0 unreviewed sources
- 24 Modeled sources
- 538 Partially Modeled sources
- 183 Unsupported sources
- 120 Out Of Scope sources

Ability-only coverage is 22 Modeled, 538 Partially Modeled, 61 Unsupported, and 71 Out Of Scope.

Each generated record includes stable source IDs, attacker and defender relevance, template, custom, or out-of-scope disposition, exact retained behavior text, exclusions, a specific coverage reason, patch and source signatures, validation notes, and formula or value bindings where reviewed. A conservative record retains the full remaining behavior as Unsupported when it has not yet been split into executable components. Complete review coverage does not imply complete modeling coverage.

Generated review pages and the current family index are in [champion-reviews/README.md](./champion-reviews/README.md).

## Declarative runtime delivered

The simulator now executes compiled EffectProgram instructions instead of named champion state fields. Generic state is scoped to a participant, source, target, or source-target pair. Programs are ordered by phase, priority, and declaration order.

Implemented instruction families:

- direct-damage
- arm-next-hit
- timed-on-hit
- stacking-proc
- mark-and-consume
- timed-stat-modifier
- conditional-amplifier
- resistance-modifier
- cooldown-modifier
- shield-with-lockout
- scheduled-damage
- multi-hit-action

The runtime supports counters, refresh, consumption, expiry, buffs, debuffs, shields, lockouts, dynamic stats, damage amplification, resistance changes, cooldown changes, delayed packets, refreshable multi-tick schedules, and nested state and damage results. Attacker and defender programs execute at supported event boundaries.

## Migrated reference behavior

- Vayne Tumble, Silver Bolts, Condemn, and Final Hour
- Olaf Ragnarok passive defenses, active attack damage, expiry, and extensions
- Jax Empower
- Darius Crippling Strike
- Garen Decisive Strike
- Blitzcrank Power Fist
- Leona Shield of Daybreak
- Abyssal Mask Unmake
- Conqueror
- Scorch
- Existing reviewed custom handlers for Poppy, Taric, Dr. Mundo, Garen, and Ornn

Custom handlers are keyed by stable source IDs and return generic damage operations. They do not mutate runtime state.

## New representative stacking families

- Akshan Dirty Fighting: ordered basic-attack bullets, typed second-shot control, per-target stacks, ability applications, third-hit magic damage, shield duration, shield lockout, consumption, leftover stacks, and expiry.
- Akshan Avengerang: typed one-hit or two-hit action with ordered passive applications.
- Diana Moonsilver Blade: permanent level-scaled attack speed, after-cast timed attack speed, attack stacks, third-attack cleave, consumption, and expiry.
- Varus Blighted Quiver: magic on-hit packet, per-target Blight marks, Q, E, and R consumption, Q charge amplification, cooldown reduction, consumption, and expiry.
- Varus Piercing Arrow: typed charge input with minimum and maximum CommunityDragon damage bindings.

Varus W remains Partially Modeled because its active missing-health Q empowerment and Chain of Corruption's delayed non-damage stack applications are still unsupported.

## Timed on-hit family delivered

- Kog'Maw Bio-Arcane Barrage: eight-second activation, repeated successful-hit application, complete rank scaling, AP scaling, maximum-health magic damage, misses, expiry, and mitigation.
- Gwen Skip 'n Slash: four-second magic on-hit and attack-speed buffs, first-successful-hit cooldown refund, one-use consumption, misses, expiry, and dynamic later-action stats.
- Fizz Seastone Trident: refreshable six-tick bleed scheduling, four-second armed attack, consumption, five-second follow-up on-hit state, expiry, timing, and mitigation.

Kog'Maw's bonus range and monster cap, Gwen's dash, range, and attack reset, and Fizz's attack reset and kill-only mana and cooldown branch are visibly Out Of Scope for manually timed champion-target damage. Fizz's passive reapplication replaces only unresolved ticks, while already resolved ticks remain in the result history.

## Generated family inventory

The catalog currently assigns reviewed components to these reusable families:

- direct-damage: 796
- conditional-amplifier: 73
- stacking-proc: 73
- shield-with-lockout: 65
- timed-on-hit: 62
- timed-stat-modifier: 62
- scheduled-damage: 58
- cooldown-modifier: 50
- resistance-modifier: 38
- arm-next-hit: 7
- mark-and-consume: 2
- multi-hit-action: 2
- custom handlers: 7

These are component assignments, not counts of fully modeled sources.

## Next family priorities

### P0: champion buffs and on-hit passives

- Multi-attack states: Shen Twilight Assault, Kled Violent Tendencies, Draven Spinning Axe, and Malphite Thunderclap.
- Conditional empowered attacks: Camille Precision Protocol, Renekton Ruthless Predator, Nasus Siphoning Strike, Trundle Chomp, and Wukong Crushing Blow.

### P0: offensive stat stacking

- Lethal Tempo and Hail of Blades
- Legend: Alacrity
- Gathering Storm
- Jack Of All Trades
- Waterwalking
- Triple Tonic

### P0: damage amplifiers

- First Strike
- Cut Down
- Last Stand
- Axiom Arcanist
- Press the Attack exposure
- Deathfire Touch

### P0: resistance reduction and shred

- Champion armor and magic-resistance reductions should be grouped by application, stacking, refresh, expiry, and per-target scope before selecting isolated abilities.

### P1: on-hit items and spell-triggered procs

- Replace conservative item text classification with reviewed stable-ID item catalog entries.
- Add generic on-hit item packet ordering, source lockouts, and trigger-policy tags.
- Add Dark Harvest, Arcane Comet, Summon Aery, Cheap Shot, Sudden Impact, Shield Bash, and Grasp of the Undying.

### P1: delayed and defensive effects

- Chain of Corruption delayed Blight application requires scheduled non-damage operations.
- Bone Plating requires defender-side packet reduction with charge count, duration, and cooldown.
- Conditioning, Overgrowth, Revitalize, Unflinching, Absolute Focus, and Manaflow Band need typed pre-combat or timed state.

## Patch update gates

- Only patch resolution may request CommunityDragon latest. Every stored source URL is pinned to the numbered patch.
- Runtime formulas and values are compiled from named CommunityDragon calculation and data bindings. Required bindings fail when missing, non-numeric, or structurally changed.
- The patch 16.16 roster review signature covers all 865 retained source descriptions. A changed signature requires renewed catalog review.
- Every champion source must have review metadata, source hashes, validation notes, and at least one component.
- Every Modeled template component must compile.
- Duplicate action, program, trigger, and action-parameter IDs fail validation.
- Unknown source references, empty rank arrays, non-finite formula values, malformed interpolation arrays, and incomplete or invalid multi-tick schedules fail validation.
- Raw BIN data and wiki content never ship to browser assets.

## Release checks

- Run TypeScript checking, ESLint, the complete domain suite, the GitHub Pages production build, and static output tests.
- Run git diff --check.
- Scan changed application code and documentation for the em dash character.
- Inspect generated Modeled, Partially Modeled, Unsupported, and Out Of Scope totals after every sync.
- Do not promote a component to Modeled until its application, ordering, stacking, consumption, expiry, mitigation, timing, and relevant edge cases have golden tests.
