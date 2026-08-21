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
  assert.equal(items.find((item) => item.name === "Abyssal Mask")?.classification, "modeled");
  assert.equal(runes.find((rune) => rune.name === "Conqueror")?.classification, "modeled");
  assert.equal(runes.find((rune) => rune.name === "Hail of Blades")?.classification, "unsupported");
  assert.equal(runes.find((rune) => rune.name === "Last Stand")?.classification, "unsupported");
  assert.equal(runes.find((rune) => rune.name === "Bone Plating")?.classification, "unsupported");
  assert.equal(runes.find((rune) => rune.name === "Axiom Arcanist")?.classification, "unsupported");
  assert.ok(items.every((item) => item.coverageNote));
  assert.ok(runes.every((rune) => rune.coverageNote));
});

test("schema two snapshot preserves stateful reference modules and pinned sources", async () => {
  const [current, manifest, vayne, olaf, jax, darius, garen, blitzcrank, leona] = await Promise.all([
    readFile(new URL("../public/data/current.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/manifest.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/67.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/2.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/24.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/122.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/86.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/53.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../public/data/16.16/champions/89.json", import.meta.url), "utf8").then(JSON.parse),
  ]);
  assert.equal(current.schemaVersion, 2);
  assert.equal(manifest.schemaVersion, 2);
  assert.equal(manifest.validation.legacyEstimatedStates, 0);
  assert.equal(manifest.validation.unknownRequiredCalculationParts, 0);
  assert.ok(manifest.binInspection.itemEntryCount > 0);
  assert.ok(manifest.binInspection.perkEntryCount > 0);
  assert.equal(manifest.sources.filter((source) => source.url.includes("raw.communitydragon.org/latest/")).length, 1);

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
  assert.equal(manifest.spellCoverage.modeled, 17);
  assert.equal(manifest.spellCoverage.partial, 544);
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
  assert.match(actionControls, /Poppy:[\s\S]*wallCollision[\s\S]*chargePercent/);
});
