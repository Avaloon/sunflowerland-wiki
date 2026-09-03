import { existsSync } from "node:fs";
import { TYPES_DIR } from "../lib/paths.ts";
import {
  extractAnimals,
  extractBuildings,
  extractComposters,
  extractConsumables,
  extractCraftables,
  extractCrops,
  extractExpansions,
  extractFishing,
  extractFlowers,
  extractFruits,
  extractResources,
  extractSeasons,
  extractSkills,
  extractTools,
  writeMeta,
} from "./extractors.ts";

function main() {
  if (!existsSync(TYPES_DIR)) {
    console.error(`Missing reference types at ${TYPES_DIR}`);
    console.error("Run: npm run sync");
    process.exit(1);
  }

  console.log("Extracting game data…");
  const results: Record<string, number | string> = {};

  const crops = extractCrops();
  results.crops = crops.items.length;

  const fruits = extractFruits();
  results.fruits = fruits.items.length;

  extractSeasons();
  results.seasons = "ok";

  const consumables = extractConsumables();
  results.consumables = consumables.items.length;

  const buildings = extractBuildings();
  results.buildings = buildings.items.length;

  const animals = extractAnimals();
  results.animals = animals.animals.length;

  const composters = extractComposters();
  results.composters = composters.items.length;

  const resources = extractResources();
  results.resources = resources.resourceNames.length;

  const tools = extractTools();
  results.tools = tools.items.length;

  const fishing = extractFishing();
  results.fishing = fishing.items.length;

  const flowers = extractFlowers();
  results.flowers = flowers.items.length;

  const craftables = extractCraftables();
  results.craftables = craftables.items.length || craftables.namedCollectibles.length;

  const skills = extractSkills();
  results.skills = skills.items.length;

  const expansions = extractExpansions();
  results.expansions = expansions.items.length;

  writeMeta();

  console.log("Done. Counts:");
  for (const [k, v] of Object.entries(results)) {
    console.log(`  ${k}: ${v}`);
  }
}

main();
