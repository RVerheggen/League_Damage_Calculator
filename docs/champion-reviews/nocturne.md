# Nocturne combat review

Patch: 16.16

## P - Umbra Blades

Coverage: unsupported

Description signature: e78c0517deff88746085cb9ec6c2956a7d22a65648205ae0c2c1329138da0f71

- championDetail: 1c310f98f7763b7dcc395d5f8e40277548e58d727c1bde6d21502451a00297f3
- championBin: 8749492333e6d69658fc1f70b06a5b957864a15ae3e53b23b97df3b914f884ff

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Umbra Blades Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Every few seconds, Nocturne's next attack strikes surrounding enemies for bonus physical damage and heals himself. Nocturne's basic attacks reduce this cooldown.

## Q - Duskbringer

Coverage: partial

Description signature: d7fa1200d322f279acac27644738f88343e3d33aa1f57c1f3b0598558f8996ce

- championDetail: 1c310f98f7763b7dcc395d5f8e40277548e58d727c1bde6d21502451a00297f3
- championBin: 8749492333e6d69658fc1f70b06a5b957864a15ae3e53b23b97df3b914f884ff

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Duskbringer Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Duskbringer Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Nocturne throws a shadow blade, dealing physical damage and leaving a dusk trail for seconds. Enemy champions hit also leave a trail. While on the trail, Nocturne is Ghosted and gains % Move Speed and Attack Damage.

## W - Shroud of Darkness

Coverage: out-of-scope

Description signature: a6c94bd90ae09af80a4f71687c524f2fefd77bdcf5fb2fa4fc898170554d9f20

- championDetail: 1c310f98f7763b7dcc395d5f8e40277548e58d727c1bde6d21502451a00297f3
- championBin: 8749492333e6d69658fc1f70b06a5b957864a15ae3e53b23b97df3b914f884ff

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Shroud of Darkness

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Passive: Nocturne gains % Attack Speed. Active: Nocturne creates a shadow barrier for 1.5 seconds that blocks the next enemy Ability. If an Ability is blocked, this Ability's passive effect is increased to % Attack Speed for seconds.

## E - Unspeakable Horror

Coverage: partial

Description signature: c73fffd1cb5fa5b6730734ef0b9b6c73ba47b9f391e8e20723585cddf63666e5

- championDetail: 1c310f98f7763b7dcc395d5f8e40277548e58d727c1bde6d21502451a00297f3
- championBin: 8749492333e6d69658fc1f70b06a5b957864a15ae3e53b23b97df3b914f884ff

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Unspeakable Horror Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Unspeakable Horror Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Passive: Nocturne gains % Move Speed toward Feared enemies. Active: Nocturne plants a nightmare tether into his target, dealing magic damage over seconds. If the tether remains unbroken, the target is Feared for second(s).

## R - Paranoia

Coverage: partial

Description signature: dd5508717c14dc7ca31bbe5cbb797ecad90a1d70fc729053825476c0399da7ff

- championDetail: 1c310f98f7763b7dcc395d5f8e40277548e58d727c1bde6d21502451a00297f3
- championBin: 8749492333e6d69658fc1f70b06a5b957864a15ae3e53b23b97df3b914f884ff

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Paranoia Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Paranoia Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Nocturne darkens the map, reducing the sight radius of all enemy champions and removing their vision of allies for seconds. Nocturne can Recast this Ability during the duration to launch himself at an enemy champion dealing physical damage.
