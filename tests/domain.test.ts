import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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

const snapshotChampion = (id: number) => JSON.parse(
  readFileSync(new URL(`../public/data/16.16/champions/${id}.json`, import.meta.url), "utf8"),
) as ChampionDefinition;

function duel(attackerId: number, defenderId: number) {
  const scenario = defaultScenario("16.16");
  scenario.attacker.championId = attackerId;
  scenario.defender.championId = defenderId;
  scenario.attacker.level = 1;
  scenario.defender.level = 1;
  scenario.attacker.itemIds = [];
  scenario.attacker.runeIds = [];
  scenario.attacker.shardIds = [null, null, null];
  scenario.defender.itemIds = [];
  scenario.defender.runeIds = [];
  scenario.defender.shardIds = [null, null, null];
  scenario.attacker.overrides = { attackDamage: 100, abilityPower: 0 };
  scenario.defender.overrides = { maxHealth: 5000, armor: 0, magicResist: 0 };
  scenario.settings.continueAfterLethal = true;
  return scenario;
}

const action = (
  id: string,
  kind: "attack" | "ability" | "wait",
  key: string,
  delay = 0,
  parameters: Record<string, boolean | number | string | undefined> = {},
) => ({ id, kind, key, delay, enabled: true, outcome: "normal" as const, parameters });

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

test("formula interpreter preserves selected-rank and target-stat expressions", () => {
  const value = evaluateFormula({
    type: "max",
    nodes: [
      { type: "ranked", values: [50, 65, 80, 95, 110] },
      { type: "product", nodes: [{ type: "ranked", values: [0.06, 0.07, 0.08, 0.09, 0.1] }, { type: "target-stat", key: "maxHealth" }] },
    ],
  }, { spellRank: 5, championLevel: 18, effects: {}, named: {}, stats: {}, targetStats: { maxHealth: 2000 }, conditions: {} });
  assert.equal(value, 200);
});

