# Qiyana combat review

Patch: 16.16

## P - Royal Privilege

Coverage: unsupported

Description signature: aa9b31a818836cc86d9d9a9de775e6ebca0ed835e21d621e2826288925751dd3

- championDetail: 889f8f12790d36b6b295ee99e6027c6f8a294c3b39fee5f1b5f3bf10a819279c
- championBin: 0cb360ebe6bd2f07793bd36574d6c132093a41b684339311bfc9196bedcf1f2c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Royal Privilege Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Qiyana's first basic attack or ability against each enemy deals bonus damage.

## Q - Elemental Wrath / Edge of Ixtal

Coverage: partial

Description signature: 349ad08823fe26321e6f6b6889ee171f1f418802ed663dc31170dae07cb1740b

- championDetail: 889f8f12790d36b6b295ee99e6027c6f8a294c3b39fee5f1b5f3bf10a819279c
- championBin: 0cb360ebe6bd2f07793bd36574d6c132093a41b684339311bfc9196bedcf1f2c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation VanillaDamage was preserved. Stateful and alternate effects require an explicit module.

### Elemental Wrath / Edge of Ixtal Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Elemental Wrath / Edge of Ixtal Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

If Qiyana does not have an Enchantment, she slashes, dealing physical damage to enemies in a small area. If she does, this Ability gains extra range and an additional effect based on the type of Enchantment:Ice Enchantment: Briefly Roots, then Slows by % for second.Rock Enchantment: Deals an additional physical damage to units below % Health.Wild Enchantment: Leaves a trail that turns Qiyana Invisible and grants % Move Speed.

## W - Terrashape

Coverage: partial

Description signature: 94600730a8ac2a6652c078e522fbb83fd2b5167c4b480fa28550b64592e880b9

- championDetail: 889f8f12790d36b6b295ee99e6027c6f8a294c3b39fee5f1b5f3bf10a819279c
- championBin: 0cb360ebe6bd2f07793bd36574d6c132093a41b684339311bfc9196bedcf1f2c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation OnHitDamage was preserved. Stateful and alternate effects require an explicit module.

### Terrashape Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Terrashape Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: While Qiyana's weapon is Enchanted, she gains % Attack Speed and her Attacks deal an additional magic damage. She also gains % Move Speed while out of combat near the corresponding terrain type. Active: Qiyana dashes towards a nearby brush, terrain, or river and Enchants her weapon with that particular terrain type. This refreshes Elemental Wrath / Edge of Ixtal's Cooldown.

## E - Audacity

Coverage: partial

Description signature: 6a2aba25cbd810d789b64cf528087b95a984b429220d48121dd1a57b3322ee0a

- championDetail: 889f8f12790d36b6b295ee99e6027c6f8a294c3b39fee5f1b5f3bf10a819279c
- championBin: 0cb360ebe6bd2f07793bd36574d6c132093a41b684339311bfc9196bedcf1f2c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Audacity Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Audacity Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Qiyana dashes through an enemy and deals physical damage to them.

## R - Supreme Display of Talent

Coverage: partial

Description signature: c3549355862eba59331ee81c0a73c4cffc31d528a8b60c1b50772965176893a1

- championDetail: 889f8f12790d36b6b295ee99e6027c6f8a294c3b39fee5f1b5f3bf10a819279c
- championBin: 0cb360ebe6bd2f07793bd36574d6c132093a41b684339311bfc9196bedcf1f2c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Supreme Display of Talent Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Supreme Display of Talent Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Qiyana launches a shockwave that Knocks Back enemies and detonates when it hits terrain. The explosion follows the entire edge of the terrain, Stunning for between 0.5 and seconds and dealing plus max Health physical damage. Stun duration scales down with distance the shockwave has travelled. Any river or brush the shockwave passes through also explode after a delay for the same damage and Stun.
