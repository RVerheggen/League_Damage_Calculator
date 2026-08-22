# Vayne combat review

Patch: 16.16

## P - Night Hunter

Coverage: out-of-scope

Description signature: aec91321f64ca736df2f50e971c8e2028f2c976917bd6e34dfa603e132584cce

- championDetail: c58bcb142d45bd835d4010b67798a0ac5fbfa9fb91eb0a44452e517e8a328a8a
- championBin: 8edced0f1e70f79e23d4f43bff1f29bc84b09374ad57f54be7d512591ebbd2c7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Movement is outside the supported damage result.

### Night Hunter Movement

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Movement is outside the supported damage result.

Movement speed while chasing does not change damage, mitigation, shields, or cooldown state in a manually timed duel.

## Q - Tumble

Coverage: modeled

Description signature: 86951d26661bd77d1a6946a415d1f0e2f56bbce0d7be778611ba956b29ef0e98

- championDetail: c58bcb142d45bd835d4010b67798a0ac5fbfa9fb91eb0a44452e517e8a328a8a
- championBin: 8edced0f1e70f79e23d4f43bff1f29bc84b09374ad57f54be7d512591ebbd2c7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Tumble arms a timed next-attack program using patch-ranked total AD and AP formulas.

### Tumble Next Attack

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: arm-next-hit
- Reason: Compiled by the generic arm-next-hit template.

A three-second single-use empowered attack that survives misses and cannot critically strike.

Formula bindings: VayneQ.AttackDamageRatio, VayneQ.APRatio

Value bindings: VayneQ.BuffDuration

## W - Silver Bolts

Coverage: modeled

Description signature: 9b34954220a5922299025a882c8a16c4196eb54b860af14ecab2322325bd396d

- championDetail: c58bcb142d45bd835d4010b67798a0ac5fbfa9fb91eb0a44452e517e8a328a8a
- championBin: 8edced0f1e70f79e23d4f43bff1f29bc84b09374ad57f54be7d512591ebbd2c7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Silver Bolts uses a per-target expiring counter and threshold damage program.

### Silver Bolts

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: stacking-proc
- Reason: Compiled by the generic stacking-proc template.

Basic attacks and Condemn add a per-target stack for 3.5 seconds. At three stacks, all stacks are consumed for true damage.

Formula bindings: VayneW.SilverBoltsDamage

Value bindings: VayneW.StackDuration, VayneW.MaxStacks

## E - Condemn

Coverage: modeled

Description signature: b94e11992b7c3116a4a84d85321ab5a0e9d5fdcd742c6aacd2de5bfc7e80911c

- championDetail: c58bcb142d45bd835d4010b67798a0ac5fbfa9fb91eb0a44452e517e8a328a8a
- championBin: 8edced0f1e70f79e23d4f43bff1f29bc84b09374ad57f54be7d512591ebbd2c7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Condemn direct damage, terrain collision, and Silver Bolts application are modeled.

### Condemn

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The primary packet is generic and the terrain child packet is declarative.

Physical damage applies one Silver Bolts stack. Terrain collision adds a separate 150% bonus packet.

Formula bindings: VayneE.TotalDamage

## R - Final Hour

Coverage: modeled

Description signature: 1952b9c2455039d8461300a77109f51d1c23326962dd64faa0bf557bc24c61a4

- championDetail: c58bcb142d45bd835d4010b67798a0ac5fbfa9fb91eb0a44452e517e8a328a8a
- championBin: 8edced0f1e70f79e23d4f43bff1f29bc84b09374ad57f54be7d512591ebbd2c7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Final Hour uses timed stat state and a declarative Tumble cooldown modifier.

### Final Hour Attack Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: timed-stat-modifier
- Reason: Compiled as timed state and a dynamic stat modifier.

Grants rank-based attack damage for 8 / 10 / 12 seconds.

### Tumble Cooldown

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: cooldown-modifier
- Reason: Compiled as a conditional remaining-cooldown modifier.

Tumble cooldown is reduced while Final Hour is active.

### Movement And Invisibility

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Movement and visibility are outside scope.

Movement speed and invisibility do not alter supported damage state.
