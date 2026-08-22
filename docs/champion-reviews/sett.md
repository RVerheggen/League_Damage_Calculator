# Sett combat review

Patch: 16.16

## P - Pit Grit

Coverage: out-of-scope

Description signature: dcd91c3da8dfa44ad8544f94286d942185e8e2fc66d4c60b8f70a5b4d4da22ec

- championDetail: 536445e5b2e3bcd1d245353d392951542f9020c524be28f441f36e4b9864e74e
- championBin: 19d83d81fc1c3875473a022a5c13956709b8050a4e8b0bd02a1a8d54285f1742

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Pit Grit

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Sett's basic attacks alternate between left and right punch. Right punch is slightly stronger and faster. Sett also hates losing, gaining additional health regeneration based off of his missing health.

## Q - Knuckle Down

Coverage: partial

Description signature: 56cf3e807aa18fc30c9bec8493fcd360d056d204ec27d0f87cba9348f06545f4

- championDetail: 536445e5b2e3bcd1d245353d392951542f9020c524be28f441f36e4b9864e74e
- championBin: 19d83d81fc1c3875473a022a5c13956709b8050a4e8b0bd02a1a8d54285f1742

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MaxHealthDamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Knuckle Down Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Knuckle Down Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Sett itches for a fight, gaining % Move Speed towards enemy champions for seconds. Additionally Sett's next two Attacks deal an additional plus max Health physical damage.

## W - Haymaker

Coverage: partial

Description signature: a27701d388a845a3c83e686354a19b926593d5c3c96ec6e2c281c446675a90bf

- championDetail: 536445e5b2e3bcd1d245353d392951542f9020c524be28f441f36e4b9864e74e
- championBin: 19d83d81fc1c3875473a022a5c13956709b8050a4e8b0bd02a1a8d54285f1742

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Haymaker Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Haymaker Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Passive: Sett stores % of damage taken as Grit, up to . Grit decays quickly seconds after the damage was taken. Active: Sett consumes all Grit, gaining a % Grit consumed Shield decaying over seconds. Sett then delivers a massive punch, dealing plus Grit consumed true damage to enemies in the center (max damage). Enemies not in the center instead take physical damage.

## E - Facebreaker

Coverage: partial

Description signature: 1dfffbb71c0a5de95c22ff7668ff0fe16192ed0eba3c4911b267d11d25c7ee01

- championDetail: 536445e5b2e3bcd1d245353d392951542f9020c524be28f441f36e4b9864e74e
- championBin: 19d83d81fc1c3875473a022a5c13956709b8050a4e8b0bd02a1a8d54285f1742

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Facebreaker Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Facebreaker Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Sett smashes enemies on either side of him into each other, dealing physical damage and Slowing them by % for seconds. If Sett grabbed at least one enemy on each side, all enemies are Stunned for second.

## R - The Show Stopper

Coverage: partial

Description signature: 0b23048ca5d4f5be674f0a592bdfc0d06583a1c6d4890faf16bb843a042422fe

- championDetail: 536445e5b2e3bcd1d245353d392951542f9020c524be28f441f36e4b9864e74e
- championBin: 19d83d81fc1c3875473a022a5c13956709b8050a4e8b0bd02a1a8d54285f1742

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### The Show Stopper Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### The Show Stopper Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Sett grabs an enemy champion and Suppresses them as he carries them forward, then slams them into the ground, dealing plus % of the grabbed enemy's bonus Health physical damage to surrounding enemies and Slowing them by % for second. Enemies take less damage the further they are from where Sett lands.
