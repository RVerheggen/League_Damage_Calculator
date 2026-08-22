# Evelynn combat review

Patch: 16.16

## P - Demon Shade

Coverage: out-of-scope

Description signature: 0ce4b0d9d5d34f4f85ebe3da2d54323fa2f1533cd0e1a8931cac2826a8eec020

- championDetail: 1612f5962fc0e44d3a6e0ecef80fabc31f7d24fc517c67734a8ed4e1ffcaac82
- championBin: 68ddb3e2b19dc02420628050f759c96907bca8f0040c90a17125aba551f49f1f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Demon Shade

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

When out of combat, Evelynn enters Demon Shade. Demon Shade heals Evelynn when she is low on health and grants Camouflage after level 6.

## Q - Hate Spike

Coverage: partial

Description signature: bc45b98eefda4fc69b38b846b8e151f0fbc0eca6dd399431b3b60d51f16e446c

- championDetail: 1612f5962fc0e44d3a6e0ecef80fabc31f7d24fc517c67734a8ed4e1ffcaac82
- championBin: 68ddb3e2b19dc02420628050f759c96907bca8f0040c90a17125aba551f49f1f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The next three attacks or abilities consume a per-target Hate Spike mark. The source is assigned to the mark-and-consume family, but a complete reviewed binding has not been compiled yet.

### Hate Spike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Hate Spike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: mark-and-consume
- Reason: The next three attacks or abilities consume a per-target Hate Spike mark. The source is assigned to the mark-and-consume family, but a complete reviewed binding has not been compiled yet.

Evelynn strikes with her Lasher, dealing magic damage to the first enemy hit and causing Evelynn's next 3 Attacks or Abilities on that unit to deal an additional magic damage. Evelynn can Recast this Ability up to times. Recast: Evelynn fires spikes through the nearest enemy, dealing magic damage to all enemies hit.

## W - Allure

Coverage: partial

Description signature: 6369434463aa3fbb39670d6c134f01586b8cfa3f9eba4097da14d207c752794e

- championDetail: 1612f5962fc0e44d3a6e0ecef80fabc31f7d24fc517c67734a8ed4e1ffcaac82
- championBin: 68ddb3e2b19dc02420628050f759c96907bca8f0040c90a17125aba551f49f1f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Allure Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Allure Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Evelynn marks a champion or monster for 5 seconds. If Evelynn hits the target with an Attack or Ability, she will expunge the mark, refund its cost, and Slow the target by % for seconds. If the mark lasts at least 2.5 seconds, expunging it has extra effects:Against champions: Charms them for second(s) and removes % Magic Resist for seconds.Against monsters: Charms them for seconds and deals magic damage.

## E - Whiplash

Coverage: partial

Description signature: 17130299e05067bf0b29ea19605c3eb3a65345e87421d4c6006fece6d64c759b

- championDetail: 1612f5962fc0e44d3a6e0ecef80fabc31f7d24fc517c67734a8ed4e1ffcaac82
- championBin: 68ddb3e2b19dc02420628050f759c96907bca8f0040c90a17125aba551f49f1f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Whiplash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Whiplash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Evelynn whips an enemy, dealing plus max Health magic damage. Evelynn gains % Move Speed for seconds. Entering Demon Shade refreshes this Ability's cooldown and empowers it. When this Ability is empowered, Evelynn dashes to the target and deals plus max Health magic damage to her target and everyone she passes through instead.

## R - Last Caress

Coverage: partial

Description signature: 7536d4c66a2d907f11330060c3f8b73f2c2dfce5b5d5a8d9b9a734c2b7fb3cc0

- championDetail: 1612f5962fc0e44d3a6e0ecef80fabc31f7d24fc517c67734a8ed4e1ffcaac82
- championBin: 68ddb3e2b19dc02420628050f759c96907bca8f0040c90a17125aba551f49f1f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Last Caress Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Last Caress Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Evelynn unleashes her demonic energy, dealing heavy damage, becoming Untargetable and teleporting backwards. She deals magic damage, increased to against enemies below 30% Health. Upon cast, set Demon Shade to a 1.25 second cooldown.
