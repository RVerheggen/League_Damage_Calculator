# Kai'Sa combat review

Patch: 16.16

## P - Second Skin

Coverage: unsupported

Description signature: 83e524d2fff3b9624423739c1e3742ad5a7acfbf4a81b0a4bfb068a59265dd52

- championDetail: 37c079a5b2b2d98a03489c23a358e5ce0b0c5c1d88c7b9380b2db0e291cba340
- championBin: 1d055a28e0bb5beee8ffb8603fd3f477bd42663a3d5afc0280d12766db1c1af5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Basic attacks and allied crowd control build a per-target Plasma threshold. The source is assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Second Skin Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: Basic attacks and allied crowd control build a per-target Plasma threshold. The source is assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Kai'Sa's basic attacks stack Plasma, dealing increasing bonus magic damage. Allies' immobilizing effects help stack Plasma. Additionally, Kai'Sa's item purchases upgrade her basic spells to have more powerful properties.

## Q - Icathian Rain

Coverage: partial

Description signature: aa2523de3542f31e14510d2fc04d38b728d0d96a09ba5a9d221d378bf73efe9a

- championDetail: 37c079a5b2b2d98a03489c23a358e5ce0b0c5c1d88c7b9380b2db0e291cba340
- championBin: 1d055a28e0bb5beee8ffb8603fd3f477bd42663a3d5afc0280d12766db1c1af5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Icathian Rain Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Icathian Rain Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Kai'Sa launches missiles that split among nearby enemies, each dealing physical damage, up to a maximum of . Additional missile hits on champions or monsters deal % damage. Evolved: Kai'Sa instead fires missiles. Current: / Bonus Attack Damage

## W - Void Seeker

Coverage: partial

Description signature: 01f13eb762171154ed17d993f356586cf9a8a3b85fec81f7dd8ae54159d234a4

- championDetail: 37c079a5b2b2d98a03489c23a358e5ce0b0c5c1d88c7b9380b2db0e291cba340
- championBin: 1d055a28e0bb5beee8ffb8603fd3f477bd42663a3d5afc0280d12766db1c1af5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Void Seeker Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Void Seeker Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Kai'Sa fires a void blast that deals magic damage, applies stacks of Plasma, and grants True Sight of the first enemy hit for seconds. Evolved: Kai'Sa instead applies stacks of Plasma and hitting a champion reduces the Cooldown by %. Current: / Ability Power

## E - Supercharge

Coverage: unsupported

Description signature: cc9fed46a2581ce1832fafc983c2bc1b7247c95cd1fa51ea34bfb1ff84ab877c

- championDetail: 37c079a5b2b2d98a03489c23a358e5ce0b0c5c1d88c7b9380b2db0e291cba340
- championBin: 1d055a28e0bb5beee8ffb8603fd3f477bd42663a3d5afc0280d12766db1c1af5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The cast grants timed attack speed and attacks reduce its cooldown. The source is assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Supercharge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The cast grants timed attack speed and attacks reduce its cooldown. The source is assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Kai'Sa supercharges her void energy, gaining Move Speed and becoming Ghosted while charging, then gaining % Attack Speed for seconds. Attacks reduce this Ability's Cooldown by seconds. Evolved: Kai'Sa also becomes Invisible for seconds. Current: %/% Bonus Attack Speed

## R - Killer Instinct

Coverage: unsupported

Description signature: 90cfc67ec5098d6fe6b76868cfcf3617bd8f0a111441bda627ed02b0b3304eb7

- championDetail: 37c079a5b2b2d98a03489c23a358e5ce0b0c5c1d88c7b9380b2db0e291cba340
- championBin: 1d055a28e0bb5beee8ffb8603fd3f477bd42663a3d5afc0280d12766db1c1af5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Killer Instinct Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Kai'Sa warps near an enemy champion affected by Plasma and gains Shield for seconds.
