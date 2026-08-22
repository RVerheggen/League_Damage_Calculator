# Senna combat review

Patch: 16.16

## P - Absolution

Coverage: unsupported

Description signature: e7b644f983b9430e532e71952c528eb4960d54f0c7a7c71a7a7d2f2ef918462b

- championDetail: 50d10d7bee2dff13a478472a93f84a30e481d7a2a65f69bc08dbcce218669fdc
- championBin: f97450e21955b3eb802bd53084ce457be3ab452534c1152e5ca66ddc7fd5f43e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Absolution Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

When units die near Senna, their souls are periodically trapped by the Black Mist. Senna can attack these souls to free them, absorbing the Mist that held them in death. Mist fuels her Relic Cannon's power with increased Attack Damage, Attack Range, and Critical Strike Chance. Attacks from Senna's Relic Cannon take longer to fire, deal bonus damage, and briefly grant her a portion of her target's Move Speed.

## Q - Piercing Darkness

Coverage: partial

Description signature: beec3f5983cd294f5af20ed84c50cd63b99fe172293f219193b13f3989ff4d53

- championDetail: 50d10d7bee2dff13a478472a93f84a30e481d7a2a65f69bc08dbcce218669fdc
- championBin: f97450e21955b3eb802bd53084ce457be3ab452534c1152e5ca66ddc7fd5f43e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Piercing Darkness Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Piercing Darkness Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Senna shoots a bolt of piercing shadow through an ally or enemy, dealing physical damage to enemies and Slowing them by for second(s). Restores Health to allied champions. Attacks reduce this Ability's Cooldown by second.

## W - Last Embrace

Coverage: partial

Description signature: 3c320b8dd0724cfe1d1e35d0795e4a1271bf4387a7addd7a22fe7de2bcb13980

- championDetail: 50d10d7bee2dff13a478472a93f84a30e481d7a2a65f69bc08dbcce218669fdc
- championBin: f97450e21955b3eb802bd53084ce457be3ab452534c1152e5ca66ddc7fd5f43e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Last Embrace Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Last Embrace Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Senna sends forth the Black Mist, dealing physical damage to the first enemy hit. After a second delay the target and other nearby enemies are Rooted for second(s).

## E - Curse of the Black Mist

Coverage: out-of-scope

Description signature: 39a4e2c7fcb316c5240549f5922bfa2560a24f8781933a86cb184921c2aec5c5

- championDetail: 50d10d7bee2dff13a478472a93f84a30e481d7a2a65f69bc08dbcce218669fdc
- championBin: f97450e21955b3eb802bd53084ce457be3ab452534c1152e5ca66ddc7fd5f43e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Curse of the Black Mist

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Senna dissolves into a cloud of Black Mist for seconds, becoming a Wraith. Allied champions who enter the Mist are Camouflaged and become Wraiths when they leave. Wraiths gain Move Speed, are Unselectable, and hide their identities as long as no enemy champions are nearby.

## R - Dawning Shadow

Coverage: partial

Description signature: 36d67b4bcfce9139aa79a48519f0bdc9575385d76efae90c70e910911f534995

- championDetail: 50d10d7bee2dff13a478472a93f84a30e481d7a2a65f69bc08dbcce218669fdc
- championBin: f97450e21955b3eb802bd53084ce457be3ab452534c1152e5ca66ddc7fd5f43e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Dawning Shadow Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Dawning Shadow Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Senna fires a beam of light that deals physical damage to all enemy champions hit. Allied champions hit in a wider area receive Shield for seconds.
