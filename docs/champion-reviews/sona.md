# Sona combat review

Patch: 16.16

## P - Power Chord

Coverage: unsupported

Description signature: a8a7ae96a9a0166615527f3bf76058a3eaf180429deee64386733e5728fbf18a

- championDetail: df2f616043010abb16b67335cdf9992b2b08d57f0b0319f7fe13e6eb32deb2ac
- championBin: d78164a26cb89504c00d9e79521c8136c9111cacd68961f853a759d082a2010c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

### Power Chord Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Accelerando: Sona gains non-Ultimate ability haste permanently for her basic abilities as she uses her abilities well, up to a cap. Beyond that cap, further successful uses reduce her ultimate's remaining cooldown instead. Power Chord: Every few spell casts, Sona's next attack will deal bonus magic damage in addition to an additional effect based on what basic Ability Sona last activated.

## Q - Hymn of Valor

Coverage: partial

Description signature: d3c1a10a97d21ac3398eb04a284a897236a9d128514ae0ed84b40950c981f46f

- championDetail: df2f616043010abb16b67335cdf9992b2b08d57f0b0319f7fe13e6eb32deb2ac
- championBin: d78164a26cb89504c00d9e79521c8136c9111cacd68961f853a759d082a2010c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Hymn of Valor Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Hymn of Valor Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: timed-on-hit
- Reason: The full patch description is retained and assigned to the timed-on-hit family, but a complete reviewed binding has not been compiled yet.

Sona deals magic damage to the nearest two enemies, prioritizing champions. She then begins a new Melody. Gain a stack of Accelerando for every champion you damage with this. Melody: Sona gains an aura for seconds, granting allied champions an additional magic damage %i:OnHit% on their next Attack within seconds. Power Chord - Staccato: Power Chord bonus damage ( total magic damage).

## W - Aria of Perseverance

Coverage: unsupported

Description signature: 24c144b1cacdf510e9abb1a7dfa2ac90a1f5bb146344d851a29d67f7b58141f3

- championDetail: df2f616043010abb16b67335cdf9992b2b08d57f0b0319f7fe13e6eb32deb2ac
- championBin: d78164a26cb89504c00d9e79521c8136c9111cacd68961f853a759d082a2010c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Aria of Perseverance Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Active: Sona restores Health to herself and a nearby allied champion, prioritizing the most wounded. She then begins a new Melody. Melody: Sona gains an aura for seconds, granting allied champions Shield for seconds. Gain a stack of Accelerando whenever you heal another injured ally and every time you protect another ally from at least damage with this shield. Power Chord - Diminuendo: Power Chord also reduces physical and magic damage dealt by the target by for seconds.

## E - Song of Celerity

Coverage: unsupported

Description signature: 11bec0c5c6abeda57dcb6ab27ad821022b3c40b0b96c14d4a1686d0b40117c09

- championDetail: df2f616043010abb16b67335cdf9992b2b08d57f0b0319f7fe13e6eb32deb2ac
- championBin: d78164a26cb89504c00d9e79521c8136c9111cacd68961f853a759d082a2010c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Song of Celerity Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Active: She begins a new Melody and grants herself Move Speed for seconds, extended to up to seconds if she doesn't take damage. Melody: Sona gains an aura for seconds that grants allied champions Move Speed for seconds. Power Chord - Tempo: Power Chord also Slows the target by for seconds.

## R - Crescendo

Coverage: partial

Description signature: f2d1f320bac5fac61dbc9ac03de9c4cce3631661d9afc4e2ba4649fd693aec4b

- championDetail: df2f616043010abb16b67335cdf9992b2b08d57f0b0319f7fe13e6eb32deb2ac
- championBin: d78164a26cb89504c00d9e79521c8136c9111cacd68961f853a759d082a2010c

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation TotalDamage was preserved. Stateful and alternate effects require an explicit module.

### Crescendo Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Crescendo Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Sona strikes an irresistible chord, Stunning enemy for seconds and dealing magic damage.
