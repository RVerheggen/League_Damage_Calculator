# Sivir combat review

Patch: 16.16

## P - Fleet of Foot

Coverage: out-of-scope

Description signature: 079bbf2eeb098be9eb89dcedf26fd385da1c5a5b57357626b5e1a7cef2acdf35

- championDetail: 185d5e9d14f59b9249fabd676e1dd077b2505010277dc06c44b4f3cc1166f9e7
- championBin: f11b79bb72b3c50a5e2f76f9398062be88e9c58324f8800b294e15be9c9a6d29

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Fleet of Foot

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Sivir gains a short burst of Move Speed when she attacks an enemy champion.

## Q - Boomerang Blade

Coverage: partial

Description signature: dd1c1c18681dba3970e19e4ec196d0b6e9e03dca1604c51d4f0f702b522ac5a0

- championDetail: 185d5e9d14f59b9249fabd676e1dd077b2505010277dc06c44b4f3cc1166f9e7
- championBin: f11b79bb72b3c50a5e2f76f9398062be88e9c58324f8800b294e15be9c9a6d29

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Boomerang Blade Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Boomerang Blade Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Sivir hurls her crossblade like a boomerang, dealing to all enemies it cuts through. Hitting non-champions reduces the damage to subsequent targets, down to a minimum of %.

## W - Ricochet

Coverage: partial

Description signature: a2b6e289365de9e44ee1125e89d02e19df5121a233fe62644843072a26c246af

- championDetail: 185d5e9d14f59b9249fabd676e1dd077b2505010277dc06c44b4f3cc1166f9e7
- championBin: f11b79bb72b3c50a5e2f76f9398062be88e9c58324f8800b294e15be9c9a6d29

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BounceDamage was preserved. Stateful and alternate effects require an explicit module.

### Ricochet Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ricochet Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

For the next seconds, Sivir gains % Attack Speed and her auto attacks are empowered to bounce to additional surrounding enemies dealing physical damage each bounce for up to bounces. These bounces critically strike if the attack generating them does.

## E - Spell Shield

Coverage: out-of-scope

Description signature: fdd4221362955c129698036edb8c8f2c64962a6c821dfbb60023ac299000daed

- championDetail: 185d5e9d14f59b9249fabd676e1dd077b2505010277dc06c44b4f3cc1166f9e7
- championBin: f11b79bb72b3c50a5e2f76f9398062be88e9c58324f8800b294e15be9c9a6d29

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Spell Shield

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Sivir creates a magical barrier for seconds that blocks the next incoming enemy Ability. If an ability is blocked, Sivir restores health and triggers Fleet of Foot.

## R - On The Hunt

Coverage: unsupported

Description signature: 8f5f73be31fd8d68f3f2edbac92658f53acc0d1a0ab40b020ac77845e0e81dda

- championDetail: 185d5e9d14f59b9249fabd676e1dd077b2505010277dc06c44b4f3cc1166f9e7
- championBin: f11b79bb72b3c50a5e2f76f9398062be88e9c58324f8800b294e15be9c9a6d29

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### On The Hunt Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Sivir rallies her nearby allies, granting them % Move Speed for seconds. Sivir's attacks against champions while On The Hunt reduce the cooldown of her basic abilities by seconds. Takedowns on recently damaged enemies refreshes the duration of the hunt.
