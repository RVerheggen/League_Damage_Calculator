# Corki combat review

Patch: 16.16

## P - Hextech Munitions

Coverage: unsupported

Description signature: 4138dbdf7c1f1917d690ed3b8b6089fd506876846e0973e26e59f095872d8b3a

- championDetail: 41ad4bb9963445652553461ef8e63ee960eab32c7443de78a979b0ebf8f07468
- championBin: 2ba9364f7e13b631cf7e785a7aeb677c81cb831277b027e17ad01829fce2c351

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Hextech Munitions Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

A percentage of Corki's basic attack damage is dealt as bonus true damage.

## Q - Phosphorus Bomb

Coverage: partial

Description signature: af98d680a734d46f8b9ff181d5c19af55fcf16c78cc046027130ed9f7ec22913

- championDetail: 41ad4bb9963445652553461ef8e63ee960eab32c7443de78a979b0ebf8f07468
- championBin: 2ba9364f7e13b631cf7e785a7aeb677c81cb831277b027e17ad01829fce2c351

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Phosphorus Bomb Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Phosphorus Bomb Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Corki lobs a bomb, dealing magic damage. The area and champions hit are revealed for seconds.

## W - Valkyrie

Coverage: partial

Description signature: 22801e871bdc706256a7a9908d800c8e49fff8beceac3974165c7a45fe294db0

- championDetail: 41ad4bb9963445652553461ef8e63ee960eab32c7443de78a979b0ebf8f07468
- championBin: 2ba9364f7e13b631cf7e785a7aeb677c81cb831277b027e17ad01829fce2c351

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MaximumDamage was preserved. Stateful and alternate effects require an explicit module.

### Valkyrie Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Valkyrie Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Corki flies over and scorches a path, burning it for seconds. Enemies in the fire take up to magic damage over the duration.

## E - Gatling Gun

Coverage: partial

Description signature: 6f97ba0c89b499dd925f8c6f92f9c3c37485af4b3e9d41884e5e6a0bb357e6da

- championDetail: 41ad4bb9963445652553461ef8e63ee960eab32c7443de78a979b0ebf8f07468
- championBin: 2ba9364f7e13b631cf7e785a7aeb677c81cb831277b027e17ad01829fce2c351

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Gatling Gun Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Gatling Gun Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Corki fires a gatling gun in front of him, dealing physical damage over seconds and shredding up to Armor and Magic Resist.

## R - Missile Barrage

Coverage: partial

Description signature: b011a14c37d2fafecd447d91d6f2478f29e6ceced697a0714d9078afb10f514f

- championDetail: 41ad4bb9963445652553461ef8e63ee960eab32c7443de78a979b0ebf8f07468
- championBin: 2ba9364f7e13b631cf7e785a7aeb677c81cb831277b027e17ad01829fce2c351

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RSmallMissileDamage was preserved. Stateful and alternate effects require an explicit module.

### Missile Barrage Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Missile Barrage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Corki fires a missile that explodes on the first enemy hit, dealing physical damage to surrounding enemies. Every third missile instead deals physical damage. This Ability has up to charges. Basic attacks against champions reduce the time between charges by seconds on hit.
