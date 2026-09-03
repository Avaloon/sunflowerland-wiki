/**
 * Build the VitePress site locally and push only the static output to gh-pages.
 * No GitHub Actions — sync/extract/generate/build all stay on your machine.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, cpSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ROOT } from "./lib/paths.ts";

const REPO_NAME = "sunflowerland-wiki";
const DIST = join(ROOT, "docs", ".vitepress", "dist");

function run(cmd: string, args: string[], cwd?: string): string {
  return execFileSync(cmd, args, {
    cwd: cwd ?? ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    env: process.env,
  }).trim();
}

function main() {
  const base = process.env.DOCS_BASE || `/${REPO_NAME}/`;
  console.log(`Building with DOCS_BASE=${base} …`);
  execFileSync("npm", ["run", "build"], {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, DOCS_BASE: base },
    shell: true,
  });

  if (!existsSync(DIST)) {
    console.error(`Missing build output at ${DIST}`);
    process.exit(1);
  }

  const remote = run("git", ["remote", "get-url", "origin"]);
  const tmp = mkdtempSync(join(tmpdir(), "sfl-wiki-pages-"));
  console.log(`Publishing ${DIST} → origin/gh-pages …`);

  try {
    cpSync(DIST, tmp, { recursive: true });
    run("git", ["init"], tmp);
    run("git", ["checkout", "-b", "gh-pages"], tmp);
    run("git", ["add", "-A"], tmp);
    run(
      "git",
      ["commit", "-m", "Publish static wiki site (local build)"],
      tmp,
    );
    run("git", ["remote", "add", "origin", remote], tmp);
    run("git", ["push", "-f", "origin", "gh-pages"], tmp);
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }

  console.log("Done.");
  console.log(`Site: https://avaloon.github.io/${REPO_NAME}/`);
  console.log(
    "If Pages is not enabled yet: repo Settings → Pages → Deploy from branch → gh-pages / (root)",
  );
}

main();
