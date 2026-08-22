# Udyr combat review

Patch: 16.16

## P - Bridge Between

Coverage: unsupported

Description signature: 0baa17f177914a2cbf5eb2123cf5e623097798a42612d7ee9065e00e6fe2ed66

- championDetail: 37aa326986acb6dbe25b4fc32c4db42168327d4e5d9f3e8ede2bf33222830521
- championBin: 5d7363ffcfaef12ca4fcc7f05b933affe4fcf761477a5e906a0bc326022ff47c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

### Bridge Between Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-stat-modifier
- Reason: The full patch description is retained and assigned to the timed-stat-modifier family, but a complete reviewed binding has not been compiled yet.

Udyr has four basic Abilities that swap between Stances and can Recast an Ability to renew it with Ultimate benefits. Additionally, after using an Ability, Udyr's next two Attacks gain Attack Speed.

## Q - Wilding Claw

Coverage: partial

Description signature: 0fa34d94efa5b886fc3629dbeb6969ed2f74d924b7eebf3a24ae60d26d362cf5

- championDetail: 37aa326986acb6dbe25b4fc32c4db42168327d4e5d9f3e8ede2bf33222830521
- championBin: 5d7363ffcfaef12ca4fcc7f05b933affe4fcf761477a5e906a0bc326022ff47c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation OnHitDamage was preserved. Stateful and alternate effects require an explicit module.

### Wilding Claw Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Wilding Claw Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Claw Stance: Udyr gains % Attack Speed and his Attacks deal physical damage %i:OnHit% On-Hit for seconds. Additionally, Udyr's next two Attacks in this stance deal a bonus max Health physical damage and gain range. Awaken: Increase bonus Attack Speed to and max Health damage to . Additionally, Udyr's next two Attacks call lightning six times, dealing a total of max Health magic damage to isolated targets (strikes bounce to other nearby targets when possible).

## W - Iron Mantle

Coverage: unsupported

Description signature: 0433cbb220c3bf17ab2c5bffc7af1bbb419f4d71de83942247da7bb55876ef59

- championDetail: 37aa326986acb6dbe25b4fc32c4db42168327d4e5d9f3e8ede2bf33222830521
- championBin: 5d7363ffcfaef12ca4fcc7f05b933affe4fcf761477a5e906a0bc326022ff47c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Iron Mantle Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Mantle Stance: Udyr gains Shield for seconds. Additionally, Udyr's next two Attacks gain % Life Steal and restore Health. Awaken: Gain Shield, restore Health over seconds, and Udyr's next two Attacks instead have % Life Steal and restore Health.

## E - Blazing Stampede

Coverage: unsupported

Description signature: 055560a3d2e2d1f493db8d7518c7413fd01c27823f347a078d57fc5f0efe86f4

- championDetail: 37aa326986acb6dbe25b4fc32c4db42168327d4e5d9f3e8ede2bf33222830521
- championBin: 5d7363ffcfaef12ca4fcc7f05b933affe4fcf761477a5e906a0bc326022ff47c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Blazing Stampede Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Stampede Stance: Udyr gains Move Speed, decaying over seconds. Additionally, Udyr's Attacks dash him to the target and Stun for seconds ( second Cooldown per target). Awaken: Grants immunity to Immobilizing and Disabling effects and an additional Move Speed for seconds.

## R - Wingborne Storm

Coverage: partial

Description signature: 21b96866ea58ae3f9301375dad7fbaa08578f1fb0be2e53ab4dec4943ede7317

- championDetail: 37aa326986acb6dbe25b4fc32c4db42168327d4e5d9f3e8ede2bf33222830521
- championBin: 5d7363ffcfaef12ca4fcc7f05b933affe4fcf761477a5e906a0bc326022ff47c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation StormDamage was preserved. Stateful and alternate effects require an explicit module.

### Wingborne Storm Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Wingborne Storm Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Storm Stance: Udyr surrounds himself in a glacial storm for seconds, dealing magic damage per second to nearby enemies and Slowing them by %. Additionally, Udyr's next two Attacks in this stance deal magic damage to enemies in the storm. Awaken: Unleash the storm, causing it to follow Udyr's last Attacked enemy, deal an additional max Health magic damage over the duration, and Slow by an additional .
