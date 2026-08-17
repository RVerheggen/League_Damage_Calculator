import {
  addDamage,
  damageVector,
  emptyDamage,
  type ChampionDefinition,
  type DamageType,
  type DamageVector,
  type ItemDefinition,
  type RuneDefinition,
  type ScenarioV1,
  type SimulationResult,
  type StepTrigger,
} from "./model";
import { mitigateDamage } from "./mitigation";
import { validateScenario } from "./scenario";
import { resolveStats } from "./stats";

function packet(type: DamageType | null, amount: number): DamageVector {
  if (type === "physical") return damageVector(amount, 0, 0);
  if (type === "magic") return damageVector(0, amount, 0);
  if (type === "true") return damageVector(0, 0, amount);
  return emptyDamage();
}

function levelValue(start: number, end: number, level: number) {
  return start + (end - start) * ((Math.max(1, Math.min(18, level)) - 1) / 17);
}

function runePageWarnings(label: string, runes: RuneDefinition[]) {
  if (!runes.length) return [];
  const warnings: string[] = [];
  const treeRunes = runes.filter((rune) => rune.styleId > 0);
  const shards = runes.filter((rune) => rune.styleId === 0);
  const keystones = treeRunes.filter((rune) => rune.slotType === "kKeyStone");
  if (keystones.length > 1) warnings.push(`${label} rune page has more than one keystone.`);
  const styleGroups = new Map<number, RuneDefinition[]>();
  for (const rune of treeRunes) styleGroups.set(rune.styleId, [...(styleGroups.get(rune.styleId) ?? []), rune]);
  if (styleGroups.size > 2) warnings.push(`${label} rune page uses more than two rune trees.`);
  const styleCounts = [...styleGroups.values()].map((group) => group.length).sort((a, b) => b - a);
  if ((styleCounts[0] ?? 0) > 4 || (styleCounts[1] ?? 0) > 2) warnings.push(`${label} rune page exceeds the four primary and two secondary perk limits.`);
  for (const group of styleGroups.values()) {
    const occupied = new Set<number>();
    for (const rune of group) {
      if (occupied.has(rune.slot)) warnings.push(`${label} rune page selects multiple perks from ${rune.styleName} row ${rune.slot + 1}.`);
      occupied.add(rune.slot);
    }
  }
  if (shards.length > 3 || new Set(shards.map((rune) => rune.slot)).size !== shards.length) warnings.push(`${label} rune page has an impossible stat shard allocation.`);
  if (runes.some((rune) => rune.styleId < 0)) warnings.push(`${label} rune page contains an unassigned perk from the patch data.`);
  return warnings;
}

