# Ivern combat review

Patch: 16.16

## P - Friend of the Forest

Coverage: out-of-scope

Description signature: d42d17ba05497831c77f87d86ea3d3bfd2cdb49fd6aa7900b90beab7f811fd1a

- championDetail: 9ef0513700450c6e471fa89eece047ef443969a4746167da28dc4e425214e7a0
- championBin: 372dc98948951ffd93e262fc7b030719d4d19e5a3fbdf5eebd08070c64d1e57e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Friend of the Forest

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Ivern cannot attack or be attacked by non-epic monsters. Ivern can create magical groves on jungle camps which grow over time. When the grove is fully grown, Ivern may free the monsters to receive gold and experience.

## Q - Rootcaller

Coverage: partial

Description signature: 5166e6614e564f4c24c869ce49d30c2901f8fe68c24e3a4e8f0e4974c256cc66

- championDetail: 9ef0513700450c6e471fa89eece047ef443969a4746167da28dc4e425214e7a0
- championBin: 372dc98948951ffd93e262fc7b030719d4d19e5a3fbdf5eebd08070c64d1e57e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Rootcaller Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Rootcaller Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Ivern conjures a vine dealing magic damage and Rooting the first enemy hit for seconds. Allies that Attack a Rooted enemy dash into Attack Range. Recast: Ivern dashes directly onto the Rooted enemy. Hitting non-epic monsters reduces Rootcaller's cooldown by 50%.

## W - Brushmaker

Coverage: unsupported

Description signature: 2932bdf96ac17f7ac667f538cdfc63e6e099d8e442cfd0434cb16d9efd5e3ade

- championDetail: 9ef0513700450c6e471fa89eece047ef443969a4746167da28dc4e425214e7a0
- championBin: 372dc98948951ffd93e262fc7b030719d4d19e5a3fbdf5eebd08070c64d1e57e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Brush presence controls a repeated magic on-hit state. The source is assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Brushmaker Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: Brush presence controls a repeated magic on-hit state. The source is assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Passive: While in brush and for seconds after leaving, Ivern's Attacks deal an additional magic damage. Nearby allies will gain this effect for seconds and deal magic damage. Active: Ivern grows a patch of Brush, revealing the area for seconds. The Brush persists until Ivern's team loses vision within it, or up to seconds.

## E - Triggerseed

Coverage: partial

Description signature: ef9ea8cf99cee962cf39290fb2ba6d64306c07080c9bcae928b132c605e1bfd9

- championDetail: 9ef0513700450c6e471fa89eece047ef443969a4746167da28dc4e425214e7a0
- championBin: 372dc98948951ffd93e262fc7b030719d4d19e5a3fbdf5eebd08070c64d1e57e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Triggerseed Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Triggerseed Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Ivern grants Shield to an ally champion or Daisy. After seconds, it bursts, dealing magic damage and Slowing enemies by % for seconds. If Triggerseed detonates and no enemy champions are hit while the shield still persists, the ally will be shielded for for seconds.

## R - Daisy!

Coverage: partial

Description signature: bb00d9f8dd55a404631788434a9663feb762e7e682d19de3ebb46c34c48a92d7

- championDetail: 9ef0513700450c6e471fa89eece047ef443969a4746167da28dc4e425214e7a0
- championBin: 372dc98948951ffd93e262fc7b030719d4d19e5a3fbdf5eebd08070c64d1e57e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Daisy! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Daisy! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ivern summons his sentinel friend Daisy to leap into the fray for seconds. Daisy, Slam!: Daisy's 3rd consecutive Attack on the same champion or epic monster will launch a shockwave, dealing magic damage to all enemies hit as well as Knocking Up for second. This effect can only occur once every seconds. Recast: Instruct Daisy to Attack or move.
