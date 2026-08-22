# Sylas combat review

Patch: 16.16

## P - Petricite Burst

Coverage: unsupported

Description signature: ac9d8059d54e2e267dd03ebd0d16a01f28bdcfecac5d5577d3dfd6804fb08b7b

- championDetail: 6906ee5a7543997764239e2860726aef1d10932310f3f25f29cd40e38e047169
- championBin: 14cfbe038bb836ce377d7d35cde378019674ddeb400b9f9993023056846fdf10

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Petricite Burst Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

After casting a spell, Sylas stores a charge of Petricite Burst. Sylas's basic attacks will expend a charge and whirl his energized chains around him dealing bonus magic damage to enemies hit. While Sylas has a charge of Petricite Burst, he gains attack speed.

## Q - Chain Lash

Coverage: partial

Description signature: 95f18fd9fea6a0a473ea5a1551036ca0312d919d6d1f02095c9d297c60fe4e5f

- championDetail: 6906ee5a7543997764239e2860726aef1d10932310f3f25f29cd40e38e047169
- championBin: 14cfbe038bb836ce377d7d35cde378019674ddeb400b9f9993023056846fdf10

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Chain Lash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Chain Lash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Sylas lashes his chains out, dealing magic damage and Slowing by for seconds. The place where the chains intersect explodes, dealing a further magic damage.

## W - Kingslayer

Coverage: partial

Description signature: 174949c9b0ab4bf21da000566b44b0a295a4366b5eea7a54cfaa8aa78215574e

- championDetail: 6906ee5a7543997764239e2860726aef1d10932310f3f25f29cd40e38e047169
- championBin: 14cfbe038bb836ce377d7d35cde378019674ddeb400b9f9993023056846fdf10

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MinDamage was preserved. Stateful and alternate effects require an explicit module.

### Kingslayer Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Kingslayer Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Sylas lunges at an enemy with magical force dealing magic damage. Against champions, Sylas restores between and Health based on his missing Health (max healing at or below % Health).

## E - Abscond / Abduct

Coverage: partial

Description signature: f63e237465ac8c9d4a8bc01caa2903f432c3079d03fafe69bb56b0aba7fc1c2d

- championDetail: 6906ee5a7543997764239e2860726aef1d10932310f3f25f29cd40e38e047169
- championBin: 14cfbe038bb836ce377d7d35cde378019674ddeb400b9f9993023056846fdf10

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Abscond / Abduct Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Abscond / Abduct Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Sylas quickly dashes, and prepares a Recast for 3.5 seconds. Recast: Sylas throws his chains, pulling himself to the first enemy hit, dealing magic damage, and Knocking Up for seconds.

## R - Hijack

Coverage: unsupported

Description signature: 89917842ea4514ff5a7cdbdb7c95f8dc8910763749e0723a9fa85c461f9f5d2a

- championDetail: 6906ee5a7543997764239e2860726aef1d10932310f3f25f29cd40e38e047169
- championBin: 14cfbe038bb836ce377d7d35cde378019674ddeb400b9f9993023056846fdf10

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Hijack Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Sylas hijacks an enemy champion, allowing him to cast a copy of their ultimate Ability, based on his Ultimate level and using his stats. Hijacking an enemy places a Cooldown on them for % (modified by Sylas' Ability Haste) of the enemy's ultimate's Cooldown, with a minimum of seconds, during which time Sylas cannot hijack them again.
