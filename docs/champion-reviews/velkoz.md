# Vel'Koz combat review

Patch: 16.16

## P - Organic Deconstruction

Coverage: unsupported

Description signature: 2692191204b5deb528405a0c1b5eb1143b79636d2b073e0a3c5b27e95d06f6fd

- championDetail: e0c233aeaf411c9981970cf14d496fd7093cae2f0b9b63bd043147a2ea6f6068
- championBin: a4d091ece986bbc02c6efc96ac8ece506cad91a4a8c822350ac9cd39d04ec1ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Organic Deconstruction Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Vel'Koz's abilities apply Organic Deconstruction to enemies on hit. If 3 stacks are accumulated, the enemy will take a burst of true damage.

## Q - Plasma Fission

Coverage: partial

Description signature: 59d77fdf47eb3df6e699d72d45d792465ed065f7ac51cb516d2249de91e011c9

- championDetail: e0c233aeaf411c9981970cf14d496fd7093cae2f0b9b63bd043147a2ea6f6068
- championBin: a4d091ece986bbc02c6efc96ac8ece506cad91a4a8c822350ac9cd39d04ec1ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Plasma Fission Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Plasma Fission Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Vel'Koz shoots a plasma bolt that deals magic damage and Slows by % decaying over second(s). At the end of its range, on hitting a target, or on Recasting, the bolt splits and fires two new bolts at a 90 degree angle. Killing a unit with this restores Mana.

## W - Void Rift

Coverage: partial

Description signature: 538571b0a026a83271aefc4719ceebd5e23eb539bc6b5a695d54d8c895842a81

- championDetail: e0c233aeaf411c9981970cf14d496fd7093cae2f0b9b63bd043147a2ea6f6068
- championBin: a4d091ece986bbc02c6efc96ac8ece506cad91a4a8c822350ac9cd39d04ec1ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Void Rift Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Void Rift Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Vel'Koz opens a rift to the void, dealing magic damage. The rift then erupts, dealing magic damage. This Ability has 2 charges ( second refresh).

## E - Tectonic Disruption

Coverage: partial

Description signature: c2ca5e21b0ff1d6df7e3772617107c5230326eff1547d6b44dc96e504275b2e7

- championDetail: e0c233aeaf411c9981970cf14d496fd7093cae2f0b9b63bd043147a2ea6f6068
- championBin: a4d091ece986bbc02c6efc96ac8ece506cad91a4a8c822350ac9cd39d04ec1ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Tectonic Disruption Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Tectonic Disruption Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Vel'Koz disrupts a nearby area, causing it to explode, Knocking Up for seconds and dealing magic damage. Enemies close to Vel'Koz will be Knocked Back instead of Knocked Up.

## R - Life Form Disintegration Ray

Coverage: partial

Description signature: 8ddca1877517c48ed9a8f9c9b5698c0997ec22d6b656dcb471bc36783a60e18e

- championDetail: e0c233aeaf411c9981970cf14d496fd7093cae2f0b9b63bd043147a2ea6f6068
- championBin: a4d091ece986bbc02c6efc96ac8ece506cad91a4a8c822350ac9cd39d04ec1ab

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Life Form Disintegration Ray Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Life Form Disintegration Ray Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Vel'Koz channels a ray of energy that follows the cursor, dealing a total of magic damage over 2.5 seconds and Slowing by %. Deals true damage instead to enemies recently damaged by Organic Deconstruction. Enemies gain stacks of Deconstruction periodically while in the beam.
