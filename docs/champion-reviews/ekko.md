# Ekko combat review

Patch: 16.16

## P - Z-Drive Resonance

Coverage: unsupported

Description signature: 9fb725b49c57cd75ce86002494b8249751bc928888d545e0109cab0d84964781

- championDetail: 153f54afe0746f28f8b21537faffcb4d80e9726f83d61d4642071cea7d82aee1
- championBin: ca6fb4a90fe8b1c9b82dbb2dce5faf68c187a588a5a233f12c75837d0918bfe6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Z-Drive Resonance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Every third attack or damaging spell on the same target deals bonus magic damage, and grants Ekko a burst of speed if the target is a champion.

## Q - Timewinder

Coverage: partial

Description signature: dda4bc4ade7bbe21705bd6e8d2026e09936573d1d99cffba147adf8be62ef6c0

- championDetail: 153f54afe0746f28f8b21537faffcb4d80e9726f83d61d4642071cea7d82aee1
- championBin: ca6fb4a90fe8b1c9b82dbb2dce5faf68c187a588a5a233f12c75837d0918bfe6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation InitialDamage was preserved. Stateful and alternate effects require an explicit module.

### Timewinder Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Timewinder Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ekko throws a device dealing magic damage. On hitting a champion or reaching the end of its range, it expands into a field that Slows enemies inside by %. After it expands, Ekko recalls it, dealing magic damage.

## W - Parallel Convergence

Coverage: partial

Description signature: 871bf911e544c189dcf9bd7f5056f857dffd1a23bc3cf0a60d9ea46bc340b3bf

- championDetail: 153f54afe0746f28f8b21537faffcb4d80e9726f83d61d4642071cea7d82aee1
- championBin: ca6fb4a90fe8b1c9b82dbb2dce5faf68c187a588a5a233f12c75837d0918bfe6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MissingHealthPercent was preserved. Stateful and alternate effects require an explicit module.

### Parallel Convergence Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Parallel Convergence Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Passive: Ekko's Attacks against enemies below % Health deal missing Health magic damage. Active: Ekko launches a chronosphere lasting seconds after a delay that Slows enemies inside by %. If Ekko enters the sphere, he detonates it, Stunning for seconds and gaining Shield.

## E - Phase Dive

Coverage: partial

Description signature: b7c0829f013391c9c592e52b42bbc56e16e46184050516b9f27ce4a81ac16d52

- championDetail: 153f54afe0746f28f8b21537faffcb4d80e9726f83d61d4642071cea7d82aee1
- championBin: ca6fb4a90fe8b1c9b82dbb2dce5faf68c187a588a5a233f12c75837d0918bfe6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Phase Dive Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Phase Dive Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Ekko dashes and empowers his next Attack to have bonus range, teleport him to his target, and deal an additional magic damage.

## R - Chronobreak

Coverage: partial

Description signature: 2b05e79cdace213280acafbf22c70810fa835c14a81e595910d407d5f84add05

- championDetail: 153f54afe0746f28f8b21537faffcb4d80e9726f83d61d4642071cea7d82aee1
- championBin: ca6fb4a90fe8b1c9b82dbb2dce5faf68c187a588a5a233f12c75837d0918bfe6

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Chronobreak Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Chronobreak Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ekko turns back time, entering Stasis while teleporting to where he was 4 seconds ago and dealing magic damage to nearby enemies. In addition, Ekko restores Health, increased by % for each 1% Health he lost in last 4 seconds.
