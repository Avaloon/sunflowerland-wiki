import { existsSync } from "node:fs";
import { DATA_DIR, readVersion } from "../lib/paths.ts";
import { generateCrops, generateFruits, generateGreenhouse, generateSeasons } from "./farming.ts";
import { generateBuildings, generateCooking } from "./production.ts";
import {
  generateAnimals,
  generateCompost,
  generateResources,
  generateTools,
} from "./animals-resources.ts";
import {
  generateCraftables,
  generateExpansions,
  generateFishing,
  generateFlowers,
  generateSkills,
} from "./exploration.ts";
import { generateGuides, refreshHomes } from "./guides.ts";

function main() {
  if (!existsSync(DATA_DIR)) {
    console.error("Missing data/. Run: npm run extract");
    process.exit(1);
  }

  const version = readVersion();
  const meta = {
    shortSha: version.shortSha,
    sha: version.sha,
    date: version.date,
    repo: version.repo,
  };

  console.log(`Generating wiki pages (ref ${meta.shortSha ?? "unknown"})…`);

  generateCrops(meta);
  generateFruits(meta);
  generateGreenhouse(meta);
  generateSeasons(meta);
  generateCooking(meta);
  generateBuildings(meta);
  generateAnimals(meta);
  generateCompost(meta);
  generateResources(meta);
  generateTools(meta);
  generateFishing(meta);
  generateFlowers(meta);
  generateCraftables(meta);
  generateSkills(meta);
  generateExpansions(meta);
  generateGuides(meta);
  refreshHomes(meta);

  console.log("Wiki markdown generated under docs/en and docs/fr.");
}

main();
