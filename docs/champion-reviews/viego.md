# Viego combat review

Patch: 16.16

## P - Sovereign's Domination

Coverage: out-of-scope

Description signature: f5368e03838258bfa2227767d734aa90db8a7600f59096cb07756e8f98ca11ee

- championDetail: f5f511c25a7abc4756c6c58391af481fbd30ae6be6900d6ded1fa8421038f770
- championBin: 05f6ac606f4f8e154b06c7c84a1b9fa4d15194e4f4d362e12a8d8aca85d466a1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Sovereign's Domination

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Enemies who fall before Viego become wraiths. By attacking a wraith, Viego temporarily seizes control of the dead enemy's body, healing for a percentage of his target's max health and gaining access to their basic abilities and items. He replaces their Ultimate with a free cast of his own.

## Q - Blade of the Ruined King

Coverage: partial

Description signature: 355e100cf3a5d316881ac743d664a2a4f370ada2e91c6fd539020a0240a5c969

- championDetail: f5f511c25a7abc4756c6c58391af481fbd30ae6be6900d6ded1fa8421038f770
- championBin: 05f6ac606f4f8e154b06c7c84a1b9fa4d15194e4f4d362e12a8d8aca85d466a1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Blade of the Ruined King Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Blade of the Ruined King Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Passive: Viego's Attacks deal an additional current Health physical damage. His first Attack against an enemy he has recently damaged with an Ability hits a second time, dealing physical damage and restoring % of damage dealt as Health. These bonuses are kept during Possession. Active: Viego stabs forward, dealing physical damage.

## W - Spectral Maw

Coverage: partial

Description signature: 4903e855311afe18ffb6f32c42b5b4a6fa21601d8bc87e02a1a4458b0efb6b6d

- championDetail: f5f511c25a7abc4756c6c58391af481fbd30ae6be6900d6ded1fa8421038f770
- championBin: 05f6ac606f4f8e154b06c7c84a1b9fa4d15194e4f4d362e12a8d8aca85d466a1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Spectral Maw Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Spectral Maw Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Begin Charging: Viego begins gathering Mist, Slowing himself by %. Release: Viego dashes forward and hurls the gathered Mist. Deals magic damage and Stuns the first enemy hit for to seconds based on charge time.

## E - Harrowed Path

Coverage: out-of-scope

Description signature: 049ce0a734f35395044b05bff0f11a2e58be4b980b857302a70b5a0023355cba

- championDetail: f5f511c25a7abc4756c6c58391af481fbd30ae6be6900d6ded1fa8421038f770
- championBin: 05f6ac606f4f8e154b06c7c84a1b9fa4d15194e4f4d362e12a8d8aca85d466a1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Harrowed Path

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Viego sends forth a spectre to haunt the first terrain hit, surrounding it with Mist for seconds. Viego gains Camouflage, Move Speed, and % Attack Speed while inside the Mist.

## R - Heartbreaker

Coverage: partial

Description signature: 56f801fabaf9634d70a98fba6f718d29552a215fe9351dba9b2d4b2e1426f5ed

- championDetail: f5f511c25a7abc4756c6c58391af481fbd30ae6be6900d6ded1fa8421038f770
- championBin: 05f6ac606f4f8e154b06c7c84a1b9fa4d15194e4f4d362e12a8d8aca85d466a1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Heartbreaker Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Heartbreaker Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Viego discards any souls he is currently Possessing and teleports. On arrival he Attacks the champion with the lowest percent Health, briefly Slowing them by % and dealing + % missing Health physical damage. Other nearby enemies are Knocked Back and take physical damage.
