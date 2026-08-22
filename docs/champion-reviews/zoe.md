# Zoe combat review

Patch: 16.16

## P - More Sparkles!

Coverage: unsupported

Description signature: 60af694aab721e27c4198f4f2d017b0ec237fa08b8819bf6f3eaf2504e56b7c7

- championDetail: beea46979b7e4a00d5efaea82463c7c3755e30e7d24b86bf7059b96618fe2338
- championBin: 059fc3d0df85900414669c4eb7c0641377e24f99047ba8d4f4c7a13bf0052a12

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### More Sparkles! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Zoe's next basic attack after casting a spell deals bonus magic damage.

## Q - Paddle Star!

Coverage: partial

Description signature: 7d17ed32b6b7b1a2da7236490ce382cfde68430db1ca7d3935d9c68ecbc406a0

- championDetail: beea46979b7e4a00d5efaea82463c7c3755e30e7d24b86bf7059b96618fe2338
- championBin: 059fc3d0df85900414669c4eb7c0641377e24f99047ba8d4f4c7a13bf0052a12

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Paddle Star! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Paddle Star! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Zoe fires a star that deals increasing damage the further it travels to the first enemy hit and surrounding enemies -- between to magic damage. Zoe can Recast this Ability to redirect the missile to a new position near Zoe.

## W - Spell Thief

Coverage: partial

Description signature: 57345c8333c536fce5422ec6a2fa21ca8a71fb023f6704234cf53d8fffb4f2ba

- championDetail: beea46979b7e4a00d5efaea82463c7c3755e30e7d24b86bf7059b96618fe2338
- championBin: 059fc3d0df85900414669c4eb7c0641377e24f99047ba8d4f4c7a13bf0052a12

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MissileDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Spell Thief Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Spell Thief Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Passive: Enemies drop spell shards when casting a Summoner Spell or using an Active Item. Specific minions also drop a spell shard when Zoe or a nearby ally kills them. Zoe can pick up this shard to cast that ability once. Passive: When Zoe casts this Ability or any Summoner Spell, she gains % Move Speed for seconds and tosses 3 missiles at the target she Attacked most recently. These missiles deal magic damage each. Active: Cast the Ability from a spell shard Zoe has picked up.

## E - Sleepy Trouble Bubble

Coverage: partial

Description signature: dfc3ec250d381be83f28a0959bdfc77134708bc5a521849412fc7a99cad1a75e

- championDetail: beea46979b7e4a00d5efaea82463c7c3755e30e7d24b86bf7059b96618fe2338
- championBin: 059fc3d0df85900414669c4eb7c0641377e24f99047ba8d4f4c7a13bf0052a12

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Sleepy Trouble Bubble Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Sleepy Trouble Bubble Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Zoe dropkicks a bubble that deals magic damage, lingering as a trap if it hits nothing. The bubble's range is extended when flying over terrain. If either the bubble or trap hits an enemy champion she refreshes % of her cooldown. After a delay, the victim falls Asleep and have their Magic Resist reduced by % for 2 seconds. Attacks and Ability hits wake them up but deal double damage, up to true damage.

## R - Portal Jump

Coverage: out-of-scope

Description signature: d24137c3decbb3d551741d80f3839d99c9b722431a4760b4049366cde25ae35d

- championDetail: beea46979b7e4a00d5efaea82463c7c3755e30e7d24b86bf7059b96618fe2338
- championBin: 059fc3d0df85900414669c4eb7c0641377e24f99047ba8d4f4c7a13bf0052a12

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Portal Jump

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Zoe teleports to a nearby position for 1 second. Afterwards, she teleports back. Zoe can use Abilities and Attack, but can't move during this time.
