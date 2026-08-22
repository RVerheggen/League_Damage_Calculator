# Talon combat review

Patch: 16.16

## P - Blade's End

Coverage: unsupported

Description signature: 7a94baf61bbeffa46a65589abedf61a2c539ab2ad8e3c7022313fbb209f4079d

- championDetail: 50f58f04cf16c091e9714781d4e915407ffbab7614d32147aa42f04a7de81390
- championBin: 7af1e5ea0cc2e75370533872944aa8e75eeff2d92d564766c1fd2e10c8056e8d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Blade's End Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Talon's spells Wound champions and large monsters, stacking up to 3 times. When Talon attacks a champion with 3 stacks of Wound, they bleed for heavy damage over time.

## Q - Noxian Diplomacy

Coverage: partial

Description signature: 926f5ed485b08fdb3c31c8ef8239e66f4ddea467c580547660e19464d162b0d9

- championDetail: 50f58f04cf16c091e9714781d4e915407ffbab7614d32147aa42f04a7de81390
- championBin: 7af1e5ea0cc2e75370533872944aa8e75eeff2d92d564766c1fd2e10c8056e8d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Noxian Diplomacy Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Noxian Diplomacy Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Talon leaps to a target and deals physical damage. If used in melee range, this Ability instead critically strikes for physical damage. If this Ability kills the target, Talon restores Health and refunds % of its Cooldown.

## W - Rake

Coverage: partial

Description signature: cb94defe4d7f0a585317b2c6e673fa7655f7fe56c260adf16d44d9723b02cbd4

- championDetail: 50f58f04cf16c091e9714781d4e915407ffbab7614d32147aa42f04a7de81390
- championBin: 7af1e5ea0cc2e75370533872944aa8e75eeff2d92d564766c1fd2e10c8056e8d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Rake Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Rake Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Talon tosses a volley of blades, dealing physical damage. The blades then return to him, dealing physical damage and Slowing by % for second.

## E - Assassin's Path

Coverage: out-of-scope

Description signature: 495c095bac62813d52e8941f12fe7d43aa7f808eaec0b5d261f4ed4fb6759f15

- championDetail: 50f58f04cf16c091e9714781d4e915407ffbab7614d32147aa42f04a7de81390
- championBin: 7af1e5ea0cc2e75370533872944aa8e75eeff2d92d564766c1fd2e10c8056e8d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Assassin's Path

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Talon vaults over the nearest terrain or structure. Talon cannot dash over the same terrain more than once every seconds.

## R - Shadow Assault

Coverage: partial

Description signature: cb1da13ef17c60dc7534626d65bc8bf14a0ebd8ae3ee0058950e55149d2d446d

- championDetail: 50f58f04cf16c091e9714781d4e915407ffbab7614d32147aa42f04a7de81390
- championBin: 7af1e5ea0cc2e75370533872944aa8e75eeff2d92d564766c1fd2e10c8056e8d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Shadow Assault Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Shadow Assault Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Talon disperses a ring of blades that deal physical damage, gains % Move Speed, and becomes Invisible for seconds. When the Invisibility ends, the blades return to Talon, dealing physical damage again. If Talon cancels the Invisibility with an Attack or with Noxian Diplomacy, the blades return to the target instead.
