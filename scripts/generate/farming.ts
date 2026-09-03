import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { DOCS_DIR } from "../lib/paths.ts";
import {
  clearGenerated,
  formatCoins,
  formatDuration,
  ingredientsTable,
  readData,
  sourceFooter,
  writePage,
  type Locale,
} from "./helpers.ts";
import { copyProduceIcon } from "./icons.ts";

type Meta = { shortSha?: string | null; repo?: string };

type Crop = {
  id: string;
  name: string;
  sellPrice: number;
  harvestSeconds: number;
  category: string;
  overnight: boolean;
  kind: string;
  seed?: {
    name: string;
    price: number;
    plantSeconds: number;
    bumpkinLevel?: { level?: number };
    plantingSpot?: string;
  };
};

type Fruit = {
  id: string;
  name: string;
  sellPrice: number;
  isBush: boolean;
  kind: string;
  seed?: {
    name: string;
    price: number;
    plantSeconds: number;
    bumpkinLevel?: { level?: number };
  };
};

type Building = {
  id: string;
  name: string;
  coins: number;
  constructionSeconds: number;
  unlocksAtLevel?: { level?: number };
  ingredients: Record<string, number>;
  requiredIsland?: string;
};

type SeasonInfo = {
  source: string;
  plantSeasons: Record<string, string[]>;
};

const catLabel: Record<Locale, Record<string, string>> = {
  en: {
    basic: "Basic",
    medium: "Medium",
    advanced: "Advanced",
    greenhouse: "Greenhouse",
  },
  fr: {
    basic: "Basique",
    medium: "Moyenne",
    advanced: "Avancée",
    greenhouse: "Serre",
  },
};

const seasonName: Record<Locale, Record<string, string>> = {
  en: {
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    winter: "Winter",
    event: "Event",
    "full-moon": "Full moon",
  },
  fr: {
    spring: "Printemps",
    summer: "Été",
    autumn: "Automne",
    winter: "Hiver",
    event: "Événement",
    "full-moon": "Pleine lune",
  },
};

function seasonsFor(name: string, plantSeasons: Record<string, string[]>): string[] {
  if (plantSeasons[name]?.length) return plantSeasons[name];
  if (name === "Celestine" || name === "Lunara" || name === "Duskberry") return ["full-moon"];
  if (name === "Saltwort") return ["event"];
  return [];
}

function formatSeasons(locale: Locale, ids: string[]): string {
  if (!ids.length) return "—";
  return ids.map((id) => seasonName[locale][id] ?? id).join(", ");
}

function produceTableScript(
  locale: Locale,
  kind: "crops" | "fruits" | "greenhouse",
  rows: unknown[],
): string {
  return `<script setup>
const rows = ${JSON.stringify(rows)};
</script>

<ProduceTable locale="${locale}" kind="${kind}" :rows="rows" />
`;
}

function iconFor(name: string, id: string): string | undefined {
  return copyProduceIcon(name, id);
}

function deleteAboutPages() {
  for (const locale of ["en", "fr"] as const) {
    const p = join(DOCS_DIR, locale, "about.md");
    if (existsSync(p)) rmSync(p);
  }
}

