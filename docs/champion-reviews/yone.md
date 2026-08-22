# Yone combat review

Patch: 16.16

## P - Way of the Hunter

Coverage: unsupported

Description signature: 440fd5cf2d08a7e0664cfb14e327cc87d53faf99ba79460d616156278a02d8ad

- championDetail: ff6aec371eb336d25c48e5bf7cdfc89c94a6d6eb6ccdecaf47de80a15c35af01
- championBin: 510535683e2a41dfbcd255f62ed03220100f755aaab90eeef97f2f9c73866082

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Way of the Hunter Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Yone deals magic damage with every second Attack. In addition, his critical strike chance is increased.

## Q - Mortal Steel

Coverage: partial

Description signature: 4c02d1172227c6e2cc319ca930d02af3ab27b7923cae4c5f50c9861e56449fdc

- championDetail: ff6aec371eb336d25c48e5bf7cdfc89c94a6d6eb6ccdecaf47de80a15c35af01
- championBin: 510535683e2a41dfbcd255f62ed03220100f755aaab90eeef97f2f9c73866082

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation QDamage was preserved. Stateful and alternate effects require an explicit module.

### Mortal Steel Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Mortal Steel Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Yone thrusts forward, dealing physical damage. On hit, grants a stack for seconds. At 2 stacks, this ability causes Yone to dash forward with a wave of wind that Knocks Up for seconds and deals physical damage.

## W - Spirit Cleave

Coverage: partial

Description signature: 7cbfb88163cea01263f4a0cae5b9de12a61bb37b4d5b6c2d7e5fe719ddead8ae

- championDetail: ff6aec371eb336d25c48e5bf7cdfc89c94a6d6eb6ccdecaf47de80a15c35af01
- championBin: 510535683e2a41dfbcd255f62ed03220100f755aaab90eeef97f2f9c73866082

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation WDamage was preserved. Stateful and alternate effects require an explicit module.

### Spirit Cleave Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Spirit Cleave Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Yone cleaves forward, dealing + % max Health physical damage and + % max Health magic damage. If Yone hits, he gains Shield for seconds. The amount of Shield increases for each champion struck.

## E - Soul Unbound

Coverage: out-of-scope

Description signature: 73700a046209bb499005d1537e0d76ae94dadd5325a9560d6d50b3b863ef2cac

- championDetail: ff6aec371eb336d25c48e5bf7cdfc89c94a6d6eb6ccdecaf47de80a15c35af01
- championBin: 510535683e2a41dfbcd255f62ed03220100f755aaab90eeef97f2f9c73866082

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Soul Unbound

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Yone enters a spirit form for seconds, leaving his body behind for the duration and gaining % to % ramping Move Speed. When the spirit form ends, Yone snaps back to his body and repeats % of all Attack and Ability damage he dealt to champions during this time. You may Recast this ability during spirit form. Recast: End spirit form early.

## R - Fate Sealed

Coverage: partial

Description signature: 63c96ed87a977735a60cd4a10388d299876c854d5ba4b70d06f3f46a0506de7a

- championDetail: ff6aec371eb336d25c48e5bf7cdfc89c94a6d6eb6ccdecaf47de80a15c35af01
- championBin: 510535683e2a41dfbcd255f62ed03220100f755aaab90eeef97f2f9c73866082

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TooltipDamage was preserved. Stateful and alternate effects require an explicit module.

### Fate Sealed Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Fate Sealed Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Yone strikes all enemies along a path for physical damage and magic damage, teleporting behind the last champion hit and Knocking Up victims towards Yone.
