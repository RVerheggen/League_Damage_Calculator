# Annie combat review

Patch: 16.16

## P - Pyromania

Coverage: out-of-scope

Description signature: 94f318b7fa4acc6cbb8c891532d3df4658a214e47ad9b4421bfb82b9ea2e7a3c

- championDetail: 272ec6a4404ac8103fa7a915323c292731954afee3580af4cbccbf38af3a1f76
- championBin: 9882e63dae1b437b7d18040b251ffbb20e09f7b18db3a7c6464e01de8737a4ae

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Pyromania

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

After casting 4 spells, Annie's next offensive spell will stun the target. Annie begins the game and respawns with Pyromania available.

## Q - Disintegrate

Coverage: partial

Description signature: 28ecf4da40a6b8ed98b7d3a4b5311ad9acd6029e75bca9e01c6d6b918c8bcf17

- championDetail: 272ec6a4404ac8103fa7a915323c292731954afee3580af4cbccbf38af3a1f76
- championBin: 9882e63dae1b437b7d18040b251ffbb20e09f7b18db3a7c6464e01de8737a4ae

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Disintegrate Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Disintegrate Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Annie hurls a fireball, dealing magic damage. If the target dies, Annie refunds the Mana cost and reduces the Cooldown by 50%.

## W - Incinerate

Coverage: partial

Description signature: 9314a65a35e1c175ad163e8e2ed2bc9f85264568ebbb7c6b835f46e64f171600

- championDetail: 272ec6a4404ac8103fa7a915323c292731954afee3580af4cbccbf38af3a1f76
- championBin: 9882e63dae1b437b7d18040b251ffbb20e09f7b18db3a7c6464e01de8737a4ae

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Incinerate Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Incinerate Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Annie projects a wave of fire, dealing magic damage.

## E - Molten Shield

Coverage: partial

Description signature: 0d60d4ebf55d73ddb665aef9fc937789e69e5b37f265499e464baf2f82d5e131

- championDetail: 272ec6a4404ac8103fa7a915323c292731954afee3580af4cbccbf38af3a1f76
- championBin: 9882e63dae1b437b7d18040b251ffbb20e09f7b18db3a7c6464e01de8737a4ae

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageReturn was preserved. Stateful and alternate effects require an explicit module.

### Molten Shield Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Molten Shield Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Annie grants an ally champion Shield for seconds and Decaying Move Speed for seconds. While the shield holds, enemies who hit the shielded ally with an Attack or Ability receive magic damage once per shield. Tibbers always gains the effects of Molten Shield when summoned.

## R - Summon: Tibbers

Coverage: partial

Description signature: ff05ba62089ec10bd19f367c33a0da815640a353dc83cad023f71846d5893e97

- championDetail: 272ec6a4404ac8103fa7a915323c292731954afee3580af4cbccbf38af3a1f76
- championBin: 9882e63dae1b437b7d18040b251ffbb20e09f7b18db3a7c6464e01de8737a4ae

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation InitialBurstDamage was preserved. Stateful and alternate effects require an explicit module.

### Summon: Tibbers Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Summon: Tibbers Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Annie gains % Magic Penetration. Annie summons her bear Tibbers, dealing magic damage. For the next seconds, Tibbers burns nearby enemies for magic damage per second. Tibbers becomes enraged when summoned, if Annie stuns an enemy champion, and if Annie dies. When enraged, Tibbers gains 275% Attack Speed and 100% Move Speed decaying over 3 seconds. Recast: Manually issue orders to Tibbers.
