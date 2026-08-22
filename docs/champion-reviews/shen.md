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

Coverage: modeled

Description signature: 4cc87e1d1b3e168ce990c8b51bf8dde892f683e9e30caee714f727e2e504d020

- championDetail: b77372f4f9c15a1a769b8d4135a13426212a31f205b3f23e98f6ed8d61cb9b23
- championBin: a651a8634b3bb5c57f42e1b6993275a266cea0f5c936e47f08878022ed9351ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Twilight Assault grants three attacks for eight seconds. The typed Spirit Blade collision control selects the normal or champion-collision damage and the champion-collision attack-speed buff. Pull slow and attack range are outside manually selected damage.

### Twilight Assault Attacks

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: limited-attack-state
- Reason: Compiled as mutually exclusive normal and empowered limited attack states.

Casting Q grants three successful basic attacks within eight seconds. A typed cast parameter selects normal or champion-collision damage.

Formula bindings: ShenQ.BaseFlatDamage, ShenQ.BasePercentHealth, ShenQ.EmpPercentHealth

Value bindings: ShenQ.NumEnhancedAttacks, ShenQ.AttackBuffDuration

### Twilight Assault Attack Speed

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: timed-stat-modifier
- Reason: Compiled as a dynamic stat modifier active only while empowered attacks remain.

Hitting an enemy champion with the Spirit Blade grants 50% attack speed while the three empowered attacks remain.

Value bindings: ShenQ.SteroidAS

### Spirit Blade Pull Slow And Range

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Movement, crowd control, and range do not change a manually selected successful hit.

The pull slows an enemy moving away and the empowered attacks have increased range.

## W - Spirit's Refuge

Coverage: out-of-scope

Description signature: 632b53582cf5518173cb693bd3968ebd04af3a0e9af632ea62ef999aa9b0b2fd

- championDetail: b77372f4f9c15a1a769b8d4135a13426212a31f205b3f23e98f6ed8d61cb9b23
- championBin: a651a8634b3bb5c57f42e1b6993275a266cea0f5c936e47f08878022ed9351ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

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

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

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

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Stand United Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Shen grants an allied champion anywhere on the map between and Shield based on their missing Health for seconds (max Shield at 60% missing Health). After channeling for seconds, Shen teleports to his ally's location with his Spirit Blade.
