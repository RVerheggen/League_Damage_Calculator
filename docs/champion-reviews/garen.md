# Garen combat review

Patch: 16.16

## P - Perseverance

Coverage: unsupported

Description signature: b65352c4cf6a0037a8fe35ac00a6c94b8ae76d702f52c8603ce8913fed19f227

- championDetail: f28f5c9a12310f888404015f21e6615b8ecf688d41ff248b7a0e6166b36b4110
- championBin: e90de14339ee0d31017cd0134f4f1f13d8dd01b7427412f0e080d50ff4a9cf18

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Perseverance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

If Garen has not recently been struck by damage or enemy abilities, he regenerates a percentage of his total health each second.

## Q - Decisive Strike

Coverage: modeled

Description signature: 9c2088bcd3c4d0667d9345454cfd8853b7ddcaaad572c365eec7340ff62d359d

- championDetail: f28f5c9a12310f888404015f21e6615b8ecf688d41ff248b7a0e6166b36b4110
- championBin: e90de14339ee0d31017cd0134f4f1f13d8dd01b7427412f0e080d50ff4a9cf18

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Decisive Strike is compiled as a timed single-use empowered attack.

### Decisive Strike

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: arm-next-hit
- Reason: Compiled by the reusable arm-next-hit template.

Arms the next qualifying hit for 4.5 seconds.

## W - Courage

Coverage: unsupported

Description signature: dd8320f4cf093418b2d8ef5fbf015f258ac0f46d5a0fdee4ee302922d53e61d2

- championDetail: f28f5c9a12310f888404015f21e6615b8ecf688d41ff248b7a0e6166b36b4110
- championBin: e90de14339ee0d31017cd0134f4f1f13d8dd01b7427412f0e080d50ff4a9cf18

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Courage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Passive: Garen has bonus Armor and bonus Magic Resist. Killing units permanently grants resists, up to a max of . Active: Garen steels his courage for seconds, reducing incoming damage by %. He also gains Shield and % Tenacity for seconds.

## E - Judgment

Coverage: partial

Description signature: e7dd87a4eeb373c7e80cab93c49442af2960a588448e7ba3c451521cc6e1561d

- championDetail: f28f5c9a12310f888404015f21e6615b8ecf688d41ff248b7a0e6166b36b4110
- championBin: e90de14339ee0d31017cd0134f4f1f13d8dd01b7427412f0e080d50ff4a9cf18

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Judgment Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Judgment Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Garen rapidly spins his sword for seconds, dealing physical damage times over the duration. The nearest enemy takes % increased damage. Champions hit by strikes lose % Armor for seconds. Recast: Garen ends this Ability early.

## R - Demacian Justice

Coverage: modeled

Description signature: c3f6d646ff8739c4338d5c09a6e1a65bf0f3836d17cce5cb1c747dc65bc228c0

- championDetail: f28f5c9a12310f888404015f21e6615b8ecf688d41ff248b7a0e6166b36b4110
- championBin: e90de14339ee0d31017cd0134f4f1f13d8dd01b7427412f0e080d50ff4a9cf18

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Garen Demacian Justice is executed by a reviewed custom handler that returns generic damage operations.

### Garen Demacian Justice

- Relevance: attacker
- Disposition: custom
- Coverage: modeled
- Template or handler: champion:86:R
- Reason: A dedicated reviewed handler is retained because the current template vocabulary cannot express the action semantics without distortion.

The true-damage formula depends on target missing health.
