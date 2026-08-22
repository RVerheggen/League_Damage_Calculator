# Fiddlesticks combat review

Patch: 16.16

## P - A Harmless Scarecrow

Coverage: out-of-scope

Description signature: a98dadf3206a3317d1aa8062436db1d77ed830d12bfed11c08c3847dcec7d9a1

- championDetail: d26d96853d4fd2a36a13b5c7b4fa8b293e0b2a3586f28912be8609a0f5d9e373
- championBin: 896437ee9e102288f7577f2a3d8bf20bd398ddb758559c79d7de5d29a42c62fa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### A Harmless Scarecrow

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Fiddlesticks' trinket is replaced by scarecrow effigies.

## Q - Terrify

Coverage: partial

Description signature: 94aac5e5ca3595a79e8fa88d1483974d2afc221b3036cdb0048b8a6a1143d3e6

- championDetail: d26d96853d4fd2a36a13b5c7b4fa8b293e0b2a3586f28912be8609a0f5d9e373
- championBin: 896437ee9e102288f7577f2a3d8bf20bd398ddb758559c79d7de5d29a42c62fa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Terrify Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Terrify Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Passive: While unseen and out of combat or impersonating an Effigy, damaging an enemy with an ability Fears them for second(s). Active: Fear an enemy for second(s) and deal current Health magic damage. If the target has recently been Feared by Fiddlesticks, instead deal current Health magic damage.

## W - Bountiful Harvest

Coverage: partial

Description signature: f9150d313e33ffa3c1840b681317d51138fa331baa0936e350146999ebf8d9c9

- championDetail: d26d96853d4fd2a36a13b5c7b4fa8b293e0b2a3586f28912be8609a0f5d9e373
- championBin: 896437ee9e102288f7577f2a3d8bf20bd398ddb758559c79d7de5d29a42c62fa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Bountiful Harvest Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Bountiful Harvest Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Fiddlesticks channels and drains the souls of nearby enemies, dealing magic damage per second for 2 seconds, plus % missing Health magic damage at the end. Fiddlesticks restores % of damage as Health. If Fiddlesticks ends the channel without interruption, the remaining Cooldown is reduced by 60%.

## E - Reap

Coverage: partial

Description signature: bd6df2d75df05760306f89a352f049c414842220a6f9ee469e67d15e611a652b

- championDetail: d26d96853d4fd2a36a13b5c7b4fa8b293e0b2a3586f28912be8609a0f5d9e373
- championBin: 896437ee9e102288f7577f2a3d8bf20bd398ddb758559c79d7de5d29a42c62fa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Reap Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Reap Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Fiddlesticks unleashes dark magic, dealing magic damage and Slowing by % for seconds. Enemies in the center are also Silenced for the duration.

## R - Crowstorm

Coverage: partial

Description signature: 2f70e4d0a6aa2cc4be0c4b708678b349cca41816c8b2bfdb4bf6cd2b0e59e348

- championDetail: d26d96853d4fd2a36a13b5c7b4fa8b293e0b2a3586f28912be8609a0f5d9e373
- championBin: 896437ee9e102288f7577f2a3d8bf20bd398ddb758559c79d7de5d29a42c62fa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Crowstorm Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Crowstorm Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Fiddlesticks channels for seconds, then teleports and unleashes a murder of crows, dealing magic damage over seconds.
