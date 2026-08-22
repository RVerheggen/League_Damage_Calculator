# Darius combat review

Patch: 16.16

## P - Hemorrhage

Coverage: unsupported

Description signature: a08988be67ef3b3856201a871be61885fc7022fe9f17d6a1e9b486f9c251e13f

- championDetail: 05816da1c626130a235e1a5e33539cf16ff4eef35c02acb7a21e7083adf4bfc3
- championBin: f89a1fb96317d0188db7e5d4a386f64ab8a9be97e36b6195063af6db5baf5735

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Hemorrhage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Darius' attacks and damaging abilities cause enemies to bleed for physical damage over 5 seconds, stacking up to 5 times. Darius enrages and gains massive Attack Damage when his target reaches max stacks.

## Q - Decimate

Coverage: partial

Description signature: 3311f882663c3c1340b084887d0592ed0f965df0fff228907f094bb1a477706e

- championDetail: 05816da1c626130a235e1a5e33539cf16ff4eef35c02acb7a21e7083adf4bfc3
- championBin: f89a1fb96317d0188db7e5d4a386f64ab8a9be97e36b6195063af6db5baf5735

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Decimate Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Decimate Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Darius hefts his axe then swings it around, dealing physical damage with the edge and damage with the handle. Enemies hit with the handle do not take a Hemorrhage stack. Darius restores % missing Health per enemy champion and large jungle monster hit with the edge, up to a max of %.

## W - Crippling Strike

Coverage: modeled

Description signature: 0890b2b65718b9dd7e84e70b96c0b32eb199e5a2fbb6a1dab326acd18fd2acc1

- championDetail: 05816da1c626130a235e1a5e33539cf16ff4eef35c02acb7a21e7083adf4bfc3
- championBin: f89a1fb96317d0188db7e5d4a386f64ab8a9be97e36b6195063af6db5baf5735

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Crippling Strike is compiled as a timed single-use empowered attack.

### Crippling Strike

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: arm-next-hit
- Reason: Compiled by the reusable arm-next-hit template.

Arms the next qualifying hit for 4 seconds.

## E - Apprehend

Coverage: unsupported

Description signature: 7a2b8e353ab77ad98c82ce67093650beeb47ba037bb95ed66c9f77597f79654b

- championDetail: 05816da1c626130a235e1a5e33539cf16ff4eef35c02acb7a21e7083adf4bfc3
- championBin: f89a1fb96317d0188db7e5d4a386f64ab8a9be97e36b6195063af6db5baf5735

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Apprehend Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Darius gains % Armor Penetration. Active: Darius hooks with his axe, Pulling, and Knocking Up and Slowing by % for second.

## R - Noxian Guillotine

Coverage: partial

Description signature: d2f0a162dc9384a97619ff00256a4ba8b30c6f8e706cafeb00bbf5d5f964d97f

- championDetail: 05816da1c626130a235e1a5e33539cf16ff4eef35c02acb7a21e7083adf4bfc3
- championBin: f89a1fb96317d0188db7e5d4a386f64ab8a9be97e36b6195063af6db5baf5735

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Noxian Guillotine Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Noxian Guillotine Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Darius leaps to an enemy and strikes a lethal blow, dealing true damage. For each Hemorrhage on the target, this Ability deals an additional % damage, up to a max of damage. If this kills the target, Darius may Recast this Ability once within seconds. At rank 3, this Ability has no Mana cost and kills refresh the Cooldown completely.
