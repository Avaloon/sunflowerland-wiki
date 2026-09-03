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

export function generateCrops(meta: Meta) {
  const data = readData<{ source: string; items: Crop[] }>("crops.json");
  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "crops");
    const title = locale === "fr" ? "Cultures" : "Crops";
    const intro =
      locale === "fr"
        ? "Prix de vente, temps de récolte et graines extraits du code du jeu."
        : "Sell prices, harvest times and seeds extracted from the game code.";

    const rows = data.items.map((c) => [
      `[${c.name}](/${locale}/crops/${c.id})`,
      catLabel[locale][c.category] ?? c.category,
      formatCoins(c.sellPrice),
      formatDuration(c.harvestSeconds),
      c.seed ? formatCoins(c.seed.price) : "—",
      c.seed?.bumpkinLevel?.level != null ? String(c.seed.bumpkinLevel.level) : "—",
    ]);

    writePage(
      locale,
      "crops/index.md",
      `---
title: ${title}
description: ${intro}
---

# ${title}

${intro}

${mdTable(
  locale === "fr"
    ? ["Culture", "Catégorie", "Vente", "Temps", "Graine", "Niveau"]
    : ["Crop", "Category", "Sell", "Time", "Seed", "Level"],
  rows,
)}
${sourceFooter(locale, data.source, meta)}`,
    );

    for (const c of data.items) {
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

      writePage(
        locale,
        `crops/${c.id}.md`,
        `---
title: ${c.name}
description: ${c.name} crop data
---

# ${c.name}

${
  locale === "fr"
    ? `| | |
|---|---|
| Catégorie | ${catLabel.fr[c.category] ?? c.category} |
| Prix de vente | ${formatCoins(c.sellPrice)} |
| Temps de récolte | ${formatDuration(c.harvestSeconds)} |
| Overnight | ${c.overnight ? "Oui" : "Non"} |
| Type | ${c.kind} |`
    : `| | |
|---|---|
| Category | ${catLabel.en[c.category] ?? c.category} |
| Sell price | ${formatCoins(c.sellPrice)} |
| Harvest time | ${formatDuration(c.harvestSeconds)} |
| Overnight | ${c.overnight ? "Yes" : "No"} |
| Kind | ${c.kind} |`
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
  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "fruits");
    const title = locale === "fr" ? "Fruits" : "Fruits";
    const rows = data.items.map((f) => [
      `[${f.name}](/${locale}/fruits/${f.id})`,
      f.kind.includes("greenhouse")
        ? locale === "fr"
          ? "Serre"
          : "Greenhouse"
        : locale === "fr"
          ? "Patch"
          : "Patch",
      formatCoins(f.sellPrice),
      f.seed ? formatDuration(f.seed.plantSeconds) : "—",
      f.seed ? formatCoins(f.seed.price) : "—",
      f.isBush ? (locale === "fr" ? "Oui" : "Yes") : locale === "fr" ? "Non" : "No",
    ]);

    writePage(
      locale,
      "fruits/index.md",
      `---
title: ${title}
---

# ${title}

${
  locale === "fr"
    ? "Fruits de patch et de serre."
    : "Patch and greenhouse fruits."
}

${mdTable(
  locale === "fr"
    ? ["Fruit", "Type", "Vente", "Temps", "Graine", "Buisson"]
    : ["Fruit", "Type", "Sell", "Time", "Seed", "Bush"],
  rows,
)}
${sourceFooter(locale, data.source, meta)}`,
    );

    for (const f of data.items) {
      writePage(
        locale,
        `fruits/${f.id}.md`,
        `---
title: ${f.name}
---

# ${f.name}

| | |
|---|---|
| ${locale === "fr" ? "Prix de vente" : "Sell price"} | ${formatCoins(f.sellPrice)} |
| ${locale === "fr" ? "Buisson" : "Bush"} | ${f.isBush ? (locale === "fr" ? "Oui" : "Yes") : locale === "fr" ? "Non" : "No"} |
| ${locale === "fr" ? "Type" : "Kind"} | ${f.kind} |
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

export function generateSeasons(meta: Meta) {
  const data = readData<{
    source: string;
    seasons: Array<{ id: string; name: { en: string; fr: string }; emoji: string }>;
    notes: { en: string[]; fr: string[] };
    calendarEventNames: string[];
  }>("seasons.json");

  for (const locale of ["en", "fr"] as Locale[]) {
    clearGenerated(locale, "seasons");
    const title = locale === "fr" ? "Saisons" : "Seasons";
    const notes = data.notes[locale].map((n) => `- ${n}`).join("\n");
    const seasonList = data.seasons
      .map((s) => `- ${s.emoji} **${s.name[locale]}**`)
      .join("\n");
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

## ${locale === "fr" ? "Points clés" : "Key points"}

${notes}

## ${locale === "fr" ? "Événements calendrier (extraits du code)" : "Calendar events (from code)"}

${events}
${sourceFooter(locale, data.source, meta)}`,
    );
  }
}
