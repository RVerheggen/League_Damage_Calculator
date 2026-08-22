# Smolder combat review

Patch: 16.16

## P - Dragon Practice

Coverage: unsupported

Description signature: 0e4a4fdae8fad36c6288fe288f7c884fedd1ccb5271a10485cf98277ce9956f3

- championDetail: 4cf627ac70ac83f3c8ec0d721e63db7b464d0b8d2ce48ceaabac6e35a4417a6f
- championBin: c14d4f698d0f1b98526e4a35aa8cf9cb015797d9c777d2454e2be56d02a04b2d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Dragon Practice Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Hitting champions with Abilities and killing enemies with Super Scorcher Breath grants a stack of Dragon Practice. Stacks increase the damage of Smolders basic Abilities.

## Q - Super Scorcher Breath

Coverage: partial

Description signature: 08d85039e5d964e3fde1c324881e15d668f432ef59786df1366a6672cd3c0d7f

- championDetail: 4cf627ac70ac83f3c8ec0d721e63db7b464d0b8d2ce48ceaabac6e35a4417a6f
- championBin: c14d4f698d0f1b98526e4a35aa8cf9cb015797d9c777d2454e2be56d02a04b2d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Super Scorcher Breath Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Super Scorcher Breath Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Smolder belches flame, dealing physical damage + magic damage. If the target dies, Smolder refunds Mana, once per cast. Based on stacks of Dragon Practice, this Ability evolves to gain the following effects: Stacks: Damages all enemies surrounding the target. Stacks: Sends explosions beyond the target that deal % of this Ability's damage. Stacks: Burns the target, dealing max Health true damage over seconds. Enemy champions that drop below total health while burning are killed instantly.

## W - Achooo!

Coverage: partial

Description signature: 8b4894e2a4f1118accddbe27eaf15d91a320437f6cab19652a182b5b28e1edee

- championDetail: 4cf627ac70ac83f3c8ec0d721e63db7b464d0b8d2ce48ceaabac6e35a4417a6f
- championBin: c14d4f698d0f1b98526e4a35aa8cf9cb015797d9c777d2454e2be56d02a04b2d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Achooo! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Achooo! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Smolder lets out an adorable flaming sneeze, dealing physical damage and Slowing by % for seconds. Hitting champions causes an explosion, dealing physical + magic damage.

## E - Flap, Flap, Flap

Coverage: partial

Description signature: 4a5c07787a98ce20dec3b971192e00229e34f783665d6a88c761e141c8569780

- championDetail: 4cf627ac70ac83f3c8ec0d721e63db7b464d0b8d2ce48ceaabac6e35a4417a6f
- championBin: c14d4f698d0f1b98526e4a35aa8cf9cb015797d9c777d2454e2be56d02a04b2d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Flap, Flap, Flap Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Flap, Flap, Flap Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Smolder takes flight, gaining % Move Speed and ignoring terrain for seconds. While flying, Smolder bombards the lowest Health enemy (rounded down) times for physical damage + magic damage per hit.

## R - MMOOOMMMM!

Coverage: partial

Description signature: 736c2f93464ba6b82cf0b174cd7c63cc523d07a04d8b25bb5cc8f6892f9f0ae1

- championDetail: 4cf627ac70ac83f3c8ec0d721e63db7b464d0b8d2ce48ceaabac6e35a4417a6f
- championBin: c14d4f698d0f1b98526e4a35aa8cf9cb015797d9c777d2454e2be56d02a04b2d

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### MMOOOMMMM! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### MMOOOMMMM! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Smolder's mom breathes fire from above, dealing physical damage. Enemies in the center take physical damage instead and are Slowed by % for seconds. Smolder's mom heals her son for Health if she hits him.
