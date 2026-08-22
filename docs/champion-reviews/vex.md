# Vex combat review

Patch: 16.16

## P - Doom 'n Gloom

Coverage: unsupported

Description signature: 2c31ab6b816be50cffe9a03ac0864f93cb2326161f6b44960388b90befcb8584

- championDetail: a14582361d863d44d7d28066ffc733d6c4bbdf98cc7ffbc458dab8f4cbe094b2
- championBin: 599bba919deea46eb28355b81cfa8508176cb42ada48ca4afb0c8faf499e9f7c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Doom 'n Gloom Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Vex periodically becomes empowered, causing her next basic Ability to fear enemies and interrupt dashes. Whenever a nearby enemy dashes, Vex applies a mark that can be consumed for bonus damage that also reduces the cooldown of her empowered state.

## Q - Mistral Bolt

Coverage: partial

Description signature: d4e5819ea2b732f88ff63eb1162a9132d615a998c964ebf8e8bf16ebf78f3841

- championDetail: a14582361d863d44d7d28066ffc733d6c4bbdf98cc7ffbc458dab8f4cbe094b2
- championBin: 599bba919deea46eb28355b81cfa8508176cb42ada48ca4afb0c8faf499e9f7c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Mistral Bolt Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Mistral Bolt Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Vex launches a wave of mist that deals magic damage. After a delay, the wave becomes smaller and faster. Consumes Gloom on enemies hit.

## W - Personal Space

Coverage: partial

Description signature: 6a9e662e1721453be205c145535451a24c32075eee00577422723c8393eb0070

- championDetail: a14582361d863d44d7d28066ffc733d6c4bbdf98cc7ffbc458dab8f4cbe094b2
- championBin: 599bba919deea46eb28355b81cfa8508176cb42ada48ca4afb0c8faf499e9f7c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Personal Space Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Personal Space Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Vex gains Shield for seconds and emits a shockwave that deals magic damage. Consumes Gloom on enemies hit.

## E - Looming Darkness

Coverage: partial

Description signature: 90c559601f438da7783e18526252773b8a52cf39ccba1414f19763da9ef0450c

- championDetail: a14582361d863d44d7d28066ffc733d6c4bbdf98cc7ffbc458dab8f4cbe094b2
- championBin: 599bba919deea46eb28355b81cfa8508176cb42ada48ca4afb0c8faf499e9f7c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Looming Darkness Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Looming Darkness Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Vex commands Shadow to fly to a location, increasing in size as it travels. Upon arriving, it deals magic damage and Slows by % for seconds. Killing an enemy with this ability reduces Doom'n Gloom's Cooldown by %. Applies Gloom to enemies hit.

## R - Shadow Surge

Coverage: partial

Description signature: ecf1011a6aceada9ce1b4b3e6a0db89b46941af18afa38f3fea4ba70c47faf9e

- championDetail: a14582361d863d44d7d28066ffc733d6c4bbdf98cc7ffbc458dab8f4cbe094b2
- championBin: 599bba919deea46eb28355b81cfa8508176cb42ada48ca4afb0c8faf499e9f7c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Shadow Surge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Shadow Surge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Shadow excitedly surges forward, dealing magic damage and marking the first enemy champion hit for 4 seconds. Recast: Dash to the marked champion, dealing magic damage on arrival. If the marked champion dies within seconds of taking damage from this Ability, its Cooldown is temporarily reset.
