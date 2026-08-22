# Diana combat review

Patch: 16.16

## P - Moonsilver Blade

Coverage: modeled

Description signature: 2a361c6c76b45d051d5b9757b0d2874d695bbca8515b73e1ace4e30cc7eeaf30

- championDetail: 67a4cbb80efceefdd9775b1ce550e200b0afc7bf52f6f303dd23bbf48d6988c5
- championBin: 74f15fcb4e4cf335abffe8174c2dbd4b21239eb16699c13f76b6ec71a9283bd7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Moonsilver Blade uses generic timed attack stacks, threshold damage, and after-cast attack-speed state.

### Moonsilver Blade Cleave

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: stacking-proc
- Reason: Compiled by the generic stacking-proc template.

Every third successful basic attack consumes the five-second counter and adds level-scaled magic damage.

Formula bindings: DianaPassive.CleaveDamage

### Moonsilver Blade Attack Speed

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: timed-stat-modifier
- Reason: Compiled as permanent and timed additive attack-speed modifiers.

Diana has level-scaled bonus attack speed. Casting an ability triples it for five seconds.

Formula bindings: DianaPassive.BonusAS, DianaPassive.EmpoweredAS

### Monster Multiplier

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The supported target is a champion.

The cleave deals increased damage to monsters.

## Q - Crescent Strike

Coverage: partial

Description signature: ec47b8a607c937df634b9fc5a553c0579779f8d7a3250e20af14ae87b5474d8c

- championDetail: 67a4cbb80efceefdd9775b1ce550e200b0afc7bf52f6f303dd23bbf48d6988c5
- championBin: 74f15fcb4e4cf335abffe8174c2dbd4b21239eb16699c13f76b6ec71a9283bd7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Crescent Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Crescent Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Diana unleashes an arc of lunar energy, dealing magic damage and marking with Moonlight for seconds. Moonlight reveals enemies that are not stealthed.

## W - Pale Cascade

Coverage: partial

Description signature: 3d0ff9545bbf4b8e6ecdd466ea7d1872b10bff5780ab66fd922bf313aebee6b4

- championDetail: 67a4cbb80efceefdd9775b1ce550e200b0afc7bf52f6f303dd23bbf48d6988c5
- championBin: 74f15fcb4e4cf335abffe8174c2dbd4b21239eb16699c13f76b6ec71a9283bd7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Pale Cascade Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Pale Cascade Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Diana creates three orbiting spheres for seconds that explode on contact, each dealing magic damage, up to a max of damage. Diana also gains Shield for the same duration. When the last sphere detonates, she gains an additional Shield and refreshes the duration.

## E - Lunar Rush

Coverage: partial

Description signature: 8f168c95d5bf8b57139dfb0b1e43729c63e7e97c0b5b218f24cc4aeba35604bb

- championDetail: 67a4cbb80efceefdd9775b1ce550e200b0afc7bf52f6f303dd23bbf48d6988c5
- championBin: 74f15fcb4e4cf335abffe8174c2dbd4b21239eb16699c13f76b6ec71a9283bd7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Lunar Rush Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Lunar Rush Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Diana becomes as the vengeful moon, dashing to an enemy and dealing magic damage. If the target is afflicted with Moonlight, this Ability's Cooldown is refreshed.

## R - Moonfall

Coverage: partial

Description signature: b25c2d2935bb58e34955d1b366d1f0e9fc0cebef43d8ca96d71f50ea6f63a740

- championDetail: 67a4cbb80efceefdd9775b1ce550e200b0afc7bf52f6f303dd23bbf48d6988c5
- championBin: 74f15fcb4e4cf335abffe8174c2dbd4b21239eb16699c13f76b6ec71a9283bd7

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation RExplosionDamage was preserved. Stateful and alternate effects require an explicit module.

### Moonfall Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Moonfall Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Diana Pulls In, Slows by %, and reveals nearby enemies for seconds. If Diana hits at least one enemy champion, she calls to the moon, dealing magic damage plus for each champion pulled beyond the first, up to a max of an additional damage.
