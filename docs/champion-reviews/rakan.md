# Rakan combat review

Patch: 16.16

## P - Fey Feathers

Coverage: unsupported

Description signature: af2d70c5aa335c7d8e1ed57ea3cbc9348fbcb0bcc5000789e271369383f43f48

- championDetail: 140924c1193b551e1ba27008d85b6078132ce46a0bb98e22c658443d36c76335
- championBin: 632d5ab39f38108181f8c482136a7f2b43c69e86a08d95d49ad3e62abb10ff51

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Fey Feathers Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Rakan periodically gains a shield.

## Q - Gleaming Quill

Coverage: partial

Description signature: 50f7ca6812b44e3c53d65844d6cc3a36afdd3b10158d61905ff2cccb7d84566b

- championDetail: 140924c1193b551e1ba27008d85b6078132ce46a0bb98e22c658443d36c76335
- championBin: 632d5ab39f38108181f8c482136a7f2b43c69e86a08d95d49ad3e62abb10ff51

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Gleaming Quill Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Gleaming Quill Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Rakan flings a magical feather that deals magic damage to the first enemy hit. If the feather hits a champion or epic jungle monster, Rakan restores Health to himself and nearby allies after seconds or when he touches an allied champion.

## W - Grand Entrance

Coverage: partial

Description signature: 7970619378a64a3a2b0fa820a833e52895020751ce1c0ae3de3f1913d6618f91

- championDetail: 140924c1193b551e1ba27008d85b6078132ce46a0bb98e22c658443d36c76335
- championBin: 632d5ab39f38108181f8c482136a7f2b43c69e86a08d95d49ad3e62abb10ff51

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Grand Entrance Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Grand Entrance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Rakan dashes, then spirals into the air, Knocking Up for second and dealing magic damage.

## E - Battle Dance

Coverage: unsupported

Description signature: e1ac3b4d11d42258b619d1332304c6d4ac96ad5f77cc702458cc7833a1f0beb5

- championDetail: 140924c1193b551e1ba27008d85b6078132ce46a0bb98e22c658443d36c76335
- championBin: 632d5ab39f38108181f8c482136a7f2b43c69e86a08d95d49ad3e62abb10ff51

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Battle Dance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Rakan dashes to an allied champion, granting them Shield for seconds. Rakan can Recast this Ability once within seconds.

## R - The Quickness

Coverage: partial

Description signature: 3ca828a874400e1a4946815f87a3c5f495508b06d2b850a4c429bac51f809ae8

- championDetail: 140924c1193b551e1ba27008d85b6078132ce46a0bb98e22c658443d36c76335
- championBin: 632d5ab39f38108181f8c482136a7f2b43c69e86a08d95d49ad3e62abb10ff51

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### The Quickness Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### The Quickness Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Rakan gains % Move Speed for seconds. Rakan deals magic damage and Charms enemies for second(s) the first time he touches them. The first champion touched grants Rakan % decaying Move Speed.
