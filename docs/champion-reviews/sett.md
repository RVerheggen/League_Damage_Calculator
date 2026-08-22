# Sett combat review

Patch: 16.16

## P - Pit Grit

Coverage: unsupported

Description signature: dcd91c3da8dfa44ad8544f94286d942185e8e2fc66d4c60b8f70a5b4d4da22ec

- championDetail: 536445e5b2e3bcd1d245353d392951542f9020c524be28f441f36e4b9864e74e
- championBin: 19d83d81fc1c3875473a022a5c13956709b8050a4e8b0bd02a1a8d54285f1742

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Pit Grit is damage-relevant and mapped to the attack-cycle family. Left and right punches alternate, and the right punch has separate damage and timing.

### Left And Right Punch Cycle

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: attack-cycle
- Reason: The runtime does not yet persist an alternating attack variant while preserving the selected attack outcome.

Basic attacks alternate between left and right punches. The right punch is faster and deals additional damage.

### Missing-Health Regeneration

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Healing totals are outside scope because this one-way damage simulation does not use attacker regeneration to change outgoing damage.

Sett gains health regeneration based on missing health.

## Q - Knuckle Down

Coverage: modeled

Description signature: 56cf3e807aa18fc30c9bec8493fcd360d056d204ec27d0f87cba9348f06545f4

- championDetail: 536445e5b2e3bcd1d245353d392951542f9020c524be28f441f36e4b9864e74e
- championBin: 19d83d81fc1c3875473a022a5c13956709b8050a4e8b0bd02a1a8d54285f1742

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Knuckle Down empowers the next two successful basic attacks for four seconds with patch-ranked flat and maximum-health physical damage. Movement speed does not change manually timed damage.

### Knuckle Down Attacks

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: limited-attack-state
- Reason: Compiled by the reusable limited-attack-state template. The two retained Sett Q attack records validate the attack count.

Casting Q empowers the next two successful basic attacks for four seconds with flat and maximum-health physical damage.

Formula bindings: SettQ.MaxHealthDamageCalc

Value bindings: SettQ.BaseDamage, SettQ.Duration, SettQAttack, SettQAttack2

### Knuckle Down Movement Speed

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Movement does not change manually selected hit timing or damage.

Casting Q grants movement speed toward enemy champions.

## W - Haymaker

Coverage: partial

Description signature: a27701d388a845a3c83e686354a19b926593d5c3c96ec6e2c281c446675a90bf

- championDetail: 536445e5b2e3bcd1d245353d392951542f9020c524be28f441f36e4b9864e74e
- championBin: 19d83d81fc1c3875473a022a5c13956709b8050a4e8b0bd02a1a8d54285f1742

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

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

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

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

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

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
