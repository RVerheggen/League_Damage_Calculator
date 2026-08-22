# LeBlanc combat review

Patch: 16.16

## P - Mirror Image

Coverage: unsupported

Description signature: acd767be3085db9dda5b40462997d786efe75151bb832d298f54ddf110a0a549

- championDetail: 57df3955c80bedddcc4be1f5c2376940984b15bc1add5c33392e5d5fed5f865b
- championBin: 54a7b31fd9c996b9841dc825c16167dc74eff58dbe9efc364befbdfaa08f3f18

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Mirror Image Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

When LeBlanc drops below 40% Health, she becomes invisible for 1 second and creates a Mirror Image that deals no damage and lasts for up to 8 seconds.

## Q - Sigil of Malice

Coverage: partial

Description signature: 6986d4cb42f691410068c9c7c17938755ec246d0a1f8806957d27c16c6056c61

- championDetail: 57df3955c80bedddcc4be1f5c2376940984b15bc1add5c33392e5d5fed5f865b
- championBin: 54a7b31fd9c996b9841dc825c16167dc74eff58dbe9efc364befbdfaa08f3f18

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Sigil of Malice Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Sigil of Malice Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

LeBlanc projects a sigil to an enemy, dealing magic damage and marking them for seconds. Damaging the marked enemy with an Ability detonates the sigil, dealing magic damage. If either part kills the target, Leblanc refunds % of the Mana cost and % of this spell's remaining Cooldown. The initial sigil deals an additional damage to minions.

## W - Distortion

Coverage: partial

Description signature: b50dd8264b7ad7bd1bdc9a3c2eed0af0a09bfc8a7420d55da9f7517f15944744

- championDetail: 57df3955c80bedddcc4be1f5c2376940984b15bc1add5c33392e5d5fed5f865b
- championBin: 54a7b31fd9c996b9841dc825c16167dc74eff58dbe9efc364befbdfaa08f3f18

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Distortion Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Distortion Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

LeBlanc dashes then deals magic damage to nearby enemies. For seconds after dashing, LeBlanc can Recast. Recast: LeBlanc returns to her starting location.

## E - Ethereal Chains

Coverage: partial

Description signature: ab20702a29d7bfdad3a2f6a95127d4baf09ce14e84c7e63760274bc130abc502

- championDetail: 57df3955c80bedddcc4be1f5c2376940984b15bc1add5c33392e5d5fed5f865b
- championBin: 54a7b31fd9c996b9841dc825c16167dc74eff58dbe9efc364befbdfaa08f3f18

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation InitialDamage was preserved. Stateful and alternate effects require an explicit module.

### Ethereal Chains Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ethereal Chains Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

LeBlanc launches a chain that shackles the first enemy hit, dealing magic damage and granting True Sight. If they remain shackled for seconds, LeBlanc Roots them for seconds and deals an additional magic damage.

## R - Mimic

Coverage: partial

Description signature: 83f18851d52690ea8766cc8da0cb7e0f9f2b09a8462347f694155b453a636082

- championDetail: 57df3955c80bedddcc4be1f5c2376940984b15bc1add5c33392e5d5fed5f865b
- championBin: 54a7b31fd9c996b9841dc825c16167dc74eff58dbe9efc364befbdfaa08f3f18

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RQ1Damage was preserved. Stateful and alternate effects require an explicit module.

### Mimic Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Mimic Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

LeBlanc mimics her most recent Ability, using it again. The mimicked Ability deals increased damage. Mimicked Sigil of Malice deals magic damage when applied, and magic damage when consumed. Mimicked Distortion deals magic damage. Mimicked Ethereal Chains deals magic damage when shackled and magic damage when Rooting.
