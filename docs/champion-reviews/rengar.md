# Rengar combat review

Patch: 16.16

## P - Unseen Predator

Coverage: unsupported

Description signature: 64fe2f229aee6871559df3eb1b127db4474b2a9d28323a5c81aed4efecba91ec

- championDetail: 75823d3c1dd20f26308b8b85c12aa0495ad6cb88cc9169e2e2bb87eadb723cc4
- championBin: 1236a313eb7503836277e0d8a6c12ff90e1a4f2d9a280803da5296db283d39c0

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Unseen Predator Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

While in Brush, Rengar leaps at his target with his basic attack. Rengar generates Ferocity whenever he casts an ability. At Max Ferocity, his next ability is empowered. Killing enemy champions awards trophies on Rengar's Bonetooth Necklace, granting bonus attack damage.

## Q - Savagery

Coverage: partial

Description signature: a80a8731cd16687045f7cdc07cb855a127bdec9f27cadeb26cadc343a971e4c9

- championDetail: 75823d3c1dd20f26308b8b85c12aa0495ad6cb88cc9169e2e2bb87eadb723cc4
- championBin: 1236a313eb7503836277e0d8a6c12ff90e1a4f2d9a280803da5296db283d39c0

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation QTotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Savagery Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Savagery Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Rengar's next 2 Attacks gain % Attack Speed. The first Attack deals physical damage. Max Ferocity: The first Attack deals physical damage and grants Rengar Attack Speed for seconds.

## W - Battle Roar

Coverage: partial

Description signature: 39debe94860fa65e4e35cb326721a44292b168b8e4481b5fb5c50d306ba99a3b

- championDetail: 75823d3c1dd20f26308b8b85c12aa0495ad6cb88cc9169e2e2bb87eadb723cc4
- championBin: 1236a313eb7503836277e0d8a6c12ff90e1a4f2d9a280803da5296db283d39c0

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Battle Roar Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Battle Roar Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Rengar roars, dealing magic damage to nearby enemies and restoring % of the damage taken in the last seconds as Health. Max Ferocity: Deals magic damage and additionally cleanses Rengar of crowd control.

## E - Bola Strike

Coverage: partial

Description signature: d7de7ae80ee47b652e7852fc7a33f6ad682ea24522d8013a07e5fe0c12b1939b

- championDetail: 75823d3c1dd20f26308b8b85c12aa0495ad6cb88cc9169e2e2bb87eadb723cc4
- championBin: 1236a313eb7503836277e0d8a6c12ff90e1a4f2d9a280803da5296db283d39c0

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Bola Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Bola Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Rengar throws a bola, dealing physical damage to the first enemy hit, revealing and Slowing them by % for seconds. Max Ferocity: Deals physical damage and Roots for seconds.

## R - Thrill of the Hunt

Coverage: partial

Description signature: 5800ee9ef77773aa8cab7a3aa85233699dedd125d75af58ad57aeccd564473d0

- championDetail: 75823d3c1dd20f26308b8b85c12aa0495ad6cb88cc9169e2e2bb87eadb723cc4
- championBin: 1236a313eb7503836277e0d8a6c12ff90e1a4f2d9a280803da5296db283d39c0

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BonusDamage was preserved. Stateful and alternate effects require an explicit module.

### Thrill of the Hunt Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Thrill of the Hunt Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Rengar will also leap Attack when Camouflaged. Active: Rengar gains % Move Speed and True Sight in a small area around the nearest enemy champion for seconds. After seconds, Rengar becomes Camouflaged and can leap without being in Brush. Leaping to the nearest champion deals an additional physical damage, shreds Armor for seconds, and ends this Ability.
