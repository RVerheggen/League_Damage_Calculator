# Aphelios combat review

Patch: 16.16

## P - The Hitman and the Seer

Coverage: out-of-scope

Description signature: 4a9d59e9fce912e86b81dc6d0ff4710fb868606e161139f1f2a6c1b76ed2b3d1

- championDetail: 5458394de2967871b5a307522ecc434989731e73ec2a7ca52b78032725a1a641
- championBin: 1f757cc057c64ea1ed67271d9b45d7839e4d45c615ac6b170bb02d344e282792

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

### The Hitman and the Seer

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Aphelios wields 5 Lunari Weapons made by his sister Alune. He has access to two at a time: one main-hand and one off-hand. Each weapon has a unique Basic Attack and Ability. Attacks and abilities consume a weapon's ammo. When out of ammo, Aphelios discards the weapon and Alune summons the next of the 5.

## Q - Weapon Abilites

Coverage: out-of-scope

Description signature: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

- championDetail: 5458394de2967871b5a307522ecc434989731e73ec2a7ca52b78032725a1a641
- championBin: 1f757cc057c64ea1ed67271d9b45d7839e4d45c615ac6b170bb02d344e282792

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Weapon Abilites

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.



## W - Phase

Coverage: out-of-scope

Description signature: 897069b11f67783ea0fd73d4d6a50b94196d5fcfcf2d0883683916e777f5a085

- championDetail: 5458394de2967871b5a307522ecc434989731e73ec2a7ca52b78032725a1a641
- championBin: 1f757cc057c64ea1ed67271d9b45d7839e4d45c615ac6b170bb02d344e282792

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Phase

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Swap main-hand and off-hand weapons, equipping Gravitum.

## E - Weapon Queue System

Coverage: out-of-scope

Description signature: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

- championDetail: 5458394de2967871b5a307522ecc434989731e73ec2a7ca52b78032725a1a641
- championBin: 1f757cc057c64ea1ed67271d9b45d7839e4d45c615ac6b170bb02d344e282792

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Weapon Queue System

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.



## R - Moonlight Vigil

Coverage: partial

Description signature: 657b0b126683a598a246825751f5a9d70e94f6dd6f7584b93f0495d27ec06e0f

- championDetail: 5458394de2967871b5a307522ecc434989731e73ec2a7ca52b78032725a1a641
- championBin: 1f757cc057c64ea1ed67271d9b45d7839e4d45c615ac6b170bb02d344e282792

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

CommunityDragon calculation MaxDamage was preserved. Stateful and alternate effects require an explicit module.

### Moonlight Vigil Primary Damage

- Relevance: attacker
- Disposition: template
- Coverage: modeled
- Template or handler: direct-damage
- Reason: The generic direct-damage evaluator preserves the structured formula and complete rank arrays.

The structured primary CommunityDragon calculation is executable.

### Moonlight Vigil Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: direct-damage
- Reason: The full patch description is retained and assigned to the direct-damage family, but a complete reviewed binding has not been compiled yet.

Aphelios fires a concentrated blast of moonlight that explodes when it hits a champion, dealing physical damage to surrounding enemies. Then, Aphelios attacks all champions hit with his main-hand weapon. {{ Spell_ApheliosR_WeaponMod_ }}
