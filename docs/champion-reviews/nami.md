# Nami combat review

Patch: 16.16

## P - Surging Tides

Coverage: out-of-scope

Description signature: af5a5d6952406a24a967e35346896f6ef5031301448c969167458d3380035be5

- championDetail: c566dc878f26d938edfb75ec58f3b4419b0f934139b215bf2939b32b781264ea
- championBin: cbc998802ddd47691d3f70ed0341e97137ebc7d72283b03fa1ade74ba8659763

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Surging Tides

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

When Nami's Abilities hit allied champions they gain Move Speed for a short duration.

## Q - Aqua Prison

Coverage: partial

Description signature: 0b9c07ea8615b9454af0f0b6561d9604a96c37c75af3601d57528d144445c35d

- championDetail: c566dc878f26d938edfb75ec58f3b4419b0f934139b215bf2939b32b781264ea
- championBin: cbc998802ddd47691d3f70ed0341e97137ebc7d72283b03fa1ade74ba8659763

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTT was preserved. Stateful and alternate effects require an explicit module.

### Aqua Prison Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Aqua Prison Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Nami hurls a bubble, Stunning for seconds and dealing magic damage.

## W - Ebb and Flow

Coverage: partial

Description signature: 9b87f7a1357f8b8491a11a97b013b9fe670ef58c577e87b6bde31ccf9bace887

- championDetail: c566dc878f26d938edfb75ec58f3b4419b0f934139b215bf2939b32b781264ea
- championBin: cbc998802ddd47691d3f70ed0341e97137ebc7d72283b03fa1ade74ba8659763

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Ebb and Flow Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ebb and Flow Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Nami unleashes a stream of water that bounces between allied and enemy champions. Each champion can only be hit once, and it hits up to targets.Restores Health to allies and will bounce to a nearby enemy champion. Deals magic damage to enemies and will bounce to a nearby allied champion. The damage and healing value is modified by each bounce.

## E - Tidecaller's Blessing

Coverage: partial

Description signature: 82d86be4e15f2868a66f139ec22a23d5129d4df133364949fa8a321b38b77e7a

- championDetail: c566dc878f26d938edfb75ec58f3b4419b0f934139b215bf2939b32b781264ea
- championBin: cbc998802ddd47691d3f70ed0341e97137ebc7d72283b03fa1ade74ba8659763

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Tidecaller's Blessing Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Tidecaller's Blessing Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Nami empowers an allied champion's next Attacks and Abilities for seconds, causing them to Slow their targets by for s and deal an additional magic damage.

## R - Tidal Wave

Coverage: partial

Description signature: 4f50d55b416a7676bb7266c7a9f9dd4ec66bcbb894440c4311318638900e4e81

- championDetail: c566dc878f26d938edfb75ec58f3b4419b0f934139b215bf2939b32b781264ea
- championBin: cbc998802ddd47691d3f70ed0341e97137ebc7d72283b03fa1ade74ba8659763

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Tidal Wave Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Tidal Wave Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Nami summons a tidal wave, Knocking Up for 0.5 seconds, Slowing by %, and dealing magic damage. The duration of the Slow increases based on distance the wave traveled, up to seconds. Allies hit by the wave gain double the effect of Surging Tides.