function overrideAbility(
  champion: ChampionDefinition,
  key: string,
  rank: number,
  attacker: ReturnType<typeof resolveStats>,
  defender: ReturnType<typeof resolveStats>,
  targetCurrentHealth: number,
  parameters: { wallCollision?: boolean; hitCount?: number; chargePercent?: number },
): { damage: DamageVector; formula: string; note?: string } | null {
  const index = Math.max(0, rank - 1);
  if (champion.alias === "Poppy") {
    if (key === "Q" || key === "Q2") {
      const hits = key === "Q2" ? 1 : Math.max(1, Math.min(2, parameters.hitCount ?? 1));
      const healthRatio = [0.07, 0.075, 0.08, 0.085, 0.09][index];
      const perHit = [30, 55, 80, 105, 130][index] + attacker.attackDamage * 0.75 + defender.maxHealth * healthRatio;
      return { damage: packet("physical", perHit * hits), formula: `${hits} x (${[30, 55, 80, 105, 130][index]} + 75% total AD + ${(healthRatio * 100).toFixed(1)}% target max health)`, note: key === "Q2" ? "Delayed Hammer Shock detonation connected." : hits === 2 ? "Both Hammer Shock impacts connected in this action." : "Initial Hammer Shock impact only." };
    }
    if (key === "E") {
      const base = [40, 60, 80, 100, 120][index] + attacker.attackDamage * 0.6;
      const multiplier = parameters.wallCollision ? 2 : 1;
      return { damage: packet("physical", base * multiplier), formula: `${multiplier} x (${[40, 60, 80, 100, 120][index]} + 60% total AD)`, note: parameters.wallCollision ? "Terrain collision damage included." : "No terrain collision." };
    }
    if (key === "R") {
      const charge = Math.max(0, Math.min(1, (parameters.chargePercent ?? 0) / 100));
      const full = [200, 300, 400][Math.max(0, Math.min(2, rank - 1))] + attacker.attackDamage * 0.9;
      const multiplier = 0.5 + charge * 0.5;
      return { damage: packet("physical", full * multiplier), formula: `${Math.round(multiplier * 100)}% x (${[200, 300, 400][Math.max(0, Math.min(2, rank - 1))]} + 90% total AD)`, note: `${Math.round(charge * 100)}% charge selected.` };
    }
  }
  if (champion.alias === "Taric" && key === "E") {
    const base = [90, 130, 170, 210, 250][index] + attacker.abilityPower * 0.5 + attacker.armor * 0.5;
    return { damage: packet("magic", base), formula: `${[90, 130, 170, 210, 250][index]} + 50% AP + 50% armor` };
  }
  if (champion.alias === "DrMundo" && key === "Q") {
    const ratio = [0.2, 0.225, 0.25, 0.275, 0.3][index];
    const minimum = [80, 130, 180, 230, 280][index];
    const amount = Math.max(minimum, targetCurrentHealth * ratio);
    return { damage: packet("magic", amount), formula: `max(${minimum}, ${(ratio * 100).toFixed(1)}% target current health)`, note: "Champion minimum damage is applied. Monster caps are outside duel scope." };
  }
  if (champion.alias === "Garen" && key === "R") {
    const ultimateIndex = Math.max(0, Math.min(2, rank - 1));
    const base = [150, 300, 450][ultimateIndex];
    const ratio = [0.25, 0.3, 0.35][ultimateIndex];
    const missingHealth = Math.max(0, defender.maxHealth - targetCurrentHealth);
    return { damage: packet("true", base + missingHealth * ratio), formula: `${base} + ${(ratio * 100).toFixed(0)}% target missing health` };
  }
  if (champion.alias === "Ornn" && key === "W") {
    const ratio = [0.12, 0.13, 0.14, 0.15, 0.16][index];
    return { damage: packet("magic", defender.maxHealth * ratio), formula: `${(ratio * 100).toFixed(0)}% target max health across the full breath`, note: "All Bellows Breath ticks are selected." };
  }
  return null;
}

