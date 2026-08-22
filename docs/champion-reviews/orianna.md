# Orianna combat review

Patch: 16.16

## P - Clockwork Windup

Coverage: unsupported

Description signature: 04524022b2ec594dbda058e2dcb5697261de8e00d21a98dd7bdf2a27d438965e

- championDetail: df24e066bb039ceee5073644c97f70f53f1aef035afdce3911fc37e4b62d9082
- championBin: 3877f56036655d14598cf1f7ab9a2306ea04694cefa2c83e3227a46afdd930e1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Clockwork Windup Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Orianna's Attacks deal additional magic damage. This damage increases the more Orianna Attacks the same target.

## Q - Command: Attack

Coverage: partial

Description signature: 685129ccc4a1e19e63cb26b229d940a38f94efc5566a542a8e5e636a85e86a2d

- championDetail: df24e066bb039ceee5073644c97f70f53f1aef035afdce3911fc37e4b62d9082
- championBin: 3877f56036655d14598cf1f7ab9a2306ea04694cefa2c83e3227a46afdd930e1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Command: Attack Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Command: Attack Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Orianna commands her Ball to move to an area, dealing magic damage to surrounding enemies and to enemies it passes through. Deals % less damage to all enemies after the first.

## W - Command: Dissonance

Coverage: partial

Description signature: b2e4fc4f21a481d79ebef7d15d94941153891818358416c82fcf81a91df94cae

- championDetail: df24e066bb039ceee5073644c97f70f53f1aef035afdce3911fc37e4b62d9082
- championBin: 3877f56036655d14598cf1f7ab9a2306ea04694cefa2c83e3227a46afdd930e1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Command: Dissonance Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Command: Dissonance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Orianna commands her Ball to release an electric pulse, dealing magic damage to surrounding enemies. The pulse leaves behind an energy field for seconds, Slowing enemies by % and granting allies % Move Speed, decaying over seconds.

## E - Command: Protect

Coverage: partial

Description signature: 28ec426695994394ff90d6a1fc9c3f5bdbdebba3134812a9f63227fb03988f42

- championDetail: df24e066bb039ceee5073644c97f70f53f1aef035afdce3911fc37e4b62d9082
- championBin: 3877f56036655d14598cf1f7ab9a2306ea04694cefa2c83e3227a46afdd930e1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamageTooltip was preserved. Stateful and alternate effects require an explicit module.

### Command: Protect Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Command: Protect Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Passive: The Ball adds Armor and Magic Resist to the allied champion it is attached to. Active: Orianna commands her Ball to attach to an allied champion, granting them Shield for seconds. Enemies the Ball passes through take magic damage.

## R - Command: Shockwave

Coverage: partial

Description signature: 5731e8d4a23a3311f41e04f363b72875047c1ecf49256487c87d00b5c493c4b6

- championDetail: df24e066bb039ceee5073644c97f70f53f1aef035afdce3911fc37e4b62d9082
- championBin: 3877f56036655d14598cf1f7ab9a2306ea04694cefa2c83e3227a46afdd930e1

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Command: Shockwave Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Command: Shockwave Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Orianna commands her Ball to unleash a shockwave, dealing magic damage to nearby enemies and Knocking them in the direction of the Ball.
