# Xin Zhao combat review

Patch: 16.16

## P - Determination

Coverage: unsupported

Description signature: 49e012b89760ae73217c20eb9e18753b42a106a1f4e536fa8c78317afb8bc197

- championDetail: 3dd9e682c389fa83e1a3b5c08a184a77854c206c21650774a777b9c30ce226d2
- championBin: 1d9bf57415098d1ceeb09cebc2f45bf39b7067fb58c3b9eb049a97772af380f4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Determination Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Every third attack deals bonus damage and heals Xin Zhao.

## Q - Three Talon Strike

Coverage: partial

Description signature: 9b2cfd13b8cdc6d5e652eb8e25331236b8d0cc6600d607c81c0490f1f4c129ae

- championDetail: 3dd9e682c389fa83e1a3b5c08a184a77854c206c21650774a777b9c30ce226d2
- championBin: 1d9bf57415098d1ceeb09cebc2f45bf39b7067fb58c3b9eb049a97772af380f4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BonusDamage was preserved. Stateful and alternate effects require an explicit module.

### Three Talon Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Three Talon Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Xin Zhao's next 3 Attacks deal an additional physical damage and reduces his other Ability's Cooldowns by 1 second. The third Attack also Knocks Up for seconds.

## W - Wind Becomes Lightning

Coverage: partial

Description signature: 3faeccf4d8d0492f01b3438b3bba18afea232ec8c1cbc0718a9a19f11d6463e3

- championDetail: 3dd9e682c389fa83e1a3b5c08a184a77854c206c21650774a777b9c30ce226d2
- championBin: 1d9bf57415098d1ceeb09cebc2f45bf39b7067fb58c3b9eb049a97772af380f4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation SlashDamage was preserved. Stateful and alternate effects require an explicit module.

### Wind Becomes Lightning Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Wind Becomes Lightning Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Xin Zhao slashes, dealing physical damage, then thrusts, dealing . Enemies hit by the thrust are Slowed by % for seconds. Champions and Large Monsters hit by the thrust are marked as Challenged for seconds and revealed unless Stealthed.

## E - Audacious Charge

Coverage: partial

Description signature: d0ca3407aa8ddbd24387ec348b8b72be68ce0388c7e85a3580616f2ee3a3a4d2

- championDetail: 3dd9e682c389fa83e1a3b5c08a184a77854c206c21650774a777b9c30ce226d2
- championBin: 1d9bf57415098d1ceeb09cebc2f45bf39b7067fb58c3b9eb049a97772af380f4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation ChargeDamage was preserved. Stateful and alternate effects require an explicit module.

### Audacious Charge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Audacious Charge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Xin Zhao charges an enemy, dealing magic damage to nearby enemies and Slowing them by % for seconds. Xin Zhao grants himself % (%i:scaleAS%%i:scaleAP%) Attack Speed for seconds. This Ability's range is increased on enemies that are Challenged.

## R - Crescent Guard

Coverage: partial

Description signature: b736aa02acc1d2f30f7e173598eee2e979ecb33f7e3c96517117a4ac83e65b80

- championDetail: 3dd9e682c389fa83e1a3b5c08a184a77854c206c21650774a777b9c30ce226d2
- championBin: 1d9bf57415098d1ceeb09cebc2f45bf39b7067fb58c3b9eb049a97772af380f4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Crescent Guard Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Crescent Guard Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Passive: The last champion Xin Zhao damaged with an Attack or Audacious Charge is Challenged for seconds. Active: Xin Zhao unleashes a sweep around him that deals plus % current Health physical damage and Knocks Back all non-Challenged enemies. Afterwards, Xin Zhao becomes immune to damage from enemies outside the sweep range for seconds.
