# Aurora combat review

Patch: 16.16

## P - Spirit Abjuration

Coverage: unsupported

Description signature: 4af8fae09483221ddfd0db84c42c23f5462d3b445901014fe8617b402d2fbe1a

- championDetail: 0a0566fcebb4aec0b1a15ed8f2d0e311582bb2d0a59c43d0def92a6bd18891e6
- championBin: 8784a338f1839c926ee6ef6f7f7072c522f7b8f0f81202917b6a1da38ae7d0cf

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Spirit Abjuration Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Aurora's spells and attacks exorcise spirits from the enemies she damages. Exorcised spirits follow Aurora around and heal her.

## Q - Twofold Hex

Coverage: partial

Description signature: 8023aa46cc77e0478e440f4ad8c398ebd4627f64e6bca1f2df6c1df900e1334c

- championDetail: 0a0566fcebb4aec0b1a15ed8f2d0e311582bb2d0a59c43d0def92a6bd18891e6
- championBin: 8784a338f1839c926ee6ef6f7f7072c522f7b8f0f81202917b6a1da38ae7d0cf

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Twofold Hex Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Twofold Hex Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Fire cursed energy in a direction, dealing magic damage to enemies and cursing them for seconds. Recast: End the curse, drawing back part of the enemy's spirit to Aurora, dealing up to magic damage to enemies passed through based on their missing Health. Damage beyond the first hit is reduced to 20%. If the duration runs out, Aurora will automatically Recast the Ability.

## W - Across the Veil

Coverage: unsupported

Description signature: 1ada3895057a99c44dc45828b0bbe281d88624b1ab238ad0a5b408c61064535a

- championDetail: 0a0566fcebb4aec0b1a15ed8f2d0e311582bb2d0a59c43d0def92a6bd18891e6
- championBin: 8784a338f1839c926ee6ef6f7f7072c522f7b8f0f81202917b6a1da38ae7d0cf

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Across the Veil Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Hop in a direction. Upon landing, enter the spirit realm, becoming Invisible for seconds and entering Realm Hopper, gaining % Move Speed. Scoring a takedown on an enemy champion resets this Ability's Cooldown.

## E - The Weirding

Coverage: partial

Description signature: 5a636557650c95db75384336054e89347a832ce0b0e548a51bb9774f695c926a

- championDetail: 0a0566fcebb4aec0b1a15ed8f2d0e311582bb2d0a59c43d0def92a6bd18891e6
- championBin: 8784a338f1839c926ee6ef6f7f7072c522f7b8f0f81202917b6a1da38ae7d0cf

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### The Weirding Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### The Weirding Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Converge the realms, sending out a blast of spirit magic dealing magic damage to enemies in the area and Slowing them by % decaying over second. Aurora hops backwards a short distance after casting.

## R - Between Worlds

Coverage: partial

Description signature: 9dbbe898da0cbd97c913911bb19ef6770a4898d537ea7c6db81cf993d7cecb2b

- championDetail: 0a0566fcebb4aec0b1a15ed8f2d0e311582bb2d0a59c43d0def92a6bd18891e6
- championBin: 8784a338f1839c926ee6ef6f7f7072c522f7b8f0f81202917b6a1da38ae7d0cf

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Between Worlds Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Between Worlds Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Leap in a direction. Upon landing, Aurora converges the realms, sending out a pulse of spirit energy that deals magic damage and Slows enemies hit by % for 2 seconds. The area of convergence stays active for seconds, granting Aurora Realm Hopper for seconds, allowing her to jump from one edge of the area to another. Enemies attempting to enter or leave the area are Slowed by % for seconds. Aurora can Recast this Ability to end the effect early.
