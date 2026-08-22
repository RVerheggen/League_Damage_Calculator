# Cassiopeia combat review

Patch: 16.16

## P - Serpentine Grace

Coverage: out-of-scope

Description signature: 5c7785397bc6b52350b8d25ed6de670056f9dd5c04865284d261bf922bffdd25

- championDetail: e9e582054c585d2cea61077315694a005ef84f833ea1a9cc8bcce3cb7c8020ef
- championBin: 17fd888a866f4949c716f3ee41c4679bbeea90cf3c37c6754a3a20654cddcd5b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Serpentine Grace

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

All Move Speed bonuses are more effective on Cassiopeia.

## Q - Noxious Blast

Coverage: partial

Description signature: e6873b20360b414c6d9756b4ceefb70d1c3e34b4f0c628fbf7a206ecc105e8e5

- championDetail: e9e582054c585d2cea61077315694a005ef84f833ea1a9cc8bcce3cb7c8020ef
- championBin: 17fd888a866f4949c716f3ee41c4679bbeea90cf3c37c6754a3a20654cddcd5b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Noxious Blast Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Noxious Blast Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Cassiopeia blasts noxious gas, Poisoning enemies and dealing magic damage over seconds. Hitting a champion grants Cassiopeia % Move Speed decaying over seconds.

## W - Miasma

Coverage: partial

Description signature: 2be6d2af13f91de622fed1a771afc0b5977c6cb25ac3436107f820c56431aca1

- championDetail: e9e582054c585d2cea61077315694a005ef84f833ea1a9cc8bcce3cb7c8020ef
- championBin: 17fd888a866f4949c716f3ee41c4679bbeea90cf3c37c6754a3a20654cddcd5b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Miasma Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Miasma Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Cassiopeia spews venom, leaving toxic clouds for seconds. Enemies in the clouds take magic damage per second, are Poisoned, Grounded, and Slowed by %.

## E - Twin Fang

Coverage: partial

Description signature: 949ab82be8160f255f48deb4f7bbf1f83d351a272b606ac3fab9c47182f844d0

- championDetail: e9e582054c585d2cea61077315694a005ef84f833ea1a9cc8bcce3cb7c8020ef
- championBin: 17fd888a866f4949c716f3ee41c4679bbeea90cf3c37c6754a3a20654cddcd5b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Twin Fang Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Twin Fang Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Cassiopeia launches deadly fangs, dealing magic damage. If the enemy is Poisoned, they take an additional magic damage and Cassiopeia restores Health, reduced to Health against lane minions and small monsters. If this kills the target, Cassiopeia restores Mana.

## R - Petrifying Gaze

Coverage: partial

Description signature: 9ad5f9936ffdf07c4fc657d8b08600a986bb6217c2ff804a6d9b64612be84d8d

- championDetail: e9e582054c585d2cea61077315694a005ef84f833ea1a9cc8bcce3cb7c8020ef
- championBin: 17fd888a866f4949c716f3ee41c4679bbeea90cf3c37c6754a3a20654cddcd5b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Petrifying Gaze Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Petrifying Gaze Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Cassiopeia unleashes a petrifying gaze, dealing magic damage and Stunning enemies facing her for seconds. Enemies facing away are Slowed by % decaying over the same duration instead.
