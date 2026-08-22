# Zac combat review

Patch: 16.16

## P - Cell Division

Coverage: unsupported

Description signature: d807fedb1783c87e04a5e92898fb9915c56ac7dbc9b9c97946892c4e8bc98a51

- championDetail: eb5c6f4f1cca8a2076420235817d06fcb7a96d58c7c0d7e913d636b9bc114fde
- championBin: 40ea67bbe2968a920b04c2049e244a16f56ef0f166a1b10096cd3449526cac4b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Cell Division Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Each time Zac hits an enemy with an ability, he sheds a chunk of himself that can be reabsorbed to restore Health. Upon taking fatal damage, Zac splits into 4 bloblets that attempt to recombine. If any bloblets remain, he will revive with an amount of Health depending on the Health of the surviving bloblets. Each bloblet has a percentage of Zac's maximum Health, Armor and Magic Resistance. This ability has a 5 minute cooldown.

## Q - Stretching Strikes

Coverage: partial

Description signature: 0e69e4154685351d8d766e7faf8882db8e0d263491d7588b5e68aab8c50da6d7

- championDetail: eb5c6f4f1cca8a2076420235817d06fcb7a96d58c7c0d7e913d636b9bc114fde
- championBin: 40ea67bbe2968a920b04c2049e244a16f56ef0f166a1b10096cd3449526cac4b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Stretching Strikes Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Stretching Strikes Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Zac stretches his arm out, attaching it to the first enemy hit to deal magic damage and briefly Slow them. Zac's next Attack gains increased range and applies the same damage and Slow. If Zac hits a different enemy with this Attack, he Knocks Up both towards each other. If they collide, they and surrounding enemies take magic damage and are briefly Slowed.

## W - Unstable Matter

Coverage: partial

Description signature: 7e69deea54b986382d8812af25b1820ec2692e6b86b9d6c1cd67d3bd4ae9a2bd

- championDetail: eb5c6f4f1cca8a2076420235817d06fcb7a96d58c7c0d7e913d636b9bc114fde
- championBin: 40ea67bbe2968a920b04c2049e244a16f56ef0f166a1b10096cd3449526cac4b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Unstable Matter Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Unstable Matter Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Zac's body erupts, dealing + max Health magic damage to nearby enemies. Absorbing Goo reduces this Ability's Cooldown by 1 second.

## E - Elastic Slingshot

Coverage: partial

Description signature: f5bf276416201f5e0538068e8b4f46935244ec44aa998ec8e27d1fa1329b6229

- championDetail: eb5c6f4f1cca8a2076420235817d06fcb7a96d58c7c0d7e913d636b9bc114fde
- championBin: 40ea67bbe2968a920b04c2049e244a16f56ef0f166a1b10096cd3449526cac4b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Elastic Slingshot Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Elastic Slingshot Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Begin Charging: Zac pulls himself taut, charging up a dash over seconds. Release: Zac launches himself and Knocks Up enemies where he lands for up to second (based on charge time), dealing them magic damage. Zac spawns an extra chunk of Goo for each enemy champion hit.

## R - Let's Bounce!

Coverage: partial

Description signature: e315a429944bfa2d8ddda0969e6a36789b3b53e868a3017cd027c0cea6503a1d

- championDetail: eb5c6f4f1cca8a2076420235817d06fcb7a96d58c7c0d7e913d636b9bc114fde
- championBin: 40ea67bbe2968a920b04c2049e244a16f56ef0f166a1b10096cd3449526cac4b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Let's Bounce! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Let's Bounce! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Zac bounces times. The first bounce to hit each enemy Knocks them back and deals magic damage. Subsequent bounces deal magic damage and Slow by % for second. Zac gains up to % Move Speed over time and can cast Unstable Matter while bouncing.
