# Shen combat review

Patch: 16.16

## P - Ki Barrier

Coverage: unsupported

Description signature: 402204ff948a1bb708841b27b98776a2cfddd331db3035e3184eb3c4f547bf8e

- championDetail: b77372f4f9c15a1a769b8d4135a13426212a31f205b3f23e98f6ed8d61cb9b23
- championBin: a651a8634b3bb5c57f42e1b6993275a266cea0f5c936e47f08878022ed9351ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Ki Barrier Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

After casting a spell, Shen gets a shield. Affecting other champions reduces the cooldown of this effect.

## Q - Twilight Assault

Coverage: partial

Description signature: 4cc87e1d1b3e168ce990c8b51bf8dde892f683e9e30caee714f727e2e504d020

- championDetail: b77372f4f9c15a1a769b8d4135a13426212a31f205b3f23e98f6ed8d61cb9b23
- championBin: a651a8634b3bb5c57f42e1b6993275a266cea0f5c936e47f08878022ed9351ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BaseFlatDamage was preserved. Stateful and alternate effects require an explicit module.

### Twilight Assault Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Twilight Assault Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Shen recalls his Spirit Blade. Enemies hit by the pull are Slowed by % while moving away from Shen for the next seconds. Additionally, Shen's next Attacks deal an additional plus max Health magic damage. If Shen hit an enemy champion with the Spirit Blade, the damage is increased to plus max Health magic damage and he gains % Attack Speed for those Attacks.

## W - Spirit's Refuge

Coverage: out-of-scope

Description signature: 632b53582cf5518173cb693bd3968ebd04af3a0e9af632ea62ef999aa9b0b2fd

- championDetail: b77372f4f9c15a1a769b8d4135a13426212a31f205b3f23e98f6ed8d61cb9b23
- championBin: a651a8634b3bb5c57f42e1b6993275a266cea0f5c936e47f08878022ed9351ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Spirit's Refuge

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Shen creates a defensive zone at his Spirit Blade for seconds. Attacks against allied champions in the zone are blocked. If there are no champions to protect in the zone when it starts, it will wait for up to seconds.

## E - Shadow Dash

Coverage: partial

Description signature: 41627c05acc0751feb601ae420740690c0e6e2b539d6e0b9756fe9d6814517d4

- championDetail: b77372f4f9c15a1a769b8d4135a13426212a31f205b3f23e98f6ed8d61cb9b23
- championBin: a651a8634b3bb5c57f42e1b6993275a266cea0f5c936e47f08878022ed9351ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TauntDamage was preserved. Stateful and alternate effects require an explicit module.

### Shadow Dash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Shadow Dash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Passive: Dealing damage with Twilight Assault or this Ability recovers Energy. Active: Shen dashes, Taunting champions and jungle monsters for seconds and dealing physical damage.

## R - Stand United

Coverage: unsupported

Description signature: ba90fc43ca86740c4a6255c581cf08b497fed3f9c0a7b2437dbcdff5d2721a0c

- championDetail: b77372f4f9c15a1a769b8d4135a13426212a31f205b3f23e98f6ed8d61cb9b23
- championBin: a651a8634b3bb5c57f42e1b6993275a266cea0f5c936e47f08878022ed9351ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Stand United Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Shen grants an allied champion anywhere on the map between and Shield based on their missing Health for seconds (max Shield at 60% missing Health). After channeling for seconds, Shen teleports to his ally's location with his Spirit Blade.
