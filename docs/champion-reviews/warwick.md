# Warwick combat review

Patch: 16.16

## P - Eternal Hunger

Coverage: unsupported

Description signature: 2f62494097dab7a1d73a96160d721da46cf3d30eaf2612ef3a8dfd9fd03f760c

- championDetail: 58b7fd67ba1010fd0a38bdd299972a08c85289ee8fda07cbf2966d4e51b44fd6
- championBin: 25f5d63424b067bbb5d96b7c257dd6f39a15ff97a8fb9fa29b220f28eda7c28f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Eternal Hunger Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Warwick's basic attacks deal bonus magic damage. If Warwick is below 50% health, he heals the same amount. If Warwick is below 25% health, this healing triples.

## Q - Jaws of the Beast

Coverage: partial

Description signature: c0b87a16c4fd300457714803b0870a9d54faab689386c2db5d911b637d174f9b

- championDetail: 58b7fd67ba1010fd0a38bdd299972a08c85289ee8fda07cbf2966d4e51b44fd6
- championBin: 25f5d63424b067bbb5d96b7c257dd6f39a15ff97a8fb9fa29b220f28eda7c28f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Jaws of the Beast Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Jaws of the Beast Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Tap: Warwick lunges forward and bites, dealing plus % max Health magic damage and healing for % of the damage dealt. Hold: Warwick lunges and clamps his jaws on the target, leaping behind them. While clamped, Warwick follows all movement of the target. After releasing his hold, he does the same damage and healing.

## W - Blood Hunt

Coverage: unsupported

Description signature: 29f12d6abc019cbeb3402d0a13c31e7be6e2137b092401d3e04330830f7fcec1

- championDetail: 58b7fd67ba1010fd0a38bdd299972a08c85289ee8fda07cbf2966d4e51b44fd6
- championBin: 25f5d63424b067bbb5d96b7c257dd6f39a15ff97a8fb9fa29b220f28eda7c28f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Blood Hunt Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Warwick can sense champions below 50% Health, gaining % Move Speed towards them. Spells and attacks against enemies below 50% Health grant % Attack Speed. These effects are increased by 200% against enemies below 25% Health. Active: Warwick can briefly sense all enemies, and gains this Ability's passive effect against the closest champion for 8 seconds, regardless of Health. If no champions are found, this Ability's cooldown is reduced by 30%.

## E - Primal Howl

Coverage: unsupported

Description signature: c96a9c927fa4f747ec1a8ba20289052ffabf98200b8b196025110cde99ee8d57

- championDetail: 58b7fd67ba1010fd0a38bdd299972a08c85289ee8fda07cbf2966d4e51b44fd6
- championBin: 25f5d63424b067bbb5d96b7c257dd6f39a15ff97a8fb9fa29b220f28eda7c28f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Primal Howl Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Warwick gains % damage reduction for seconds. After it ends, Warwick howls, Fearing nearby enemies for second. Warwick can Recast to end the Ability early.

## R - Infinite Duress

Coverage: partial

Description signature: 29767383900ef3e9aa904d9213d82e30764b07674fc26cee702c1163403cf043

- championDetail: 58b7fd67ba1010fd0a38bdd299972a08c85289ee8fda07cbf2966d4e51b44fd6
- championBin: 25f5d63424b067bbb5d96b7c257dd6f39a15ff97a8fb9fa29b220f28eda7c28f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Infinite Duress Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Infinite Duress Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Warwick leaps a huge distance that scales with his Move Speed, Suppressing the first champion he collides with while he channels for seconds. He attacks that champion 3 times over the duration, dealing magic damage. Warwick heals for 100% of all damage dealt during the channel.
