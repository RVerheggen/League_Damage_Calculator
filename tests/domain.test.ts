import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { evaluateFormula } from "../src/domain/formula";
import { damageVector, type ChampionDefinition, type EffectProgramDefinition, type ItemDefinition, type ResolvedStats, type RuneDefinition, type StepTrigger } from "../src/domain/model";
import { createEffectRuntimeState, executeEffectEvent } from "../src/domain/effect-runtime";
import { validateActionDefinitions, validateEffectPrograms } from "../src/domain/effect-program-validation";
import { effectiveResistance, mitigateDamage, resistanceMultiplier } from "../src/domain/mitigation";
import { decodeScenario, encodeScenario, hasIncompatibleScenario } from "../src/domain/scenario";
import { simulate } from "../src/domain/simulate";
import { growthMultiplier, resolveStats } from "../src/domain/stats";
import { defaultScenario } from "../src/features/calculator/defaults";
import { getActionControls, sanitizeComboForChampion } from "../src/features/calculator/action-controls";
import { reviewRosterSignature, validateReviewCatalog } from "../scripts/catalog-validation";

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
  actions: [
    { id: `champion:${id}:AA:attack`, sourceId: `champion:${id}:AA`, kind: "attack", key: "AA", label: "Basic Attack", defaultDelay: 0.15, parameters: [] },
    { id: `champion:${id}:Q:cast`, sourceId: `champion:${id}:Q`, kind: "ability", key: "Q", label: "Fixture Q", defaultDelay: 0.15, parameters: [] },
  ],
  inputs: [],
  effectPrograms: [],
});

const snapshotChampion = (id: number) => JSON.parse(
  readFileSync(new URL(`../public/data/16.16/champions/${id}.json`, import.meta.url), "utf8"),
) as ChampionDefinition;

const snapshotItems = () => JSON.parse(readFileSync(new URL("../public/data/16.16/items.json", import.meta.url), "utf8")) as ItemDefinition[];
const snapshotRunes = () => JSON.parse(readFileSync(new URL("../public/data/16.16/runes.json", import.meta.url), "utf8")) as RuneDefinition[];

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
) => ({ id, actionId: `unresolved:${key}`, kind, key, delay, enabled: true, outcome: "normal" as const, parameters });

const nestedTriggers = (triggers: StepTrigger[]): StepTrigger[] => triggers.flatMap((trigger) => [trigger, ...nestedTriggers(trigger.children ?? [])]);
const closeTo = (actual: number, expected: number, tolerance = 0.001) => assert.ok(Math.abs(actual - expected) < tolerance, `${actual} is not within ${tolerance} of ${expected}`);
const damageCloseTo = (actual: ReturnType<typeof damageVector>, expected: ReturnType<typeof damageVector>) => {
  closeTo(actual.physical, expected.physical);
  closeTo(actual.magic, expected.magic);
  closeTo(actual.true, expected.true);
  closeTo(actual.total, expected.total);
};

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
  assert.ok(Math.abs(evaluateFormula({ type: "level-interpolation", start: 0, end: 180 }, context) - 900 / 17) < 0.00001);
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
    staticModifiers: [{ stat: "attackDamage", mode: "adaptive", values: [5.4, 9] }],
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
    { id: "one", actionId: "unresolved:AA", kind: "attack", key: "AA", delay: 0, enabled: true, outcome: "normal", parameters: {} },
    { id: "two", actionId: "unresolved:Q", kind: "ability", key: "Q", delay: 0.1, enabled: true, outcome: "normal", parameters: {} },
    { id: "three", actionId: "unresolved:AA", kind: "attack", key: "AA", delay: 0.1, enabled: true, outcome: "normal", parameters: {} },
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
  scenario.combo = [{ id: "miss", actionId: "unresolved:AA", kind: "attack", key: "AA", delay: 0, enabled: true, outcome: "miss", parameters: {} }];
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

