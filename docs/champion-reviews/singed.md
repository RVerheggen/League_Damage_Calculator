# Singed combat review

Patch: 16.16

## P - Noxious Slipstream

Coverage: out-of-scope

Description signature: e2eda413a495ef50704a0f07329551204d81cbd2e628247ed68bd094ed9fad79

- championDetail: e016916f1ea7579348e2d60f8d5dc21c7f716cc9d010346f1db3f32aba39bcc1
- championBin: 29a03f31a230d7563a9c36583183f6e683aa5dc34dc669a738eeaf5b5a99f5da

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Noxious Slipstream

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Singed drafts off nearby champions, gaining a burst of Move Speed when passing them.

## Q - Poison Trail

Coverage: partial

Description signature: 7d4fcd216b0ebb630acc555c99f1306268db48b0092e3924ed4c6b9413733ab8

- championDetail: e016916f1ea7579348e2d60f8d5dc21c7f716cc9d010346f1db3f32aba39bcc1
- championBin: 29a03f31a230d7563a9c36583183f6e683aa5dc34dc669a738eeaf5b5a99f5da

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Poison Trail Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Poison Trail Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Toggle: Singed lays a poisonous trail that deals magic damage per second.

## W - Mega Adhesive

Coverage: out-of-scope

Description signature: 81deec1356e3194d6515919be4313f49b2adfbfabf9c99ff2cf90f6b18019ea5

- championDetail: e016916f1ea7579348e2d60f8d5dc21c7f716cc9d010346f1db3f32aba39bcc1
- championBin: 29a03f31a230d7563a9c36583183f6e683aa5dc34dc669a738eeaf5b5a99f5da

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Mega Adhesive

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Singed hurls a cask of sticky liquid, Grounding and Slowing enemies in the area by % for seconds.

## E - Fling

Coverage: partial

Description signature: 423c80a3e55e5e094d19781aa8e5d7f10e75a566157400ca42ddbb909ff778b1

- championDetail: e016916f1ea7579348e2d60f8d5dc21c7f716cc9d010346f1db3f32aba39bcc1
- championBin: 29a03f31a230d7563a9c36583183f6e683aa5dc34dc669a738eeaf5b5a99f5da

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Fling Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Fling Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Singed flings an enemy over his shoulder, dealing plus % max Health magic damage. If Singed flings a target into his Mega Adhesive, they are Rooted for seconds.

## R - Insanity Potion

Coverage: unsupported

Description signature: 944cb98678e1f400dc11702cf4fd62bf081cda54d39e5af75a881a6d0fa1c315

- championDetail: e016916f1ea7579348e2d60f8d5dc21c7f716cc9d010346f1db3f32aba39bcc1
- championBin: 29a03f31a230d7563a9c36583183f6e683aa5dc34dc669a738eeaf5b5a99f5da

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Insanity Potion Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Singed drinks a potent brew of chemicals, granting him Ability Power, Armor, Magic Resist, Move Speed, Health Regen, and Mana Regen for seconds. During this effect, Singed's Poison Trail also applies % Grievous Wounds for second.
