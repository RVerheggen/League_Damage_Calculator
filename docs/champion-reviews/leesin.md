# Lee Sin combat review

Patch: 16.16

## P - Flurry

Coverage: unsupported

Description signature: 30ca2a66afdc813a013017c4ea0df795c5329b24a90194f41c3683df40d0f8a0

- championDetail: f8dac17ade692bbcbd931847bbbe19da783d43e041763ce871b8e36f1131914e
- championBin: 6533c6747694f033a1cd4cfe98110e75726ce739509f19b9d4e911afa5ed695e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

A spellcast empowers the next two attacks with attack speed and resource restoration. The source is assigned to the limited-attack-state family, but a complete reviewed binding has not been compiled yet.

### Flurry Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: limited-attack-state
- Reason: A spellcast empowers the next two attacks with attack speed and resource restoration. The source is assigned to the limited-attack-state family, but a complete reviewed binding has not been compiled yet.

After Lee Sin uses an ability, his next 2 basic attacks gain Attack Speed and return Energy.

## Q - Sonic Wave / Resonating Strike

Coverage: partial

Description signature: 803f9b7e27f8a1cda82077f9f7f763f111d0d26e70c1ac33b97ad91c7cf10036

- championDetail: f8dac17ade692bbcbd931847bbbe19da783d43e041763ce871b8e36f1131914e
- championBin: 6533c6747694f033a1cd4cfe98110e75726ce739509f19b9d4e911afa5ed695e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

### Sonic Wave / Resonating Strike Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Sonic Wave / Resonating Strike Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Lee Sin projects a discordant wave of sound, dealing physical damage to the first enemy hit, granting True Sight of them, and allows Lee Sin to Recast for the next seconds. Recast: Lee Sin dashes to the enemy hit by the sound wave, dealing between to physical damage scaling with the target's missing Health.

## W - Safeguard / Iron Will

Coverage: unsupported

Description signature: 1d1f6f64f3933945b0118bb7fda102009897a29c59ffb259e869ab7221a49074

- championDetail: f8dac17ade692bbcbd931847bbbe19da783d43e041763ce871b8e36f1131914e
- championBin: 6533c6747694f033a1cd4cfe98110e75726ce739509f19b9d4e911afa5ed695e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

### Safeguard / Iron Will Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Lee Sin dashes to an ally or ward. If the target is a champion, Lee Sin grants them and himself Shield for seconds. Lee Sin may Recast for the next seconds. Recast: Lee Sin gains % Omnivamp for seconds.

## E - Tempest / Cripple

Coverage: partial

Description signature: 3704ae4c60b744c500d2812ad4e17ec0f9b659f6e675c61691455de566a05cbf

- championDetail: f8dac17ade692bbcbd931847bbbe19da783d43e041763ce871b8e36f1131914e
- championBin: 6533c6747694f033a1cd4cfe98110e75726ce739509f19b9d4e911afa5ed695e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

### Tempest / Cripple Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Tempest / Cripple Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: scheduled-damage
- Reason: The full patch description is retained and assigned to the scheduled-damage family, but a complete reviewed binding has not been compiled yet.

Lee Sin smashes the ground, sending out a shockwave that deals magic damage and reveals them for seconds. If this hits an enemy, Lee Sin can Recast for the next seconds. Recast: Lee Sin Slows nearby enemies struck by the shockwave by % decaying over seconds.

## R - Dragon's Rage

Coverage: partial

Description signature: 00665c6c6fb7601f8b0d736e4da10d8c65bd1244e4e8c45337221f81bc43a3cb

- championDetail: f8dac17ade692bbcbd931847bbbe19da783d43e041763ce871b8e36f1131914e
- championBin: 6533c6747694f033a1cd4cfe98110e75726ce739509f19b9d4e911afa5ed695e

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The generic direct-damage evaluator preserves the structured formula and complete rank arrays. The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

### Dragon's Rage Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Dragon's Rage Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: conditional-amplifier
- Reason: The full patch description is retained and assigned to the conditional-amplifier family, but a complete reviewed binding has not been compiled yet.

Lee Sin performs a powerful roundhouse kick Knocking Back an enemy champion and dealing physical damage. Enemies the target collides with are briefly Knocked Up and take plus % of the kicked enemy's bonus Health as physical damage.
