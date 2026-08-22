# Gangplank combat review

Patch: 16.16

## P - Trial by Fire

Coverage: out-of-scope

Description signature: 384555e46ef58dfeda5a8664793ed2241e3e87e47eaf22940ae0619245ed5476

- championDetail: f2a70233905adc3b35644629ac7df87c804c10728bbacea1e2375819071e7063
- championBin: 8ee8f5ac4c3d564478f819df659670a2c6049eb0331da5b5917d02ba97abccb4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Trial by Fire

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Every few seconds, Gangplank's melee strike will set his opponent on fire.

## Q - Parrrley

Coverage: out-of-scope

Description signature: 28f91e4fdb34e3a4a3b45ca9b24ce2cdcb5c4b93665a76e522385438491b48ba

- championDetail: f2a70233905adc3b35644629ac7df87c804c10728bbacea1e2375819071e7063
- championBin: 8ee8f5ac4c3d564478f819df659670a2c6049eb0331da5b5917d02ba97abccb4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Parrrley

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

{{Spell_GangplankQWrapper_Tooltip_}}

## W - Remove Scurvy

Coverage: out-of-scope

Description signature: 8e834337a4297422c31453bef60764511ef938b2fbadf63588d226c5207bd151

- championDetail: f2a70233905adc3b35644629ac7df87c804c10728bbacea1e2375819071e7063
- championBin: 8ee8f5ac4c3d564478f819df659670a2c6049eb0331da5b5917d02ba97abccb4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Remove Scurvy

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Gangplank consumes a large amount of citrus fruit, removing all Disabling effects and restoring plus % missing Health.

## E - Powder Keg

Coverage: unsupported

Description signature: 75b0c1436bc5a023ccb1a3fde88a4ba2f2ef27c64965dd0bf73e1841a74cb4b7

- championDetail: f2a70233905adc3b35644629ac7df87c804c10728bbacea1e2375819071e7063
- championBin: 8ee8f5ac4c3d564478f819df659670a2c6049eb0331da5b5917d02ba97abccb4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation fallback effect values was preserved. Stateful and alternate effects require an explicit module.

### Powder Keg Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Gangplank places a powder keg that can be attacked by Gangplank and enemy champions for seconds. When an enemy destroys it, the keg is defused. When Gangplank destroys it, it explodes, Slowing by % for seconds and dealing the Attack's damage, ignoring % Armor. Champions take an additional physical damage. Keg health decays every seconds. Keg explosions detonate other kegs with overlapping blast zones, but don't deal damage to the same target more than once. Keg explosions triggered by Parrrley will grant the bonus gold for targets killed.

## R - Cannon Barrage

Coverage: partial

Description signature: 9fcd00393595550b166d7f8b041e3315f0e645342aeda35b1eba3e95389d71df

- championDetail: f2a70233905adc3b35644629ac7df87c804c10728bbacea1e2375819071e7063
- championBin: 8ee8f5ac4c3d564478f819df659670a2c6049eb0331da5b5917d02ba97abccb4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation OneWaveDamage was preserved. Stateful and alternate effects require an explicit module.

### Cannon Barrage Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Cannon Barrage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Gangplank signals his ship to fire waves of cannonballs anywhere on the map over seconds. Each wave Slows by % for seconds and deals magic damage. Maximum damage: This Ability can be upgraded in the shop via Parrrley. Fire at Will: Fires 6 additional waves of cannonballs. Death's Daughter: Fires a Mega-Cannonball that deals true damage and Slows by % for second. Raise Morale: Allies inside Cannon Barrage gain % Move Speed for seconds.
