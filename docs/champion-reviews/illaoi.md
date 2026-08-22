# Illaoi combat review

Patch: 16.16

## P - Prophet of an Elder God

Coverage: unsupported

Description signature: 0a1c6b09e0f5449f7e0209a50df80b292fddd9aa7a988ff98f2fc0d56b84899a

- championDetail: 24fe888026cc7f2a1202ac8dea06875a80d68bf0f77aa5535e722f4aed9f1bd7
- championBin: 1265c962dc6487c8b1eb802fd4a2597e74d2d0e949f5ab44250dde30a8bc5847

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Prophet of an Elder God Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Illaoi and the Vessels she creates spawn Tentacles on nearby impassible terrain. Tentacles swing at spirits, Vessels, and victims of Illaoi's Harsh lesson. Tentacles deal physical damage to enemies hit, and will heal Illaoi if they damage a champion.

## Q - Tentacle Smash

Coverage: partial

Description signature: 65e259655ad35384eb49304a41f7936fe21d2981b0f5e1f6d2fe0c0a5c8dd474

- championDetail: 24fe888026cc7f2a1202ac8dea06875a80d68bf0f77aa5535e722f4aed9f1bd7
- championBin: 1265c962dc6487c8b1eb802fd4a2597e74d2d0e949f5ab44250dde30a8bc5847

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TentacleDamageTotal was preserved. Stateful and alternate effects require an explicit module.

### Tentacle Smash Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Tentacle Smash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Passive: Slam damage is increased by % (currently physical damage). Active: Illaoi swings her idol, causing a Tentacle to Slam forward.

## W - Harsh Lesson

Coverage: partial

Description signature: b5e9f26715ffa495153fe4b7346fb79a519f9b47e359b7394831a2d2e9e954b1

- championDetail: 24fe888026cc7f2a1202ac8dea06875a80d68bf0f77aa5535e722f4aed9f1bd7
- championBin: 1265c962dc6487c8b1eb802fd4a2597e74d2d0e949f5ab44250dde30a8bc5847

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation HealthPercentTotal was preserved. Stateful and alternate effects require an explicit module.

### Harsh Lesson Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Harsh Lesson Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Illaoi's next Attack causes her to leap at the target, dealing an additional max Health physical damage. When she strikes, nearby Tentacles will Slam at the target.

## E - Test of Spirit

Coverage: out-of-scope

Description signature: 86d29563f27d036774d7cbdec231230711e1c784554d19c38e656f2400dfc5c1

- championDetail: 24fe888026cc7f2a1202ac8dea06875a80d68bf0f77aa5535e722f4aed9f1bd7
- championBin: 1265c962dc6487c8b1eb802fd4a2597e74d2d0e949f5ab44250dde30a8bc5847

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Test of Spirit

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Illaoi pulls the spirit from an enemy champion for seconds. The spirit can be damaged like a champion, with of that damage echoing to its owner. If the spirit dies or the target leaves its range, the target becomes marked for seconds and is Slowed by % for seconds. Marked enemies spawn Tentacles if possible. Tentacles will automatically Slam at spirits and marked enemies once every seconds.

## R - Leap of Faith

Coverage: partial

Description signature: ea26b15313b66b82fb21392621db5e8724b76aa74134fbd9b798ac3893fd84cb

- championDetail: 24fe888026cc7f2a1202ac8dea06875a80d68bf0f77aa5535e722f4aed9f1bd7
- championBin: 1265c962dc6487c8b1eb802fd4a2597e74d2d0e949f5ab44250dde30a8bc5847

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Leap of Faith Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Leap of Faith Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Illaoi smashes her idol into the ground, dealing physical damage to nearby enemies and spawning a Tentacle for each enemy champion hit. For the next seconds, Tentacles are untargetable and Slam 50% faster, and Harsh Lesson has a second cooldown.
