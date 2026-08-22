# Elise combat review

Patch: 16.16

## P - Spider Queen

Coverage: unsupported

Description signature: ea6005e622c416704d6cbb7bd132116dbad7bee4fb1696e58a24501fec73123c

- championDetail: fd3912a03493bf2efcf375a39b99e1529e3f8e991596797287bdc1a6e462abac
- championBin: 863994b221484f190fc851ae4da6e84848055d14be3a9348c952a3e12d3e4e04

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Spider Queen Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Human Form: When Elise's abilities hit an enemy, she gains a dormant Spiderling. Spider Form: Basic attacks deal bonus magic damage and restore health to Elise.

## Q - Neurotoxin / Venomous Bite

Coverage: partial

Description signature: 48312da58e6526b8c42b415b8b9efc0a0fdb0261b90fcea1f8d8ad5ddf8ebfc8

- championDetail: fd3912a03493bf2efcf375a39b99e1529e3f8e991596797287bdc1a6e462abac
- championBin: 863994b221484f190fc851ae4da6e84848055d14be3a9348c952a3e12d3e4e04

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation HumanPercentHealth was preserved. Stateful and alternate effects require an explicit module.

### Neurotoxin / Venomous Bite Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Neurotoxin / Venomous Bite Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Human Form: Elise injects neurotoxin, dealing plus current Health magic damage.

## W - Volatile Spiderling / Skittering Frenzy

Coverage: partial

Description signature: d2136e9b2fbda4acd4c5c5b5a0cf76fd3e01a689a9b7a3c7a543508726f9255e

- championDetail: fd3912a03493bf2efcf375a39b99e1529e3f8e991596797287bdc1a6e462abac
- championBin: 863994b221484f190fc851ae4da6e84848055d14be3a9348c952a3e12d3e4e04

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Volatile Spiderling / Skittering Frenzy Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Volatile Spiderling / Skittering Frenzy Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Human Form: Elise summons an explosive spider that moves to a location and explodes when it nears an enemy or after 3 seconds. The spider deals magic damage.

## E - Cocoon / Rappel

Coverage: out-of-scope

Description signature: f0535f20e4428b0c6c2ace9c32d2cdb8354727b3039c3116d3665c23516c88ec

- championDetail: fd3912a03493bf2efcf375a39b99e1529e3f8e991596797287bdc1a6e462abac
- championBin: 863994b221484f190fc851ae4da6e84848055d14be3a9348c952a3e12d3e4e04

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Cocoon / Rappel

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Human Form: Elise fires a cocoon, Stunning and revealing the first enemy hit for seconds.

## R - Spider Form

Coverage: out-of-scope

Description signature: a634e76f61b532efc965c1ddfc27f37cc501ced920b1a0e52d9151e3d21e7388

- championDetail: fd3912a03493bf2efcf375a39b99e1529e3f8e991596797287bdc1a6e462abac
- championBin: 863994b221484f190fc851ae4da6e84848055d14be3a9348c952a3e12d3e4e04

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Spider Form

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Human Form: Elise transforms into a menacing spider, becoming melee, gaining access to Spider Form Abilities and summons all dormant Spiderlings.
