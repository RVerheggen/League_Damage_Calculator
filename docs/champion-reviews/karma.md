# Karma combat review

Patch: 16.16

## P - Gathering Fire

Coverage: unsupported

Description signature: 8ee7b27e88b2fbf260a7dc3389d30d432ca9c5ec99e1ba74e7381b96eca95c56

- championDetail: 454195c90b7998b586189845d3a935c1b2bc9e1ad128923d951b96988598c078
- championBin: 9fcd56feb3c73829e3eb32d7944d60d6ce9e22b78531743cf526aa88e4d11ecd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Gathering Fire Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Karma's damaging abilities will reduce the cooldown of Mantra.

## Q - Inner Flame

Coverage: partial

Description signature: 81aacdb4c88d43ba60ebb579dd43cb1643e7c6d425685a9b049f2978f2d42408

- championDetail: 454195c90b7998b586189845d3a935c1b2bc9e1ad128923d951b96988598c078
- championBin: 9fcd56feb3c73829e3eb32d7944d60d6ce9e22b78531743cf526aa88e4d11ecd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Inner Flame Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Inner Flame Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Karma fires a blast of energy, dealing magic damage to the first target hit and surrounding enemies, and Slowing them by % for seconds.

## W - Focused Resolve

Coverage: partial

Description signature: 0e6e6f6331c9c58253357c47ff6c850f753c76351acecc078f2d8657dc4a415c

- championDetail: 454195c90b7998b586189845d3a935c1b2bc9e1ad128923d951b96988598c078
- championBin: 9fcd56feb3c73829e3eb32d7944d60d6ce9e22b78531743cf526aa88e4d11ecd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation InitialDamage was preserved. Stateful and alternate effects require an explicit module.

### Focused Resolve Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Focused Resolve Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Karma tethers herself to a champion or jungle monster, dealing magic damage and revealing them for s. If the tether remains unbroken, the target takes magic damage again and is Rooted for s.

## E - Inspire

Coverage: unsupported

Description signature: 1047b2baf957e6c05074672bc306b8b6f975034125db6be1db88fbd9183ddc4f

- championDetail: 454195c90b7998b586189845d3a935c1b2bc9e1ad128923d951b96988598c078
- championBin: 9fcd56feb3c73829e3eb32d7944d60d6ce9e22b78531743cf526aa88e4d11ecd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Inspire Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Karma grants an allied champion Shield for s and % Move Speed for s.

## R - Mantra

Coverage: partial

Description signature: a26acd7bd0a7b8451fa56d8cd8dd2099a403cc4c663f8a22e12817b68c7132f7

- championDetail: 454195c90b7998b586189845d3a935c1b2bc9e1ad128923d951b96988598c078
- championBin: 9fcd56feb3c73829e3eb32d7944d60d6ce9e22b78531743cf526aa88e4d11ecd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RQImpactDamage was preserved. Stateful and alternate effects require an explicit module.

### Mantra Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Mantra Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Karma empowers her next Ability used within 8 seconds. Inner Flame: Deals an additional magic damage and leaves behind a circle of flame, Slowing enemies and dealing an additional magic damage.Focused Resolve: Karma will restore missing Health at the beginning and end of the tether, and Root for s longer.Inspire: Karma shields her target for more Shield, and also shields allies near her target, granting them Shield and % Move Speed.
