# Tristana combat review

Patch: 16.16

## P - Draw a Bead

Coverage: out-of-scope

Description signature: b07f1d8ff76fa384b2dd462cfcc9f929180a5e4916afa9f633e7e3adca21e44e

- championDetail: 324e1959122a84989c2c076187643ebbc905827d940893dcef6e8656d5af56c3
- championBin: c6b079ac0796d840d07e42328b64bd57c84eeb724c90201b74619adad5fb534c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Draw a Bead

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Increases Tristana's Attack Range as she levels.

## Q - Rapid Fire

Coverage: out-of-scope

Description signature: 1502baffd4d20367c91e79bc6e5aa14370e1111442c8c0caa0537b1efe8c4a6f

- championDetail: 324e1959122a84989c2c076187643ebbc905827d940893dcef6e8656d5af56c3
- championBin: c6b079ac0796d840d07e42328b64bd57c84eeb724c90201b74619adad5fb534c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Rapid Fire

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Tristana goes full-auto, gaining % Attack Speed for seconds.

## W - Rocket Jump

Coverage: partial

Description signature: b3bf68a8cdeee1908ee630b7a2d7c7b86cf430b7124530abf55b3443689e7bf0

- championDetail: 324e1959122a84989c2c076187643ebbc905827d940893dcef6e8656d5af56c3
- championBin: c6b079ac0796d840d07e42328b64bd57c84eeb724c90201b74619adad5fb534c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation LandingDamage was preserved. Stateful and alternate effects require an explicit module.

### Rocket Jump Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Rocket Jump Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Tristana launches herself, dealing magic damage and Slowing by % for seconds upon landing. Champion takedowns and max stack Explosive Charge detonations on champions refresh this Ability's Cooldown.

## E - Explosive Charge

Coverage: partial

Description signature: 40119df30a83aca74370f817982a3d21214df1f0bc2674687ea6911d653998a7

- championDetail: 324e1959122a84989c2c076187643ebbc905827d940893dcef6e8656d5af56c3
- championBin: c6b079ac0796d840d07e42328b64bd57c84eeb724c90201b74619adad5fb534c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation PassiveDamage was preserved. Stateful and alternate effects require an explicit module.

### Explosive Charge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Explosive Charge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Passive: Tristana's Attacks that kill enemies deal magic damage to surrounding enemies. Active: Tristana attaches a bomb to an enemy or turret that deals physical damage to surrounding enemies after seconds. The damage is increased by % each time Tristana hits an Attack or Ability (max 4 stacks). At stacks, the bomb explodes immediately (max physical damage).

## R - Buster Shot

Coverage: partial

Description signature: 9b7087f91da975425957a9700775aa34d4c7935eb9d94f53a09075a84cd6a7ca

- championDetail: 324e1959122a84989c2c076187643ebbc905827d940893dcef6e8656d5af56c3
- championBin: c6b079ac0796d840d07e42328b64bd57c84eeb724c90201b74619adad5fb534c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Buster Shot Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Buster Shot Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Tristana fires a massive cannonball, dealing magic damage to the target, Knocking Back and Stunning them and surrounding enemies for seconds.
