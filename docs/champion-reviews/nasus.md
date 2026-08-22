# Nasus combat review

Patch: 16.16

## P - Soul Eater

Coverage: out-of-scope

Description signature: 99c5d24b4add3aa80b86b61a70d4a71d9450dd034957594dffeaf1f7c636ffb8

- championDetail: b49d6d9120f6b8f762b1acfcf131a99cab8528b2c561b21ba17685561b1668d5
- championBin: 0c7cf98aedf702943fea1ce64ce576ceaa224ac90d20dd1cd42de0d400598b2b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Soul Eater

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Nasus drains his foe's spiritual energy, giving him bonus Life Steal.

## Q - Siphoning Strike

Coverage: partial

Description signature: 6478f9fa80a16a16e28e7146faf520c25606a9086702852d5b57b32ef68802bc

- championDetail: b49d6d9120f6b8f762b1acfcf131a99cab8528b2c561b21ba17685561b1668d5
- championBin: 0c7cf98aedf702943fea1ce64ce576ceaa224ac90d20dd1cd42de0d400598b2b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Siphoning Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Siphoning Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Nasus' next Attack deals physical damage. Killing an enemy with this Attack permanently increases its damage by , increased to against champions, large minions and large jungle monsters.

## W - Wither

Coverage: out-of-scope

Description signature: e01b0fc2614f2ca51811089d57ce0b8bc821a60b130ace29bd4321c148bb3799

- championDetail: b49d6d9120f6b8f762b1acfcf131a99cab8528b2c561b21ba17685561b1668d5
- championBin: 0c7cf98aedf702943fea1ce64ce576ceaa224ac90d20dd1cd42de0d400598b2b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Wither

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Nasus ages a champion, Slowing them by %, increasing to % over seconds. Their Attack Speed is also reduced by % of the Slow.

## E - Spirit Fire

Coverage: partial

Description signature: 2faf081b8647e76a17745a78e1bbc3826f83d824cf24f8b12ad8a66e5514cf42

- championDetail: b49d6d9120f6b8f762b1acfcf131a99cab8528b2c561b21ba17685561b1668d5
- championBin: 0c7cf98aedf702943fea1ce64ce576ceaa224ac90d20dd1cd42de0d400598b2b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation InitialDamage was preserved. Stateful and alternate effects require an explicit module.

### Spirit Fire Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Spirit Fire Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Nasus ignites a spirit flame, dealing magic damage. Enemies in the area lose % Armor and take magic damage over seconds.

## R - Fury of the Sands

Coverage: partial

Description signature: fa38a2a78a0f01e997185c3c32d2e1c019590c37e47c886eeebd5cdf24ff766e

- championDetail: b49d6d9120f6b8f762b1acfcf131a99cab8528b2c561b21ba17685561b1668d5
- championBin: 0c7cf98aedf702943fea1ce64ce576ceaa224ac90d20dd1cd42de0d400598b2b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Fury of the Sands Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Fury of the Sands Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Nasus becomes empowered in the sandstorm for 15 seconds, increasing his maximum Health by and Armor and Magic Resistance by . While the storm rages, nearby enemies take of their maximum Health as magic damage each second and Siphoning Strike has a % reduced Cooldown.
