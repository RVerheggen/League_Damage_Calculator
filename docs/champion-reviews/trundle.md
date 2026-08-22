# Trundle combat review

Patch: 16.16

## P - King's Tribute

Coverage: out-of-scope

Description signature: 5586cee7df692ae9a91a5d0f1dc389edc3fe33c3847f6be73a6ab87f117d9174

- championDetail: 63be80d3e7e926b7d97fd2a9fd36c77da1bc50afa85244f41a470cba7f155839
- championBin: 645b9144251ebe2caef206c433124b5d1da5bb1d346bb8db7b94c94052c7cd01

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### King's Tribute

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

When an enemy unit dies near Trundle, he heals for a percent of its maximum Health.

## Q - Chomp

Coverage: partial

Description signature: ec173ce797aaacae3ddb2810e65013f9e4ddaaafffef0c2bd050003c5f3b2cf4

- championDetail: 63be80d3e7e926b7d97fd2a9fd36c77da1bc50afa85244f41a470cba7f155839
- championBin: 645b9144251ebe2caef206c433124b5d1da5bb1d346bb8db7b94c94052c7cd01

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Chomp Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Chomp Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Trundle's next Attack deals physical damage and briefly Slows by %, then Trundle gains Attack Damage for seconds and the enemy loses Attack Damage for the same duration.

## W - Frozen Domain

Coverage: out-of-scope

Description signature: 332ae68fb9774764e6678053385135be5489862e69691242eb1382156c49b80a

- championDetail: 63be80d3e7e926b7d97fd2a9fd36c77da1bc50afa85244f41a470cba7f155839
- championBin: 645b9144251ebe2caef206c433124b5d1da5bb1d346bb8db7b94c94052c7cd01

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Frozen Domain

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Trundle freezes an area for seconds. While inside he gains % Move Speed, % Attack Speed, and % increased healing.

## E - Pillar of Ice

Coverage: out-of-scope

Description signature: 5249d6694cded407b40a4f16a94813641538eecb8dc8a85811c263340fac36b9

- championDetail: 63be80d3e7e926b7d97fd2a9fd36c77da1bc50afa85244f41a470cba7f155839
- championBin: 645b9144251ebe2caef206c433124b5d1da5bb1d346bb8db7b94c94052c7cd01

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Pillar of Ice

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Trundle creates an icy pillar for seconds, briefly Knocking Back enemies directly over it and Slowing nearby enemies by %.

## R - Subjugate

Coverage: partial

Description signature: 16387f207c9eb87c6260bc3c63e4f7a11bb8a83fb41c36e115788b04efd2304d

- championDetail: 63be80d3e7e926b7d97fd2a9fd36c77da1bc50afa85244f41a470cba7f155839
- championBin: 645b9144251ebe2caef206c433124b5d1da5bb1d346bb8db7b94c94052c7cd01

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalPercentHPDamage was preserved. Stateful and alternate effects require an explicit module.

### Subjugate Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Subjugate Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Trundle drains the lifeforce of an enemy champion, dealing max Health magic damage and stealing % Armor and Magic Resist over seconds.
