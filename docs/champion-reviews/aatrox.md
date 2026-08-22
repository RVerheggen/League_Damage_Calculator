# Aatrox combat review

Patch: 16.16

## P - Deathbringer Stance

Coverage: unsupported

Description signature: afff51358e480ca664334c97cac741209ed48233e247ee2b4415f0d85c4585fd

- championDetail: 0a4e9a03fae0b70512e9524475a4e4f724cc88a91651c8217acac510f644a606
- championBin: 259491c9fb08f333d56f4e5eeef2de5838f54e51e2ef788ff4fdc4248c3445e2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Deathbringer Stance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Periodically, Aatrox's next basic attack deals bonus magic damage and heals him, based on the target's max health.

## Q - The Darkin Blade

Coverage: partial

Description signature: 1760cca346f1e5ca6544dbd38d11853625d5395301448248dcbfd6f5ed0e54f0

- championDetail: 0a4e9a03fae0b70512e9524475a4e4f724cc88a91651c8217acac510f644a606
- championBin: 259491c9fb08f333d56f4e5eeef2de5838f54e51e2ef788ff4fdc4248c3445e2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### The Darkin Blade Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### The Darkin Blade Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Aatrox slams his greatsword, dealing physical damage. If they are hit on the edge, they are briefly Knocked Up and they take instead. This Ability can be Recast twice, each one changing shape and dealing 25% more damage than the previous one.

## W - Infernal Chains

Coverage: partial

Description signature: 7c18b84d8e24c6819c8054dc8cd5a81355ef0ba552d5bbec0fd534cdc6036d5f

- championDetail: 0a4e9a03fae0b70512e9524475a4e4f724cc88a91651c8217acac510f644a606
- championBin: 259491c9fb08f333d56f4e5eeef2de5838f54e51e2ef788ff4fdc4248c3445e2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Infernal Chains Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Infernal Chains Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Aatrox fires a chain, Slowing the first enemy hit by % for seconds and dealing physical damage. Champions and large jungle monsters have seconds to leave the impact area or be Pulled back to the center and damaged again for the same amount.

## E - Umbral Dash

Coverage: out-of-scope

Description signature: 5128f5cf7d6cf6c7b523e18b60070e9b2e35e79e1443097b12b6da51959edf97

- championDetail: 0a4e9a03fae0b70512e9524475a4e4f724cc88a91651c8217acac510f644a606
- championBin: 259491c9fb08f333d56f4e5eeef2de5838f54e51e2ef788ff4fdc4248c3445e2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Umbral Dash

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Passive: Aatrox heals for of the damage he deals to Champions. Active: Aatrox dashes. He can use this Ability while winding up his other Abilities.

## R - World Ender

Coverage: unsupported

Description signature: 762e9f8da5181ff7a01747abab35f01fc67559f6b12b401f1765223c9f504230

- championDetail: 0a4e9a03fae0b70512e9524475a4e4f724cc88a91651c8217acac510f644a606
- championBin: 259491c9fb08f333d56f4e5eeef2de5838f54e51e2ef788ff4fdc4248c3445e2

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### World Ender Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Aatrox reveals his true demonic form, Fearing nearby minions for seconds and gaining % Move Speed decaying over seconds. He also gains % Attack Damage and increases self-healing by % for the duration. Champion takedowns extend the duration of this effect by seconds and refresh the Move Speed effect.
