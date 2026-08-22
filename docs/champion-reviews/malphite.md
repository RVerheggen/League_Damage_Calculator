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

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

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

Thunderclap's base armor passive, six-second armed attack, first aftershock, and five-second repeated aftershocks are modeled. Granite Shield can triple the passive armor, but live shield loss is not yet linked to this modifier, so that interaction remains visibly incomplete.

### Thunderclap Passive Armor

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: timed-stat-modifier
- Reason: Applied at scenario start from rank data.

An invested W rank grants 10 / 15 / 20 / 25 / 30% armor.

Value bindings: Obduracy.BonusArmorPassive

### Thunderclap Attack Sequence

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: timed-on-hit
- Reason: Compiled as an armed state followed by a timed repeated on-hit state.

Casting W arms the next attack for six seconds. That attack adds the initial damage and an aftershock, then later attacks add aftershocks for five seconds.

Formula bindings: Obduracy.TotalBonusDamage, Obduracy.ThunderclapSplash

Value bindings: MalphiteCleave.Effect3, Obduracy.ThunderclapBuffDuration

### Granite Shield Armor Multiplier

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The runtime does not yet link generated shield depletion and recharge to an active stat modifier. The base passive remains modeled.

The passive armor is tripled while Granite Shield remains active.

### Aftershock Cone

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The supported target is the selected champion hit by the basic attack.

Aftershock also damages enemies in a cone.

### Aftershock Monster Modifier

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The supported target is a champion.

Aftershock has a monster-only damage modifier.

## E - Ground Slam

Coverage: partial

Description signature: f5faf9a99b0a944adc84e1657056ba2630efe9aff717b1a6fdfc890ce5c7b43e

- championDetail: 35a032b532fa8dd8098253eb121deaff9edabb3910d71888c39a5e78116d8945
- championBin: ddd24f5408a6e17e80ad8b0b62691f5be1c8e43bf3cf0118c065b0eadbf92bd6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

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

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

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
