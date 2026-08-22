# Blitzcrank combat review

Patch: 16.16

## P - Mana Barrier

Coverage: unsupported

Description signature: c32e77338800868cc1a4ecb62b815990935e384a77a0d321caca23ea5ae3787e

- championDetail: 1a1aa793247764a47eaef9663a04ab38d6476d02d852d510532749b438a6fa4a
- championBin: 056fc501180c25af58fb7525530b124f8f584089e66f92adc6df8af46ba50171

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Mana Barrier Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Blitzcrank gains a shield based on their mana when dropping to low health.

## Q - Rocket Grab

Coverage: partial

Description signature: 83820f64dc6df5ed5395c6e7ab64ccdd826916a84584b3df6dbca14697dbac55

- championDetail: 1a1aa793247764a47eaef9663a04ab38d6476d02d852d510532749b438a6fa4a
- championBin: 056fc501180c25af58fb7525530b124f8f584089e66f92adc6df8af46ba50171

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Rocket Grab Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Rocket Grab Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Blitzcrank fires their right hand, Pulling the first enemy hit towards them and dealing magic damage.

## W - Overdrive

Coverage: out-of-scope

Description signature: c1298c82b79496006f0d899c538ee62ad56009fdc6737e918c4a2801f4d0c794

- championDetail: 1a1aa793247764a47eaef9663a04ab38d6476d02d852d510532749b438a6fa4a
- championBin: 056fc501180c25af58fb7525530b124f8f584089e66f92adc6df8af46ba50171

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Overdrive

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Blitzcrank supercharges themself, gaining % decaying Move Speed and % Attack Speed for seconds. Afterwards, Blitzcrank is Slowed by % for seconds.

## E - Power Fist

Coverage: modeled

Description signature: ed408bf3d16b056b9b147ac77039791e8cda4e619c0ac59a8a61569db09551fc

- championDetail: 1a1aa793247764a47eaef9663a04ab38d6476d02d852d510532749b438a6fa4a
- championBin: 056fc501180c25af58fb7525530b124f8f584089e66f92adc6df8af46ba50171

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Power Fist is compiled as a timed single-use empowered attack.

### Power Fist

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: arm-next-hit
- Reason: Compiled by the reusable arm-next-hit template.

Arms the next qualifying hit for 5 seconds.

## R - Static Field

Coverage: partial

Description signature: 8a4330b67488d3a07d72418277b00071a20e52778514dac5b67192b10789f323

- championDetail: 1a1aa793247764a47eaef9663a04ab38d6476d02d852d510532749b438a6fa4a
- championBin: 056fc501180c25af58fb7525530b124f8f584089e66f92adc6df8af46ba50171

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Static Field Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Static Field Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Passive: While this ability is available, lightning charges Blitzcrank's fists, marking those Attacked. After 1 second, they are shocked for magic damage. Active: Blitzcrank overcharges, dealing magic damage and Silencing nearby enemies for seconds. Their shields are also destroyed.
