# Kassadin combat review

Patch: 16.16

## P - Void Stone

Coverage: unsupported

Description signature: d036d507d3f17a4bbcd735ce26ba5422a0edd8b89400d9e7ea0f9eca30ec6428

- championDetail: ddab967b672fe4396d3121fe29960779508c788732636f4942e6c0fca9171d06
- championBin: c5ae5a3b8d1afdeff26017477e3693e1fc6e869767865593acfd654fa2b47f96

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Void Stone Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Kassadin takes reduced magic damage and ignores unit collision.

## Q - Null Sphere

Coverage: partial

Description signature: 723d49d720762d10ba9a945eaf9bd2030ab75809249d7db62368e1bf88b78633

- championDetail: ddab967b672fe4396d3121fe29960779508c788732636f4942e6c0fca9171d06
- championBin: c5ae5a3b8d1afdeff26017477e3693e1fc6e869767865593acfd654fa2b47f96

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Null Sphere Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Null Sphere Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Kassadin fires an orb of void energy, dealing magic damage and interrupting channels. Kassadin also gains Magic Shield for 1.5 seconds.

## W - Nether Blade

Coverage: partial

Description signature: 59f269a6b96bb35331f52d943e19629dfbc361e775c2036685e7b8f77cc8c837

- championDetail: ddab967b672fe4396d3121fe29960779508c788732636f4942e6c0fca9171d06
- championBin: c5ae5a3b8d1afdeff26017477e3693e1fc6e869767865593acfd654fa2b47f96

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Nether Blade Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Nether Blade Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Passive: Kassadin's Attacks deal an additional magic damage. Active: Kassadin charges his blade, causing his next Attack to deal magic damage and restore % missing Mana, increased to % against champions.

## E - Force Pulse

Coverage: partial

Description signature: d3af49a48675fd0cfd9b2670dc12830a75b49086d28dc72d926356a89bf69f4e

- championDetail: ddab967b672fe4396d3121fe29960779508c788732636f4942e6c0fca9171d06
- championBin: c5ae5a3b8d1afdeff26017477e3693e1fc6e869767865593acfd654fa2b47f96

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Force Pulse Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Force Pulse Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Passive: Force Pulse's Cooldown is reduced by second whenever any Ability is used near Kassadin. Active: Kassadin unleashes a void pulse, dealing magic damage and Slowing by % for second.

## R - Riftwalk

Coverage: partial

Description signature: 4d79a66c749c7c69085beaecceffb11bc9ef80d9da4134bdda28c12385a03bf3

- championDetail: ddab967b672fe4396d3121fe29960779508c788732636f4942e6c0fca9171d06
- championBin: c5ae5a3b8d1afdeff26017477e3693e1fc6e869767865593acfd654fa2b47f96

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Riftwalk Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Riftwalk Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Kassadin teleports to a nearby location, dealing magic damage. Each subsequent use of this Ability within the next seconds doubles the Mana cost and deals an additional magic damage. The cost and damage increases can stack up to times.
