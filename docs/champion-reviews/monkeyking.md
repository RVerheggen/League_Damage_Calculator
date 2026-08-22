# Wukong combat review

Patch: 16.16

## P - Stone Skin

Coverage: unsupported

Description signature: d69bf04b6ad4af6f1871e465dd08b9ba9df63a7bdf037a9b94feb371c3c6a668

- championDetail: 0b000c1365ce55a2e9eba65d235e1e234e3be8e59a62e58d4e9a3888f324dbce
- championBin: f5b7dc5bd74c7e99c675ca58b420af97c0408404e330dea4b0ac705edef0d7ed

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Stone Skin Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Wukong gains stacking armor and max health regeneration while fighting champions and monsters.

## Q - Crushing Blow

Coverage: partial

Description signature: 386ebf216d8e3f4d2cee100d5dc535e2391e49bb9d1a9b7f52e3d0f5d09a4130

- championDetail: 0b000c1365ce55a2e9eba65d235e1e234e3be8e59a62e58d4e9a3888f324dbce
- championBin: f5b7dc5bd74c7e99c675ca58b420af97c0408404e330dea4b0ac705edef0d7ed

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BonusDamageTT was preserved. Stateful and alternate effects require an explicit module.

### Crushing Blow Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Crushing Blow Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Wukong and his Clone's next Attack gains range, deals an additional physical damage, and removes % Armor for seconds. This Ability's cooldown is reduced by seconds every time Wukong or his Clone hit an enemy with an Attack or Ability. This Ability triggers spell effects upon dealing damage.

## W - Warrior Trickster

Coverage: out-of-scope

Description signature: f464ce76fd8d80689f218c8544ab9f2dcf4475935f108b63786e9a3301ee236d

- championDetail: 0b000c1365ce55a2e9eba65d235e1e234e3be8e59a62e58d4e9a3888f324dbce
- championBin: f5b7dc5bd74c7e99c675ca58b420af97c0408404e330dea4b0ac705edef0d7ed

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Warrior Trickster

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Wukong dashes and becomes Invisible for second, leaving behind a stationary Clone for seconds. The Clone Attacks nearby enemies Wukong has recently damaged and will mimic his ultimate, each dealing % of normal damage.

## E - Nimbus Strike

Coverage: partial

Description signature: e1685f1046e532b80f877c9af039582344ac6bc3e433678c680ea0e141b6b36a

- championDetail: 0b000c1365ce55a2e9eba65d235e1e234e3be8e59a62e58d4e9a3888f324dbce
- championBin: f5b7dc5bd74c7e99c675ca58b420af97c0408404e330dea4b0ac705edef0d7ed

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Nimbus Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Nimbus Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Wukong dashes to an enemy, sending out Clones that mimic the dash to up to additional enemies nearby. Each enemy struck takes magic damage. He and his Clone gain % Attack Speed for seconds.

## R - Cyclone

Coverage: partial

Description signature: 6edeb38c640e05e0748abb0d0b342b60a574fa0e0fa3e6f4b1a2d94e8034f688

- championDetail: 0b000c1365ce55a2e9eba65d235e1e234e3be8e59a62e58d4e9a3888f324dbce
- championBin: f5b7dc5bd74c7e99c675ca58b420af97c0408404e330dea4b0ac705edef0d7ed

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTT was preserved. Stateful and alternate effects require an explicit module.

### Cyclone Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Cyclone Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Wukong gains % Move Speed and spins his staff, Knocking Up nearby enemies for seconds and take plus max Health physical damage over seconds. This Ability can be cast a second time within seconds before going on cooldown.
