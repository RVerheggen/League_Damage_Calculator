# Urgot combat review

Patch: 16.16

## P - Echoing Flames

Coverage: unsupported

Description signature: ae92b4dd9fb9c093d7a0858a64f2791c3f3340c0588728858af7fa591b411bae

- championDetail: 347b96f5a3019017d3e0fe38894800cb8bb7d2ab35f656b4ab8f3c028fd9d0e7
- championBin: 7550c5aaa19beb1afaf086ef2f122ca9152ca5d3ee5629ad5b6781da46f13d46

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Echoing Flames Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Urgot's basic attacks and Purge periodically trigger blasts of flame from his legs, dealing physical damage.

## Q - Corrosive Charge

Coverage: partial

Description signature: d830120b1150415994a66e9daf63ea87afb62b26b0fad67be435895df7fa751d

- championDetail: 347b96f5a3019017d3e0fe38894800cb8bb7d2ab35f656b4ab8f3c028fd9d0e7
- championBin: 7550c5aaa19beb1afaf086ef2f122ca9152ca5d3ee5629ad5b6781da46f13d46

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Corrosive Charge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Corrosive Charge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Urgot fires an explosive charge, dealing physical damage and Slowing by % for seconds.

## W - Purge

Coverage: partial

Description signature: 14152c4f38d9179d2826577ac235228ef6a8a134c18a9ab5170b2927f092bfee

- championDetail: 347b96f5a3019017d3e0fe38894800cb8bb7d2ab35f656b4ab8f3c028fd9d0e7
- championBin: 7550c5aaa19beb1afaf086ef2f122ca9152ca5d3ee5629ad5b6781da46f13d46

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamagePerShot was preserved. Stateful and alternate effects require an explicit module.

### Purge Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Purge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Passive: Urgot's other Abilities mark the last champion hit for 5 seconds. Active: Urgot begins firing his chain gun at the closest enemy, prioritizing marked enemies. He Attacks them times a second dealing physical damage per shot. Urgot can move while firing and has % Slow resistance, but loses Move Speed. At max rank, this Ability lasts indefinitely and can be Toggled on and off.

## E - Disdain

Coverage: partial

Description signature: 238fa7910e69fec245db037c8f6be80d62f9de43657b5511152669d002faadb6

- championDetail: 347b96f5a3019017d3e0fe38894800cb8bb7d2ab35f656b4ab8f3c028fd9d0e7
- championBin: 7550c5aaa19beb1afaf086ef2f122ca9152ca5d3ee5629ad5b6781da46f13d46

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation EDamage was preserved. Stateful and alternate effects require an explicit module.

### Disdain Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Disdain Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Urgot charges forward, gaining Shield for seconds. The first champion hit is Stunned for seconds and thrown behind Urgot. All enemies Urgot collides with take physical damage.

## R - Fear Beyond Death

Coverage: partial

Description signature: ee483a1667b72bae091205b87329484eaed19fd7067eaaa5a48ed97adb94e7ea

- championDetail: 347b96f5a3019017d3e0fe38894800cb8bb7d2ab35f656b4ab8f3c028fd9d0e7
- championBin: 7550c5aaa19beb1afaf086ef2f122ca9152ca5d3ee5629ad5b6781da46f13d46

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RCalculatedDamage was preserved. Stateful and alternate effects require an explicit module.

### Fear Beyond Death Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Fear Beyond Death Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Urgot fires a chem-drill, impaling the first champion hit, dealing physical damage and Slowing for seconds by 1% per 1% missing Health, up to %. If the impaled victim falls below % Health, Urgot can Recast this Ability, Suppressing the victim and dragging them to himself. On reaching Urgot, they are killed and nearby enemies are Feared for seconds.
