# Morgana combat review

Patch: 16.16

## P - Soul Siphon

Coverage: unsupported

Description signature: 04a1cafc1df43e9678afae1c24da3edee5d89bf8bf81c72247630a489edb3c6e

- championDetail: 210bb3c3944eab52dbf43910f9239e3d84b718f6ab8ae0b029140c3c2f7bc6ae
- championBin: 852fc06fd59fcf4ff6b8d8dd71c077511fc05a090fa3d28e7e5ad840cca30f9b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Soul Siphon Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Morgana drains spirit from her enemies, healing as she deals damage to champions, large minions, and medium and larger jungler monsters.

## Q - Dark Binding

Coverage: partial

Description signature: 8721e113c883f21fdcf505627202a556f5d2d7e63637b2c68f57b67b8451ec57

- championDetail: 210bb3c3944eab52dbf43910f9239e3d84b718f6ab8ae0b029140c3c2f7bc6ae
- championBin: 852fc06fd59fcf4ff6b8d8dd71c077511fc05a090fa3d28e7e5ad840cca30f9b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Dark Binding Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Dark Binding Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Morgana hurls a blast of starfire that Roots the first enemy hit for seconds and deals magic damage.

## W - Tormented Shadow

Coverage: partial

Description signature: f7faba7ecbc4c6e86f84f6069698c36930b8393949c7977d10292908fc121aa7

- championDetail: 210bb3c3944eab52dbf43910f9239e3d84b718f6ab8ae0b029140c3c2f7bc6ae
- championBin: 852fc06fd59fcf4ff6b8d8dd71c077511fc05a090fa3d28e7e5ad840cca30f9b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalMinDamage was preserved. Stateful and alternate effects require an explicit module.

### Tormented Shadow Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Tormented Shadow Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Morgana ignites the ground for seconds, dealing magic damage per second, increased by up to based on the targets' missing Health. This Ability's Cooldown is reduced by % every time Morgana is healed by Soul Siphon.

## E - Black Shield

Coverage: unsupported

Description signature: 1fabe84016aa06ca088a59cf37038a6aeb7945be0e85b71e8412598125967a7c

- championDetail: 210bb3c3944eab52dbf43910f9239e3d84b718f6ab8ae0b029140c3c2f7bc6ae
- championBin: 852fc06fd59fcf4ff6b8d8dd71c077511fc05a090fa3d28e7e5ad840cca30f9b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Black Shield Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Morgana grants an ally champion Magic Shield for seconds. The shield prevents Disabling and Immobilizing effects until it breaks.

## R - Soul Shackles

Coverage: partial

Description signature: f292d5681663a8c7181c9942f804b552d1ee085471e01c7cdae68a9642b7b0fa

- championDetail: 210bb3c3944eab52dbf43910f9239e3d84b718f6ab8ae0b029140c3c2f7bc6ae
- championBin: 852fc06fd59fcf4ff6b8d8dd71c077511fc05a090fa3d28e7e5ad840cca30f9b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Soul Shackles Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Soul Shackles Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Morgana chains herself to nearby enemy Champions, dealing magic damage and Slowing them by %. After seconds, enemies unable to break the chains take an additional magic damage and are Stunned for seconds. While casting this Ability, Morgana gains % Move Speed.
