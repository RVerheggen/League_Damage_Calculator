# Mordekaiser combat review

Patch: 16.16

## P - Darkness Rise

Coverage: unsupported

Description signature: cce256c9baf09688b4a8031441f153af4dba51854d9108a68783ccaa202189f3

- championDetail: 89a86f723511664c2c9874a812effc96815bbde469b6854e919f94897dd7ed16
- championBin: a71a2f221ae9deb635a155b9450a371057532d22ca7bdf15e3d31add6082d0f7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Darkness Rise Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Mordekaiser gains a powerful damage aura and Move Speed after landing 3 attacks or spells against champions or monsters.

## Q - Obliterate

Coverage: partial

Description signature: c49d82b9f45a72d3877b37d60ccb67d3a63b243eae3653e2c191c4d8da96f2f4

- championDetail: 89a86f723511664c2c9874a812effc96815bbde469b6854e919f94897dd7ed16
- championBin: a71a2f221ae9deb635a155b9450a371057532d22ca7bdf15e3d31add6082d0f7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation QDamage was preserved. Stateful and alternate effects require an explicit module.

### Obliterate Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Obliterate Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Mordekaiser smashes the ground with Nightfall dealing magic damage, increased to if it hits only a single enemy.

## W - Indestructible

Coverage: unsupported

Description signature: 54fa0a292fffe09672729b5694ed0263e9036ba73ff428e47ce9515ae207a5ba

- championDetail: 89a86f723511664c2c9874a812effc96815bbde469b6854e919f94897dd7ed16
- championBin: a71a2f221ae9deb635a155b9450a371057532d22ca7bdf15e3d31add6082d0f7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Indestructible Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Passive: Mordekaiser stores % of the damage he deals and % of the damage he takes. Active: Mordekaiser gains the stored damage as Shield. He may Recast this Ability to restore % of the remaining Shield as Health. Minimum Shield: Maximum Shield:

## E - Death's Grasp

Coverage: partial

Description signature: e6dffe77114571cd4b6bf7098c08acefb4d700521b272f94382d318701eb3f93

- championDetail: 89a86f723511664c2c9874a812effc96815bbde469b6854e919f94897dd7ed16
- championBin: a71a2f221ae9deb635a155b9450a371057532d22ca7bdf15e3d31add6082d0f7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Death's Grasp Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Death's Grasp Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Passive: Mordekaiser gains % Magic Penetration. Active: Pulls enemies in his direction, dealing magic damage.

## R - Realm of Death

Coverage: out-of-scope

Description signature: 7d9a5aa792fab69eeda510b6d5eb4c3a8a71da3fb290db56b7508d36cf72aee5

- championDetail: 89a86f723511664c2c9874a812effc96815bbde469b6854e919f94897dd7ed16
- championBin: a71a2f221ae9deb635a155b9450a371057532d22ca7bdf15e3d31add6082d0f7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Realm of Death

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Mordekaiser banishes a champion to the Death Realm with him for s, stealing % of their core stats for the duration. If Mordekaiser kills that enemy in the Death Realm he consumes their soul, keeping the stats he stole until the target respawns.
