# Heimerdinger combat review

Patch: 16.16

## P - Hextech Affinity

Coverage: out-of-scope

Description signature: 9ae8dd7cdd0a470130c3064922cf47f46dde13b989d894ab05ffdf748833ef0f

- championDetail: 207dfdb42c1f37dd4c3cd945acde3228a517911a761c0a89e36c5005c650ec19
- championBin: 067893fb070cd46bcb186d51bcfd5fdedfdeacc6facf2e6034c855d87878aa95

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Hextech Affinity

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Gain Move Speed while near allied towers and turrets deployed by Heimerdinger.

## Q - H-28 G Evolution Turret

Coverage: out-of-scope

Description signature: c70fff15e5c0c1b649aac9931e3f6f15cb20269c7ea798e5d1ce89c4fb7f1bae

- championDetail: 207dfdb42c1f37dd4c3cd945acde3228a517911a761c0a89e36c5005c650ec19
- championBin: 067893fb070cd46bcb186d51bcfd5fdedfdeacc6facf2e6034c855d87878aa95

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### H-28 G Evolution Turret

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Heimerdinger constructs a Turret that attacks nearby enemies. Heimerdinger can have turrets active at once. Turrets slowly build up charge. At max charge, they fire a stronger attack. If Heimerdinger gets too far away, his Turrets will deactivate after 8 seconds. This Ability has charges.

## W - Hextech Micro-Rockets

Coverage: partial

Description signature: f648b164afc68b345f7520270c801466739e14400736eb721ca4a0ca617ee8ad

- championDetail: 207dfdb42c1f37dd4c3cd945acde3228a517911a761c0a89e36c5005c650ec19
- championBin: 067893fb070cd46bcb186d51bcfd5fdedfdeacc6facf2e6034c855d87878aa95

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Hextech Micro-Rockets Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Hextech Micro-Rockets Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Heimerdinger unleashes a barrage of rockets that deal magic damage to the first enemy hit. Additional rocket hits deal reduced damage. Max Damage: magic damage. Nearby Turrets gain 20% charge per rocket that hits a champion.

## E - CH-2 Electron Storm Grenade

Coverage: partial

Description signature: 6c863e4b58a716245274ff1f79ad0f11eb4af46379524267ebc69645622b2981

- championDetail: 207dfdb42c1f37dd4c3cd945acde3228a517911a761c0a89e36c5005c650ec19
- championBin: 067893fb070cd46bcb186d51bcfd5fdedfdeacc6facf2e6034c855d87878aa95

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### CH-2 Electron Storm Grenade Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### CH-2 Electron Storm Grenade Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Heimerdinger hurls a grenade that deals magic damage in an area and Slows by % for seconds. Enemies in the center are also Stunned for seconds. Hitting a champion fully charges nearby Turrets.

## R - UPGRADE!!!

Coverage: partial

Description signature: 92424804172ca64b85039d9ef5d6e6d0175c042794151aad6a8c584bdb1bc829

- championDetail: 207dfdb42c1f37dd4c3cd945acde3228a517911a761c0a89e36c5005c650ec19
- championBin: 067893fb070cd46bcb186d51bcfd5fdedfdeacc6facf2e6034c855d87878aa95

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation QUltDamage was preserved. Stateful and alternate effects require an explicit module.

### UPGRADE!!! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### UPGRADE!!! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Heimerdinger upgrades his next non-ultimate Ability. H-28Q Apex Turret: Place an upgraded Turret for 8 seconds that doesn't count towards Heimerdinger's max turrets, deals magic damage per shot and magic damage per charged shot. Its attacks deal damage in an area, Slow by 25% for 2 seconds, and it is immune to crowd control. Hextech Rocket Swarm: Fires 4 waves of rockets that each deal magic damage. Champions and jungle monsters hit by additional rockets take reduced damage, and minions take increased damage. Max Damage: magic damage. CH-3X Lightning Grenade: Throws a bouncing grenade that discharges three times, dealing magic damage. The Stun and Slow areas are larger. Recast: Cancel this Ability.
