# Gragas combat review

Patch: 16.16

## P - Happy Hour

Coverage: out-of-scope

Description signature: e5e9d9db71e509f7f78d92418c2bdefb0f270bfd66cdc8fcf63f3909426343ed

- championDetail: 7834e64010a51ab83347bb9ca72a80ee1d9b0e6b90143464e19a13f110f0189e
- championBin: 80fa0e9bde7a6a280aac5ccdd22bf91a5db0acb92aafba6a5f4cc65641617755

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Happy Hour

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Gragas periodically heals upon using a skill.

## Q - Barrel Roll

Coverage: partial

Description signature: 574ecb7adc58d78033154cf47249d2025d7655ba8f950999474a0cf5f8508c4e

- championDetail: 7834e64010a51ab83347bb9ca72a80ee1d9b0e6b90143464e19a13f110f0189e
- championBin: 80fa0e9bde7a6a280aac5ccdd22bf91a5db0acb92aafba6a5f4cc65641617755

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MinDamage was preserved. Stateful and alternate effects require an explicit module.

### Barrel Roll Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Barrel Roll Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Gragas rolls a cask that explodes after seconds, dealing between magic damage and magic damage and Slowing for between and % for seconds. The damage and Slow increase with time the cask spent before exploding. Gragas can Recast to detonate the cask early.

## W - Drunken Rage

Coverage: partial

Description signature: 4b70607f31d84481e16837d5651febc9bcec8dd369124d035a1b90e436463661

- championDetail: 7834e64010a51ab83347bb9ca72a80ee1d9b0e6b90143464e19a13f110f0189e
- championBin: 80fa0e9bde7a6a280aac5ccdd22bf91a5db0acb92aafba6a5f4cc65641617755

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Drunken Rage Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Drunken Rage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Gragas samples his brew, reducing incoming damage by for seconds and empowering his next Attack to deal an additional plus % max Health magic damage to the target and surrounding enemies.

## E - Body Slam

Coverage: partial

Description signature: 97b9f0b681c73a0e181ed1683841c27ea7b67d9feb7238e91117caf4ebf8a2c8

- championDetail: 7834e64010a51ab83347bb9ca72a80ee1d9b0e6b90143464e19a13f110f0189e
- championBin: 80fa0e9bde7a6a280aac5ccdd22bf91a5db0acb92aafba6a5f4cc65641617755

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Body Slam Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Body Slam Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Gragas charges forward, colliding with the first enemy, Knocking Up nearby enemies for second and dealing magic damage to them. This Ability's Cooldown is reduced by % if Gragas collides with an enemy.

## R - Explosive Cask

Coverage: partial

Description signature: 5f6331f32b8438b3f2e5b97729760255debbf9eaba51849747a46124d01deb63

- championDetail: 7834e64010a51ab83347bb9ca72a80ee1d9b0e6b90143464e19a13f110f0189e
- championBin: 80fa0e9bde7a6a280aac5ccdd22bf91a5db0acb92aafba6a5f4cc65641617755

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageDone was preserved. Stateful and alternate effects require an explicit module.

### Explosive Cask Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Explosive Cask Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Gragas hurls his cask, dealing magic damage and Knocking Away enemies from the impact zone.
