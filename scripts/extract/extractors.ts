import { join } from "node:path";
import {
  TYPES_DIR,
  DATA_DIR,
  readText,
  writeJson,
  readVersion,
  slugify,
} from "../lib/paths.ts";
import {
  extractConstObject,
  splitObjectEntries,
  readNumberProp,
  readNamedProp,
  readBoolProp,
  readStringProp,
  readStringArrayProp,
  readRecordNumberMap,
  readNestedLevel,
  readNestedNumberMap,
  readNestedNumericMaps,
} from "../lib/parse-ts.ts";

function typeFile(name: string): string {
  return join(TYPES_DIR, name);
}

function categoryForCrop(harvestSeconds: number): string {
  // Mirror crops.ts helpers using Pumpkin (1800) / Eggplant (57600) / Radish (86400)
  if (harvestSeconds <= 30 * 60) return "basic";
  if (harvestSeconds >= 16 * 60 * 60) return "advanced";
  return "medium";
}

export function extractCrops() {
  const src = readText(typeFile("crops.ts"));
  const cropsLit = extractConstObject(src, "CROPS");
  const seedsLit = extractConstObject(src, "CROP_SEEDS");
  const ghCropsLit = extractConstObject(src, "GREENHOUSE_CROPS");
  const ghSeedsLit = extractConstObject(src, "GREENHOUSE_SEEDS");
  if (!cropsLit || !seedsLit) throw new Error("Failed to parse CROPS / CROP_SEEDS");

  const seedsByYield: Record<string, {
    name: string;
    price: number;
    plantSeconds: number;
    bumpkinLevel?: { ascension?: number; level?: number };
    plantingSpot?: string;
  }> = {};

  for (const entry of splitObjectEntries(seedsLit)) {
    const yieldName = readNamedProp(entry.body, "yield") ?? entry.key.replace(/ Seed$/, "");
    seedsByYield[yieldName] = {
      name: entry.key,
      price: readNumberProp(entry.body, "price") ?? 0,
      plantSeconds: readNumberProp(entry.body, "plantSeconds") ?? 0,
      bumpkinLevel: readNestedLevel(entry.body, "bumpkinLevel"),
      plantingSpot: readNamedProp(entry.body, "plantingSpot"),
    };
  }

  const crops = splitObjectEntries(cropsLit).map((entry) => {
    const harvestSeconds = readNumberProp(entry.body, "harvestSeconds") ?? 0;
    const seed = seedsByYield[entry.key];
    return {
      id: slugify(entry.key),
      name: entry.key,
      sellPrice: readNumberProp(entry.body, "sellPrice") ?? 0,
      harvestSeconds,
      category: categoryForCrop(harvestSeconds),
      overnight: harvestSeconds >= 24 * 60 * 60,
      disabled: readBoolProp(entry.body, "disabled") ?? false,
      seed,
      kind: "crop" as const,
    };
  });

  const greenhouse = ghCropsLit
    ? splitObjectEntries(ghCropsLit).map((entry) => {
        const harvestSeconds = readNumberProp(entry.body, "harvestSeconds") ?? 0;
        const seedEntry = ghSeedsLit
          ? splitObjectEntries(ghSeedsLit).find(
              (s) => readNamedProp(s.body, "yield") === entry.key,
            )
          : undefined;
        return {
          id: slugify(entry.key),
          name: entry.key,
          sellPrice: readNumberProp(entry.body, "sellPrice") ?? 0,
          harvestSeconds,
          category: "greenhouse",
          overnight: harvestSeconds >= 24 * 60 * 60,
          disabled: false,
          seed: seedEntry
            ? {
                name: seedEntry.key,
                price: readNumberProp(seedEntry.body, "price") ?? 0,
                plantSeconds: readNumberProp(seedEntry.body, "plantSeconds") ?? 0,
                bumpkinLevel: readNestedLevel(seedEntry.body, "bumpkinLevel"),
                plantingSpot: readNamedProp(seedEntry.body, "plantingSpot"),
              }
            : undefined,
          kind: "greenhouse-crop" as const,
        };
      })
    : [];

  const data = {
    source: "crops.ts",
    generatedAt: new Date().toISOString(),
    items: [...crops, ...greenhouse],
  };
  writeJson(join(DATA_DIR, "crops.json"), data);
  return data;
}

