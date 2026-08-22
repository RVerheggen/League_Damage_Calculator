# Pantheon combat review

Patch: 16.16

## P - Mortal Will

Coverage: out-of-scope

Description signature: 54c28397ffbfe4392dd6f3e13328e8f68615d127b26db1ba2b8ca930ef884ec6

- championDetail: da90be781ee39f9f4ca79e23d2d32f56df65f608f5d76c830990797d7ba5ea8b
- championBin: 36d4ac54a9eaeeb4dd9c9a52a47273bc19db806796080a3c0340ba24fc3e55ad

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Mortal Will

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Every few spells or attacks, Pantheon's next spell is empowered.

## Q - Comet Spear

Coverage: partial

Description signature: ef03d00e958df42e0049182c7ae0b50c6f984cebb2ef3b7918f2b64149e2691b

- championDetail: da90be781ee39f9f4ca79e23d2d32f56df65f608f5d76c830990797d7ba5ea8b
- championBin: 36d4ac54a9eaeeb4dd9c9a52a47273bc19db806796080a3c0340ba24fc3e55ad

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Comet Spear Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Comet Spear Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Tap: Pantheon thrusts his spear, dealing physical damage to enemies hit. Refunds % of this Ability's Cooldown. Hold: Pantheon hurls his spear, dealing physical damage to the first enemy hit and % less to further targets. This Ability is enhanced against enemies below % Health to deal physical damage instead. Mortal Will Bonus: Deals an additional physical damage.

## W - Shield Vault

Coverage: partial

Description signature: dbcad7244abf6b74a357a21c222424607fa77fa1e1e3d9ed7cffd6c13f3a297c

- championDetail: da90be781ee39f9f4ca79e23d2d32f56df65f608f5d76c830990797d7ba5ea8b
- championBin: 36d4ac54a9eaeeb4dd9c9a52a47273bc19db806796080a3c0340ba24fc3e55ad

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Shield Vault Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Shield Vault Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Pantheon leaps on his target, Stunning for second and dealing max Health physical damage. Mortal Will Bonus: Pantheon's next Attack strikes times, dealing a total of physical damage.

## E - Aegis Assault

Coverage: partial

Description signature: 46ff1695fbb23200527dc64cab49e78472f8aae75320e0d5edd0b7b646c58922

- championDetail: da90be781ee39f9f4ca79e23d2d32f56df65f608f5d76c830990797d7ba5ea8b
- championBin: 36d4ac54a9eaeeb4dd9c9a52a47273bc19db806796080a3c0340ba24fc3e55ad

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Aegis Assault Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Aegis Assault Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Pantheon braces his shield and engages enemies in a chosen direction for seconds, becoming immune to non-tower damage from that direction and dealing physical damage over the duration. After channeling Pantheon slams with his shield, dealing physical damage. Mortal Will Bonus: When Pantheon slams his shield he gains Armor and Magic Resist for seconds, and % Move Speed for seconds.

## R - Grand Starfall

Coverage: partial

Description signature: 0e5e90ad516c81a65000058688f5c2b131409be1dbace233a00273d4a4219e51

- championDetail: da90be781ee39f9f4ca79e23d2d32f56df65f608f5d76c830990797d7ba5ea8b
- championBin: 36d4ac54a9eaeeb4dd9c9a52a47273bc19db806796080a3c0340ba24fc3e55ad

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Grand Starfall Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Grand Starfall Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Pantheon gains % Armor Penetration. Active: Pantheon gathers his strength to leap high into the air. He throws his spear from above which in a small area deals physical damage and Slows by % for seconds. Pantheon then crashes down as a meteor at the target area. Deals up to magic damage to enemies in a line (decreased by up to % at the edges of the area). This Ability instantly readies Mortal Will.
