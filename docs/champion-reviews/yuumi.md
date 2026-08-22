# Yuumi combat review

Patch: 16.16

## P - Feline Friendship

Coverage: out-of-scope

Description signature: 4d897c90671c022ff5fb10a8d7ae7917d97af4c86a3edbd7f250ac40951a361f

- championDetail: b59d054c1bb2454716941c22966d401afa02de4c19dac41b4a4f6b4336820cf2
- championBin: ce2423177444a9077a3bf76077e33de341fb8b8fcc27bb7cea2d413fdd6be9e8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### Feline Friendship

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Periodically, when Yuumi strikes a champion with an attack or ability, she restores health to herself and the next ally she Attaches to. While Attached, Yuumi generates a special bond with her allies. The ally with the strongest bond enhances Yuumi's abilities while she is Attached to them.

## Q - Prowling Projectile

Coverage: partial

Description signature: 6bf95b13e2eed5564757865d30f866c1d062295547c255b390e486a80dafd463

- championDetail: b59d054c1bb2454716941c22966d401afa02de4c19dac41b4a4f6b4336820cf2
- championBin: ce2423177444a9077a3bf76077e33de341fb8b8fcc27bb7cea2d413fdd6be9e8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalMissileDamage was preserved. Stateful and alternate effects require an explicit module.

### Prowling Projectile Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Prowling Projectile Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Yuumi summons an errant missile that deals magic damage to the first enemy and Slows the target for %. If cast while Attached, Yuumi can control the missile using her mouse for a short period before it accelerates in a straight line. The accelerated missile deals magic damage and Slows the target for % for seconds, instead. Best Friend Bonus: Prowling Projectile's Slow will always be enhanced and hitting an enemy champion also grants them magic damage On-Hit %i:OnHit% for seconds. The bonus On-Hit damage can be increased by % based her ally's Critical Strike Chance.

## W - You and Me!

Coverage: unsupported

Description signature: d541ee3ca14f06cd3fb96fc9b5bb861744c40ef8ca392757f62dbe9d6a156543

- championDetail: b59d054c1bb2454716941c22966d401afa02de4c19dac41b4a4f6b4336820cf2
- championBin: ce2423177444a9077a3bf76077e33de341fb8b8fcc27bb7cea2d413fdd6be9e8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### You and Me! Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Passive: While on her Best Friend, Yuumi gains an additional % Heal & Shield Power and her ally also restores health On-Hit %i:OnHit%. Active: Yuumi dashes to an ally champion and Attaches to them. While Yuumi is Attached, she follows her partner's movement and is Untargetable except from towers. Immobilizing effects on Yuumi place this Ability on a second Cooldown.

## E - Zoomies

Coverage: unsupported

Description signature: ce33103957f257b8c6f9db982b45edf38d844d61b3bc0215fb895095657587d8

- championDetail: b59d054c1bb2454716941c22966d401afa02de4c19dac41b4a4f6b4336820cf2
- championBin: ce2423177444a9077a3bf76077e33de341fb8b8fcc27bb7cea2d413fdd6be9e8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The tooltip identifies damage, but the current BIN calculation structure could not be reduced safely.

### Zoomies Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Yuumi shields herself, blocking damage and gains % Attack Speed for seconds. While the shield persists, the target also gains % Move Speed. If Yuumi is Attached, this Ability affects her ally instead and also restores Mana to them, increased by up to % based on the target's missing Mana.

## R - Final Chapter

Coverage: partial

Description signature: 64cf3a03b754f33b569fbbcb55644172e967ddce28bc51081a6f8d18d728134a

- championDetail: b59d054c1bb2454716941c22966d401afa02de4c19dac41b4a4f6b4336820cf2
- championBin: ce2423177444a9077a3bf76077e33de341fb8b8fcc27bb7cea2d413fdd6be9e8

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalMissileDamage was preserved. Stateful and alternate effects require an explicit module.

### Final Chapter Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Final Chapter Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Yuumi channels for seconds, launching magical waves affecting both teams. If initially cast while Attached, Yuumi can steer the waves to follow her mouse. Enemies struck are dealt magic damage and Slowed by % for seconds, increased by % per wave hit. Ally champions are healed for health per wave. Excess healing is converted to a Shield instead. Best Friend Bonus: For her Best Friend, the heal is increased to health. Casting You and Me! will locks the waves in the current direction. Yuumi can move and cast Zoomies while channeling.