export function extractFruits() {
  const src = readText(typeFile("fruits.ts"));
  const fruitLit = extractConstObject(src, "PATCH_FRUIT");
  const seedLit = extractConstObject(src, "PATCH_FRUIT_SEEDS");
  const ghFruitLit = extractConstObject(src, "GREENHOUSE_FRUIT");
  const ghSeedLit = extractConstObject(src, "GREENHOUSE_FRUIT_SEEDS");
  if (!fruitLit || !seedLit) throw new Error("Failed to parse PATCH_FRUIT");

  const seeds = Object.fromEntries(
    splitObjectEntries(seedLit).map((e) => [
      e.key,
      {
        name: e.key,
        price: readNumberProp(e.body, "price") ?? 0,
        plantSeconds: readNumberProp(e.body, "plantSeconds") ?? 0,
        bumpkinLevel: readNestedLevel(e.body, "bumpkinLevel"),
        yield: readNamedProp(e.body, "yield"),
        plantingSpot: readNamedProp(e.body, "plantingSpot"),
      },
    ]),
  );

  const patch = splitObjectEntries(fruitLit).map((entry) => {
    const seedName = readNamedProp(entry.body, "seed") ?? "";
    return {
      id: slugify(entry.key),
      name: entry.key,
      sellPrice: readNumberProp(entry.body, "sellPrice") ?? 0,
      isBush: readBoolProp(entry.body, "isBush") ?? false,
      seed: seeds[seedName],
      kind: "patch-fruit" as const,
      description: readStringProp(entry.body, "description"),
    };
  });

  const greenhouse = ghFruitLit
    ? splitObjectEntries(ghFruitLit).map((entry) => {
        const seedName = readNamedProp(entry.body, "seed") ?? "";
        const seed =
          ghSeedLit &&
          Object.fromEntries(
            splitObjectEntries(ghSeedLit).map((e) => [
              e.key,
              {
                name: e.key,
                price: readNumberProp(e.body, "price") ?? 0,
                plantSeconds: readNumberProp(e.body, "plantSeconds") ?? 0,
                bumpkinLevel: readNestedLevel(e.body, "bumpkinLevel"),
                yield: readNamedProp(e.body, "yield"),
                plantingSpot: readNamedProp(e.body, "plantingSpot"),
              },
            ]),
          )[seedName];
        return {
          id: slugify(entry.key),
          name: entry.key,
          sellPrice: readNumberProp(entry.body, "sellPrice") ?? 0,
          isBush: false,
          seed,
          kind: "greenhouse-fruit" as const,
          description: readStringProp(entry.body, "description"),
        };
      })
    : [];

  const data = {
    source: "fruits.ts",
    generatedAt: new Date().toISOString(),
    items: [...patch, ...greenhouse],
  };
  writeJson(join(DATA_DIR, "fruits.json"), data);
  return data;
}

function seedNameToPlant(seedName: string): string {
  if (seedName.endsWith(" Seed")) return seedName.slice(0, -5);
  if (seedName.endsWith(" Plant")) return seedName.slice(0, -6);
  return seedName;
}

export function extractSeasons() {
  // calendar.ts is event-heavy; provide a structured wiki summary keyed off known crop seasons discussion + code markers
  let calendarNotes: string[] = [];
  try {
    const src = readText(typeFile("calendar.ts"));
    const eventNames = [...src.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);
    calendarNotes = [...new Set(eventNames)].slice(0, 40);
  } catch {
    calendarNotes = [];
  }

  const plantSeasons: Record<string, string[]> = {};
  try {
    const seedsSrc = readText(typeFile("seeds.ts"));
    const lit = extractConstObject(seedsSrc, "SEASONAL_SEEDS");
    if (lit) {
      for (const season of ["spring", "summer", "autumn", "winter"]) {
        for (const seedName of readStringArrayProp(lit, season) ?? []) {
          const plant = seedNameToPlant(seedName);
          if (!plantSeasons[plant]) plantSeasons[plant] = [];
          if (!plantSeasons[plant].includes(season)) plantSeasons[plant].push(season);
        }
      }
    }
  } catch {
    // seeds.ts missing until sync
  }

  const data = {
    source: "seeds.ts SEASONAL_SEEDS + calendar.ts",
    generatedAt: new Date().toISOString(),
    seasons: [
      { id: "spring", name: { en: "Spring", fr: "Printemps" }, emoji: "🌸" },
      { id: "summer", name: { en: "Summer", fr: "Été" }, emoji: "☀️" },
      { id: "autumn", name: { en: "Autumn", fr: "Automne" }, emoji: "🍂" },
      { id: "winter", name: { en: "Winter", fr: "Hiver" }, emoji: "❄️" },
    ],
    plantSeasons,
    notes: {
      en: [
        "Crop and fruit availability rotates by season. Off-season seeds generally cannot be planted on normal plots.",
        "Sunflowers are typically available year-round.",
        "New players start in a Summer tutorial window before joining the live season cycle.",
        "The Crop Machine can plant certain crops outside their natural season.",
        "Weather and calendar events (Fish Frenzy, Full Moon, Double Delivery, storms, etc.) modify yields or risks.",
      ],
      fr: [
        "La disponibilité des cultures et fruits tourne selon la saison. Hors saison, les graines ne se plantent en général pas sur les parcelles normales.",
        "Les tournesols sont en général disponibles toute l’année.",
        "Les nouveaux joueurs commencent dans une fenêtre tutoriel d’été avant le cycle de saison réel.",
        "La Crop Machine permet de planter certaines cultures hors saison.",
        "Les événements météo / calendrier (Fish Frenzy, Full Moon, Double Delivery, tempêtes, etc.) modifient rendements ou risques.",
      ],
    },
    calendarEventNames: calendarNotes,
  };
  writeJson(join(DATA_DIR, "seasons.json"), data);
  return data;
}

