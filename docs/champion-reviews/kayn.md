# Kayn combat review

Patch: 16.16

## P - The Darkin Scythe

Coverage: unsupported

Description signature: 0dc50fec5f82971fe93bf7318ccb176ff25720aa779376acaa6cde047e5d3d26

- championDetail: c4d1c2f62a1c63972ec6f64d8b6e07b4af1446b9489ddf8e8a7b77402d9584be
- championBin: dc751aa48675d7c08a2de0818942d0c3b950c5171f95a47f1811007c00ee08c3

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### The Darkin Scythe Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Kayn wields an ancient weapon and fights Rhaast, the darkin within it, for control. Either the Darkin will triumph, or Kayn will master Rhaast and become the Shadow Assassin. Darkin: Heal for a percentage of spell damage dealt to champions. Shadow Assassin: For the first few seconds in combat with enemy champions, deal bonus damage.

## Q - Reaping Slash

Coverage: partial

Description signature: abc4a09c58ecddcdd36f2fb318f719cc555009edbb4710d29d52fb46b8ba8142

- championDetail: c4d1c2f62a1c63972ec6f64d8b6e07b4af1446b9489ddf8e8a7b77402d9584be
- championBin: dc751aa48675d7c08a2de0818942d0c3b950c5171f95a47f1811007c00ee08c3

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Reaping Slash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Reaping Slash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Kayn dashes then spins his scythe, dealing physical damage to enemies he passes through, then deals the damage again to nearby enemies. Darkin Slayer: Instead deal plus max Health physical damage.

## W - Blade's Reach

Coverage: partial

Description signature: 8e42a0fedaed04b3f07c1ca3c6c6dcc7dfb9065c7ebaee8cd4d404c1abca2d12

- championDetail: c4d1c2f62a1c63972ec6f64d8b6e07b4af1446b9489ddf8e8a7b77402d9584be
- championBin: dc751aa48675d7c08a2de0818942d0c3b950c5171f95a47f1811007c00ee08c3

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Blade's Reach Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Blade's Reach Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Kayn swipes his scythe upward, dealing physical damage and Slowing enemies hit by %, decaying over seconds. Shadow Assassin: Kayn can move while using this Ability and increases its range. Darkin Slayer: Additionally Knocks Up enemies hit for second.

## E - Shadow Step

Coverage: unsupported

Description signature: e840a510d2528d6c8c493623a833c4996e77cf268c33f86de9d3357dba76c75c

- championDetail: c4d1c2f62a1c63972ec6f64d8b6e07b4af1446b9489ddf8e8a7b77402d9584be
- championBin: dc751aa48675d7c08a2de0818942d0c3b950c5171f95a47f1811007c00ee08c3

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Shadow Step Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Kayn gains % Move Speed, becomes Ghosted, and can move through Terrain for seconds. When he first enters terrain, he restores Health. Being Immobilized and spending more than consecutive seconds outside of Terrain ends this Ability early. Shadow Assassin: Gain % Move Speed, Slow immunity, and reduce the Cooldown to seconds.

## R - Umbral Trespass

Coverage: partial

Description signature: a130b784871c38723b04bd28d233d807c02fbae8bd68b2514fcede8dfe3c2b16

- championDetail: c4d1c2f62a1c63972ec6f64d8b6e07b4af1446b9489ddf8e8a7b77402d9584be
- championBin: dc751aa48675d7c08a2de0818942d0c3b950c5171f95a47f1811007c00ee08c3

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Umbral Trespass Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Umbral Trespass Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Passive: Champions damaged by Kayn are marked for 3.15 seconds. Kayn infests a marked enemy, becoming Untargetable. After seconds or after Recasting, Kayn bursts out, dealing physical damage to the enemy. Shadow Assassin: Increases this Ability's range, the distance Kayn exits, and refreshes The Darkin Scythe's Cooldown on exit. Darkin Slayer: Instead deals max Health physical damage and restores Health (% damage amount).
