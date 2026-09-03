import {
  clearGenerated,
  formatCoins,
  formatDuration,
  ingredientsTable,
  mdTable,
  readData,
  sourceFooter,
  writePage,
  type Locale,
} from "./helpers.ts";

type Meta = { shortSha?: string | null };

type Consumable = {
  id: string;
  name: string;
  cookingSeconds?: number;
  experience?: number;
  building?: string;
  ingredients?: Record<string, number>;
};

type Building = {
  id: string;
  name: string;
  coins: number;
  constructionSeconds: number;
  unlocksAtLevel?: { level?: number };
  ingredients: Record<string, number>;
  requiredIsland?: string;
  isCooking: boolean;
};

export function generateCooking(meta: Meta) {
  const data = readData<{ source: string; items: Consumable[] }>("consumables.json");
  const buildings = readData<{ items: Building[] }>("buildings.json");
  const cookingBuildings = buildings.items.filter((b) => b.isCooking);

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "cooking");
    const title = locale === "fr" ? "Cuisine" : "Cooking";

    const buildingSection =
      locale === "fr"
        ? `## Bâtiments de cuisine\n\n${mdTable(
            ["Bâtiment", "Niveau", "Coins", "Construction"],
            cookingBuildings.map((b) => [
              `[${b.name}](/${locale}/buildings/${b.id})`,
              b.unlocksAtLevel?.level != null && b.unlocksAtLevel.level !== Infinity
                ? String(b.unlocksAtLevel.level)
                : "—",
              formatCoins(b.coins),
              formatDuration(b.constructionSeconds),
            ]),
          )}`
        : `## Cooking buildings\n\n${mdTable(
            ["Building", "Level", "Coins", "Build time"],
            cookingBuildings.map((b) => [
              `[${b.name}](/${locale}/buildings/${b.id})`,
              b.unlocksAtLevel?.level != null && b.unlocksAtLevel.level !== Infinity
                ? String(b.unlocksAtLevel.level)
                : "—",
              formatCoins(b.coins),
              formatDuration(b.constructionSeconds),
            ]),
          )}`;

    const sorted = [...data.items].sort(
      (a, b) => (a.experience ?? 0) - (b.experience ?? 0),
    );

    const rows = sorted.map((c) => [
      `[${c.name}](/${locale}/cooking/${c.id})`,
      c.building ?? "—",
      c.experience != null ? String(c.experience) : "—",
      c.cookingSeconds != null ? formatDuration(c.cookingSeconds) : "—",
    ]);

    writePage(
      locale,
      "cooking/index.md",
      `---
title: ${title}
---

# ${title}

${
  locale === "fr"
    ? "Dans Sunflower Land, l’XP Bumpkin vient surtout de **manger** de la nourriture cuisinée — pas de la récolte seule."
    : "In Sunflower Land, Bumpkin XP mainly comes from **eating** cooked food — not from harvesting alone."
}

${buildingSection}

## ${locale === "fr" ? "Recettes" : "Recipes"}

${
  sorted.length
    ? mdTable(
        locale === "fr"
          ? ["Recette", "Bâtiment", "XP", "Temps"]
          : ["Recipe", "Building", "XP", "Time"],
        rows,
      )
    : locale === "fr"
      ? "_Aucune recette extraite — vérifier consumables.ts après sync._"
      : "_No recipes extracted — verify consumables.ts after sync._"
}
${sourceFooter(locale, data.source, meta)}`,
    );

    for (const c of sorted) {
      writePage(
        locale,
        `cooking/${c.id}.md`,
        `---
title: ${c.name}
---

# ${c.name}

| | |
|---|---|
| ${locale === "fr" ? "Bâtiment" : "Building"} | ${c.building ?? "—"} |
| XP | ${c.experience ?? "—"} |
| ${locale === "fr" ? "Temps de cuisson" : "Cook time"} | ${c.cookingSeconds != null ? formatDuration(c.cookingSeconds) : "—"} |

## ${locale === "fr" ? "Ingrédients" : "Ingredients"}

${ingredientsTable(c.ingredients, locale)}

[${locale === "fr" ? "← Cuisine" : "← Cooking"}](/${locale}/cooking/)
${sourceFooter(locale, data.source, meta)}`,
      );
    }
  }
}

export function generateBuildings(meta: Meta) {
  const data = readData<{ source: string; items: Building[] }>("buildings.json");
  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "buildings");
    const title = locale === "fr" ? "Bâtiments" : "Buildings";
    const rows = data.items.map((b) => [
      `[${b.name}](/${locale}/buildings/${b.id})`,
      b.unlocksAtLevel?.level != null && Number.isFinite(b.unlocksAtLevel.level)
        ? String(b.unlocksAtLevel.level)
        : "—",
      formatCoins(b.coins),
      formatDuration(b.constructionSeconds),
      b.isCooking ? (locale === "fr" ? "Oui" : "Yes") : locale === "fr" ? "Non" : "No",
    ]);

    writePage(
      locale,
      "buildings/index.md",
      `---
title: ${title}
---

# ${title}

${mdTable(
  locale === "fr"
    ? ["Bâtiment", "Niveau", "Coins", "Construction", "Cuisine"]
    : ["Building", "Level", "Coins", "Build time", "Cooking"],
  rows,
)}
${sourceFooter(locale, data.source, meta)}`,
    );

    for (const b of data.items) {
      writePage(
        locale,
        `buildings/${b.id}.md`,
        `---
title: ${b.name}
---

# ${b.name}

| | |
|---|---|
| ${locale === "fr" ? "Niveau requis" : "Required level"} | ${b.unlocksAtLevel?.level != null && Number.isFinite(b.unlocksAtLevel.level) ? b.unlocksAtLevel.level : "—"} |
| Coins | ${formatCoins(b.coins)} |
| ${locale === "fr" ? "Construction" : "Build time"} | ${formatDuration(b.constructionSeconds)} |
| ${locale === "fr" ? "Île requise" : "Required island"} | ${b.requiredIsland ?? "—"} |

## ${locale === "fr" ? "Ingrédients" : "Ingredients"}

${ingredientsTable(b.ingredients, locale)}

[${locale === "fr" ? "← Bâtiments" : "← Buildings"}](/${locale}/buildings/)
${sourceFooter(locale, data.source, meta)}`,
      );
    }
  }
}
