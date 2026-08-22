# Alistar combat review

Patch: 16.16

## P - Triumphant Roar

Coverage: out-of-scope

Description signature: d8c42af5acc8f9ad7f827bac32931969d5242baa82957391186d38fd8a6f7f94

- championDetail: 5cb0130f3041731ed05d9a15ecf1bf41bbdd33263e27abfdc9302fb5cf456714
- championBin: 2dd42b534d8000f75ca0317eb08386591b8aa9b62ef4f1058c8707866e162c9c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Triumphant Roar

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself all nearby allied champions.

## Q - Pulverize

Coverage: partial

Description signature: bc06d190129fd05b0c0da4e2221100c982e72753c263ae6ffa06ebef80d9daad

- championDetail: 5cb0130f3041731ed05d9a15ecf1bf41bbdd33263e27abfdc9302fb5cf456714
- championBin: 2dd42b534d8000f75ca0317eb08386591b8aa9b62ef4f1058c8707866e162c9c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Pulverize Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Pulverize Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Alistar smashes the ground, Knocking Up enemies for second and dealing magic damage.

## W - Headbutt

Coverage: partial

Description signature: 5fba06c96948b6bdeba208f8f55b273e0f4bbde42ba9b51a7eb135f0cd93230b

- championDetail: 5cb0130f3041731ed05d9a15ecf1bf41bbdd33263e27abfdc9302fb5cf456714
- championBin: 2dd42b534d8000f75ca0317eb08386591b8aa9b62ef4f1058c8707866e162c9c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Headbutt Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Headbutt Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Alistar rams into an enemy, Knocking them Back and dealing magic damage.

## E - Trample

Coverage: partial

Description signature: 1a2d92641939cab1ee168f939fb3b0ae10a2dbe3bf54f1dc79da8ca7f330a191

- championDetail: 5cb0130f3041731ed05d9a15ecf1bf41bbdd33263e27abfdc9302fb5cf456714
- championBin: 2dd42b534d8000f75ca0317eb08386591b8aa9b62ef4f1058c8707866e162c9c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Trample Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Trample Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Alistar begins trampling the ground, becoming Ghosted and dealing magic damage over seconds to nearby enemies. Each pulse that damages a champion grants a stack. At stacks, Alistar's next Attack against champions Stuns for second and deals an additional magic damage.

## R - Unbreakable Will

Coverage: unsupported

Description signature: a51c2c880626c3de9be444d94a49b1668f274a12d87c8beac0f5ccd5b0ee0fb2

- championDetail: 5cb0130f3041731ed05d9a15ecf1bf41bbdd33263e27abfdc9302fb5cf456714
- championBin: 2dd42b534d8000f75ca0317eb08386591b8aa9b62ef4f1058c8707866e162c9c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Unbreakable Will Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Alistar immediately cleanses all Disabling effects and takes % reduced damage for seconds.
