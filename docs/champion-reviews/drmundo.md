# Dr. Mundo combat review

Patch: 16.16

## P - Goes Where He Pleases

Coverage: unsupported

Description signature: 3a4954c088cc15b0e2c96c10314d0e4be53212f2ff6c60a9afb02dec129da938

- championDetail: df47d1f0259752fc5ff1f621edba28a4559404f68b84e315e5a442b55f85e678
- championBin: df9fcf4f0128d5858381f91a15aa2eca6c9b15184ebbfe6a1082bf56c68cc572

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Goes Where He Pleases Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Dr. Mundo resists the first Immobilizing effect that hits him, instead losing Health and dropping a chemical cannister nearby. Dr. Mundo can pick it up by walking over it, restoring Health and reducing this Ability's Cooldown. Dr. Mundo also has significantly increased Health regeneration.

## Q - Infected Bonesaw

Coverage: modeled

Description signature: 3d2e00638ed991d3dae8a0f747ddf56dec6e8614b0ab3a10a27c63be1727ba9d

- championDetail: df47d1f0259752fc5ff1f621edba28a4559404f68b84e315e5a442b55f85e678
- championBin: df9fcf4f0128d5858381f91a15aa2eca6c9b15184ebbfe6a1082bf56c68cc572

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Dr. Mundo Infected Bonesaw is executed by a reviewed custom handler that returns generic damage operations.

### Dr. Mundo Infected Bonesaw

- Relevance: attacker
- Disposition: custom
- Coverage: modeled
- Template or handler: champion:36:Q
- Reason: A dedicated reviewed handler is retained because the current template vocabulary cannot express the action semantics without distortion.

Champion damage uses current health with a rank-based minimum.

## W - Heart Zapper

Coverage: partial

Description signature: 57e6ea30d469413f59ce7cb5aa105b3bc3cc0e56ceae396bed6f1c6dbb964dbc

- championDetail: df47d1f0259752fc5ff1f621edba28a4559404f68b84e315e5a442b55f85e678
- championBin: df9fcf4f0128d5858381f91a15aa2eca6c9b15184ebbfe6a1082bf56c68cc572

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Heart Zapper Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Heart Zapper Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Dr. Mundo charges up a defibrilator, dealing magic damage each second for up to seconds to nearby enemies. Additionally he stores of damage taken for the first seconds and % for the remaining duration as gray health and can Recast. Recast: Detonate the defibrilator, dealing magic damage to nearby enemies. If this hits at least one champion, Dr. Mundo restores % of gray health, otherwise he instead restores % of gray health.

## E - Blunt Force Trauma

Coverage: partial

Description signature: 139bca3e5a8a00a282909d610388378446bd62bf8689848fec7225f7ddae69a0

- championDetail: df47d1f0259752fc5ff1f621edba28a4559404f68b84e315e5a442b55f85e678
- championBin: df9fcf4f0128d5858381f91a15aa2eca6c9b15184ebbfe6a1082bf56c68cc572

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Blunt Force Trauma Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Blunt Force Trauma Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Passive: Dr Mundo gains Attack Damage. Active: Dr Mundo violently swings his "medical" bag, causing his next Attack to deal an additional physical damage, increased by up to based on his missing Health. If the enemy is killed, Mundo swats them away, dealing physical damage to enemies they pass through.

## R - Maximum Dosage

Coverage: out-of-scope

Description signature: 0ec84dc933a4594be193d14f255e4dd15ab8beea3b9735345ec679d2784cfc11

- championDetail: df47d1f0259752fc5ff1f621edba28a4559404f68b84e315e5a442b55f85e678
- championBin: df9fcf4f0128d5858381f91a15aa2eca6c9b15184ebbfe6a1082bf56c68cc572

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Maximum Dosage

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Dr. Mundo pumps himself with chemicals, gaining % of his missing Health as max Health, % Move Speed, and regenerating % max Health over seconds. At Rank 3, both healing effects are increased by an additional % per nearby enemy champion.
