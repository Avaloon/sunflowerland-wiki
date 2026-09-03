import {
  clearGenerated,
  formatAscension,
  formatBuildCost,
  formatCoins,
  formatDuration,
  formatLevel,
  ingredientsTable,
  mdTable,
  readData,
  sourceFooter,
  writePage,
  type Locale,
  type UnlockLevel,
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
  unlocksAtLevel?: UnlockLevel;
  ingredients: Record<string, number>;
  requiredIsland?: string;
  isCooking: boolean;
};

const COOKING_BUILDING_ORDER = [
  "Fire Pit",
  "Kitchen",
  "Bakery",
  "Deli",
  "Smoothie Shack",
];

function buildingOrder(name: string | undefined): number {
  const i = COOKING_BUILDING_ORDER.indexOf(name ?? "");
  return i === -1 ? COOKING_BUILDING_ORDER.length : i;
}

/** Remote SFL icon CDN — same fallback as ProduceTable. */
function remoteIcon(name: string): string {
  return `https://sfl.world/img/source/${encodeURIComponent(name)}.png`;
}

function cookingTablesScript(
  locale: Locale,
  buildings: unknown[],
  groups: unknown[],
): string {
  return `<script setup>
const buildings = ${JSON.stringify(buildings)};
const groups = ${JSON.stringify(groups)};
</script>

<CookingTables locale="${locale}" :buildings="buildings" :groups="groups" />
`;
}

export function generateCooking(meta: Meta) {
  const data = readData<{ source: string; items: Consumable[] }>("consumables.json");
  const buildings = readData<{ items: Building[] }>("buildings.json");
  const cookingBuildings = [...buildings.items]
    .filter((b) => b.isCooking)
    .sort((a, b) => buildingOrder(a.name) - buildingOrder(b.name));

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "cooking");
    const title = locale === "fr" ? "Cuisine" : "Cooking";

    const buildingRows = cookingBuildings.map((b) => ({
      id: b.id,
      name: b.name,
      href: `/${locale}/buildings/${b.id}`,
      ascension: formatAscension(b.unlocksAtLevel),
      level: formatLevel(b.unlocksAtLevel),
      cost: formatBuildCost(b.coins, b.ingredients, locale),
      buildTime: formatDuration(b.constructionSeconds),
    }));

    const sorted = [...data.items].sort((a, b) => {
      const byBuilding = buildingOrder(a.building) - buildingOrder(b.building);
      if (byBuilding !== 0) return byBuilding;
      return (a.experience ?? 0) - (b.experience ?? 0);
    });

    const groups: { building: string; recipes: unknown[] }[] = [];
    for (const building of COOKING_BUILDING_ORDER) {
      const items = sorted.filter((c) => c.building === building);
      if (!items.length) continue;
      groups.push({
        building,
        recipes: items.map((c) => ({
          id: c.id,
          name: c.name,
          href: `/${locale}/cooking/${c.id}`,
          xp: c.experience != null ? String(c.experience) : "—",
          time: c.cookingSeconds != null ? formatDuration(c.cookingSeconds) : "—",
        })),
      });
    }
    const other = sorted.filter((c) => buildingOrder(c.building) === COOKING_BUILDING_ORDER.length);
    if (other.length) {
      groups.push({
        building: locale === "fr" ? "Autre" : "Other",
        recipes: other.map((c) => ({
          id: c.id,
          name: c.name,
          href: `/${locale}/cooking/${c.id}`,
          xp: c.experience != null ? String(c.experience) : "—",
          time: c.cookingSeconds != null ? formatDuration(c.cookingSeconds) : "—",
        })),
      });
    }

    writePage(
      locale,
      "cooking/index.md",
      `---
title: ${title}
---

# ${title}

${
  locale === "fr"
    ? "Dans Sunflower Land, l’XP Bumpkin vient surtout de **manger** de la nourriture cuisinée — pas de la récolte seule.\n\nLe déblocage d’un bâtiment dépend de l’**ascension** et du **niveau** Bumpkin. Le coût inclut les coins **et** les ressources (bois, pierre, minerais…).\n\nLes recettes sont listées **un tableau par bâtiment**."
    : "In Sunflower Land, Bumpkin XP mainly comes from **eating** cooked food — not from harvesting alone.\n\nBuildings unlock based on Bumpkin **ascension** and **level**. Cost includes coins **and** resources (wood, stone, ores…).\n\nRecipes are listed as **one table per building**."
}

${cookingTablesScript(locale, buildingRows, groups)}
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

<img class="item-icon" src="${remoteIcon(c.name)}" alt="${c.name}" width="48" height="48" />

| | |
|---|---|
| ${locale === "fr" ? "Bâtiment" : "Building"} | <img class="item-icon" src="${remoteIcon(c.building ?? "")}" alt="${c.building ?? ""}" width="24" height="24" /> ${c.building ?? "—"} |
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
      `<img class="item-icon" src="${remoteIcon(b.name)}" alt="${b.name}" width="24" height="24" /> [${b.name}](/${locale}/buildings/${b.id})`,
      formatAscension(b.unlocksAtLevel),
      formatLevel(b.unlocksAtLevel),
      formatBuildCost(b.coins, b.ingredients, locale),
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
    ? ["Bâtiment", "Ascension", "Niveau", "Coût", "Construction", "Cuisine"]
    : ["Building", "Ascension", "Level", "Cost", "Build time", "Cooking"],
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

<img class="item-icon" src="${remoteIcon(b.name)}" alt="${b.name}" width="48" height="48" />

| | |
|---|---|
| ${locale === "fr" ? "Ascension requise" : "Required ascension"} | ${formatAscension(b.unlocksAtLevel)} |
| ${locale === "fr" ? "Niveau requis" : "Required level"} | ${formatLevel(b.unlocksAtLevel)} |
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
