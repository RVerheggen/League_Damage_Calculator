# Samira combat review

Patch: 16.16

## P - Daredevil Impulse

Coverage: unsupported

Description signature: 17346fe04a56312eb128299bcd61681001cc4223628ec87d02ea51a25fd0745d

- championDetail: 69c4bb71a88da34575c58986b5a88f0e294b8a8af83a2dd66a6e25e26b22ad36
- championBin: b5417dd41951b2f269cba9e90c2b89c54c831fa84bfcf7ea2aab161af3c97d6d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Daredevil Impulse Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Samira builds a combo by hitting attacks or abilities unique from the previous hit. Samira's attacks in melee range deal additional magic damage. Samira's attacks against enemies affected by Immobilizing effects will dash her to her attack range. If the enemy is Knocked Up, she also keeps them Knocked Up briefly.

## Q - Flair

Coverage: partial

Description signature: 8c1d39dc9e39adbd2063ee58094c8bef0655e3a6d841995702167f894c7f711c

- championDetail: 69c4bb71a88da34575c58986b5a88f0e294b8a8af83a2dd66a6e25e26b22ad36
- championBin: b5417dd41951b2f269cba9e90c2b89c54c831fa84bfcf7ea2aab161af3c97d6d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Flair Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Flair Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Samira fires a shot, dealing physical damage to the first enemy hit. If this Ability is cast towards an enemy in melee range, Samira will instead slash with her sword, dealing physical damage.

## W - Blade Whirl

Coverage: partial

Description signature: fe227109d6bd5b36774ad19c49fb31923afaacf1fd60f7439b209b2174efe79d

- championDetail: 69c4bb71a88da34575c58986b5a88f0e294b8a8af83a2dd66a6e25e26b22ad36
- championBin: b5417dd41951b2f269cba9e90c2b89c54c831fa84bfcf7ea2aab161af3c97d6d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Blade Whirl Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Blade Whirl Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Samira slashes around her for seconds, damaging enemies twice for physical damage each and destroying any enemy missiles that enter the area.

## E - Wild Rush

Coverage: partial

Description signature: 3f1fcbba7e7171a9a0fbb6fce0ac59e2941bc3865f89f2879b0a48685c66e78a

- championDetail: 69c4bb71a88da34575c58986b5a88f0e294b8a8af83a2dd66a6e25e26b22ad36
- championBin: b5417dd41951b2f269cba9e90c2b89c54c831fa84bfcf7ea2aab161af3c97d6d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DashDamage was preserved. Stateful and alternate effects require an explicit module.

### Wild Rush Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Wild Rush Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Samira dashes through an enemy (including structures), slashing enemies she passes through dealing magic damage and gaining % Attack Speed for seconds. If an enemy champion is killed within 3 seconds of Samira damaging them, This Ability's Cooldown is reset.

## R - Inferno Trigger

Coverage: partial

Description signature: f5a63a78efd1400c147e7e1aba0b1b844904b48a4716ff60a36ceef1cc52402f

- championDetail: 69c4bb71a88da34575c58986b5a88f0e294b8a8af83a2dd66a6e25e26b22ad36
- championBin: b5417dd41951b2f269cba9e90c2b89c54c831fa84bfcf7ea2aab161af3c97d6d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Inferno Trigger Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Inferno Trigger Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Samira can only use this Ability if her current Style rating is S. Using this Ability consumes all Style rating. Samira unleashes a torrent of shots from her weapons, wildly shooting all enemies surrounding her 10 times over 2 seconds, each shot dealing physical damage and applying Life Steal at % effectiveness. Each shot can also critically strike.
