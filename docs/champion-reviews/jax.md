# Jax combat review

Patch: 16.16

## P - Relentless Assault

Coverage: unsupported

Description signature: 8096ca40d2973ae2146f15473fd43d5c2bef3efe07fe14b0f4cec6b3b9bf89da

- championDetail: a46192a8bbc7b5162cd59898d6c4712e6b04518a2fd71e171c95d100e9c3d8b3
- championBin: bef65b499e661bae4769670d39bc565b0108aa0230c1fcdab81f67dae014e477

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Relentless Assault Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Jax's consecutive basic attacks continuously increase his Attack Speed.

## Q - Leap Strike

Coverage: partial

Description signature: 8b6d1bd4089a46791943c6c337842b060ca273c3d87dd99f8f73505b41f180fe

- championDetail: a46192a8bbc7b5162cd59898d6c4712e6b04518a2fd71e171c95d100e9c3d8b3
- championBin: bef65b499e661bae4769670d39bc565b0108aa0230c1fcdab81f67dae014e477

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Leap Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Leap Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Jax leaps to a friendly or enemy unit or ward, dealing physical damage if it is an enemy.

## W - Empower

Coverage: modeled

Description signature: 20f2bb77c7b700a39394b066678c408664bfb97fadfdbf8d973c53ee66728382

- championDetail: a46192a8bbc7b5162cd59898d6c4712e6b04518a2fd71e171c95d100e9c3d8b3
- championBin: bef65b499e661bae4769670d39bc565b0108aa0230c1fcdab81f67dae014e477

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Empower is compiled as a timed single-use empowered attack.

### Empower

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: arm-next-hit
- Reason: Compiled by the reusable arm-next-hit template.

Arms the next qualifying hit for 10 seconds.

## E - Counter Strike

Coverage: partial

Description signature: 2a4ba93a3872182f966e2bba39743eab1758b80030fb3ccf7a307d4c7ec1da92

- championDetail: a46192a8bbc7b5162cd59898d6c4712e6b04518a2fd71e171c95d100e9c3d8b3
- championBin: bef65b499e661bae4769670d39bc565b0108aa0230c1fcdab81f67dae014e477

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Counter Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Counter Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Jax enters a defensive stance for up to seconds, dodging incoming Attacks and taking % less damage from area of effect Abilities. After seconds or Recasting, Jax deals + % max Health magic damage and Stuns nearby enemies for second. The damage is increased by % per Attack dodged, up to a maximum of + % max Health.

## R - Grandmaster-at-Arms

Coverage: partial

Description signature: 356c7cdfaf721225c1c03a5c7bc5d1b1197e51e477c903ee532163c60d8e634f

- championDetail: a46192a8bbc7b5162cd59898d6c4712e6b04518a2fd71e171c95d100e9c3d8b3
- championBin: bef65b499e661bae4769670d39bc565b0108aa0230c1fcdab81f67dae014e477

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. Attacks advance a third-hit cycle whose threshold changes during the active state. The source is assigned to the attack-cycle family, but a complete reviewed binding has not been compiled yet.

### Grandmaster-at-Arms Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Grandmaster-at-Arms Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: attack-cycle
- Reason: Attacks advance a third-hit cycle whose threshold changes during the active state. The source is assigned to the attack-cycle family, but a complete reviewed binding has not been compiled yet.

Passive: Every third Attack within seconds deals an additional magic damage. Active: Jax slams his lantern down, dealing magic damage to nearby enemies. If he hits a champion he gains Armor and Magic Resist plus Armor and Magic Resist per additional champion hit for seconds. During this time every second Attack deals additional magic damage instead of every third.
