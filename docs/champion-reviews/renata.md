# Renata Glasc combat review

Patch: 16.16

## P - Leverage

Coverage: unsupported

Description signature: 3caea64183b1afd3feb2bd19a9b65512be48bd55e9ca1332c0e7ad5165baec4a

- championDetail: 432e3413381341e7edb403a7e88d826695ec764571668362e48768199770a548
- championBin: d05e6d6eabc614f8821be6ec4c01e09018f6606c6b94eee1712ca04f00e4211e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Leverage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Renata's Attacks deal bonus damage and mark enemies. Renata's allies can damage marked enemies to deal bonus damage.

## Q - Handshake

Coverage: partial

Description signature: 49fa0a9fb7e99b0b9c8499ab8eeced44c57f20bf6d6a181ba9bd2af7d94288b8

- championDetail: 432e3413381341e7edb403a7e88d826695ec764571668362e48768199770a548
- championBin: d05e6d6eabc614f8821be6ec4c01e09018f6606c6b94eee1712ca04f00e4211e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Handshake Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Handshake Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Renata sends out a missile from her arm, Rooting the first enemy hit for second and dealing magic damage. Recast: Renata Pulls the enemy in a direction, dealing magic damage to enemies they are thrown into and Stunning for seconds if the thrown enemy is a champion.

## W - Bailout

Coverage: out-of-scope

Description signature: 0f417a74b1a49436eebdfd09366da6fb292bc675bbc6b578468f3a96959205ad

- championDetail: 432e3413381341e7edb403a7e88d826695ec764571668362e48768199770a548
- championBin: d05e6d6eabc614f8821be6ec4c01e09018f6606c6b94eee1712ca04f00e4211e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Bailout

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Renata infuses an ally champion, granting Attack Speed and Move Speed towards enemies, increasing to Attack Speed and Move Speed over seconds. Takedowns refresh the duration of the buff. If the ally would die, they instead return to full Health, which then decays over 3 seconds. If they get a Takedown while decaying, they will be set to % max Health and stop decaying. The Champion's death can be delayed by healing or similar effects while in the decaying state, but cannot be prevented unless the Champion gets a Takedown. Champions can only delay their death once.

## E - Loyalty Program

Coverage: partial

Description signature: c697322d8fd287cd003525aa018410cd0ce251d79d546a25ab202a581ef2d7d8

- championDetail: 432e3413381341e7edb403a7e88d826695ec764571668362e48768199770a548
- championBin: d05e6d6eabc614f8821be6ec4c01e09018f6606c6b94eee1712ca04f00e4211e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Loyalty Program Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Loyalty Program Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Renata sends out a pair of chemtech missiles, dealing magic damage and Slowing surrounding enemies and enemies hit by 30% for seconds. Allies hit gain Shield for seconds.

## R - Hostile Takeover

Coverage: out-of-scope

Description signature: 92b707b139d70ffff767bb933cd4b15f783ae8fd24201c40a99c95f16ae704ee

- championDetail: 432e3413381341e7edb403a7e88d826695ec764571668362e48768199770a548
- championBin: d05e6d6eabc614f8821be6ec4c01e09018f6606c6b94eee1712ca04f00e4211e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Hostile Takeover

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Renata sends out a wave of chemicals, Berserking enemies for seconds, causing them to Attack the nearest unit, prioritizing their allies. While Berserk, enemies gain % Attack Speed.