test("combo controls and parameters follow generated action definitions", () => {
  const poppy = snapshotChampion(78);
  const olaf = snapshotChampion(2);
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

test("reviewed empowered attacks arm on cast and preserve every rank", () => {
  const target = champion(900, "Target");
  const fixtures = [
    { id: 24, key: "W", rankOne: damageVector(100, 50, 0), rankFive: damageVector(100, 250, 0) },
    { id: 122, key: "W", rankOne: damageVector(140, 0, 0), rankFive: damageVector(160, 0, 0) },
    { id: 86, key: "Q", rankOne: damageVector(180, 0, 0), rankFive: damageVector(300, 0, 0) },
    { id: 53, key: "E", rankOne: damageVector(200, 0, 0), rankFive: damageVector(225, 0, 0) },
    { id: 89, key: "Q", rankOne: damageVector(100, 10, 0), rankFive: damageVector(100, 140, 0) },
  ];

  for (const fixture of fixtures) {
    const attacker = snapshotChampion(fixture.id);
    const champions = new Map([[fixture.id, attacker], [900, target]]);
    const scenario = duel(fixture.id, 900);
    scenario.attacker.abilityRanks[fixture.key] = 1;
    scenario.combo = [action("cast", "ability", fixture.key), action("attack", "attack", "AA", 0.1)];
    const rankOne = simulate(scenario, champions, new Map(), new Map());
    assert.equal(rankOne.steps[0].preMitigation.total, 0, `${attacker.name} cast damage`);
    damageCloseTo(rankOne.steps[1].preMitigation, fixture.rankOne);
    assert.ok(nestedTriggers(rankOne.steps[0].triggers).some((trigger) => trigger.kind === "state" && trigger.label.endsWith("Armed")));
    assert.ok(nestedTriggers(rankOne.steps[1].triggers).some((trigger) => trigger.kind === "damage" && trigger.label.endsWith("Bonus Damage")));
    assert.ok(nestedTriggers(rankOne.steps[1].triggers).some((trigger) => trigger.kind === "state" && trigger.label.endsWith("Consumed")));

    const rankFiveScenario = structuredClone(scenario);
    rankFiveScenario.attacker.abilityRanks[fixture.key] = 5;
    rankFiveScenario.attacker.overrides.abilityPower = 100;
    const rankFive = simulate(rankFiveScenario, champions, new Map(), new Map());
    damageCloseTo(rankFive.steps[1].preMitigation, fixture.rankFive);
  }
});

test("empowered attacks survive misses, expire on time, and replace instead of stacking", () => {
  const garen = snapshotChampion(86);
  const target = champion(900, "Target");
  const champions = new Map([[86, garen], [900, target]]);

  const missed = duel(86, 900);
  missed.attacker.abilityRanks.Q = 1;
  missed.combo = [
    action("q", "ability", "Q"),
    { ...action("miss", "attack", "AA", 0.1), outcome: "miss" },
    action("hit", "attack", "AA", 0.1),
  ];
  const missedResult = simulate(missed, champions, new Map(), new Map());
  assert.equal(missedResult.steps[1].preMitigation.total, 0);
  assert.equal(missedResult.steps[2].preMitigation.physical, 180);
  assert.equal(nestedTriggers(missedResult.steps[1].triggers).some((trigger) => trigger.label.endsWith("Consumed")), false);

  const expired = duel(86, 900);
  expired.attacker.abilityRanks.Q = 1;
  expired.combo = [action("q", "ability", "Q"), action("wait", "wait", "WAIT", 4.5), action("hit", "attack", "AA", 0.1)];
  const expiredResult = simulate(expired, champions, new Map(), new Map());
  assert.equal(expiredResult.steps[2].preMitigation.physical, 100);
  assert.ok(nestedTriggers(expiredResult.steps[1].triggers).some((trigger) => trigger.label === "Decisive Strike Expired"));

  const replaced = duel(86, 900);
  replaced.attacker.abilityRanks.Q = 1;
  replaced.combo = [action("q-one", "ability", "Q"), action("q-two", "ability", "Q", 0.1), action("hit", "attack", "AA", 0.1)];
  const replacedResult = simulate(replaced, champions, new Map(), new Map());
  assert.equal(replacedResult.steps[2].preMitigation.physical, 180);
  assert.equal(nestedTriggers(replacedResult.steps[2].triggers).filter((trigger) => trigger.label === "Decisive Strike - Bonus Damage").length, 1);
});

test("Jax Empower consumes on Leap Strike and only on a connected hit", () => {
  const jax = snapshotChampion(24);
  const target = champion(900, "Target");
  const champions = new Map([[24, jax], [900, target]]);
  const scenario = duel(24, 900);
  scenario.attacker.abilityRanks.Q = 1;
  scenario.attacker.abilityRanks.W = 1;
  scenario.combo = [action("w", "ability", "W"), action("q", "ability", "Q", 0.1), action("attack", "attack", "AA", 0.1)];
  const result = simulate(scenario, champions, new Map(), new Map());
  assert.equal(result.steps[1].preMitigation.physical, 165);
  assert.equal(result.steps[1].preMitigation.magic, 50);
  assert.equal(result.steps[2].preMitigation.magic, 0);

  const missed = structuredClone(scenario);
  missed.combo[1].outcome = "miss";
  const missedResult = simulate(missed, champions, new Map(), new Map());
  assert.equal(missedResult.steps[1].preMitigation.total, 0);
  assert.equal(missedResult.steps[2].preMitigation.magic, 50);
});

test("Crippling Strike shares the attack critical modifier while other bonus packets do not", () => {
  const target = champion(900, "Target");
  const darius = snapshotChampion(122);
  const garen = snapshotChampion(86);
  const blitzcrank = snapshotChampion(53);
  const champions = new Map([[122, darius], [86, garen], [53, blitzcrank], [900, target]]);

  const criticalDarius = duel(122, 900);
  criticalDarius.attacker.abilityRanks.W = 1;
  criticalDarius.attacker.overrides.critDamage = 200;
  criticalDarius.combo = [action("w", "ability", "W"), { ...action("attack", "attack", "AA", 0.1), outcome: "crit" }];
  closeTo(simulate(criticalDarius, champions, new Map(), new Map()).steps[1].preMitigation.physical, 280);

  criticalDarius.randomnessMode = "expected";
  criticalDarius.attacker.overrides.critChance = 50;
  closeTo(simulate(criticalDarius, champions, new Map(), new Map()).steps[1].preMitigation.physical, 210);

  const criticalGaren = duel(86, 900);
  criticalGaren.attacker.abilityRanks.Q = 1;
  criticalGaren.attacker.overrides.critDamage = 200;
  criticalGaren.combo = [action("q", "ability", "Q"), { ...action("attack", "attack", "AA", 0.1), outcome: "crit" }];
  closeTo(simulate(criticalGaren, champions, new Map(), new Map()).steps[1].preMitigation.physical, 280);

  const criticalBlitzcrank = duel(53, 900);
  criticalBlitzcrank.attacker.abilityRanks.E = 1;
  criticalBlitzcrank.attacker.overrides.critDamage = 200;
  criticalBlitzcrank.combo = [action("e", "ability", "E"), { ...action("attack", "attack", "AA", 0.1), outcome: "crit" }];
  closeTo(simulate(criticalBlitzcrank, champions, new Map(), new Map()).steps[1].preMitigation.physical, 300);
});

test("Power Fist cooldown begins when its armed state resolves", () => {
  const blitzcrank = snapshotChampion(53);
  const target = champion(900, "Target");
  const champions = new Map([[53, blitzcrank], [900, target]]);
  const consumed = duel(53, 900);
  consumed.attacker.abilityRanks.E = 1;
  consumed.combo = [
    action("e", "ability", "E"),
    action("wait-before-hit", "wait", "WAIT", 4),
    action("attack", "attack", "AA"),
    action("wait-for-cooldown", "wait", "WAIT", 7),
    action("e-ready", "ability", "E"),
  ];
  const consumedResult = simulate(consumed, champions, new Map(), new Map());
  assert.equal(consumedResult.steps[4].warnings.some((warning) => warning.includes("before its modeled cooldown")), false);

  const early = structuredClone(consumed);
  early.combo[3].delay = 6.9;
  const earlyResult = simulate(early, champions, new Map(), new Map());
  assert.ok(earlyResult.steps[4].warnings.some((warning) => warning.includes("0.10 seconds before its modeled cooldown ended")));

  const expired = duel(53, 900);
  expired.attacker.abilityRanks.E = 1;
  expired.combo = [action("e", "ability", "E"), action("expire", "wait", "WAIT", 5), action("cooldown", "wait", "WAIT", 7), action("e-ready", "ability", "E")];
  const expiredResult = simulate(expired, champions, new Map(), new Map());
  assert.ok(nestedTriggers(expiredResult.steps[1].triggers).some((trigger) => trigger.label === "Power Fist Expired"));
  assert.equal(expiredResult.steps[3].warnings.some((warning) => warning.includes("before its modeled cooldown")), false);
});

test("empowered attack child packets expose their own mitigated damage", () => {
  const leona = snapshotChampion(89);
  const target = champion(900, "Target");
  const scenario = duel(89, 900);
  scenario.attacker.abilityRanks.Q = 1;
  scenario.defender.overrides.armor = 100;
  scenario.defender.overrides.magicResist = 100;
  scenario.combo = [action("q", "ability", "Q"), action("attack", "attack", "AA", 0.1)];
  const result = simulate(scenario, new Map([[89, leona], [900, target]]), new Map(), new Map());
  assert.equal(result.steps[1].postMitigation.physical, 50);
  assert.equal(result.steps[1].postMitigation.magic, 5);
  const child = nestedTriggers(result.steps[1].triggers).find((trigger) => trigger.label === "Shield of Daybreak - Bonus Damage");
  assert.equal(child?.preMitigation.magic, 10);
  assert.equal(child?.postMitigation.magic, 5);
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
  closeTo(fifth.steps[1].preMitigation.physical, 215);

  const expired = structuredClone(rankFive);
  expired.combo[1].delay = 3;
  const afterExpiry = simulate(expired, champions, new Map(), new Map());
  assert.equal(afterExpiry.steps[1].preMitigation.physical, 100);
  assert.ok(nestedTriggers(afterExpiry.steps[1].triggers).some((trigger) => trigger.label === "Tumble Expired"));
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
  assert.ok(nestedTriggers(expiredResult.steps[2].triggers).some((trigger) => trigger.label === "Silver Bolts Expired"));
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
  assert.ok(nestedTriggers(normalResult.steps[0].triggers).some((trigger) => trigger.label === "Silver Bolts Stack"));

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
  assert.ok(nestedTriggers(result.steps[1].triggers).some((trigger) => trigger.label === "Ragnarok Extended"));
});

test("Abyssal Mask amplifies only magic damage while its range condition is enabled", () => {
  const caster = champion(1, "Caster");
  const target = champion(900, "Target");
  const champions = new Map([[1, caster], [900, target]]);
  const mask = snapshotItems().find((item) => item.id === 8020)!;
  const scenario = duel(1, 900);
  scenario.attacker.itemIds = [8020];
  scenario.attacker.abilityRanks.Q = 1;
  scenario.attacker.inputs = { "item:8020:within-700": true };
  scenario.combo = [action("q", "ability", "Q")];
  const inRange = simulate(scenario, champions, new Map([[8020, mask]]), new Map());
  assert.ok(Math.abs(inRange.steps[0].preMitigation.magic - 112) < 0.00001);

  scenario.attacker.inputs["item:8020:within-700"] = false;
  assert.equal(simulate(scenario, champions, new Map([[8020, mask]]), new Map()).steps[0].preMitigation.magic, 100);
  scenario.attacker.inputs["item:8020:within-700"] = true;
  caster.spells[0].damageType = "physical";
  assert.equal(simulate(scenario, champions, new Map([[8020, mask]]), new Map()).steps[0].preMitigation.physical, 100);
  caster.spells[0].damageType = "true";
  assert.equal(simulate(scenario, champions, new Map([[8020, mask]]), new Map()).steps[0].preMitigation.true, 100);
});

test("Conqueror applies melee and ranged stacks only to later actions and expires", () => {
  const vayne = snapshotChampion(67);
  const olaf = snapshotChampion(2);
  const target = champion(900, "Target");
  const conqueror = snapshotRunes().find((rune) => rune.id === 8010)!;
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
  assert.ok(nestedTriggers(meleeResult.steps[2].triggers).some((trigger) => trigger.label === "Conqueror Expired"));

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
  const scorch = snapshotRunes().find((rune) => rune.id === 8237)!;
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

test("Akshan ordered hits preserve leftover stacks, shield lockout, expiry, and typed double-hit abilities", () => {
  const akshan = snapshotChampion(166);
  const target = champion(900, "Target");
  const champions = new Map([[166, akshan], [900, target]]);
  const attacks = duel(166, 900);
  attacks.combo = [
    action("one", "attack", "AA", 0, { secondShot: true }),
    action("two", "attack", "AA", 0.1, { secondShot: true }),
    action("three", "attack", "AA", 0.1, { secondShot: true }),
  ];
  const result = simulate(attacks, champions, new Map(), new Map());
  assert.equal(result.steps[0].preMitigation.physical, 150);
  assert.equal(result.steps[0].preMitigation.magic, 0);
  assert.equal(result.steps[1].preMitigation.magic, 15);
  assert.equal(result.steps[2].preMitigation.magic, 15);
  assert.equal(nestedTriggers(result.steps[1].triggers).filter((trigger) => trigger.label === "Dirty Fighting Shield").length, 1);
  assert.equal(nestedTriggers(result.steps[2].triggers).filter((trigger) => trigger.label === "Dirty Fighting Shield").length, 0);

  const doubleHit = duel(166, 900);
  doubleHit.attacker.abilityRanks.Q = 1;
  doubleHit.combo = [
    action("q", "ability", "Q", 0, { hitCount: 2 }),
    action("attack", "attack", "AA", 0.1, { secondShot: false }),
  ];
  const doubleHitResult = simulate(doubleHit, champions, new Map(), new Map());
  assert.ok(Math.abs(doubleHitResult.steps[0].preMitigation.physical - 230) < 0.001);
  assert.equal(doubleHitResult.steps[1].preMitigation.magic, 15);

  const expired = duel(166, 900);
  expired.combo = [
    action("attack", "attack", "AA", 0, { secondShot: false }),
    action("wait", "wait", "WAIT", 4.5),
    action("after", "attack", "AA", 0, { secondShot: false }),
  ];
  const expiredResult = simulate(expired, champions, new Map(), new Map());
  assert.equal(expiredResult.steps[2].preMitigation.magic, 0);
  assert.ok(nestedTriggers(expiredResult.steps[1].triggers).some((trigger) => trigger.label === "Dirty Fighting Expired"));
});

test("Diana Moonsilver Blade stacks, consumes, expires, and triples the level-scaled attack speed bonus after casting", () => {
  const diana = snapshotChampion(131);
  const target = champion(900, "Target");
  const champions = new Map([[131, diana], [900, target]]);
  const proc = duel(131, 900);
  proc.attacker.overrides.abilityPower = 100;
  proc.combo = [action("one", "attack", "AA"), action("two", "attack", "AA", 0.1), action("three", "attack", "AA", 0.1)];
  const procResult = simulate(proc, champions, new Map(), new Map());
  assert.equal(procResult.steps[2].preMitigation.magic, 70);
  assert.ok(nestedTriggers(procResult.steps[2].triggers).some((trigger) => trigger.label === "Moonsilver Blade Consumed"));
  assert.ok(Math.abs((procResult.attackerStats.attackSpeed ?? 0) - diana.stats.attackSpeed * 1.15) < 0.00001);

  const cast = duel(131, 900);
  cast.attacker.abilityRanks.Q = 1;
  cast.combo = [action("q", "ability", "Q")];
  const castResult = simulate(cast, champions, new Map(), new Map());
  assert.ok(Math.abs((castResult.attackerStats.attackSpeed ?? 0) - diana.stats.attackSpeed * 1.45) < 0.00001);

  const expired = duel(131, 900);
  expired.combo = [action("one", "attack", "AA"), action("two", "attack", "AA", 0.1), action("wait", "wait", "WAIT", 5), action("three", "attack", "AA")];
  const expiredResult = simulate(expired, champions, new Map(), new Map());
  assert.equal(expiredResult.steps[3].preMitigation.magic, 0);
  assert.ok(nestedTriggers(expiredResult.steps[2].triggers).some((trigger) => trigger.label === "Moonsilver Blade Expired"));
});

test("Varus Blighted Quiver applies on-hit damage, consumes isolated marks, scales Q charge, and reduces cooldown", () => {
  const varus = snapshotChampion(110);
  const target = champion(900, "Target");
  const champions = new Map([[110, varus], [900, target]]);
  const scenario = duel(110, 900);
  scenario.attacker.abilityRanks.W = 1;
  scenario.attacker.abilityRanks.Q = 1;
  scenario.combo = [
    action("one", "attack", "AA"),
    action("two", "attack", "AA", 0.1),
    action("three", "attack", "AA", 0.1),
    action("q", "ability", "Q", 0.1, { chargePercent: 100 }),
    action("cooldown", "wait", "WAIT", 6.65),
    action("q-ready", "ability", "Q", 0, { chargePercent: 0 }),
  ];
  const result = simulate(scenario, champions, new Map(), new Map());
  closeTo(result.steps[0].preMitigation.magic, 19);
  assert.ok(Math.abs(result.steps[3].preMitigation.physical - 200.0004) < 0.01);
  closeTo(result.steps[3].preMitigation.magic, 675);
  assert.ok(nestedTriggers(result.steps[3].triggers).some((trigger) => trigger.label === "Blight Consumed"));
  assert.equal(result.steps[5].warnings.some((warning) => warning.includes("before its modeled cooldown")), false);

  const expired = duel(110, 900);
  expired.attacker.abilityRanks.W = 1;
  expired.attacker.abilityRanks.Q = 1;
  expired.combo = [action("one", "attack", "AA"), action("two", "attack", "AA", 0.1), action("three", "attack", "AA", 0.1), action("wait", "wait", "WAIT", 6), action("q", "ability", "Q", 0, { chargePercent: 0 })];
  const expiredResult = simulate(expired, champions, new Map(), new Map());
  assert.equal(expiredResult.steps[4].preMitigation.magic, 0);
  assert.ok(nestedTriggers(expiredResult.steps[3].triggers).some((trigger) => trigger.label === "Blight Expired"));
});

test("Kog'Maw Bio-Arcane Barrage applies ranked maximum-health on-hit damage, survives misses, mitigates, and expires", () => {
  const kogmaw = snapshotChampion(96);
  const target = champion(900, "Target");
  const champions = new Map([[96, kogmaw], [900, target]]);
  const scenario = duel(96, 900);
  scenario.attacker.abilityRanks.W = 1;
  scenario.attacker.overrides.abilityPower = 100;
  scenario.defender.overrides.magicResist = 100;
  scenario.combo = [
    action("w", "ability", "W"),
    { ...action("miss", "attack", "AA", 0.1), outcome: "miss" as const },
    action("hit", "attack", "AA", 0.1),
    action("wait", "wait", "WAIT", 8),
    action("expired", "attack", "AA"),
  ];
  const result = simulate(scenario, champions, new Map(), new Map());
  assert.equal(result.steps.find((step) => step.id === "w")?.preMitigation.total, 0);
  assert.equal(result.steps.find((step) => step.id === "miss")?.preMitigation.total, 0);
  closeTo(result.steps.find((step) => step.id === "hit")?.preMitigation.magic ?? 0, 225);
  closeTo(result.steps.find((step) => step.id === "hit")?.postMitigation.magic ?? 0, 112.5);
  assert.equal(result.steps.find((step) => step.id === "expired")?.preMitigation.magic, 0);
  assert.ok(nestedTriggers(result.steps.find((step) => step.id === "wait")?.triggers ?? []).some((trigger) => trigger.label === "Bio-Arcane Barrage Expired"));
});

test("Gwen Skip 'n Slash applies timed stats and on-hit damage, refunds E once, and expires", () => {
  const gwen = snapshotChampion(887);
  const target = champion(900, "Target");
  const champions = new Map([[887, gwen], [900, target]]);
  const scenario = duel(887, 900);
  scenario.attacker.abilityRanks.E = 5;
  scenario.attacker.overrides.abilityPower = 100;
  scenario.combo = [
    action("e", "ability", "E"),
    { ...action("miss", "attack", "AA", 0.1), outcome: "miss" as const },
    action("first", "attack", "AA", 0.1),
    action("second", "attack", "AA", 0.1),
    action("early-e", "ability", "E"),
  ];
  const result = simulate(scenario, champions, new Map(), new Map());
  closeTo(result.steps.find((step) => step.id === "first")?.preMitigation.magic ?? 0, 35);
  closeTo(result.steps.find((step) => step.id === "second")?.preMitigation.magic ?? 0, 35);
  assert.ok(nestedTriggers(result.steps.find((step) => step.id === "first")?.triggers ?? []).some((trigger) => trigger.label === "Skip 'n Slash Refund Consumed"));
  assert.equal(nestedTriggers(result.steps.find((step) => step.id === "second")?.triggers ?? []).some((trigger) => trigger.label === "Skip 'n Slash Cooldown Refund"), false);
  assert.ok(result.steps.find((step) => step.id === "early-e")?.warnings.some((warning) => warning.includes("before its modeled cooldown")));
  closeTo(result.attackerStats.attackSpeed ?? 0, gwen.stats.attackSpeed * 1.8);

  const expired = duel(887, 900);
  expired.attacker.abilityRanks.E = 1;
  expired.combo = [action("e", "ability", "E"), action("wait", "wait", "WAIT", 4), action("attack", "attack", "AA")];
  const expiredResult = simulate(expired, champions, new Map(), new Map());
  assert.equal(expiredResult.steps.find((step) => step.id === "attack")?.preMitigation.magic, 0);
  assert.ok(nestedTriggers(expiredResult.steps.find((step) => step.id === "wait")?.triggers ?? []).some((trigger) => trigger.label === "Skip 'n Slash Expired"));
});

test("Fizz Seastone Trident schedules refreshable bleed ticks and separates active and follow-up attacks", () => {
  const fizz = snapshotChampion(105);
  const target = champion(900, "Target");
  const champions = new Map([[105, fizz], [900, target]]);
  const bleed = duel(105, 900);
  bleed.attacker.abilityRanks.W = 1;
  bleed.attacker.overrides.abilityPower = 0;
  bleed.defender.overrides.magicResist = 100;
  bleed.combo = [action("first", "attack", "AA"), action("second", "attack", "AA", 0.75)];
  const bleedResult = simulate(bleed, champions, new Map(), new Map());
  const bleedSteps = bleedResult.steps.filter((step) => step.label.startsWith("Seastone Trident Bleed"));
  assert.equal(bleedSteps.length, 8);
  closeTo(bleedSteps.reduce((total, step) => total + step.preMitigation.magic, 0), 40);
  closeTo(bleedSteps.reduce((total, step) => total + step.postMitigation.magic, 0), 20);
  assert.deepEqual(bleedSteps.map((step) => step.timestamp), [0, 0.5, 0.75, 1.25, 1.75, 2.25, 2.75, 3.25]);

  const active = duel(105, 900);
  active.attacker.abilityRanks.W = 1;
  active.attacker.overrides.abilityPower = 100;
  active.combo = [action("w", "ability", "W"), action("active", "attack", "AA", 0.1), action("follow-up", "attack", "AA", 0.1)];
  const activeResult = simulate(active, champions, new Map(), new Map());
  closeTo(activeResult.steps.find((step) => step.id === "active")?.preMitigation.magic ?? 0, 95);
  closeTo(activeResult.steps.find((step) => step.id === "follow-up")?.preMitigation.magic ?? 0, 50);
  assert.ok(nestedTriggers(activeResult.steps.find((step) => step.id === "active")?.triggers ?? []).some((trigger) => trigger.label === "Seastone Trident Armed State Consumed"));

  const expired = duel(105, 900);
  expired.attacker.abilityRanks.W = 1;
  expired.combo = [action("w", "ability", "W"), action("wait", "wait", "WAIT", 4), action("attack", "attack", "AA")];
  const expiredResult = simulate(expired, champions, new Map(), new Map());
  assert.equal(expiredResult.steps.find((step) => step.id === "attack")?.preMitigation.magic, 0);
  assert.ok(nestedTriggers(expiredResult.steps.find((step) => step.id === "wait")?.triggers ?? []).some((trigger) => trigger.label === "Seastone Trident Expired"));
});

test("defender-side programs can create expiring shields before incoming damage", () => {
  const attacker = champion(1, "Attacker");
  const defender = champion(2, "Defender");
  defender.effectPrograms = [{
    id: "champion:2:P:defense",
    label: "Defensive Trigger",
    owner: "champion",
    sourceId: "champion:2:P",
    template: "shield-with-lockout",
    triggers: [{
      id: "champion:2:P:before-damage",
      event: "before-damage",
      priority: 10,
      conditions: [{ type: "hit", value: true }],
      operations: [{ type: "shield", label: "Defensive Shield", formula: { type: "literal", value: 50 }, duration: { type: "literal", value: 2 } }],
    }],
  }];
  const scenario = duel(1, 2);
  scenario.attacker.overrides.attackDamage = 20;
  scenario.combo = [action("attack", "attack", "AA"), action("wait", "wait", "WAIT", 2)];
  const result = simulate(scenario, new Map([[1, attacker], [2, defender]]), new Map(), new Map());
  assert.equal(result.steps[0].shieldAbsorbed, 20);
  assert.equal(result.steps[0].healthDamage, 0);
  assert.ok(nestedTriggers(result.steps[0].triggers).some((trigger) => trigger.label === "Defensive Shield"));
  assert.ok(nestedTriggers(result.steps[1].triggers).some((trigger) => trigger.label === "Defensive Shield Expired"));
});

test("source-target state is isolated and effect program validation rejects malformed programs", () => {
  const stats: ResolvedStats = { maxHealth: 1000, currentHealth: 1000, baseAttackDamage: 60, bonusAttackDamage: 0, attackDamage: 60, abilityPower: 0, armor: 30, magicResist: 30, lethality: 0, percentArmorPen: 0, flatMagicPen: 0, percentMagicPen: 0, critChance: 0, critDamage: 175 };
  const stacking: EffectProgramDefinition = {
    id: "champion:1:P:stacking",
    label: "Fixture Stacking",
    owner: "champion",
    sourceId: "champion:1:P",
    template: "stacking-proc",
    triggers: [
      { id: "fixture-stack", event: "basic-attack-hit", priority: 10, conditions: [], operations: [{ type: "increment-state", key: "fixture", amount: { type: "literal", value: 1 }, maximum: { type: "literal", value: 2 }, label: "Fixture Stack" }] },
      { id: "fixture-proc", event: "basic-attack-hit", priority: 20, conditions: [{ type: "state-value", key: "fixture", operator: "gte", value: 2 }], operations: [{ type: "damage", label: "Fixture Proc", damageType: "true", formula: { type: "literal", value: 10 }, formulaLabel: "10" }, { type: "consume-state", key: "fixture", label: "Fixture Consumed" }] },
    ],
  };
  const runtime = createEffectRuntimeState();
  const context = (targetId: string) => ({ event: "basic-attack-hit" as const, timestamp: 0, side: "attacker" as const, sourceId: "champion:1:AA", hit: true, attacker: stats, defender: stats, targetCurrentHealth: 1000, targetId, ranks: {}, level: 1, inputs: {}, eventValues: {} });
  assert.equal(executeEffectEvent([stacking], runtime, context("one")).damage.total, 0);
  assert.equal(executeEffectEvent([stacking], runtime, context("two")).damage.total, 0);
  assert.equal(executeEffectEvent([stacking], runtime, context("one")).damage.true, 10);

  const malformed = structuredClone(stacking);
  malformed.id = "";
  malformed.sourceId = "champion:404:P";
  malformed.triggers[0].priority = Number.NaN;
  malformed.triggers[1].operations[0] = { type: "damage", label: "Invalid", damageType: "true", formula: { type: "ranked", values: [] }, formulaLabel: "invalid" };
  const errors = validateEffectPrograms([malformed], new Set(["champion:1:P"]));
  assert.ok(errors.some((error) => error.includes("unknown source ID")));
  assert.ok(errors.some((error) => error.includes("priority must be finite")));
  assert.ok(errors.some((error) => error.includes("values must not be empty")));
  const malformedSchedule = structuredClone(stacking);
  malformedSchedule.triggers[0].operations = [{
    type: "schedule-damage",
    label: "Invalid Schedule",
    damageType: "magic",
    formula: { type: "literal", value: 10 },
    delay: { type: "literal", value: 0 },
    tickCount: { type: "literal", value: 0 },
    replaceKey: "",
    formulaLabel: "invalid",
  }];
  const scheduleErrors = validateEffectPrograms([malformedSchedule], new Set(["champion:1:P"]));
  assert.ok(scheduleErrors.some((error) => error.includes("tickCount and tickInterval together")));
  assert.ok(scheduleErrors.some((error) => error.includes("tickCount must be a positive integer")));
  assert.ok(scheduleErrors.some((error) => error.includes("replaceKey must not be empty")));
  assert.ok(validateActionDefinitions([{ id: "duplicate", sourceId: "one", kind: "attack", key: "AA", label: "One", defaultDelay: 0, parameters: [] }, { id: "duplicate", sourceId: "two", kind: "attack", key: "AA", label: "Two", defaultDelay: 0, parameters: [] }]).some((error) => error.includes("Duplicate")));
});

test("schema 1 scenario fragments are rejected with an incompatibility signal", () => {
  const encoded = Buffer.from(JSON.stringify({ schemaVersion: 1, patch: "16.16" })).toString("base64url");
  const fragment = `#dl=${encoded}`;
  assert.equal(decodeScenario(fragment), null);
  assert.equal(hasIncompatibleScenario(fragment), true);
});

test("review catalog validation rejects missing, duplicate, and stale source records", () => {
  const reviewed = (sourceId: string) => ({ review: { sourceId, sourceHash: `${sourceId}-hash`, sourceHashes: { championBin: "bin" }, reviewedPatch: "16.16", validationNotes: ["reviewed"], components: [{}] } });
  const valid = [reviewed("champion:1:P"), reviewed("champion:1:Q")];
  assert.deepEqual(validateReviewCatalog(valid, "16.16", 2, reviewRosterSignature(valid)).errors, []);
  const missing = [{ review: { sourceId: "champion:1:P" } }];
  assert.ok(validateReviewCatalog(missing, "16.16", 1, reviewRosterSignature(missing)).errors.some((error) => error.includes("lacks complete")));
  const duplicate = [reviewed("champion:1:P"), reviewed("champion:1:P")];
  assert.ok(validateReviewCatalog(duplicate, "16.16", 2, reviewRosterSignature(duplicate)).errors.some((error) => error.includes("Duplicate")));
  assert.ok(validateReviewCatalog(valid, "16.16", 2, "stale").errors.some((error) => error.includes("stale")));
});
