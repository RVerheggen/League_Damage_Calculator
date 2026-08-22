# Kha'Zix combat review

Patch: 16.16

## P - Unseen Threat

Coverage: unsupported

Description signature: c966784ec30b58b1631e3e56bd8f0e46dc2aecf0f000ab74afafc4d3c141a0da

- championDetail: aef2cb6d961933731b3ad24c37a786e2f243884914124496c42be597661ae727
- championBin: 98e8cc28910d20190af6653ff4472d3127eb045ab5105701cd238ed461b52d9e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Unseen Threat Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Nearby enemies that are Isolated from their allies are marked. Kha'Zix's abilities have interactions with Isolated targets. When Kha'Zix is not visible to the enemy team, he gains Unseen Threat, causing his next basic attack against an enemy champion to deal bonus magic damage and slow them for a few seconds.

## Q - Taste Their Fear

Coverage: partial

Description signature: c785eceb39329ad4740a68cec9bdfe4fe48b33d8aab14a5df732ceafd6eca784

- championDetail: aef2cb6d961933731b3ad24c37a786e2f243884914124496c42be597661ae727
- championBin: 98e8cc28910d20190af6653ff4472d3127eb045ab5105701cd238ed461b52d9e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BaseDamage was preserved. Stateful and alternate effects require an explicit module.

### Taste Their Fear Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Taste Their Fear Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Kha'Zix slashes a nearby enemy, dealing physical damage. This deals damage instead to enemies Isolated from their allies.

## W - Void Spike

Coverage: partial

Description signature: 5b4685e7e3dfd258cef55eeb3ed03f100909125a2ae7b4e03bdd7a69426e5921

- championDetail: aef2cb6d961933731b3ad24c37a786e2f243884914124496c42be597661ae727
- championBin: 98e8cc28910d20190af6653ff4472d3127eb045ab5105701cd238ed461b52d9e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation BaseDamage was preserved. Stateful and alternate effects require an explicit module.

### Void Spike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Void Spike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Kha'Zix fires a spike dealing physical damage to the first enemy hit in a small area. If Kha'Zix is inside the area, he restores Health

## E - Leap

Coverage: partial

Description signature: 935eef7a055ff60e19ee351324cfe6ab0fc37e7633de0d60630c14684fd9a90b

- championDetail: aef2cb6d961933731b3ad24c37a786e2f243884914124496c42be597661ae727
- championBin: 98e8cc28910d20190af6653ff4472d3127eb045ab5105701cd238ed461b52d9e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Leap Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Leap Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Kha'Zix leaps, dealing physical damage upon landing.

## R - Void Assault

Coverage: unsupported

Description signature: 39b155125b75c458bec73c96e8345bb9c690217ffe912c3494ecebe399e4416e

- championDetail: aef2cb6d961933731b3ad24c37a786e2f243884914124496c42be597661ae727
- championBin: 98e8cc28910d20190af6653ff4472d3127eb045ab5105701cd238ed461b52d9e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Void Assault Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Active: Kha'Zix becomes Invisible for seconds and gains % Move Speed. Kha'zix may Recast this Ability once within seconds. Passive: Leveling up this Ability allows Kha'zix to Evolve one of his Abilities, granting it additional effects.Taste Their Fear: Gain Ability range, Attack range, and lowers Cooldown by % against Isolated targets.Void Spike: Fires 3 spikes and Slows by %, increased against Isolated targets.Leap: Increased range and refreshes Cooldown on champion takedown.Void Assault: Invisibility duration lasts seconds and gains second Recast.
