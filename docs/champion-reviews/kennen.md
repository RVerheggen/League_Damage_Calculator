# Kennen combat review

Patch: 16.16

## P - Mark of the Storm

Coverage: out-of-scope

Description signature: 3f7b0b91f7380963c60e4129c19c83a7fd2a7a044d598c7dfb5179a1db587a1b

- championDetail: d09583f94978f9d615eb2913310ef99884f65ddc5a53e7fe9d48fdd58438c58c
- championBin: a8e1521a3571d2d133c6d3f5b9daee601502acf5f9d4a6c91ec8e5b3786d87f6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Mark of the Storm

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Kennen stuns enemies he hits 3 times with his abilities.

## Q - Thundering Shuriken

Coverage: partial

Description signature: 20d4a011d44d1c3c141ad87d0e61b9a07e0aca8f12632135f0289cf0cf485c98

- championDetail: d09583f94978f9d615eb2913310ef99884f65ddc5a53e7fe9d48fdd58438c58c
- championBin: a8e1521a3571d2d133c6d3f5b9daee601502acf5f9d4a6c91ec8e5b3786d87f6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Thundering Shuriken Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Thundering Shuriken Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Kennen throws a shuriken, dealing magic damage to the first enemy hit.

## W - Electrical Surge

Coverage: unsupported

Description signature: b4309cd71d63c91bfd56fe3385efc0e95b44bd6148c41aead8c370e92fa7232f

- championDetail: d09583f94978f9d615eb2913310ef99884f65ddc5a53e7fe9d48fdd58438c58c
- championBin: a8e1521a3571d2d133c6d3f5b9daee601502acf5f9d4a6c91ec8e5b3786d87f6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Basic attacks advance a fifth-attack bonus-damage cycle. The source is assigned to the attack-cycle family, but a complete reviewed binding has not been compiled yet.

### Electrical Surge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: attack-cycle
- Reason: Basic attacks advance a fifth-attack bonus-damage cycle. The source is assigned to the attack-cycle family, but a complete reviewed binding has not been compiled yet.

Passive: Every 5th Attack deals an additional magic damage %i:OnHit% On-Hit. Active: Kennen sends out a blast of electricity, dealing magic damage to nearby enemies affected by Mark of the Storm.

## E - Lightning Rush

Coverage: partial

Description signature: 929ee12fd1dcdafd4653cf8c90b2874035a140761a4a4d508f01d06d657518e0

- championDetail: d09583f94978f9d615eb2913310ef99884f65ddc5a53e7fe9d48fdd58438c58c
- championBin: a8e1521a3571d2d133c6d3f5b9daee601502acf5f9d4a6c91ec8e5b3786d87f6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Lightning Rush Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Lightning Rush Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Kennen turns into a ball of lightning, gaining % Move Speed, dealing magic damage to enemies he passes through, and becoming Ghosted for seconds. If Kennen damages at least one enemy, he gains Energy. After this ability ends, Kennen gains % Attack Speed for seconds. Critical Strikes extend this duration by second(s). Kennen can Recast to end this Ability early.

## R - Slicing Maelstrom

Coverage: partial

Description signature: dd3379015bb1ab870d18a5b75144033b4d3fc8616564cb395c9293365ddc4bd6

- championDetail: d09583f94978f9d615eb2913310ef99884f65ddc5a53e7fe9d48fdd58438c58c
- championBin: a8e1521a3571d2d133c6d3f5b9daee601502acf5f9d4a6c91ec8e5b3786d87f6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Slicing Maelstrom Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Slicing Maelstrom Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Kennen unleashes a magical storm, dealing magic damage to all nearby enemies every seconds, and gaining Armor and Magic Resist for seconds. Successive hits deal % increased damage for each hit the enemy has already suffered.
