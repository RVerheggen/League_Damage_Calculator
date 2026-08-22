# Brand combat review

Patch: 16.16

## P - Blaze

Coverage: unsupported

Description signature: c0c46e276636a275a5dc358cd3c73445a3a915433cdf62c64d4fca1450e6fa71

- championDetail: b24252cc81f202a152ed175925681e1229b23966c5899caf5cc053717678c090
- championBin: 35a2c2bc9a4b9c9847a7cd29b9a8ef440e61087f1bd5fd729591f8750de3e542

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Blaze Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Brand's spells light his targets ablaze, dealing damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion or large monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim.

## Q - Sear

Coverage: partial

Description signature: b29f9064740eccb5116c5cae119ed2bd3c00c2d7b49e68cf2e657eae9d869476

- championDetail: b24252cc81f202a152ed175925681e1229b23966c5899caf5cc053717678c090
- championBin: 35a2c2bc9a4b9c9847a7cd29b9a8ef440e61087f1bd5fd729591f8750de3e542

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Sear Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Sear Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Brand launches a fireball that deals magic damage to the first enemy hit. If the target is Ablaze, they will be Stunned for seconds.

## W - Pillar of Flame

Coverage: partial

Description signature: 5f1ff376566437585f8014ff14137d41003f3c09d6707d4a0804a73ff9d16b61

- championDetail: b24252cc81f202a152ed175925681e1229b23966c5899caf5cc053717678c090
- championBin: 35a2c2bc9a4b9c9847a7cd29b9a8ef440e61087f1bd5fd729591f8750de3e542

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Pillar of Flame Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Pillar of Flame Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Brand creates a pillar of pure fire, dealing magic damage. Units that are Ablaze take damage instead.

## E - Conflagration

Coverage: partial

Description signature: 72a72ea0e54100252d977815fd2865faac2300273153d4f06b461bcf67edcf9d

- championDetail: b24252cc81f202a152ed175925681e1229b23966c5899caf5cc053717678c090
- championBin: 35a2c2bc9a4b9c9847a7cd29b9a8ef440e61087f1bd5fd729591f8750de3e542

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation EDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Conflagration Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Conflagration Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Brand conjures a powerful blast at his target, dealing magic damage to surrounding units. If the target is Ablaze, the spread range is doubled.

## R - Pyroclasm

Coverage: partial

Description signature: 49e2634ea19764c9f81a06c30bfdf3151ce407107e33b2d4c3019dedfb03747a

- championDetail: b24252cc81f202a152ed175925681e1229b23966c5899caf5cc053717678c090
- championBin: 35a2c2bc9a4b9c9847a7cd29b9a8ef440e61087f1bd5fd729591f8750de3e542

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Pyroclasm Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Pyroclasm Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Brand unleashes a devastating torrent of fire that can bounce to Brand or another enemy up to 5 times, dealing magic damage to enemies each bounce. Bounces prioritize stacking Blaze to max on champions. If the target is Ablaze, they are briefly Slowed by %.
