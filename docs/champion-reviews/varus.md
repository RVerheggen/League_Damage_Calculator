# Varus combat review

Patch: 16.16

## P - Living Vengeance

Coverage: unsupported

Description signature: 179d65717a414f9b1ec6a0eef4a35d5dcb1cd6042914d80ade86ca93cb1b737e

- championDetail: 57d221899f6e9d0350cd506b1455f9ae83d33340a28835274db5d49e76d893aa
- championBin: 2928aa35e5df83d11102ae53a00bf27a2f3c5c22f1523bfa665af6144ea44f28

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Living Vengeance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

On kill or assist, Varus temporarily gains Attack Damage and Ability Power. This bonus is larger if the enemy is a champion.

## Q - Piercing Arrow

Coverage: modeled

Description signature: 429df625ac4c66d5ca5b059aa1ea7c865974c62b366d44fb4949b802ffb02b85

- championDetail: 57d221899f6e9d0350cd506b1455f9ae83d33340a28835274db5d49e76d893aa
- championBin: 2928aa35e5df83d11102ae53a00bf27a2f3c5c22f1523bfa665af6144ea44f28

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Piercing Arrow uses its structured minimum-charge packet plus a typed 0 to 100 charge parameter for up to 50% additional physical damage and Blight amplification.

### Piercing Arrow Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The structured minimum formula and declarative charge packet preserve the full rank array.

Deals minimum-charge physical damage and gains up to 50% additional damage with charge time.

Formula bindings: VarusQ.TotalDamageMinTooltip, VarusQ.TotalDamageMax

### Piercing Reduction

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: A one-on-one calculation targets the first champion hit.

Damage falls after passing through earlier enemies.

### Charge Movement

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Movement is outside the supported damage result.

Charging slows Varus.

## W - Blighted Quiver

Coverage: partial

Description signature: 20d93c7aefc00cc215d7317c7c01dd34f2b842e29ce17eeaabf6a30d633824a5

- championDetail: 57d221899f6e9d0350cd506b1455f9ae83d33340a28835274db5d49e76d893aa
- championBin: 2928aa35e5df83d11102ae53a00bf27a2f3c5c22f1523bfa665af6144ea44f28

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Blighted Quiver on-hit damage, Blight stacks, ability detonation, Q charge amplification, expiry, and cooldown reduction are modeled. The active missing-health Q empowerment and Chain of Corruption's delayed stack application remain unsupported.

### Blighted Quiver On-Hit

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: timed-on-hit
- Reason: Compiled by the generic timed-on-hit template.

Basic attacks add patch-ranked magic damage and a Blight stack.

Formula bindings: VarusW.OnHitDamage

### Blight Detonation

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: mark-and-consume
- Reason: Compiled by the generic mark-and-consume template.

Q, E, and R consume up to three six-second marks for per-stack maximum-health magic damage. Q charge increases the detonation by up to 50%.

Formula bindings: VarusW.PercentHPPerStack

Value bindings: VarusW.MaxStacks, VarusW.DebuffDuration, VarusW.CDRPerBlightStack

### Blight Cooldown Reduction

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: cooldown-modifier
- Reason: Emitted as generic remaining-cooldown operations.

Each consumed stack reduces the remaining Q, W, and E cooldowns by 13% of their total cooldown, with Q charge scaling.

### Blighted Quiver Active

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: mark-and-consume
- Reason: A reviewed state binding for the active missing-health packet is still required.

The active empowers the next Piercing Arrow with missing-health magic damage.

### Chain Of Corruption Stack Application

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The runtime does not yet schedule non-damage state operations.

Chain of Corruption applies three Blight stacks over time after its initial hit.

### Monster Damage Cap

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The supported target is a champion.

Blight damage is capped against monsters.

## E - Hail of Arrows

Coverage: partial

Description signature: dca890e3b2e4b3a01e2c36ec85fb05c291384d661a94374edf466907a51f29f2

- championDetail: 57d221899f6e9d0350cd506b1455f9ae83d33340a28835274db5d49e76d893aa
- championBin: 2928aa35e5df83d11102ae53a00bf27a2f3c5c22f1523bfa665af6144ea44f28

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Hail of Arrows Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Hail of Arrows Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Varus fires a hail of arrows that deals physical damage and desecrates the ground for seconds, Slowing enemies by % and applying % Grievous Wounds.

## R - Chain of Corruption

Coverage: partial

Description signature: b160de087eb8d2f3d324fe91e491dc0b7704caea262845942ab6b8a8011d3e8e

- championDetail: 57d221899f6e9d0350cd506b1455f9ae83d33340a28835274db5d49e76d893aa
- championBin: 2928aa35e5df83d11102ae53a00bf27a2f3c5c22f1523bfa665af6144ea44f28

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Chain of Corruption Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Chain of Corruption Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Varus flings out a tendril of corruption, Rooting the first champion hit for seconds and dealing magic damage. Rooted enemies gain Blight stacks over the duration. The corruption spreads from its target to uninfected enemy champions. If it reaches them, they take the same damage and Root.
