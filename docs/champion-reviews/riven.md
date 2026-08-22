# Riven combat review

Patch: 16.16

## P - Runic Blade

Coverage: unsupported

Description signature: 7553efc9d3f28e3aeda1f4bf0e2948e0e9b33966a05f959f61d0424db6e0d775

- championDetail: 7478594b5cf083e934041a1bb060fbfc81311b261e98c416daa9b01fdf8997dd
- championBin: b9ae2508d486c11bbb8edfba9d7ae887e2c5b4d2f9b8177d09a14a35efcb1fb4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Runic Blade Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Riven's abilities charge her blade, and her basic attacks expend charges to deal an additional damage.

## Q - Broken Wings

Coverage: partial

Description signature: 9748647d3ff86ff64699b28b71ea2c304d7d58a207dc8a7346ef7dc8978b91cc

- championDetail: 7478594b5cf083e934041a1bb060fbfc81311b261e98c416daa9b01fdf8997dd
- championBin: b9ae2508d486c11bbb8edfba9d7ae887e2c5b4d2f9b8177d09a14a35efcb1fb4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation FirstSlashDamage was preserved. Stateful and alternate effects require an explicit module.

### Broken Wings Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Broken Wings Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Riven dashes forward, dealing physical damage. She can Recast this Ability twice. The first Recast is the same as the original, but the second has a different effect: Recast: Riven leaps forward and slams, dealing physical damage and Knocks Up nearby enemies for 0.75 seconds.

## W - Ki Burst

Coverage: partial

Description signature: ce6fd9fd4d4d38809087ab914af518bf11f622469c6495637e3c12679f2d7b9c

- championDetail: 7478594b5cf083e934041a1bb060fbfc81311b261e98c416daa9b01fdf8997dd
- championBin: b9ae2508d486c11bbb8edfba9d7ae887e2c5b4d2f9b8177d09a14a35efcb1fb4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Ki Burst Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ki Burst Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Riven's sword emits a burst of runic energy, dealing physical damage and Stunning for seconds.

## E - Valor

Coverage: unsupported

Description signature: e8e9dabb047931bff432400e28549853fcfa0c1368341b816f05f2923039e78e

- championDetail: 7478594b5cf083e934041a1bb060fbfc81311b261e98c416daa9b01fdf8997dd
- championBin: b9ae2508d486c11bbb8edfba9d7ae887e2c5b4d2f9b8177d09a14a35efcb1fb4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Valor Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Riven quickly dashes and gains Shield for 1.5 seconds.

## R - Blade of the Exile

Coverage: partial

Description signature: d7468542ee3cb23d88e52e44eddb090adee6fe3527afd50fb7f8fd20976088fa

- championDetail: 7478594b5cf083e934041a1bb060fbfc81311b261e98c416daa9b01fdf8997dd
- championBin: b9ae2508d486c11bbb8edfba9d7ae887e2c5b4d2f9b8177d09a14a35efcb1fb4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BonusAD was preserved. Stateful and alternate effects require an explicit module.

### Blade of the Exile Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Blade of the Exile Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Riven's weapon surges with spiritual energy, granting her Attack Damage and increased range on damaging Abilities and Attacks for seconds. While active, she can Recast. Recast: Riven fires a wind slash that deals between and physical damage, based on their missing Health.
