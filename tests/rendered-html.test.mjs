import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").at(-1);
const expectedBase = process.env.GITHUB_ACTIONS === "true" && repositoryName
  ? `/${repositoryName}/`
  : "/";

test("builds a static Damage Lab application shell", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Damage Lab - League Combat Calculator<\/title>/i);
  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, new RegExp(`(?:src|href)="${expectedBase}assets/`));
  assert.match(html, /https:\/\/rverheggen\.github\.io\/League_Damage_Calculator\/damage-lab-social\.png/);
  assert.doesNotMatch(html, /_vinext|codex-preview|react-loading-skeleton/i);
  await access(new URL("../dist/data/current.json", import.meta.url));
  await access(new URL("../dist/.nojekyll", import.meta.url));
});

test("uses Vite and contains no Sites or server runtime", async () => {
  const [entry, viteConfig, packageJson, dataHook] = await Promise.all([
    readFile(new URL("../src/main.tsx", import.meta.url), "utf8"),
    readFile(new URL("../vite.config.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../src/features/calculator/use-game-data.ts", import.meta.url), "utf8"),
  ]);
  assert.match(entry, /createRoot\(root\)\.render/);
  assert.match(viteConfig, /GITHUB_REPOSITORY/);
  assert.match(dataHook, /import\.meta\.env\.BASE_URL/);
  assert.doesNotMatch(dataHook, /fetch\("\/data\//);
  assert.doesNotMatch(packageJson, /vinext|@openai\/sites|@cloudflare\/vite|wrangler/);
  await assert.rejects(access(new URL("../.openai/hosting.json", import.meta.url)));
  await assert.rejects(access(new URL("../worker/index.ts", import.meta.url)));
});

test("uses the intended application typography and spacious rune editor", async () => {
  const [styles, runeDialog] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../src/features/calculator/rune-page-dialog.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(styles, /Segoe UI Variable/);
  assert.doesNotMatch(styles, /font-geist|Times New Roman/);
  assert.match(runeDialog, /sm:max-w-\[88rem\]/);
  assert.doesNotMatch(runeDialog, /Branch \$|Choice \$/);
});

test("bundled Summoner's Rift items have unique display names", async () => {
  const items = JSON.parse(await readFile(new URL("../public/data/16.16/items.json", import.meta.url), "utf8"));
  const names = items.map((item) => item.name.toLocaleLowerCase("en-US"));
  assert.equal(new Set(names).size, names.length);
});

test("combat-relevant effects are never mislabeled as irrelevant", async () => {
  const [items, runes] = await Promise.all([
    readFile(new URL("../public/data/16.16/items.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/runes.json", import.meta.url), "utf8").then(JSON.parse),
  ]);
  assert.equal(items.find((item) => item.id === 8020)?.classification, "modeled");
  assert.equal(runes.find((rune) => rune.id === 8010)?.classification, "modeled");
  assert.equal(runes.find((rune) => rune.id === 9923)?.classification, "unsupported");
  assert.equal(runes.find((rune) => rune.id === 8299)?.classification, "unsupported");
  assert.equal(runes.find((rune) => rune.id === 8473)?.classification, "unsupported");
  assert.equal(runes.find((rune) => rune.id === 8224)?.classification, "unsupported");
  assert.ok(items.every((item) => item.coverageNote));
  assert.ok(runes.every((rune) => rune.coverageNote));
});

test("schema three snapshot preserves reviewed programs, metadata, actions, and pinned sources", async () => {
  const [current, manifest, vayne, olaf, jax, darius, garen, blitzcrank, leona, akshan, diana, varus] = await Promise.all([
    readFile(new URL("../public/data/current.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/manifest.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/67.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/2.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/24.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/122.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/86.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/53.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/89.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/166.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/131.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/110.json", import.meta.url), "utf8").then(JSON.parse),
  ]);
  assert.equal(current.schemaVersion, 3);
  assert.equal(manifest.schemaVersion, 3);
  assert.equal(manifest.validation.legacyEstimatedStates, 0);
  assert.equal(manifest.validation.unknownRequiredCalculationParts, 0);
  assert.ok(manifest.binInspection.itemEntryCount > 0);
  assert.ok(manifest.binInspection.perkEntryCount > 0);
  assert.equal(manifest.sources.filter((source) => source.url.includes("raw.communitydragon.org/latest/")).length, 1);
  assert.equal(manifest.validation.reviewedChampionSources, 865);
  assert.equal(manifest.validation.unreviewedChampionSources, 0);
  assert.equal(manifest.championSourceCoverage.modeled, 21);
  assert.equal(manifest.championSourceCoverage.partial, 541);
  assert.equal(manifest.championSourceCoverage.unsupported, 183);

  const tumble = vayne.spells.find((spell) => spell.key === "Q");
  const silverBolts = vayne.spells.find((spell) => spell.key === "W");
  const condemn = vayne.spells.find((spell) => spell.key === "E");
  const finalHour = vayne.spells.find((spell) => spell.key === "R");
  assert.equal(tumble.scalings.find((scaling) => scaling.stat === "attackDamage").values[4], 1.15);
  assert.equal(silverBolts.castable, false);
  assert.ok(condemn.actionParameters.some((parameter) => parameter.id === "wallCollision"));
  assert.ok(finalHour.effects.some((effect) => effect.kind === "stat-buff"));
  assert.ok(olaf.spells.find((spell) => spell.key === "R").effects.some((effect) => effect.id === "olaf-r-active"));
  for (const [champion, key] of [[jax, "W"], [darius, "W"], [garen, "Q"], [blitzcrank, "E"], [leona, "Q"]]) {
    const spell = champion.spells.find((candidate) => candidate.key === key);
    assert.equal(spell.classification, "modeled");
    assert.deepEqual(spell.baseDamage, [0, 0, 0, 0, 0]);
    assert.ok(spell.effects.some((effect) => effect.kind === "next-attack" && effect.formula));
  }
  for (const source of [akshan.passive, ...akshan.spells, diana.passive, ...diana.spells, varus.passive, ...varus.spells]) {
    assert.equal(source.review.reviewedPatch, "16.16");
    assert.ok(source.review.sourceHash);
    assert.ok(source.review.sourceHashes.championDetail);
    assert.ok(source.review.sourceHashes.championBin);
    assert.ok(source.review.validationNotes.length);
  }
  assert.ok(akshan.effectPrograms.some((program) => program.id === "champion:166:P:dirty-fighting"));
  assert.ok(diana.effectPrograms.some((program) => program.template === "stacking-proc"));
  assert.ok(varus.effectPrograms.some((program) => program.template === "mark-and-consume"));
  assert.ok(akshan.actions.find((entry) => entry.key === "AA").parameters.some((parameter) => parameter.id === "secondShot"));
  assert.ok(varus.actions.find((entry) => entry.key === "Q").parameters.some((parameter) => parameter.id === "chargePercent"));
  assert.equal(manifest.spellCoverage.modeled, 19);
  assert.equal(manifest.spellCoverage.partial, 541);
});

test("item details are available in equipped builds and the item picker", async () => {
  const [combatantPanel, pickerDialog, tooltip] = await Promise.all([
    readFile(new URL("../src/features/calculator/combatant-panel.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/features/calculator/picker-dialog.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/features/calculator/item-details-tooltip.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(combatantPanel, /ItemDetailsTooltipContent/);
  assert.match(pickerDialog, /ItemDetailsTooltipContent/);
  assert.match(tooltip, /Passives And Actives/);
  assert.match(tooltip, /Stats/);
});

test("ability rank icons expose detailed tooltips", async () => {
  const [combatantPanel, tooltip] = await Promise.all([
    readFile(new URL("../src/features/calculator/combatant-panel.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/features/calculator/ability-details-tooltip.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(combatantPanel, /AbilityDetailsTooltipContent/);
  assert.match(combatantPanel, /View \${spell\.name} Details/);
  assert.match(tooltip, /Selected Rank/);
  assert.match(tooltip, /Base Damage/);
  assert.match(tooltip, /Cooldown/);
  assert.match(tooltip, /Scaling/);
  assert.match(tooltip, /spell\.coverageNote/);
});

test("equipped items can be removed one slot at a time", async () => {
  const combatantPanel = await readFile(new URL("../src/features/calculator/combatant-panel.tsx", import.meta.url), "utf8");
  assert.match(combatantPanel, /aria-label={`Remove \${item\.name}`}/);
  assert.match(combatantPanel, /next\.splice\(index, 1\)/);
  assert.match(combatantPanel, /itemIds: next/);
});

test("restores saved and shared scenarios in the client application", async () => {
  const damageLab = await readFile(new URL("../src/features/calculator/damage-lab.tsx", import.meta.url), "utf8");
  assert.match(damageLab, /decodeScenario\(window\.location\.hash\)/);
  assert.match(damageLab, /localStorage\.getItem\(STORAGE_KEY\)/);
  assert.match(damageLab, /localStorage\.setItem\(STORAGE_KEY/);
  assert.match(damageLab, /damage-lab:scenario-v2/);
  assert.match(damageLab, /hasIncompatibleScenario/);
});

test("uses the Damage Lab favicon and handle-only combo dragging", async () => {
  const [favicon, comboBuilder, actionControls] = await Promise.all([
    readFile(new URL("../public/favicon.svg", import.meta.url), "utf8"),
    readFile(new URL("../src/features/calculator/combo-builder.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/features/calculator/action-controls.ts", import.meta.url), "utf8"),
  ]);
  assert.match(favicon, /#42D2B9/i);
  assert.match(favicon, /M37\.3 13v14\.2/);
  assert.equal((comboBuilder.match(/\bdraggable\b/g) ?? []).length, 1);
  assert.match(comboBuilder, /getActionControls\(champion, entry\)/);
  assert.match(actionControls, /definition\.parameters/);
  assert.doesNotMatch(actionControls, /Poppy|champion\.id|champion\.alias/);
});

test("runtime and UI code contain no champion-name or champion-ID behavior branches", async () => {
  const files = [
    "../src/domain/simulate.ts",
    "../src/domain/effect-runtime.ts",
    "../src/features/calculator/action-controls.ts",
    "../src/features/calculator/combo-builder.tsx",
    "../scripts/sync-game-data.ts",
  ];
  const source = (await Promise.all(files.map((file) => readFile(new URL(file, import.meta.url), "utf8")))).join("\n");
  assert.doesNotMatch(source, /champion\.(?:id|alias|name)\s*===/);
  assert.doesNotMatch(source, /(?:Vayne|Akshan|Diana|Varus|Olaf|Poppy|Jax|Darius|Garen|Blitzcrank|Leona)\s*:/);
});
