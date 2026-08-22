# Ezreal combat review

Patch: 16.16

## P - Rising Spell Force

Coverage: unsupported

Description signature: d36bcc280aa6f20a4134a7e953eaa5ec5378f8ac2819b20009e8ae24a601e272

- championDetail: e9ef6f8ef3f193db016d29a17723a93dce31058858aee4d47384985ba4ed1911
- championBin: 8b0056e18fe0be6b41d63261a4bb1cc7021a8015743a5d88d034896fed5dd3b5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Rising Spell Force Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Ezreal gains increasing Attack Speed each time he successfully hits a spell, stacking up to 5 times.

## Q - Mystic Shot

Coverage: partial

Description signature: e7d4a9938bd8cbcc428fbc297fb11a1914c3b7826dd539f67ce230f53a809b21

- championDetail: e9ef6f8ef3f193db016d29a17723a93dce31058858aee4d47384985ba4ed1911
- championBin: 8b0056e18fe0be6b41d63261a4bb1cc7021a8015743a5d88d034896fed5dd3b5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Mystic Shot Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Mystic Shot Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Ezreal fires a bolt of energy, dealing physical damage to the first enemy hit and reducing his Ability Cooldowns by seconds.

## W - Essence Flux

Coverage: partial

Description signature: c2b5fc02c4a1754539a25dd4908bb4e1aba441e0e14ff46b9530afeaea0fcc7f

- championDetail: e9ef6f8ef3f193db016d29a17723a93dce31058858aee4d47384985ba4ed1911
- championBin: 8b0056e18fe0be6b41d63261a4bb1cc7021a8015743a5d88d034896fed5dd3b5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Essence Flux Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Essence Flux Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Ezreal fires a magical orb that sticks to the first champion, structure, or epic jungle monster hit for seconds. If Ezreal hits that target with an Attack or Ability, it detonates, dealing magic damage. Detonating with an Ability refunds the Mana cost of that Ability plus Mana.

## E - Arcane Shift

Coverage: partial

Description signature: 1855a42f0368406ba3206a9f9c0ee85db44ca6ba6fe3ac70ec9e147cae5d0d44

- championDetail: e9ef6f8ef3f193db016d29a17723a93dce31058858aee4d47384985ba4ed1911
- championBin: 8b0056e18fe0be6b41d63261a4bb1cc7021a8015743a5d88d034896fed5dd3b5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Arcane Shift Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Arcane Shift Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Ezreal teleports then fires a bolt at the nearest enemy, dealing magic damage. The bolt prioritizes enemies affected by Essence Flux.

## R - Trueshot Barrage

Coverage: partial

Description signature: d25caa498f98a867115b0db2b60f0e5b2b5a4f6d8b213b9febf8802be993a82d

- championDetail: e9ef6f8ef3f193db016d29a17723a93dce31058858aee4d47384985ba4ed1911
- championBin: 8b0056e18fe0be6b41d63261a4bb1cc7021a8015743a5d88d034896fed5dd3b5

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Trueshot Barrage Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Trueshot Barrage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Ezreal fires a massive energy arc that deals magic damage. Damage to minions and non-epic jungle monsters is reduced to magic damage.
