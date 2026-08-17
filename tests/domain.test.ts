import assert from "node:assert/strict";
import test from "node:test";
import { evaluateFormula } from "../src/domain/formula";
import { damageVector, type ChampionDefinition, type ItemDefinition, type RuneDefinition } from "../src/domain/model";
import { effectiveResistance, mitigateDamage, resistanceMultiplier } from "../src/domain/mitigation";
import { decodeScenario, encodeScenario } from "../src/domain/scenario";
import { simulate } from "../src/domain/simulate";
import { growthMultiplier, resolveStats } from "../src/domain/stats";
import { defaultScenario } from "../src/features/calculator/defaults";
import { getActionControls, sanitizeComboForChampion } from "../src/features/calculator/action-controls";

const champion = (id: number, alias: string): ChampionDefinition => ({
  id,
  alias,
  name: alias,
  title: "Fixture",
  roles: ["fighter"],
  icon: "",
  stats: {
    health: 600,
    healthPerLevel: 100,
    mana: 300,
    manaPerLevel: 50,
    armor: 30,
    armorPerLevel: 4,
    magicResist: 30,
    magicResistPerLevel: 1.3,
    attackDamage: 60,
    attackDamagePerLevel: 3,
    attackSpeed: 0.65,
    attackSpeedPerLevel: 2,
    moveSpeed: 335,
    attackRange: 125,
  },
  passive: null,
  spells: [{ key: "Q", name: "Fixture Q", description: "", icon: "", damageType: "magic", baseDamage: [100, 120, 140, 160, 180], ratioAD: 0, ratioAP: 0.6, ratioArmor: 0, ratioMagicResist: 0, cooldown: [], classification: "modeled", coverageNote: "" }],
});

test("formula interpreter handles sums, products, clamps, ranks, and conditionals", () => {
  const value = evaluateFormula({
    type: "clamp",
    min: 0,
    max: 500,
    node: {
      type: "sum",
      nodes: [
        { type: "effect", key: "base" },
        { type: "product", nodes: [{ type: "stat", key: "ap" }, { type: "literal", value: 0.6 }] },
        { type: "conditional", condition: "empowered", whenTrue: { type: "literal", value: 40 }, whenFalse: { type: "literal", value: 0 } },
      ],
    },
  }, { spellRank: 2, championLevel: 11, effects: { base: [80, 120] }, named: {}, stats: { ap: 200 }, conditions: { empowered: true } });
  assert.equal(value, 280);
});

test("champion growth follows the League nonlinear level curve", () => {
  assert.equal(growthMultiplier(1), 0);
  assert.equal(growthMultiplier(18), 17);
  assert.ok(growthMultiplier(10) > 7 && growthMultiplier(10) < 9);
});

test("manual total AD and resistance overrides preserve derived base AD", () => {
  const fixture = champion(1, "Fixture");
  const config = defaultScenario("test").attacker;
  config.championId = 1;
  config.level = 10;
  config.overrides = { attackDamage: 250, armor: -20, magicResist: 10 };
  const stats = resolveStats(config, fixture, new Map());
  assert.equal(stats.attackDamage, 250);
  assert.equal(stats.bonusAttackDamage, 250 - stats.baseAttackDamage);
  assert.equal(stats.armor, -20);
  assert.equal(stats.magicResist, 10);
});

test("duplicate adaptive shards remain distinct row selections", () => {
  const fixture = champion(1, "Fixture");
  const config = defaultScenario("test").attacker;
  const adaptive: RuneDefinition = {
    id: 5008,
    name: "Adaptive Force",
    description: "+9 Adaptive Force",
    icon: "",
    classification: "stat-only",
    styleId: 0,
    styleName: "Stat shard",
    slot: 1,
    slotType: "kStatMod",
  };
  config.level = 1;
  config.shardIds = [5008, 5008, null];
  const stats = resolveStats(config, fixture, new Map(), new Map([[5008, adaptive]]));
  assert.equal(stats.attackDamage, 70.8);
  assert.ok(Math.abs(stats.bonusAttackDamage - 10.8) < 0.00001);
});

test("resistance and penetration ordering covers positive and negative values", () => {
  assert.equal(resistanceMultiplier(0), 1);
  assert.equal(resistanceMultiplier(100), 0.5);
  assert.ok(Math.abs(resistanceMultiplier(-100) - 1.5) < 0.00001);
  assert.equal(effectiveResistance(100, { flatReduction: 10, percentReduction: 20, percentPenetration: 25, flatPenetration: 15 }), 39);
});

