# Nunu & Willump combat review

Patch: 16.16

## P - Call of the Freljord

Coverage: unsupported

Description signature: 875d498245367c032f4e915d460de7d84d527d0cec40cb2100c9179f8b7c4e7c

- championDetail: 5fe0e4712dda0c0f76c942702ab9a6d003fb8e76185ee77c44056d25ebad692f
- championBin: 514e9607d83401efc071a959ce8e9cde91692f4abf2724e22fa8839da17638a2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The temporary Call buff changes attack speed and repeated basic-attack damage. The source is assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Call of the Freljord Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The temporary Call buff changes attack speed and repeated basic-attack damage. The source is assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Nunu increases the attack speed and Move Speed of Willump and a nearby ally, and causes Willump's basic attacks to damage enemies around the target.

## Q - Consume

Coverage: partial

Description signature: 122afbd17a64e02e5ea2207f90b167a169d5ed5fce91f44bcbe73dd6994720ae

- championDetail: 5fe0e4712dda0c0f76c942702ab9a6d003fb8e76185ee77c44056d25ebad692f
- championBin: 514e9607d83401efc071a959ce8e9cde91692f4abf2724e22fa8839da17638a2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Consume Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Consume Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Nunu asks Willump to take a bite of an enemy, dealing true damage and restoring Health when used against a minion or jungle monster. Against a champion, it instead deals magic damage and restores Health. The healing is increased by % when Nunu and Willump are below % Health.

## W - Biggest Snowball Ever!

Coverage: partial

Description signature: ed17c7a07dec025d346a753c2f075716cc6bd4d443dfa4b2cef13b2e49753d05

- championDetail: 5fe0e4712dda0c0f76c942702ab9a6d003fb8e76185ee77c44056d25ebad692f
- championBin: 514e9607d83401efc071a959ce8e9cde91692f4abf2724e22fa8839da17638a2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Biggest Snowball Ever! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Biggest Snowball Ever! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Nunu and Willump create a snowball that grows in size and speed as they roll it. They turn slower while rolling it, but can increase turning speed by holding the turn. The snowball does between and magic damage, and Knocks Up for between and seconds when it collides with a champion, large monster or wall. These values scale up with distance rolled. Nunu and Willump can Recast to let the snowball go early.

## E - Snowball Barrage

Coverage: partial

Description signature: 09a2c20e2382d3373a9855f13eea98bb02841fc654fb4d1a861d16199b039acf

- championDetail: 5fe0e4712dda0c0f76c942702ab9a6d003fb8e76185ee77c44056d25ebad692f
- championBin: 514e9607d83401efc071a959ce8e9cde91692f4abf2724e22fa8839da17638a2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Snowball Barrage Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Snowball Barrage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Nunu throws three snowballs, dealing magic damage per snowball and Slowing enemies hit by all three by % for second. Nunu can Recast this up to twice more. After seconds, Nunu Roots all nearby enemies that had been Slowed by the snowballs for seconds and deals an additional magic damage.

## R - Absolute Zero

Coverage: partial

Description signature: 51d8e27c114a71dada5a10f92ea37ae6bfd5e83da1bcf75bd2debddc57ca44af

- championDetail: 5fe0e4712dda0c0f76c942702ab9a6d003fb8e76185ee77c44056d25ebad692f
- championBin: 514e9607d83401efc071a959ce8e9cde91692f4abf2724e22fa8839da17638a2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Absolute Zero Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Absolute Zero Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Nunu and Willump channel a powerful blizzard for up to seconds. Enemies inside are Slowed by %, increasing to % over the duration. Nunu and Willump also gain Shield for the duration before decaying over seconds afterwards. When the blizzard ends, it detonates, dealing up to magic damage based on channel time. Nunu and Willump can Recast to end the blizzard early.
