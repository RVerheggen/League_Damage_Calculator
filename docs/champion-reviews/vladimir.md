# Vladimir combat review

Patch: 16.16

## P - Crimson Pact

Coverage: unsupported

Description signature: 723d0c63236bb2ac8d2ce90308b4be7bfd08ce72616233a7154e83df4044af2a

- championDetail: aa21c8b96d8932faec12e6c56fe56ef02004d24b34834ae6a475f4899fda173b
- championBin: 3f815191ebc0cec2596faece7823aa50d928415563e966db448f385a00f5d73c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Crimson Pact Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Every 30 points of bonus Health gives Vladimir 1 Ability Power and every 1 point of Ability Power gives Vladimir 1.6 bonus Health (does not stack with itself).

## Q - Transfusion

Coverage: partial

Description signature: 168ad3c0cae5eaa48bfa477dcbba6bfdc25727350bba15656581e2096e45f5e4

- championDetail: aa21c8b96d8932faec12e6c56fe56ef02004d24b34834ae6a475f4899fda173b
- championBin: 3f815191ebc0cec2596faece7823aa50d928415563e966db448f385a00f5d73c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BaseDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Transfusion Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Transfusion Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Vladimir drains his target's lifeforce, dealing magic damage and restoring Health. After using this Ability twice, Vladimir gains % Move Speed for 0.5 seconds and empowers the next use of this Ability for seconds. The empowered version of this Ability deals magic damage instead and restores an additional plus missing Health.

## W - Sanguine Pool

Coverage: partial

Description signature: a99507feba12f6fec69c091271059ec50b014e517e41933a1e715868a103b1e7

- championDetail: aa21c8b96d8932faec12e6c56fe56ef02004d24b34834ae6a475f4899fda173b
- championBin: 3f815191ebc0cec2596faece7823aa50d928415563e966db448f385a00f5d73c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Sanguine Pool Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Sanguine Pool Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Vladimir sinks into a pool of blood for 2 seconds, gaining % decaying Move Speed for second and becoming Untargetable and Ghosted while Slowing enemies in the pool by %. Vladimir deals magic damage and restores Health per enemy over the duration.

## E - Tides of Blood

Coverage: partial

Description signature: 3dc985f3e755a8e09870cb1d86fdc1aa4831695c96f13c7112378535a43f4970

- championDetail: aa21c8b96d8932faec12e6c56fe56ef02004d24b34834ae6a475f4899fda173b
- championBin: 3f815191ebc0cec2596faece7823aa50d928415563e966db448f385a00f5d73c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MinDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Tides of Blood Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Tides of Blood Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Begin Charging: Vladimir charges up a reservoir of blood, spending up to Health. While at full charge, Vladimir is Slowed by 20%. Release: Vladimir unleashes a torrent of blood missiles at surrounding enemies, dealing between and magic damage based on charge time. If this Ability was charged for at least 1 second, it also Slows targets by % for 0.5 seconds.

## R - Hemoplague

Coverage: partial

Description signature: 025ec63332193ac9fa33d240ee4a80480b2ce64dfdc73f32e9ddfe0f45f9a439

- championDetail: aa21c8b96d8932faec12e6c56fe56ef02004d24b34834ae6a475f4899fda173b
- championBin: 3f815191ebc0cec2596faece7823aa50d928415563e966db448f385a00f5d73c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Hemoplague Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Hemoplague Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Vladimir creates a virulent plague, causing its victims to take % increased damage from all sources for seconds. After it expires, Vladimir deals magic damage to all infected targets. Vladimir restores Health if he hits a champion, and restores an additional Health for each champion beyond the first.
