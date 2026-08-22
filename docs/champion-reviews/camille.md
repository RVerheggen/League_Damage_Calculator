# Camille combat review

Patch: 16.16

## P - Adaptive Defenses

Coverage: unsupported

Description signature: bc656fcd51c384616ba7a7f2c156141d3dca3fd506bfddb3dd1b7e4a284f5ba9

- championDetail: e017e5be398c768c3cad701a5893e8a98cc00cb6f4549e8175b1f8ff806048c3
- championBin: 060525d12697b1c4a18c13f14bdec0fce37e91aa58d41ec96b1912237bc779a4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Adaptive Defenses Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Basic attacks on champions grant a shield equal to a percentage of Camille's maximum health against their damage type (Physical or Magic) for a brief duration.

## Q - Precision Protocol

Coverage: partial

Description signature: d226e0f1995f5f6e60a87906e2afabe95ede30f3516859e44c68ac18fcd08459

- championDetail: e017e5be398c768c3cad701a5893e8a98cc00cb6f4549e8175b1f8ff806048c3
- championBin: 060525d12697b1c4a18c13f14bdec0fce37e91aa58d41ec96b1912237bc779a4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BonusDamage was preserved. Stateful and alternate effects require an explicit module.

### Precision Protocol Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Precision Protocol Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Camille's next Attack deals an additional physical damage and grants her % Move Speed for second. This ability can be Recast in the next seconds. If the Recast Attack hits at least seconds after the first, the bonus damage is increased to and of the Attack's damage is converted into true damage. This Ability triggers spell effects upon dealing damage.

## W - Tactical Sweep

Coverage: partial

Description signature: 564ef919d87306c0a3e9d7d53265e82e8ed04e54e4776739f5fdb8351c710acb

- championDetail: e017e5be398c768c3cad701a5893e8a98cc00cb6f4549e8175b1f8ff806048c3
- championBin: 060525d12697b1c4a18c13f14bdec0fce37e91aa58d41ec96b1912237bc779a4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BaseDamageTotal was preserved. Stateful and alternate effects require an explicit module.

### Tactical Sweep Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Tactical Sweep Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Camille winds up and slices, dealing physical damage. Enemies hit by the outer half are Slowed by % decaying over seconds, and they take an additional max Health physical damage. Camille restores % of the bonus damage dealt to champions as Health.

## E - Hookshot

Coverage: partial

Description signature: 80e241783ba08c833e8205b31089b2b96127ffe6b486295d839ff581bf235fa2

- championDetail: e017e5be398c768c3cad701a5893e8a98cc00cb6f4549e8175b1f8ff806048c3
- championBin: 060525d12697b1c4a18c13f14bdec0fce37e91aa58d41ec96b1912237bc779a4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Hookshot Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Hookshot Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Camille fires a hookshot that attaches to terrain, pulling her to it for 1 second and allowing this Ability to be Recast. Recast: Camille dashes from the wall, colliding with the first enemy champion hit. Upon landing, she gains % Attack Speed for seconds, deals physical damage to nearby enemies, and Stuns enemy champions for seconds. Dashes towards enemy champions travel twice as far.

## R - The Hextech Ultimatum

Coverage: unsupported

Description signature: cbf4d4f9667dfb19734ff810eb20685664715df8595a4c88e8e41d82fe8b6e07

- championDetail: e017e5be398c768c3cad701a5893e8a98cc00cb6f4549e8175b1f8ff806048c3
- championBin: 060525d12697b1c4a18c13f14bdec0fce37e91aa58d41ec96b1912237bc779a4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The tooltip identifies damage, but the current BIN calculation structure could not be reduced safely.

### The Hextech Ultimatum Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Camille briefly becomes Untargetable and leaps onto an enemy champion, interrupting channels and locking them into an area they cannot escape by any means for seconds. Other nearby enemies are Knocked Away. Her Attacks against the trapped enemy deal an additional % current Health magic damage.
