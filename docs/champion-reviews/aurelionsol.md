# Aurelion Sol combat review

Patch: 16.16

## P - Cosmic Creator

Coverage: out-of-scope

Description signature: 78fedabc212d86feed86ba80d4d73cd03b148e044a089947bc5b75e4b24be63c

- championDetail: d000a632d0181a7d6ab3822b41f9892a09552d5a79e33f06b389dbd145e0db61
- championBin: 4fe20b48fdc8ae0257e4fea8d301f7b6461b718389dc2c5b4f5bb53fd703ea09

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Cosmic Creator

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Aurelion Sol's damaging Abilities break down enemies into stacks of Stardust, which permanently improves each of his abilities.

## Q - Breath of Light

Coverage: partial

Description signature: e21e4165a86cd58a0d5be46504954de24b74c1a578feee42310645bf1f171b02

- championDetail: d000a632d0181a7d6ab3822b41f9892a09552d5a79e33f06b389dbd145e0db61
- championBin: 4fe20b48fdc8ae0257e4fea8d301f7b6461b718389dc2c5b4f5bb53fd703ea09

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamagePerSecond was preserved. Stateful and alternate effects require an explicit module.

### Breath of Light Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Breath of Light Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Aurelion Sol breathes starfire for up to seconds, dealing magic damage per second to the first enemy hit and % of the damage to surrounding enemies. Each full second of breath on the same enemy deals a burst of magic damage plus max Health magic damage and absorbs Stardust if they are a champion.

## W - Astral Flight

Coverage: unsupported

Description signature: 9ecdd31605ba0c7e9ba12bdf16a8c8580f8868cfc7bf3681b3a2a060ea2c8d7e

- championDetail: d000a632d0181a7d6ab3822b41f9892a09552d5a79e33f06b389dbd145e0db61
- championBin: 4fe20b48fdc8ae0257e4fea8d301f7b6461b718389dc2c5b4f5bb53fd703ea09

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Astral Flight Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Aurelion Sol flies in a direction. While flying, Breath of Light has no Cooldown, no max channel duration, and its flat damage is increased by %. Takedowns on champions within seconds of damaging them refunds % of this Ability's Cooldown. Recast: End flight early.

## E - Singularity

Coverage: partial

Description signature: 24fd4a0b7b73d69ee77e1ddf486a98dd84d28683840eeb4cd115d85a9f08a631

- championDetail: d000a632d0181a7d6ab3822b41f9892a09552d5a79e33f06b389dbd145e0db61
- championBin: 4fe20b48fdc8ae0257e4fea8d301f7b6461b718389dc2c5b4f5bb53fd703ea09

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamagePerSecond was preserved. Stateful and alternate effects require an explicit module.

### Singularity Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Singularity Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Aurelion Sol summons a black hole, dealing magic damage per second and Dragging enemies towards the center for seconds. Enemies in the center below % max Health die instantly. The black hole absorbs Stardust when enemies die within it and each second an enemy champion is inside.

## R - Falling Star / The Skies Descend

Coverage: partial

Description signature: 960075eb623c26ce219d14284b40830ce63424cee5e64281b0ee4b52621af5b9

- championDetail: d000a632d0181a7d6ab3822b41f9892a09552d5a79e33f06b389dbd145e0db61
- championBin: 4fe20b48fdc8ae0257e4fea8d301f7b6461b718389dc2c5b4f5bb53fd703ea09

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MaxDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Falling Star / The Skies Descend Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Falling Star / The Skies Descend Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Aurelion Sol plucks a star from the heavens and crashes it into the earth, dealing magic damage, Stunning enemies second, and absorbing Stardust for each champion hit. Gathering Stardust transforms the next Falling Star into The Skies Descend. The Skies Descend: Aurelion Sol drags a constellation's worth of fury down from the cosmos, dealing magic damage in a larger area, Knocking Up enemies hit for second, and unleashing a massive shockwave that deals magic damage to champions and Epic Monsters and Slows all enemies hit by % for 1 second.
