# Ambessa combat review

Patch: 16.16

## P - Drakehound's Step

Coverage: unsupported

Description signature: a85aafdb41616195c0a929fa7d8f5fc492fe5a072cc91a1f4a83fbe5bffbc105

- championDetail: b46537678d49c162a5e397963f0907ab999145a8ad9ca7e0068439f16adb849a
- championBin: 0b16994e9a44741c16371c3cd135e5acf7c62c3427ce79bfdfefc3e257038524

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Drakehound's Step Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Entering an attack or movement command while casting an ability will cause Ambessa to dash a short distance once the ability is cast, granting her next attack bonus range, damage, and attack speed, and refunding energy.

## Q - Cunning Sweep / Sundering Slam

Coverage: partial

Description signature: 50354315a9ae155c9e8b676c8cd35b40e0b8cd55924bc4536b89a4c08b9f5522

- championDetail: b46537678d49c162a5e397963f0907ab999145a8ad9ca7e0068439f16adb849a
- championBin: 0b16994e9a44741c16371c3cd135e5acf7c62c3427ce79bfdfefc3e257038524

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Calc_Damage_1_Max was preserved. Stateful and alternate effects require an explicit module.

### Cunning Sweep / Sundering Slam Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Cunning Sweep / Sundering Slam Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Cunning Sweep: Ambessa sweeps her blades forward, dealing + max Health physical damage to enemies at the edge of the strike. All other enemies take damage. Striking an enemy readies a Sundering Slam. Sundering Slam: Ambessa slams her blades down, dealing + max Health physical damage against the first enemy hit. All other enemies take damage.

## W - Repudiation

Coverage: partial

Description signature: 566fdae5de846cf11645b30d9eb01c1972945b387544e1a8e7f9dc4d4478d3eb

- championDetail: b46537678d49c162a5e397963f0907ab999145a8ad9ca7e0068439f16adb849a
- championBin: 0b16994e9a44741c16371c3cd135e5acf7c62c3427ce79bfdfefc3e257038524

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Calc_Damage_Low was preserved. Stateful and alternate effects require an explicit module.

### Repudiation Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Repudiation Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Ambessa gains Shield for seconds and braces herself for seconds. She then slams the ground, dealing physical damage to nearby enemies, which increases to physical damage if she braced herself from damage from an enemy champion, large monster, or structure.

## E - Lacerate

Coverage: partial

Description signature: 5d33f5d67bbdc0f7cf25c4557950a4bb0c973f6a01bce1cc890c4171ec50a084

- championDetail: b46537678d49c162a5e397963f0907ab999145a8ad9ca7e0068439f16adb849a
- championBin: 0b16994e9a44741c16371c3cd135e5acf7c62c3427ce79bfdfefc3e257038524

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Calc_Damage_Flat was preserved. Stateful and alternate effects require an explicit module.

### Lacerate Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Lacerate Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Ambessa whips her chains around, dealing physical damage and Slowing enemies by %, which decays over second. Initiating Drakehound's Step from this Ability will trigger an additional strike.

## R - Public Execution

Coverage: partial

Description signature: 5842dd487486868be560f3c1f10e467e45e204e7414eee6a4a8f4c4a83cbfd54

- championDetail: b46537678d49c162a5e397963f0907ab999145a8ad9ca7e0068439f16adb849a
- championBin: 0b16994e9a44741c16371c3cd135e5acf7c62c3427ce79bfdfefc3e257038524

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation Calc_Damage was preserved. Stateful and alternate effects require an explicit module.

### Public Execution Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Public Execution Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Passive: Ambessa gains % %i:scaleAPen% Armor Penetration and her Abilities heal her for of the damage she dealt. Active: Ambessa becomes Unstoppable and blinks to the farthest enemy champion in a line, Suppressing the target for seconds and then slamming them into the ground, dealing physical damage and Stunning them for seconds.
