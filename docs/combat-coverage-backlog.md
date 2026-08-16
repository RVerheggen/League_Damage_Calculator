# Combat coverage backlog

This file is the durable source for combat effects that still need an engine module. Patch snapshots keep the current classification and user-facing tooltips. An effect must never be labeled `irrelevant` merely because it has not been implemented.

## Classification contract

- `modeled`: the complete duel-relevant effect is executed by the simulator.
- `stat-only`: the effect is a static stat and that stat is applied by the engine.
- `irrelevant`: the effect cannot change damage, mitigation, shields, or supported combat state in the current one-on-one scope.
- `unsupported`: the effect can change the result but does not have a complete engine module yet. The app must show a warning.
- Unknown runes default to `unsupported`. A rune can become `irrelevant` only through an explicit reviewed entry.

## Priority work

### P0: stacking offensive stats

- Conqueror: track melee and ranged stack gain, five-second expiry, adaptive force per level, and update AD or AP before each later action.
- Lethal Tempo and Hail of Blades: track attack stacks, attack speed, on-attack damage, duration, and champion range rules.
- Legend: Alacrity, Gathering Storm, Jack Of All Trades, Waterwalking, and Triple Tonic: expose the required pre-combat inputs and apply their conditional stats.

### P0: outgoing and incoming modifiers

- Abyssal Mask - Unmake: add a within-700-range scenario input and apply 12% increased magic damage in the correct modifier phase.
- First Strike, Cut Down, Last Stand, Axiom Arcanist, Press the Attack exposure, and Deathfire Touch: model activation windows, target or attacker health checks, damage classes, and duration.
- Bone Plating: reduce the next three qualifying incoming attacks or spells with its duration and cooldown.

### P0: item classification audit

- Replace the item keyword classifier with a reviewed per-item coverage table generated for each patch.
- Audit every item currently labeled `stat-only` that has non-empty passive or active text. Promote result-changing effects to `unsupported` until a complete module exists.
- Keep Abyssal Mask as a regression check so Unmake cannot silently return to `stat-only`.

### P1: damage procs and defensive triggers

- Dark Harvest, Arcane Comet, Summon Aery, Cheap Shot, Sudden Impact, Shield Bash, Grasp of the Undying, and Aftershock.
- Conditioning, Overgrowth, Revitalize, Unflinching, Absolute Focus, and Manaflow Band.
- Biscuit Delivery and Legend: Bloodline where permanent maximum health changes the target state.

### P1: timing and cooldown state

- Ultimate Hunter, Cosmic Insight, Transcendence, Ability Haste, Attack Speed, and Legend: Haste.
- Electrocute needs its three-second hit window and cooldown verified.
- Scorch needs a scheduled one-second delayed packet rather than an immediate child packet.

## Release checks

- Regenerate the snapshot and inspect every rune classified as `irrelevant` after every patch update.
- Inspect every item with passive or active text that is classified as `stat-only` after every patch update.
- Fail tests if Conqueror, Abyssal Mask, or the representative combat effects in the audit become `irrelevant` or `stat-only`.
- Do not promote an effect to `modeled` until its state transitions and ordering have golden tests.
