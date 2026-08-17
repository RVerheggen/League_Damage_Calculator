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
  assert.equal(items.find((item) => item.name === "Abyssal Mask")?.classification, "unsupported");
  assert.equal(runes.find((rune) => rune.name === "Conqueror")?.classification, "unsupported");
  assert.equal(runes.find((rune) => rune.name === "Hail of Blades")?.classification, "unsupported");
  assert.equal(runes.find((rune) => rune.name === "Last Stand")?.classification, "unsupported");
  assert.equal(runes.find((rune) => rune.name === "Bone Plating")?.classification, "unsupported");
  assert.equal(runes.find((rune) => rune.name === "Axiom Arcanist")?.classification, "unsupported");
});

test("item details are available in equipped builds and the item picker", async () => {
  const [combatantPanel, pickerDialog, tooltip] = await Promise.all([
    readFile(new URL("../src/features/calculator/combatant-panel.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/features/calculator/picker-dialog.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/features/calculator/item-details-tooltip.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(combatantPanel, /ItemDetailsTooltipContent/);
  assert.match(pickerDialog, /ItemDetailsTooltipContent/);
  assert.match(tooltip, /Passives and actives/);
  assert.match(tooltip, /Stats/);
});

test("restores saved and shared scenarios in the client application", async () => {
  const damageLab = await readFile(new URL("../src/features/calculator/damage-lab.tsx", import.meta.url), "utf8");
  assert.match(damageLab, /decodeScenario\(window\.location\.hash\)/);
  assert.match(damageLab, /localStorage\.getItem\(STORAGE_KEY\)/);
  assert.match(damageLab, /localStorage\.setItem\(STORAGE_KEY/);
});
