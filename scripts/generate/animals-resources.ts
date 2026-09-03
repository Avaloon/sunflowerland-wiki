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

export function generateAnimals(meta: Meta) {
  const data = readData<{
    source: string;
    animals: Array<{
      id: string;
      name: string;
      coins: number;
      levelRequired?: { level?: number };
      buildingRequired?: string;
    }>;
    levels: Record<string, Record<string, number>>;
    foods: Array<{
      id: string;
      name: string;
      type?: string;
      ingredients: Record<string, number>;
    }>;
    foodExperience: Record<string, Record<string, Record<string, number>>>;
    resourceDrop: Record<string, Record<string, Record<string, number>>>;
  }>("animals.json");

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "animals");
    const title = locale === "fr" ? "Animaux" : "Animals";

    writePage(
      locale,
      "animals/index.md",
      `---
title: ${title}
---

# ${title}

${
  locale === "fr"
    ? "Nourrissez les animaux pour gagner de l’XP et obtenir œufs, lait, laine, etc. Le blé, l’orge et le maïs sont les cultures clés pour le feed."
    : "Feed animals to gain XP and produce eggs, milk, wool, and more. Wheat, barley and corn are the key feed crops."
}

## ${locale === "fr" ? "Espèces" : "Species"}

${mdTable(
  locale === "fr"
    ? ["Animal", "Coins", "Niveau", "Bâtiment"]
    : ["Animal", "Coins", "Level", "Building"],
  data.animals.map((a) => [
    `[${a.name}](/${locale}/animals/${a.id})`,
    formatCoins(a.coins),
    a.levelRequired?.level != null ? String(a.levelRequired.level) : "—",
    a.buildingRequired ?? "—",
  ]),
)}

## ${locale === "fr" ? "Nourriture" : "Feed"}

${mdTable(
  locale === "fr"
    ? ["Nourriture", "Type", "Ingrédients"]
    : ["Feed", "Type", "Ingredients"],
  data.foods.map((f) => [
    f.name,
    f.type ?? "—",
    Object.entries(f.ingredients)
      .map(([k, v]) => `${v}× ${k}`)
      .join(", ") || "—",
  ]),
)}
${sourceFooter(locale, data.source, meta)}`,
    );

    for (const a of data.animals) {
      const levels = data.levels[a.name] ?? {};
      const levelRows = Object.entries(levels)
        .sort((x, y) => Number(x[0]) - Number(y[0]))
        .map(([lvl, xp]) => [lvl, String(xp)]);

      const drops = data.resourceDrop[a.name] ?? {};
      const dropRows = Object.entries(drops)
        .sort((x, y) => Number(x[0]) - Number(y[0]))
        .map(([lvl, inv]) => [
          lvl,
          Object.entries(inv)
            .map(([k, v]) => `${v}× ${k}`)
            .join(", ") || "—",
        ]);

      const xpByLevel = data.foodExperience[a.name] ?? {};
      const sampleXp = xpByLevel["1"] ?? xpByLevel["0"] ?? {};
      const xpRows = Object.entries(sampleXp).map(([food, xp]) => [food, String(xp)]);

      writePage(
        locale,
        `animals/${a.id}.md`,
        `---
title: ${a.name}
---

# ${a.name}

| | |
|---|---|
| Coins | ${formatCoins(a.coins)} |
| ${locale === "fr" ? "Niveau requis" : "Required level"} | ${a.levelRequired?.level ?? "—"} |
| ${locale === "fr" ? "Bâtiment" : "Building"} | ${a.buildingRequired ?? "—"} |

## ${locale === "fr" ? "XP par niveau (seuils)" : "XP thresholds by level"}

${
  levelRows.length
    ? mdTable(["Level", "XP"], levelRows)
    : "—"
}

## ${locale === "fr" ? "Production par niveau" : "Drops by level"}

${
  dropRows.length
    ? mdTable(
        locale === "fr" ? ["Niveau", "Ressources"] : ["Level", "Resources"],
        dropRows,
      )
    : "—"
}

## ${locale === "fr" ? "XP nourriture (exemple niveau bas)" : "Feed XP (low-level sample)"}

${
  xpRows.length
    ? mdTable(
        locale === "fr" ? ["Nourriture", "XP"] : ["Feed", "XP"],
        xpRows,
      )
    : "—"
}

[${locale === "fr" ? "← Animaux" : "← Animals"}](/${locale}/animals/)
${sourceFooter(locale, data.source, meta)}`,
      );
    }
  }
}

