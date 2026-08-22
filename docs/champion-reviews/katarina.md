# Katarina combat review

Patch: 16.16

## P - Voracity

Coverage: unsupported

Description signature: b022d04406fde585bf47e710c2a36ec1e88d6062985affc8cd2d0e33c86c1fc3

- championDetail: 35cb7d3a6b8639831ba7e434dcece699c78ddc69c2d4a86b6685d173e2a1cd19
- championBin: fc91046865d402d91f6c79cf761c405cf6e28c73926c6d026988f29f8fd4ebd8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Voracity Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Whenever an enemy champion dies that Katarina has damaged recently, her remaining ability cooldowns are dramatically reduced. If Katarina picks up a Dagger, she uses it to slash through all nearby enemies, dealing magic damage.

## Q - Bouncing Blade

Coverage: partial

Description signature: 2734e916ca2b25916eb74dfa61d1ad11da4ca869b7fd832ee75006173a2af601

- championDetail: 35cb7d3a6b8639831ba7e434dcece699c78ddc69c2d4a86b6685d173e2a1cd19
- championBin: fc91046865d402d91f6c79cf761c405cf6e28c73926c6d026988f29f8fd4ebd8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Bouncing Blade Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Bouncing Blade Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Katarina throws a Dagger, dealing magic damage to the target and nearby enemies. The Dagger then ricochets onto the ground behind the primary target.

## W - Preparation

Coverage: out-of-scope

Description signature: c5669d3d277251234185c3dbf64c13fe6f9861b358ae6b7609d6be8c2ee50c4e

- championDetail: 35cb7d3a6b8639831ba7e434dcece699c78ddc69c2d4a86b6685d173e2a1cd19
- championBin: fc91046865d402d91f6c79cf761c405cf6e28c73926c6d026988f29f8fd4ebd8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Preparation

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Katarina tosses a Dagger into the air and gains % Move Speed decaying over seconds.

## E - Shunpo

Coverage: partial

Description signature: b934b28fe299e3fcf556f0ca114c73e3f6dadbb3ec5e525f0364071142c3318a

- championDetail: 35cb7d3a6b8639831ba7e434dcece699c78ddc69c2d4a86b6685d173e2a1cd19
- championBin: fc91046865d402d91f6c79cf761c405cf6e28c73926c6d026988f29f8fd4ebd8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Shunpo Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Shunpo Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Katarina blinks in the wink of an eye to the target ally, enemy, or Dagger. If it is an enemy, Katarina strikes for magic damage - otherwise she strikes the nearest enemy in range. Picking up a Dagger will reduce this Ability's Cooldown by seconds (). Katarina can blink to any location near the target.

## R - Death Lotus

Coverage: partial

Description signature: 0750df0ae0fb632b98c84818e121e59b876a91f4811cc0172ee5c80f588aaf7f

- championDetail: 35cb7d3a6b8639831ba7e434dcece699c78ddc69c2d4a86b6685d173e2a1cd19
- championBin: fc91046865d402d91f6c79cf761c405cf6e28c73926c6d026988f29f8fd4ebd8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Death Lotus Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Death Lotus Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Katarina becomes a flurry of blades, rapidly attacking the three nearest enemy champions with a flurry of knives. Each knife deals magic damage and physical damage, and applies % Grievous Wounds for seconds. Total over seconds to each enemy: magic damage and physical damage.
