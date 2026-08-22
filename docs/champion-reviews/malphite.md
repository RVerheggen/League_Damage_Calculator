# Malphite combat review

Patch: 16.16

## P - Granite Shield

Coverage: unsupported

Description signature: c277dbe21455cacd268757b7d341d8226bf8e2a4d268012f52ecadb6a6dd2066

- championDetail: 35a032b532fa8dd8098253eb121deaff9edabb3910d71888c39a5e78116d8945
- championBin: ddd24f5408a6e17e80ad8b0b62691f5be1c8e43bf3cf0118c065b0eadbf92bd6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Granite Shield Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Malphite is shielded by a layer of rock which absorbs damage up to 10% of his maximum Health. If Malphite has not been hit for a few seconds, this effect recharges.

## Q - Seismic Shard

Coverage: partial

Description signature: 77353cd964fa4d13c9bb94238542bfead20c746b5e650d3b1ff186db37734b8b

- championDetail: 35a032b532fa8dd8098253eb121deaff9edabb3910d71888c39a5e78116d8945
- championBin: ddd24f5408a6e17e80ad8b0b62691f5be1c8e43bf3cf0118c065b0eadbf92bd6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation QDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Seismic Shard Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Seismic Shard Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Malphite launches a shard of earth at an enemy, dealing magic damage and Slowing them by % for seconds. Malphite also steals the amount Slowed, gaining it as Move Speed for seconds.

## W - Thunderclap

Coverage: partial

Description signature: 190deff158e9dbdc618ac89172f583bf7659722bc2441641a8e009cff68c8cda

- championDetail: 35a032b532fa8dd8098253eb121deaff9edabb3910d71888c39a5e78116d8945
- championBin: ddd24f5408a6e17e80ad8b0b62691f5be1c8e43bf3cf0118c065b0eadbf92bd6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalBonusDamage was preserved. Stateful and alternate effects require an explicit module.

### Thunderclap Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Thunderclap Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Passive: Malphite gains % Armor (%i:scaleArmor%). This effect is increased to % (%i:scaleArmor%) while Granite Shield is active. Active: Malphite's next Attack deals an additional physical damage and creates an aftershock which deals physical damage %i:OnHit% On-Hit in their direction. His Attacks continue to create aftershocks %i:OnHit% On-Hit for the next seconds.

## E - Ground Slam

Coverage: partial

Description signature: f5faf9a99b0a944adc84e1657056ba2630efe9aff717b1a6fdfc890ce5c7b43e

- championDetail: 35a032b532fa8dd8098253eb121deaff9edabb3910d71888c39a5e78116d8945
- championBin: ddd24f5408a6e17e80ad8b0b62691f5be1c8e43bf3cf0118c065b0eadbf92bd6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation EDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Ground Slam Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ground Slam Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Malphite slams the ground, dealing magic damage and reducing Attack Speed by % for seconds.

## R - Unstoppable Force

Coverage: partial

Description signature: 77eb4129359c2bbfff33c506b0b771343045377a64d3fa31dd36d97e463be9d9

- championDetail: 35a032b532fa8dd8098253eb121deaff9edabb3910d71888c39a5e78116d8945
- championBin: ddd24f5408a6e17e80ad8b0b62691f5be1c8e43bf3cf0118c065b0eadbf92bd6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Unstoppable Force Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Unstoppable Force Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Malphite charges with the force of a landslide, dashing Unstoppably. At the end of the dash, Malphite Knocks Up for seconds and deals magic damage.
