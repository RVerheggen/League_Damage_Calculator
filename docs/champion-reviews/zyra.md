# Zyra combat review

Patch: 16.16

## P - Garden of Thorns

Coverage: out-of-scope

Description signature: 2ef79942ad9300e157f9eb69b0deed9e50a3461c818a523a82d038c1367cd746

- championDetail: c122117307356c30c87b0545295941fdebcff17b25da7717d26f37654d670142
- championBin: 65712399ec3c8e58da13a3910bccee61faea128c433e1b64a03bf0cffb3808ee

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Garden of Thorns

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Seeds spawn around Zyra periodically, becoming faster with level. Zyra can cast Deadly Spines or Grasping Roots near seeds to grow plants, who fight for Zyra.

## Q - Deadly Spines

Coverage: partial

Description signature: fc21366b2e951d7055088b24456d41c8cc4dc8ee245c69df75ef63c673e1e1f9

- championDetail: c122117307356c30c87b0545295941fdebcff17b25da7717d26f37654d670142
- championBin: 65712399ec3c8e58da13a3910bccee61faea128c433e1b64a03bf0cffb3808ee

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation InitialDamage was preserved. Stateful and alternate effects require an explicit module.

### Deadly Spines Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Deadly Spines Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Zyra causes thick vines to spread and explode into spines, dealing magic damage. If this Ability is cast near a Seed, the Seed grows into a Thorn Spitter that deals magic damage and lasts seconds. Thorn Spitters have 575 range.

## W - Rampant Growth

Coverage: out-of-scope

Description signature: 4eb60991d86ea4af1622fd27d6c17dfdca4eddb04f1489faa09e4eff25d1c9ac

- championDetail: c122117307356c30c87b0545295941fdebcff17b25da7717d26f37654d670142
- championBin: 65712399ec3c8e58da13a3910bccee61faea128c433e1b64a03bf0cffb3808ee

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Rampant Growth

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Zyra plants a Seed that lasts seconds. These Seeds grant True Sight of enemy champions that step on them for seconds, but are still destroyed. This Ability has 2 charges with a second recharge time. Killing an enemy minion or monster reduces the recharge time by %. Champion takedowns reduce the recharge time by % instead.

## E - Grasping Roots

Coverage: partial

Description signature: bb1cd008caea61d3e64ca3b5efa488b96ac6d48adf290002c148c23fd455ae99

- championDetail: c122117307356c30c87b0545295941fdebcff17b25da7717d26f37654d670142
- championBin: 65712399ec3c8e58da13a3910bccee61faea128c433e1b64a03bf0cffb3808ee

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Grasping Roots Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Grasping Roots Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Zyra sends vines forward, Rooting for second(s) and dealing magic damage. If this Ability passes near a Seed, the Seed grows into a Vine Lasher that deals magic damage and lasts seconds. Vine Lashers have 400 range, and their Attacks Slow by % for seconds. The Slow from multiple Vine Lashers stacks up to times.

## R - Stranglethorns

Coverage: partial

Description signature: 70a52b05883ad43e034a9d0436de64f2acc21994c7ad5bc7893aaae4066fc303

- championDetail: c122117307356c30c87b0545295941fdebcff17b25da7717d26f37654d670142
- championBin: 65712399ec3c8e58da13a3910bccee61faea128c433e1b64a03bf0cffb3808ee

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Stranglethorns Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Stranglethorns Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Zyra summons the fury of nature, growing a twisted thicket that deals magic damage. After 2 seconds, the vines snap upwards, Knocking Up for second. Zyra's plants within the thicket become enraged, resetting their duration, gaining % Health and Attacking for % bonus damage.
