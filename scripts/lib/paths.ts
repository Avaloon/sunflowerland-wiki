import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const ROOT = resolve(__dirname, "../..");
export const REFERENCE_DIR = join(ROOT, "reference", "sunflower-land");
export const VERSION_PATH = join(ROOT, "reference", "version.json");
export const DOCS_DIR = join(ROOT, "docs");
export const TYPES_DIR = join(REFERENCE_DIR, "src", "features", "game", "types");

export const UPSTREAM_REPO = "sunflower-land/sunflower-land";
export const UPSTREAM_URL = `https://github.com/${UPSTREAM_REPO}.git`;

export type VersionInfo = {
  repo: string;
  branch: string;
  sha: string | null;
  shortSha: string | null;
  date: string | null;
  syncedAt: string | null;
};

export function readVersion(): VersionInfo {
  return JSON.parse(readFileSync(VERSION_PATH, "utf8")) as VersionInfo;
}

export function writeVersion(version: VersionInfo): void {
  writeFileSync(VERSION_PATH, JSON.stringify(version, null, 2) + "\n");
}

export function readText(path: string): string {
  return readFileSync(path, "utf8");
}

export function pathExists(path: string): boolean {
  return existsSync(path);
}
