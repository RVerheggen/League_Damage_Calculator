# Rammus combat review

Patch: 16.16

## P - Spiked Shell

Coverage: unsupported

Description signature: 0b9b9b4b17ca9df2ef6e7718855c891d2dfba623b4017fda4f157ccbe236e5e3

- championDetail: a593c7042fb57f29211002b6ac79e225b98d811b581f58955e5998a126ab0950
- championBin: 9c5d94a3fb3e36a8a21506c5206b9f69774b097b0ae9002799b37ede43352ebd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Spiked Shell Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Rammus gains bonus Attack Damage scaling with his Armor and Magic Resistance.

## Q - Powerball

Coverage: partial

Description signature: ed6747222029cbf632e08fc11db21162cf4d4c18afd18f547067b62f288ce99d

- championDetail: a593c7042fb57f29211002b6ac79e225b98d811b581f58955e5998a126ab0950
- championBin: 9c5d94a3fb3e36a8a21506c5206b9f69774b097b0ae9002799b37ede43352ebd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation PowerBallDamage was preserved. Stateful and alternate effects require an explicit module.

### Powerball Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Powerball Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Rammus curls into a ball, gaining Move Speed, accelerating up to Move Speed over seconds. Rammus stops after colliding with an enemy, dealing magic damage, Knocking Back, and Slowing nearby enemies by % for second. Recast: Rammus ends this Ability early.

## W - Defensive Ball Curl

Coverage: partial

Description signature: 7dd60898e67d07c62ca341b8add8e564f2fe71cc60efca1f10fc2f02fe98c635

- championDetail: a593c7042fb57f29211002b6ac79e225b98d811b581f58955e5998a126ab0950
- championBin: 9c5d94a3fb3e36a8a21506c5206b9f69774b097b0ae9002799b37ede43352ebd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation ReturnDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Defensive Ball Curl Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Defensive Ball Curl Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Rammus enters a defensive formation for seconds, gaining Armor and Magic Resist and dealing magic damage to enemies that Attack him. Recast: Rammus ends this Ability early.

## E - Frenzying Taunt

Coverage: partial

Description signature: 17eb7129a8693416768fb80d9d8a497807e1da9a2423264f192122c72017f065

- championDetail: a593c7042fb57f29211002b6ac79e225b98d811b581f58955e5998a126ab0950
- championBin: 9c5d94a3fb3e36a8a21506c5206b9f69774b097b0ae9002799b37ede43352ebd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MonsterDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Frenzying Taunt Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Frenzying Taunt Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Rammus Taunts an enemy champion or monster for seconds. Monsters are dealt magic damage.

## R - Soaring Slam

Coverage: partial

Description signature: 22034548cffe17f60e800afeffbe3dacf549f2b438b39c4df2d87aef496a7dc8

- championDetail: a593c7042fb57f29211002b6ac79e225b98d811b581f58955e5998a126ab0950
- championBin: 9c5d94a3fb3e36a8a21506c5206b9f69774b097b0ae9002799b37ede43352ebd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation InitialDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Soaring Slam Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Soaring Slam Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Rammus hops into the air and slams down in an area, dealing magic damage and Slowing by % for seconds. If used during Powerball, enemies in the center take an additional magic damage and are Knocked Up for seconds. Rammus then creates aftershocks in the area over seconds, repeating the Slow. The range of this Ability is increased by Rammus's Move Speed.