export function extractConsumables() {
  const src = readText(typeFile("consumables.ts"));
  const tables = [
    "FIRE_PIT_COOKABLES",
    "KITCHEN_COOKABLES",
    "BAKERY_COOKABLES",
    "DELI_COOKABLES",
    "JUICE_COOKABLES",
  ];

  const items: Array<Record<string, unknown>> = [];
  const seen = new Set<string>();

  for (const name of tables) {
    const lit = extractConstObject(src, name);
    if (!lit) continue;
    for (const entry of splitObjectEntries(lit)) {
      if (seen.has(entry.key)) continue;
      seen.add(entry.key);
      items.push({
        id: slugify(entry.key),
        name: entry.key,
        cookingSeconds: readNumberProp(entry.body, "cookingSeconds"),
        experience: readNumberProp(entry.body, "experience"),
        building: readNamedProp(entry.body, "building"),
        ingredients: readRecordNumberMap(entry.body, "ingredients") ?? {},
        description: readStringProp(entry.body, "description"),
        table: name,
      });
    }
  }

  const data = {
    source: `consumables.ts (${tables.join(", ")})`,
    generatedAt: new Date().toISOString(),
    items,
  };
  writeJson(join(DATA_DIR, "consumables.json"), data);
  return data;
}

export function extractBuildings() {
  const src = readText(typeFile("buildings.ts"));
  const lit = extractConstObject(src, "BUILDINGS");
  if (!lit) throw new Error("Failed to parse BUILDINGS");

  const cooking = new Set([
    "Fire Pit",
    "Kitchen",
    "Bakery",
    "Deli",
    "Smoothie Shack",
  ]);

  const items = splitObjectEntries(lit).map((entry) => {
    const unlock = readNestedLevel(entry.body, "unlocksAtLevel");
    return {
      id: slugify(entry.key),
      name: entry.key,
      coins: readNumberProp(entry.body, "coins") ?? 0,
      constructionSeconds: readNumberProp(entry.body, "constructionSeconds") ?? 0,
      unlocksAtLevel: unlock,
      ingredients: readRecordNumberMap(entry.body, "ingredients") ?? {},
      requiredIsland: readNamedProp(entry.body, "requiredIsland"),
      isCooking: cooking.has(entry.key),
    };
  });

  const data = {
    source: "buildings.ts",
    generatedAt: new Date().toISOString(),
    items,
  };
  writeJson(join(DATA_DIR, "buildings.json"), data);
  return data;
}

