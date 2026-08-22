# Jarvan IV combat review

Patch: 16.16

## P - Martial Cadence

Coverage: unsupported

Description signature: d5028cb4a78a4da06b52e2b45d2e5dbbe0354b3f2653c0d35743fd79872dfaac

- championDetail: 3df06abc82856503cf0aa22596b878d77d739ff8258a8d5084e1f60d642679b9
- championBin: e61d9bf726ea8ae6ab32a1df598b5a7b0eee17eff60eafc76323c04d226f6036

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Martial Cadence Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Jarvan's first basic attack on an enemy deals bonus physical damage based on their current Health. This effect cannot occur again on the same enemy for a few seconds.

## Q - Dragon Strike

Coverage: partial

Description signature: acc94f9cee84a56ad0d3ea802e1b163c2e442af62a8ebacfeab7b944308a1e9e

- championDetail: 3df06abc82856503cf0aa22596b878d77d739ff8258a8d5084e1f60d642679b9
- championBin: e61d9bf726ea8ae6ab32a1df598b5a7b0eee17eff60eafc76323c04d226f6036

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Dragon Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Dragon Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Jarvan extends his lance, dealing physical damage and removing % Armor for seconds. If the lance connects with Demacian Standard, Jarvan will pull himself to it, Knocking Up those in his path for 0.75 seconds.

## W - Golden Aegis

Coverage: unsupported

Description signature: 550560ea054ef51ac1cbec98adc4e57b0bca66d343664b194f763af4353ae89d

- championDetail: 3df06abc82856503cf0aa22596b878d77d739ff8258a8d5084e1f60d642679b9
- championBin: e61d9bf726ea8ae6ab32a1df598b5a7b0eee17eff60eafc76323c04d226f6036

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Golden Aegis Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Jarvan summons an aegis, Slowing nearby enemies by % for seconds and granting him a Shield, increased by for each enemy champion hit.

## E - Demacian Standard

Coverage: partial

Description signature: 450dda1fd0808f7ef8007863cadbfd9d97abd076e658c701c5870c73e3495bc1

- championDetail: 3df06abc82856503cf0aa22596b878d77d739ff8258a8d5084e1f60d642679b9
- championBin: e61d9bf726ea8ae6ab32a1df598b5a7b0eee17eff60eafc76323c04d226f6036

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Demacian Standard Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Demacian Standard Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Jarvan gains % Attack Speed. Active: Jarvan throws a standard into the ground, dealing magic damage and granting allies near the standard % Attack Speed for seconds.

## R - Cataclysm

Coverage: partial

Description signature: c87b362f173033ba03661bdb6a93d0b53802f37c770cf036b5aa8aeaf2a1babe

- championDetail: 3df06abc82856503cf0aa22596b878d77d739ff8258a8d5084e1f60d642679b9
- championBin: e61d9bf726ea8ae6ab32a1df598b5a7b0eee17eff60eafc76323c04d226f6036

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation DamageCalc was preserved. Stateful and alternate effects require an explicit module.

### Cataclysm Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Cataclysm Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Jarvan heroically leaps to an enemy Champion, dealing physical damage to them and surrounding enemies and creating an arena of impassable terrain around them for seconds. Jarvan can Recast to collapse the terrain.
