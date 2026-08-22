# Jayce combat review

Patch: 16.16

## P - Hextech Capacitor

Coverage: out-of-scope

Description signature: cfe4e986c7b1368ae1e0ecce4dd3bc1388d33f09a3ce5c8db9a3a5bcfebaa61b

- championDetail: 094d99f554f1a5a92103d51c5340e976122ec1da6d56d8b10840659b33252a47
- championBin: ab72e3f47f711e127ecf75f3a9767abc331a439b59d53dd0ef16c9efeae1aa44

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Hextech Capacitor

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

When Jayce swaps weapons he gains Move Speed for a short duration.

## Q - To the Skies! / Shock Blast

Coverage: partial

Description signature: bfe42e9a60d940b24a8f5922944a817a1d35e4173f151c6f3cb4abba71b5c8df

- championDetail: 094d99f554f1a5a92103d51c5340e976122ec1da6d56d8b10840659b33252a47
- championBin: ab72e3f47f711e127ecf75f3a9767abc331a439b59d53dd0ef16c9efeae1aa44

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### To the Skies! / Shock Blast Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### To the Skies! / Shock Blast Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Mercury Hammer: Jayce leaps to an enemy, dealing physical damage to surrounding enemies and Slowing them by % for seconds.

## W - Lightning Field / Hyper Charge

Coverage: partial

Description signature: af2ae609f49f6d8a784ed04021cf62eb8994a228c1abaa0f7e4548290bba8263

- championDetail: 094d99f554f1a5a92103d51c5340e976122ec1da6d56d8b10840659b33252a47
- championBin: ab72e3f47f711e127ecf75f3a9767abc331a439b59d53dd0ef16c9efeae1aa44

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Lightning Field / Hyper Charge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Lightning Field / Hyper Charge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Mercury Hammer - Passive: Jayce's Hammer Attacks grant Mana. Mercury Hammer - Active: Jayce creates an electric aura dealing magic damage over seconds.

## E - Thundering Blow / Acceleration Gate

Coverage: partial

Description signature: a54a4983d8d011b534d082f65d66464191fc766dc16c6568a969c3b7ab47f7ec

- championDetail: 094d99f554f1a5a92103d51c5340e976122ec1da6d56d8b10840659b33252a47
- championBin: ab72e3f47f711e127ecf75f3a9767abc331a439b59d53dd0ef16c9efeae1aa44

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Thundering Blow / Acceleration Gate Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Thundering Blow / Acceleration Gate Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Hammer Form: Jayce swings his hammer, Knocking Back his target and dealing plus % max Health magic damage.

## R - Mercury Cannon / Mercury Hammer

Coverage: partial

Description signature: 870753385b26f5a0c4f23c81f440aa1fc8d9d155b290458ace47d03c71e2c3e0

- championDetail: 094d99f554f1a5a92103d51c5340e976122ec1da6d56d8b10840659b33252a47
- championBin: ab72e3f47f711e127ecf75f3a9767abc331a439b59d53dd0ef16c9efeae1aa44

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Mercury Cannon / Mercury Hammer Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Mercury Cannon / Mercury Hammer Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Mercury Hammer: Jayce transforms his weapon into the Mercury Cannon, gaining Attack Range and new Abilities. Jayce's next Attack removes Armor and Magic Resist for seconds.
