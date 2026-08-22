# Renekton combat review

Patch: 16.16

## P - Reign of Anger

Coverage: out-of-scope

Description signature: d58fe85991153691a7f128bd75ea8c306654c6682791038d5ea1f9a18d3b5d75

- championDetail: 49fe9b7ddf074904ccc14f1ae1c0c5c64193d9e1380ad46209f751266809c84b
- championBin: 7bbe37378f2c2cf525b80ae39358cf217c4f7c2b11e4837845ed769aededfc20

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Reign of Anger

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Renekton's attacks generate Fury, increased when he is low on life. This Fury can empower his abilities with bonus effects.

## Q - Cull the Meek

Coverage: partial

Description signature: 9dbf7223c576e77f38e25515f195ca206480d045d08547487f839f3f3d45626f

- championDetail: 49fe9b7ddf074904ccc14f1ae1c0c5c64193d9e1380ad46209f751266809c84b
- championBin: 7bbe37378f2c2cf525b80ae39358cf217c4f7c2b11e4837845ed769aededfc20

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Cull the Meek Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Cull the Meek Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Renekton swings his blade, dealing physical damage and restoring Health per non-champion and per champion hit. He also generates Fury per non-champion and Fury per champion. Fury Bonus: Damage is increased to physical damage and healing is increased to Health against non-champions and Health against champions. Does not generate any Fury.

## W - Ruthless Predator

Coverage: partial

Description signature: 024b297ebd82fe8742019659b25493679f92a77edca8c3cd2ceb271929c981be

- championDetail: 49fe9b7ddf074904ccc14f1ae1c0c5c64193d9e1380ad46209f751266809c84b
- championBin: 7bbe37378f2c2cf525b80ae39358cf217c4f7c2b11e4837845ed769aededfc20

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Ruthless Predator Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ruthless Predator Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Renekton's next Attack strikes twice, Stunning for seconds and dealing a total of physical damage. Hitting a champion generates an additional Fury. Fury Bonus: Renekton Attacks 3 times instead, destroying Shields before dealing physical damage and Stunning for seconds. Does not generate any Fury.

## E - Slice and Dice

Coverage: partial

Description signature: 8bfe33a97046c5bdbeb721f86f82345c9a4ff8f9377bad1b2a51278af72e14ad

- championDetail: 49fe9b7ddf074904ccc14f1ae1c0c5c64193d9e1380ad46209f751266809c84b
- championBin: 7bbe37378f2c2cf525b80ae39358cf217c4f7c2b11e4837845ed769aededfc20

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Slice and Dice Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Slice and Dice Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Renekton dashes, dealing physical damage. He generates Fury per non-champion and Fury per champion hit. Hitting at least one enemy allows Renekton to Recast this Ability once for seconds. Fury Bonus: The Recast dash deals physical damage instead and removes % Armor for seconds. Does not generate Fury.

## R - Dominus

Coverage: partial

Description signature: 57145959087adfae8ae81b063a11081e799df283b1ea25e04091b970d313e648

- championDetail: 49fe9b7ddf074904ccc14f1ae1c0c5c64193d9e1380ad46209f751266809c84b
- championBin: 7bbe37378f2c2cf525b80ae39358cf217c4f7c2b11e4837845ed769aededfc20

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Dominus Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Dominus Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Renekton surrounds himself with dark energies for seconds, gaining max Health and Fury. While active, he deals magic damage and gains Fury per second.
