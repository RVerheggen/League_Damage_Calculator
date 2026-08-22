# Draven combat review

Patch: 16.16

## P - League of Draven

Coverage: out-of-scope

Description signature: 3b2dfdb33da42c4063713160798a6848f80ded092ebc6deac823a917d54282d0

- championDetail: 66b2820df8025c583d9c6629e46f495ad39ab6c7abc54af2b619a1ba852c588c
- championBin: f59e3e064c6eed5e91ac102fa9c0c1a3b2282a95b9bdc80bb701ad086cdc0b82

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### League of Draven

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has.

## Q - Spinning Axe

Coverage: partial

Description signature: 7d2b02341ac4641cd373b47c526e98ffa164cda4d8ff2ce0ba753e1c435d05b0

- championDetail: 66b2820df8025c583d9c6629e46f495ad39ab6c7abc54af2b619a1ba852c588c
- championBin: f59e3e064c6eed5e91ac102fa9c0c1a3b2282a95b9bdc80bb701ad086cdc0b82

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Spinning Axe Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Spinning Axe Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Draven readies a Spinning Axe, causing his next Attack to deal an additional physical damage and ricochet into the air. If Draven catches it, he readies another Spinning Axe. Draven can hold two Spinning Axes at once.

## W - Blood Rush

Coverage: unsupported

Description signature: f890519e262ea4e52517c3b352b19ec302c09eb9aec0f62b3b2814f798533e7c

- championDetail: 66b2820df8025c583d9c6629e46f495ad39ab6c7abc54af2b619a1ba852c588c
- championBin: f59e3e064c6eed5e91ac102fa9c0c1a3b2282a95b9bdc80bb701ad086cdc0b82

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Blood Rush Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Draven becomes Ghosted, gains % Move Speed decaying over seconds and % Attack Speed for seconds. When Draven catches a Spinning Axe, this Ability's Cooldown is refreshed.

## E - Stand Aside

Coverage: partial

Description signature: 822bd543e7c4736ff641ff68028fe11de049332bdc895e836f7604a634831bd8

- championDetail: 66b2820df8025c583d9c6629e46f495ad39ab6c7abc54af2b619a1ba852c588c
- championBin: f59e3e064c6eed5e91ac102fa9c0c1a3b2282a95b9bdc80bb701ad086cdc0b82

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Stand Aside Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Stand Aside Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Draven chucks a sideways axe that deals physical damage, Knocks Back, and Slows by % for seconds.

## R - Whirling Death

Coverage: partial

Description signature: 0c9449c17c4664cc709adf8e8aade5cbd78ba86bf50857d026c36f2dbf9aa3a4

- championDetail: 66b2820df8025c583d9c6629e46f495ad39ab6c7abc54af2b619a1ba852c588c
- championBin: f59e3e064c6eed5e91ac102fa9c0c1a3b2282a95b9bdc80bb701ad086cdc0b82

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RCalculatedDamage was preserved. Stateful and alternate effects require an explicit module.

### Whirling Death Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Whirling Death Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Draven hurls two massive axes that deal physical damage. Upon hitting a champion or Recasting, they reverse direction and return to Draven. The axes deal % less damage for each enemy hit, down to a minimum of %. If Whirling Death would leave an enemy champion with less health than % of Draven's current League of Draven stacks (), he will execute them.
