# Seraphine combat review

Patch: 16.16

## P - Stage Presence

Coverage: unsupported

Description signature: c6fa9658142a5aac816de3211e05a31d49bad8700364944a59583e1e8bed254a

- championDetail: d0ffce9b850ebfd373fdfe773cb4daa48b17d2a5a451ce3cab7af76d5f27ff58
- championBin: ab99158a228cafcb5522b79d029b8c736e8ecab5f92eb627986afc194b11e009

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Stage Presence Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Every third basic spell will cast twice from Seraphine. Additionally, casting spells near allies grants her bonus magic damage and range on her next basic attack.

## Q - High Note

Coverage: partial

Description signature: c8206610410c4d0d33ef77d36064195b496e87fcbb7abc88ba58416b5b880866

- championDetail: d0ffce9b850ebfd373fdfe773cb4daa48b17d2a5a451ce3cab7af76d5f27ff58
- championBin: ab99158a228cafcb5522b79d029b8c736e8ecab5f92eb627986afc194b11e009

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### High Note Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### High Note Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Seraphine projects a pure note, dealing magic damage, increased against champions and monsters by the target's missing Health percentage up to damage below % Health.

## W - Surround Sound

Coverage: unsupported

Description signature: b33de4683d29012ca6ad49ee52c512e7f173d1090a70e1271a4ec3e18a4d5c76

- championDetail: d0ffce9b850ebfd373fdfe773cb4daa48b17d2a5a451ce3cab7af76d5f27ff58
- championBin: ab99158a228cafcb5522b79d029b8c736e8ecab5f92eb627986afc194b11e009

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Surround Sound Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Seraphine spurs her nearby allied champions in song, granting them Move Speed, herself decaying Move Speed and both Shield for seconds. If Seraphine is already Shielded, she calls out to her allies to join her, restoring % missing Health to them after a second delay.

## E - Beat Drop

Coverage: partial

Description signature: 2a345210daca6d11fd037d882396709e5a8f336d56bbf249da2a08dd8481e587

- championDetail: d0ffce9b850ebfd373fdfe773cb4daa48b17d2a5a451ce3cab7af76d5f27ff58
- championBin: ab99158a228cafcb5522b79d029b8c736e8ecab5f92eb627986afc194b11e009

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Beat Drop Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Beat Drop Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Seraphine unleashes a heavy soundwave, dealing magic damage to enemies in a line and Slowing them by % for seconds. Enemies that are already Slowed are Rooted instead, and Immobilized enemies are Stunned.

## R - Encore

Coverage: partial

Description signature: 15f44832f28723082215a3a422302d99f1bcf4346fd45e35926a9d1ed31e84dd

- championDetail: d0ffce9b850ebfd373fdfe773cb4daa48b17d2a5a451ce3cab7af76d5f27ff58
- championBin: ab99158a228cafcb5522b79d029b8c736e8ecab5f92eb627986afc194b11e009

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Encore Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Encore Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Seraphine takes the stage, projecting a captivating force that Charms for seconds and deals magic damage. Any champions struck (including allies) become part of the performance, extending the range of this Ability. Allied champions gain maximum Notes.
