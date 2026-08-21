# Combat coverage backlog

This file is the durable source for combat effects that still need an engine module. Patch snapshots keep the current classification, a reviewed reason, and user-facing tooltips. An effect must never be labeled `out-of-scope` merely because it has not been implemented.

## Classification contract

- `modeled`: the complete duel-relevant effect is executed by the simulator.
- `partial`: a primary formula or effect is executed, but another combat-relevant part still needs a state module.
- `stat-only`: the effect is a static stat and that stat is applied by the engine.
- `out-of-scope`: a reviewed effect cannot change damage, mitigation, shields, or supported combat state in the current one-on-one scope.
- `unsupported`: the effect can change the result but does not have a complete engine module yet. The app must show a warning.
- Unknown runes default to `unsupported`. A rune can become `out-of-scope` only through an explicit reviewed entry.

## Completed patch 16.16 reference modules

- Vayne Tumble: timed next-attack state, rank-specific total AD, AP scaling, consumption, and expiry.
- Vayne Silver Bolts: per-target stacks, third-hit true damage, repeated procs, minimum damage, maximum-health scaling, Condemn stacks, and expiry.
- Vayne Condemn: bonus AD scaling, terrain collision input and packet, and Silver Bolts interaction.
- Vayne Final Hour: timed bonus AD, Tumble cooldown modifier, and visible utility exclusions.
- Olaf Ragnarok: passive defenses, dynamic active AD, timed expiry, and Attack or Reckless Swing extensions.
- Abyssal Mask Unmake: contextual range input and magic-only incoming damage amplification.
- Conqueror: melee and ranged stack rules, adaptive force, cap, later-action stat recalculation, and expiry. Healing remains visibly outside healing-analysis scope.

## Priority work

### P0: remaining stacking offensive stats

- Lethal Tempo and Hail of Blades: track attack stacks, attack speed, on-attack damage, duration, and champion range rules.
- Legend: Alacrity, Gathering Storm, Jack Of All Trades, Waterwalking, and Triple Tonic: expose the required pre-combat inputs and apply their conditional stats.

### P0: remaining outgoing and incoming modifiers

- First Strike, Cut Down, Last Stand, Axiom Arcanist, Press the Attack exposure, and Deathfire Touch: model activation windows, target or attacker health checks, damage classes, and duration.
- Bone Plating: reduce the next three qualifying incoming attacks or spells with its duration and cooldown.

### P0: item classification audit

- Replace the conservative item description classifier with a manually reviewed per-item coverage table generated for each patch.
- Review every item currently labeled `stat-only` that has non-empty passive or active text. Promote result-changing effects to `unsupported` until a complete module exists.
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

- Regenerate the snapshot and inspect every rune classified as `out-of-scope` after every patch update.
- Inspect every item with passive or active text that is classified as `stat-only` after every patch update.
- Fail tests if Conqueror, Abyssal Mask, or the representative combat effects in the audit become `out-of-scope` or `stat-only`.
- Do not promote an effect to `modeled` until its state transitions and ordering have golden tests.