export function extractAnimals() {
  const src = readText(typeFile("animals.ts"));
  const animalsLit = extractConstObject(src, "ANIMALS");
  const levelsLit = extractConstObject(src, "ANIMAL_LEVELS");
  const foodsLit = extractConstObject(src, "ANIMAL_FOODS");
  const xpLit = extractConstObject(src, "ANIMAL_FOOD_EXPERIENCE");
  const dropLit = extractConstObject(src, "ANIMAL_RESOURCE_DROP");
  if (!animalsLit) throw new Error("Failed to parse ANIMALS");

  const animals = splitObjectEntries(animalsLit).map((entry) => ({
    id: slugify(entry.key),
    name: entry.key,
    coins: readNumberProp(entry.body, "coins") ?? 0,
    levelRequired: readNestedLevel(entry.body, "levelRequired"),
    buildingRequired: readNamedProp(entry.body, "buildingRequired"),
  }));

  const levels = levelsLit ? readNestedNumberMap(levelsLit) : {};
  const foods = foodsLit
    ? splitObjectEntries(foodsLit).map((entry) => ({
        id: slugify(entry.key),
        name: entry.key,
        type: readNamedProp(entry.body, "type") ?? readStringProp(entry.body, "type"),
        ingredients: readRecordNumberMap(entry.body, "ingredients") ?? {},
      }))
    : [];

  const foodExperience = xpLit ? readNestedNumericMaps(xpLit) : {};
  const resourceDrop = dropLit ? readNestedNumericMaps(dropLit) : {};

  const data = {
    source: "animals.ts",
    generatedAt: new Date().toISOString(),
    animals,
    levels,
    foods,
    foodExperience,
    resourceDrop,
  };
  writeJson(join(DATA_DIR, "animals.json"), data);
  return data;
}

export function extractComposters() {
  const src = readText(typeFile("composters.ts"));
  const lit =
    extractConstObject(src, "composterDetails") ??
    extractConstObject(src, "COMPOSTERS");

  const items: Array<Record<string, unknown>> = [];
  if (lit) {
    for (const entry of splitObjectEntries(lit)) {
      const ms = readNumberProp(entry.body, "timeToFinishMilliseconds");
      items.push({
        id: slugify(entry.key),
        name: entry.key,
        timeToFinishMilliseconds: ms,
        timeSeconds: ms != null ? ms / 1000 : undefined,
        produce: readNamedProp(entry.body, "produce"),
        produceAmount: readNumberProp(entry.body, "produceAmount"),
        worm: readNamedProp(entry.body, "worm"),
        ingredients: readRecordNumberMap(entry.body, "ingredients") ?? {},
      });
    }
  }

  const data = {
    source: "composters.ts (composterDetails)",
    generatedAt: new Date().toISOString(),
    items,
  };
  writeJson(join(DATA_DIR, "composters.json"), data);
  return data;
}

export function extractResources() {
  const src = readText(typeFile("resources.ts"));
  const lit =
    extractConstObject(src, "RESOURCES") ??
    extractConstObject(src, "RESOURCE_DIMENSIONS");

  const scalars: Record<string, number> = {};
  for (const m of src.matchAll(
    /export\s+const\s+([A-Z0-9_]+)\s*=\s*([\d.]+(?:\s*\*\s*[\d.]+)*)/g,
  )) {
    const val = m[2]
      .split("*")
      .map((p) => Number(p.trim()))
      .reduce((a, b) => a * b, 1);
    if (!Number.isNaN(val)) scalars[m[1]] = val;
  }

  const items = lit
    ? splitObjectEntries(lit).map((entry) => ({
        id: slugify(entry.key),
        name: entry.key,
        bodyPreview: entry.body.slice(0, 120),
      }))
    : [];

  const resourceNames = [...src.matchAll(/\|\s*"([^"]+)"/g)].map((m) => m[1]);

  const data = {
    source: "resources.ts",
    generatedAt: new Date().toISOString(),
    recoveryTimes: scalars,
    resourceNames: [...new Set(resourceNames)],
    items,
  };
  writeJson(join(DATA_DIR, "resources.json"), data);
  return data;
}

export function extractTools() {
  const src = readText(typeFile("tools.ts"));
  const lit =
    extractConstObject(src, "TOOLS") ??
    extractConstObject(src, "WorkBenchToolName") ??
    extractConstObject(src, "WORKBENCH_TOOLS") ??
    extractConstObject(src, "TREASURE_TOOLS");

  const candidates = ["WORKBENCH_TOOLS", "TOOLS", "TREASURE_TOOLS", "DIGGING_TOOLS"];
  let used = "";
  let objectLit = lit;
  for (const name of candidates) {
    const found = extractConstObject(src, name);
    if (found) {
      objectLit = found;
      used = name;
      break;
    }
  }

  const items = objectLit
    ? splitObjectEntries(objectLit).map((entry) => ({
        id: slugify(entry.key),
        name: entry.key,
        coins: readNumberProp(entry.body, "coins") ?? readNumberProp(entry.body, "price"),
        ingredients: readRecordNumberMap(entry.body, "ingredients") ?? {},
      }))
    : [];

  // If multiple tool maps, merge all
  const allItems = [...items];
  for (const name of candidates) {
    if (name === used) continue;
    const extra = extractConstObject(src, name);
    if (!extra) continue;
    for (const entry of splitObjectEntries(extra)) {
      if (allItems.some((i) => i.name === entry.key)) continue;
      allItems.push({
        id: slugify(entry.key),
        name: entry.key,
        coins: readNumberProp(entry.body, "coins") ?? readNumberProp(entry.body, "price"),
        ingredients: readRecordNumberMap(entry.body, "ingredients") ?? {},
      });
    }
  }

  const data = {
    source: `tools.ts (${used || "multi"})`,
    generatedAt: new Date().toISOString(),
    items: allItems,
  };
  writeJson(join(DATA_DIR, "tools.json"), data);
  return data;
}

