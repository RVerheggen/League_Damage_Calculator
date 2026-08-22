# Viktor combat review

Patch: 16.16

## P - Glorious Evolution

Coverage: out-of-scope

Description signature: c20cd982c8b1c8ad9df2e9fe747a6940a9c144eb532eda9c3bc5bc44f7ca149a

- championDetail: 1a7fced9afa19171848f6f6f8438bc5a29b6a01a050e3490adae387b52f5aa02
- championBin: bc50dbc685cdd58a97beb45fd0a1c41ed6a5f969fdc54ad32239bdaf75efb470

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Glorious Evolution

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Viktor gains Hex Fragments whenever he kills an enemy. With every 100 Hex Fragments he obtains, Viktor permanently augments an active ability. After upgrading all of his basic abilities, he can gather 100 Hex Fragments to augment his ultimate ability.

## Q - Siphon Power

Coverage: partial

Description signature: 736a6871cd77405590b9d1fc88f80ae0e04d89e8229b4f951b89085a82ea34b8

- championDetail: 1a7fced9afa19171848f6f6f8438bc5a29b6a01a050e3490adae387b52f5aa02
- championBin: bc50dbc685cdd58a97beb45fd0a1c41ed6a5f969fdc54ad32239bdaf75efb470

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalMissileDamage was preserved. Stateful and alternate effects require an explicit module.

### Siphon Power Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Siphon Power Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Viktor blasts an enemy, dealing magic damage and granting Viktor Shield for seconds. Viktor's next Attack within 4 seconds deals magic damage. Upgraded: Grants Shield and Viktor additionally gains % Move Speed for seconds.

## W - Gravity Field

Coverage: out-of-scope

Description signature: 2ab393e651b66726b4da1a351b8dbc935d5869b8a0349878e1f4a6edd9927cc0

- championDetail: 1a7fced9afa19171848f6f6f8438bc5a29b6a01a050e3490adae387b52f5aa02
- championBin: bc50dbc685cdd58a97beb45fd0a1c41ed6a5f969fdc54ad32239bdaf75efb470

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Gravity Field

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Viktor deploys a gravitational imprisonment device for seconds, Slowing enemies inside it by %. Enemies who remain within its radius for 1.25 seconds are Stunned for seconds. Upgraded Passive: Viktor's Abilities Slow by % for 1 second.

## E - Hextech Ray

Coverage: partial

Description signature: 1e24be1b07cad930126e01334ac91d4867e67ac5791fc43e3720705416f71996

- championDetail: 1a7fced9afa19171848f6f6f8438bc5a29b6a01a050e3490adae387b52f5aa02
- championBin: bc50dbc685cdd58a97beb45fd0a1c41ed6a5f969fdc54ad32239bdaf75efb470

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation LaserDamage was preserved. Stateful and alternate effects require an explicit module.

### Hextech Ray Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Hextech Ray Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Viktor fires a hextech ray in a chosen direction, dealing magic damage to any enemies it hits. Upgraded: An aftershock follows Hextech Ray, dealing magic damage.

## R - Arcane Storm

Coverage: partial

Description signature: d37c1f7500669633a04d45f0e90a53223e175ea03a8496c8b96e45ee899685a8

- championDetail: 1a7fced9afa19171848f6f6f8438bc5a29b6a01a050e3490adae387b52f5aa02
- championBin: bc50dbc685cdd58a97beb45fd0a1c41ed6a5f969fdc54ad32239bdaf75efb470

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation InitialBurstDamage was preserved. Stateful and alternate effects require an explicit module.

### Arcane Storm Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Arcane Storm Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Viktor conjures an Arcane Storm in an area for seconds, which instantly deals magic damage followed by magic damage per second to surrounding enemies. The storm automatically follows champions it has recently damaged. Recast: Viktor can manually move the storm. Upgraded: The storm moves % faster. If a champion that the storm has damaged dies, the storm increases its size and its duration by seconds (up to times).
