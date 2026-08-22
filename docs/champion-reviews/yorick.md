# Yorick combat review

Patch: 16.16

## P - Shepherd of Souls

Coverage: out-of-scope

Description signature: 66b6b82bcd8f96a39f5f161a579c5b2d6175b026f8e1b43ad856246123debec2

- championDetail: c9f6313b6bdd9276c09d28bf1d042c4e127d825a41d283bd6c935fff125c110c
- championBin: d6d5d6f384fc04690109fc1d12d6a63ae7481dc01b3e1fb462fb27ae2188eaa9

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Shepherd of Souls

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

The Cursed Horde: Yorick can summon Mist Walkers to swarm and attack nearby enemies.

## Q - Last Rites

Coverage: partial

Description signature: 34844da4398613e42ed3c5c5d512152308498ae54017025df8a5abffdb92bdaf

- championDetail: c9f6313b6bdd9276c09d28bf1d042c4e127d825a41d283bd6c935fff125c110c
- championBin: d6d5d6f384fc04690109fc1d12d6a63ae7481dc01b3e1fb462fb27ae2188eaa9

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Last Rites Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Last Rites Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Yorick's next Attack deals an additional physical damage and restores plus % of his missing Health, reduced by % against non-Champions. If this Attack hits a Champion or large Monster or kills the target, it leaves a grave. When there are 3 or more graves nearby and this Ability has already been used, Yorick can Recast to raise Mist Walkers from all nearby graves.

## W - Dark Procession

Coverage: out-of-scope

Description signature: e3165206cc4e80619288b9e016a95ee95db9eb60fe095a6a5b7b0540a2278720

- championDetail: c9f6313b6bdd9276c09d28bf1d042c4e127d825a41d283bd6c935fff125c110c
- championBin: d6d5d6f384fc04690109fc1d12d6a63ae7481dc01b3e1fb462fb27ae2188eaa9

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Dark Procession

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Yorick summons a wall of spirits blocking enemies' path, but not allies'. The wall has Health and disappears after seconds.

## E - Mourning Mist

Coverage: partial

Description signature: 64f98c8806d53c464db123e59b21b7e7668d4838ccab4363456af1be7c6a85cc

- championDetail: c9f6313b6bdd9276c09d28bf1d042c4e127d825a41d283bd6c935fff125c110c
- championBin: d6d5d6f384fc04690109fc1d12d6a63ae7481dc01b3e1fb462fb27ae2188eaa9

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Mourning Mist Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Mourning Mist Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Yorick throws a globule of Black Mist that deals max Health magic damage, Slows by for seconds and marks champions and monsters for seconds. Marked enemies continuously Awaken nearby graves (but not exceeding the maximum of ) and suffer % reduced Armor. Yorick and his summoned units gain % Move Speed toward the mark. Mist Walkers will leap once at marked enemies that get away from them.

## R - Eulogy of the Isles

Coverage: partial

Description signature: 24cf86d230a9ef08c925b758d6577e20f8bef98f9627036b1f5ee3b62df4496f

- championDetail: c9f6313b6bdd9276c09d28bf1d042c4e127d825a41d283bd6c935fff125c110c
- championBin: d6d5d6f384fc04690109fc1d12d6a63ae7481dc01b3e1fb462fb27ae2188eaa9

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Eulogy of the Isles Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Eulogy of the Isles Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Yorick summons the Maiden of the Mist with Health and Magic Attack Damage plus Mist Walkers. The Maiden automatically raises Mist Walkers from nearby enemy deaths and marks enemy Champions with her attacks. When Yorick damages the Maiden's target, he deals % max Health magic damage. After 10 seconds, Yorick can Recast this Ability to free the Maiden, sending her down the nearest lane.
