# Karthus combat review

Patch: 16.16

## P - Death Defied

Coverage: out-of-scope

Description signature: 8ad55dbab1df4f629c72c5af0ad98de276b70aafa4381a8890e36f1a140434fb

- championDetail: 6dfa28c8e10eec4dd70fb1dc7b7c6ffe15372ea7977a1cb854fdb6ed6b2ea438
- championBin: 6bd56ffc62f1d4321c8fa4e1fa6f9bf0abb41215a4b57a3d364705c06134a820

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Death Defied

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Upon dying, Karthus enters a spirit form that allows him to continue casting spells.

## Q - Lay Waste

Coverage: partial

Description signature: dee3264c58a9dbef36cecbd4cb6c0c0f6f6ec8001e65f3bdc6d08504bcb4b5ed

- championDetail: 6dfa28c8e10eec4dd70fb1dc7b7c6ffe15372ea7977a1cb854fdb6ed6b2ea438
- championBin: 6bd56ffc62f1d4321c8fa4e1fa6f9bf0abb41215a4b57a3d364705c06134a820

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Lay Waste Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Lay Waste Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Karthus creates a blast of magic, dealing magic damage. If the blast hits only one enemy, it instead deals magic damage.

## W - Wall of Pain

Coverage: unsupported

Description signature: f6206d85ff7efb021c8ae81bfb7ba563626b1b40301b5d0a3e2ecc9a3fafd268

- championDetail: 6dfa28c8e10eec4dd70fb1dc7b7c6ffe15372ea7977a1cb854fdb6ed6b2ea438
- championBin: 6bd56ffc62f1d4321c8fa4e1fa6f9bf0abb41215a4b57a3d364705c06134a820

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Wall of Pain Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Karthus creates a wall that lasts for seconds. Enemies that pass through lose % Magic Resist for seconds and are Slowed by % decaying over the duration.

## E - Defile

Coverage: partial

Description signature: cc2f283fe0b570a16deec4d0ed27ad217e0e330daff9e833f805be4b5ee98f7a

- championDetail: 6dfa28c8e10eec4dd70fb1dc7b7c6ffe15372ea7977a1cb854fdb6ed6b2ea438
- championBin: 6bd56ffc62f1d4321c8fa4e1fa6f9bf0abb41215a4b57a3d364705c06134a820

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Defile Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Defile Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Passive: When Karthus kills a unit, he restores Mana. Toggle: Karthus creates a necrotic aura, dealing magic damage per second to nearby enemies.

## R - Requiem

Coverage: partial

Description signature: 6a09bff23f766a9dded02e552de4f5581dbeec9c9702b4829a82239cf58df786

- championDetail: 6dfa28c8e10eec4dd70fb1dc7b7c6ffe15372ea7977a1cb854fdb6ed6b2ea438
- championBin: 6bd56ffc62f1d4321c8fa4e1fa6f9bf0abb41215a4b57a3d364705c06134a820

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Requiem Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Requiem Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Karthus channels for 3 seconds, then deals magic damage to enemy champions, regardless of distance.
