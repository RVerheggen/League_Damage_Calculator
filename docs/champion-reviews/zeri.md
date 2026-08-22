# Zeri combat review

Patch: 16.16

## P - Living Battery

Coverage: unsupported

Description signature: 3d333d851301092554e5da678e46aebd04cedace29fdc97fa4028ee13799a3ae

- championDetail: c19b3fba9db978266d0f2e3b83c47e0dea398aaa7c25422e8eb463b6659fadf1
- championBin: dccfbe633aed16678910bf4f8be6aa53ba68ebb049b09f4f47c1779da09c2974

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Living Battery Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Zeri's Attacks deal magic damage and are treated as Abilities. Moving and casting Burst Fire stores up energy in Zeri's Sparkpack. When fully charged her next Attack deals bonus damage.

## Q - Burst Fire

Coverage: partial

Description signature: 673875e606a5f6f8e049abc6119f6e8fe879aaafe1f5c4f3b2b3f10e1876831a

- championDetail: c19b3fba9db978266d0f2e3b83c47e0dea398aaa7c25422e8eb463b6659fadf1
- championBin: dccfbe633aed16678910bf4f8be6aa53ba68ebb049b09f4f47c1779da09c2974

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Burst Fire Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Burst Fire Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Zeri fires a burst of rounds that deals physical damage to the first enemy hit. This Ability is treated as an Attack.

## W - Ultrashock Laser

Coverage: partial

Description signature: b3846ed6c7b0d2ef89755704595b1a0327e15c3ef32fdf50e21864d4dcd3e45b

- championDetail: c19b3fba9db978266d0f2e3b83c47e0dea398aaa7c25422e8eb463b6659fadf1
- championBin: dccfbe633aed16678910bf4f8be6aa53ba68ebb049b09f4f47c1779da09c2974

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Ultrashock Laser Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ultrashock Laser Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Zeri fires an electric pulse that deals physical damage and Slows the first enemy hit by % for seconds. If the pulse hits terrain, it expands into a laser that applies the effects in an area and Critically Strikes champions and monsters for physical damage.

## E - Spark Surge

Coverage: unsupported

Description signature: fe4379b92b3791f66b3dfb05787e06abdca7495d3f729e911cc256bbe99d6fd1

- championDetail: c19b3fba9db978266d0f2e3b83c47e0dea398aaa7c25422e8eb463b6659fadf1
- championBin: dccfbe633aed16678910bf4f8be6aa53ba68ebb049b09f4f47c1779da09c2974

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The post-dash state adds repeated magic damage and attack-driven cooldown reduction. The source is assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Spark Surge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The post-dash state adds repeated magic damage and attack-driven cooldown reduction. The source is assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Zeri dashes a short distance and vaults over any terrain she touches, greatly extending the dash range. For the next seconds, her shots of Burst Fire pierce dealing % damage to enemies after the first and an additional magic damage On-Hit to the first target struck. Hitting an enemy with an Attack reduces this Ability's cooldown by seconds. Critical strikes reduce the cooldown by seconds instead.

## R - Lightning Crash

Coverage: partial

Description signature: 90e0ac984c609315625cb4557558b2f5bfdb69c3a98db943c2be8380dc246051

- championDetail: c19b3fba9db978266d0f2e3b83c47e0dea398aaa7c25422e8eb463b6659fadf1
- championBin: dccfbe633aed16678910bf4f8be6aa53ba68ebb049b09f4f47c1779da09c2974

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Lightning Crash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Lightning Crash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Zeri discharges a nova of electricity, dealing magic damage to nearby enemies. If she hits an enemy champion, Zeri gains % Attack Speed and % Move Speed for seconds. Hitting an enemy champion with an Attack or Ability extends this ability's duration and adds a stack of Overcharge for seconds. Critical strikes add 2 additional stacks. Each stack grants % Move Speed. During this time, Burst Fire becomes a faster triple shot that chains physical damage to nearby enemies.
