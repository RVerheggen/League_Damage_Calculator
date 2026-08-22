# Swain combat review

Patch: 16.16

## P - Ravenous Flock

Coverage: out-of-scope

Description signature: 268e39584de4be90030e1a9fd80067496538f312c7e34be189422e2aaa375d8c

- championDetail: b1da971cf22665cc7a38f2b33f6e802e5d0a5be3680acc731c880fc33386c685
- championBin: e8eef92c8c4723cb44a31a239d419a523af3e2e0ea384998f24f829317759060

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Ravenous Flock

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Swain's ravens collect Soul Fragments that heal him and permanently increase his maximum health.

## Q - Death's Hand

Coverage: partial

Description signature: e42ff5bfc850db7d8b8d74a38526638e21915ea54b056c240e801ae43a0e08ad

- championDetail: b1da971cf22665cc7a38f2b33f6e802e5d0a5be3680acc731c880fc33386c685
- championBin: e8eef92c8c4723cb44a31a239d419a523af3e2e0ea384998f24f829317759060

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Death's Hand Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Death's Hand Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Swain unleashes 5 eldritch bolts, dealing magic damage plus magic damage per bolt past the first (max magic damage).

## W - Vision of Empire

Coverage: partial

Description signature: 30dc52cbc1f06481c89e33b67b34c759646b38fdec96fa88e4d493142382c920

- championDetail: b1da971cf22665cc7a38f2b33f6e802e5d0a5be3680acc731c880fc33386c685
- championBin: e8eef92c8c4723cb44a31a239d419a523af3e2e0ea384998f24f829317759060

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Vision of Empire Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Vision of Empire Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Swain opens a demon eye, revealing a location for 1.5 seconds, then deals magic damage and Slows by % for seconds. Champions hit grant Swain a Soul Fragment and are revealed for seconds.

## E - Nevermove

Coverage: partial

Description signature: b501392d982b6dfc780f58b3c30b23e678461210193a6d2bf12f800907c82848

- championDetail: b1da971cf22665cc7a38f2b33f6e802e5d0a5be3680acc731c880fc33386c685
- championBin: e8eef92c8c4723cb44a31a239d419a523af3e2e0ea384998f24f829317759060

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Nevermove Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Nevermove Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Swain launches a wave of demonic power that returns, detonating on the first enemy hit to deal magic damage and Root enemies in the area for seconds. Rooting a champion allows Swain to reactivate this ability to pull all champions Rooted by Nevermove toward him, gaining a Soul Fragment for each.

## R - Demonic Ascension

Coverage: partial

Description signature: b63972eb4bfeed0b5c090528e4274470795c2700d42cafdaaeeaba20c6bb0324

- championDetail: b1da971cf22665cc7a38f2b33f6e802e5d0a5be3680acc731c880fc33386c685
- championBin: e8eef92c8c4723cb44a31a239d419a523af3e2e0ea384998f24f829317759060

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Demonic Ascension Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Demonic Ascension Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Swain frees the demon, which deals magic damage and drains Health per second from nearby enemies. His Demonic Energy depletes over time but can be recharged indefinitely by draining enemy Champions and is fully restored on Champion takedowns. After seconds and every seconds thereafter, Swain can cast Demonflare while transformed, which deals magic damage and Slows enemies by %, decaying over s.
