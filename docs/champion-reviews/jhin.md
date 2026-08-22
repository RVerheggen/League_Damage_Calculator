# Jhin combat review

Patch: 16.16

## P - Whisper

Coverage: unsupported

Description signature: 624aeb0fd075d1a6dabc563cf823e7440310b5ea1669377c294aa941e8649224

- championDetail: 92140427d9be2b7fedfbcfa3b9945b7da1a4d10e8cb3bcd47ef3cb2090350e7d
- championBin: 5a5a953deeb34cba1e3c49ce249fb1f662e4d1267850e5786e55c5241d038066

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Whisper Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Jhin's hand cannon, Whisper, is a precise instrument designed to deal superior damage. It fires at a fixed rate and carries only four shots. Jhin imbues the final bullet with dark magics to critically strike and deal bonus execute damage. Whenever Whisper crits, it inspires Jhin with a burst of Move Speed.

## Q - Dancing Grenade

Coverage: partial

Description signature: 422c8259b61bdb3aa1bfa295c4080abf5b87edbff6dabe3ff1c00d7b7403bd4b

- championDetail: 92140427d9be2b7fedfbcfa3b9945b7da1a4d10e8cb3bcd47ef3cb2090350e7d
- championBin: 5a5a953deeb34cba1e3c49ce249fb1f662e4d1267850e5786e55c5241d038066

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Dancing Grenade Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Dancing Grenade Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Jhin launches a cartridge that deals physical damage before bouncing to a nearby enemy that has not been hit yet. The cartridge can hit a maximum of times. Enemies that die shortly after being hit increase the damage of subsequent hits by %.

## W - Deadly Flourish

Coverage: partial

Description signature: 94716d24d18f84f8eea40683a6721c4bb42cce57e11c639ec0fbdad0f85c5ae2

- championDetail: 92140427d9be2b7fedfbcfa3b9945b7da1a4d10e8cb3bcd47ef3cb2090350e7d
- championBin: 5a5a953deeb34cba1e3c49ce249fb1f662e4d1267850e5786e55c5241d038066

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Deadly Flourish Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Deadly Flourish Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Jhin fires a long range shot dealing physical damage to the first champion hit and other enemies along the way. If this skill strikes a champion that has been damaged by an allied champion within the last seconds, it will Root them for seconds and grant Jhin Whisper's Move Speed.

## E - Captive Audience

Coverage: partial

Description signature: 89ef4373f3f9dbc334ce6c82fe766e3af7769e44839790e4aedf18692ad9b26a

- championDetail: 92140427d9be2b7fedfbcfa3b9945b7da1a4d10e8cb3bcd47ef3cb2090350e7d
- championBin: 5a5a953deeb34cba1e3c49ce249fb1f662e4d1267850e5786e55c5241d038066

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Captive Audience Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Captive Audience Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Passive: Champions Jhin kills will create and detonate a Lotus Trap at their location. Active: Jhin places an invisible Lotus Trap for minutes that creates a zone that Slows by % when stepped on by an enemy. After seconds, the trap detonates, dealing magic damage. This ability has 2 charges ( second refresh).

## R - Curtain Call

Coverage: partial

Description signature: 08ab07bc077ff537e8c14cba3a2a2fb63a7fa11e50de255096b15aef702633ea

- championDetail: 92140427d9be2b7fedfbcfa3b9945b7da1a4d10e8cb3bcd47ef3cb2090350e7d
- championBin: 5a5a953deeb34cba1e3c49ce249fb1f662e4d1267850e5786e55c5241d038066

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Curtain Call Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Curtain Call Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Jhin sets up and channels, enabling him to fire 4 super shots, each dealing between and physical damage to the first champion hit based on their percentage missing health and Slowing them by % for seconds. The fourth shot critically strikes for % damage.
