# Fiora combat review

Patch: 16.16

## P - Duelist's Dance

Coverage: out-of-scope

Description signature: dacd6d21e59ad274ea4cf8829a2ebd65c8945ebd5756fb159328e60de12260d8

- championDetail: c056c85d64b6f55799d3dac163bca0146b8a6014d4406ea84971e10c3addc41d
- championBin: 7879eaa854d5d97b94107c2b0f5c24e0fa4cf5e54ba1046d5477f50be4d153a1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Duelist's Dance

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Fiora has revealed a Vital on this Champion. If she hits the Vital, she restores Health and gains Move Speed.

## Q - Lunge

Coverage: partial

Description signature: 7fb476c8a0f39e1b09690de8568e946459739f21813a2edffbafc11f4c0589e9

- championDetail: c056c85d64b6f55799d3dac163bca0146b8a6014d4406ea84971e10c3addc41d
- championBin: 7879eaa854d5d97b94107c2b0f5c24e0fa4cf5e54ba1046d5477f50be4d153a1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Lunge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Lunge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Fiora lunges in a direction and stabs the closest enemy, ward, or structure, dealing physical damage. The strike will prioritize Vitals and enemies it will kill. If Fiora strikes an enemy, this Ability's Cooldown is reduced by %.

## W - Riposte

Coverage: partial

Description signature: da5cc844897b4442821ab1ab41210bdbf67bd30075f1e43b7ab0449c660ea934

- championDetail: c056c85d64b6f55799d3dac163bca0146b8a6014d4406ea84971e10c3addc41d
- championBin: 7879eaa854d5d97b94107c2b0f5c24e0fa4cf5e54ba1046d5477f50be4d153a1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Riposte Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Riposte Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Fiora parries all incoming damage, disables, and negative effects for seconds, then stabs. The stab deals magic damage to the first champion hit and Slows Move Speed by % and Attack Speed by % for seconds. If Fiora parries an Immobilizing effect, the stabbed enemy is Stunned rather than Slowed.

## E - Bladework

Coverage: unsupported

Description signature: f92dd03e511b2774fe5ac8c4c5dc673cf57c6b215cf2ce308c3cf7bc70c1d8cf

- championDetail: c056c85d64b6f55799d3dac163bca0146b8a6014d4406ea84971e10c3addc41d
- championBin: 7879eaa854d5d97b94107c2b0f5c24e0fa4cf5e54ba1046d5477f50be4d153a1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The next two attacks have distinct first and second outcomes. The source is assigned to the limited-attack-state family, but a complete reviewed binding has not been compiled yet.

### Bladework Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: limited-attack-state
- Reason: The next two attacks have distinct first and second outcomes. The source is assigned to the limited-attack-state family, but a complete reviewed binding has not been compiled yet.

Fiora gains % Attack Speed for her next two Attacks. The first Attack Slows by % for second. The second Attack always critically strikes for % damage.

## R - Grand Challenge

Coverage: unsupported

Description signature: dd0f9d357511d7053663bdd0cf2320a44cf3f2eb331035412c02ea3af8987c6e

- championDetail: c056c85d64b6f55799d3dac163bca0146b8a6014d4406ea84971e10c3addc41d
- championBin: 7879eaa854d5d97b94107c2b0f5c24e0fa4cf5e54ba1046d5477f50be4d153a1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Grand Challenge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Passive: Duelist's Dance Move Speed bonus is increased to %. Active: Fiora reveals all four Vitals on a champion for a max of max Health true damage and gains Duelist's Dance's Move Speed bonus while near the target. If Fiora strikes all four Vitals within seconds or if the target dies after she has hit at least one, Fiora restores Health per second to surrounding allied champions for seconds.
