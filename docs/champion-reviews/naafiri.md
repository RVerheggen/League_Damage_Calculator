# Naafiri combat review

Patch: 16.16

## P - We Are More

Coverage: out-of-scope

Description signature: 48d6b0028ea5527fdf4377747391b23dcd8c9b7124e184a7b631506ed95ae4a6

- championDetail: 83893b4a0590c7df0f35c0a7e495d93385e5a0e58421dfe52fa3b9146de21dbe
- championBin: 5e24febebb23bf87d6f79f3630a7ed70c7341434ccfa1b60702a93ee7f2fb1fe

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### We Are More

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Naafiri spawns packmates that attack the targets of her attacks and abilities.

## Q - Darkin Daggers

Coverage: partial

Description signature: 118effa8303ce166bc202b529a646b3c80db6fa42e63078440612db6a278fbf2

- championDetail: 83893b4a0590c7df0f35c0a7e495d93385e5a0e58421dfe52fa3b9146de21dbe
- championBin: 5e24febebb23bf87d6f79f3630a7ed70c7341434ccfa1b60702a93ee7f2fb1fe

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Darkin Daggers Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Darkin Daggers Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Naafiri hurls Darkin-tainted blades, dealing physical damage and inflicting a bleed, dealing physical damage over seconds. Naafiri can Recast this Ability. If enemies hit are already bleeding from this Ability, it instead deals the remaining bleed damage plus between and physical damage, based on their missing Health. If that target was a champion or large monster, Naafiri restores Health. Packmates will leap at the first champion or monster hit and attack them for seconds.

## W - The Call of the Pack

Coverage: partial

Description signature: 578e83a927771e8ac11b51559bb016777c689c36874e6d4762dc9182a51c120c

- championDetail: 83893b4a0590c7df0f35c0a7e495d93385e5a0e58421dfe52fa3b9146de21dbe
- championBin: 5e24febebb23bf87d6f79f3630a7ed70c7341434ccfa1b60702a93ee7f2fb1fe

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### The Call of the Pack Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### The Call of the Pack Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Naafiri becomes Untargetable for second and prepares to hunt, spawning additional Packmates and gaining Attack Damage and % Move Speed for seconds. Packmates become Untargetable and are recalled to Naafiri.

## E - Eviscerate

Coverage: partial

Description signature: 12a2b5cf9edbfc050b94a610261c5cd116db1bce8727b4d2e50e218ce8f87f8a

- championDetail: 83893b4a0590c7df0f35c0a7e495d93385e5a0e58421dfe52fa3b9146de21dbe
- championBin: 5e24febebb23bf87d6f79f3630a7ed70c7341434ccfa1b60702a93ee7f2fb1fe

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Eviscerate Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Eviscerate Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Naafiri surges forward, dealing physical damage, then explodes in a flurry of blades, dealing physical damage. Packmates become Untargetable and are recalled to Naafiri restoring 100% Health.

## R - Hounds' Pursuit

Coverage: unsupported

Description signature: 334b154d188918e52ceb2a6ac01537886d20284c9bb7d02c7a1eea8c3d750dde

- championDetail: 83893b4a0590c7df0f35c0a7e495d93385e5a0e58421dfe52fa3b9146de21dbe
- championBin: 5e24febebb23bf87d6f79f3630a7ed70c7341434ccfa1b60702a93ee7f2fb1fe

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Hounds' Pursuit Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Naafiri dashes at an enemy champion, dealing physical damage and briefly Slowing them. Packmates become Untargetable and dash alongside Naafiri, dealing physical damage per Packmate. If Naafiri scores a Takedown within seconds she reveals nearby enemies and can recast this Ability once. The second cast grants Shield for seconds.
