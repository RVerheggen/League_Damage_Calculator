# Caitlyn combat review

Patch: 16.16

## P - Headshot

Coverage: unsupported

Description signature: cf08b4a79015b878cf31683eed38674a6af5ee7d998a25e71858bc25a3230964

- championDetail: dac24577de504355ff576e7896ad5b2fb6c147bce0ef7b35914a8588f191417f
- championBin: e7667030324dd72fc09d9f2026e15e1e560dd65cef9ca5771559857b97685044

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Headshot Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled.

## Q - Piltover Peacemaker

Coverage: partial

Description signature: c21142aacc843c6064ed37110a5108c93a384312a64fa955f18fc15a3052f2ff

- championDetail: dac24577de504355ff576e7896ad5b2fb6c147bce0ef7b35914a8588f191417f
- championBin: e7667030324dd72fc09d9f2026e15e1e560dd65cef9ca5771559857b97685044

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation InitialDamage was preserved. Stateful and alternate effects require an explicit module.

### Piltover Peacemaker Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Piltover Peacemaker Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Caitlyn revs her rifle to fire a piercing shot dealing physical damage. After the bolt strikes the first target, it opens into a wider shot that deals physical damage. Enemies revealed by Yordle Snap Trap always take full damage.

## W - Yordle Snap Trap

Coverage: partial

Description signature: b71477c1c0c477db9bf8aa8a853bfa348d87ac7a36387aac6baf8602d9e45e2d

- championDetail: dac24577de504355ff576e7896ad5b2fb6c147bce0ef7b35914a8588f191417f
- championBin: e7667030324dd72fc09d9f2026e15e1e560dd65cef9ca5771559857b97685044

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation HeadShotBonusDamage was preserved. Stateful and alternate effects require an explicit module.

### Yordle Snap Trap Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Yordle Snap Trap Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Caitlyn sets a trap that Roots the first champion that steps on it for seconds and granting True Sight of them for 3 seconds. Traps last for seconds, and traps may be active at once. This Ability has charges ( second refresh). Targets rooted by this Ability take an additional physical damage from Headshot.

## E - 90 Caliber Net

Coverage: partial

Description signature: 538bc784ecc75e3924a633eeb3bbaea88de420cf4ba2bdea98909c2c89ac119a

- championDetail: dac24577de504355ff576e7896ad5b2fb6c147bce0ef7b35914a8588f191417f
- championBin: e7667030324dd72fc09d9f2026e15e1e560dd65cef9ca5771559857b97685044

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation NetDamage was preserved. Stateful and alternate effects require an explicit module.

### 90 Caliber Net Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### 90 Caliber Net Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Caitlyn fires a net, pushing her backwards. The net Slows the first target hit by % for second and deals magic damage.

## R - Ace in the Hole

Coverage: partial

Description signature: 81dda8cb7de324a4ef88736f22f3359f8e7160222e5d4fe69f129497cdb28ddc

- championDetail: dac24577de504355ff576e7896ad5b2fb6c147bce0ef7b35914a8588f191417f
- championBin: e7667030324dd72fc09d9f2026e15e1e560dd65cef9ca5771559857b97685044

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RTotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Ace in the Hole Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ace in the Hole Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Caitlyn takes a moment to channel and line up the perfect shot, then she fires, dealing physical damage, but other enemy champions can intercept it. This Ability grants True Sight of the target during the channel. Damage scales with Caitlyn's Critical Strike chance and Critical Strike Damage.
