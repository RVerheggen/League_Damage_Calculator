# Fizz combat review

Patch: 16.16

## P - Nimble Fighter

Coverage: unsupported

Description signature: 901a7123efba4660d5076ab7e6a19906ddd1d1826a7b62d7d9092b6536317913

- championDetail: da4ffce52eb7a54e2f8b8d31db624ac2ede386868b2e8cac0668abd40180eb14
- championBin: d55d752a4ae85ec25448db0a5e0e8e26a3f4407cc9ea818e916906949d1a03b2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Nimble Fighter Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Fizz can move through units and takes a flat amount of reduced damage from all sources

## Q - Urchin Strike

Coverage: partial

Description signature: a4e3759d09834ebd5ff1ec38de9d9def9e11d3e2332239c9d3ddeadd6d7d5cb4

- championDetail: da4ffce52eb7a54e2f8b8d31db624ac2ede386868b2e8cac0668abd40180eb14
- championBin: d55d752a4ae85ec25448db0a5e0e8e26a3f4407cc9ea818e916906949d1a03b2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Urchin Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Urchin Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Fizz dashes through an enemy, dealing physical damage plus magic damage.

## W - Seastone Trident

Coverage: modeled

Description signature: 8ac282fe4f436b0ce0277dd63314cb7438fdf2ece9aa03eac0eb64a5158f04ec

- championDetail: da4ffce52eb7a54e2f8b8d31db624ac2ede386868b2e8cac0668abd40180eb14
- championBin: d55d752a4ae85ec25448db0a5e0e8e26a3f4407cc9ea818e916906949d1a03b2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Seastone Trident applies a refreshable six-tick bleed, arms the next attack for four seconds, and empowers later attacks for five seconds after the armed hit. Kill-only mana and cooldown behavior is outside the supported same-target continuation.

### Seastone Trident Bleed

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: scheduled-damage
- Reason: Compiled as refreshable source-target scheduled damage.

Basic attacks apply six half-second magic-damage ticks over three seconds. Reapplication refreshes the effect and replaces ticks that have not resolved.

Formula bindings: FizzW.DoTDamage

Value bindings: FizzW.BleedDuration, FizzW.DoTTicksPerSecond

### Seastone Trident Active Attack

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: arm-next-hit
- Reason: Compiled as participant state and a consuming damage operation.

Casting W arms one successful basic attack for four seconds. The attack consumes the armed state and adds patch-ranked magic damage.

Formula bindings: FizzW.ActiveDamage

Value bindings: FizzW.ActiveDuration

### Seastone Trident Follow-Up On-Hit

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: timed-on-hit
- Reason: Compiled as a timed participant state.

After the armed attack, later successful attacks add patch-ranked magic damage for five seconds.

Formula bindings: FizzW.OnHitBuffDamage

Value bindings: FizzW.OnHitBuffDuration

### Kill Refund

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Mana and target-death continuation do not change the supported damage result. Simulation stops on lethal damage unless the sandbox override is enabled.

If the armed attack kills, W refunds mana, sets its cooldown to one second, and does not grant the follow-up buff.

### Basic Attack Reset

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Combo delays are selected manually.

Casting W resets Fizz's basic-attack timer.

## E - Playful / Trickster

Coverage: partial

Description signature: 54332ff247434546933b94d7345d11de4a92ca4f3156c834914331cad17c7c92

- championDetail: da4ffce52eb7a54e2f8b8d31db624ac2ede386868b2e8cac0668abd40180eb14
- championBin: d55d752a4ae85ec25448db0a5e0e8e26a3f4407cc9ea818e916906949d1a03b2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation EDamage was preserved. Stateful and alternate effects require an explicit module.

### Playful / Trickster Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Playful / Trickster Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Fizz hops onto his trident, becoming Untargetable for 0.75 seconds, after which he deals magic damage to nearby enemies and Slows them by % for seconds. Fizz can Recast this Ability while Untargetable to dash again, which ends the effect early, deals damage in a smaller area, and doesn't Slow.

## R - Chum the Waters

Coverage: partial

Description signature: cdf7f64888c5ab8a99984a912c707d8169545e007a35b36209d9c5987b0785dc

- championDetail: da4ffce52eb7a54e2f8b8d31db624ac2ede386868b2e8cac0668abd40180eb14
- championBin: d55d752a4ae85ec25448db0a5e0e8e26a3f4407cc9ea818e916906949d1a03b2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation SmallSharkDamage was preserved. Stateful and alternate effects require an explicit module.

### Chum the Waters Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Chum the Waters Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Fizz launches a fish that attaches to the first champion hit. The victim is afflicted with True Sight and Slowed by between 40% to 80% based on how far the fish travelled before attaching. After seconds a shark erupts on the target, Knocking Up the target with the fish for 1 second, Knocking Back everything else, and dealing between to magic damage based on how far the fish travelled before attaching.
