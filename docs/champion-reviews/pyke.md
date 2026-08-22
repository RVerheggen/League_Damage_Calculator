# Pyke combat review

Patch: 16.16

## P - Gift of the Drowned Ones

Coverage: unsupported

Description signature: 46e1d0b685d21bfe327c3a4b58faf9d9c4051b1532f65e1df7f5b729ee2dceb5

- championDetail: eb3e4139d5c8eb0485a92b4f2201a04b70454efaf6f730e69414d7204456b9d2
- championBin: 7194c8f3315d987753de3554e7031a3ea4e30f752529b4a986e7ddf52fe4cbfa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Gift of the Drowned Ones Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

When Pyke is hidden from enemies, he regenerates damage that he has recently taken from champions. Pyke also cannot gain extra Maximum Health from any source, and instead gains Bonus AD.

## Q - Bone Skewer

Coverage: partial

Description signature: 31706c695abcdea5286ff701ad9d7f7b91cc8a216c0676b07ca444c532f6d3a2

- championDetail: eb3e4139d5c8eb0485a92b4f2201a04b70454efaf6f730e69414d7204456b9d2
- championBin: 7194c8f3315d987753de3554e7031a3ea4e30f752529b4a986e7ddf52fe4cbfa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Bone Skewer Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Bone Skewer Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Tap: Pyke stabs, dealing physical damage to the first enemy hit, preferring champions. They are then Slowed by % for second. Hold: Pyke throws his harpoon, dealing physical damage to the first enemy hit and Pulling them towards him. They are then Slowed by % for second. If Pyke successfully hits an enemy champion or the channel does not complete successfully, % of the Mana cost is refunded.

## W - Ghostwater Dive

Coverage: out-of-scope

Description signature: 1ef603949c243533d0cd4ec86b7c3ccb92c8ec1350c3c160c7d49c81a0e6ad71

- championDetail: eb3e4139d5c8eb0485a92b4f2201a04b70454efaf6f730e69414d7204456b9d2
- championBin: 7194c8f3315d987753de3554e7031a3ea4e30f752529b4a986e7ddf52fe4cbfa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Ghostwater Dive

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Pyke gains Camouflage and % Move Speed decaying over seconds.

## E - Phantom Undertow

Coverage: partial

Description signature: a3dd99a07745c671ee79377ce7477da9359e75d8a3eacef383a5161ba6c3609e

- championDetail: eb3e4139d5c8eb0485a92b4f2201a04b70454efaf6f730e69414d7204456b9d2
- championBin: 7194c8f3315d987753de3554e7031a3ea4e30f752529b4a986e7ddf52fe4cbfa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Phantom Undertow Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Phantom Undertow Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Pyke dashes, leaving a drowned phantom behind him that returns to him shortly. The phantom Stuns for seconds and deals physical damage to champions.

## R - Death From Below

Coverage: partial

Description signature: 1b93f5dc74b4b68a967518e561ed3e9c7403ca6e4e395f19832b8d96046eb052

- championDetail: eb3e4139d5c8eb0485a92b4f2201a04b70454efaf6f730e69414d7204456b9d2
- championBin: 7194c8f3315d987753de3554e7031a3ea4e30f752529b4a986e7ddf52fe4cbfa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation ReducedDamageFinal was preserved. Stateful and alternate effects require an explicit module.

### Death From Below Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Death From Below Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Pyke strikes all enemy champions in an X, teleporting to and executing targets below Health. Champions above the threshold and non-champions instead take physical damage equal to % of that amount (). When an enemy champion dies inside the X, Pyke can Recast this Ability for free within seconds. If he executed that champion, the last assisting ally will also get kill gold. If he did not, he will still get kill gold as if he did.
