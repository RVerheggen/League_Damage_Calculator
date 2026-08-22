# Repeated attack family audit

This patch 16.16 audit separates mechanics that can look similar in a tooltip but require different declarative runtime shapes. It was produced by reviewing every passive and Q, W, E, and R description in the 173-champion snapshot, then checking each repeated-attack candidate against its retained structured data.

The umbrella is repeated attack behavior. It does not imply that every entry should compile through one template.

## Runtime shapes

| Shape | Meaning | Examples |
| --- | --- | --- |
| timed-on-hit | Every successful attack during a duration receives an additional packet or modifier. | Master Yi E, Kog'Maw W, Gwen E |
| limited-attack-state | A cast grants a fixed number of later successful attacks before consumption or expiry. | Cho'Gath E, Sett Q, Shen Q |
| automatic-attack-sequence | A qualifying attack automatically starts a count and cooldown gated sequence. | Kled W |
| recurring-attack-state | An attack consumes a held weapon or charge that a later result can return. | Draven Q |
| attack-cycle | Attacks advance or alternate a persistent cycle, and a particular position changes the attack. | Master Yi P, Sett P, Xin Zhao P |
| stacking-proc | Repeated hits build a per-target threshold and then emit a proc. | Vayne W, Akshan P, Diana P |
| mark-and-consume | One source applies charges or marks that another attack or ability consumes. | Varus W, Evelynn Q |
| multi-hit-action | One selected attack action emits multiple ordered hit packets. | Renekton W, empowered Pantheon W |

## Delivered in this iteration

| Champion source | Shape | Modeled behavior |
| --- | --- | --- |
| Master Yi E | timed-on-hit | Five-second repeated true damage, full ranks, total AD scaling, misses, mitigation behavior, and expiry |
| Cho'Gath E | limited-attack-state | Three attacks, six-second expiry, AP scaling, target maximum-health damage, and typed Feast stacks |
| Sett Q | limited-attack-state | Two attacks, four-second expiry, flat damage, and total-AD-scaled target maximum-health damage |
| Shen Q | limited-attack-state | Three attacks, eight-second expiry, typed Spirit Blade champion collision, normal and empowered damage, and conditional attack speed |
| Malphite W | armed state followed by timed-on-hit | Base passive armor, six-second first-attack arm, first aftershock, and five-second repeated aftershocks |

Malphite W remains Partially Modeled because Granite Shield can triple the passive armor and live shield depletion is not yet connected to that stat modifier.

Previously delivered entries in the same umbrella are Kog'Maw W, Gwen E, Fizz W, Vayne W, Akshan P, Diana P, and Varus W.

## Reviewed unresolved candidates

The following entries are explicitly retained as template candidates. They are not silently treated as direct cast damage.

### Fixed-count or mixed-hit states

| Champion source | Candidate shape | Important distinction |
| --- | --- | --- |
| Evelynn Q | mark-and-consume | The next three attacks or abilities consume a target mark. |
| Fiora E | limited-attack-state | Two attacks have different first and second outcomes. |
| Hwei WE | limited-attack-state | Three lights can be consumed by attacks or abilities. |
| Lee Sin P | limited-attack-state | Two attacks gain attack speed and restore energy. |
| Lucian P | limited-attack-state plus multi-hit-action | Ability casts arm a double shot, while a separate condition can empower two attacks. |
| Nami E | limited-attack-state | An allied participant consumes charges with attacks or abilities. |
| Rek'Sai Q | limited-attack-state | Three attacks refresh the remaining duration. |
| Rengar Q | limited-attack-state | Two attacks gain attack speed, but only the first receives Q damage. |
| Riven P | limited stored charges | Ability casts store charges that attacks consume one at a time. |
| Skarner Q | limited-attack-state | Three attacks are empowered and the final attack has separate damage. |
| Sylas P | limited stored charges | Spellcasts store Petricite Burst charges for later attacks. |
| Taric P | limited-attack-state | Two attacks add damage and change cooldowns. |
| Udyr P, Q, and R | limited-attack-state | Stance casts empower the next two attacks with stance-specific behavior. |
| Xin Zhao Q | limited-attack-state | Three attacks add damage and cooldown reduction, with a distinct third hit. |
| Xayah P | limited-attack-state | Ability casts grant a bounded number of piercing attacks and feathers. |

