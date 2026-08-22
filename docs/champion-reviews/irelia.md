# Irelia combat review

Patch: 16.16

## P - Ionian Fervor

Coverage: unsupported

Description signature: d8e25d779f4a4492a9ece74aa1466254b2ebc6ad1fe916b73a0b891e2ff4dbf6

- championDetail: 796c71460c075e19aa247cb071aefbdfa134aba6873ee901ccb154275c9a5f0e
- championBin: 903dbc7f4abb485a7e184c00e2d148fe30d3ba76cfddac9dd57c2c9d1739e74a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Ionian Fervor Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

When Irelia strikes enemies with spells she gains stacking bonus Attack Speed. At maximum stacks she also gains bonus damage on hit.

## Q - Bladesurge

Coverage: partial

Description signature: 991e342c41017ec01501860f4d42fc9207af42588cabdfcebb5e6185d68378cf

- championDetail: 796c71460c075e19aa247cb071aefbdfa134aba6873ee901ccb154275c9a5f0e
- championBin: 903dbc7f4abb485a7e184c00e2d148fe30d3ba76cfddac9dd57c2c9d1739e74a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation ChampionDamage was preserved. Stateful and alternate effects require an explicit module.

### Bladesurge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Bladesurge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Irelia dashes to an enemy, dealing physical damage and restoring Health to herself. If the enemy dies or was Unsteady, the Cooldown is refreshed. Deals damage to minions.

## W - Defiant Dance

Coverage: partial

Description signature: a342481c65ec7a8a1d4e210df9ad6b5e097f8b7fe7504a976cb4d558e0f911f2

- championDetail: 796c71460c075e19aa247cb071aefbdfa134aba6873ee901ccb154275c9a5f0e
- championBin: 903dbc7f4abb485a7e184c00e2d148fe30d3ba76cfddac9dd57c2c9d1739e74a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MinDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Defiant Dance Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Defiant Dance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Begin Charging: Irelia enters a defensive stance for up to seconds, becoming unable to act but reducing physical damage taken by % and magic damage taken by %. Release: Irelia lashes out with her blades, dealing physical damage increased up to based on charge time.

## E - Flawless Duet

Coverage: partial

Description signature: 828e9f3c5e28824db4ceb313cd6fdcec6200a7a3bad719aed064bfee92bf9315

- championDetail: 796c71460c075e19aa247cb071aefbdfa134aba6873ee901ccb154275c9a5f0e
- championBin: 903dbc7f4abb485a7e184c00e2d148fe30d3ba76cfddac9dd57c2c9d1739e74a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Flawless Duet Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Flawless Duet Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Irelia throws a blade into the ground and can Recast for up to seconds. Recast: Irelia throws a second blade, then they fly towards each other Stunning for seconds and dealing magic damage. Champions and large jungle monsters become Unsteady for seconds.

## R - Vanguard's Edge

Coverage: partial

Description signature: a1a937bc72365d4168cfe28cc6ea669879d1fc24ae82ecf8ebf270acf3f5599d

- championDetail: 796c71460c075e19aa247cb071aefbdfa134aba6873ee901ccb154275c9a5f0e
- championBin: 903dbc7f4abb485a7e184c00e2d148fe30d3ba76cfddac9dd57c2c9d1739e74a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MissileDamage was preserved. Stateful and alternate effects require an explicit module.

### Vanguard's Edge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Vanguard's Edge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Irelia launches a barrage of blades, dealing magic damage and making champions and large jungle monsters Unsteady for seconds. The barrage explodes into a cage around the first champion hit for seconds. The cage deals magic damage and Slows by % for seconds.
