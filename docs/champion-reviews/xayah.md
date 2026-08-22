# Xayah combat review

Patch: 16.16

## P - Clean Cuts

Coverage: unsupported

Description signature: 0655bd53018639f07046d2eff04585b563affd47ac4385fe1a9c3302d2cc7313

- championDetail: 23654ed88e3560d3f9329d8d4ed490b901e90349ee5b25ae2e96a47737fa307b
- championBin: 4f8eba0390b30749baaedd93c58cdca1d6cd65747d56e8f3970b388c546a5a0b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Ability casts grant a bounded set of piercing attacks that leave feathers. The source is assigned to the limited-attack-state family, but a complete reviewed binding has not been compiled yet.

### Clean Cuts Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: limited-attack-state
- Reason: Ability casts grant a bounded set of piercing attacks that leave feathers. The source is assigned to the limited-attack-state family, but a complete reviewed binding has not been compiled yet.

After using an ability, Xayah's next basic attacks will hit all targets along their path and leave a Feather.

## Q - Double Daggers

Coverage: partial

Description signature: ac5033f934e1a9d9a30d7e34f48757c482142866f8281615808fc45c72bca27b

- championDetail: 23654ed88e3560d3f9329d8d4ed490b901e90349ee5b25ae2e96a47737fa307b
- championBin: 4f8eba0390b30749baaedd93c58cdca1d6cd65747d56e8f3970b388c546a5a0b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Double Daggers Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Double Daggers Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Xayah throws two daggers, dealing physical damage each and leaving two Feathers. Targets hit after the first take damage from each dagger.

## W - Deadly Plumage

Coverage: unsupported

Description signature: 42d6480a4fdef54cbf44e3d72576a1b4161e942f69a1410c1e9802630c0deac3

- championDetail: 23654ed88e3560d3f9329d8d4ed490b901e90349ee5b25ae2e96a47737fa307b
- championBin: 4f8eba0390b30749baaedd93c58cdca1d6cd65747d56e8f3970b388c546a5a0b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Deadly Plumage is damage-relevant and mapped to timed-on-hit plus multi-hit-action behavior. Each attack during the buff fires a secondary blade and gains attack speed.

### Deadly Plumage Secondary Blades

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The runtime needs a repeated secondary attack packet with explicit proc policy before this can compile.

For the buff duration, each basic attack fires a secondary blade for a share of attack damage.

### Deadly Plumage Attack Speed

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The attack-speed value and duration still need reviewed patch bindings.

The cast grants timed attack speed.

### Deadly Plumage Movement

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Movement does not change manually selected hit timing or damage.

Hitting a champion grants movement speed.

## E - Bladecaller

Coverage: partial

Description signature: 200f5e89c2d8ca4c6f547993a8e41daab81dac423cd4f97d1c9eb75f53581bc7

- championDetail: 23654ed88e3560d3f9329d8d4ed490b901e90349ee5b25ae2e96a47737fa307b
- championBin: 4f8eba0390b30749baaedd93c58cdca1d6cd65747d56e8f3970b388c546a5a0b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Bladecaller Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Bladecaller Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Xayah calls all Feathers back to her, dealing physical damage each. If or more Feathers hit an enemy, they are Rooted for seconds.

## R - Featherstorm

Coverage: partial

Description signature: 4e987edb3db46f84efee0b672b96595e19df9c03197e7a8d58bfdf08aaea7061

- championDetail: 23654ed88e3560d3f9329d8d4ed490b901e90349ee5b25ae2e96a47737fa307b
- championBin: 4f8eba0390b30749baaedd93c58cdca1d6cd65747d56e8f3970b388c546a5a0b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Featherstorm Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Featherstorm Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Xayah leaps into the air becoming Untargetable and Ghosted for 1.5 seconds before raining down daggers that deal physical damage and leave behind a line of Feathers.