test("formula interpreter handles live champion-level interpolation and breakpoints", () => {
  const context = { spellRank: 1, championLevel: 6, effects: {}, named: {}, stats: {}, conditions: {} };
  assert.equal(evaluateFormula({ type: "level-interpolation", start: 0, end: 180 }, context), 60);
  assert.equal(evaluateFormula({
    type: "level-breakpoints",
    base: 10,
    initialPerLevel: 2,
    breakpoints: [{ level: 4, perLevel: 5 }],
  }, context), 29);
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

test("expected critical strikes are analytically weighted while deterministic outcomes stay explicit", () => {
  const attacker = champion(1, "Fixture");
  const target = champion(2, "Target");
  const scenario = duel(1, 2);
  scenario.attacker.overrides = { attackDamage: 100, critChance: 50, critDamage: 200 };
  scenario.combo = [action("aa", "attack", "AA")];
  scenario.randomnessMode = "expected";
  assert.equal(simulate(scenario, new Map([[1, attacker], [2, target]]), new Map(), new Map()).steps[0].preMitigation.physical, 150);
  scenario.randomnessMode = "deterministic";
  scenario.combo[0].outcome = "crit";
  assert.equal(simulate(scenario, new Map([[1, attacker], [2, target]]), new Map(), new Map()).steps[0].preMitigation.physical, 200);
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

test("Vayne Tumble uses the selected rank, arms the next attack, and expires", () => {
  const vayne = snapshotChampion(67);
  const target = champion(900, "Target");
  const champions = new Map([[67, vayne], [900, target]]);
  const rankOne = duel(67, 900);
  rankOne.attacker.abilityRanks.Q = 1;
  rankOne.combo = [action("q", "ability", "Q"), action("attack", "attack", "AA", 0.1)];
  const first = simulate(rankOne, champions, new Map(), new Map());
  assert.equal(first.steps[0].preMitigation.total, 0);
  assert.equal(first.steps[1].preMitigation.physical, 175);

  const rankFive = structuredClone(rankOne);
  rankFive.attacker.abilityRanks.Q = 5;
  const fifth = simulate(rankFive, champions, new Map(), new Map());
  assert.equal(fifth.steps[1].preMitigation.physical, 215);

  const expired = structuredClone(rankFive);
  expired.combo[1].delay = 3;
  const afterExpiry = simulate(expired, champions, new Map(), new Map());
  assert.equal(afterExpiry.steps[1].preMitigation.physical, 100);
  assert.ok(afterExpiry.steps[1].triggers.some((trigger) => trigger.label === "Tumble Expired"));
});

test("Silver Bolts procs every third uninterrupted hit and respects minimum damage", () => {
  const vayne = snapshotChampion(67);
  const target = champion(900, "Target");
  const champions = new Map([[67, vayne], [900, target]]);
  const scenario = duel(67, 900);
  scenario.attacker.abilityRanks.W = 1;
  scenario.defender.overrides.maxHealth = 2000;
  scenario.combo = Array.from({ length: 6 }, (_, index) => action(`aa-${index}`, "attack", "AA", index ? 0.1 : 0));
  const result = simulate(scenario, champions, new Map(), new Map());
  assert.equal(result.steps[2].preMitigation.true, 120);
  assert.equal(result.steps[5].preMitigation.true, 120);
  assert.equal(result.totals.preMitigation.true, 240);

  const minimum = duel(67, 900);
  minimum.attacker.abilityRanks.W = 1;
  minimum.defender.overrides.maxHealth = 500;
  minimum.combo = [action("one", "attack", "AA"), action("two", "attack", "AA", 0.1), action("three", "attack", "AA", 0.1)];
  assert.equal(simulate(minimum, champions, new Map(), new Map()).steps[2].preMitigation.true, 50);

  const expired = duel(67, 900);
  expired.attacker.abilityRanks.W = 1;
  expired.combo = [action("one", "attack", "AA"), action("two", "attack", "AA", 0.1), action("wait", "wait", "WAIT", 3.5), action("three", "attack", "AA", 0.1)];
  const expiredResult = simulate(expired, champions, new Map(), new Map());
  assert.equal(expiredResult.steps[3].preMitigation.true, 0);
  assert.ok(expiredResult.steps[2].triggers.some((trigger) => trigger.label === "Silver Bolts Expired"));
});

test("Condemn applies bonus AD scaling, terrain damage, and a Silver Bolts stack", () => {
  const vayne = snapshotChampion(67);
  const target = champion(900, "Target");
  const champions = new Map([[67, vayne], [900, target]]);
  const normal = duel(67, 900);
  normal.attacker.abilityRanks.E = 1;
  normal.attacker.abilityRanks.W = 1;
  normal.attacker.overrides.attackDamage = 160;
  normal.combo = [action("e", "ability", "E", 0, { wallCollision: false })];
  const normalResult = simulate(normal, champions, new Map(), new Map());

  const terrain = structuredClone(normal);
  terrain.combo[0].parameters.wallCollision = true;
  const terrainResult = simulate(terrain, champions, new Map(), new Map());
  assert.ok(Math.abs(terrainResult.steps[0].preMitigation.physical - normalResult.steps[0].preMitigation.physical * 2.5) < 0.00001);
  assert.ok(normalResult.steps[0].triggers.some((trigger) => trigger.label === "Silver Bolts"));

  const proc = structuredClone(normal);
  proc.combo = [action("aa-one", "attack", "AA"), action("aa-two", "attack", "AA", 0.1), action("e", "ability", "E", 0.1, { wallCollision: false })];
  assert.ok(simulate(proc, champions, new Map(), new Map()).steps[2].preMitigation.true > 0);
});

test("Final Hour changes later attacks and Tumble cooldown until expiry", () => {
  const vayne = snapshotChampion(67);
  const target = champion(900, "Target");
  const champions = new Map([[67, vayne], [900, target]]);
  const active = duel(67, 900);
  active.attacker.abilityRanks.R = 1;
  active.combo = [action("r", "ability", "R"), action("aa", "attack", "AA", 0.1)];
  const activeResult = simulate(active, champions, new Map(), new Map());
  assert.equal(activeResult.steps[1].preMitigation.physical, 135);

  const expired = structuredClone(active);
  expired.combo = [action("r", "ability", "R"), action("wait", "wait", "WAIT", 8), action("aa", "attack", "AA", 0.1)];
  assert.equal(simulate(expired, champions, new Map(), new Map()).steps[2].preMitigation.physical, 100);

  const cooldown = duel(67, 900);
  cooldown.attacker.abilityRanks.Q = 5;
  cooldown.attacker.abilityRanks.R = 3;
  cooldown.combo = [action("r", "ability", "R"), action("q1", "ability", "Q"), action("wait", "wait", "WAIT", 1), action("q2", "ability", "Q")];
  const cooldownResult = simulate(cooldown, champions, new Map(), new Map());
  assert.equal(cooldownResult.steps[3].warnings.some((warning) => warning.includes("before its modeled cooldown")), false);
});

test("Olaf Ragnarok supplies passive defenses, dynamic AD, and hit extensions", () => {
  const olaf = snapshotChampion(2);
  const target = champion(900, "Target");
  const champions = new Map([[2, olaf], [900, target]]);
  const scenario = duel(2, 900);
  scenario.attacker.abilityRanks.R = 1;
  scenario.combo = [action("r", "ability", "R"), action("aa-one", "attack", "AA", 2.9), action("wait", "wait", "WAIT", 2), action("aa-two", "attack", "AA")];
  const result = simulate(scenario, champions, new Map(), new Map());
  assert.equal(result.attackerStats.armor, olaf.stats.armor + 10);
  assert.equal(result.attackerStats.magicResist, olaf.stats.magicResist + 10);
  assert.equal(result.steps[1].preMitigation.physical, 135);
  assert.equal(result.steps[3].preMitigation.physical, 135);
  assert.ok(result.steps[1].triggers.some((trigger) => trigger.label === "Ragnarok Extended"));
});

test("Abyssal Mask amplifies only magic damage while its range condition is enabled", () => {
  const caster = champion(1, "Caster");
  const target = champion(900, "Target");
  const champions = new Map([[1, caster], [900, target]]);
  const mask: ItemDefinition = {
    id: 8020,
    name: "Abyssal Mask",
    description: "Unmake",
    icon: "",
    price: 2650,
    classification: "modeled",
    stats: { health: 0, mana: 0, attackDamage: 0, abilityPower: 0, armor: 0, magicResist: 0, attackSpeedPercent: 0, critChancePercent: 0, moveSpeedPercent: 0, lethality: 0, flatMagicPen: 0 },
  };
  const scenario = duel(1, 900);
  scenario.attacker.itemIds = [8020];
  scenario.attacker.abilityRanks.Q = 1;
  scenario.attacker.conditions = { abyssalMaskInRange: true };
  scenario.combo = [action("q", "ability", "Q")];
  const inRange = simulate(scenario, champions, new Map([[8020, mask]]), new Map());
  assert.ok(Math.abs(inRange.steps[0].preMitigation.magic - 112) < 0.00001);

  scenario.attacker.conditions.abyssalMaskInRange = false;
  assert.equal(simulate(scenario, champions, new Map([[8020, mask]]), new Map()).steps[0].preMitigation.magic, 100);
  scenario.attacker.conditions.abyssalMaskInRange = true;
  caster.spells[0].damageType = "physical";
  assert.equal(simulate(scenario, champions, new Map([[8020, mask]]), new Map()).steps[0].preMitigation.physical, 100);
  caster.spells[0].damageType = "true";
  assert.equal(simulate(scenario, champions, new Map([[8020, mask]]), new Map()).steps[0].preMitigation.true, 100);
});

test("Conqueror applies melee and ranged stacks only to later actions and expires", () => {
  const vayne = snapshotChampion(67);
  const olaf = snapshotChampion(2);
  const target = champion(900, "Target");
  const conqueror: RuneDefinition = {
    id: 8010,
    name: "Conqueror",
    description: "Adaptive force",
    icon: "",
    classification: "modeled",
    styleId: 8000,
    styleName: "Precision",
    slot: 0,
    slotType: "kKeyStone",
  };
  const runes = new Map([[8010, conqueror]]);
  const champions = new Map([[67, vayne], [2, olaf], [900, target]]);
  const ranged = duel(67, 900);
  ranged.attacker.runeIds = [8010];
  ranged.combo = [action("one", "attack", "AA"), action("two", "attack", "AA", 0.1)];
  const rangedResult = simulate(ranged, champions, new Map(), runes);
  assert.equal(rangedResult.steps[0].preMitigation.physical, 100);
  assert.ok(Math.abs(rangedResult.steps[1].preMitigation.physical - 101.08) < 0.00001);

  const capped = duel(67, 900);
  capped.attacker.runeIds = [8010];
  capped.combo = Array.from({ length: 13 }, (_, index) => action(`aa-${index}`, "attack", "AA", index ? 0.1 : 0));
  const cappedResult = simulate(capped, champions, new Map(), runes);
  assert.ok(Math.abs(cappedResult.steps[12].preMitigation.physical - 112.96) < 0.00001);

  const melee = duel(2, 900);
  melee.attacker.runeIds = [8010];
  melee.combo = [action("one", "attack", "AA"), action("two", "attack", "AA", 0.1), action("wait", "wait", "WAIT", 5), action("three", "attack", "AA")];
  const meleeResult = simulate(melee, champions, new Map(), runes);
  assert.ok(Math.abs(meleeResult.steps[1].preMitigation.physical - 102.16) < 0.00001);
  assert.equal(meleeResult.steps[3].preMitigation.physical, 100);
  assert.ok(meleeResult.steps[2].triggers.some((trigger) => trigger.label === "Conqueror Expired"));

  const caster = champion(1, "Caster");
  champions.set(1, caster);
  const adaptiveAp = duel(1, 900);
  adaptiveAp.attacker.overrides = { attackDamage: 60, abilityPower: 100 };
  adaptiveAp.attacker.runeIds = [8010];
  adaptiveAp.attacker.abilityRanks.Q = 1;
  adaptiveAp.combo = [action("q-one", "ability", "Q"), action("q-two", "ability", "Q", 0.1)];
  const adaptiveApResult = simulate(adaptiveAp, champions, new Map(), runes);
  assert.ok(Math.abs(adaptiveApResult.steps[1].preMitigation.magic - 162.16) < 0.00001);
});

test("scheduled rune packets resolve after their delay and respect the burst window", () => {
  const caster = champion(1, "Caster");
  const target = champion(900, "Target");
  const scorch: RuneDefinition = {
    id: 8237,
    name: "Scorch",
    description: "Delayed magic damage",
    icon: "",
    classification: "modeled",
    styleId: 8200,
    styleName: "Sorcery",
    slot: 3,
    slotType: "kSlot",
  };
  const scenario = duel(1, 900);
  scenario.attacker.abilityRanks.Q = 1;
  scenario.attacker.runeIds = [8237];
  scenario.combo = [action("q", "ability", "Q")];
  const indexes = new Map([[1, caster], [900, target]]);
  const resolved = simulate(scenario, indexes, new Map(), new Map([[8237, scorch]]));
  assert.equal(resolved.steps.length, 2);
  assert.equal(resolved.steps[0].preMitigation.magic, 100);
  assert.equal(resolved.steps[1].label, "Scorch");
  assert.equal(resolved.steps[1].timestamp, 1);
  assert.equal(resolved.steps[1].preMitigation.magic, 20);

  scenario.settings.resolvePendingDamage = false;
  assert.equal(simulate(scenario, indexes, new Map(), new Map([[8237, scorch]])).steps.length, 1);
});
