# Ziggs combat review

Patch: 16.16

## P - Short Fuse

Coverage: unsupported

Description signature: a5f819c8434925d28ecb7b2d63328d9ed3bb8eba458e54d562c5be4f76b6f5fc

- championDetail: 44e112328d3d5d51211ffa35ac6aece0bb9a19765abdb9ebae1960b5f01fe80e
- championBin: 29f4898b3fff2467844406e352aba41ab297398f439438a21a6940069822bf81

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Short Fuse Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Periodically, Ziggs' next basic attack deals bonus magic damage. This cooldown is reduced whenever Ziggs uses an ability.

## Q - Bouncing Bomb

Coverage: partial

Description signature: 751fe9d303569c4c6c3e0a33a2d8ed4d354c60e23257f933de9ae96523410a37

- championDetail: 44e112328d3d5d51211ffa35ac6aece0bb9a19765abdb9ebae1960b5f01fe80e
- championBin: 29f4898b3fff2467844406e352aba41ab297398f439438a21a6940069822bf81

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Bouncing Bomb Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Bouncing Bomb Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ziggs throws a bouncing bomb that deals magic damage.

## W - Satchel Charge

Coverage: partial

Description signature: bf1c32cf0eab04618f7c6b32f9e454a0143c0a99caa239a3ec5279a7870aa5a8

- championDetail: 44e112328d3d5d51211ffa35ac6aece0bb9a19765abdb9ebae1960b5f01fe80e
- championBin: 29f4898b3fff2467844406e352aba41ab297398f439438a21a6940069822bf81

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Satchel Charge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Satchel Charge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Ziggs flings an explosive charge that detonates after seconds, or when this ability is Recast. It deals magic damage to enemies and Knocks them Back. Ziggs is also knocked away, but takes no damage. Satchel Charge will automatically destroy towers below % of their Health.

## E - Hexplosive Minefield

Coverage: partial

Description signature: 2420e4d877a39e79b85ada00f4f1d25672819dfd16c529c927489eb728fd75bc

- championDetail: 44e112328d3d5d51211ffa35ac6aece0bb9a19765abdb9ebae1960b5f01fe80e
- championBin: 29f4898b3fff2467844406e352aba41ab297398f439438a21a6940069822bf81

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Hexplosive Minefield Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Hexplosive Minefield Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Ziggs scatters proximity mines that detonate on enemy contact, dealing magic damage and Slows by % for seconds. Mines last seconds.

## R - Mega Inferno Bomb

Coverage: partial

Description signature: c8b69f7e6969d3ca7030eb411529b5ae12970406e31755034b43e8f47df106ad

- championDetail: 44e112328d3d5d51211ffa35ac6aece0bb9a19765abdb9ebae1960b5f01fe80e
- championBin: 29f4898b3fff2467844406e352aba41ab297398f439438a21a6940069822bf81

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation EmpoweredDamage was preserved. Stateful and alternate effects require an explicit module.

### Mega Inferno Bomb Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Mega Inferno Bomb Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ziggs hurls his ultimate creation, dealing magic damage in the center of the blast radius, or magic damage at the edge.