export function extractFishing() {
  const src = readText(typeFile("fishing.ts"));
  const lit =
    extractConstObject(src, "FISH") ??
    extractConstObject(src, "FISHES") ??
    extractConstObject(src, "FishName");

  const fishLit =
    extractConstObject(src, "FISH") ??
    extractConstObject(src, "FISHES");

  const items = fishLit
    ? splitObjectEntries(fishLit).map((entry) => ({
        id: slugify(entry.key),
        name: entry.key,
        baits: readRecordNumberMap(entry.body, "baits"),
        type: readNamedProp(entry.body, "type") ?? readStringProp(entry.body, "type"),
        soldAt: readNumberProp(entry.body, "sellPrice") ?? readNumberProp(entry.body, "soldAt"),
      }))
    : [];

  // Fallback names from union
  const names = [...src.matchAll(/\|\s*"([^"]+)"/g)].map((m) => m[1]);

  const data = {
    source: "fishing.ts",
    generatedAt: new Date().toISOString(),
    items:
      items.length > 0
        ? items
        : [...new Set(names)].slice(0, 200).map((name) => ({
            id: slugify(name),
            name,
          })),
  };
  writeJson(join(DATA_DIR, "fishing.json"), data);
  return data;
}

export function extractFlowers() {
  const src = readText(typeFile("flowers.ts"));
  const seedLit = extractConstObject(src, "FLOWER_SEEDS");

  const seeds = seedLit
    ? Object.fromEntries(
        splitObjectEntries(seedLit).map((e) => [
          e.key,
          {
            name: e.key,
            price: readNumberProp(e.body, "price") ?? 0,
            plantSeconds: readNumberProp(e.body, "plantSeconds") ?? 0,
            bumpkinLevel: readNestedLevel(e.body, "bumpkinLevel"),
          },
        ]),
      )
    : {};

  const flowerTables = [
    "SUNPETAL_FLOWERS",
    "BLOOM_FLOWERS",
    "LILY_FLOWERS",
    "EDELWEISS_FLOWERS",
    "GLADIOLUS_FLOWERS",
    "LAVENDER_FLOWERS",
    "CLOVER_FLOWERS",
  ];

  const items: Array<Record<string, unknown>> = [];
  const seen = new Set<string>();
  for (const table of flowerTables) {
    const lit = extractConstObject(src, table);
    if (!lit) continue;
    for (const entry of splitObjectEntries(lit)) {
      if (seen.has(entry.key)) continue;
      seen.add(entry.key);
      items.push({
        id: slugify(entry.key),
        name: entry.key,
        seed: readNamedProp(entry.body, "seed"),
        sellPrice: readNumberProp(entry.body, "sellPrice"),
        table,
      });
    }
  }

  const data = {
    source: "flowers.ts",
    generatedAt: new Date().toISOString(),
    seeds,
    items,
  };
  writeJson(join(DATA_DIR, "flowers.json"), data);
  return data;
}

