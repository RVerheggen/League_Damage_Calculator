# Zilean combat review

Patch: 16.16

## P - Time In A Bottle

Coverage: out-of-scope

Description signature: b205d33a68db765a958a82c122df92239affae3ce8086fabfbb888e7437ae1e1

- championDetail: 1e9bb82bf3df64ae5f91ab2412db8c18e030f1a2414b4424c12b331cd2dd4e71
- championBin: 69c424f8af378e628a2139b6aff5578b5e87b6dc9cafc149ed81ea8951e3d7e1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Time In A Bottle

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Zilean stores time as Experience and can grant it to his allies. When he has enough Experience to finish an ally's level up, he can right-click them to impart it. Zilean receives as much Experience as he gives.

## Q - Time Bomb

Coverage: partial

Description signature: a2162bdcb1ccd63b3a66db498f5976a9dc464429198a754a03de1de5e1ad3356

- championDetail: 1e9bb82bf3df64ae5f91ab2412db8c18e030f1a2414b4424c12b331cd2dd4e71
- championBin: 69c424f8af378e628a2139b6aff5578b5e87b6dc9cafc149ed81ea8951e3d7e1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Time Bomb Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Time Bomb Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Zilean tosses a time-delayed bomb that sticks to the first unit which comes within a small area around it. After seconds it detonates, dealing magic damage. Placing a second bomb on a unit that already has one detonates the first bomb immediately and Stuns enemies in the blast for seconds.

## W - Rewind

Coverage: unsupported

Description signature: bad8b2a06c742b5136906c895c5b23947f24a68182d32401e4d478690511e251

- championDetail: 1e9bb82bf3df64ae5f91ab2412db8c18e030f1a2414b4424c12b331cd2dd4e71
- championBin: 69c424f8af378e628a2139b6aff5578b5e87b6dc9cafc149ed81ea8951e3d7e1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Rewind Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Zilean turns time, reducing his other basic Ability Cooldowns by seconds.

## E - Time Warp

Coverage: out-of-scope

Description signature: 09461e8131d560e94392ec5d066a996c43025219d187c7e82639fee612f41aa5

- championDetail: 1e9bb82bf3df64ae5f91ab2412db8c18e030f1a2414b4424c12b331cd2dd4e71
- championBin: 69c424f8af378e628a2139b6aff5578b5e87b6dc9cafc149ed81ea8951e3d7e1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Time Warp

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Zilean Slows an enemy champion by % or grants an allied champion % Move Speed for seconds.

## R - Chronoshift

Coverage: out-of-scope

Description signature: 93469a3527b96697a6b715f7f9d39370ade7ee1d1c97312030a28495675eb178

- championDetail: 1e9bb82bf3df64ae5f91ab2412db8c18e030f1a2414b4424c12b331cd2dd4e71
- championBin: 69c424f8af378e628a2139b6aff5578b5e87b6dc9cafc149ed81ea8951e3d7e1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Chronoshift

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Zilean grants a protective time rune to an allied champion for seconds. If the target would die, the rune rewinds their timeline, putting them into Stasis for seconds, then reviving them and restoring Health.