export function generateCompost(meta: Meta) {
  const data = readData<{
    source: string;
    items: Array<{
      id: string;
      name: string;
      timeToFinishMilliseconds?: number;
      produce?: string;
      produceAmount?: number;
      worm?: string;
      ingredients: Record<string, number>;
    }>;
  }>("composters.json");

  const buildings = readData<{
    items: Array<{ id: string; name: string; ingredients: Record<string, number> }>;
  }>("buildings.json");
  const compostBuildings = buildings.items.filter((b) =>
    /compost/i.test(b.name),
  );

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "compost");
    const title = locale === "fr" ? "Compost" : "Compost";

    writePage(
      locale,
      "compost/index.md",
      `---
title: ${title}
---

# ${title}

${
  locale === "fr"
    ? "Les composteurs transforment des cultures en fertilisant et vers. Coûts de construction ci-dessous ; détails de cycle si disponibles dans le code."
    : "Composters turn crops into fertiliser and worms. Building costs below; cycle details when present in code."
}

## ${locale === "fr" ? "Bâtiments" : "Buildings"}

${mdTable(
  locale === "fr" ? ["Composteur", "Ingrédients"] : ["Composter", "Ingredients"],
  compostBuildings.map((b) => [
    `[${b.name}](/${locale}/buildings/${b.id})`,
    Object.entries(b.ingredients)
      .map(([k, v]) => `${v}× ${k}`)
      .join(", ") || "—",
  ]),
)}

## ${locale === "fr" ? "Cycles" : "Cycles"}

${
  data.items.length
    ? mdTable(
        locale === "fr"
          ? ["Nom", "Produit", "Qté", "Vers", "Durée"]
          : ["Name", "Produce", "Amt", "Worm", "Duration"],
        data.items.map((i) => [
          i.name,
          i.produce ?? "—",
          i.produceAmount != null ? String(i.produceAmount) : "—",
          i.worm ?? "—",
          i.timeToFinishMilliseconds != null
            ? formatDuration(i.timeToFinishMilliseconds / 1000)
            : "—",
        ]),
      )
    : locale === "fr"
      ? "_Aucun détail de cycle._"
      : "_No cycle details._"
}
${sourceFooter(locale, data.source, meta)}`,
    );
  }
}

export function generateResources(meta: Meta) {
  const data = readData<{
    source: string;
    recoveryTimes: Record<string, number>;
    resourceNames: string[];
  }>("resources.json");

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "resources");
    const title = locale === "fr" ? "Ressources" : "Resources";

    const recoveryRows = Object.entries(data.recoveryTimes)
      .filter(([k]) => /TIME|RECOVERY|SECONDS/i.test(k))
      .map(([k, v]) => [k, formatDuration(v)]);

    writePage(
      locale,
      "resources/index.md",
      `---
title: ${title}
---

# ${title}

${
  locale === "fr"
    ? "Nœuds de ressources (bois, pierre, minerais, pétrole…) et temps de régénération extraits du code."
    : "Resource nodes (wood, stone, ores, oil…) and recovery timers extracted from code."
}

## ${locale === "fr" ? "Temps de régénération" : "Recovery times"}

${
  recoveryRows.length
    ? mdTable(
        locale === "fr" ? ["Constante", "Durée"] : ["Constant", "Duration"],
        recoveryRows,
      )
    : "—"
}

## ${locale === "fr" ? "Noms détectés" : "Detected names"}

${data.resourceNames.map((n) => `- ${n}`).join("\n")}
${sourceFooter(locale, data.source, meta)}`,
    );
  }
}

export function generateTools(meta: Meta) {
  const data = readData<{
    source: string;
    items: Array<{
      id: string;
      name: string;
      coins?: number;
      ingredients: Record<string, number>;
    }>;
  }>("tools.json");

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "tools");
    const title = locale === "fr" ? "Outils" : "Tools";

    writePage(
      locale,
      "tools/index.md",
      `---
title: ${title}
---

# ${title}

${mdTable(
  locale === "fr"
    ? ["Outil", "Coins", "Ingrédients"]
    : ["Tool", "Coins", "Ingredients"],
  data.items.map((t) => [
    t.name,
    t.coins != null ? formatCoins(t.coins) : "—",
    Object.entries(t.ingredients)
      .map(([k, v]) => `${v}× ${k}`)
      .join(", ") || "—",
  ]),
)}
${sourceFooter(locale, data.source, meta)}`,
    );
  }
}
