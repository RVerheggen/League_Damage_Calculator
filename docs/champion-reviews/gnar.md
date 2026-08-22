# Gnar combat review

Patch: 16.16

## P - Rage Gene

Coverage: out-of-scope

Description signature: 6869ae789279b74a0238c0c7662bd7dee7e6a591c7de2476345074a3006dec46

- championDetail: c465ee86ea793ec6ed45fd9bd7d47e03cdd2c935b721f84a473d99bb6e03dd8e
- championBin: eaa550eee9f57c7587fe4ee0d7af1a932de62c98ce6684395aa00ee1319b2dfa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Rage Gene

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

While in combat Gnar generates Rage. At maximum Rage his next ability will transform him into Mega Gnar, granting increased survivability and access to new spells.

## Q - Boomerang Throw / Boulder Toss

Coverage: partial

Description signature: 002e3d95ac0f2c59ec786a705786406f2bdbc2df422ea99155a7ecefeae0f61f

- championDetail: c465ee86ea793ec6ed45fd9bd7d47e03cdd2c935b721f84a473d99bb6e03dd8e
- championBin: eaa550eee9f57c7587fe4ee0d7af1a932de62c98ce6684395aa00ee1319b2dfa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Boomerang Throw / Boulder Toss Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Boomerang Throw / Boulder Toss Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Mini Gnar: Gnar throws a boomerang that deals physical damage and Slows by % for seconds. The boomerang returns after hitting an enemy, dealing reduced damage to subsequent targets. Each enemy can only be hit once. Catching the boomerang reduces its Cooldown by %.

## W - Hyper / Wallop

Coverage: unsupported

Description signature: 124c0f03004916c43a895cf6c10ffbdabd9ad2e83363060bff5899b528c03301

- championDetail: c465ee86ea793ec6ed45fd9bd7d47e03cdd2c935b721f84a473d99bb6e03dd8e
- championBin: eaa550eee9f57c7587fe4ee0d7af1a932de62c98ce6684395aa00ee1319b2dfa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Attacks and abilities share a per-target third-hit threshold. The source is assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Hyper / Wallop Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: Attacks and abilities share a per-target third-hit threshold. The source is assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Mini Gnar Passive: Every third Attack or Ability on the same enemy deals an additional plus % max Health magic damage and grants % Move Speed decaying over seconds.

## E - Hop / Crunch

Coverage: partial

Description signature: 2596513a5bfc011a02e4459090e08087fb2e68ed1c83d5792c48d163257ad12a

- championDetail: c465ee86ea793ec6ed45fd9bd7d47e03cdd2c935b721f84a473d99bb6e03dd8e
- championBin: eaa550eee9f57c7587fe4ee0d7af1a932de62c98ce6684395aa00ee1319b2dfa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Hop / Crunch Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Hop / Crunch Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Mini Gnar: Gnar leaps, gaining % Attack Speed for seconds. If Gnar lands on a unit he will bounce off it, traveling further. Bouncing off an enemy deals physical damage and briefly Slows by %.

## R - GNAR!

Coverage: partial

Description signature: 96b492232f801c3ba0c98f60326c116f518eec9684fa70e50506956e4516bbf6

- championDetail: c465ee86ea793ec6ed45fd9bd7d47e03cdd2c935b721f84a473d99bb6e03dd8e
- championBin: eaa550eee9f57c7587fe4ee0d7af1a932de62c98ce6684395aa00ee1319b2dfa

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### GNAR! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### GNAR! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Mini Gnar Passive: Increase Hyper's Move Speed. Mega Gnar: Gnar tosses nearby enemies, dealing physical damage, Knocking Back, and Slowing them by % for seconds. Enemies that hit a wall instead take physical damage and are Stunned.
