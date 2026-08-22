# Twisted Fate combat review

Patch: 16.16

## P - Loaded Dice

Coverage: out-of-scope

Description signature: 77775e3498c1b1b189ec517cc4d63daec13de2ea667ba6cc80faa8c7f2fb1522

- championDetail: ea4dc5ab5a676baebdad48f5e2154d1d72e4ecb9cc873dd713fc16922d4326a7
- championBin: 142efd4a6c4b4356e9568758f51ce331f3fe5a80a5e4d73f12f5dd22465a2d2f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Loaded Dice

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Upon killing a unit, Twisted Fate rolls his 'lucky' dice receiving 1 to 6 bonus gold.

## Q - Wild Cards

Coverage: partial

Description signature: e7a16e4a2a737f09093ac576bb542ab1b482a0536c6a8fb05c941cda55b2a273

- championDetail: ea4dc5ab5a676baebdad48f5e2154d1d72e4ecb9cc873dd713fc16922d4326a7
- championBin: 142efd4a6c4b4356e9568758f51ce331f3fe5a80a5e4d73f12f5dd22465a2d2f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Wild Cards Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Wild Cards Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Twisted Fate throws three cards that deal magic damage each.

## W - Pick a Card

Coverage: partial

Description signature: f779bd24c07b049ca36af33c1ad032c6869519b4ef94e9a7ac04bf322e0bfcf0

- championDetail: ea4dc5ab5a676baebdad48f5e2154d1d72e4ecb9cc873dd713fc16922d4326a7
- championBin: 142efd4a6c4b4356e9568758f51ce331f3fe5a80a5e4d73f12f5dd22465a2d2f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BlueDamage was preserved. Stateful and alternate effects require an explicit module.

### Pick a Card Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Pick a Card Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Twisted Fate begins shuffling his deck, allowing him to Recast to lock in one of three cards and enhance his next Attack. The Blue Card deals magic damage and restores Mana.The Red Card deals to nearby enemies and Slows by % for 2.5 seconds.The Gold Card deals and Stuns for seconds.

## E - Stacked Deck

Coverage: partial

Description signature: f223aae7a2bbb21f62b108c4280b9bcf5432159d5f56e7bf70cbb3dd0122b17d

- championDetail: ea4dc5ab5a676baebdad48f5e2154d1d72e4ecb9cc873dd713fc16922d4326a7
- championBin: 142efd4a6c4b4356e9568758f51ce331f3fe5a80a5e4d73f12f5dd22465a2d2f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BonusDamage was preserved. Stateful and alternate effects require an explicit module.

### Stacked Deck Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Stacked Deck Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Twisted Fate gains % Attack Speed and every 4th Attack deals an additional magic damage.

## R - Destiny

Coverage: out-of-scope

Description signature: 849272679993110ae193a9b996d09aac31cba2716644e3ae05e0f8db9ee91ef7

- championDetail: ea4dc5ab5a676baebdad48f5e2154d1d72e4ecb9cc873dd713fc16922d4326a7
- championBin: 142efd4a6c4b4356e9568758f51ce331f3fe5a80a5e4d73f12f5dd22465a2d2f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Destiny

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Twisted Fate focuses on his cards, granting True Sight of all enemy champions on the map for seconds and allowing him to Recast. Recast: Twisted Fate teleports up to units away.
