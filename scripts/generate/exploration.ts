import {
  clearGenerated,
  formatCoins,
  mdTable,
  readData,
  sourceFooter,
  writePage,
  type Locale,
} from "./helpers.ts";

type Meta = { shortSha?: string | null };

export function generateFishing(meta: Meta) {
  const data = readData<{
    source: string;
    items: Array<{ id: string; name: string; type?: string; soldAt?: number }>;
  }>("fishing.json");

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "fishing");
    const title = locale === "fr" ? "Pêche" : "Fishing";
    writePage(
      locale,
      "fishing/index.md",
      `---
title: ${title}
---

# ${title}

${
  locale === "fr"
    ? "Poissons et captures listés depuis fishing.ts. Les appâts et raretés peuvent nécessiter une lecture croisée avec les événements calendrier."
    : "Fish and catches listed from fishing.ts. Baits and rarities may need cross-checking with calendar events."
}

${mdTable(
  locale === "fr" ? ["Poisson", "Type", "Vente"] : ["Fish", "Type", "Sell"],
  data.items.map((f) => [
    f.name,
    f.type ?? "—",
    f.soldAt != null ? formatCoins(f.soldAt) : "—",
  ]),
)}
${sourceFooter(locale, data.source, meta)}`,
    );
  }
}

export function generateFlowers(meta: Meta) {
  const data = readData<{
    source: string;
    items: Array<{ id: string; name: string; seed?: string; sellPrice?: number }>;
    seeds: Record<string, { price: number; plantSeconds: number }>;
  }>("flowers.json");

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "flowers");
    const title = locale === "fr" ? "Fleurs" : "Flowers";
    writePage(
      locale,
      "flowers/index.md",
      `---
title: ${title}
---

# ${title}

${mdTable(
  locale === "fr"
    ? ["Fleur", "Graine", "Vente"]
    : ["Flower", "Seed", "Sell"],
  data.items.map((f) => [
    f.name,
    f.seed ?? "—",
    f.sellPrice != null ? formatCoins(f.sellPrice) : "—",
  ]),
)}

## ${locale === "fr" ? "Graines" : "Seeds"}

${mdTable(
  locale === "fr" ? ["Graine", "Prix"] : ["Seed", "Price"],
  Object.entries(data.seeds).map(([name, s]) => [name, formatCoins(s.price)]),
)}
${sourceFooter(locale, data.source, meta)}`,
    );
  }
}

export function generateCraftables(meta: Meta) {
  const data = readData<{
    source: string;
    items: Array<{
      id: string;
      name: string;
      coins?: number;
      ingredients: Record<string, number>;
    }>;
    namedCollectibles: string[];
  }>("craftables.json");

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "craftables");
    const title = locale === "fr" ? "Craft / collectibles" : "Craftables";

    const crafted =
      data.items.length > 0
        ? mdTable(
            locale === "fr"
              ? ["Objet", "Coins", "Ingrédients"]
              : ["Item", "Coins", "Ingredients"],
            data.items.slice(0, 200).map((i) => [
              i.name,
              i.coins != null ? formatCoins(i.coins) : "—",
              Object.entries(i.ingredients)
                .map(([k, v]) => `${v}× ${k}`)
                .join(", ") || "—",
            ]),
          )
        : "";

    const names = data.namedCollectibles
      .slice(0, 300)
      .map((n) => `- ${n}`)
      .join("\n");

    writePage(
      locale,
      "craftables/index.md",
      `---
title: ${title}
---

# ${title}

${
  locale === "fr"
    ? "craftables.ts est très large : extrait partiel des objets limités / craftables, plus un index de noms."
    : "craftables.ts is very large: partial extract of limited/craftable items, plus a name index."
}

${crafted}

## ${locale === "fr" ? "Index de noms (échantillon)" : "Name index (sample)"}

${names}
${sourceFooter(locale, data.source, meta)}`,
    );
  }
}

export function generateSkills(meta: Meta) {
  const data = readData<{
    source: string;
    trees: string[];
    items: Array<{ id: string; name: string; tree?: string }>;
  }>("skills.json");

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "skills");
    const title = locale === "fr" ? "Compétences" : "Skills";

    const byTree = new Map<string, string[]>();
    for (const s of data.items) {
      const tree = s.tree || (locale === "fr" ? "Autre" : "Other");
      if (!byTree.has(tree)) byTree.set(tree, []);
      byTree.get(tree)!.push(s.name);
    }

    const sections = [...byTree.entries()]
      .map(
        ([tree, names]) =>
          `### ${tree}\n\n${names.map((n) => `- ${n}`).join("\n")}`,
      )
      .join("\n\n");

    writePage(
      locale,
      "skills/index.md",
      `---
title: ${title}
---

# ${title}

${
  locale === "fr"
    ? "Arbres de compétences Bumpkin extraits de bumpkinSkills.ts (fichier volumineux — liste indicative)."
    : "Bumpkin skill trees extracted from bumpkinSkills.ts (large file — indicative list)."
}

${
  data.trees.length
    ? `## ${locale === "fr" ? "Arbres détectés" : "Detected trees"}\n\n${data.trees.map((t) => `- ${t}`).join("\n")}`
    : ""
}

${sections || (locale === "fr" ? "_Aucune compétence extraite._" : "_No skills extracted._")}
${sourceFooter(locale, data.source, meta)}`,
    );
  }
}

export function generateExpansions(meta: Meta) {
  const data = readData<{
    source: string;
    items: Array<{
      id: string;
      key: string;
      coins?: number;
      resources: Record<string, number>;
    }>;
    notes?: { en: string[]; fr: string[] };
    layoutGroups?: string[];
  }>("expansions.json");

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "expansions");
    const title = locale === "fr" ? "Expansions" : "Expansions";
    const notes = (data.notes?.[locale] ?? []).map((n) => `- ${n}`).join("\n");

    writePage(
      locale,
      "expansions/index.md",
      `---
title: ${title}
---

# ${title}

${notes}

## ${locale === "fr" ? "Layouts détectés" : "Detected layouts"}

${
  data.items.length
    ? data.items.map((e) => `- \`${e.key}\``).join("\n")
    : locale === "fr"
      ? "_Aucun layout détecté._"
      : "_No layouts detected._"
}

${
  data.layoutGroups?.length
    ? `## Groups\n\n${data.layoutGroups.map((g) => `- \`${g}\``).join("\n")}`
    : ""
}
${sourceFooter(locale, data.source, meta)}`,
    );
  }
}