export function generateCrops(meta: Meta) {
  deleteAboutPages();
  const data = readData<{ source: string; items: Crop[] }>("crops.json");
  const seasons = readData<SeasonInfo>("seasons.json");
  const items = data.items.filter((c) => c.kind === "crop");

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "crops");
    const title = locale === "fr" ? "Cultures" : "Crops";
    const intro =
      locale === "fr"
        ? "Prix de vente, temps de récolte et **prix de la graine** au marché. Filtrez par saison ou par catégorie de graine (basique / moyenne / avancée, selon le temps de pousse)."
        : "Sell prices, harvest times and **seed price** at the market. Filter by season or seed category (basic / medium / advanced, based on grow time).";

    const tableRows = items.map((c) => ({
      id: c.id,
      name: c.name,
      href: `/${locale}/crops/${c.id}`,
      icon: iconFor(c.name, c.id),
      category: catLabel[locale][c.category] ?? c.category,
      seasons: seasonsFor(c.name, seasons.plantSeasons ?? {}),
      sell: formatCoins(c.sellPrice),
      time: formatDuration(c.harvestSeconds),
      seedPrice: c.seed ? formatCoins(c.seed.price) : "—",
      level: c.seed?.bumpkinLevel?.level != null ? String(c.seed.bumpkinLevel.level) : "—",
    }));

    writePage(
      locale,
      "crops/index.md",
      `---
title: ${title}
description: ${intro.replace(/\*\*/g, "")}
---

# ${title}

${intro}

${produceTableScript(locale, "crops", tableRows)}
${sourceFooter(locale, data.source, meta)}`,
    );

    for (const c of items) {
      const ids = seasonsFor(c.name, seasons.plantSeasons ?? {});
      const seedBlock = c.seed
        ? locale === "fr"
          ? `## Graine

- Nom : **${c.seed.name}**
- Prix : **${formatCoins(c.seed.price)}** coins
- Temps de pousse : **${formatDuration(c.seed.plantSeconds)}**
- Niveau Bumpkin : **${c.seed.bumpkinLevel?.level ?? "—"}**
- Emplacement : **${c.seed.plantingSpot ?? "Crop Plot"}**`
          : `## Seed

- Name: **${c.seed.name}**
- Price: **${formatCoins(c.seed.price)}** coins
- Grow time: **${formatDuration(c.seed.plantSeconds)}**
- Bumpkin level: **${c.seed.bumpkinLevel?.level ?? "—"}**
- Planting spot: **${c.seed.plantingSpot ?? "Crop Plot"}**`
        : "";

      const icon = iconFor(c.name, c.id);
      writePage(
        locale,
        `crops/${c.id}.md`,
        `---
title: ${c.name}
description: ${c.name} crop data
---

# ${c.name}

${icon ? `![${c.name}](${icon})\n` : ""}
${
  locale === "fr"
    ? `| | |
|---|---|
| Catégorie | ${catLabel.fr[c.category] ?? c.category} |
| Saisons | ${formatSeasons("fr", ids)} |
| Prix de vente | ${formatCoins(c.sellPrice)} |
| Temps de récolte | ${formatDuration(c.harvestSeconds)} |
| Overnight | ${c.overnight ? "Oui" : "Non"} |`
    : `| | |
|---|---|
| Category | ${catLabel.en[c.category] ?? c.category} |
| Seasons | ${formatSeasons("en", ids)} |
| Sell price | ${formatCoins(c.sellPrice)} |
| Harvest time | ${formatDuration(c.harvestSeconds)} |
| Overnight | ${c.overnight ? "Yes" : "No"} |`
}

${seedBlock}

${
  locale === "fr"
    ? `[← Toutes les cultures](/fr/crops/)`
    : `[← All crops](/en/crops/)`
}
${sourceFooter(locale, data.source, meta)}`,
      );
    }
  }
}

export function generateFruits(meta: Meta) {
  const data = readData<{ source: string; items: Fruit[] }>("fruits.json");
  const seasons = readData<SeasonInfo>("seasons.json");
  const items = data.items.filter((f) => f.kind === "patch-fruit");

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "fruits");
    const title = locale === "fr" ? "Fruits" : "Fruits";
    const intro =
      locale === "fr"
        ? "Fruits de patch (le raisin est sur la page [Serre](/fr/greenhouse/)). **Prix graine** = coût au marché."
        : "Patch fruits (grapes are listed under [Greenhouse](/en/greenhouse/)). **Seed price** is the market cost.";

    const tableRows = items.map((f) => ({
      id: f.id,
      name: f.name,
      href: `/${locale}/fruits/${f.id}`,
      icon: iconFor(f.name, f.id),
      seasons: seasonsFor(f.name, seasons.plantSeasons ?? {}),
      sell: formatCoins(f.sellPrice),
      time: f.seed ? formatDuration(f.seed.plantSeconds) : "—",
      seedPrice: f.seed ? formatCoins(f.seed.price) : "—",
      extra: f.isBush ? (locale === "fr" ? "Oui" : "Yes") : locale === "fr" ? "Non" : "No",
    }));

    writePage(
      locale,
      "fruits/index.md",
      `---
title: ${title}
---

# ${title}

${intro}

${produceTableScript(locale, "fruits", tableRows)}
${sourceFooter(locale, data.source, meta)}`,
    );

    for (const f of items) {
      const ids = seasonsFor(f.name, seasons.plantSeasons ?? {});
      const icon = iconFor(f.name, f.id);
      writePage(
        locale,
        `fruits/${f.id}.md`,
        `---
title: ${f.name}
---

# ${f.name}

${icon ? `![${f.name}](${icon})\n` : ""}
| | |
|---|---|
| ${locale === "fr" ? "Prix de vente" : "Sell price"} | ${formatCoins(f.sellPrice)} |
| ${locale === "fr" ? "Saisons" : "Seasons"} | ${formatSeasons(locale, ids)} |
| ${locale === "fr" ? "Buisson" : "Bush"} | ${f.isBush ? (locale === "fr" ? "Oui" : "Yes") : locale === "fr" ? "Non" : "No"} |
${
  f.seed
    ? `| ${locale === "fr" ? "Graine" : "Seed"} | ${f.seed.name} |
| ${locale === "fr" ? "Prix graine" : "Seed price"} | ${formatCoins(f.seed.price)} |
| ${locale === "fr" ? "Temps" : "Grow time"} | ${formatDuration(f.seed.plantSeconds)} |
| ${locale === "fr" ? "Niveau" : "Level"} | ${f.seed.bumpkinLevel?.level ?? "—"} |`
    : ""
}

[${locale === "fr" ? "← Tous les fruits" : "← All fruits"}](/${locale}/fruits/)
${sourceFooter(locale, data.source, meta)}`,
      );
    }
  }
}

