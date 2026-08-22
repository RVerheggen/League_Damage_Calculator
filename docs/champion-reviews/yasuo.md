# Yasuo combat review

Patch: 16.16

## P - Way of the Wanderer

Coverage: unsupported

Description signature: 56975a09745e9759244070304180def60bfcae596448016e8d129ca5e39a2c14

- championDetail: 4fef9a9f1294a5c0b131fa4dcd1161e76fa20019057e485455436cc8557b33f1
- championBin: ebfec0e9c00475ebe5e1ad157e58676c895939f6638bc28ec50047fe3dd25cf2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Way of the Wanderer Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Yasuo's Critical Strike Chance is increased. Additionally, Yasuo builds toward a shield whenever he is moving. The shield triggers when he takes damage from a champion or monster.

## Q - Steel Tempest

Coverage: partial

Description signature: c06d5e1e72a3757928185f96493306c48ab4f1933d0a0f475fd28eec76fd06c1

- championDetail: 4fef9a9f1294a5c0b131fa4dcd1161e76fa20019057e485455436cc8557b33f1
- championBin: ebfec0e9c00475ebe5e1ad157e58676c895939f6638bc28ec50047fe3dd25cf2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Steel Tempest Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Steel Tempest Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Yasuo thrusts, dealing physical damage. If he hits, he gains a stack for seconds. While he has 2 stacks, his next use of this Ability fires a whirlwind from range, dealing the same damage and Knocking Up for second. If used while dashing, this Ability strikes in a circle rather than a stab.

## W - Wind Wall

Coverage: out-of-scope

Description signature: 5d474872bd29c3c711958944781e675e43d9e3ee8b8f5668c04a8bfdb81d85f5

- championDetail: 4fef9a9f1294a5c0b131fa4dcd1161e76fa20019057e485455436cc8557b33f1
- championBin: ebfec0e9c00475ebe5e1ad157e58676c895939f6638bc28ec50047fe3dd25cf2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Wind Wall

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Yasuo creates a drifting wall of wind that blocks all enemy projectiles for 4 seconds.

## E - Sweeping Blade

Coverage: partial

Description signature: 3620abe77b81eacb7cb3d7017b52faa032bec5879e1a7f8358b8eb273ae31483

- championDetail: 4fef9a9f1294a5c0b131fa4dcd1161e76fa20019057e485455436cc8557b33f1
- championBin: ebfec0e9c00475ebe5e1ad157e58676c895939f6638bc28ec50047fe3dd25cf2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Sweeping Blade Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Sweeping Blade Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Yasuo dashes through a target, dealing magic damage. Each use of this Ability grants bonus damage to subsequent uses for seconds, stacking up to times. This Ability has a second per-target Cooldown.

## R - Last Breath

Coverage: partial

Description signature: 69438a2438bed72583d5a13e75afcebfe24e56c7abf515d9ef8810c46fe60e33

- championDetail: 4fef9a9f1294a5c0b131fa4dcd1161e76fa20019057e485455436cc8557b33f1
- championBin: ebfec0e9c00475ebe5e1ad157e58676c895939f6638bc28ec50047fe3dd25cf2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Last Breath Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Last Breath Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Yasuo teleports to an Airborne enemy champion, dealing physical damage and holding all nearby Airborne enemies up for an additional second. Yasuo also gains maximum Flow, but loses all Steel Tempest stacks. Afterwards, Yasuo's critical strikes ignore % bonus Armor for seconds.
