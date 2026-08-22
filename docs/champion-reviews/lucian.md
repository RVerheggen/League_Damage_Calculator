# Lucian combat review

Patch: 16.16

## P - Lightslinger

Coverage: unsupported

Description signature: fa9502b21a77c816909ea06f922a6673e5dd2335eefe5af88592d4051d2b674b

- championDetail: 73a32685674beed0b6844a27e10222745605c395aecc683788c9d1f933ee1202
- championBin: ce79500882140e1aa27d501591f19b1ed0ae2f8e09ed7c8ba14b8ce155a9d293

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Lightslinger Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Whenever Lucian uses an ability, his next attack becomes a double-shot. When Lucian is healed or shielded by an ally, or when a nearby enemy Champion is immobilized, his next 2 basic attacks will deal bonus magic damage.

## Q - Piercing Light

Coverage: partial

Description signature: ce4a23d4db4d5ef8609cfb2a4d2e15f4535d5373f701c9c4a6f8110f0ef3f73c

- championDetail: 73a32685674beed0b6844a27e10222745605c395aecc683788c9d1f933ee1202
- championBin: ce79500882140e1aa27d501591f19b1ed0ae2f8e09ed7c8ba14b8ce155a9d293

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Piercing Light Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Piercing Light Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Lucian shoots a bolt of piercing light, dealing physical damage.

## W - Ardent Blaze

Coverage: partial

Description signature: 6d6827a33dd996a5c76dbc61d640cc858da8e6c7901b146b71187e01582e9718

- championDetail: 73a32685674beed0b6844a27e10222745605c395aecc683788c9d1f933ee1202
- championBin: ce79500882140e1aa27d501591f19b1ed0ae2f8e09ed7c8ba14b8ce155a9d293

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Ardent Blaze Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ardent Blaze Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Lucian fires a shot that explodes at the end of its range or on the first enemy hit, dealing magic damage, briefly revealing enemies and marking them for 6 seconds. When Lucian or an ally damages a marked enemy, Lucian gains Move Speed for 1 second. Allies triggering this effect will also grant Lucian Vigilance.

## E - Relentless Pursuit

Coverage: unsupported

Description signature: 84a2040fc8e2edb1b4df12d38965721cfbe4df0e0764c4ad23d4ba4b3d3a2b35

- championDetail: 73a32685674beed0b6844a27e10222745605c395aecc683788c9d1f933ee1202
- championBin: ce79500882140e1aa27d501591f19b1ed0ae2f8e09ed7c8ba14b8ce155a9d293

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Relentless Pursuit Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Lucian dashes. Cooldown is reduced by second whenever Lucian hits an enemy with Lightslinger ( seconds for champions).

## R - The Culling

Coverage: partial

Description signature: fa3a5bfde4b2fad6a19066933f76b778537906f2171d620065c27acc75a85d75

- championDetail: 73a32685674beed0b6844a27e10222745605c395aecc683788c9d1f933ee1202
- championBin: ce79500882140e1aa27d501591f19b1ed0ae2f8e09ed7c8ba14b8ce155a9d293

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamagePerBullet was preserved. Stateful and alternate effects require an explicit module.

### The Culling Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### The Culling Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Lucian rapidly fires shots in a direction for seconds or until he Recasts. Each shot deals physical damage to the first enemy hit. While firing, Lucian may use Relentless Pursuit. Total Damage: physical damage