export function generateGreenhouse(meta: Meta) {
  const crops = readData<{ source: string; items: Crop[] }>("crops.json");
  const fruits = readData<{ source: string; items: Fruit[] }>("fruits.json");
  const seasons = readData<SeasonInfo>("seasons.json");
  const buildings = readData<{ source: string; items: Building[] }>("buildings.json");
  const building = buildings.items.find((b) => b.id === "greenhouse");

  const plants: Array<Crop | Fruit> = [
    ...crops.items.filter((c) => c.kind === "greenhouse-crop"),
    ...fruits.items.filter((f) => f.kind === "greenhouse-fruit"),
  ];

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "greenhouse");
    const title = locale === "fr" ? "Serre" : "Greenhouse";
    const intro =
      locale === "fr"
        ? "La **serre** (Greenhouse) ignore le cycle des saisons : riz, olive et raisin se plantent toute l’année une fois le bâtiment construit."
        : "The **Greenhouse** ignores the season cycle: rice, olive and grape can be planted year-round once the building is up.";

    const tableRows = plants.map((p) => ({
      id: p.id,
      name: p.name,
      href: `/${locale}/greenhouse/${p.id}`,
      icon: iconFor(p.name, p.id),
      seasons: seasonsFor(p.name, seasons.plantSeasons ?? {}),
      sell: formatCoins(p.sellPrice),
      time:
        "harvestSeconds" in p && p.harvestSeconds
          ? formatDuration(p.harvestSeconds)
          : p.seed
            ? formatDuration(p.seed.plantSeconds)
            : "—",
      seedPrice: p.seed ? formatCoins(p.seed.price) : "—",
      level: p.seed?.bumpkinLevel?.level != null ? String(p.seed.bumpkinLevel.level) : "—",
    }));

    const buildingBlock = building
      ? locale === "fr"
        ? `## Bâtiment

| | |
|---|---|
| Niveau requis | ${building.unlocksAtLevel?.level ?? "—"} |
| Coins | ${formatCoins(building.coins)} |
| Construction | ${formatDuration(building.constructionSeconds)} |
| Île requise | ${building.requiredIsland ?? "—"} |

### Ingrédients

${ingredientsTable(building.ingredients, locale)}

Fiche bâtiment : [Greenhouse](/fr/buildings/greenhouse).`
        : `## Building

| | |
|---|---|
| Required level | ${building.unlocksAtLevel?.level ?? "—"} |
| Coins | ${formatCoins(building.coins)} |
| Build time | ${formatDuration(building.constructionSeconds)} |
| Required island | ${building.requiredIsland ?? "—"} |

### Ingredients

${ingredientsTable(building.ingredients, locale)}

Building page: [Greenhouse](/en/buildings/greenhouse).`
      : "";

    writePage(
      locale,
      "greenhouse/index.md",
      `---
title: ${title}
---

# ${title}

${intro}

${buildingBlock}

## ${locale === "fr" ? "Plantes" : "Plants"}

${produceTableScript(locale, "greenhouse", tableRows)}
${sourceFooter(locale, "crops.ts + fruits.ts + buildings.ts", meta)}`,
    );

    for (const p of plants) {
      const ids = seasonsFor(p.name, seasons.plantSeasons ?? {});
      const harvest =
        "harvestSeconds" in p && typeof p.harvestSeconds === "number"
          ? formatDuration(p.harvestSeconds)
          : p.seed
            ? formatDuration(p.seed.plantSeconds)
            : "—";
      const icon = iconFor(p.name, p.id);
      const kindLabel =
        p.kind === "greenhouse-fruit"
          ? locale === "fr"
            ? "Fruit de serre"
            : "Greenhouse fruit"
          : locale === "fr"
            ? "Culture de serre"
            : "Greenhouse crop";

      writePage(
        locale,
        `greenhouse/${p.id}.md`,
        `---
title: ${p.name}
---

# ${p.name}

${icon ? `![${p.name}](${icon})\n` : ""}
| | |
|---|---|
| ${locale === "fr" ? "Type" : "Kind"} | ${kindLabel} |
| ${locale === "fr" ? "Saisons" : "Seasons"} | ${formatSeasons(locale, ids)} |
| ${locale === "fr" ? "Prix de vente" : "Sell price"} | ${formatCoins(p.sellPrice)} |
| ${locale === "fr" ? "Temps" : "Grow time"} | ${harvest} |
${
  p.seed
    ? `| ${locale === "fr" ? "Graine" : "Seed"} | ${p.seed.name} |
| ${locale === "fr" ? "Prix graine" : "Seed price"} | ${formatCoins(p.seed.price)} |
| ${locale === "fr" ? "Niveau" : "Level"} | ${p.seed.bumpkinLevel?.level ?? "—"} |
| ${locale === "fr" ? "Emplacement" : "Spot"} | Greenhouse |`
    : ""
}

[${locale === "fr" ? "← Serre" : "← Greenhouse"}](/${locale}/greenhouse/)
${sourceFooter(locale, "crops.ts + fruits.ts", meta)}`,
      );
    }
  }
}

