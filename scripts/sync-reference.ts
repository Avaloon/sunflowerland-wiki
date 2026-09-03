/**
 * Clone or update the full local game repo used as the wiki legend.
 */
import { execFileSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
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

function isSparseCheckout(cwd: string): boolean {
  try {
    const mode = run("git", ["config", "--get", "core.sparseCheckout"], cwd);
    return mode === "true";
  } catch {
    return false;
  }
}

async function main() {
  const version = readVersion();
  console.log(`Syncing full reference from ${UPSTREAM_REPO} (${version.branch})…`);

  const commit = ghApiJson<{
    sha: string;
    commit: { committer: { date: string }; message: string };
  }>(`repos/${UPSTREAM_REPO}/commits/${version.branch}`);

  const sha = commit.sha;
  const shortSha = sha.slice(0, 7);
  const date = commit.commit.committer.date;

  if (existsSync(REFERENCE_DIR) && isSparseCheckout(REFERENCE_DIR)) {
    console.log("Existing checkout is sparse — removing it for a full clone…");
    rmSync(REFERENCE_DIR, { recursive: true, force: true });
  }

  if (!existsSync(REFERENCE_DIR)) {
    console.log("Cloning full repository (this may take a while)…");
    run("git", [
      "clone",
      "--branch",
      version.branch,
      "--single-branch",
      UPSTREAM_URL,
      REFERENCE_DIR,
    ]);
  } else {
    console.log("Updating existing full checkout…");
    run("git", ["fetch", "origin", version.branch], REFERENCE_DIR);
  }

  run("git", ["checkout", "--force", sha], REFERENCE_DIR);

  const next: VersionInfo = {
    repo: version.repo,
    branch: version.branch,
    sha,
    shortSha,
    date,
    syncedAt: new Date().toISOString(),
  };
  writeVersion(next);

  console.log(`Pinned to ${shortSha} (${date})`);
  console.log(`Message: ${commit.commit.message.split("\n")[0]}`);
  console.log(`Legend path: ${REFERENCE_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
