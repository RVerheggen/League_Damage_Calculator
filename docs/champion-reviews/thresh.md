# Thresh combat review

Patch: 16.16

## P - Damnation

Coverage: unsupported

Description signature: d7c63547bb3008b7e5856659f4f1f1ce9ed2f7d9dfa9e5fc59a2eaa7e5a95ec2

- championDetail: 9b4331c857c22d6e8267700d41f8cafaddf00bcafa9931f81b3d13e920dd6584
- championBin: a526f267eba548e18e03e4eb160f0d42502082f6a27c8a56d357150c3f1b0b1f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

### Damnation Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: resistance-modifier
- Reason: The full patch description is retained and assigned to the resistance-modifier family, but a complete reviewed binding has not been compiled yet.

Thresh can harvest the souls of enemies that die near him, permanently granting him Armor and Ability Power.

## Q - Death Sentence

Coverage: partial

Description signature: bdbc50cf98d592b58409f7761b5bd27cd455dbdc98809f3296da1f6374570388

- championDetail: 9b4331c857c22d6e8267700d41f8cafaddf00bcafa9931f81b3d13e920dd6584
- championBin: a526f267eba548e18e03e4eb160f0d42502082f6a27c8a56d357150c3f1b0b1f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Death Sentence Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Death Sentence Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Thresh throws out his scythe, Stunning the first unit hit and Pulling them towards Thresh for seconds. The scythe does magic damage and also grants True Sight for the duration. Thresh can Recast this Ability to pull himself to the enemy. If this Ability hits, its Cooldown is reduced by seconds.

## W - Dark Passage

Coverage: unsupported

Description signature: 6b49260be59406381423d61db980573bc20d1acef45c65afafabcf8a17ffec6b

- championDetail: 9b4331c857c22d6e8267700d41f8cafaddf00bcafa9931f81b3d13e920dd6584
- championBin: a526f267eba548e18e03e4eb160f0d42502082f6a27c8a56d357150c3f1b0b1f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Dark Passage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Thresh throws his lantern, allowing an ally to click on it to dash to Thresh. The lantern also grants Shield for seconds to Thresh and the first ally champion to come in contact with it.

## E - Flay

Coverage: partial

Description signature: 851861e81c2200f3e349830d94876cf5801bcb00e8e1ad37c725492b5e9f6f8b

- championDetail: 9b4331c857c22d6e8267700d41f8cafaddf00bcafa9931f81b3d13e920dd6584
- championBin: a526f267eba548e18e03e4eb160f0d42502082f6a27c8a56d357150c3f1b0b1f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation PAttackDamageMin was preserved. Stateful and alternate effects require an explicit module.

### Flay Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Flay Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Passive: Thresh's Attacks deal additional damage based on how long since he last Attacked. They deal between and magic damage. Active: Thresh whips his chains, Pulling or Pushing enemies in the direction of the swing. Enemies hit are also Slowed by % for second and take magic damage.

## R - The Box

Coverage: partial

Description signature: 69460fb727f6d56ada777cdfc8bb17642bc2894371f3633d5962031528e7a191

- championDetail: 9b4331c857c22d6e8267700d41f8cafaddf00bcafa9931f81b3d13e920dd6584
- championBin: a526f267eba548e18e03e4eb160f0d42502082f6a27c8a56d357150c3f1b0b1f

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### The Box Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### The Box Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Thresh creates a prison of spectral walls, Slowing champions by % for seconds and dealing magic damage. Walls break after one collision, and after one is broken, the rest deal no damage and Slow for half duration.
