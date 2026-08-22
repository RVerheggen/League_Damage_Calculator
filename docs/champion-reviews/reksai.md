# Rek'Sai combat review

Patch: 16.16

## P - Fury of the Xer'Sai

Coverage: out-of-scope

Description signature: 11ba3e97e5f9244bad59f1d2970c7d532c6765c8e67b72ccdbe2e8622b66223b

- championDetail: 5d4c667bf152cf748d295e5546a2448698b2fa77b426b9a7598793bb46af7ad3
- championBin: e7c0d5d7727baf9649ab1cabaee99493069f2000c818020dd1f13479c70df666

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Fury of the Xer'Sai

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Rek'Sai generates Fury by Attacking and hitting with basic Abilities. She consumes this Fury while Burrowed to restore health.

## Q - Queen's Wrath / Prey Seeker

Coverage: unsupported

Description signature: 133b8cc4c0b8bcde86693522d27dae10624640a4804e21e5c9a98debd3e1c599

- championDetail: 5d4c667bf152cf748d295e5546a2448698b2fa77b426b9a7598793bb46af7ad3
- championBin: e7c0d5d7727baf9649ab1cabaee99493069f2000c818020dd1f13479c70df666

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The unburrowed form grants three attacks whose duration refreshes on each attack. The source is assigned to the limited-attack-state family, but a complete reviewed binding has not been compiled yet.

### Queen's Wrath / Prey Seeker Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: limited-attack-state
- Reason: The unburrowed form grants three attacks whose duration refreshes on each attack. The source is assigned to the limited-attack-state family, but a complete reviewed binding has not been compiled yet.

Unburrowed: Rek'Sai's next 3 Attacks within seconds gain % Attack Speed and deal an additional physical damage to nearby enemies. Attacks refresh the duration of this Ability.

## W - Burrow / Un-burrow

Coverage: out-of-scope

Description signature: f06c1dfe420bb4668caa85c282b835a215ce11eddd64d8706c2cd4d5c49fb37e

- championDetail: 5d4c667bf152cf748d295e5546a2448698b2fa77b426b9a7598793bb46af7ad3
- championBin: e7c0d5d7727baf9649ab1cabaee99493069f2000c818020dd1f13479c70df666

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Burrow / Un-burrow

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Unburrowed: Rek'Sai burrows into the ground, gaining access to new Abilities but cannot Attack. She gains Move Speed, % reduced vision range, and nearby enemies that move and are otherwise unseen will have their positions revealed to Rek'sai and her allies.

## E - Furious Bite / Tunnel

Coverage: partial

Description signature: 2104f2c6a723fa9f2e104a4e262e5304789234affb3c9cb82889a71277bf80b5

- championDetail: 5d4c667bf152cf748d295e5546a2448698b2fa77b426b9a7598793bb46af7ad3
- championBin: e7c0d5d7727baf9649ab1cabaee99493069f2000c818020dd1f13479c70df666

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Furious Bite / Tunnel Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Furious Bite / Tunnel Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Unburrowed: Rek'Sai bites a target, dealing physical damage. At max Fury, the bite deals true damage instead.

## R - Void Rush

Coverage: partial

Description signature: 0f9b381ea653050e6978feb25f61e87f0ef5232f41816902236dd341e830b49a

- championDetail: 5d4c667bf152cf748d295e5546a2448698b2fa77b426b9a7598793bb46af7ad3
- championBin: e7c0d5d7727baf9649ab1cabaee99493069f2000c818020dd1f13479c70df666

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Void Rush Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Void Rush Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Rek'Sai targets an enemy damaged by her in the last seconds and then dives underground, becoming Untargetable. Moments later, she leaps unstoppably at her target, dealing plus % max Health physical damage and resets the cooldown of Burrow / Un-burrow.
