# Lulu combat review

Patch: 16.16

## P - Pix, Faerie Companion

Coverage: out-of-scope

Description signature: 0eed8131be5af9da4024189b3bc2647d1ea6ba4f439aa3c405f1bd3a46646e27

- championDetail: ce50e61e191129957bf440b1832276dc68b62b1ab0c17bcb8056b21ea3b095a3
- championBin: b0d96fb6c1594d6a127c504e15d23f291e91efce3fa252d75078c9dc39b51f9a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Pix, Faerie Companion

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Pix fires magical bolts of energy whenever the champion he's following attacks another enemy unit. These bolts are homing, but can be intercepted by other units.

## Q - Glitterlance

Coverage: partial

Description signature: c06ff030e15c77ec3eb016b87331c5b54ebd51d115dbfea623dfedef64343129

- championDetail: ce50e61e191129957bf440b1832276dc68b62b1ab0c17bcb8056b21ea3b095a3
- championBin: b0d96fb6c1594d6a127c504e15d23f291e91efce3fa252d75078c9dc39b51f9a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Glitterlance Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Glitterlance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Lulu and Pix each fire a piercing bolt dealing magic damage and Slowing by %, decaying over seconds. Enemies take magic damage from additional bolts.

## W - Whimsy

Coverage: out-of-scope

Description signature: b975253c76b6399255b2089470b4c1ba593dd061f9339a3de765f0fdc0ae01c6

- championDetail: ce50e61e191129957bf440b1832276dc68b62b1ab0c17bcb8056b21ea3b095a3
- championBin: b0d96fb6c1594d6a127c504e15d23f291e91efce3fa252d75078c9dc39b51f9a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Whimsy

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

When used on an ally, Lulu grants Move Speed and % Attack Speed for seconds. When used on an enemy, Lulu Polymorphs them for seconds.

## E - Help, Pix!

Coverage: partial

Description signature: 352cd8a880fb354d800d3a9710961aa0ed4ede62120b3747b9c0e18553054ab4

- championDetail: ce50e61e191129957bf440b1832276dc68b62b1ab0c17bcb8056b21ea3b095a3
- championBin: b0d96fb6c1594d6a127c504e15d23f291e91efce3fa252d75078c9dc39b51f9a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Help, Pix! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Help, Pix! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

When used on an ally, Pix jumps to them and grants Pix, Faerie Companion for seconds. If the ally is a champion, Pix also grants Shield for seconds. When used on an enemy champion, Pix hampers them, dealing magic damage and granting True Sight of them for seconds.

## R - Wild Growth

Coverage: out-of-scope

Description signature: 8a598f102676f3ab2a3577b6cace3813bceab2329a6a6f216c9702d64b92d123

- championDetail: ce50e61e191129957bf440b1832276dc68b62b1ab0c17bcb8056b21ea3b095a3
- championBin: b0d96fb6c1594d6a127c504e15d23f291e91efce3fa252d75078c9dc39b51f9a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Wild Growth

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Lulu enlarges an ally, Knocking Up surrounding enemies for second. The enlarged ally gains max Health and Slows surrounding enemies by % for seconds.
