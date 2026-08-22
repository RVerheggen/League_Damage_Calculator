# Briar combat review

Patch: 16.16

## P - Crimson Curse

Coverage: unsupported

Description signature: ce7d39aa68602f5cb37d170367b8abb419e513881d3e53fa9f7db4fd7c10e63e

- championDetail: 7cf47b100d6648037274e40af3fc4e4a517d842dc0a9650a60bbced346bf2e4f
- championBin: 016f8fcf998a6c456625579d30f867598e40109b5cd814b5d0449a5c6695d0a4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Crimson Curse Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Briar's attacks and abilities apply a stacking bleed that heals her for a portion of the damage it deals. Perpetually hungry, she gains increased healing based on her missing Health, but lacks innate Health Regeneration.

## Q - Head Rush

Coverage: partial

Description signature: ec46e993c817b516a85dab88ac16bc125c9b6b8532ace490a59377a1bfddcada

- championDetail: 7cf47b100d6648037274e40af3fc4e4a517d842dc0a9650a60bbced346bf2e4f
- championBin: 016f8fcf998a6c456625579d30f867598e40109b5cd814b5d0449a5c6695d0a4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Head Rush Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Head Rush Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Briar leaps to a target, Stunning it for seconds, dealing physical damage and reducing % Armor and Magic Resist for seconds. Briar will stop prioritizing champions if she casts this Ability on a minion or monster during Blood Frenzy.

## W - Blood Frenzy / Snack Attack

Coverage: partial

Description signature: 3ff20dd1c59690c72ebf62a476e8f5088c07a2b855b3bd83ef1bb65a6ff3c1e4

- championDetail: 7cf47b100d6648037274e40af3fc4e4a517d842dc0a9650a60bbced346bf2e4f
- championBin: 016f8fcf998a6c456625579d30f867598e40109b5cd814b5d0449a5c6695d0a4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalAoEDamage was preserved. Stateful and alternate effects require an explicit module.

### Blood Frenzy / Snack Attack Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Blood Frenzy / Snack Attack Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Briar leaps and enters a Blood Frenzy, self-taunting to the nearest enemy for seconds, prioritizing Champions. While in Blood Frenzy she gains % Attack Speed and % Move Speed, and her Attacks deal physical damage to enemies surrounding her target. Briar can Recast this Ability to empower her next Attack. It deals + % missing Health physical damage and heals Briar for + % of the damage dealt.

## E - Chilling Scream

Coverage: partial

Description signature: d2e22166e14328fc48b76237eba62e18b0f41f433e42bc7076561b4c1260e03d

- championDetail: 7cf47b100d6648037274e40af3fc4e4a517d842dc0a9650a60bbced346bf2e4f
- championBin: 016f8fcf998a6c456625579d30f867598e40109b5cd814b5d0449a5c6695d0a4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Chilling Scream Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Chilling Scream Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Begin Charging: Briar removes Blood Frenzy and gathers energy, gaining % damage reduction and restoring Health over 1 second. Release: Briar unleashes a scream that deals up to magic damage based on time charged, and Slows by % for seconds. When fully charged, the scream Knocks Back enemies, dealing magic damage to those who hit a wall and Stunning them for seconds.

## R - Certain Death

Coverage: partial

Description signature: 81aff8d25ae8698e882b861590030a600d429350e45f701f6386147075aab94c

- championDetail: 7cf47b100d6648037274e40af3fc4e4a517d842dc0a9650a60bbced346bf2e4f
- championBin: 016f8fcf998a6c456625579d30f867598e40109b5cd814b5d0449a5c6695d0a4

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Damage was preserved. Stateful and alternate effects require an explicit module.

### Certain Death Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Certain Death Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: stacking-proc
- Reason: The full patch description is retained and assigned to the stacking-proc family, but a complete reviewed binding has not been compiled yet.

Briar kicks her pillory's hemolith gemstone and flies to the location of the first champion it hits, marking them as her prey. On landing, she deals magic damage to everything nearby and causes enemies who are not her prey to Flee for seconds. She then enters an empowered Blood Frenzy and will pursue her prey until death. During this time, she gains Armor and Magic Resist, % Lifesteal, and an additional % Move Speed.
