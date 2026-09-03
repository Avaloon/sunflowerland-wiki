/**
 * Compare the pinned game SHA to upstream main and suggest wiki pages to review.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { REFERENCE_DIR, UPSTREAM_REPO, readVersion } from "./lib/paths.ts";

/** Game type files → wiki doc folders to review when they change. */
const FILE_TO_WIKI: Record<string, string[]> = {
  "crops.ts": ["docs/*/crops/", "docs/*/guides/crops.md"],
  "seeds.ts": ["docs/*/crops/", "docs/*/fruits/", "docs/*/greenhouse/"],
  "fruits.ts": ["docs/*/fruits/"],
  "calendar.ts": ["docs/*/seasons/", "docs/*/guides/seasons.md"],
  "consumables.ts": ["docs/*/cooking/", "docs/*/guides/cooking.md"],
  "buildings.ts": ["docs/*/buildings/"],
  "animals.ts": ["docs/*/animals/", "docs/*/guides/animals.md"],
  "composters.ts": ["docs/*/compost/"],
  "resources.ts": ["docs/*/resources/", "docs/*/guides/resources.md"],
  "tools.ts": ["docs/*/tools/"],
  "fishing.ts": ["docs/*/fishing/"],
  "flowers.ts": ["docs/*/flowers/"],
  "craftables.ts": ["docs/*/craftables/"],
  "bumpkinSkills.ts": ["docs/*/skills/"],
  "expansions.ts": ["docs/*/expansions/", "docs/*/guides/progression.md"],
};

const DIFF_PATHS = [
  "src/features/game/types",
  "src/assets/crops",
  "src/assets/fruit",
  "src/assets/greenhouse",
  "src/assets/resources",
  "src/assets/icons",
];

function run(cmd: string, args: string[], cwd?: string): string {
  return execFileSync(cmd, args, {
    cwd,
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
    console.log("Reference checkout missing. Run: npm run sync");
    process.exit(2);
  }

  try {
    run("git", ["fetch", "origin", version.branch], REFERENCE_DIR);

    const diffName = run(
      "git",
      ["diff", "--name-only", version.sha, remoteSha, "--", ...DIFF_PATHS],
      REFERENCE_DIR,
    );
    const changed = diffName
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (changed.length === 0) {
      console.log("No changes under watched game paths between pins.");
    } else {
      console.log(`Changed files (${changed.length}):`);
      for (const f of changed.slice(0, 50)) console.log(`  - ${f}`);
      if (changed.length > 50) console.log(`  … +${changed.length - 50} more`);
    }

    const wikiHints = new Set<string>();
    for (const path of changed) {
      const base = path.split("/").pop() ?? "";
      const mapped = FILE_TO_WIKI[base];
      if (mapped) {
        for (const hint of mapped) wikiHints.add(hint);
      }
    }

    if (wikiHints.size) {
      console.log("\nWiki areas to review:");
      for (const hint of [...wikiHints].sort()) console.log(`  * ${hint}`);
    } else if (changed.length) {
      console.log(
        "\nNo mapped wiki sources changed — skim the diff if mechanics may still be affected.",
      );
    }

    console.log("\nSuggested next steps:");
    console.log("  1. npm run sync");
    console.log("  2. Review the changed game files in reference/sunflower-land/");
    console.log("  3. Edit only the matching docs/ pages");
  } catch (err) {
    console.log("Could not diff local reference against remote tip.");
    console.log("Run: npm run sync");
    console.error(err);
  }

  process.exit(2);
}

main();
