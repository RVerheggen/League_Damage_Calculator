# Zed combat review

Patch: 16.16

## P - Contempt for the Weak

Coverage: unsupported

Description signature: c6c958eb7bf4ecfced7eca73c2da89cce0feec233c712f87aacb00535c14c2d4

- championDetail: 3b372cb7f78d39e032eac73a2a801bc0de177cdb9f2676518b336fb98acacc4c
- championBin: 1ea9a84d2d91b0cf36b8e95b442769c11ce5d989aebe037c17f64590b0c88b46

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Contempt for the Weak Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Zed's basic attacks against low health targets deals bonus Magic Damage. This effect can only occur once every few seconds against the same enemy champion.

## Q - Razor Shuriken

Coverage: partial

Description signature: 852cfa55330549e954d56bdf5c43f4c81557cd0205b014f54fb3150eb61b5760

- championDetail: 3b372cb7f78d39e032eac73a2a801bc0de177cdb9f2676518b336fb98acacc4c
- championBin: 1ea9a84d2d91b0cf36b8e95b442769c11ce5d989aebe037c17f64590b0c88b46

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Razor Shuriken Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Razor Shuriken Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Zed and his Shadows throw their shurikens, each dealing physical damage to the first enemy they pass through, and physical damage to each additional enemy.

## W - Living Shadow

Coverage: out-of-scope

Description signature: e8b912a981bfd044bbfe6b51e7bc7664187ef1551814542078a02be5ee992710

- championDetail: 3b372cb7f78d39e032eac73a2a801bc0de177cdb9f2676518b336fb98acacc4c
- championBin: 1ea9a84d2d91b0cf36b8e95b442769c11ce5d989aebe037c17f64590b0c88b46

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Living Shadow

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Passive: Zed gains Energy whenever he and his Shadows strike an enemy with the same Ability. Active: Zed's Shadow dashes forward, remaining in place for seconds. Recasting this Ability will cause Zed to switch positions with this Shadow.

## E - Shadow Slash

Coverage: partial

Description signature: 1b04c971f30c9c3982b701e2944b1ef9e9ba07276ef35f7eb5fa1f370b15fc22

- championDetail: 3b372cb7f78d39e032eac73a2a801bc0de177cdb9f2676518b336fb98acacc4c
- championBin: 1ea9a84d2d91b0cf36b8e95b442769c11ce5d989aebe037c17f64590b0c88b46

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Shadow Slash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Shadow Slash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Zed and his Shadows slash, dealing physical damage to nearby enemies. Each enemy champion hit by Zed's slash reduces Living Shadow's Cooldown by seconds. Enemies hit by a Shadow's slash are Slowed by % for seconds. Enemies hit by multiple slashes take no additional damage but are Slowed by % instead.

## R - Death Mark

Coverage: partial

Description signature: eb8b9303b1feb15d7931e68a4a3bd9971a242389b31de77fe75f7d4086727dfa

- championDetail: 3b372cb7f78d39e032eac73a2a801bc0de177cdb9f2676518b336fb98acacc4c
- championBin: 1ea9a84d2d91b0cf36b8e95b442769c11ce5d989aebe037c17f64590b0c88b46

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RCalculatedDamage was preserved. Stateful and alternate effects require an explicit module.

### Death Mark Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Death Mark Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Zed becomes Untargetable and dashes to an enemy champion, marking them. After seconds, the mark triggers, dealing physical damage and repeating % of all damage dealt to the target by Zed while the mark was active. The dash leaves a Shadow behind for seconds. Zed can Recast this Ability to switch positions with this Shadow.
