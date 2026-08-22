# Taliyah combat review

Patch: 16.16

## P - Rock Surfing

Coverage: out-of-scope

Description signature: 628de5916a8b4362c1447369d97f2b1d68d36f79890b0ab013a140f1962ad20a

- championDetail: 2aaaf03de1e2ab05a4216013d3718ebc35259a876bd921a4cc05c5653a5d676b
- championBin: 954ae614d3df20ace92a16a172c9fea51a736d472fafa25cff5e8a182bb4350f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Rock Surfing

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Taliyah gains Move Speed near walls.

## Q - Threaded Volley

Coverage: partial

Description signature: f315f1bff8dddbea449dff48061354bd4f7158870a18d6fbe3cb2b54db4f3580

- championDetail: 2aaaf03de1e2ab05a4216013d3718ebc35259a876bd921a4cc05c5653a5d676b
- championBin: 954ae614d3df20ace92a16a172c9fea51a736d472fafa25cff5e8a182bb4350f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RockDamage was preserved. Stateful and alternate effects require an explicit module.

### Threaded Volley Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Threaded Volley Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Taliyah hurls 5 rocks, each dealing magic damage in an area around the first enemy hit while creating Worked Ground at that area. Subsequent hits against the same enemy deal % less damage. Casts on worked ground cost Mana and have % less Cooldown, consume the Worked Ground, and hurl a boulder that Slows enemies it hits by % for seconds, dealing magic damage to the primary target. Monsters hit by the boulder are Stunned for seconds.

## W - Seismic Shove

Coverage: out-of-scope

Description signature: 101c0ee01a481da5fd170ad8fe9a40790eadf8f9c58da37828fb25f8250e2773

- championDetail: 2aaaf03de1e2ab05a4216013d3718ebc35259a876bd921a4cc05c5653a5d676b
- championBin: 954ae614d3df20ace92a16a172c9fea51a736d472fafa25cff5e8a182bb4350f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Seismic Shove

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Taliyah quakes the earth, Knocking enemies in an area in the chosen direction.

## E - Unraveled Earth

Coverage: partial

Description signature: ee0e639e42e7bc814f1f2099a8aa9e155d6bedc21e65d635b69f336f86ea4902

- championDetail: 2aaaf03de1e2ab05a4216013d3718ebc35259a876bd921a4cc05c5653a5d676b
- championBin: 954ae614d3df20ace92a16a172c9fea51a736d472fafa25cff5e8a182bb4350f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation ScatterDamage was preserved. Stateful and alternate effects require an explicit module.

### Unraveled Earth Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Unraveled Earth Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Taliyah scatters loose stones in an area, Slowing enemies hit by % and dealing magic damage. The stones detonate when enemies dash or are Knocked through them, Stunning for the remaining movement duration + seconds and dealing magic damage.

## R - Weaver's Wall

Coverage: out-of-scope

Description signature: 3bfd3f547cde2c56adbb1982b73e764cda3f4db4fa70aa870a3dab04dd70fc3b

- championDetail: 2aaaf03de1e2ab05a4216013d3718ebc35259a876bd921a4cc05c5653a5d676b
- championBin: 954ae614d3df20ace92a16a172c9fea51a736d472fafa25cff5e8a182bb4350f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Weaver's Wall

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Taliyah creates a massive earthen wall for seconds. If she immediately Recasts, she will ride along the wall as it unravels. Moving or being immobilized will end the ride. This ability cannot be cast if Taliyah has taken damage from Champions or structures within the last seconds.
