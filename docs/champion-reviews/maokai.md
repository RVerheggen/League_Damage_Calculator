# Maokai combat review

Patch: 16.16

## P - Sap Magic

Coverage: unsupported

Description signature: 80e714836962db260a23c1b709f1713e3501f9a10eddca3c8a2a7f40ad9c8955

- championDetail: ab72fa23eba6ed4065e3f70255fbb6c8ca7fa5e772f14f27af92cdd612b0f052
- championBin: 30d86f86375c1f3b97a4f36445e85c056dec309a97cecbc4e40de4e5cf9a9993

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Sap Magic Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Maokai's basic attack also heals him and deals additional damage on a moderate cooldown. Each time Maokai casts a spell or is struck by an enemy's spell, this cooldown is reduced.

## Q - Bramble Smash

Coverage: partial

Description signature: ecc4c06863d919260d733beb1dcad80e9f0b22cf476e8c1d13f3487eaf2a77a4

- championDetail: ab72fa23eba6ed4065e3f70255fbb6c8ca7fa5e772f14f27af92cdd612b0f052
- championBin: 30d86f86375c1f3b97a4f36445e85c056dec309a97cecbc4e40de4e5cf9a9993

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Bramble Smash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Bramble Smash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Maokai smashes his fist into the ground, dealing plus % max Health magic damage and briefly Slowing. Nearby enemies are also Knocked Back.

## W - Twisted Advance

Coverage: partial

Description signature: 11fec04fdfaa0accb06b13849fdafac46954a40758f242c0fb5de722af3f29e8

- championDetail: ab72fa23eba6ed4065e3f70255fbb6c8ca7fa5e772f14f27af92cdd612b0f052
- championBin: 30d86f86375c1f3b97a4f36445e85c056dec309a97cecbc4e40de4e5cf9a9993

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Twisted Advance Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Twisted Advance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Maokai transforms into a moving mass of roots, becoming Untargetable and dashing to an enemy. Upon arrival, he Roots the enemy for second(s) and deals magic damage.

## E - Sapling Toss

Coverage: partial

Description signature: 7693aad0b4c0b1dec9a4cd7056550b7597079f124700c51eca56543625c5b819

- championDetail: ab72fa23eba6ed4065e3f70255fbb6c8ca7fa5e772f14f27af92cdd612b0f052
- championBin: 30d86f86375c1f3b97a4f36445e85c056dec309a97cecbc4e40de4e5cf9a9993

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Sapling Toss Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Sapling Toss Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Maokai flings a sapling, which stands watch for seconds. Saplings chase nearby enemies, detonating on arrival to deal magic damage and Slow surrounding enemies by % for seconds. Sap Magic's Cooldown is reduced by an additional 4 seconds if the sapling hits an enemy champion or epic monster. If placed in brush, Saplings instead last for seconds and cause a larger explosion, dealing magic damage over seconds and Slowing enemies by .

## R - Nature's Grasp

Coverage: partial

Description signature: ff0ff2e8052fb76f06d232ec59754d7f99c54938f38abf303caedddabc21b53f

- championDetail: ab72fa23eba6ed4065e3f70255fbb6c8ca7fa5e772f14f27af92cdd612b0f052
- championBin: 30d86f86375c1f3b97a4f36445e85c056dec309a97cecbc4e40de4e5cf9a9993

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Nature's Grasp Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Nature's Grasp Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Maokai summons a colossal wave of brambles and thorns, Rooting enemies for to seconds, increasing with distance travelled, and dealing magic damage. Hitting a champion gives Maokai % Move Speed, decaying over seconds.
