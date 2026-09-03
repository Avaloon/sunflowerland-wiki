import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  DOCS_DIR,
  DATA_DIR,
  formatCoins,
  formatDuration,
  readText,
  type Locale,
} from "../lib/paths.ts";

export function readData<T>(name: string): T {
  return JSON.parse(readText(join(DATA_DIR, name))) as T;
}

export function writePage(locale: Locale, relativePath: string, content: string): void {
  const full = join(DOCS_DIR, locale, relativePath);
  mkdirSync(join(full, ".."), { recursive: true });
  writeFileSync(full, content.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n");
}

export function clearGenerated(locale: Locale, subdir: string): void {
  const dir = join(DOCS_DIR, locale, subdir);
  if (existsSync(dir)) {
    for (const f of readdirSync(dir)) {
      if (f === ".gitkeep") continue;
      rmSync(join(dir, f), { recursive: true, force: true });
    }
  } else {
    mkdirSync(dir, { recursive: true });
  }
}

export function ingredientsTable(ingredients: Record<string, number> | undefined, locale: Locale): string {
  const entries = Object.entries(ingredients ?? {});
  if (!entries.length) return locale === "fr" ? "_Aucun_" : "_None_";
  const header =
    locale === "fr"
      ? "| Ingrédient | Quantité |\n|---|---:|"
      : "| Ingredient | Amount |\n|---|---:|";
  const rows = entries.map(([k, v]) => `| ${k} | ${v} |`).join("\n");
  return `${header}\n${rows}`;
}

export function sourceFooter(
  locale: Locale,
  sourceFile: string,
  meta?: { shortSha?: string | null; repo?: string },
): string {
  const sha = meta?.shortSha ? ` @ \`${meta.shortSha}\`` : "";
  if (locale === "fr") {
    return `\n\n---\n\n_Données extraites de \`${sourceFile}\`${sha}. Wiki fan non officiel._\n`;
  }
  return `\n\n---\n\n_Data extracted from \`${sourceFile}\`${sha}. Unofficial fan wiki._\n`;
}

export function mdTable(headers: string[], rows: string[][]): string {
  const head = `| ${headers.join(" | ")} |`;
  const sep = `| ${headers.map(() => "---").join(" | ")} |`;
  const body = rows.map((r) => `| ${r.join(" | ")} |`).join("\n");
  return `${head}\n${sep}\n${body}`;
}

export { formatCoins, formatDuration };
export type { Locale };
