# Rumble combat review

Patch: 16.16

## P - Junkyard Titan

Coverage: unsupported

Description signature: 2fdaf35f856cf4e6f4bf426dd61e8aad54b84d16e8ddeccc287ec5ee11c488b4

- championDetail: 39813f84d7e6580425a50ef183b1c41a75b43496c362f99ffbc15adaea1e06ad
- championBin: 4e25e5113984540a8870d933c21ef88ea5632f420fe5d168ceb3d11f1c9ec8d1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Junkyard Titan Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Every spell Rumble casts gives him Heat. When he reaches 50% Heat he reaches Danger Zone, granting all his basic abilities bonus effects. When he reaches 100% Heat, he starts Overheating, gaining bonus Attack Speed and granting his basic attacks bonus damage, but making him unable to cast spells for a few seconds.

## Q - Flamespitter

Coverage: partial

Description signature: 002af98a5f1a848e2bda158814b5269c980443dd06238c645a44048c0bfc4bec

- championDetail: 39813f84d7e6580425a50ef183b1c41a75b43496c362f99ffbc15adaea1e06ad
- championBin: 4e25e5113984540a8870d933c21ef88ea5632f420fe5d168ceb3d11f1c9ec8d1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation FlatDamage was preserved. Stateful and alternate effects require an explicit module.

### Flamespitter Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Flamespitter Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Rumble ignites his flamethrower, dealing plus % max Health magic damage over seconds, reduced to % against minions. Danger Zone: Damage is increased to plus max Health. Percent damage is limited to damage on Monsters.

## W - Scrap Shield

Coverage: unsupported

Description signature: 0658f5a8a5756f1ea2228e9e1805f3e9b76e62f75497d61b03a8dc8e575a9c87

- championDetail: 39813f84d7e6580425a50ef183b1c41a75b43496c362f99ffbc15adaea1e06ad
- championBin: 4e25e5113984540a8870d933c21ef88ea5632f420fe5d168ceb3d11f1c9ec8d1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Scrap Shield Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Rumble tosses up a barrier, gaining Shield for seconds and % Move Speed for second. Danger Zone: The barrier grants Shield and Move Speed instead.

## E - Electro Harpoon

Coverage: partial

Description signature: 041154fe3fb6fc3e553b8e3052e05dc370b4d7f35bf2b6b778aff1a320a6e44f

- championDetail: 39813f84d7e6580425a50ef183b1c41a75b43496c362f99ffbc15adaea1e06ad
- championBin: 4e25e5113984540a8870d933c21ef88ea5632f420fe5d168ceb3d11f1c9ec8d1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Electro Harpoon Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Electro Harpoon Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Rumble launches an electrified harpoon, dealing magic damage, Slowing by % for seconds, and reducing the enemy's Magic Resist by % for seconds. Hitting an enemy who's already Slowed by this Ability increases the Slow to % and reduces the enemy's Magic Resist by % Danger Zone: The harpoon deals magic damage instead and the Slow and reduced Magic Resist are increased by 50%.

## R - The Equalizer

Coverage: partial

Description signature: 3d41ea7e37ee48004cdbbd9dc1e0b0eb41f35402205749d90b4612a03c56a01a

- championDetail: 39813f84d7e6580425a50ef183b1c41a75b43496c362f99ffbc15adaea1e06ad
- championBin: 4e25e5113984540a8870d933c21ef88ea5632f420fe5d168ceb3d11f1c9ec8d1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamagePerSecond was preserved. Stateful and alternate effects require an explicit module.

### The Equalizer Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### The Equalizer Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Rumble launches a line of rockets, creating a burning trail that lasts seconds, Slowing by % and dealing magic damage per second. Rumble can control the direction of the trail by clicking and dragging while casting this Ability.
