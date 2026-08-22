# Quinn combat review

Patch: 16.16

## P - Harrier

Coverage: unsupported

Description signature: a56e29f8b26495285781a7f51919bb2e5f59fc52156d07ec592d910d6517b049

- championDetail: beb0500e31fc315bea600fa4fdbbd84210f41de24470f93801d27915d5a9ef21
- championBin: 51f81eb0f16d63334af0388dd92f7bb430a279e54ed68b5bf43550383e3a33f4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Harrier Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Valor, Quinn's Demacian eagle, periodically marks enemies with Harrier. Quinn's first basic attack against Harrier targets will deal bonus physical damage.

## Q - Blinding Assault

Coverage: partial

Description signature: d6c18d6487258b7982db8e60d8a0affe148684dcf084f29a6e7c898ecc0a02ab

- championDetail: beb0500e31fc315bea600fa4fdbbd84210f41de24470f93801d27915d5a9ef21
- championBin: 51f81eb0f16d63334af0388dd92f7bb430a279e54ed68b5bf43550383e3a33f4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Blinding Assault Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Blinding Assault Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Quinn orders Valor to dive, making the first enemy hit with Harrier, reducing their vision radius for seconds and dealing physical damage to all surrounding enemies. If the first enemy struck is not a champion, it is Disarmed for seconds.

## W - Heightened Senses

Coverage: out-of-scope

Description signature: 5f4edf8a14cddf15816e059d5a6b707bc0ec15f379872e0b65c929426c435428

- championDetail: beb0500e31fc315bea600fa4fdbbd84210f41de24470f93801d27915d5a9ef21
- championBin: 51f81eb0f16d63334af0388dd92f7bb430a279e54ed68b5bf43550383e3a33f4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Heightened Senses

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Passive: Attacking a Harrier target grants Quinn % Attack Speed and % Move Speed for seconds. Active: Valor reveals a large area nearby for seconds.

## E - Vault

Coverage: partial

Description signature: 38a29629e4b81a29aa986003a8a641476f3dd3a4ae8b610680d17ca2fcb2b488

- championDetail: beb0500e31fc315bea600fa4fdbbd84210f41de24470f93801d27915d5a9ef21
- championBin: 51f81eb0f16d63334af0388dd92f7bb430a279e54ed68b5bf43550383e3a33f4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Vault Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Vault Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Quinn dashes to an enemy, dealing physical damage and marking them with Harrier. Quinn then leaps backwards from the target, slightly Knocking them Back and Slowing them by %, decaying over seconds.

## R - Behind Enemy Lines

Coverage: partial

Description signature: 6a10e66ae2a6b7a01861b30df24453b45b9e9c669587bb8beb0c27d6895cb1e5

- championDetail: beb0500e31fc315bea600fa4fdbbd84210f41de24470f93801d27915d5a9ef21
- championBin: 51f81eb0f16d63334af0388dd92f7bb430a279e54ed68b5bf43550383e3a33f4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Behind Enemy Lines Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Behind Enemy Lines Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Quinn calls to Valor, pairing up after channeling for 2 seconds gaining % Move Speed and allowing her to Recast this Ability. Attacking or using Blinding Assault or Vault automatically Recasts this Ability. Recast: Quinn and Valor perform an aerial maneuver, dealing physical damage, marking champions with Harrier, and ending this Ability.
