# Kog'Maw combat review

Patch: 16.16

## P - Icathian Surprise

Coverage: unsupported

Description signature: 7183e8b79ec583fe8c08dfcc1f0e666b6e2c8f28c8225b149a2ac06d5289e663

- championDetail: 62bcfa36459582c057656178c68db776e8d8a4e472b6e06bec7cc75093c5e3cd
- championBin: 796412c0a16aeb222eea75a4b46d08c9aa504ee0f688ba7a45a4b0f3803fbb04

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Icathian Surprise Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

4 seconds after dying, Kogmaw explodes, dealing true damage to surrounding enemies.

## Q - Caustic Spittle

Coverage: partial

Description signature: 9999e7dd7535b1e50151d422526cf3b7b97fcfaadf8a9c369d6d692eb7d963f5

- championDetail: 62bcfa36459582c057656178c68db776e8d8a4e472b6e06bec7cc75093c5e3cd
- championBin: 796412c0a16aeb222eea75a4b46d08c9aa504ee0f688ba7a45a4b0f3803fbb04

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Caustic Spittle Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Caustic Spittle Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Kog'Maw gains % Attack Speed. Active: Kog'Maw vomits a corrosive projectile that deals magic damage to the first enemy hit and shreds % Armor and Magic Resist for seconds.

## W - Bio-Arcane Barrage

Coverage: modeled

Description signature: 7154fedf5c30eec190ea9a226390f333c7c1f021477afb02bec363435078b52a

- championDetail: 62bcfa36459582c057656178c68db776e8d8a4e472b6e06bec7cc75093c5e3cd
- championBin: 796412c0a16aeb222eea75a4b46d08c9aa504ee0f688ba7a45a4b0f3803fbb04

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Bio-Arcane Barrage applies its patch-ranked maximum-health magic damage to each successful basic attack for eight seconds. Bonus range and the monster cap are outside the champion-target calculation.

### Bio-Arcane Barrage On-Hit

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: timed-on-hit
- Reason: Compiled by the reusable timed-on-hit template.

Casting W empowers every successful basic attack for eight seconds with maximum-health magic damage.

Formula bindings: KogMawW.TotalHealthDamage

Value bindings: KogMawW.Duration

### Bonus Attack Range

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Range does not change a manually selected successful hit.

W grants rank-based attack range while active.

### Monster Damage Cap

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The supported target is a champion.

The on-hit damage is capped against monsters.

## E - Void Ooze

Coverage: partial

Description signature: 7b37c8c36a0cbc3b9813b3cc5ee15fb098f184ca3cf25b54288d167f1533a981

- championDetail: 62bcfa36459582c057656178c68db776e8d8a4e472b6e06bec7cc75093c5e3cd
- championBin: 796412c0a16aeb222eea75a4b46d08c9aa504ee0f688ba7a45a4b0f3803fbb04

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Void Ooze Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Void Ooze Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Kog'Maw spits bile, dealing magic damage and leaving a trail of ooze for seconds. Enemies in the ooze are Slowed by %.

## R - Living Artillery

Coverage: partial

Description signature: d6d034dea9cafaac5523b15604d3c6c6d1b6e75501037d5d8f9d8bb9f4f9997c

- championDetail: 62bcfa36459582c057656178c68db776e8d8a4e472b6e06bec7cc75093c5e3cd
- championBin: 796412c0a16aeb222eea75a4b46d08c9aa504ee0f688ba7a45a4b0f3803fbb04

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Living Artillery Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Living Artillery Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Kog'Maw shoots acid at an area, dealing plus % per 1% missing Health magic damage and revealing enemies hit for 2 seconds. Enemies below 40% Health instead take magic damage. Subsequent shots within seconds cost an additional Mana (max: Mana).
