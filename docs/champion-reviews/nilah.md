# Nilah combat review

Patch: 16.16

## P - Joy Unending

Coverage: unsupported

Description signature: f7fe14f0a2e3b7a62ac9f083e8cccb1bc5ded363f9d660574cfe440d1c2cf09b

- championDetail: 0cb7a6c6b75b8344442de02c90c7d9b51ede217cfb9ac25cff90d373574b8da3
- championBin: b3f1b9ebe2576b0bdb7238c910271d10c20411cc912e0dad10a15ac7e4a02cb0

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Joy Unending Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Nilah gains increased experience from last-hitting minions along with the ability to enhance and share nearby healing and shielding from her allies.

## Q - Formless Blade

Coverage: partial

Description signature: b5cdbea6e6abae290c29e740f85098ead8bd797512cf29a18a30f79b3e39fba3

- championDetail: 0cb7a6c6b75b8344442de02c90c7d9b51ede217cfb9ac25cff90d373574b8da3
- championBin: b3f1b9ebe2576b0bdb7238c910271d10c20411cc912e0dad10a15ac7e4a02cb0

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Formless Blade Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Formless Blade Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Passive: Nilah gains Armor Penetration, and her Attacks against champions restore damage dealt as Health. Overhealing from this is converted into a Shield for seconds. Active: Nilah cracks her whip-blade, dealing physical damage. If an enemy unit or structure is hit, Nilah gains 125 Attack Range and % Attack Speed, and her Attacks hit in a cone for seconds.

## W - Jubilant Veil

Coverage: unsupported

Description signature: 7c8c332306f2e2e97a51198f3d7a4e9004ce431e88c4d7d3e5f32bf45a6cd473

- championDetail: 0cb7a6c6b75b8344442de02c90c7d9b51ede217cfb9ac25cff90d373574b8da3
- championBin: b3f1b9ebe2576b0bdb7238c910271d10c20411cc912e0dad10a15ac7e4a02cb0

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The tooltip identifies damage, but the current BIN calculation structure could not be reduced safely.

### Jubilant Veil Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Nilah envelops herself in mist for seconds, becoming Ghosted, gaining % Move Speed, dodging Attacks, and reducing magic damage taken by %. While active, touching allied champions envelops them in mist, granting the same benefits for seconds.

## E - Slipstream

Coverage: partial

Description signature: 291c74793af2ebdc7bf4910f08cb1d908ea2d2cdb880af455dfe5852d4b6fbb4

- championDetail: 0cb7a6c6b75b8344442de02c90c7d9b51ede217cfb9ac25cff90d373574b8da3
- championBin: b3f1b9ebe2576b0bdb7238c910271d10c20411cc912e0dad10a15ac7e4a02cb0

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DashDamage was preserved. Stateful and alternate effects require an explicit module.

### Slipstream Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Slipstream Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Nilah dashes through a unit, dealing physical damage to any enemies she passes through.

## R - Apotheosis

Coverage: partial

Description signature: 4fea4d49eb3ead8ad5cdad0f7079f455702d6a0f03e3669b980daae445ad1032

- championDetail: 0cb7a6c6b75b8344442de02c90c7d9b51ede217cfb9ac25cff90d373574b8da3
- championBin: b3f1b9ebe2576b0bdb7238c910271d10c20411cc912e0dad10a15ac7e4a02cb0

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamagePerTickCalcTooltip was preserved. Stateful and alternate effects require an explicit module.

### Apotheosis Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Apotheosis Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Nilah whirls her whip-blade, dealing physical damage over 1 second, then finishes with a burst of physical damage that also Pulls nearby enemies toward her. Apotheosis heals Nilah and her nearby allies for (+ Formless Blade) of the damage dealt to enemy champions, converting any overhealing into a Shield for seconds.
