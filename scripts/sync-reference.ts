import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import {
  REFERENCE_DIR,
  UPSTREAM_REPO,
  UPSTREAM_URL,
  readVersion,
  writeVersion,
  type VersionInfo,
} from "./lib/paths.ts";

function run(cmd: string, args: string[], cwd?: string): string {
  return execFileSync(cmd, args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function ghApiJson<T>(path: string): T {
  const raw = run("gh", ["api", path]);
  return JSON.parse(raw) as T;
}

async function main() {
  const version = readVersion();
  console.log(`Syncing reference from ${UPSTREAM_REPO} (${version.branch})…`);

  const commit = ghApiJson<{
    sha: string;
    commit: { committer: { date: string }; message: string };
  }>(`repos/${UPSTREAM_REPO}/commits/${version.branch}`);

  const sha = commit.sha;
  const shortSha = sha.slice(0, 7);
  const date = commit.commit.committer.date;

  if (!existsSync(REFERENCE_DIR)) {
    console.log("Cloning sparse checkout…");
    run("git", [
      "clone",
      "--filter=blob:none",
      "--sparse",
      "--branch",
      version.branch,
      "--single-branch",
      UPSTREAM_URL,
      REFERENCE_DIR,
    ]);
    run("git", ["sparse-checkout", "set", ...version.sparsePaths], REFERENCE_DIR);
  } else {
    console.log("Updating existing reference checkout…");
    run("git", ["fetch", "origin", version.branch], REFERENCE_DIR);
    run("git", ["sparse-checkout", "set", ...version.sparsePaths], REFERENCE_DIR);
  }

  run("git", ["checkout", "--force", sha], REFERENCE_DIR);

  const next: VersionInfo = {
    ...version,
    sha,
    shortSha,
    date,
    syncedAt: new Date().toISOString(),
  };
  writeVersion(next);

  console.log(`Pinned to ${shortSha} (${date})`);
  console.log(`Message: ${commit.commit.message.split("\n")[0]}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
