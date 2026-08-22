# Ornn combat review

Patch: 16.16

## P - Living Forge

Coverage: unsupported

Description signature: 385d9edb0659beb0e19b6d412dc93b1174aa2db6fd570870c1ffe42eca980055

- championDetail: 5902978f959f561c285dcb1c20adc62294eab30e882b09b9da5a1d04be87a87b
- championBin: 562dab30a0c2949411c6f248cebfd2b532fda730ec5d10c41804e14cd3a87643

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Living Forge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Ornn gains an additional bonus Armor and Magic Resist from all sources. Ornn can spend gold to forge non-consumable items anywhere. Additionally, he can create masterwork items for himself and for his allies.

## Q - Volcanic Rupture

Coverage: partial

Description signature: 4f04bf7393db4f3a97291c879419a6aacd67135d40010f6fb8c2c90f516b1d5e

- championDetail: 5902978f959f561c285dcb1c20adc62294eab30e882b09b9da5a1d04be87a87b
- championBin: 562dab30a0c2949411c6f248cebfd2b532fda730ec5d10c41804e14cd3a87643

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Volcanic Rupture Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Volcanic Rupture Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ornn slams the ground, creating a fissure dealing physical damage and Slowing by % for seconds. A pillar of rock forms at the fissure's end for seconds.

## W - Bellows Breath

Coverage: modeled

Description signature: e360cdf9583274ce8a9f24059de4ffa14ad8be9c205b28fbc780e05192925ab0

- championDetail: 5902978f959f561c285dcb1c20adc62294eab30e882b09b9da5a1d04be87a87b
- championBin: 562dab30a0c2949411c6f248cebfd2b532fda730ec5d10c41804e14cd3a87643

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Ornn Bellows Breath is executed by a reviewed custom handler that returns generic damage operations.

### Ornn Bellows Breath

- Relevance: attacker
- Disposition: custom
- Coverage: modeled
- Template or handler: champion:516:W
- Reason: A dedicated reviewed handler is retained because the current template vocabulary cannot express the action semantics without distortion.

The selected full-breath result aggregates all ticks into maximum-health damage.

## E - Searing Charge

Coverage: partial

Description signature: fb49f2c1c260ed0639feff52ffb50533bdefcf82b098d1b3f99b07fb112f7609

- championDetail: 5902978f959f561c285dcb1c20adc62294eab30e882b09b9da5a1d04be87a87b
- championBin: 562dab30a0c2949411c6f248cebfd2b532fda730ec5d10c41804e14cd3a87643

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Searing Charge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Searing Charge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ornn charges, dealing physical damage. If Ornn rams into terrain, he creates a shockwave that Knocks Up enemies for seconds and applies the same damage to those not hit by the charge. Ornn's charge destroys magma pillars and terrain created by enemies.

## R - Call of the Forge God

Coverage: partial

Description signature: 904dac494ff419957b853a93bbdeb201ba953dd4e2c2be191c04ef8605883fae

- championDetail: 5902978f959f561c285dcb1c20adc62294eab30e882b09b9da5a1d04be87a87b
- championBin: 562dab30a0c2949411c6f248cebfd2b532fda730ec5d10c41804e14cd3a87643

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Call of the Forge God Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Call of the Forge God Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ornn summons a massive lava elemental, which stampedes towards him, dealing magic damage, applying Brittle to, and Slowing enemies hit by % for seconds. Ornn can Recast to dash with a headbutt. If he dashes into the elemental, he redirects and empowers it, causing it to Knock Up the first champion for second and subsequent champions for seconds. The elemental also deals magic damage and reapplies Brittle.
