# Syndra combat review

Patch: 16.16

## P - Transcendent

Coverage: unsupported

Description signature: 8905a3bf1ca6258be322fd3a444b684cf4ef02285d836cb45d5822e85993a066

- championDetail: 1fcfda11fe8a5a3ed886b0820dde67c97052f13e2850f6ccf077cc0e2638c6f9
- championBin: 67d718217f727d023311d533db7786e905dff1e34121cb4f99023ccd1272c269

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Transcendent Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Syndra collects Splinters of Wrath from gaining levels and damaging enemies which upgrade her abilities. Dark Sphere: Syndra can hold an additional charge Force of Will: Bonus true damage. Scatter the Weak: Increased width and slows all targets Unleashed Power: Executes low health targets

## Q - Dark Sphere

Coverage: partial

Description signature: 9e17ba3a19803f4f369c98f681bfa94e72a65eef6ece56f2cefb991850ac56c9

- championDetail: 1fcfda11fe8a5a3ed886b0820dde67c97052f13e2850f6ccf077cc0e2638c6f9
- championBin: 67d718217f727d023311d533db7786e905dff1e34121cb4f99023ccd1272c269

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Dark Sphere Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Dark Sphere Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Syndra conjures a Dark Sphere, dealing magic damage. The Dark Sphere remains for seconds and can be manipulated by Syndra's other Abilities. Splinters of Wrath: Syndra can store charges of Dark Sphere.

## W - Force of Will

Coverage: partial

Description signature: faccd2a10a739d5c01415efc0315a91852a0fc93e4dd13c1e2e01f4403491b86

- championDetail: 1fcfda11fe8a5a3ed886b0820dde67c97052f13e2850f6ccf077cc0e2638c6f9
- championBin: 67d718217f727d023311d533db7786e905dff1e34121cb4f99023ccd1272c269

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation ThrowDamage was preserved. Stateful and alternate effects require an explicit module.

### Force of Will Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Force of Will Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Syndra grabs a Dark Sphere, enemy minion, or non-epic monster. She drags it with her and can Recast for up to 5 seconds. Recast: Syndra hurls the object, dealing magic damage and Slowing by % for seconds. Splinters of Wrath: This Ability deals an additional true damage.

## E - Scatter the Weak

Coverage: partial

Description signature: f317f661ee9eef1fd7daa26551acae2bb77e28477cc5a30cc505c27e001895e7

- championDetail: 1fcfda11fe8a5a3ed886b0820dde67c97052f13e2850f6ccf077cc0e2638c6f9
- championBin: 67d718217f727d023311d533db7786e905dff1e34121cb4f99023ccd1272c269

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Scatter the Weak Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Scatter the Weak Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Syndra projects a wave of force, Knocking Back enemies and Dark Spheres and dealing magic damage. Dark Spheres that are pushed Stun enemies for seconds and deal magic damage. Splinters of Wrath: This Ability's width is increased and Slows enemies by % for seconds.

## R - Unleashed Power

Coverage: partial

Description signature: fa0d187fbeaad7a645fb4d47266be497c093dd71e8606c6a0c1fc18fd412031d

- championDetail: 1fcfda11fe8a5a3ed886b0820dde67c97052f13e2850f6ccf077cc0e2638c6f9
- championBin: 67d718217f727d023311d533db7786e905dff1e34121cb4f99023ccd1272c269

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Unleashed Power Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Unleashed Power Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Passive: Dark Sphere gains an additional Ability Haste for each rank of Unleashed Power. Syndra draws on her full cataclysmic power, launching the 3 Dark Spheres orbiting her plus up to 4 more nearby at an enemy champion. Each Dark Sphere deals magic damage (max magic damage). Splinters of Wrath: This Ability executes enemies below % Health.
