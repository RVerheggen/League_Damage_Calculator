# Sejuani combat review

Patch: 16.16

## P - Fury of the North

Coverage: unsupported

Description signature: b0ef9363f68def144e395d710a577c5defdcdf56d8d443143b843365e0504220

- championDetail: a57ab9ead16ac468646793740de56d8bdaf2ef265e45c9d3cbe0082cd715b9ef
- championBin: 585a987e5824d9c5b44acf674807bc9abe178e930f8a719ef32773d7b9efb617

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Fury of the North Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

After being out of combat, Sejuani gains Frost Armor which grants Armor and Magic Resist and immunity to slows. Frost Armor persists for a short time after Sejuani takes damage. Sejuani can damage a stunned enemy to shatter it, dealing massive magic damage.

## Q - Arctic Assault

Coverage: partial

Description signature: fb5d0456774ca0ab908e249ff41dee775ffa53a1fce6da001f0a413a023d4772

- championDetail: a57ab9ead16ac468646793740de56d8bdaf2ef265e45c9d3cbe0082cd715b9ef
- championBin: 585a987e5824d9c5b44acf674807bc9abe178e930f8a719ef32773d7b9efb617

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Arctic Assault Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Arctic Assault Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Sejuani charges, dealing magic damage to enemies and Knocking them Up for seconds. The charge ends after hitting an enemy champion.

## W - Winter's Wrath

Coverage: partial

Description signature: eb2cfffcb47b5087d2dde53853e37706f9a223ed825f5d99b9442241d0c90d06

- championDetail: a57ab9ead16ac468646793740de56d8bdaf2ef265e45c9d3cbe0082cd715b9ef
- championBin: 585a987e5824d9c5b44acf674807bc9abe178e930f8a719ef32773d7b9efb617

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation FirstHitDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Winter's Wrath Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Winter's Wrath Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Sejuani swings her flail, dealing physical damage and Knocking Back minions and jungle monsters. She then lashes out again, dealing physical damage and briefly Slowing targets. Both swings apply stacks of Permafrost.

## E - Permafrost

Coverage: partial

Description signature: 90833880700aa57da80504f9f376ba32cf6f45defb1b3e31f97fec33aec8b5a8

- championDetail: a57ab9ead16ac468646793740de56d8bdaf2ef265e45c9d3cbe0082cd715b9ef
- championBin: 585a987e5824d9c5b44acf674807bc9abe178e930f8a719ef32773d7b9efb617

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Permafrost Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Permafrost Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Passive: Nearby melee allied champions' Attacks apply a stack to champions and jungle monsters. Active: Sejuani deals magic damage to target enemy with 4 stacks and Stuns them for second.

## R - Glacial Prison

Coverage: partial

Description signature: 6e45d4f79f876a1eb126bb7a4e425ed3fe0a0e0574a4470db89b8cbc6d03a2a0

- championDetail: a57ab9ead16ac468646793740de56d8bdaf2ef265e45c9d3cbe0082cd715b9ef
- championBin: 585a987e5824d9c5b44acf674807bc9abe178e930f8a719ef32773d7b9efb617

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MinorDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Glacial Prison Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Glacial Prison Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Sejuani throws her True Ice bola, Stunning and revealing the first enemy champion hit for second and dealing magic damage. If the bola travels at least 25% of its range, it Stuns and reveals for seconds instead. It then also creates an ice storm that Slows surrounding enemies by % for seconds. All affected enemies take magic damage.
