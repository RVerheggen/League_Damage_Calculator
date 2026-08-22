# Poppy combat review

Patch: 16.16

## P - Iron Ambassador

Coverage: unsupported

Description signature: 2d0c452671e0f6c4de9df24964ca340896cfafc62f0c0a0cf2b824dc96e2631a

- championDetail: d701283f7c65cf1d8059e580c2d772fc9e01ca36fbde6998188dad8092de4ecc
- championBin: 53fc501a59881229ecfe271f625dc25610302446507c6ac4a58c049cafb802dd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Iron Ambassador Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Poppy throws her buckler that bounces off the target. Poppy can pick it up to gain a temporary shield.

## Q - Hammer Shock

Coverage: modeled

Description signature: 3a7c455519ee5d426a65079ba843c8a19ab818cde4d276121c96e1cc79a43661

- championDetail: d701283f7c65cf1d8059e580c2d772fc9e01ca36fbde6998188dad8092de4ecc
- championBin: 53fc501a59881229ecfe271f625dc25610302446507c6ac4a58c049cafb802dd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Poppy Hammer Shock is executed by a reviewed custom handler that returns generic damage operations.

### Poppy Hammer Shock

- Relevance: attacker
- Disposition: custom
- Coverage: modeled
- Template or handler: champion:78:Q
- Reason: A dedicated reviewed handler is retained because the current template vocabulary cannot express the action semantics without distortion.

Two-stage maximum-health damage needs explicit initial and detonation action semantics.

## W - Steadfast Presence

Coverage: partial

Description signature: 35a76b1151e4c7dae5d88506c1c91ad204715c127c799b9973fed416cae2031e

- championDetail: d701283f7c65cf1d8059e580c2d772fc9e01ca36fbde6998188dad8092de4ecc
- championBin: 53fc501a59881229ecfe271f625dc25610302446507c6ac4a58c049cafb802dd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Steadfast Presence Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Steadfast Presence Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Poppy gains Armor and Magic Resist. This bonus is doubled if Poppy is below % Health. Active: Poppy gains % Move Speed and projects a field around her for seconds that stops enemy dashes. Enemies who are stopped by the field are Grounded and Slowed by % for seconds and take magic damage.

## E - Heroic Charge

Coverage: modeled

Description signature: 01df1655c4f64e3409138d0d98b7157cdd42d34d39adc582ad393863d3660d43

- championDetail: d701283f7c65cf1d8059e580c2d772fc9e01ca36fbde6998188dad8092de4ecc
- championBin: 53fc501a59881229ecfe271f625dc25610302446507c6ac4a58c049cafb802dd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Poppy Heroic Charge is executed by a reviewed custom handler that returns generic damage operations.

### Poppy Heroic Charge

- Relevance: attacker
- Disposition: custom
- Coverage: modeled
- Template or handler: champion:78:E
- Reason: A dedicated reviewed handler is retained because the current template vocabulary cannot express the action semantics without distortion.

Terrain collision changes both damage and the supported action outcome.

## R - Keeper's Verdict

Coverage: modeled

Description signature: 8eb9c59d7d102f82f13457aa28831c9e2fd0b4da0c2db59d81b8bd4a711227f3

- championDetail: d701283f7c65cf1d8059e580c2d772fc9e01ca36fbde6998188dad8092de4ecc
- championBin: 53fc501a59881229ecfe271f625dc25610302446507c6ac4a58c049cafb802dd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Poppy Keeper's Verdict is executed by a reviewed custom handler that returns generic damage operations.

### Poppy Keeper's Verdict

- Relevance: attacker
- Disposition: custom
- Coverage: modeled
- Template or handler: champion:78:R
- Reason: A dedicated reviewed handler is retained because the current template vocabulary cannot express the action semantics without distortion.

Charge percentage continuously changes the damage multiplier.
