# Kindred combat review

Patch: 16.16

## P - Mark of the Kindred

Coverage: unsupported

Description signature: 5e16c8c9579ec6c7a8b0e3248f159e5435200a1f2b82355eb3f46585dfc3ba49

- championDetail: 48e2716aad75a60fdfda85bc74fb3a814d19946dfc37cdf83d03160f1df241d4
- championBin: 0a5c34b6bd10611d7b3e425a5aa5e03bc2904321dfa0095beb4c4357d3527986

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Mark of the Kindred Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Kindred can mark targets to Hunt. Successfully completing a Hunt permanently empowers Kindred's basic abilities. Every 4 hunts completed also increases Kindred's basic attack range.

## Q - Dance of Arrows

Coverage: partial

Description signature: 20b06f4e1a35bf7bdab66cac9d29e1b5a111d7a9e6ef30328fd5b19a4d0815c4

- championDetail: 48e2716aad75a60fdfda85bc74fb3a814d19946dfc37cdf83d03160f1df241d4
- championBin: 0a5c34b6bd10611d7b3e425a5aa5e03bc2904321dfa0095beb4c4357d3527986

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Dance of Arrows Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Dance of Arrows Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Kindred vaults, firing an arrow at up to 3 enemies, dealing physical damage and gaining Attack Speed for seconds. While inside of Wolf's Frenzy, this Ability's Cooldown is reduced to seconds.

## W - Wolf's Frenzy

Coverage: partial

Description signature: 7ce8996fa48cfcd76ccafa168b899f33ccbdc4a13812f1765523939c66d95da6

- championDetail: 48e2716aad75a60fdfda85bc74fb3a814d19946dfc37cdf83d03160f1df241d4
- championBin: 0a5c34b6bd10611d7b3e425a5aa5e03bc2904321dfa0095beb4c4357d3527986

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BaseWolfDamage was preserved. Stateful and alternate effects require an explicit module.

### Wolf's Frenzy Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Wolf's Frenzy Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Passive: Kindred gains stacks as they move and attack. At 100 stacks, Kindred's next Attack restores up to Health based on their missing Health. Active: Kindred claims a territory, ordering Wolf to bite at the last enemy Lamb Attacked. Wolf's bites deal plus current Health magic damage.

## E - Mounting Dread

Coverage: partial

Description signature: 1160d2153d5afcdc8fa36d3c36e6ef2e8130f180d1917b1a35a11686f59f3d25

- championDetail: 48e2716aad75a60fdfda85bc74fb3a814d19946dfc37cdf83d03160f1df241d4
- championBin: 0a5c34b6bd10611d7b3e425a5aa5e03bc2904321dfa0095beb4c4357d3527986

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BaseBiteDamage was preserved. Stateful and alternate effects require an explicit module.

### Mounting Dread Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Mounting Dread Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Kindred weakens an enemy, Slowing them by % for second. Kindred's third Attack against the target within seconds of each other directs Wolf to pounce on the enemy, dealing an additional plus missing Health physical damage.

## R - Lamb's Respite

Coverage: out-of-scope

Description signature: 01330435a0059b7e973daf651ed74602dec6f8b4af15d14ca43e01678ee88f72

- championDetail: 48e2716aad75a60fdfda85bc74fb3a814d19946dfc37cdf83d03160f1df241d4
- championBin: 0a5c34b6bd10611d7b3e425a5aa5e03bc2904321dfa0095beb4c4357d3527986

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Lamb's Respite

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Kindred blesses the ground for seconds, allowing no unit, ally, enemy, or neutral to die while inside. Upon reaching 10% Health, units can't be damaged or healed while still inside the zone. When the blessing ends, all units inside heal for Health.
