# Bel'Veth combat review

Patch: 16.16

## P - Death in Lavender 

Coverage: unsupported

Description signature: 29ea239bd179a198944dba25cd9bf1e80fcda8f4d33e70734132524cb673d862

- championDetail: ec1a7a55e87c6ee6981030165c9228d4905a2d1ecd2c8d7eee7f90d2221fdbe3
- championBin: 6a5e63ae4d8448c4dabdc86bf5b029dd41c6406636883c242a8841e9da0966ed

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Death in Lavender  Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Bel'Veth gains permanent attack speed stacks after taking down large minions and monsters and champions. She also gains temporary bonus attack speed after using an ability.

## Q - Void Surge

Coverage: partial

Description signature: 0552469c361dbaa08e2baf6c64fa93142a5fec720460a60855e3a2c3e358fb4d

- championDetail: ec1a7a55e87c6ee6981030165c9228d4905a2d1ecd2c8d7eee7f90d2221fdbe3
- championBin: 6a5e63ae4d8448c4dabdc86bf5b029dd41c6406636883c242a8841e9da0966ed

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Void Surge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Void Surge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Bel'Veth dashes, dealing physical damage to enemies she passes through. Each direction has an unique Cooldown of seconds that scales down based on her Attack Speed.

## W - Above and Below

Coverage: partial

Description signature: 5345d8fd1df311425907bbccec11e1ca5f250dfbd49e14a2f4b6a92355041af9

- championDetail: ec1a7a55e87c6ee6981030165c9228d4905a2d1ecd2c8d7eee7f90d2221fdbe3
- championBin: 6a5e63ae4d8448c4dabdc86bf5b029dd41c6406636883c242a8841e9da0966ed

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Above and Below Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Above and Below Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Bel'Veth slams her tail, dealing magic damage, Knocking Up foes for seconds, and Slowing them by % for seconds. If a champion is hit, this refreshes the Cooldown of Void Surge in that direction.

## E - Royal Maelstrom

Coverage: partial

Description signature: b8d6429a16e252fbfa3ed51f96e6776297d7a2862fb11cbefc494c8876d66431

- championDetail: ec1a7a55e87c6ee6981030165c9228d4905a2d1ecd2c8d7eee7f90d2221fdbe3
- championBin: 6a5e63ae4d8448c4dabdc86bf5b029dd41c6406636883c242a8841e9da0966ed

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Royal Maelstrom Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Royal Maelstrom Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Bel'Veth channels and slashes around herself, gaining % Damage Reduction, Life Steal, and Attacking times over seconds with the number of Attacks increasing based on her Attack Speed. Each Attack strikes the lowest-health enemy, dealing to physical damage based on the target's missing Health. Using another Ability or Recasting ends this Ability early.

## R - Endless Banquet

Coverage: partial

Description signature: 641c51b04eb5a908d6cbd9bc83681f9484a13c16b98a92e1302766d2f4188ffe

- championDetail: ec1a7a55e87c6ee6981030165c9228d4905a2d1ecd2c8d7eee7f90d2221fdbe3
- championBin: 6a5e63ae4d8448c4dabdc86bf5b029dd41c6406636883c242a8841e9da0966ed

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Endless Banquet Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Endless Banquet Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Passive: Attacks deal an additional true damage, stacking infinitely. Takedowns against champions and epic monsters leave behind a piece of Void Coral. Active: Bel'Veth consumes a Void Coral, gaining Lavender stack and activating her true form. Void Coral from void epic monsters causes minions that die nearby to become Void Remora. While casting, Bel'Veth Slows nearby enemies before exploding, dealing + % missing-Health true damage. In her true form, Bel'Veth gains max Health, Attack range, % Total Attack Speed, and Void Surge can pass through walls. True form lasts seconds, increased to seconds at Lavender stacks. At Lavender stacks, true form lasts until death.
