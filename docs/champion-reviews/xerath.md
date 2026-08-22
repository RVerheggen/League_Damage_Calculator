# Xerath combat review

Patch: 16.16

## P - Mana Surge

Coverage: unsupported

Description signature: 0d3d6fa88544e262ee76afb62efd1a4b55091fc62f6295ab0e866ad711ba4af7

- championDetail: f3c229f5b426722e8f0e3f093b1c6def44caf87a3afa8e8534c3b1c84c34fd1e
- championBin: 4ca05159042b5557f31b73bf525b8c07570202dbcf59a931e3c6a5461e31d259

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Mana Surge Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Xerath's basic attacks periodically restore Mana. Whenever Xerath kills a unit, this cooldown is reduced.

## Q - Arcanopulse

Coverage: partial

Description signature: db944d45ec7ffc26dec03c11bfb3303979e6a54c3fe41f35a25370c2ef640b53

- championDetail: f3c229f5b426722e8f0e3f093b1c6def44caf87a3afa8e8534c3b1c84c34fd1e
- championBin: 4ca05159042b5557f31b73bf525b8c07570202dbcf59a931e3c6a5461e31d259

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Arcanopulse Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Arcanopulse Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Begin Charging: Xerath begins charging an arcane beam, Slowing himself gradually up to 50%. Release: Xerath fires the beam, dealing magic damage. The range increases with time charged.

## W - Eye of Destruction

Coverage: partial

Description signature: 9810ba137b30568b157eacffab2fef762cd97913e0033d23684640fb57f861b0

- championDetail: f3c229f5b426722e8f0e3f093b1c6def44caf87a3afa8e8534c3b1c84c34fd1e
- championBin: 4ca05159042b5557f31b73bf525b8c07570202dbcf59a931e3c6a5461e31d259

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Eye of Destruction Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Eye of Destruction Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Xerath calls down a blast of arcane energy, dealing magic damage and Slowing them by % for seconds. Enemies in the center take magic damage instead and are Slowed by %, decaying over seconds.

## E - Shocking Orb

Coverage: partial

Description signature: c22efc69d9ad05fb85386cc4d9a1ce50f9335984d4a3f111bf695e0da380db89

- championDetail: f3c229f5b426722e8f0e3f093b1c6def44caf87a3afa8e8534c3b1c84c34fd1e
- championBin: 4ca05159042b5557f31b73bf525b8c07570202dbcf59a931e3c6a5461e31d259

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Shocking Orb Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Shocking Orb Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Xerath fires an orb of raw magic, Stunning the first enemy hit for up to seconds based on distance travelled, and dealing magic damage.

## R - Rite of the Arcane

Coverage: partial

Description signature: 79d457c2e0601e7a09ffbbd4409d795c1a93e0d663444c8d5812d961ae013bf1

- championDetail: f3c229f5b426722e8f0e3f093b1c6def44caf87a3afa8e8534c3b1c84c34fd1e
- championBin: 4ca05159042b5557f31b73bf525b8c07570202dbcf59a931e3c6a5461e31d259

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Rite of the Arcane Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Rite of the Arcane Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Xerath ascends to his true form and channels for seconds. During this time he may Recast up to times. Recast: Xerath launches a magical artillery, dealing magic damage. For each champion hit, the artillery deals an additional magic damage.
