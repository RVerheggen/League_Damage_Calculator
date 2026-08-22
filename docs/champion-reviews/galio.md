# Galio combat review

Patch: 16.16

## P - Colossal Smash

Coverage: unsupported

Description signature: b639c69af1afd51fca0481d3f2b443c4edda004141f2bf563920839da8256de4

- championDetail: 8e85534cfb519370aaf7a0108b7c3e4118cef2d2ca9099c98da8e39aed0dc9ed
- championBin: 0a8ac3fe51819a70e7616c9a87afb3de1df4409c362f19a6705b2259f91f1d07

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Colossal Smash Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Every few seconds, Galio's next basic attack deals bonus magic damage in an area.

## Q - Winds of War

Coverage: partial

Description signature: a1404cf680e284b140561a20fd3adabc7ce520106d588861337e892756378e39

- championDetail: 8e85534cfb519370aaf7a0108b7c3e4118cef2d2ca9099c98da8e39aed0dc9ed
- championBin: 0a8ac3fe51819a70e7616c9a87afb3de1df4409c362f19a6705b2259f91f1d07

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation QMissileDamage was preserved. Stateful and alternate effects require an explicit module.

### Winds of War Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Winds of War Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Galio fires two windblasts that deal magic damage each. When the windblasts meet, they combine into a tornado that deals % max Health magic damage over seconds.

## W - Shield of Durand

Coverage: partial

Description signature: ece2f953c029ea58f6dea54f35fb323c656163e9ffa927c63d8ddee8cc1af412

- championDetail: 8e85534cfb519370aaf7a0108b7c3e4118cef2d2ca9099c98da8e39aed0dc9ed
- championBin: 0a8ac3fe51819a70e7616c9a87afb3de1df4409c362f19a6705b2259f91f1d07

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MinTotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Shield of Durand Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Shield of Durand Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Passive: Galio gains a Magic Shield after not taking damage for seconds. Begin Charging: Galio reduces incoming magic damage by and incoming physical damage by and Slows himself by %. Release: Galio Taunts enemy champions for between to seconds, deals between and magic damage, and refreshes the damage reduction for seconds. Taunt duration, damage, and range increase with charge time.

## E - Justice Punch

Coverage: partial

Description signature: e0aa544c8f306c129ecc8df0914cd8dfcaa2c712b6d8fcec377a1c740338b8a0

- championDetail: 8e85534cfb519370aaf7a0108b7c3e4118cef2d2ca9099c98da8e39aed0dc9ed
- championBin: 0a8ac3fe51819a70e7616c9a87afb3de1df4409c362f19a6705b2259f91f1d07

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Justice Punch Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Justice Punch Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Galio lunges forward with a mighty blow, Knocking Up for seconds and dealing magic damage to the first champion hit. Other enemies in the way take magic damage. Galio's dash stops on hitting terrain.

## R - Hero's Entrance

Coverage: partial

Description signature: de0bfd57f571af12d427bdfd8b4b404ce4e8360e99aa69d6988299382d1edead

- championDetail: 8e85534cfb519370aaf7a0108b7c3e4118cef2d2ca9099c98da8e39aed0dc9ed
- championBin: 0a8ac3fe51819a70e7616c9a87afb3de1df4409c362f19a6705b2259f91f1d07

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Hero's Entrance Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Hero's Entrance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Galio designates an allied champion's position as his landing spot, granting all allied champions in the area Shield of Durand's passive Shield for seconds. Galio then flies to his landing zone. When Galio lands, he Knocks Up for seconds and deals magic damage.
