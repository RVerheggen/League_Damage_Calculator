# Lillia combat review

Patch: 16.16

## P - Dream-Laden Bough

Coverage: unsupported

Description signature: af5bfa8866873ede1746ba35a1e4f4a7d95b61c3d088d9c75b54184c78e299d3

- championDetail: 353957d63cf967a4d9d352cf83eea584b394432013a8d4259b1cf2f7a765fe22
- championBin: 0650f7fad421e395c1671791b1c5e16f4c609e9f227b43003d3db6ca31d2e492

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Dream-Laden Bough Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Hitting a champion or monster with a skill will deal additional max Health damage over time.

## Q - Blooming Blows

Coverage: partial

Description signature: d928cfae09732dd34c8b8fe5420ddd9aebdce31aca61dcbab0178fe1a913a82f

- championDetail: 353957d63cf967a4d9d352cf83eea584b394432013a8d4259b1cf2f7a765fe22
- championBin: 0650f7fad421e395c1671791b1c5e16f4c609e9f227b43003d3db6ca31d2e492

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Blooming Blows Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Blooming Blows Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Passive: Lillia's Ability hits grant Move Speed for seconds, stacking up to times. Active: Lillia whirls her censer, dealing magic damage, plus an additional true damage at the outer edge.

## W - Watch Out! Eep!

Coverage: partial

Description signature: 2957cacf73d792ebcf0a09a7f01abe7f8f0f1fbca18c4f621d4dad40e9195c13

- championDetail: 353957d63cf967a4d9d352cf83eea584b394432013a8d4259b1cf2f7a765fe22
- championBin: 0650f7fad421e395c1671791b1c5e16f4c609e9f227b43003d3db6ca31d2e492

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation FlatDamage was preserved. Stateful and alternate effects require an explicit module.

### Watch Out! Eep! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Watch Out! Eep! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Lillia winds up a huge strike, dealing magic damage. Enemies in the center take damage instead.

## E - Swirlseed

Coverage: partial

Description signature: 424f9f07a26b82b93d2bf90b3ce43604b79ef49b205ff9ea48e69f5142a9e08e

- championDetail: 353957d63cf967a4d9d352cf83eea584b394432013a8d4259b1cf2f7a765fe22
- championBin: 0650f7fad421e395c1671791b1c5e16f4c609e9f227b43003d3db6ca31d2e492

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation ImpactDamageTotal was preserved. Stateful and alternate effects require an explicit module.

### Swirlseed Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Swirlseed Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Lillia lobs a swirlseed overhead, dealing magic damage where it lands and revealing and Slowing them by % for seconds. If no enemies are hit, the seed rolls until it hits an enemy or collides with terrain.

## R - Lilting Lullaby

Coverage: partial

Description signature: 548e56351d2d5296612e1a79482f2de8106b5de5a79e0009e31dd3044856d34e

- championDetail: 353957d63cf967a4d9d352cf83eea584b394432013a8d4259b1cf2f7a765fe22
- championBin: 0650f7fad421e395c1671791b1c5e16f4c609e9f227b43003d3db6ca31d2e492

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Lilting Lullaby Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Lilting Lullaby Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Lillia causes all enemy champions with Dream Dust to become Drowsy for seconds. Afterward, they fall Asleep for seconds. When awakened by damage, they take an additional magic damage.
