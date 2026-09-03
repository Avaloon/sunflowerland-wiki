import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  REFERENCE_DIR,
  TYPES_DIR,
  UPSTREAM_REPO,
  readVersion,
} from "./lib/paths.ts";

const WATCH_FILES = [
  "crops.ts",
  "fruits.ts",
  "seeds.ts",
  "calendar.ts",
  "consumables.ts",
  "buildings.ts",
  "animals.ts",
  "composters.ts",
  "resources.ts",
  "tools.ts",
  "fishing.ts",
  "flowers.ts",
  "craftables.ts",
  "bumpkinSkills.ts",
  "expansions.ts",
];

function run(cmd: string, args: string[]): string {
  return execFileSync(cmd, args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function main() {
  const version = readVersion();
  if (!version.sha) {
    console.error("No local SHA pinned. Run: npm run sync");
    process.exit(1);
  }

  const remote = JSON.parse(
    run("gh", ["api", `repos/${UPSTREAM_REPO}/commits/${version.branch}`]),
  ) as { sha: string; commit: { committer: { date: string }; message: string } };

  const remoteSha = remote.sha;
  const remoteShort = remoteSha.slice(0, 7);

  console.log(`Local pin : ${version.shortSha} (${version.date})`);
  console.log(`Upstream  : ${remoteShort} (${remote.commit.committer.date})`);
  console.log(`Message   : ${remote.commit.message.split("\n")[0]}`);

  if (remoteSha === version.sha) {
    console.log("\nOK — wiki reference is up to date.");
    return;
  }

  console.log("\nUPDATE AVAILABLE — local pin differs from upstream main.\n");

  if (!existsSync(REFERENCE_DIR)) {
    console.log("Reference checkout missing. Run npm run sync then re-check.");
    process.exit(2);
  }

  // Compare watched type files between local pin and remote tip
  try {
    const diffName = run("git", [
      "-C",
      REFERENCE_DIR,
      "diff",
      "--name-only",
      version.sha,
      remoteSha,
      "--",
      "src/features/game/types",
    ]);
    const changed = diffName
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    const watchedHits = changed.filter((p) =>
      WATCH_FILES.some((f) => p.endsWith(`/${f}`) || p.endsWith(f)),
    );

    if (changed.length === 0) {
      console.log("No changes under src/features/game/types between pins.");
    } else {
      console.log(`Changed type files (${changed.length}):`);
      for (const f of changed.slice(0, 40)) console.log(`  - ${f}`);
      if (changed.length > 40) console.log(`  … +${changed.length - 40} more`);
    }

    if (watchedHits.length) {
      console.log("\nWatched wiki sources that changed:");
      for (const f of watchedHits) console.log(`  * ${f}`);
      console.log("\nSuggested next step:");
      console.log("  npm run pipeline");
    } else {
      console.log("\nNo watched wiki source files changed (types may still need review).");
    }
  } catch (err) {
    console.log(
      "Could not diff local reference against remote tip (fetch may be needed).",
    );
    console.log("Run: npm run sync");
    console.error(err);
  }

  // Ensure TYPES_DIR exists for messaging
  if (!existsSync(TYPES_DIR)) {
    console.log(`Expected types at ${join(TYPES_DIR)}`);
  }

  process.exit(2);
}

main();
