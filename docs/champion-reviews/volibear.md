# Volibear combat review

Patch: 16.16

## P - The Relentless Storm

Coverage: unsupported

Description signature: 543acd7a44f41f8b4deacd954cf3c2acb8d4320ca540f3db10f4b03bec98c069

- championDetail: e5cc3affd9de23b8da5f9ecbf083bfd16455b78345d8ee0950ca6cd589d2374a
- championBin: 1cc8de00c6f2e64d3d77530219f62a472816c9ea717bd6f0d11afb16935e1e1e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### The Relentless Storm Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Volibear's Attacks and abilities grant Attack Speed, and eventually cause his Attacks to deal bonus magic damage to nearby enemies.

## Q - Thundering Smash

Coverage: partial

Description signature: b73611e6df893a95aa2690f8257c6608a253d8acaae04989ac476620f041a747

- championDetail: e5cc3affd9de23b8da5f9ecbf083bfd16455b78345d8ee0950ca6cd589d2374a
- championBin: 1cc8de00c6f2e64d3d77530219f62a472816c9ea717bd6f0d11afb16935e1e1e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation CalculatedDamage was preserved. Stateful and alternate effects require an explicit module.

### Thundering Smash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Thundering Smash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Volibear gains Move Speed, doubled to towards enemy champions for the next seconds. While active, Volibear's next Attack deals physical damage and Stuns the target for second. Volibear becomes enraged if an enemy Immobilizes him before he Stuns a target, ending the Ability early but refreshing its Cooldown.

## W - Frenzied Maul

Coverage: partial

Description signature: d3320307de2a6a99bb6556b5a538463a796286a8f3a02e63989d7630b3faf88b

- championDetail: e5cc3affd9de23b8da5f9ecbf083bfd16455b78345d8ee0950ca6cd589d2374a
- championBin: 1cc8de00c6f2e64d3d77530219f62a472816c9ea717bd6f0d11afb16935e1e1e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Frenzied Maul Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Frenzied Maul Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Volibear mauls an enemy, dealing physical damage and marking them for seconds. If this Ability is used on a marked target, its damage is increased to and Volibear restores plus missing Health.

## E - Sky Splitter

Coverage: partial

Description signature: fd6ab836c2c02672f6f47a442d85184cc5ee4d5cdf89ed356ad486b44972c99a

- championDetail: e5cc3affd9de23b8da5f9ecbf083bfd16455b78345d8ee0950ca6cd589d2374a
- championBin: 1cc8de00c6f2e64d3d77530219f62a472816c9ea717bd6f0d11afb16935e1e1e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Sky Splitter Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Sky Splitter Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Volibear summons a thundercloud that fires a lightning bolt, dealing plus % max Health magic damage and Slowing by % for seconds. If Volibear is inside the blast zone, he gains a plus % max Health Shield for seconds.

## R - Stormbringer

Coverage: partial

Description signature: c07ec1e3a8ae45e1a77346908ea9ba7df49c266b90ca9f41a2ece36c81e18870

- championDetail: e5cc3affd9de23b8da5f9ecbf083bfd16455b78345d8ee0950ca6cd589d2374a
- championBin: 1cc8de00c6f2e64d3d77530219f62a472816c9ea717bd6f0d11afb16935e1e1e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TowerDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Stormbringer Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Stormbringer Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Volibear transforms and leaps, gaining Health and Attack Range for the next seconds. Upon landing, Volibear cracks the earth, Disabling nearby towers for seconds and dealing physical damage to them. Nearby enemies are Slowed by %, decaying over 1 second. Enemies directly underneath Volibear suffer physical damage.
