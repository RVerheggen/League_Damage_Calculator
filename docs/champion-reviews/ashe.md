# Ashe combat review

Patch: 16.16

## P - Frost Shot

Coverage: unsupported

Description signature: 3714ec5208c4a87aaa4f289ac56bc2cbb598d48220dd4dc3813aa98166e1928b

- championDetail: 5301c33ad038fd0046abed4b9f5153b2d6e5995b601e06114ef41f04b5a54b11
- championBin: 102b9437b9534fdc64dfa77c0428fb46efac81670e68b914f561e2155cf3754d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Frost Shot Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Ashe's attacks slow their target, causing her to deal increased damage to these targets. Ashe's critical strikes deal no bonus damage but apply an empowered slow to the target.

## Q - Ranger's Focus

Coverage: partial

Description signature: beb9dec6e95c8bbe6b2b8d9eca527aec63a0d5fc15473b5b4724f44b168ed2cd

- championDetail: 5301c33ad038fd0046abed4b9f5153b2d6e5995b601e06114ef41f04b5a54b11
- championBin: 102b9437b9534fdc64dfa77c0428fb46efac81670e68b914f561e2155cf3754d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation EmpoweredDamage was preserved. Stateful and alternate effects require an explicit module.

### Ranger's Focus Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ranger's Focus Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Ashe's Attacks grant a stack for seconds. At stacks, she may activate this Ability. Active: Ashe gains % Attack Speed and her Attacks deal damage instead for seconds.

## W - Volley

Coverage: partial

Description signature: 7d374a33661f6cfacebb35f7b335e971c7c4037c4138d72666b00eebb6b8d504

- championDetail: 5301c33ad038fd0046abed4b9f5153b2d6e5995b601e06114ef41f04b5a54b11
- championBin: 102b9437b9534fdc64dfa77c0428fb46efac81670e68b914f561e2155cf3754d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Volley Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Volley Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Ashe fires a volley of arrows, each dealing physical damage. Enemies can be hit by multiple arrows, but only take damage from the first.

## E - Hawkshot

Coverage: out-of-scope

Description signature: 69e24e5617a25cf572e0b2b8eba6ae4f492335ff4cdfd22faed948f7a7f61488

- championDetail: 5301c33ad038fd0046abed4b9f5153b2d6e5995b601e06114ef41f04b5a54b11
- championBin: 102b9437b9534fdc64dfa77c0428fb46efac81670e68b914f561e2155cf3754d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Hawkshot

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Ashe sends forth a hawk to grant vision for 5 seconds anywhere on the map. It also reveals the area around it as it flies. This Ability has 2 charges ( second recharge).

## R - Enchanted Crystal Arrow

Coverage: partial

Description signature: 41ad9bb73f8fd9b0254759d04f7ca19584c3393b7d6b8d344b80cda751dca9b2

- championDetail: 5301c33ad038fd0046abed4b9f5153b2d6e5995b601e06114ef41f04b5a54b11
- championBin: 102b9437b9534fdc64dfa77c0428fb46efac81670e68b914f561e2155cf3754d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RMainDamage was preserved. Stateful and alternate effects require an explicit module.

### Enchanted Crystal Arrow Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Enchanted Crystal Arrow Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ashe launches a crystal arrow of ice that Stuns the first champion hit and deals magic damage. The Stun duration increases with distance travelled, up to seconds. Surrounding enemies are Slowed by Frost Shot.
