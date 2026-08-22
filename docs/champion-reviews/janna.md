# Janna combat review

Patch: 16.16

## P - Tailwind

Coverage: unsupported

Description signature: fa5ba94d14d433e0584becc7b1b9b8a814e46a1a9eb31df59dec773150e8ae6d

- championDetail: e0ef0c879e6715f9a626d973cca0cf3ab8849739e23ad35146d259e6af926935
- championBin: 7b09567c5f1d0644722d8c907f6ed67b84b72c60802bcd2287eed2de64c9b976

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Tailwind Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Janna's allies gain Move Speed moving towards her. Janna deals a portion of bonus Move Speed as bonus magic damage on hit and with Zephyr.

## Q - Howling Gale

Coverage: partial

Description signature: a05ee3aa50930cc11e1a3861c2f196a2f1322afacc3e6b74d37f42174b73c8ee

- championDetail: e0ef0c879e6715f9a626d973cca0cf3ab8849739e23ad35146d259e6af926935
- championBin: 7b09567c5f1d0644722d8c907f6ed67b84b72c60802bcd2287eed2de64c9b976

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Howling Gale Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Howling Gale Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Janna summons a tornado that grows stronger over seconds then blows along its path. It deals - magic damage and Knocks Up for - seconds. The distance, damage, and Knock Up duration increase based on how much the tornado grew. Janna can Recast to send the tornado early.

## W - Zephyr

Coverage: partial

Description signature: 783c6091f8caed899219e95a6ac0ff778ddd372279086f6a55272ed25be5e06a

- championDetail: e0ef0c879e6715f9a626d973cca0cf3ab8849739e23ad35146d259e6af926935
- championBin: 7b09567c5f1d0644722d8c907f6ed67b84b72c60802bcd2287eed2de64c9b976

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Zephyr Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Zephyr Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Passive: Janna gains Move Speed and is Ghosted. Active: Janna's elemental strikes an enemy, Slowing them by for seconds, and dealing + magic damage.

## E - Eye Of The Storm

Coverage: unsupported

Description signature: 2ce60cf04623d781094959312d86f337ad2699eecac72abc281c546922ce1018

- championDetail: e0ef0c879e6715f9a626d973cca0cf3ab8849739e23ad35146d259e6af926935
- championBin: 7b09567c5f1d0644722d8c907f6ed67b84b72c60802bcd2287eed2de64c9b976

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Eye Of The Storm Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Janna grants an ally champion or turret Shield for seconds. While shielded, they gain Attack Damage. Janna refunds % of the cooldown whenever she impairs an enemy champion's movement with an Ability.

## R - Monsoon

Coverage: out-of-scope

Description signature: 252a1e879a6e3d0dc598e08c1854abeb679b893648692a3f445f78bf4a76dc58

- championDetail: e0ef0c879e6715f9a626d973cca0cf3ab8849739e23ad35146d259e6af926935
- championBin: 7b09567c5f1d0644722d8c907f6ed67b84b72c60802bcd2287eed2de64c9b976

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Monsoon

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Janna summons a magical monsoon, Knocking Back nearby enemies then healing nearby allies for Health over seconds. Moving or using an Ability ends the monsoon early.