Udyr W is recorded separately because its next-two-attacks behavior only heals in the retained description. Healing remains Out Of Scope unless it changes a supported damage result.

### Duration-bound repeated attack states

| Champion source | Candidate shape | Important distinction |
| --- | --- | --- |
| Ashe Q | timed-on-hit plus multi-hit-action | The active state changes attack speed and each attack's hit structure. |
| Briar W | timed-on-hit | Blood Frenzy grants attack speed and repeated surrounding damage. |
| Ivern W | conditional timed-on-hit | Brush presence controls the on-hit state. |
| Kai'Sa E | timed-stat-modifier | Attacks during the buff also reduce E cooldown. |
| Nautilus W | shield-conditioned timed-on-hit | Repeated damage is active only while the shield persists. |
| Nunu P | timed-on-hit plus timed-stat-modifier | The temporary buff changes attack speed and Willump's repeated attack damage. |
| Qiyana W | conditional timed-on-hit | Weapon enchantment and terrain type select the state. |
| Rumble P | timed-on-hit | Overheat temporarily grants attack speed and repeated bonus damage. |
| Sivir W | timed-on-hit plus timed-stat-modifier | Bounces cannot return to the primary target, but the attack-speed state remains relevant. |
| Xayah W | timed-on-hit plus multi-hit-action | Each attack fires a secondary blade during the timed state. |
| Yunara Q | timed-on-hit | Unleash activates attack speed and repeated on-hit damage. |
| Yuumi Q best-friend bonus | ally timed-on-hit | A hit grants a timed on-hit effect to the attached ally. |
| Zeri E | timed-on-hit | The state adds magic damage and attacks reduce cooldown. |

### Automatic, recurring, and form-dependent sequences

| Champion source | Candidate shape | Important distinction |
| --- | --- | --- |
| Kled W | automatic-attack-sequence | W is passive and starts on the first attack while ready. It must not appear as a cast action. |
| Draven Q | recurring-attack-state | A held axe is consumed by an attack and returned only when the typed catch result succeeds. Up to two axes can be held. |
| Aphelios P | recurring weapon state | Main-hand, off-hand, ammunition, and weapon rotation affect attacks and abilities. |
| Shyvana Q | form-dependent recast sequence | Human and Dragon forms have different attack and recast counts. |
| Zaahen Q | multi-stage attack state | The first armed attack unlocks a distinct recast attack. |

### Persistent attack cycles and threshold procs

| Champion source | Candidate shape |
| --- | --- |
| Caitlyn P | attack-cycle with target marks |
| Gnar W | stacking-proc shared by attacks and abilities |
| Jax R passive | attack-cycle whose threshold changes during the active state |
| Jhin P | ammunition and fourth-shot attack-cycle |
| Kai'Sa P | per-target stacking-proc |
| Kennen W passive | fifth-attack cycle |
| Kindred E | per-target third-attack proc |
| Master Yi P | attack-cycle plus multi-hit-action |
| Neeko W passive | third-attack cycle |
| Sett P | alternating left and right attack-cycle |
| Twisted Fate E | fourth-attack cycle |
| Xin Zhao P | third-attack cycle |

Persistent always-on attack modifiers such as Teemo E, Warwick P, and Gwen P are assigned to persistent on-hit or scheduled-damage work, not to a consumable multi-attack state. Offensive attack-speed stacking such as Jax P and Jinx minigun is assigned to offensive stat stacking. Single empowered attacks such as Camille Q, Nasus Q, Trundle Q, and Wukong Q remain in the conditional empowered-attack family.

## Next implementation boundary

The next reusable runtime shape is automatic-attack-sequence for Kled W. It needs a cooldown-ready condition that can start a passive sequence from a basic attack without exposing a false cast control. After that, recurring-attack-state should add typed post-hit catch results for Draven Q. Fixed-count candidates should then be selected by shared operation needs, with Xin Zhao Q and Taric P grouped around per-hit cooldown changes, and Rek'Sai Q grouped around duration refresh on consumption.
