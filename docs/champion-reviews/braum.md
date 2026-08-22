# Braum combat review

Patch: 16.16

## P - Concussive Blows

Coverage: unsupported

Description signature: f43c4ed09deea029c31c3ba5e6e30a2831c6b3d8c80d21cdcad49e1ed06ebabf

- championDetail: 01c3719124a3d08072eba3dec0dd6c06ef4bf2e20c0c62ffffbc3e71aa681209
- championBin: c870b57c3c7f2adf19639bfd6d29626e099e6e1031e836ee050f52065bf8494f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Concussive Blows Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Braum's basic attacks apply Concussive Blows. Once the first stack is applied, ally basic attacks also stack Concussive Blows. Upon reaching 4 stacks, the target is stunned and takes magic damage. For the next few seconds they cannot receive new stacks, but take bonus magic damage from Braum's attacks.

## Q - Winter's Bite

Coverage: partial

Description signature: ca6b0274ecc81b3b7a161ab2ef2ebb9116ba149bb3ca96e7342432a029beb91b

- championDetail: 01c3719124a3d08072eba3dec0dd6c06ef4bf2e20c0c62ffffbc3e71aa681209
- championBin: c870b57c3c7f2adf19639bfd6d29626e099e6e1031e836ee050f52065bf8494f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Winter's Bite Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Winter's Bite Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Braum propels freezing ice from his shield, dealing magic damage to the first enemy hit and Slowing them by % decaying over seconds. Applies a stack of Concussive Blows.

## W - Stand Behind Me

Coverage: unsupported

Description signature: ee41362d22a81b21fa1395012a88004c9bcdab6bc03f5789925c65856b8e3e20

- championDetail: 01c3719124a3d08072eba3dec0dd6c06ef4bf2e20c0c62ffffbc3e71aa681209
- championBin: c870b57c3c7f2adf19639bfd6d29626e099e6e1031e836ee050f52065bf8494f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Stand Behind Me Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Braum leaps to an allied champion or minion. On arrival, Braum grants the target Armor and Magic Resist for seconds. Braum grants himself Armor and Magic Resist for the same duration.

## E - Unbreakable

Coverage: unsupported

Description signature: b10bc98ec082c649172a13b4b124f54a78fb8fa438912ae06cbafb0985353490

- championDetail: 01c3719124a3d08072eba3dec0dd6c06ef4bf2e20c0c62ffffbc3e71aa681209
- championBin: c870b57c3c7f2adf19639bfd6d29626e099e6e1031e836ee050f52065bf8494f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Unbreakable Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Braum raises his shield for seconds, intercepting enemy missiles from the chosen direction, causing them to hit Braum and then be destroyed. The first missile Braum blocks deals no damage, and subsequent projectiles deal % reduced damage. Braum gains % Move Speed while his shield is raised.

## R - Glacial Fissure

Coverage: partial

Description signature: d55ee381b20b1d8328fb9603781439cec139faaad9c5df4c37ee84d6f3826c9f

- championDetail: 01c3719124a3d08072eba3dec0dd6c06ef4bf2e20c0c62ffffbc3e71aa681209
- championBin: c870b57c3c7f2adf19639bfd6d29626e099e6e1031e836ee050f52065bf8494f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Glacial Fissure Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Glacial Fissure Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Braum slams the ground sending forth a fissure that Knocks Up enemies in its path and nearby Braum, and deals magic damage. The first target hit is Knocked Up for between and seconds, increasing with distance from Braum. All others hit are Knocked Up for seconds. The fissure also creates a zone for seconds, that Slows by %.