export function simulate(
  scenario: ScenarioV1,
  championIndex: Map<number, ChampionDefinition>,
  itemIndex: Map<number, ItemDefinition>,
  runeIndex: Map<number, RuneDefinition>,
): SimulationResult {
  const attackerChampion = championIndex.get(scenario.attacker.championId);
  const defenderChampion = championIndex.get(scenario.defender.championId);
  if (!attackerChampion || !defenderChampion) throw new Error("The selected champion data is unavailable for this patch.");
  const attacker = resolveStats(scenario.attacker, attackerChampion, itemIndex, runeIndex);
  const defender = resolveStats(scenario.defender, defenderChampion, itemIndex, runeIndex);
  let health = defender.currentHealth;
  let shield = Math.max(0, scenario.defender.startingShield);
  let timestamp = 0;
  let hitCounter = 0;
  let attackCounter = 0;
  let spellbladeReady = false;
  let scorchReadyAt = 0;
  let lethalStepId: string | null = null;
  const steps: SimulationResult["steps"] = [];
  const warnings = validateScenario(scenario);
  const attackerItems = scenario.attacker.itemIds.map((id) => itemIndex.get(id)).filter(Boolean) as ItemDefinition[];
  const defenderItems = scenario.defender.itemIds.map((id) => itemIndex.get(id)).filter(Boolean) as ItemDefinition[];
  const attackerRunes = [...scenario.attacker.runeIds, ...(scenario.attacker.shardIds ?? []).filter((id): id is number => typeof id === "number")]
    .map((id) => runeIndex.get(id)).filter(Boolean) as RuneDefinition[];
  const defenderRunes = [...scenario.defender.runeIds, ...(scenario.defender.shardIds ?? []).filter((id): id is number => typeof id === "number")]
    .map((id) => runeIndex.get(id)).filter(Boolean) as RuneDefinition[];
  warnings.push(...runePageWarnings("Attacker", attackerRunes), ...runePageWarnings("Target", defenderRunes));

  for (const action of scenario.combo) {
    if (!action.enabled) continue;
    if (lethalStepId && !scenario.settings.continueAfterLethal) break;
    timestamp += Math.max(0, action.delay);
    const triggers: StepTrigger[] = [];
    const stepWarnings: string[] = [];
    let pre = emptyDamage();
    let formula = "No damage";

    if (action.kind === "wait") {
      formula = `Advanced combat state by ${action.delay.toFixed(2)} seconds.`;
    } else if (action.kind === "attack") {
      if (action.outcome === "miss") {
        formula = "The basic attack was explicitly selected to miss.";
      } else {
        attackCounter += 1;
        hitCounter += 1;
        let attackDamage = attacker.attackDamage;
        if (scenario.randomnessMode === "expected") {
          attackDamage *= 1 + (Math.max(0, Math.min(100, attacker.critChance)) / 100) * (attacker.critDamage / 100 - 1);
          formula = `Total AD weighted by ${attacker.critChance.toFixed(1)}% critical chance.`;
        } else if (action.outcome === "crit") {
          attackDamage *= attacker.critDamage / 100;
          formula = `Total AD x ${attacker.critDamage.toFixed(0)}% selected critical strike.`;
        } else {
          formula = "One basic attack using total AD.";
        }
        pre = packet("physical", attackDamage);

        const spellblade = attackerItems.find((item) => /Sheen|Trinity Force|Lich Bane|Iceborn Gauntlet/i.test(item.name));
        if (spellbladeReady && spellblade) {
          const lichBane = /Lich Bane/i.test(spellblade.name);
          const amount = lichBane ? attacker.baseAttackDamage * 0.75 + attacker.abilityPower * 0.4 : attacker.baseAttackDamage * (/Trinity Force/i.test(spellblade.name) ? 2 : 1.5);
          const raw = packet(lichBane ? "magic" : "physical", amount);
          pre = addDamage(pre, raw);
          triggers.push({ source: "item", label: `${spellblade.name} - Spellblade`, preMitigation: raw, postMitigation: mitigateDamage(raw, attacker, defender) });
          spellbladeReady = false;
        }
        const bork = attackerItems.find((item) => /Blade of The Ruined King/i.test(item.name));
        if (bork) {
          const raw = packet("physical", health * 0.08);
          pre = addDamage(pre, raw);
          triggers.push({ source: "item", label: `${bork.name} - current health on-hit`, preMitigation: raw, postMitigation: mitigateDamage(raw, attacker, defender) });
        }
        const nashor = attackerItems.find((item) => /Nashor's Tooth/i.test(item.name));
        if (nashor) {
          const raw = packet("magic", 15 + attacker.abilityPower * 0.15);
          pre = addDamage(pre, raw);
          triggers.push({ source: "item", label: `${nashor.name} - Icathian Bite`, preMitigation: raw, postMitigation: mitigateDamage(raw, attacker, defender) });
        }
      }
    } else if (action.kind === "ability") {
      hitCounter += 1;
      if (action.key !== "Q2") spellbladeReady = true;
      const spellKey = action.key === "Q2" ? "Q" : action.key;
      const spell = attackerChampion.spells.find((candidate) => candidate.key === spellKey);
      const rank = Math.max(1, scenario.attacker.abilityRanks[spellKey] ?? 1);
      const override = overrideAbility(attackerChampion, action.key, rank, attacker, defender, health, action.parameters);
      if (override) {
        pre = override.damage;
        formula = override.formula;
        if (override.note) stepWarnings.push(override.note);
      } else if (!spell || !spell.damageType || spell.classification === "non-damaging") {
        formula = spell ? `${spell.name} is classified as non-damaging for this duel.` : "Ability definition unavailable.";
        if (!spell) stepWarnings.push(`${action.key} is not present in this champion snapshot.`);
      } else if (spell.classification === "unsupported") {
        formula = `${spell.name} has a visible unsupported damage structure.`;
        stepWarnings.push(spell.coverageNote);
      } else {
        const base = spell.baseDamage[Math.max(0, Math.min(spell.baseDamage.length - 1, rank - 1))] ?? 0;
        const amount = base + attacker.attackDamage * spell.ratioAD + attacker.abilityPower * spell.ratioAP + attacker.armor * spell.ratioArmor + attacker.magicResist * spell.ratioMagicResist;
        pre = packet(spell.damageType, amount * Math.max(1, action.parameters.hitCount ?? 1));
        formula = `${base.toFixed(0)} + ${(spell.ratioAD * 100).toFixed(0)}% total AD + ${(spell.ratioAP * 100).toFixed(0)}% AP + ${(spell.ratioArmor * 100).toFixed(0)}% armor + ${(spell.ratioMagicResist * 100).toFixed(0)}% magic resist`;
        if (spell.classification !== "modeled") stepWarnings.push(spell.coverageNote);
      }
      const scorch = attackerRunes.find((rune) => rune.name === "Scorch");
      if (scorch && timestamp >= scorchReadyAt && pre.total > 0) {
        const raw = packet("magic", levelValue(20, 40, scenario.attacker.level));
        pre = addDamage(pre, raw);
        triggers.push({ source: "rune", label: "Scorch", preMitigation: raw, postMitigation: mitigateDamage(raw, attacker, defender), note: "10 second cooldown started." });
        scorchReadyAt = timestamp + 10;
      }
    }

    if (hitCounter === 3) {
      const electrocute = attackerRunes.find((rune) => rune.name === "Electrocute");
      if (electrocute) {
        const raw = packet("magic", levelValue(70, 240, scenario.attacker.level) + attacker.bonusAttackDamage * 0.1 + attacker.abilityPower * 0.05);
        pre = addDamage(pre, raw);
        triggers.push({ source: "rune", label: "Electrocute", preMitigation: raw, postMitigation: mitigateDamage(raw, attacker, defender) });
      }
    }
    if (attackCounter === 3) {
      const pta = attackerRunes.find((rune) => rune.name === "Press the Attack");
      if (pta) {
        const raw = packet("physical", levelValue(40, 160, scenario.attacker.level));
        pre = addDamage(pre, raw);
        triggers.push({ source: "rune", label: "Press the Attack", preMitigation: raw, postMitigation: mitigateDamage(raw, attacker, defender), note: "Exposure is represented by its activation packet." });
      }
    }

    const coup = attackerRunes.some((rune) => rune.name === "Coup de Grace") && health / defender.maxHealth < 0.4;
    if (coup) {
      pre = damageVector(pre.physical * 1.08, pre.magic * 1.08, pre.true * 1.08);
      stepWarnings.push("Coup de Grace increased outgoing damage by 8% below 40% health.");
    }
    const post = mitigateDamage(pre, attacker, defender);
    const absorbed = Math.min(shield, post.total);
    shield -= absorbed;
    const healthDamage = Math.max(0, post.total - absorbed);
    const healthBefore = health;
    health = Math.max(0, health - healthDamage);
    const overkill = Math.max(0, healthDamage - healthBefore);
    if (!lethalStepId && health <= 0 && healthDamage > 0) lethalStepId = action.id;
    steps.push({
      id: action.id,
      timestamp,
      label: action.label ?? (action.kind === "attack" ? "Basic Attack" : action.kind === "wait" ? "Wait" : action.key),
      preMitigation: pre,
      postMitigation: post,
      shieldAbsorbed: absorbed,
      healthDamage,
      targetHealth: health,
      overkill,
      triggers,
      warnings: stepWarnings,
      formula,
    });
  }

  const totals = steps.reduce((total, step) => ({
    preMitigation: addDamage(total.preMitigation, step.preMitigation),
    postMitigation: addDamage(total.postMitigation, step.postMitigation),
    shieldAbsorbed: total.shieldAbsorbed + step.shieldAbsorbed,
    healthDamage: total.healthDamage + step.healthDamage,
  }), { preMitigation: emptyDamage(), postMitigation: emptyDamage(), shieldAbsorbed: 0, healthDamage: 0 });

  const unmodeledRunes = attackerRunes.filter((rune) => rune.classification === "unsupported");
  if (unmodeledRunes.length) warnings.push(`Unsupported rune effects: ${unmodeledRunes.map((rune) => rune.name).join(", ")}.`);
  const unmodeledDefenderRunes = defenderRunes.filter((rune) => rune.classification === "unsupported");
  if (unmodeledDefenderRunes.length) warnings.push(`Unsupported target rune effects: ${unmodeledDefenderRunes.map((rune) => rune.name).join(", ")}.`);
  const unmodeledItems = attackerItems.filter((item) => item.classification === "unsupported");
  if (unmodeledItems.length) warnings.push(`Unsupported item effects: ${unmodeledItems.map((item) => item.name).join(", ")}. Their structured stats are still applied.`);
  const unmodeledDefenderItems = defenderItems.filter((item) => item.classification === "unsupported");
  if (unmodeledDefenderItems.length) warnings.push(`Unsupported target item effects: ${unmodeledDefenderItems.map((item) => item.name).join(", ")}. Their structured stats are still applied.`);
  return { steps, totals, attackerStats: attacker, defenderStats: defender, lethalStepId, warnings };
}
