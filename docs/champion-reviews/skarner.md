# Skarner combat review

Patch: 16.16

## P - Threads of Vibration

Coverage: unsupported

Description signature: 5dd69cedfc3916ca8c0438eaeac3d4a05e3f152153ca38a65023c6974407fd3e

- championDetail: 7994ba6f1b2f16c108ac6d906d8970bd983618f0bc5986fc825c82ebbe40be78
- championBin: d259d291d99fdd6b823ca17d8b3b7796f924ca0a361fbe68bb1737c6fbab0efd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Threads of Vibration Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Skarner's Attacks, Shattered Earth, Upheaval, and Impale, apply Quaking. At max stacks of Quaking, enemies take max Health magic damage over its duration.

## Q - Shattered Earth / Upheaval

Coverage: unsupported

Description signature: 09d47651949904c38ada1c1d988b3bf0ebc834212bf777fe46cd7f35f1e9d1ca

- championDetail: 7994ba6f1b2f16c108ac6d906d8970bd983618f0bc5986fc825c82ebbe40be78
- championBin: d259d291d99fdd6b823ca17d8b3b7796f924ca0a361fbe68bb1737c6fbab0efd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Three attacks are empowered and the final attack has a separate damage result. The source is assigned to the limited-attack-state family, but a complete reviewed binding has not been compiled yet.

### Shattered Earth / Upheaval Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: limited-attack-state
- Reason: Three attacks are empowered and the final attack has a separate damage result. The source is assigned to the limited-attack-state family, but a complete reviewed binding has not been compiled yet.

Skarner rips a boulder from the ground, empowering his next 3 Attacks with % Attack Speed and dealing physical damage to surrounding enemies. His final Attack will deal an additional % max Health physical damage and Slow affected foes by % for s. Recast: Skarner ends this Ability and throws his boulder, dealing + % max Health physical damage, and additionally Slowing the first enemy hit - and any other surrounding enemies - by % for s.

## W - Seismic Bastion

Coverage: partial

Description signature: e420128d4cce8403ef290cabba650cc2e7f6080ccb88f0145e7356ddd538da9f

- championDetail: 7994ba6f1b2f16c108ac6d906d8970bd983618f0bc5986fc825c82ebbe40be78
- championBin: d259d291d99fdd6b823ca17d8b3b7796f924ca0a361fbe68bb1737c6fbab0efd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Seismic Bastion Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Seismic Bastion Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Skarner gains Shield for s and triggers an earthquake that deals magic damage and Slows nearby enemies by % for s.

## E - Ixtal's Impact

Coverage: partial

Description signature: 4ba917e01f2c2e11b186eebb39452774dca5ccc037fa1834b2cf92afb84fc3a5

- championDetail: 7994ba6f1b2f16c108ac6d906d8970bd983618f0bc5986fc825c82ebbe40be78
- championBin: d259d291d99fdd6b823ca17d8b3b7796f924ca0a361fbe68bb1737c6fbab0efd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Ixtal's Impact Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ixtal's Impact Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Skarner charges forward, steering toward the chosen direction and ignoring terrain. If he runs into a champion or large monster, Skarner drags them along for the rest of his charge. Colliding into a wall with an enemy in tow deals physical damage to the enemy and Stuns them for s. Skarner can Recast this Ability to end his charge early.

## R - Impale

Coverage: partial

Description signature: f8bcbc238c5b77053d96152555415b9318c42e1ebaedc01358dfe6e38cdd2482

- championDetail: 7994ba6f1b2f16c108ac6d906d8970bd983618f0bc5986fc825c82ebbe40be78
- championBin: d259d291d99fdd6b823ca17d8b3b7796f924ca0a361fbe68bb1737c6fbab0efd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Impale Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Impale Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Skarner's tails lash forward, dealing magic damage and Suppressing the first 3 champions he hits for s. Those hit are dragged along by Skarner for the duration of this Ability. If Skarner hits at least one champion he gains % Move Speed for seconds. If Shattered Earth is active, Skarner will cast Upheaval first.
