# Nidalee combat review

Patch: 16.16

## P - Prowl

Coverage: out-of-scope

Description signature: 4a15200b9fa6a5651776d44286d0e2429eb39fdbc3c99720ad65c26b8d0daf32

- championDetail: f61bee7eea1c48b67ad2afbe7f4849835796055cc9ea407182b760c9ef1d3bd2
- championBin: 60bddb6fce0f6825fb454e0556536e54412b7c6dec16fe738d394c655f52b54c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Prowl

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Moving through brush increases Nidalee's Move Speed by 10% for 2 seconds, increased to 30% toward visible enemy champions within 1400 range. Hitting champions or monsters with Javelin Toss or Bushwhack triggers a Hunt, granting True Sight of them for 4 seconds. During this time, Nidalee gains 10% Move Speed (increased to 30% toward the Hunted target) and her Takedown and Pounce are enhanced against them.

## Q - Javelin Toss / Takedown

Coverage: partial

Description signature: 217d5c787205221fbdcc4af80d184656052b93668464706dd70240368210c73c

- championDetail: f61bee7eea1c48b67ad2afbe7f4849835796055cc9ea407182b760c9ef1d3bd2
- championBin: 60bddb6fce0f6825fb454e0556536e54412b7c6dec16fe738d394c655f52b54c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation HumanMinimumDamage was preserved. Stateful and alternate effects require an explicit module.

### Javelin Toss / Takedown Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Javelin Toss / Takedown Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Human Form: Nidalee throws her javelin, dealing magic damage, increased up to magic damage based on distance flown.

## W - Bushwhack / Pounce

Coverage: partial

Description signature: 6fec5f87fda00a1d7b48b52aff091614864cbf06f3881ccd08ba876084300a71

- championDetail: f61bee7eea1c48b67ad2afbe7f4849835796055cc9ea407182b760c9ef1d3bd2
- championBin: 60bddb6fce0f6825fb454e0556536e54412b7c6dec16fe738d394c655f52b54c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamagePerSecond was preserved. Stateful and alternate effects require an explicit module.

### Bushwhack / Pounce Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Bushwhack / Pounce Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Human Form: Nidalee places an invisible trap for 2 minutes. When an enemy walks over it, they are dealt magic damage per second for seconds. traps may be active at once.

## E - Primal Surge / Swipe

Coverage: out-of-scope

Description signature: 0f7016f5cfdcc824516ae9e64b5f51fcafdd7f82fc5e7aacc62487263c98cac3

- championDetail: f61bee7eea1c48b67ad2afbe7f4849835796055cc9ea407182b760c9ef1d3bd2
- championBin: 60bddb6fce0f6825fb454e0556536e54412b7c6dec16fe738d394c655f52b54c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Primal Surge / Swipe

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Human Form: Nidalee restores Health increased up to based on missing Health and grants them % Attack Speed for seconds.

## R - Aspect Of The Cougar

Coverage: partial

Description signature: d66ca58be08cdf44ad5a6ecfb281fcbef6652964e5d99a8ba1cdcb0a983136b8

- championDetail: f61bee7eea1c48b67ad2afbe7f4849835796055cc9ea407182b760c9ef1d3bd2
- championBin: 60bddb6fce0f6825fb454e0556536e54412b7c6dec16fe738d394c655f52b54c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Aspect Of The Cougar Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Aspect Of The Cougar Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: While in Human Form, applying Hunted refreshes this Ability's Cooldown. Human Form: Nidalee transforms into Cougar Form, gaining melee Attacks and replacing her Active Abilities. Cougar Form: Nidalee transforms into Human Form, gaining ranged Attacks and replacing her Active Abilities.
