# Nautilus combat review

Patch: 16.16

## P - Staggering Blow

Coverage: unsupported

Description signature: aea3a38fd54ae710e3857902547b3e50023479dbc04a1f3c0ab5feab64364176

- championDetail: d803ed75071a6af9c3d09dfd55dfa8c0e60bf9ccc771a8dcb5baf724754b921c
- championBin: d80d008e06bf3d01604e2fe433edfd26d246aaff4ce556f42cb50294def62d5f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Staggering Blow Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Nautilus' first Attack against a target deals increased physical damage and roots them briefly.

## Q - Dredge Line

Coverage: partial

Description signature: 422f4857c54c1a5db6376b703491ef9c80c34f144265cc83c12dfd84b380c3c5

- championDetail: d803ed75071a6af9c3d09dfd55dfa8c0e60bf9ccc771a8dcb5baf724754b921c
- championBin: d80d008e06bf3d01604e2fe433edfd26d246aaff4ce556f42cb50294def62d5f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation QDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Dredge Line Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Dredge Line Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Nautilus hurls his anchor forward. If it hits an enemy, Nautilus drags himself and the target together, dealing magic damage and Stunning them briefly. If the anchor hits terrain, Nautilus will drag himself towards it.

## W - Titan's Wrath

Coverage: partial

Description signature: 6a05a802b0f5c4b3be133bfe0278713af113a795cb2f3c43fe568b372f817d86

- championDetail: d803ed75071a6af9c3d09dfd55dfa8c0e60bf9ccc771a8dcb5baf724754b921c
- championBin: d80d008e06bf3d01604e2fe433edfd26d246aaff4ce556f42cb50294def62d5f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DotDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Titan's Wrath Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Titan's Wrath Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Nautilus gains a Shield for seconds. While the Shield persists, Nautilus' Attacks deal an additional magic damage over 2 seconds to his target and all surrounding enemies.

## E - Riptide

Coverage: partial

Description signature: e5bf39cbdb636e35434fbe86cc8607dc78a55ebbc528f33d94c37518afdd73cb

- championDetail: d803ed75071a6af9c3d09dfd55dfa8c0e60bf9ccc771a8dcb5baf724754b921c
- championBin: d80d008e06bf3d01604e2fe433edfd26d246aaff4ce556f42cb50294def62d5f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Riptide Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Riptide Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Nautilus creates three exploding waves around himself, each dealing magic damage to enemies in the area and Slows them by % decaying over seconds.

## R - Depth Charge

Coverage: partial

Description signature: fbee5b091da8fb693745e88e8b120c0cde3a7ff6143ac02050af7102f455704b

- championDetail: d803ed75071a6af9c3d09dfd55dfa8c0e60bf9ccc771a8dcb5baf724754b921c
- championBin: d80d008e06bf3d01604e2fe433edfd26d246aaff4ce556f42cb50294def62d5f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation PrimaryTargetDamage was preserved. Stateful and alternate effects require an explicit module.

### Depth Charge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Depth Charge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Nautilus fires a shockwave that chases an enemy champion, dealing magic damage, Knocking them Up and Stunning them for seconds. Other enemies hit by the shockwave are also Knocked Up and Stunned and take magic damage.