export function extractCraftables() {
  const src = readText(typeFile("craftables.ts"));
  const tables = [
    "MARKET_ITEMS",
    "BARN_ITEMS",
    "BLACKSMITH_ITEMS",
    "QUEST_ITEMS",
    "SALESMAN_ITEMS",
    "WAR_TENT_ITEMS",
    "WAR_BANNERS",
    "TOOLS",
    "SHOVELS",
  ];

  const items: Array<Record<string, unknown>> = [];
  const seen = new Set<string>();
  for (const table of tables) {
    const lit = extractConstObject(src, table);
    if (!lit) continue;
    for (const entry of splitObjectEntries(lit)) {
      if (seen.has(entry.key)) continue;
      seen.add(entry.key);
      items.push({
        id: slugify(entry.key),
        name: entry.key,
        coins:
          readNumberProp(entry.body, "coins") ??
          readNumberProp(entry.body, "price") ??
          readNumberProp(entry.body, "sfl"),
        ingredients: readRecordNumberMap(entry.body, "ingredients") ?? {},
        description: readStringProp(entry.body, "description"),
        table,
      });
    }
  }

  const dims = extractConstObject(src, "COLLECTIBLES_DIMENSIONS");
  const namedCollectibles = dims
    ? splitObjectEntries(dims).map((e) => e.key)
    : [...new Set([...src.matchAll(/\|\s*"([^"]+)"/g)].map((m) => m[1]))];

  const data = {
    source: `craftables.ts (${tables.join(", ")})`,
    generatedAt: new Date().toISOString(),
    items,
    namedCollectibles: namedCollectibles.slice(0, 800),
  };
  writeJson(join(DATA_DIR, "craftables.json"), data);
  return data;
}

export function extractSkills() {
  const src = readText(typeFile("bumpkinSkills.ts"));
  const lit =
    extractConstObject(src, "BUMPKIN_REVAMP_SKILL_TREE") ??
    extractConstObject(src, "BUMPKIN_SKILL_TREE");

  const skills: Array<Record<string, unknown>> = [];
  if (lit) {
    for (const entry of splitObjectEntries(lit)) {
      const reqBody = /requirements\s*:\s*\{([^}]*)\}/.exec(entry.body)?.[1] ?? "";
      skills.push({
        id: slugify(entry.key),
        name: entry.key,
        tree: readNamedProp(entry.body, "tree") ?? readStringProp(entry.body, "tree"),
        tier: (() => {
          const m = /tier\s*:\s*(\d+)/.exec(reqBody);
          return m ? Number(m[1]) : undefined;
        })(),
        points: (() => {
          const m = /points\s*:\s*(\d+)/.exec(reqBody);
          return m ? Number(m[1]) : undefined;
        })(),
        island: (() => {
          const m = /island\s*:\s*"([^"]+)"/.exec(reqBody);
          return m?.[1];
        })(),
        disabled: readBoolProp(entry.body, "disabled") ?? false,
      });
    }
  }

  const trees = [
    ...new Set(
      skills
        .map((s) => s.tree)
        .filter((t): t is string => typeof t === "string" && t.length > 0),
    ),
  ];

  const data = {
    source: "bumpkinSkills.ts (BUMPKIN_REVAMP_SKILL_TREE)",
    generatedAt: new Date().toISOString(),
    trees,
    items: skills,
  };
  writeJson(join(DATA_DIR, "skills.json"), data);
  return data;
}

export function extractExpansions() {
  const src = readText(typeFile("expansions.ts"));

  // Layouts reveal which expansion indices exist per island family
  const layoutNames = [
    ...src.matchAll(/export const ((?:SPRING_|DESERT_|VOLCANO_)?LAND_\d+_LAYOUT)/g),
  ].map((m) => m[1]);

  const layoutGroups = [
    ...src.matchAll(
      /export const ((?:SPRING_|DESERT_|VOLCANO_)?LAYOUTS)/g,
    ),
  ].map((m) => m[1]);

  const data = {
    source: "expansions.ts (layouts index)",
    generatedAt: new Date().toISOString(),
    notes: {
      en: [
        "Expansion costs are computed dynamically in game expansion libs (not a single static price table in expansions.ts).",
        "This page lists detected land layout exports so you can see how many expansion stages exist per island theme.",
      ],
      fr: [
        "Les coûts d’expansion sont calculés dynamiquement dans les libs d’expansion (pas une table de prix unique dans expansions.ts).",
        "Cette page liste les layouts détectés pour voir combien d’étapes existent par thème d’île.",
      ],
    },
    items: layoutNames.map((name) => ({
      id: slugify(name),
      key: name,
      resources: {},
    })),
    layoutGroups,
  };
  writeJson(join(DATA_DIR, "expansions.json"), data);
  return data;
}

export function writeMeta() {
  const version = readVersion();
  writeJson(join(DATA_DIR, "meta.json"), {
    repo: version.repo,
    branch: version.branch,
    sha: version.sha,
    shortSha: version.shortSha,
    date: version.date,
    syncedAt: version.syncedAt,
    extractedAt: new Date().toISOString(),
  });
}
