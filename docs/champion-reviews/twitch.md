# Twitch combat review

Patch: 16.16

## P - Deadly Venom

Coverage: unsupported

Description signature: aea6b920537ed5dc223d6bfbbea3a273f83091b0e22b278d0d4ce08a26907769

- championDetail: 703233401cabdd0fc80bba5920863318be6aeda694692029376486d845bdd538
- championBin: c326d14d0fab48c565b8f4537179a98d2b620244c16d1857b0303841ec608bf1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Deadly Venom Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Twitch's basic attacks infect the target %i:OnHit% On-Hit, dealing true damage each second.

## Q - Ambush

Coverage: unsupported

Description signature: 06855d72426b4b66c17468e14986adf74dbd106f274107cca8aa5887e66771e1

- championDetail: 703233401cabdd0fc80bba5920863318be6aeda694692029376486d845bdd538
- championBin: c326d14d0fab48c565b8f4537179a98d2b620244c16d1857b0303841ec608bf1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Ambush Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Twitch Camouflages and gains % Move Speed for seconds. The Move Speed increases to % while near an enemy champion that can't see him. After exiting Camouflage, Twitch gains % Attack Speed for seconds. When an enemy champion dies while afflicted with Venom, this Ability's Cooldown is refreshed.

## W - Venom Cask

Coverage: out-of-scope

Description signature: 40fa94861f6fb357984ac638a50554903cd659680ca95e683852400fa387b600

- championDetail: 703233401cabdd0fc80bba5920863318be6aeda694692029376486d845bdd538
- championBin: c326d14d0fab48c565b8f4537179a98d2b620244c16d1857b0303841ec608bf1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Venom Cask

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Twitch hurls a cask that adds a stack of Deadly Venom to all enemies struck and leaves behind a toxic cloud that persists for seconds. Enemies that remain within the cloud are Slowed by % and receive an additional stack of Deadly Venom each second.

## E - Contaminate

Coverage: partial

Description signature: 4ecc6447efe38297a3bd4a99c908867e869004dbacbf6da6eb5e7df67dcce146

- championDetail: 703233401cabdd0fc80bba5920863318be6aeda694692029376486d845bdd538
- championBin: c326d14d0fab48c565b8f4537179a98d2b620244c16d1857b0303841ec608bf1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Contaminate Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Contaminate Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Deals physical damage to all nearby enemies affected by Deadly Venom, plus an additional physical damage and magical damage per stack of Deadly Venom. Max Damage: physical damage and magical damage.

## R - Spray and Pray

Coverage: unsupported

Description signature: b0e2f001a60bb0090e9e61d75ebe47b1997cf8f13bb5c90a33fbaa10231a60ae

- championDetail: 703233401cabdd0fc80bba5920863318be6aeda694692029376486d845bdd538
- championBin: c326d14d0fab48c565b8f4537179a98d2b620244c16d1857b0303841ec608bf1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Spray and Pray Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Twitch unleashes his crossbow, gaining Attack Range and Attack Damage, and causing his Attacks to become piercing bolts for seconds. These bolts hit all enemies they pass through, but deal % less damage to subsequent targets, down to a minimum of % damage.
