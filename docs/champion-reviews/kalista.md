# Kalista combat review

Patch: 16.16

## P - Martial Poise

Coverage: out-of-scope

Description signature: 32442c154bb3bfac998bef2c1431fe8e77c1f2507cc7037363050c7ce6c2b3dc

- championDetail: 9f520bfb6c900b6fc84268724ecdfc142a5bd874ddefee86bda1fb2892b7ad86
- championBin: 882c8b5b9f07a8cb0323a813e612fb5f489fda0b7f5dbe8a571b6c64daf22c4c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Martial Poise

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Enter a movement command while winding up Kalista's basic attack or Pierce to lunge a short distance when she launches her attack.

## Q - Pierce

Coverage: partial

Description signature: cd93196be62a426593cab9dfa564e21abbb157cb5e367d7457fbd8f1a07c8baf

- championDetail: 9f520bfb6c900b6fc84268724ecdfc142a5bd874ddefee86bda1fb2892b7ad86
- championBin: 882c8b5b9f07a8cb0323a813e612fb5f489fda0b7f5dbe8a571b6c64daf22c4c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Pierce Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Pierce Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Kalista hurls a spear, dealing physical damage to the first target hit. If this kills the target, the spear continues onward, carrying any Rend stacks to the next target hit. Kalista can dash after using this Ability using Martial Poise.

## W - Sentinel

Coverage: unsupported

Description signature: 2c32641407534d7a6e3a2691714c23160a29838855a08a040ffc854f5c286ffe

- championDetail: 9f520bfb6c900b6fc84268724ecdfc142a5bd874ddefee86bda1fb2892b7ad86
- championBin: 882c8b5b9f07a8cb0323a813e612fb5f489fda0b7f5dbe8a571b6c64daf22c4c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Sentinel Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: When Kalista and her Oathsworn both Attack the same target, she deals % max Health magic damage. This effect has a second Cooldown per target and a cap of to non-champions. Active: Kalista sends a ghost to patrol an area for three laps. Champions spotted are revealed for 4 seconds. This ability has 2 charges ( second refresh).

## E - Rend

Coverage: partial

Description signature: 7c7d5afd8d052200fac6bc903615dc3636862e6e48e0ab43dcf154b1c6937084

- championDetail: 9f520bfb6c900b6fc84268724ecdfc142a5bd874ddefee86bda1fb2892b7ad86
- championBin: 882c8b5b9f07a8cb0323a813e612fb5f489fda0b7f5dbe8a571b6c64daf22c4c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Rend Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Rend Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Kalista's spears linger in their target for 4 seconds, stacking any number of times. Active: Kalista rips the spears from nearby enemies, dealing plus physical damage per spear beyond the first. Slows enemies hit by for seconds. If this Ability kills at least one target, its Cooldown is refreshed and it refunds Mana.

## R - Fate's Call

Coverage: out-of-scope

Description signature: 55d51c8abc769451edeae5f0abda188fe0543632db255af571d3494633c1ebe1

- championDetail: 9f520bfb6c900b6fc84268724ecdfc142a5bd874ddefee86bda1fb2892b7ad86
- championBin: 882c8b5b9f07a8cb0323a813e612fb5f489fda0b7f5dbe8a571b6c64daf22c4c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Fate's Call

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Kalista puts her Oathsworn into Stasis and draws them to herself for up to 4 seconds. The Oathsworn can click to launch themselves, stopping at the first champion hit and Knocking Back all nearby enemies. If the Oathsworn hits a champion, they are placed at their maximum attack range from it.
