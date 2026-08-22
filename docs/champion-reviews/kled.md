# Kled combat review

Patch: 16.16

## P - Skaarl, the Cowardly Lizard

Coverage: unsupported

Description signature: 7ccf9f1243bc47ecc599d68ca2b41375fb63dab46c99aa8a8bb2d22f20be2b5c

- championDetail: cac69704411f6a498d6c8054c0497fcd0568b1840f0ef1885aeb50f40c551268
- championBin: 2fa2aadacbe7650152387ea1012d77d0cf09959a65ab1ab3bd0a709e370c6f98

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Skaarl, the Cowardly Lizard Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Kled rides his trusty steed, Skaarl, who takes damage for him. When Skaarl's health depletes, Kled dismounts. While dismounted, Kled's abilities change and he deals less damage to champions. Kled can restore Skaarl's courage by fighting enemies. At maximum courage, Kled remounts with a portion of Skaarl's health.

## Q - Bear Trap on a Rope

Coverage: partial

Description signature: c00fc5e62ba3ba7df24c5ffdf1b97413c77070986883f9b514c274b209c63477

- championDetail: cac69704411f6a498d6c8054c0497fcd0568b1840f0ef1885aeb50f40c551268
- championBin: 2fa2aadacbe7650152387ea1012d77d0cf09959a65ab1ab3bd0a709e370c6f98

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Bear Trap on a Rope Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Bear Trap on a Rope Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Mounted: Kled throws a bear trap that deals physical damage and hooks onto the first enemy champion or large jungle monster hit. If Kled stays near a hooked enemy for seconds, he yanks out the trap, dealing physical damage, Pulling them, and Slowing by % for seconds.

## W - Violent Tendencies

Coverage: partial

Description signature: 51df318310e6b187127c3fbc775a30c9a64bab8fe1d71d415ad5a2dda14c6753

- championDetail: cac69704411f6a498d6c8054c0497fcd0568b1840f0ef1885aeb50f40c551268
- championBin: 2fa2aadacbe7650152387ea1012d77d0cf09959a65ab1ab3bd0a709e370c6f98

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation PercentDamage was preserved. Stateful and alternate effects require an explicit module.

### Violent Tendencies Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Violent Tendencies Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Passive: Kled's next Attack grants % Attack Speed for four Attacks or seconds. The fourth hit deals an additional plus max Health physical damage.

## E - Jousting

Coverage: partial

Description signature: c62cfd6a331b4ac0db95ce1aeb84cf940389d52645206c6077b99175e835a7a6

- championDetail: cac69704411f6a498d6c8054c0497fcd0568b1840f0ef1885aeb50f40c551268
- championBin: 2fa2aadacbe7650152387ea1012d77d0cf09959a65ab1ab3bd0a709e370c6f98

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Jousting Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Jousting Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Kled dashes, dealing physical damage to enemies he passes through, pulling minions and small monsters towards him. If this Ability hits an enemy champion or large jungle monster, Kled gains % Move Speed for second(s) and can Recast within seconds to dash back through the same target.

## R - Chaaaaaaaarge!!!

Coverage: partial

Description signature: 8ecc67b4f70ff22f2f2ee3ecfacdb65c57a43d3574f7d0376ef0294f9a3bac90

- championDetail: cac69704411f6a498d6c8054c0497fcd0568b1840f0ef1885aeb50f40c551268
- championBin: 2fa2aadacbe7650152387ea1012d77d0cf09959a65ab1ab3bd0a709e370c6f98

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MinimumDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Chaaaaaaaarge!!! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Chaaaaaaaarge!!! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Kled charges toward an area, leaving a trail that grants allies increasing Move Speed. While charging and for 2 seconds after Kled gains up to Shield. Skaarl rams the first enemy champion encountered, dealing to max Health magic damage (based on distance travelled) and briefly Knocking Back.
