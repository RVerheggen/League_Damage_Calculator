# Locke combat review

Patch: 16.16

## P - Silver Stake

Coverage: unsupported

Description signature: fdb4f32ebe8619163570e3d69713a4253f9ed484d999066028a3387aff51d07d

- championDetail: 1bcb198ff17955474944c061cdb06fef9816175ea4bfb8762828b427d4b538b3
- championBin: b3727b3b633e94dd5c80a8a997726cdd24cae846cf32727cdaf766b08147131a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Silver Stake Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Locke's attacks deal additional magic damage On-Hit, increased based on enemy missing Health.

## Q - Ritual Nails

Coverage: partial

Description signature: 75e897b37aaa55110a033e37d38d2c787d73cb473053a24aa2df34f3d119d8af

- championDetail: 1bcb198ff17955474944c061cdb06fef9816175ea4bfb8762828b427d4b538b3
- championBin: b3727b3b633e94dd5c80a8a997726cdd24cae846cf32727cdaf766b08147131a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MissileDamage was preserved. Stateful and alternate effects require an explicit module.

### Ritual Nails Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ritual Nails Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Locke readies a set of Soul Nails to throw, dealing magic damage and marking enemies hit. Nails apply a //% Slow for // seconds, stacking with the amount of nails hit. Attacking the enemy consumes the Soul Nails, dealing magic damage per stack, increased by % and % for two and three nails respectively.

## W - Soul Ignition

Coverage: partial

Description signature: 5df35275e26c40b16b7981fde14173ec075fd0efcced382371d148840dd9fa4e

- championDetail: 1bcb198ff17955474944c061cdb06fef9816175ea4bfb8762828b427d4b538b3
- championBin: b3727b3b633e94dd5c80a8a997726cdd24cae846cf32727cdaf766b08147131a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageRestoreAmount was preserved. Stateful and alternate effects require an explicit module.

### Soul Ignition Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Soul Ignition Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Locke ignites his own soul, gaining Attack Speed and Move Speed that decays over seconds. For seconds, he suffers % current Health true damage per second but Heals back the last damage taken, and an additional Health based on missing Health and time passed, up to a maximum of Health remaining. Can be Recast to end early.

## E - Ashen Pursuit

Coverage: partial

Description signature: c713d7d6d24602d5a3c40f134b85579e1e9e02ed735ac3b7b61757de0d78c04f

- championDetail: 1bcb198ff17955474944c061cdb06fef9816175ea4bfb8762828b427d4b538b3
- championBin: b3727b3b633e94dd5c80a8a997726cdd24cae846cf32727cdaf766b08147131a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation OnHitDamage was preserved. Stateful and alternate effects require an explicit module.

### Ashen Pursuit Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ashen Pursuit Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Locke teleports to a location, dealing magic damage to nearby enemies on arrival. On his next Attack, he dashes to his target, dealing magic damage to all enemies in his path. Each hit consumes Soul Nails. If Locke scores a takedown, the Cooldown of this Ability is reset.

## R - Purgatory

Coverage: partial

Description signature: e6b4f7820ad00e00f5607487a75834cee67b5aa5fb3a1509c4d8dd9c632de688

- championDetail: 1bcb198ff17955474944c061cdb06fef9816175ea4bfb8762828b427d4b538b3
- championBin: b3727b3b633e94dd5c80a8a997726cdd24cae846cf32727cdaf766b08147131a

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Purgatory Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Purgatory Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Locke throws a binding artifact to a location, dealing magic damage and Slowing enemies in the area by %, decaying over seconds. The artifact marks enemies hit for seconds, sealing away marked enemy champions brought below , and resetting the duration of the mark on other affected champions. After the duration ends, if at least one champion was sealed, the artifact lands on the ground. Locke can pick up the artifact to permanently increase its execution threshold by %, and refund % of his total Cooldown, for each champion sealed.
