# Leona combat review

Patch: 16.16

## P - Sunlight

Coverage: unsupported

Description signature: bc4c2f00a9a94e6ff1564bbd7cdb47fdc2d4779a7b239462db687c3a09572a62

- championDetail: f42f78e8c73ce77257165bd4d6e8a2a1fbd0c9e66715edc0c7d9fdf712d7618f
- championBin: c4d0743630cdc8f8acc69f40b4ddae90f17ed357acf6f5b31894cf6a00c300b8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Sunlight Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Damaging spells afflict enemies with Sunlight for 1.5 seconds. When allied Champions deal damage to those targets, they consume the Sunlight to deal additional magic damage.

## Q - Shield of Daybreak

Coverage: modeled

Description signature: 28562a6a11a036039ed9a2e13f1c04f098747760281a88a1bcaba10f1812dcfa

- championDetail: f42f78e8c73ce77257165bd4d6e8a2a1fbd0c9e66715edc0c7d9fdf712d7618f
- championBin: c4d0743630cdc8f8acc69f40b4ddae90f17ed357acf6f5b31894cf6a00c300b8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Shield of Daybreak is compiled as a timed single-use empowered attack.

### Shield of Daybreak

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: arm-next-hit
- Reason: Compiled by the reusable arm-next-hit template.

Arms the next qualifying hit for 6 seconds.

## W - Eclipse

Coverage: partial

Description signature: f8d43c3463bbabade1491f6803f07fc35b92ef2f0233828badfec8a8a5ff9c78

- championDetail: f42f78e8c73ce77257165bd4d6e8a2a1fbd0c9e66715edc0c7d9fdf712d7618f
- championBin: c4d0743630cdc8f8acc69f40b4ddae90f17ed357acf6f5b31894cf6a00c300b8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Eclipse Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Eclipse Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Leona raises her shield, reducing incoming damage by and gaining Armor and Magic Resist for seconds. Afterwards, her shield detonates, dealing magic damage to nearby enemies. If she hits at least one, she retains the Armor and Magic Resist bonuses for an additional seconds.

## E - Zenith Blade

Coverage: partial

Description signature: 1c8db3c388b27f2a98c9fce07a5bfc7d6c55c6b310a9f2ae7f5fb62978e88bbd

- championDetail: f42f78e8c73ce77257165bd4d6e8a2a1fbd0c9e66715edc0c7d9fdf712d7618f
- championBin: c4d0743630cdc8f8acc69f40b4ddae90f17ed357acf6f5b31894cf6a00c300b8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Zenith Blade Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Zenith Blade Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Leona thrusts with a sword of light, dealing magic damage. The last champion struck will be Rooted for seconds and Leona will dash to them.

## R - Solar Flare

Coverage: partial

Description signature: b7a4ebf78d8b2cb71eed7b33fb70c6f7767d3ae01f006cd2cc4e64bb9a9e9621

- championDetail: f42f78e8c73ce77257165bd4d6e8a2a1fbd0c9e66715edc0c7d9fdf712d7618f
- championBin: c4d0743630cdc8f8acc69f40b4ddae90f17ed357acf6f5b31894cf6a00c300b8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Solar Flare Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Solar Flare Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Leona calls down a radiant beam of solar energy dealing magic damage and Slowing by % for seconds. Enemies in the center of the flare are Stunned instead of Slowed.
