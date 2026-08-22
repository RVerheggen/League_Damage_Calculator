# Miss Fortune combat review

Patch: 16.16

## P - Love Tap

Coverage: unsupported

Description signature: dc175846fa217f452bd0b334d14146300eeea37d1a705fa628adbf81132cef3a

- championDetail: 2dd130ce4566c8fc309117c79e8d233731edf76476dbfd5bb2500dfb5247795a
- championBin: 16b2ab57ced26660fd000f953db86d417bcfed54aea178a86f2cb9c3af27292d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Love Tap Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Miss Fortune deals bonus physical damage whenever she basic attacks a new target.

## Q - Double Up

Coverage: partial

Description signature: 5607d70e561d055f4c3bd79f63e89d5dde1fcc1da23806180b98e611545c1359

- championDetail: 2dd130ce4566c8fc309117c79e8d233731edf76476dbfd5bb2500dfb5247795a
- championBin: 16b2ab57ced26660fd000f953db86d417bcfed54aea178a86f2cb9c3af27292d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Double Up Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Double Up Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Miss Fortune fires a bouncing shot, dealing physical damage to an enemy and to another one behind them. The second shot can critically strike for physical damage. It always critically strikes if the first shot kills its target.

## W - Strut

Coverage: unsupported

Description signature: ac6e167acce9ba090cc0cbbe17bb5b4c800070989cb2f267db3bb3b7a3e8e495

- championDetail: 2dd130ce4566c8fc309117c79e8d233731edf76476dbfd5bb2500dfb5247795a
- championBin: 16b2ab57ced26660fd000f953db86d417bcfed54aea178a86f2cb9c3af27292d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Strut Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: After seconds of not taking damage, Miss Fortune gains Move Speed. After another seconds, this increases to . Active: Gain the passive effect's full Move Speed bonus and % Attack Speed for seconds. Love Taps reduce the Cooldown of this Ability by seconds.

## E - Make It Rain

Coverage: partial

Description signature: 40cd7e3a70afe824b5a782b9f6efd9d38425714f75bd72c7911aeff78c7926d1

- championDetail: 2dd130ce4566c8fc309117c79e8d233731edf76476dbfd5bb2500dfb5247795a
- championBin: 16b2ab57ced26660fd000f953db86d417bcfed54aea178a86f2cb9c3af27292d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamagePerSecond was preserved. Stateful and alternate effects require an explicit module.

### Make It Rain Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Make It Rain Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Miss Fortune rains bullets, revealing an area, Slowing by and dealing magic damage per second for seconds (total magic damage).

## R - Bullet Time

Coverage: partial

Description signature: e75867260db4985c2b3135d691206cb949a3f7f0986238cfe35a2250c722a780

- championDetail: 2dd130ce4566c8fc309117c79e8d233731edf76476dbfd5bb2500dfb5247795a
- championBin: 16b2ab57ced26660fd000f953db86d417bcfed54aea178a86f2cb9c3af27292d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation PhysicalDamagePerWave was preserved. Stateful and alternate effects require an explicit module.

### Bullet Time Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Bullet Time Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Miss Fortune channels a barrage of bullets, firing waves over seconds, dealing physical damage per wave (total physical damage). Each wave can critically strike for %i:scaleCrit% physical damage.
