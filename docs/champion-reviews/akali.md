# Akali combat review

Patch: 16.16

## P - Assassin's Mark

Coverage: unsupported

Description signature: 28acd9a48d33d2cf64d6e801cd74d3b92c7d4abdc492befda9319ddffca61c99

- championDetail: 715e041c7cf3bc93612c3e79597e8f3d0e5709dc8cf0618acd7d74d310724695
- championBin: d666ed2cf03fac3505d6985748205fb90c06dfd7c7a5d1b98057790131ca5d12

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Assassin's Mark Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next Attack with bonus range and damage.

## Q - Five Point Strike

Coverage: partial

Description signature: dfa034d04a4a96e453603927a5fd6c8c7a9375ba4b8ecdc4481b0c07afc84ea2

- championDetail: 715e041c7cf3bc93612c3e79597e8f3d0e5709dc8cf0618acd7d74d310724695
- championBin: d666ed2cf03fac3505d6985748205fb90c06dfd7c7a5d1b98057790131ca5d12

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Five Point Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Five Point Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Akali slings kunai in an arc, dealing magic damage and Slowing enemies at the tip by % for seconds.

## W - Twilight Shroud

Coverage: out-of-scope

Description signature: 322c53e1dbb329de6a902ed503fdb59d1c513b90ad3b9025f973d7c50bd1d867

- championDetail: 715e041c7cf3bc93612c3e79597e8f3d0e5709dc8cf0618acd7d74d310724695
- championBin: d666ed2cf03fac3505d6985748205fb90c06dfd7c7a5d1b98057790131ca5d12

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Twilight Shroud

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Akali drops a smoke bomb, unleashing a spreading cover of smoke lasting seconds and granting herself % Move Speed decaying over seconds. Akali increases her max Energy by while the shroud is active. While inside the smoke, Akali is Invisible.

## E - Shuriken Flip

Coverage: partial

Description signature: b3f945263f593b04b992829250a84d1dd04d0ff19c6f8591e7eed41141c2ae13

- championDetail: 715e041c7cf3bc93612c3e79597e8f3d0e5709dc8cf0618acd7d74d310724695
- championBin: d666ed2cf03fac3505d6985748205fb90c06dfd7c7a5d1b98057790131ca5d12

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Shuriken Flip Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Shuriken Flip Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Akali flips backwards as she throws a shuriken, dealing magic damage and marking the first enemy or smoke cloud hit. Akali can Recast this once to dash to the marked target, dealing magic damage.

## R - Perfect Execution

Coverage: partial

Description signature: fc46ee8458b10fa7540643c7f66045d1d191045caf1e377ed3053c44c7b3d1d2

- championDetail: 715e041c7cf3bc93612c3e79597e8f3d0e5709dc8cf0618acd7d74d310724695
- championBin: d666ed2cf03fac3505d6985748205fb90c06dfd7c7a5d1b98057790131ca5d12

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Perfect Execution Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Perfect Execution Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Akali vaults over an enemy champion, dealing magic damage to all enemies in her path. Akali can Recast after seconds to execute a piercing thrust, dashing and dealing to magic damage based on missing Health.
