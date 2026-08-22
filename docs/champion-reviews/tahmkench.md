# Tahm Kench combat review

Patch: 16.16

## P - An Acquired Taste

Coverage: unsupported

Description signature: 872a593efe3c5c8d9c1e8f7a78a6b674ffd6cedc85f62c75398c2b0be0dc8235

- championDetail: b4628d2b9e0ff0251c7796bff9add00818694556e26f741291b7fd0a71013a80
- championBin: 9c405bfc3b72871dce142b11c3f7470a33f82d0479673d5f26cbcb607c454c2b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### An Acquired Taste Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Tahm Kench puts the heft of his immense body behind his attacks, gaining extra damage based on his total health. Damaging enemy champions builds stacks of An Acquired Taste. At three stacks, he can use Devour on an enemy champion.

## Q - Tongue Lash

Coverage: partial

Description signature: eec5deeb0ee16081a764301f6490d51fdd4dd994ccc96bf7226757f0a961f881

- championDetail: b4628d2b9e0ff0251c7796bff9add00818694556e26f741291b7fd0a71013a80
- championBin: 9c405bfc3b72871dce142b11c3f7470a33f82d0479673d5f26cbcb607c454c2b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Tongue Lash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Tongue Lash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Deals magic damage to the first enemy hit and Slows them by % for seconds. On champion hit, heals Tahm for +% of his missing Health and applies a stack of An Acquired Taste dealing extra magic damage. If that champion already had 3 stacks of An Acquired Taste, they will also be Stunned for seconds, consuming the stacks. Activate Devour while your tongue is in midair to devour enemy champions who already have 3 stacks of An Acquired Taste from a distance when you hit them.

## W - Abyssal Dive

Coverage: partial

Description signature: 5bac76dc9ce0863002d1d2233141c3c002d6da94407a9eee9f30eebeca11f730

- championDetail: b4628d2b9e0ff0251c7796bff9add00818694556e26f741291b7fd0a71013a80
- championBin: 9c405bfc3b72871dce142b11c3f7470a33f82d0479673d5f26cbcb607c454c2b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Abyssal Dive Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Abyssal Dive Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Dive down and then re-appear at target location, dealing magic damage and Knock Up all enemies in an area for second. Hitting at least one enemy champion refunds % of the Cooldown and Mana cost. Devoured allies can be taken along for the ride (but can always hop out early).

## E - Thick Skin

Coverage: unsupported

Description signature: 160f1b8aa2a4ed61792a7ec87f49e6109cf1ea298e3fff7b20379ce46f98a81e

- championDetail: b4628d2b9e0ff0251c7796bff9add00818694556e26f741291b7fd0a71013a80
- championBin: 9c405bfc3b72871dce142b11c3f7470a33f82d0479673d5f26cbcb607c454c2b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Thick Skin Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Passive: % of damage Tahm Kench takes is stored by his Thick Skin, increased to % if there are at least nearby enemy champions. If Kench has not taken damage within seconds, Thick Skin will rapidly be consumed to heal Tahm for of its value. Active: Convert all your stored Thick Skin into a Shield, lasting seconds.

## R - Devour

Coverage: partial

Description signature: 5f63ce82183495f66893cef9695003fd1d30a7fb782e9a8e8ac44b056eeb9bda

- championDetail: b4628d2b9e0ff0251c7796bff9add00818694556e26f741291b7fd0a71013a80
- championBin: 9c405bfc3b72871dce142b11c3f7470a33f82d0479673d5f26cbcb607c454c2b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Devour Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Devour Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Tahm Kench devours a champion for a few seconds. He can Recast to spit them out. Enemy Champions: Require 3 stacks of An Acquired Taste. Are devoured for up to seconds and take (+ of their Max Health) magic damage. Tahm Kench is Slowed by % and Grounded during this effect. Ally Champions: Are devoured for up to seconds and are granted Shield which decays gradually after being spit out. Allies can also choose to exit early. Tahm Kench is Grounded during this effect, but can cast Abyssal Dive and gains % Move Speed for seconds.
