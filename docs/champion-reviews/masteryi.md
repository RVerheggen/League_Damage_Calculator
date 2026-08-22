# Master Yi combat review

Patch: 16.16

## P - Double Strike

Coverage: out-of-scope

Description signature: 033514ae286fee809d410bad94b23f7d2ad1a2cc94e45d67b47dd28f53dbda0a

- championDetail: aab8297ccce88c84fbfb59bf97125fd2f674296f2abc154357eaa7ab6b364d54
- championBin: 0767ca63fc9776451e8e81025fc0dc0e4cae35f6d58353ffa1747077c2def67f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Double Strike

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Every few consecutive basic attack, Master Yi strikes twice.

## Q - Alpha Strike

Coverage: partial

Description signature: 62abacde4c15a9f819f1db2d0de1bbc69885ed0596b69b3ff4bbc6bcdb747e74

- championDetail: aab8297ccce88c84fbfb59bf97125fd2f674296f2abc154357eaa7ab6b364d54
- championBin: 0767ca63fc9776451e8e81025fc0dc0e4cae35f6d58353ffa1747077c2def67f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Alpha Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Alpha Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Master Yi becomes Untargetable and teleports to rapidly strike enemies near his target, dealing physical damage to all enemies hit after hits. This Ability can strike the same enemy repeatedly if there are no other targets, dealing % damage for subsequent hits (), for a maximum single target total of physical damage.

## W - Meditate

Coverage: unsupported

Description signature: 743f466be8b3c0d4d198201e25d80d9f0d949090ec4be94e186944fddff3a053

- championDetail: aab8297ccce88c84fbfb59bf97125fd2f674296f2abc154357eaa7ab6b364d54
- championBin: 0767ca63fc9776451e8e81025fc0dc0e4cae35f6d58353ffa1747077c2def67f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Meditate Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Master Yi channels, restoring Health over seconds. This healing is increased by up to % based on Master Yi's missing Health. While channeling and for seconds afterwards, he takes reduced damage, decreased to % after the first seconds.

## E - Wuju Style

Coverage: partial

Description signature: 52587089498ab7a2b006c18c688f1006c42d86967ef05545c5337c1611752828

- championDetail: aab8297ccce88c84fbfb59bf97125fd2f674296f2abc154357eaa7ab6b364d54
- championBin: 0767ca63fc9776451e8e81025fc0dc0e4cae35f6d58353ffa1747077c2def67f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Wuju Style Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Wuju Style Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Master Yi's Attacks deal an additional true damage for seconds.

## R - Highlander

Coverage: unsupported

Description signature: 1e60d40b3eaf5659f36f8d2bb4cb6263fa73975578346e36e60b4bb35a3440f1

- championDetail: aab8297ccce88c84fbfb59bf97125fd2f674296f2abc154357eaa7ab6b364d54
- championBin: 0767ca63fc9776451e8e81025fc0dc0e4cae35f6d58353ffa1747077c2def67f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Highlander Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Champion takedowns reduce the remaining Cooldown of Master Yi's basic Abilities by %. Active: Master Yi enters a trance, gaining % Move Speed, % Attack Speed, and immunity to Slows for seconds. Champion takedowns extend the duration of this Ability by seconds.
