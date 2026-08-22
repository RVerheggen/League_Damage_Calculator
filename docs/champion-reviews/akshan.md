# Akshan combat review

Patch: 16.16

## P - Dirty Fighting

Coverage: modeled

Description signature: 7d231739fa875d6d62fe1f131f28325c38e17a3109ae12a0c452dec526c2628a

- championDetail: 6d93d5365da660a3b1f9769fcb70df3a975704f04ef651e1d645da6251c09d9c
- championBin: b2529fe0e7160b178728db8b90997fe3491d7dab6fbf27b6a655327bae48f1b2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Dirty Fighting uses generic multi-hit, per-target stacking, threshold damage, and shield-lockout programs with patch 16.16 values.

### Second Shot

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: multi-hit-action
- Reason: The basic-attack action exposes a typed second-shot control.

A basic attack fires a second physical attack for 50% total AD unless canceled.

Formula bindings: AkshanPassive.SecondAutoDamage

### Dirty Fighting

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: stacking-proc
- Reason: Compiled by the generic stacking-proc template.

Basic attacks and ability hits add per-target stacks for 4.5 seconds. Three stacks are consumed for level-scaled magic damage.

Formula bindings: AkshanPassive.PassiveProcDamage

Value bindings: AkshanPassive.MaxStacks, AkshanPassive.DebuffDuration

### Dirty Fighting Shield

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: shield-with-lockout
- Reason: Compiled as a shield operation guarded by participant proc state.

A champion-target proc grants a level-scaled shield with a level-scaled lockout.

Formula bindings: AkshanPassive.TotalShieldAmount, AkshanPassive.PassiveCooldown

### Canceled Shot Movement

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Movement speed does not change a manually timed damage result.

Canceling the second attack grants movement speed.

## Q - Avengerang

Coverage: modeled

Description signature: b1476301db69d869c739d74732234c17d71f0ae5734ffc57c98a57a3a1a35523

- championDetail: 6d93d5365da660a3b1f9769fcb70df3a975704f04ef651e1d645da6251c09d9c
- championBin: b2529fe0e7160b178728db8b90997fe3491d7dab6fbf27b6a655327bae48f1b2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Avengerang direct damage and its outbound and return hits use a typed hit-count action. Movement speed is out of scope.

### Avengerang Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: multi-hit-action
- Reason: The typed hit-count parameter repeats the complete CommunityDragon formula.

Deals structured physical damage once outbound and optionally once on return.

### Champion-Hit Movement

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Movement speed does not change a manually timed damage result.

Champion hits grant decaying movement speed.

## W - Going Rogue

Coverage: out-of-scope

Description signature: 9f50bdff3b0d6ff82ad48821cf465f55cc6008dd5c08d165bab0d8c22abbfc78

- championDetail: 6d93d5365da660a3b1f9769fcb70df3a975704f04ef651e1d645da6251c09d9c
- championBin: b2529fe0e7160b178728db8b90997fe3491d7dab6fbf27b6a655327bae48f1b2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Going Rogue

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

{{ Spell_AkshanW_Tooltip_ }}

## E - Heroic Swing

Coverage: partial

Description signature: ab014a6cdf38436dacd58c1c0bef367d94a187fcc75c6f7961db3a99d1d75e7d

- championDetail: 6d93d5365da660a3b1f9769fcb70df3a975704f04ef651e1d645da6251c09d9c
- championBin: b2529fe0e7160b178728db8b90997fe3491d7dab6fbf27b6a655327bae48f1b2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Heroic Swing Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Heroic Swing Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

First Cast: Akshan fires a grappling hook, attaching to the first terrain hit. Second Cast: Akshan swings around the terrain, repeatedly firing at the nearest enemy for physical damage per shot. Third Cast: Akshan dives off the rope, firing a final shot. Colliding with an enemy Champion or terrain ends the swing early. Champion takedowns refresh this Ability's Cooldown.

## R - Comeuppance

Coverage: partial

Description signature: ef0b44a2269508a49751fadf4f3c02f6a98700759a003964def8cffa7826544b

- championDetail: 6d93d5365da660a3b1f9769fcb70df3a975704f04ef651e1d645da6251c09d9c
- championBin: b2529fe0e7160b178728db8b90997fe3491d7dab6fbf27b6a655327bae48f1b2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Comeuppance Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Comeuppance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Akshan locks onto a champion and begins overcharging his gun for up to seconds, storing up to bullets. Recast: Akshan unleashes the stored bullets, each dealing at least physical damage to the first enemy or structure hit, increased up to physical damage based on missing Health.
