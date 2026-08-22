# Jinx combat review

Patch: 16.16

## P - Get Excited!

Coverage: unsupported

Description signature: de9590041710c0c4324d3c14c5e9d49f29ef21a20fda8ec22b000854a2c40661

- championDetail: 4252e5a93d2f19321d79f8a9678bb22626d9061de7223a3fe923503d320d47b2
- championBin: e1e23d411b363092392f447a29870719b481acbf6698b0514de0d60ade453600

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Get Excited! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Jinx receives massively increased Move Speed and Attack Speed whenever she helps kill or destroy an enemy champions epic jungle monster, or structure.

## Q - Switcheroo!

Coverage: partial

Description signature: c3bc5d2b48af8e5187d015801637e80144ca18b8e52b6115595bb8ff2f6fd699

- championDetail: 4252e5a93d2f19321d79f8a9678bb22626d9061de7223a3fe923503d320d47b2
- championBin: e1e23d411b363092392f447a29870719b481acbf6698b0514de0d60ade453600

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RocketDamage was preserved. Stateful and alternate effects require an explicit module.

### Switcheroo! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Switcheroo! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Jinx swaps weapons between Fishbones the rocket launcher and Pow-Pow the minigun. While using the rocket launcher, Jinx's Attacks deal physical damage to the target and nearby enemies, gain range, cost Mana, and scale % less with bonus Attack Speed. While using the minigun, Jinx's Attacks grant Attack Speed for seconds, stacking up to times (+% %i:scaleAS% max).

## W - Zap!

Coverage: partial

Description signature: 13f44a50f06725b532b19dd35adcb6baa4d6deea6e1a0d4c7bd7db0c827142df

- championDetail: 4252e5a93d2f19321d79f8a9678bb22626d9061de7223a3fe923503d320d47b2
- championBin: e1e23d411b363092392f447a29870719b481acbf6698b0514de0d60ade453600

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Zap! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Zap! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Jinx fires a shock blast that deals physical damage to the first enemy hit, Slows them by %, and reveals them for seconds.

## E - Flame Chompers!

Coverage: partial

Description signature: 57e97084bc44471086bfaa65d93d3e09740fc79ec20fa61024ecb9c98e74f34b

- championDetail: 4252e5a93d2f19321d79f8a9678bb22626d9061de7223a3fe923503d320d47b2
- championBin: e1e23d411b363092392f447a29870719b481acbf6698b0514de0d60ade453600

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Flame Chompers! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Flame Chompers! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Jinx tosses out 3 chompers that last for seconds. They explode on contact with enemy champions, Rooting them for seconds and dealing magic damage to nearby enemies.

## R - Super Mega Death Rocket!

Coverage: partial

Description signature: 13c627e518615830b1461f9fe71ab38dd52421a41110c7aa44b22d450e3fc434

- championDetail: 4252e5a93d2f19321d79f8a9678bb22626d9061de7223a3fe923503d320d47b2
- championBin: e1e23d411b363092392f447a29870719b481acbf6698b0514de0d60ade453600

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageFloor was preserved. Stateful and alternate effects require an explicit module.

### Super Mega Death Rocket! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Super Mega Death Rocket! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Jinx fires a rocket that explodes on the first enemy champion hit, dealing to + % missing Health physical damage, gaining damage over the first second of travel time. Nearby enemies take % Damage. Missing Health damage cannot exceed against Monsters.
