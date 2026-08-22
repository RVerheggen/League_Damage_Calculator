# Cho'Gath combat review

Patch: 16.16

## P - Carnivore

Coverage: out-of-scope

Description signature: 840f4dd4f3b7f99372b3e6cf7ea0987ede0f9b10cf01f81c2f7ebf1d06775836

- championDetail: 35ee141ffca546c460eb7259b3945f769b6aa45b9a99e29820e970bcf5e46ad2
- championBin: 179a31b32f3a860b1f619b26ea660167e77335d9da2bc0809f0924706727a110

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Carnivore

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level.

## Q - Rupture

Coverage: partial

Description signature: e30f3fde38c2ed78d31fa2cd3f5501ef9adcf53f2e1c5014c50e3cc6850e2e3b

- championDetail: 35ee141ffca546c460eb7259b3945f769b6aa45b9a99e29820e970bcf5e46ad2
- championBin: 179a31b32f3a860b1f619b26ea660167e77335d9da2bc0809f0924706727a110

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Rupture Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Rupture Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Cho'Gath ruptures the ground, Knocking Up enemies for second, dealing magic damage, and Slowing them by % for seconds.

## W - Feral Scream

Coverage: partial

Description signature: cdfd5f817e10b950bf0ba2c02520e5259344ce055a403f10a8ee60dfbe2e1ed1

- championDetail: 35ee141ffca546c460eb7259b3945f769b6aa45b9a99e29820e970bcf5e46ad2
- championBin: 179a31b32f3a860b1f619b26ea660167e77335d9da2bc0809f0924706727a110

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Feral Scream Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Feral Scream Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Cho'Gath roars, Silencing enemies for seconds and dealing magic damage.

## E - Vorpal Spikes

Coverage: modeled

Description signature: 478d4ac06d8efd4316ef3e902e858f0c891c7b808df0e08b435895c29e0290ca

- championDetail: 35ee141ffca546c460eb7259b3945f769b6aa45b9a99e29820e970bcf5e46ad2
- championBin: 179a31b32f3a860b1f619b26ea660167e77335d9da2bc0809f0924706727a110

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Vorpal Spikes empowers the next three successful basic attacks for six seconds. Each hit uses the selected Feast stack input in its patch-ranked maximum-health magic damage. Slow, range, and monster-only behavior do not change champion-target damage.

### Vorpal Spikes Attacks

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: limited-attack-state
- Reason: Compiled by the reusable limited-attack-state template.

Casting E empowers the next three successful basic attacks for six seconds with flat and maximum-health magic damage. Feast stacks are a typed pre-combat input.

Formula bindings: VorpalSpikes.FlatDamageCalc, VorpalSpikes.MaxHealthPercentCalc

Value bindings: VorpalSpikes.MaximumAttacks, VorpalSpikes.BuffDuration, VorpalSpikes.FeastStackMultiplier

### Vorpal Spikes Slow

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Movement and crowd control do not change a manually selected successful hit.

Each spike slows its target.

### Vorpal Spikes Range

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Attack range does not change a manually selected successful hit.

E grants attack range while attacks remain.

### Vorpal Spikes Monster Cap

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The supported target is a champion.

The maximum-health packet is capped against monsters.

## R - Feast

Coverage: partial

Description signature: 6a3d38a63c97b47cd6708636ac54bfa4d6b21be4009c7f08e1164c698ce1456f

- championDetail: 35ee141ffca546c460eb7259b3945f769b6aa45b9a99e29820e970bcf5e46ad2
- championBin: 179a31b32f3a860b1f619b26ea660167e77335d9da2bc0809f0924706727a110

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Feast Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Feast Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Cho'Gath ravenously feeds on an enemy, dealing true damage to champions or to minions or jungle monsters. If this kills the target, Cho'Gath gains a stack, which causes him to grow in size and gain max Health. Only stacks can be gained from minions and non-epic jungle monsters.