test("mixed damage keeps true damage unmitigated", () => {
  const source = { maxHealth: 1000, currentHealth: 1000, baseAttackDamage: 60, bonusAttackDamage: 0, attackDamage: 60, abilityPower: 0, armor: 30, magicResist: 30, lethality: 0, percentArmorPen: 0, flatMagicPen: 0, percentMagicPen: 0, critChance: 0, critDamage: 175 };
  const target = { ...source, armor: 100, magicResist: -100 };
  const post = mitigateDamage(damageVector(100, 100, 100), source, target);
  assert.deepEqual(post, damageVector(50, 150, 100));
});

test("scenario fragments round trip with patch and combo state", () => {
  const scenario = defaultScenario("16.16");
  scenario.attacker.overrides.abilityPower = 321;
  scenario.attacker.shardIds = [5008, 5008, 5011];
  const encoded = encodeScenario(scenario);
  const decoded = decodeScenario(`#${encoded}`);
  assert.equal(decoded?.patch, "16.16");
  assert.equal(decoded?.attacker.overrides.abilityPower, 321);
  assert.deepEqual(decoded?.attacker.shardIds, [5008, 5008, 5011]);
  assert.equal(decoded?.combo.length, scenario.combo.length);
});

test("simulation separates mitigation, shields, health loss, and lethal stopping", () => {
  const attacker = champion(1, "Fixture");
  const target = champion(2, "Target");
  const scenario = defaultScenario("test");
  scenario.attacker.championId = 1;
  scenario.defender.championId = 2;
  scenario.attacker.level = 1;
  scenario.defender.level = 1;
  scenario.attacker.overrides = { attackDamage: 200, abilityPower: 100 };
  scenario.defender.overrides = { maxHealth: 250, armor: 0, magicResist: 0 };
  scenario.defender.startingShield = 50;
  scenario.combo = [
    { id: "one", kind: "attack", key: "AA", delay: 0, enabled: true, outcome: "normal", parameters: {} },
    { id: "two", kind: "ability", key: "Q", delay: 0.1, enabled: true, outcome: "normal", parameters: {} },
    { id: "three", kind: "attack", key: "AA", delay: 0.1, enabled: true, outcome: "normal", parameters: {} },
  ];
  const result = simulate(scenario, new Map([[1, attacker], [2, target]]), new Map<number, ItemDefinition>(), new Map<number, RuneDefinition>());
  assert.equal(result.steps[0].shieldAbsorbed, 50);
  assert.equal(result.steps[0].healthDamage, 150);
  assert.equal(result.lethalStepId, "two");
  assert.equal(result.steps.length, 2);
});

test("deterministic misses do not advance attack triggers or deal damage", () => {
  const attacker = champion(1, "Fixture");
  const target = champion(2, "Target");
  const scenario = defaultScenario("test");
  scenario.attacker.championId = 1;
  scenario.defender.championId = 2;
  scenario.combo = [{ id: "miss", kind: "attack", key: "AA", delay: 0, enabled: true, outcome: "miss", parameters: {} }];
  const result = simulate(scenario, new Map([[1, attacker], [2, target]]), new Map<number, ItemDefinition>(), new Map<number, RuneDefinition>());
  assert.equal(result.steps[0].preMitigation.total, 0);
  assert.equal(result.steps[0].healthDamage, 0);
});

test("combo controls and parameters follow the selected champion", () => {
  const poppy = champion(78, "Poppy");
  poppy.spells = [
    poppy.spells[0],
    { ...poppy.spells[0], key: "E", name: "Heroic Charge" },
    { ...poppy.spells[0], key: "R", name: "Keeper's Verdict" },
  ];
  const olaf = { ...poppy, id: 2, alias: "Olaf", name: "Olaf" };
  const combo = defaultScenario("test").combo;
  const poppyE = combo.find((entry) => entry.key === "E")!;
  const olafE = { ...poppyE, parameters: { wallCollision: true } };

  assert.deepEqual(getActionControls(poppy, poppyE), ["wallCollision"]);
  assert.deepEqual(getActionControls(olaf, olafE), []);

  const sanitized = sanitizeComboForChampion(combo, olaf);
  assert.equal(sanitized.some((entry) => entry.key === "Q2"), false);
  assert.deepEqual(sanitized.find((entry) => entry.key === "E")?.parameters, {});
  assert.deepEqual(sanitized.find((entry) => entry.key === "R")?.parameters, {});
});
