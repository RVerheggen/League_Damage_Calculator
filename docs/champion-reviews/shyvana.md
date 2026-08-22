# Shyvana combat review

Patch: 16.16

## P - Scalemail

Coverage: out-of-scope

Description signature: 70962b19a80b62ea100283770f018009e5531cda37eacf658ce792a0624b6609

- championDetail: 4190a626fefa9813a3d7d821412ab5572879822e8cba67f4b8a5e13f0a1925d4
- championBin: 1d06c19bda8c130661a3e58b81013bf6c27f9cef5850536744da5a553c440f3b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Scalemail

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Takedowns on enemy champions, large minions, and large monsters grant Shyvana Scalemail stacks, improving her defenses.

## Q - Emberstrike

Coverage: unsupported

Description signature: 9b149b7ea37f7cce8c034a6da559d34310b1fa08d6572819be39ffb4516d66c7

- championDetail: 4190a626fefa9813a3d7d821412ab5572879822e8cba67f4b8a5e13f0a1925d4
- championBin: 1d06c19bda8c130661a3e58b81013bf6c27f9cef5850536744da5a553c440f3b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Human and Dragon forms expose different attack and recast sequences. The source is assigned to the recurring-attack-state family, but a complete reviewed binding has not been compiled yet.

### Emberstrike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: recurring-attack-state
- Reason: Human and Dragon forms expose different attack and recast sequences. The source is assigned to the recurring-attack-state family, but a complete reviewed binding has not been compiled yet.

Passive: Shyvana's Attacks deal max Health magic damage %i:OnHit% On-Hit and reduce this Ability's Cooldown by seconds. Active: Shyvana's next Attack strikes the target and the surrounding area dealing physical damage. This Ability may be Recast after an Attack or short delay within the next seconds. Dragon Form: Shyvana gains an additional Recast, causing her to bite the target of her next Attack dealing true damage.

## W - Inferno Aegis

Coverage: partial

Description signature: a196fe9771256c2ddc8fe3aca668ba107bd4e2f581db5d217c32762138e72543

- championDetail: 4190a626fefa9813a3d7d821412ab5572879822e8cba67f4b8a5e13f0a1925d4
- championBin: 1d06c19bda8c130661a3e58b81013bf6c27f9cef5850536744da5a553c440f3b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Inferno Aegis Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Inferno Aegis Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Shyvana wraps herself in flames for seconds, gaining Shield, increased by per nearby enemy champion and Move Speed, increased to when moving towards enemy champions. When the effect ends, the Shield is broken, or upon Recast the area around her detonates, dealing magic damage. Dragon Form: If the detonation hits an enemy champion Shyvana heals for + Missing Health.

## E - Molten Burst

Coverage: partial

Description signature: 15bfb9b89503c92ec1247313b34ce568fd2094e280c66e584577af7e1f7e7a61

- championDetail: 4190a626fefa9813a3d7d821412ab5572879822e8cba67f4b8a5e13f0a1925d4
- championBin: 1d06c19bda8c130661a3e58b81013bf6c27f9cef5850536744da5a553c440f3b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Molten Burst Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Molten Burst Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Shyvana launches a fireball at the target location dealing + Max health magic damage and Slowing by for seconds. It explodes upon striking an enemy or reaching its terminus. Dragon Form: Shyvana's fireball is larger and pierces through enemies. Upon striking a champion, large monster, or reaching its terminus it triggers a pulse of fire that deals + Max Health magic damage and Slows by for seconds. The fireball leaves behind a trail for seconds that deals magic damage per second.

## R - Dragon's Descent

Coverage: partial

Description signature: ee307d991ee1bcb376d715cd5d6bb5de67c3cbea7d1b458d3bce8d6212fa733d

- championDetail: 4190a626fefa9813a3d7d821412ab5572879822e8cba67f4b8a5e13f0a1925d4
- championBin: 1d06c19bda8c130661a3e58b81013bf6c27f9cef5850536744da5a553c440f3b

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Dragon's Descent Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Dragon's Descent Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Passive: Shyvana generates Dragon Fury by striking enemies with Attacks and Abilities, increased by while in Dragon Form, and reduced by when striking in an area against non-champions. Active: Shyvana transforms into her Dragon Form, becoming Unstoppable, and flying to the target location breathing fire on enemies below dealing magic damage and causing them Flee for seconds. While transformed, Shyvana's basic Abilities are upgraded, she gains bonus Health, size, and Attack Range. Shyvana loses Dragon Fury over time and her transformation ends when she has no Dragon Fury remaining.
