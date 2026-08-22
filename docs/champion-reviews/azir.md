# Azir combat review

Patch: 16.16

## P - Shurima's Legacy

Coverage: out-of-scope

Description signature: 79f396f3befc3c3e9af62b25736f59528d8c44432c01ea62fe3042666d6d3603

- championDetail: 5267b4d106c988eee81a445b6eb852f9b86c4efb4e028ee7f3253140e2f2e8e2
- championBin: 0f7579cf14fd851581d2d603c430e16ceba29952313df6c569ff36b5e5c1a305

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Shurima's Legacy

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Azir can summon the Disc of the Sun from the ruins of allied or enemy turrets.

## Q - Conquering Sands

Coverage: partial

Description signature: e5d7a7dd1187c25eac98a3596e2d776007d49e59ff77c8eaa80466730b69e757

- championDetail: 5267b4d106c988eee81a445b6eb852f9b86c4efb4e028ee7f3253140e2f2e8e2
- championBin: 0f7579cf14fd851581d2d603c430e16ceba29952313df6c569ff36b5e5c1a305

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Conquering Sands Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Conquering Sands Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Azir orders all Sand Soldiers to an area, dealing magic damage to enemies they pass through and Slowing them by % for 1 second.

## W - Arise!

Coverage: partial

Description signature: 4165041f85d6d6b8ef07603c1ac55c91a476776fb487cd27f5b0a08195909853

- championDetail: 5267b4d106c988eee81a445b6eb852f9b86c4efb4e028ee7f3253140e2f2e8e2
- championBin: 0f7579cf14fd851581d2d603c430e16ceba29952313df6c569ff36b5e5c1a305

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Arise! Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Arise! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Azir summons a Sand Soldier for seconds. When Azir Attacks an enemy near a Sand Soldier, he instead orders the soldiers to stab, dealing magic damage in their direction. This Ability has charges.

## E - Shifting Sands

Coverage: partial

Description signature: 780ee74fb390ba0b0dcdf3fd9e21358afce946605340284878530a47336645bc

- championDetail: 5267b4d106c988eee81a445b6eb852f9b86c4efb4e028ee7f3253140e2f2e8e2
- championBin: 0f7579cf14fd851581d2d603c430e16ceba29952313df6c569ff36b5e5c1a305

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Shifting Sands Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Shifting Sands Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Azir grants himself Shield for seconds and dashes to one of his Sand Soldiers, dealing magic damage to enemies he passes through. If Azir hits an enemy champion, he stops and gains a Sand Soldier charge.

## R - Emperor's Divide

Coverage: partial

Description signature: 9cdab209d1c9e7f75f504311213d4a8704e6ae6b25eb1bd921dcaae2c38969f8

- championDetail: 5267b4d106c988eee81a445b6eb852f9b86c4efb4e028ee7f3253140e2f2e8e2
- championBin: 0f7579cf14fd851581d2d603c430e16ceba29952313df6c569ff36b5e5c1a305

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Emperor's Divide Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Emperor's Divide Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Azir summons a wall of armored soldiers that charges forward, Knocking Back enemies and dealing magic damage. The soldiers remain, blocking enemy paths for seconds.
