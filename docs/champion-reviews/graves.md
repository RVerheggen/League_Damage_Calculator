# Graves combat review

Patch: 16.16

## P - New Destiny

Coverage: out-of-scope

Description signature: 2a76d2137dac3c3e822afac3e70db5d3bdffb915f771bb4a4cec22beba97432a

- championDetail: 007dd5ab18c1e0476a009d60f74b2783a268ce185fb5ba46a4167bb2a43ab5c7
- championBin: 6969a9ff94ecea0e24b0f7239e697dd5c2d2485920648998e913a10c774ef98b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### New Destiny

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Graves' shotgun has some unique properties. He must reload when he runs out of ammo. Attacks fire 4 bullets, which cannot pass through units. Non-champions struck by multiple bullets are knocked back.

## Q - End of the Line

Coverage: partial

Description signature: 96c8e8fb507eabc37df788a88a6ea6ba512497363189455b9ed5d9afe5e8af54

- championDetail: 007dd5ab18c1e0476a009d60f74b2783a268ce185fb5ba46a4167bb2a43ab5c7
- championBin: 6969a9ff94ecea0e24b0f7239e697dd5c2d2485920648998e913a10c774ef98b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### End of the Line Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### End of the Line Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Graves fires a powder round dealing physical damage. After 1 second or after colliding with terrain, it detonates, dealing physical damage along the travel path again and to enemies near the blast.

## W - Smoke Screen

Coverage: partial

Description signature: 129d64d0da01d5b0c1cbcdaf1b507a61f612e19be6f54dd3931ec2a7279d08a5

- championDetail: 007dd5ab18c1e0476a009d60f74b2783a268ce185fb5ba46a4167bb2a43ab5c7
- championBin: 6969a9ff94ecea0e24b0f7239e697dd5c2d2485920648998e913a10c774ef98b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Smoke Screen Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Smoke Screen Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Graves creates a cloud of black smoke for 4 seconds, Slowing enemies inside by % and blocking their vision outside the area. The initial impact deals magic damage.

## E - Quickdraw

Coverage: unsupported

Description signature: 4cf45a09672e02c19f9abe85a7a1b10eba01ae94ba85aa77dafe4a3d2a86acac

- championDetail: 007dd5ab18c1e0476a009d60f74b2783a268ce185fb5ba46a4167bb2a43ab5c7
- championBin: 6969a9ff94ecea0e24b0f7239e697dd5c2d2485920648998e913a10c774ef98b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Quickdraw Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Graves dashes and reloads one Shell into his shotgun. He also gains a stack for seconds (max stacks) or two stacks if he dashes towards an enemy champion. Stacks grant him Armor and Magic Resist. Stacks are refreshed when damaging a non-minion. Each bullet hit from Graves' Attacks reduces this Ability's Cooldown by seconds.

## R - Collateral Damage

Coverage: partial

Description signature: 17035425147add43d5600431f78f5c9b7a7aeb3720f25b17a6f42334f256012c

- championDetail: 007dd5ab18c1e0476a009d60f74b2783a268ce185fb5ba46a4167bb2a43ab5c7
- championBin: 6969a9ff94ecea0e24b0f7239e697dd5c2d2485920648998e913a10c774ef98b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Collateral Damage Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Collateral Damage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Graves fires an explosive cartridge, blasting himself backwards. The cartridge deals physical damage to the first enemy hit. After hitting an enemy champion or reaching the end of its range, the cartridge explodes outward, dealing physical damage.
