import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const ROOT = resolve(__dirname, "../..");
export const REFERENCE_DIR = join(ROOT, "reference", "sunflower-land");
export const VERSION_PATH = join(ROOT, "reference", "version.json");
export const DATA_DIR = join(ROOT, "data");
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
  sparsePaths: string[];
};

export function readVersion(): VersionInfo {
  return JSON.parse(readFileSync(VERSION_PATH, "utf8")) as VersionInfo;
}

export function writeVersion(version: VersionInfo): void {
  writeFileSync(VERSION_PATH, JSON.stringify(version, null, 2) + "\n");
}

export function ensureDir(path: string): void {
  if (!existsSync(path)) mkdirSync(path, { recursive: true });
}

export function writeJson(path: string, data: unknown): void {
  ensureDir(dirname(path));
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}

export function readText(path: string): string {
  return readFileSync(path, "utf8");
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) {
    const m = Math.round(seconds / 60);
    return `${m} min`;
  }
  const h = seconds / 3600;
  if (Number.isInteger(h)) return `${h} h`;
  return `${Math.round(h * 10) / 10} h`;
}

export function formatCoins(value: number): string {
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(2).replace(/\.?0+$/, "");
}

export type Locale = "en" | "fr";

export function t(
  locale: Locale,
  dict: Record<Locale, string>,
): string {
  return dict[locale];
}
