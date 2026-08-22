# Lux combat review

Patch: 16.16

## P - Illumination

Coverage: unsupported

Description signature: 2a39d497159dce83991173489eac8471525b3a65bdc01970b06594b61bcb4305

- championDetail: 5c219966f12d3eed1563d1c86aef2db03811caab465c3f4ca4be47d4c29624b4
- championBin: 9f620d2c05abcd401dd5c2776187cb8b80e1b1389b89ed785f0ba0e7ae7e62d5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Illumination Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Lux's damaging spells charge the target with energy for a few seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target.

## Q - Light Binding

Coverage: partial

Description signature: 79e20c792d753b24ecef028d05785aa93f874c985e4a738d7845b416db84f0a9

- championDetail: 5c219966f12d3eed1563d1c86aef2db03811caab465c3f4ca4be47d4c29624b4
- championBin: 9f620d2c05abcd401dd5c2776187cb8b80e1b1389b89ed785f0ba0e7ae7e62d5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTT was preserved. Stateful and alternate effects require an explicit module.

### Light Binding Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Light Binding Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Lux fires a ball of light, Rooting the first two enemies for seconds and dealing magic damage to each.

## W - Prismatic Barrier

Coverage: unsupported

Description signature: f824e2e14b98829487d1d37c6b35aca1a307426169698892a0533d42183776f7

- championDetail: 5c219966f12d3eed1563d1c86aef2db03811caab465c3f4ca4be47d4c29624b4
- championBin: 9f620d2c05abcd401dd5c2776187cb8b80e1b1389b89ed785f0ba0e7ae7e62d5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Prismatic Barrier Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Lux throws her wand, granting Shield for seconds to allies it passes through. Then it returns, granting the same Shield on its return.

## E - Lucent Singularity

Coverage: partial

Description signature: 891d36c203d3e25c2d88c9bc01f7ac040b8b9b971206757c53f2c596fe1ab50e

- championDetail: 5c219966f12d3eed1563d1c86aef2db03811caab465c3f4ca4be47d4c29624b4
- championBin: 9f620d2c05abcd401dd5c2776187cb8b80e1b1389b89ed785f0ba0e7ae7e62d5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTT was preserved. Stateful and alternate effects require an explicit module.

### Lucent Singularity Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Lucent Singularity Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Lux creates a light zone that Slows by % and reveals the area. After seconds or on Recasting this Ability, it detonates, dealing magic damage and Slowing for an additional second.

## R - Final Spark

Coverage: partial

Description signature: 18aed3d39581896d323909ef7183ed4ff81b834cf1a1005a542eec753509f7a2

- championDetail: 5c219966f12d3eed1563d1c86aef2db03811caab465c3f4ca4be47d4c29624b4
- championBin: 9f620d2c05abcd401dd5c2776187cb8b80e1b1389b89ed785f0ba0e7ae7e62d5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Final Spark Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Final Spark Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Lux fires a dazzling ray of light, dealing magic damage to all enemies in a line.
