# Hecarim combat review

Patch: 16.16

## P - Warpath

Coverage: unsupported

Description signature: bc2583ca9564a2bac05dac5f8e57938002efc0b9501ff2ed1b6b86b33ad27da8

- championDetail: b1d52e1900475cc4976d878444120f822e00fd86cca8c3ce9c75fb0ef7588790
- championBin: 4a803418774ff3f6978aad1d15e7ac06632b452c150bce54908706b4e2c52c5c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Warpath Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Hecarim gains Attack Damage equal to a percentage of his bonus Move Speed.

## Q - Rampage

Coverage: partial

Description signature: 3d8c4ce7486f6e56ce9759bec0625df288c14b82d254302a57f25230372dc6d2

- championDetail: b1d52e1900475cc4976d878444120f822e00fd86cca8c3ce9c75fb0ef7588790
- championBin: 4a803418774ff3f6978aad1d15e7ac06632b452c150bce54908706b4e2c52c5c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Rampage Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Rampage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Hecarim cleaves nearby enemies for physical damage. If this Ability hits, he gains a stack that decreases its Cooldown by seconds and increases its damage by % for seconds. Stacks up to times.

## W - Spirit of Dread

Coverage: partial

Description signature: b6ab8e62bcbbc0e17f5f796fcef7e3682dbfb9f550cfe91b6ee2d1a257f346f3

- championDetail: b1d52e1900475cc4976d878444120f822e00fd86cca8c3ce9c75fb0ef7588790
- championBin: 4a803418774ff3f6978aad1d15e7ac06632b452c150bce54908706b4e2c52c5c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Spirit of Dread Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Spirit of Dread Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Hecarim deals magic damage over seconds to nearby enemies. Hecarim gains Armor and Magic Resist and heals for % of damage nearby enemies take from Hecarim and % of damage taken from his allies.

## E - Devastating Charge

Coverage: partial

Description signature: 1c9b918c32b5acc65444f0aa0b0b6675b989e323355c0599b04e5af839058c55

- championDetail: b1d52e1900475cc4976d878444120f822e00fd86cca8c3ce9c75fb0ef7588790
- championBin: 4a803418774ff3f6978aad1d15e7ac06632b452c150bce54908706b4e2c52c5c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Devastating Charge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Devastating Charge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Hecarim becomes Ghosted and gains % Move Speed increasing to % over seconds. His next Attack Knocks Back and deals between and physical damage. Knock Back distance and damage scales with distance travelled during this Ability.

## R - Onslaught of Shadows

Coverage: partial

Description signature: 852f7df401bd54ded0abc642d609ffef46de6a8266c4331b013bd60b874751ec

- championDetail: b1d52e1900475cc4976d878444120f822e00fd86cca8c3ce9c75fb0ef7588790
- championBin: 4a803418774ff3f6978aad1d15e7ac06632b452c150bce54908706b4e2c52c5c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Onslaught of Shadows Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Onslaught of Shadows Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Hecarim summons spectral riders and charges forward, dealing magic damage. Hecarim unleashes a shockwave at the end of the charge that Fears for between to seconds, increased by charge distance.
