# Shaco combat review

Patch: 16.16

## P - Backstab

Coverage: unsupported

Description signature: 8b182f0da43613e8ed33a33f7148e873ab85dbebd6590aaea0882075b8e49a81

- championDetail: f4615a56f1b1246850a360f4ff46892e86806646c2fd4031d5d70a4c7698edc0
- championBin: 492194f377cc45fe49bb16dd1a5563b89864bd7cee31bc5360692862e73990bb

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Backstab Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Shaco's basic attacks and Two-Shiv Poison deal additional damage when striking from behind.

## Q - Deceive

Coverage: partial

Description signature: 0f4b89a02872c2921c410db00b38487bebf22036e3d5f9b8b2ff23ee986cbb02

- championDetail: f4615a56f1b1246850a360f4ff46892e86806646c2fd4031d5d70a4c7698edc0
- championBin: 492194f377cc45fe49bb16dd1a5563b89864bd7cee31bc5360692862e73990bb

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Deceive Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Deceive Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Shaco teleports and becomes Invisible for seconds. Using Jack In The Box or Hallucinate does not break Invisibility. Shaco's next Attack while Invisible deals an additional physical damage. If striking from behind, this Attack critically strikes for damage.

## W - Jack In The Box

Coverage: partial

Description signature: 51803c65c6ad18ef2b272837929779a52cd740d31410633ded48b3c981b2b083

- championDetail: f4615a56f1b1246850a360f4ff46892e86806646c2fd4031d5d70a4c7698edc0
- championBin: 492194f377cc45fe49bb16dd1a5563b89864bd7cee31bc5360692862e73990bb

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Jack In The Box Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Jack In The Box Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Shaco creates a trap that stealths itself after seconds and lasts for seconds. It activates when an enemy comes near or when revealed, Fearing nearby enemy Champions for seconds, or seconds for minions and jungle monsters. Once activated, the trap fires at all nearby enemies for 5 seconds, dealing magic damage, or damage if focused on a single target. Jack in the Box's attacks deal an additional damage to monsters.

## E - Two-Shiv Poison

Coverage: partial

Description signature: 20b171cafb5e856731ef9147cbb353c2203ae49912e73f32fdf6190fd44707ca

- championDetail: f4615a56f1b1246850a360f4ff46892e86806646c2fd4031d5d70a4c7698edc0
- championBin: 492194f377cc45fe49bb16dd1a5563b89864bd7cee31bc5360692862e73990bb

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Two-Shiv Poison Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Two-Shiv Poison Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: While this Ability is off Cooldown, Shaco's Attacks Slow the target by % for seconds. Active: Shaco throws a shiv, dealing magic damage and Slowing by % for seconds. If the target has less than % Health, the shiv deals damage instead.

## R - Hallucinate

Coverage: partial

Description signature: 4e61bc27256587c7bba102d21c4fbdd42842eeb0c5941341d1bda5bfe238c21e

- championDetail: f4615a56f1b1246850a360f4ff46892e86806646c2fd4031d5d70a4c7698edc0
- championBin: 492194f377cc45fe49bb16dd1a5563b89864bd7cee31bc5360692862e73990bb

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Hallucinate Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Hallucinate Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Shaco briefly disappears, then reappears with a clone that lasts seconds and detonates when it dies, dealing magic damage and spawning three mini Jack in the Boxes that trigger immediately. The clone deals % of Shaco's damage and receives % increased damage. Mini Jack in the Boxes deal magic damage, or magic damage if firing at only one enemy, and Fear for second.
