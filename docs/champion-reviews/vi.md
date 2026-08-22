# Vi combat review

Patch: 16.16

## P - Blast Shield

Coverage: unsupported

Description signature: 158914b7d1d7ff821102e0f8ca90eceee10a9f3ca575ef66faf17bbc6efa5596

- championDetail: e7b54e146d6d8985958f000bdc66e158d2d0a4f14a12f2b5d2177c57e78c8c7b
- championBin: b67114797298839230dcbef9820c7b8b7a4d8dfaae5c143ff04ace4a6caca357

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Blast Shield Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Vi charges a shield over time. The shield can be activated by hitting an enemy with an ability.

## Q - Vault Breaker

Coverage: partial

Description signature: 6894ebea53b807f683d4789ff1ce0e97472f97af834d588c669ca498f136862d

- championDetail: e7b54e146d6d8985958f000bdc66e158d2d0a4f14a12f2b5d2177c57e78c8c7b
- championBin: b67114797298839230dcbef9820c7b8b7a4d8dfaae5c143ff04ace4a6caca357

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Vault Breaker Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Vault Breaker Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Begin Charging: Vi begins charging a powerful punch, Slowing herself by %. Release: Vi dashes forward dealing between and physical damage based on charge time and applying Denting Blows to all enemies hit. Vi stops upon colliding with an enemy champion, and Knocks them Back.

## W - Denting Blows

Coverage: partial

Description signature: b90a729efbcefc752d302f4a0783242b8d5d7d38d38af8380ff3428e4f44f100

- championDetail: e7b54e146d6d8985958f000bdc66e158d2d0a4f14a12f2b5d2177c57e78c8c7b
- championBin: b67114797298839230dcbef9820c7b8b7a4d8dfaae5c143ff04ace4a6caca357

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Denting Blows Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Denting Blows Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Passive: Every 3rd Attack on the same target deals an additional max Health physical damage, removes % Armor and grants Vi % Attack Speed for seconds. It also reduces the remaining Cooldown of Blast Shield by seconds.

## E - Relentless Force

Coverage: partial

Description signature: 9e77c00844a6f7cd6f1cbe3e6a8564766ab34e6c7f9db3ea4c7da53358e97ea0

- championDetail: e7b54e146d6d8985958f000bdc66e158d2d0a4f14a12f2b5d2177c57e78c8c7b
- championBin: b67114797298839230dcbef9820c7b8b7a4d8dfaae5c143ff04ace4a6caca357

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Relentless Force Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Relentless Force Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Vi's next Attack deals physical damage to the target and enemies behind them. This Ability has 2 charges ( second refresh).

## R - Cease and Desist

Coverage: partial

Description signature: 006ec68b84472769434a57fe6480ced158c379c66690d0b961f29363bf9cf3ee

- championDetail: e7b54e146d6d8985958f000bdc66e158d2d0a4f14a12f2b5d2177c57e78c8c7b
- championBin: b67114797298839230dcbef9820c7b8b7a4d8dfaae5c143ff04ace4a6caca357

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Cease and Desist Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Cease and Desist Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Vi singles out an enemy champion, revealing them and dashing unstoppably towards them. Upon reaching them, Vi Knocks them Up for seconds and deals physical damage. Any other enemies Vi collides with are dealt damage, knocked aside, and Stunned for seconds.