export function generateSeasons(meta: Meta) {
  const data = readData<{
    source: string;
    seasons: Array<{ id: string; name: { en: string; fr: string }; emoji: string }>;
    notes: { en: string[]; fr: string[] };
    calendarEventNames: string[];
    plantSeasons: Record<string, string[]>;
  }>("seasons.json");

  const crops = readData<{ items: Crop[] }>("crops.json");
  const fruits = readData<{ items: Fruit[] }>("fruits.json");
  const byName = new Map<string, { href: (locale: Locale) => string }>();
  for (const c of crops.items) {
    const folder = c.kind === "greenhouse-crop" ? "greenhouse" : "crops";
    byName.set(c.name, { href: (locale) => `/${locale}/${folder}/${c.id}` });
  }
  for (const f of fruits.items) {
    const folder = f.kind === "greenhouse-fruit" ? "greenhouse" : "fruits";
    byName.set(f.name, { href: (locale) => `/${locale}/${folder}/${f.id}` });
  }

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "seasons");
    const title = locale === "fr" ? "Saisons" : "Seasons";
    const notes = data.notes[locale].map((n) => `- ${n}`).join("\n");
    const seasonList = data.seasons
      .map((s) => `- ${s.emoji} **${s.name[locale]}**`)
      .join("\n");

    const perSeason = data.seasons
      .map((s) => {
        const names = Object.entries(data.plantSeasons ?? {})
          .filter(([, ids]) => ids.includes(s.id))
          .map(([name]) => name)
          .filter((name) => byName.has(name));
        const links = names
          .map((name) => `[${name}](${byName.get(name)!.href(locale)})`)
          .join(" · ");
        return `### ${s.emoji} ${s.name[locale]}\n\n${links || "—"}`;
      })
      .join("\n\n");

    const events =
      data.calendarEventNames.length > 0
        ? data.calendarEventNames.map((e) => `- ${e}`).join("\n")
        : locale === "fr"
          ? "_Aucun nom d’événement extrait._"
          : "_No event names extracted._";

    writePage(
      locale,
      "seasons/index.md",
      `---
title: ${title}
---

# ${title}

${seasonList}

## ${locale === "fr" ? "Cultures et fruits par saison" : "Crops and fruits by season"}

${perSeason}

## ${locale === "fr" ? "Points clés" : "Key points"}

${notes}

## ${locale === "fr" ? "Événements calendrier (extraits du code)" : "Calendar events (from code)"}

${events}
${sourceFooter(locale, data.source, meta)}`,
    );
  }
}
