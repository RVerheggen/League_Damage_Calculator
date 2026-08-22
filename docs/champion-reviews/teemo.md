# Teemo combat review

Patch: 16.16

## P - Guerrilla Warfare

Coverage: unsupported

Description signature: bb7a6aad8d31245a80c1a3aca0c71d4d6ed84142e00d4ef8f98c9c8c546d3ae9

- championDetail: f977b60c0ae96cdefad0d2c3a7ead8296c1d6a571f915ec0f154b1905b3a1b08
- championBin: ae096fce5940c7ff81f4ec13e33cf37d11d134e91b9eee9eed3355dabeffe9ea

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Guerrilla Warfare Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

If Teemo stands still and takes no actions for a short duration, he becomes Invisible indefinitely. If he's in brush, Teemo can enter and maintain his Invisibility while moving. After leaving Invisibility, Teemo gains the Element of Surprise, increasing his Attack Speed for a few seconds.

## Q - Blinding Dart

Coverage: partial

Description signature: 659c91e9bf6c47c1e88197cc42e9d32705e082c2f12f5b8d1b1692e62fabf628

- championDetail: f977b60c0ae96cdefad0d2c3a7ead8296c1d6a571f915ec0f154b1905b3a1b08
- championBin: ae096fce5940c7ff81f4ec13e33cf37d11d134e91b9eee9eed3355dabeffe9ea

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Blinding Dart Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Blinding Dart Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Teemo fires a dart, Blinding the target for seconds and dealing magic damage.

## W - Move Quick

Coverage: out-of-scope

Description signature: a23932243de76a47d5de2b34a795df627db4e93a6ece0ec002f612e4dacf09bb

- championDetail: f977b60c0ae96cdefad0d2c3a7ead8296c1d6a571f915ec0f154b1905b3a1b08
- championBin: ae096fce5940c7ff81f4ec13e33cf37d11d134e91b9eee9eed3355dabeffe9ea

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Move Quick

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Passive: Teemo gains % Move Speed while he hasn't been damaged by a champion or turret in the last seconds. Active: Teemo sprints, gaining % Move Speed that is not lost when struck for seconds.

## E - Toxic Shot

Coverage: partial

Description signature: e5843f4b1346cacc52f50bf9dbdd9ca041d6307cf499b646790145f481df113d

- championDetail: f977b60c0ae96cdefad0d2c3a7ead8296c1d6a571f915ec0f154b1905b3a1b08
- championBin: ae096fce5940c7ff81f4ec13e33cf37d11d134e91b9eee9eed3355dabeffe9ea

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Toxic Shot Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Toxic Shot Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Passive: Teemo's Attacks apply poison %i:OnHit% On-Hit, dealing an additional magic damage plus magic damage over seconds.

## R - Noxious Trap

Coverage: partial

Description signature: 1b10fa19a72764e9808ef31456f3068b87d34eb0252f0e36707bbee5567a072c

- championDetail: f977b60c0ae96cdefad0d2c3a7ead8296c1d6a571f915ec0f154b1905b3a1b08
- championBin: ae096fce5940c7ff81f4ec13e33cf37d11d134e91b9eee9eed3355dabeffe9ea

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Noxious Trap Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Noxious Trap Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Teemo tosses a mushroom trap that detonates when stepped on. The traps Slow by % and deal magic damage over seconds. Enemies are revealed for the same duration. Traps last minutes and are stealthed. A mushroom tossed onto another mushroom bounces before landing at its position. This Ability has charges ( second refresh).
