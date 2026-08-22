# Olaf combat review

Patch: 16.16

## P - Berserker Rage

Coverage: unsupported

Description signature: 818ec71598af62843a63df43e3606446619687bf0dfaf814a9cb41b78eed9f43

- championDetail: 4519d3c4e6415fc05817e7aa223458a9204a513583c157e80feb8012b4490758
- championBin: 3e91f7daa1c1c77a2f378f150a9e54c0942c21a3ddea63281abf8b43c0d468cc

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Berserker Rage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Olaf gains Attack Speed and Life Steal based on his missing Health.

## Q - Undertow

Coverage: partial

Description signature: 6a047d5fb1707c28b87068ec203bd68994f9226afe0b1554542f9061a87a628a

- championDetail: 4519d3c4e6415fc05817e7aa223458a9204a513583c157e80feb8012b4490758
- championBin: 3e91f7daa1c1c77a2f378f150a9e54c0942c21a3ddea63281abf8b43c0d468cc

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Undertow Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Undertow Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Olaf throws an axe, dealing physical damage and Slowing by % for up to seconds (based on distance travelled). Champions hit lose % Armor for seconds. If Olaf picks up the axe, this Ability's Cooldown is reduced to seconds, or fully refunded if seconds has elapsed.

## W - Tough It Out

Coverage: unsupported

Description signature: 14bbd4b6b007cc71da30658dde3c6d68a0f019b7009ca8510088a1e3cdfdbe06

- championDetail: 4519d3c4e6415fc05817e7aa223458a9204a513583c157e80feb8012b4490758
- championBin: 3e91f7daa1c1c77a2f378f150a9e54c0942c21a3ddea63281abf8b43c0d468cc

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Tough It Out Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Olaf gains % Attack Speed for seconds, and plus % missing Health Shield (up to a maximum of Shield below % Health) for seconds.

## E - Reckless Swing

Coverage: partial

Description signature: 7c410994b019c34c7d8c701df73d628cb0c1146593713aa84719feae102090d1

- championDetail: 4519d3c4e6415fc05817e7aa223458a9204a513583c157e80feb8012b4490758
- championBin: 3e91f7daa1c1c77a2f378f150a9e54c0942c21a3ddea63281abf8b43c0d468cc

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Reckless Swing Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Reckless Swing Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Olaf ferociously swings his axes, dealing true damage. If the enemy dies, the cost is refunded. Attacks lower the Cooldown of this Ability by 1 second, increased to 2 seconds when attacking monsters.

## R - Ragnarok

Coverage: modeled

Description signature: b93dda4b42daf366b13329dfca5ee7f0819b929596a14bdc52b86f44e3afa0c6

- championDetail: 4519d3c4e6415fc05817e7aa223458a9204a513583c157e80feb8012b4490758
- championBin: 3e91f7daa1c1c77a2f378f150a9e54c0942c21a3ddea63281abf8b43c0d468cc

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Ragnarok passive defenses, active attack damage, expiry, and extensions use generic state and stat operations.

### Ragnarok Passive

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: timed-stat-modifier
- Reason: Applied at scenario start from rank data.

An invested ultimate rank grants armor and magic resistance.

### Ragnarok Active

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: timed-stat-modifier
- Reason: Compiled as timed state, dynamic attack damage, and state extension.

The cast grants attack damage for three seconds and qualifying hits extend the active state.

### Crowd Control And Movement

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: Control immunity and movement are outside scope.

Crowd-control immunity and movement speed do not change the supported damage result.
