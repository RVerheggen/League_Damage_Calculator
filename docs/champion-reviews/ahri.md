# Ahri combat review

Patch: 16.16

## P - Essence Theft

Coverage: out-of-scope

Description signature: 415e744aa96c166a19638f3f043a02654da511373f08d4ac582f499b57b20536

- championDetail: c50bfc7446179e9825b9cdfadf1859df9e892c3dc7df94ef7642139501a24bd6
- championBin: 0a8869f15bad77053354d47c32b3241fc21bb5b6dab122651f988ff079b95762

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Essence Theft

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

After killing 9 minions or monsters, Ahri heals. After taking down an enemy champion, Ahri heals for a greater amount.

## Q - Orb of Deception

Coverage: partial

Description signature: 04fcaff27f1a3a675d09d45ff4af123a6790d18cd7ea39e3930322c2fcadee08

- championDetail: c50bfc7446179e9825b9cdfadf1859df9e892c3dc7df94ef7642139501a24bd6
- championBin: 0a8869f15bad77053354d47c32b3241fc21bb5b6dab122651f988ff079b95762

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Orb of Deception Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Orb of Deception Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ahri throws then pulls back her orb, dealing magic damage on the way out and true damage on the way back.

## W - Fox-Fire

Coverage: partial

Description signature: 5455bd8275a09f48d67287b648d11edef7f35a04073cf2807a6826bf68f712d2

- championDetail: c50bfc7446179e9825b9cdfadf1859df9e892c3dc7df94ef7642139501a24bd6
- championBin: 0a8869f15bad77053354d47c32b3241fc21bb5b6dab122651f988ff079b95762

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation SingleFireDamage was preserved. Stateful and alternate effects require an explicit module.

### Fox-Fire Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Fox-Fire Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Ahri releases 3 fox-fires that seek nearby enemies and deal magic damage, reduced to damage beyond the first. She also gains % Move Speed decaying over seconds.

## E - Charm

Coverage: partial

Description signature: e565886d91f21a61b12d9313c2131c156545f64339383338b2bc9b5a580ef680

- championDetail: c50bfc7446179e9825b9cdfadf1859df9e892c3dc7df94ef7642139501a24bd6
- championBin: 0a8869f15bad77053354d47c32b3241fc21bb5b6dab122651f988ff079b95762

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Charm Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Charm Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ahri blows a kiss that Charms the first enemy hit for seconds and deals magic damage.

## R - Spirit Rush

Coverage: partial

Description signature: f45bd084a16208b148c7f47fda4626732a78fa3247761cff486976d9126d5d65

- championDetail: c50bfc7446179e9825b9cdfadf1859df9e892c3dc7df94ef7642139501a24bd6
- championBin: 0a8869f15bad77053354d47c32b3241fc21bb5b6dab122651f988ff079b95762

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RCalculatedDamage was preserved. Stateful and alternate effects require an explicit module.

### Spirit Rush Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Spirit Rush Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ahri nimbly dashes, firing essence bolts at nearby enemies, prioritizing champions. These bolts deal magic damage each. Spirit Rush can be Recast up to 2 more times within seconds. Consuming a champion's Essence with Essence Theft during this period extends the recast window by up to seconds and grants an additional recast of Spirit Rush (up to stored).
