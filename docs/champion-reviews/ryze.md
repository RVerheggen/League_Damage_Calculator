# Ryze combat review

Patch: 16.16

## P - Arcane Mastery

Coverage: unsupported

Description signature: d9f5c1cf3a0704040ac67ae12add4834382688d22a13feaf06f775a807665ba8

- championDetail: 0066421debe3dffc6d9375c2eebd8f25dd48ddb23621ccb6f56fa24e568fcd59
- championBin: 04f6c91dd4858f818d9b544296f60f47577d106e88d0dca46f388f7e9308f55e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Arcane Mastery Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Ryze's spells deal extra damage based on his Bonus Mana, and he gains a percentage increase to his maximum Mana based on his Ability Power.

## Q - Overload

Coverage: partial

Description signature: e461135739e8d230ddde5e035585bcca706385dc3387a0e966da40e0693c4556

- championDetail: 0066421debe3dffc6d9375c2eebd8f25dd48ddb23621ccb6f56fa24e568fcd59
- championBin: 04f6c91dd4858f818d9b544296f60f47577d106e88d0dca46f388f7e9308f55e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation QDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Overload Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Overload Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Passive: Rune Prison and Spell Flux refresh this Ability's Cooldown and charge a rune for seconds (max runes). Active: Ryze unleashes a blast, dealing magic damage to the first enemy hit. If the target has Flux on it, it is consumed, causing this Ability to deal % increased damage and bounces to nearby enemies with Flux. Ryze also discharges all runes, granting Ryze % Move Speed for seconds if runes were charged.

## W - Rune Prison

Coverage: partial

Description signature: e12baf734cbe5c00ceb4daa74ce3bd0f8e5ce7eb905849d30753151cb12a68fa

- championDetail: 0066421debe3dffc6d9375c2eebd8f25dd48ddb23621ccb6f56fa24e568fcd59
- championBin: 04f6c91dd4858f818d9b544296f60f47577d106e88d0dca46f388f7e9308f55e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation WDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Rune Prison Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Rune Prison Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ryze deals magic damage and Slows by % for seconds. If the target has Flux, it is consumed and this Ability Roots instead of Slowing.

## E - Spell Flux

Coverage: partial

Description signature: 6d24921c2ff2d55b8d19fe72d94691fea3ab4edaebee186548b320574be9a620

- championDetail: 0066421debe3dffc6d9375c2eebd8f25dd48ddb23621ccb6f56fa24e568fcd59
- championBin: 04f6c91dd4858f818d9b544296f60f47577d106e88d0dca46f388f7e9308f55e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation EDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Spell Flux Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Spell Flux Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ryze fires an orb, dealing magic damage and applies Flux for seconds to the target and nearby enemies. Enemies already afflicted with Flux will cause it to spread further.

## R - Realm Warp

Coverage: out-of-scope

Description signature: 3f3bfe03262d5e27c938a9e9b72a1bdbd4b956bdb6420199ae3ed1b2451f48d0

- championDetail: 0066421debe3dffc6d9375c2eebd8f25dd48ddb23621ccb6f56fa24e568fcd59
- championBin: 04f6c91dd4858f818d9b544296f60f47577d106e88d0dca46f388f7e9308f55e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Realm Warp

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Passive: Overload damage bonus against targets with Flux increased to %. Active: Ryze opens a portal to another location. After seconds, all allies near the portal are teleported to that location.
