# K'Sante combat review

Patch: 16.16

## P - Dauntless Instinct

Coverage: unsupported

Description signature: 353c658ddc82af41185408d6a23a471b46611d028df5bd0eee04b125c421decf

- championDetail: 7032c1404900737143005041f91ed3fe6e00f48a69146c52723e0bd349f3cf5c
- championBin: bca67c5a431463c27cce67600c61c9145f67a5abe8a01e9b6e0e67295d668197

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

### Dauntless Instinct Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

K'Sante's Abilities mark targets to take more damage on his next Attack. When All Out, K'Sante deals more damage with all Attacks and Abilities.

## Q - Ntofo Strikes

Coverage: partial

Description signature: 4223fbf71d1794a8d7bb93a44b438ad74a95fc2cad3e8cbf08ff1d5750d0713d

- championDetail: 7032c1404900737143005041f91ed3fe6e00f48a69146c52723e0bd349f3cf5c
- championBin: bca67c5a431463c27cce67600c61c9145f67a5abe8a01e9b6e0e67295d668197

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Ntofo Strikes Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Ntofo Strikes Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

K'Sante slams his weapon, dealing physical damage and Slowing enemies by % for s. If he hits, he gains a stack of Ntofo Strikes for seconds. At 2 stacks, he instead fires a shockwave that Stuns and Pulls enemies for second. All Out: Cooldown is reduced by %.

## W - Path Maker

Coverage: partial

Description signature: 604b65fa1d6e38bc70c76de63f29857e9febe035d5f888e4a153f547c7e3908b

- championDetail: 7032c1404900737143005041f91ed3fe6e00f48a69146c52723e0bd349f3cf5c
- championBin: bca67c5a431463c27cce67600c61c9145f67a5abe8a01e9b6e0e67295d668197

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Path Maker Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Path Maker Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

K'Sante raises his weapons defensively for -s, becoming Unstoppable and reducing incoming damage by %. Then, he rams forward, dealing + max Health physical damage. Enemies hit are Knocked Back and Stunned for -s (based on charge time). All Out: Cooldown is refreshed. Deals an additional -% damage as true damage (based on charge time), damage reduction is increased to % and dash speed is increased, but no longer Knocks Back or Stuns.

## E - Footwork

Coverage: unsupported

Description signature: 6dd048439905c082a56690b2fcf124b1ccdbcb076c63f3857dbdb26d9702d285

- championDetail: 7032c1404900737143005041f91ed3fe6e00f48a69146c52723e0bd349f3cf5c
- championBin: bca67c5a431463c27cce67600c61c9145f67a5abe8a01e9b6e0e67295d668197

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Footwork Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

K'Sante dashes, gaining Shield for seconds. If dashing to an ally, the distance of the dash is significantly increased and the ally is also Shielded. All Out: Cooldown is decreased by % and dash speed is increased.

## R - All Out

Coverage: partial

Description signature: 2c7d8a33d8962fee77b6438ac9a1e7903bfbfb1e3b48f1819fd584e94e6e4ecd

- championDetail: 7032c1404900737143005041f91ed3fe6e00f48a69146c52723e0bd349f3cf5c
- championBin: bca67c5a431463c27cce67600c61c9145f67a5abe8a01e9b6e0e67295d668197

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### All Out Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### All Out Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

K'Sante shatters his ntofos to Knock Back an enemy champion, dealing physical damage, then dashes behind them and goes All Out for s. If the enemy would hit a wall, they are Knocked Back through the wall and K'Sante strikes them again for physical damage. While All Out, K'Sante's Abilities are upgraded and he gains % Attack Speed, % Bonus Armor Penetration, and % Omnivamp, but loses % max Health, % Bonus Armor, and % Bonus Magic Resistance.
