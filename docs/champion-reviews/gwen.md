# Gwen combat review

Patch: 16.16

## P - A Thousand Cuts

Coverage: unsupported

Description signature: 06a092b79785a7af2c9dc69548f8cb9ced3464e40b26b1a1a8be77ecf83a8a8d

- championDetail: c06a01fe8395855dd44e483ba144389ef37f3e81ff9ec6cefc1ab5ac47533341
- championBin: 2f0b74b99a6e80e67644089a6dd3d44afb39b4943b8677f457c260dee53290d5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### A Thousand Cuts Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Gwen's attacks deal bonus magic damage based on the targets health. She heals for a portion of the damage dealt to champions by this effect.

## Q - Snip Snip!

Coverage: partial

Description signature: 33658a397c9e4a4cee02c2501172f232ec8a0b9d8abd3fe4852f0134bd943899

- championDetail: c06a01fe8395855dd44e483ba144389ef37f3e81ff9ec6cefc1ab5ac47533341
- championBin: 2f0b74b99a6e80e67644089a6dd3d44afb39b4943b8677f457c260dee53290d5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MiniSwipeDamage was preserved. Stateful and alternate effects require an explicit module.

### Snip Snip! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Snip Snip! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Passive: Gwen gains 1 stack when she hits an enemy with an attack (max 4, lasts seconds). Active: Consumes stacks. Gwen snips once for magic damage, snips again for each ammo consumed, and then snips a final time for magic damage. The center of each strikes converts % of the damage into true damage instead and applies A Thousand Cuts to enemies hit. Deals % damage to minions. Minions below % health take % bonus damage instead of reduced damage.

## W - Hallowed Mist

Coverage: unsupported

Description signature: 69e7c630ed21c2ef030f92869d52f5588eb8b90104d0eb302b12d24c68d88ce0

- championDetail: c06a01fe8395855dd44e483ba144389ef37f3e81ff9ec6cefc1ab5ac47533341
- championBin: 2f0b74b99a6e80e67644089a6dd3d44afb39b4943b8677f457c260dee53290d5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Hallowed Mist Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Gwen summons the Hallowed Mist, making her Untargetable to all enemies (except towers) outside the zone for seconds or until she leaves it. While in the Mist, Gwen gains Armor and Magic Resist. Gwen can Recast this Ability once to call the Mist to her. This will automatically Recast the first time Gwen attempts to leave the zone.

## E - Skip 'n Slash

Coverage: partial

Description signature: ae74346634f9440cb03c1cb67976a0d49e5d8329d359a59c77de210626467e6a

- championDetail: c06a01fe8395855dd44e483ba144389ef37f3e81ff9ec6cefc1ab5ac47533341
- championBin: 2f0b74b99a6e80e67644089a6dd3d44afb39b4943b8677f457c260dee53290d5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation OnHitDamage was preserved. Stateful and alternate effects require an explicit module.

### Skip 'n Slash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Skip 'n Slash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Gwen dashes and empowers her Attacks for seconds. Empowered Attacks gain Attack Speed, magic damage %i:OnHit% On-Hit, range, and the first one to hit an enemy refunds % of this Ability's Cooldown.

## R - Needlework

Coverage: partial

Description signature: 081694781294595f2aefcd578f838ccaaedb4e20cce10ba2b1964c205df8ac07

- championDetail: c06a01fe8395855dd44e483ba144389ef37f3e81ff9ec6cefc1ab5ac47533341
- championBin: 2f0b74b99a6e80e67644089a6dd3d44afb39b4943b8677f457c260dee53290d5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Needlework Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Needlework Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

First Cast: Hurl a needle that deals magic damage, Slows by % for seconds, and applies A Thousand Cuts to all enemies hit. Gwen can Recast this ability up to 2 additional times within 6 seconds (s cooldown between casts). Second Cast: Fire three needles to deal magic damage Third Cast: Fire five needles to deal magic damage
