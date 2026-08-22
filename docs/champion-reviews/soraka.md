# Soraka combat review

Patch: 16.16

## P - Salvation

Coverage: out-of-scope

Description signature: 538f40f2122cdcf8d36b3c489abef76c198d25ca6b6ad1775c238e175c42a660

- championDetail: de9c31a33f3f75aa1e02d378140d57e1b724f8d50bcdd95d4ab28b26899a36d9
- championBin: b2e146766625801b46e1d0d332ad007bad031793bff7fea658d239d30317a815

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Salvation

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Soraka runs faster towards nearby low health allies.

## Q - Starcall

Coverage: partial

Description signature: 493958760ec391a604f4a05f6db9e501cb1978a5eca1b06cd3550fc554403ce3

- championDetail: de9c31a33f3f75aa1e02d378140d57e1b724f8d50bcdd95d4ab28b26899a36d9
- championBin: b2e146766625801b46e1d0d332ad007bad031793bff7fea658d239d30317a815

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Starcall Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Starcall Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Soraka calls down a star, dealing magic damage and Slowing by % for seconds. Hitting an enemy champion grants Soraka Rejuvenation, which restores Health over seconds and grants % Move Speed decaying over the same duration.

## W - Astral Infusion

Coverage: out-of-scope

Description signature: eba99cfe0b28ca5f713e680d117aae4dfa988f5a218386fb8449880fe67f027e

- championDetail: de9c31a33f3f75aa1e02d378140d57e1b724f8d50bcdd95d4ab28b26899a36d9
- championBin: b2e146766625801b46e1d0d332ad007bad031793bff7fea658d239d30317a815

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Astral Infusion

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Soraka restores Health to another allied champion. If Soraka is affected by Rejuvenation, the Health cost will be reduced by %, and the target will gain Rejuvenation for seconds.

## E - Equinox

Coverage: partial

Description signature: 0932d572c1e7743f4730bab72542a7236ad13200e280ddd8ed3200fe3e195d4c

- championDetail: de9c31a33f3f75aa1e02d378140d57e1b724f8d50bcdd95d4ab28b26899a36d9
- championBin: b2e146766625801b46e1d0d332ad007bad031793bff7fea658d239d30317a815

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Equinox Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Equinox Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Soraka creates a starfield that deals magic damage to champions. The field lingers for seconds, Silencing enemies inside. When the zone disappears, champions inside the zone are Rooted for second(s) and take magic damage.

## R - Wish

Coverage: out-of-scope

Description signature: 5d299793d0a143b69cb39b537d47e5fb52e9a38b06be6f2072dc5a7e094bc6cf

- championDetail: de9c31a33f3f75aa1e02d378140d57e1b724f8d50bcdd95d4ab28b26899a36d9
- championBin: b2e146766625801b46e1d0d332ad007bad031793bff7fea658d239d30317a815

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Wish

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Soraka calls upon divine powers, restoring Health to all allied champions, regardless of distance. Healing is increased to on targets below 40% Health.
