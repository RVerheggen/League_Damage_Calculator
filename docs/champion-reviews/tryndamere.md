# Tryndamere combat review

Patch: 16.16

## P - Battle Fury

Coverage: out-of-scope

Description signature: 4e9d8e7c2317c222d331d9e42c307f7ba8940cd63edeac1c046537ec5f9cab15

- championDetail: abd8f6105a79fdb4028ab74bdac825682335fd680a2a23f2757df9bc76586298
- championBin: 56223a481d8bcf952bd925dd11f820aff73127538c47022a7516ba20f2d1e505

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Battle Fury

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Tryndamere gains Fury for each attack, critical strike, and killing blow he makes. Fury passively increases his Critical Strike Chance and can be consumed with his Bloodlust spell.

## Q - Bloodlust

Coverage: unsupported

Description signature: e5d81fa70ec775d9e04952df37ca2208029bae10f8c5f5bf30286dddaf4f3f13

- championDetail: abd8f6105a79fdb4028ab74bdac825682335fd680a2a23f2757df9bc76586298
- championBin: 56223a481d8bcf952bd925dd11f820aff73127538c47022a7516ba20f2d1e505

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Bloodlust Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Tryndamere thirsts for blood, gaining up to Attack Damage based on his missing Health. Active: Tryndamere consumes his Fury, restoring plus Health per Fury (max: ).

## W - Mocking Shout

Coverage: unsupported

Description signature: c1c921c3cddd2caae7d95e3404871580654a26d4414c84ef0a3c254a0c1ef13c

- championDetail: abd8f6105a79fdb4028ab74bdac825682335fd680a2a23f2757df9bc76586298
- championBin: 56223a481d8bcf952bd925dd11f820aff73127538c47022a7516ba20f2d1e505

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Mocking Shout Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Tryndamere hurls insults, reducing champions' Attack Damage by for seconds and Slowing by % while cowering from him for seconds.

## E - Spinning Slash

Coverage: partial

Description signature: d336d4f9c966fad35a0f8ab05ea422c344d8c969b72a7ae2a4ebbd2d3560f3d6

- championDetail: abd8f6105a79fdb4028ab74bdac825682335fd680a2a23f2757df9bc76586298
- championBin: 56223a481d8bcf952bd925dd11f820aff73127538c47022a7516ba20f2d1e505

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Spinning Slash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Spinning Slash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Tryndamere spins through his enemies, dealing physical damage and generating Fury per enemy hit, increased to Fury against enemy champions. This Ability's Cooldown is reduced by seconds when Tryndamere critically strikes, and reduced by seconds when critically striking a champion.

## R - Undying Rage

Coverage: out-of-scope

Description signature: 47ad53c90d020c526ecf2f268f3649023f99c121cdaa33297029bb5ca4a60b2a

- championDetail: abd8f6105a79fdb4028ab74bdac825682335fd680a2a23f2757df9bc76586298
- championBin: 56223a481d8bcf952bd925dd11f820aff73127538c47022a7516ba20f2d1e505

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Undying Rage

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Tryndamere becomes completely immune to death for seconds, refusing to be reduced below Health, and instantly gains Fury.
