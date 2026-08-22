# Anivia combat review

Patch: 16.16

## P - Rebirth

Coverage: unsupported

Description signature: 0a37d5fa6cc65d5cacdf7c5f91d03f57e71bd052601e0f49506ba9dd5f60a123

- championDetail: 3d6fae4097562ea00d0b635e7f7d400dc50f49e018a143887a955a57f39428be
- championBin: bd0585187443203525457dbc5807335c09de1db6b1e0ff907ff3610cce3e8990

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Rebirth Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Upon taking fatal damage, Anivia reverts to an egg and is reborn with full health.

## Q - Flash Frost

Coverage: partial

Description signature: f8114b8428935717238c517b08e29c219359ca369c46cc216e5737854e9730e8

- championDetail: 3d6fae4097562ea00d0b635e7f7d400dc50f49e018a143887a955a57f39428be
- championBin: bd0585187443203525457dbc5807335c09de1db6b1e0ff907ff3610cce3e8990

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Flash Frost Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Flash Frost Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Anivia fires a massive chunk of ice, dealing magic damage and Chilling enemies for seconds, Slowing them by %. At the end of its range, the ice detonates, Stunning enemies for seconds and dealing magic damage. Anivia can Recast this ability while the ice flies to detonate it early.

## W - Crystallize

Coverage: out-of-scope

Description signature: 4110e05974f22744fca795f1560b494cafb7fcb8c5e8c5b33f8ec1eff373e429

- championDetail: 3d6fae4097562ea00d0b635e7f7d400dc50f49e018a143887a955a57f39428be
- championBin: bd0585187443203525457dbc5807335c09de1db6b1e0ff907ff3610cce3e8990

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Crystallize

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Anivia summons a wall of ice units wide. The wall lasts for seconds before it melts.

## E - Frostbite

Coverage: partial

Description signature: a0d80d9560958c1639162d83a006ccac834bca103cb70e60f12616cfcbb7192d

- championDetail: 3d6fae4097562ea00d0b635e7f7d400dc50f49e018a143887a955a57f39428be
- championBin: bd0585187443203525457dbc5807335c09de1db6b1e0ff907ff3610cce3e8990

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Frostbite Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Frostbite Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Anivia blasts an enemy with a freezing wind, dealing magic damage. Against Chilled enemies, Anivia deals magic damage instead.

## R - Glacial Storm

Coverage: partial

Description signature: af4662a8bc9606b9834c10f9f78bf4a1d1c941dd8142c3d5007c05ef907eef2c

- championDetail: 3d6fae4097562ea00d0b635e7f7d400dc50f49e018a143887a955a57f39428be
- championBin: bd0585187443203525457dbc5807335c09de1db6b1e0ff907ff3610cce3e8990

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Glacial Storm Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Glacial Storm Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Toggle: Anivia calls forth a driving rain of ice and hail that Slows enemies by % and deals magic damage per second. The storm increases in size over seconds. When the storm is fully formed, it Chills, Slows by %, and does magic damage per second instead.
