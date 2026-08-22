# Taric combat review

Patch: 16.16

## P - Bravado

Coverage: unsupported

Description signature: 94abffc61256af5d03e62ec20ea5ddd3b3b1da9f5d9b7296d4cb1c5a77df121a

- championDetail: adedaee3fc192e91110153e1c4bc55787e2fd527731742e27642d5b45ea1b4db
- championBin: 028686b08deb485fb2bd93f372b586cbbfe38df5d12d766df573ffc521ffb8cd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

### Bravado Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: cooldown-modifier
- Reason: The full patch description is retained and assigned to the cooldown-modifier family, but a complete reviewed binding has not been compiled yet.

Spellcasts empower Taric's next 2 basic attacks to deal bonus magic damage, reduce his spell cooldowns, and attack in quick succession.

## Q - Starlight's Touch

Coverage: out-of-scope

Description signature: 267b1bc7b730be0c94f802b101399a924e303174d87cb314323615ec00904243

- championDetail: adedaee3fc192e91110153e1c4bc55787e2fd527731742e27642d5b45ea1b4db
- championBin: 028686b08deb485fb2bd93f372b586cbbfe38df5d12d766df573ffc521ffb8cd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Starlight's Touch

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Passive: Gain a stack (max ) every seconds and when hitting a Bravado Attack. Active: Consume all stacks to restore Health per stack to nearby ally champions ( at stacks).

## W - Bastion

Coverage: unsupported

Description signature: 86946ff7323fe94277531e3ffc9630bf08fe4ac371018e081f4c667ab3926e49

- championDetail: adedaee3fc192e91110153e1c4bc55787e2fd527731742e27642d5b45ea1b4db
- championBin: 028686b08deb485fb2bd93f372b586cbbfe38df5d12d766df573ffc521ffb8cd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast changes combat state, but no complete state module is registered yet.

### Bastion Remaining Combat Behavior

- Relevance: attacker
- Disposition: template
- Coverage: unsupported
- Template or handler: shield-with-lockout
- Reason: The full patch description is retained and assigned to the shield-with-lockout family, but a complete reviewed binding has not been compiled yet.

Passive: Taric gains Armor and forms a tether between him and the ally bound by this Ability. As long as they are near each other, the ally gains Armor and Taric casts all his Abilities from both himself and his linked ally. Active: Taric binds to an ally champion, granting a % max Health Shield for seconds.

## E - Dazzle

Coverage: modeled

Description signature: 61246229c26e303f16d4daceae6b53645a7032f61093bf5c9399ea8fa053b991

- championDetail: adedaee3fc192e91110153e1c4bc55787e2fd527731742e27642d5b45ea1b4db
- championBin: 028686b08deb485fb2bd93f372b586cbbfe38df5d12d766df573ffc521ffb8cd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

Taric Dazzle is executed by a reviewed custom handler that returns generic damage operations.

### Taric Dazzle

- Relevance: attacker
- Disposition: custom
- Coverage: modeled
- Template or handler: champion:44:E
- Reason: A dedicated reviewed handler is retained because the current template vocabulary cannot express the action semantics without distortion.

The reviewed formula combines AP and armor in a handler-backed direct packet.

## R - Cosmic Radiance

Coverage: out-of-scope

Description signature: a6502437784c9d654c49c7d8dc5778778948bea4e54587ec36796847dc102b46

- championDetail: adedaee3fc192e91110153e1c4bc55787e2fd527731742e27642d5b45ea1b4db
- championBin: 028686b08deb485fb2bd93f372b586cbbfe38df5d12d766df573ffc521ffb8cd

Validation: Reviewed against pinned CommunityDragon champion detail and BIN sources for patch 16.16.

This cast has no damage-calculation effect in the current one-on-one scope.

### Cosmic Radiance

- Relevance: neither
- Disposition: out-of-scope
- Coverage: out-of-scope
- Template or handler: none
- Reason: The reviewed patch description contains no damage, mitigation, shield, offensive stat, resistance, or cooldown behavior that changes the supported duel result.

Taric calls down protection from the heavens. After seconds, nearby ally champions become invulnerable for seconds.
