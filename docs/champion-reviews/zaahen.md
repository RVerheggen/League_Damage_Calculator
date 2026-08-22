# Zaahen combat review

Patch: 16.16

## P - Cultivation of War

Coverage: unsupported

Description signature: 6d0488f4054da9a738e518fef28f024720764704938fa68c3268fedfe8b972dc

- championDetail: d88dfd3d2f0e96447a8ecd2dc82e40543a9708bc553f561b9915b59e0116b89f
- championBin: 0ff0154d57bc1f3db6c3da9306c78f9b1101c67810aaee434d3bf22925a3ed82

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Cultivation of War Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Zaahen's attacks and abilities against enemy champions grant him stacks of Determination, gaining bonus Attack Damage per stack. When filled with Determination, Zaahen gains increased Attack Damage and can revive.

## Q - The Darkin Glaive

Coverage: unsupported

Description signature: 8b91d207fc196a37a497e58a84a0248da9f0d94a0bf7befb6de3e9c101abd2cc

- championDetail: d88dfd3d2f0e96447a8ecd2dc82e40543a9708bc553f561b9915b59e0116b89f
- championBin: 0ff0154d57bc1f3db6c3da9306c78f9b1101c67810aaee434d3bf22925a3ed82

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The first armed attack unlocks a distinct recast attack. The source is assigned to the recurring-attack-state family, but a complete reviewed binding has not been compiled yet.

### The Darkin Glaive Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: recurring-attack-state
- Reason: The first armed attack unlocks a distinct recast attack. The source is assigned to the recurring-attack-state family, but a complete reviewed binding has not been compiled yet.

Zaahen slashes twice on his next Attack, dealing bonus physical damage and restoring % of his max Health. Recast: Zaahen's next Attack deals bonus physical damage and Knocks the target Up for seconds.

## W - Dreaded Return

Coverage: partial

Description signature: c9116eb968fce7aa29097cf79f9a5f26460d9c84a2d7bf9a87911fbe59273467

- championDetail: d88dfd3d2f0e96447a8ecd2dc82e40543a9708bc553f561b9915b59e0116b89f
- championBin: 0ff0154d57bc1f3db6c3da9306c78f9b1101c67810aaee434d3bf22925a3ed82

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Dreaded Return Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Dreaded Return Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Zaahen stabs in a direction, dealing physical damage to enemies hit, then Pulls them toward him, dealing physical damage.

## E - Aureate Rush

Coverage: partial

Description signature: 794ce4613ef7b6b819a2e12d0f42ca2a0a2d016ba9f3641dbb935aff48f00a0d

- championDetail: d88dfd3d2f0e96447a8ecd2dc82e40543a9708bc553f561b9915b59e0116b89f
- championBin: 0ff0154d57bc1f3db6c3da9306c78f9b1101c67810aaee434d3bf22925a3ed82

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Aureate Rush Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Aureate Rush Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Zaahen dashes then slices around himself, dealing physical damage to nearby enemies. Enemies at the edge of the slice take physical damage +% of their maximum Health as magic damage instead.

## R - Grim Deliverance

Coverage: partial

Description signature: 18078cfe8725324f1fcd9e8759b26700fde49bde99fc05f8143d80325fb020cd

- championDetail: d88dfd3d2f0e96447a8ecd2dc82e40543a9708bc553f561b9915b59e0116b89f
- championBin: 0ff0154d57bc1f3db6c3da9306c78f9b1101c67810aaee434d3bf22925a3ed82

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Grim Deliverance Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Grim Deliverance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Zaahen gains % %i:scaleAPen% Armor Penetration. Active: Zaahen rises, gaining % Damage Reduction while casting. Zaahen then stabs downward, dealing physical damage and restoring % of the damage dealt to enemy champions as Health.
