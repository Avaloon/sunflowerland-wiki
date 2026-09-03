import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, extname, join } from "node:path";
import { DOCS_DIR, REFERENCE_DIR } from "../lib/paths.ts";

const PUBLIC_ICONS = join(DOCS_DIR, "public", "icons");

const NAMED_ASSETS: Record<string, string[]> = {
  Grape: ["src/assets/greenhouse/grape.webp"],
  Olive: ["src/assets/greenhouse/olive.webp"],
  Rice: ["src/assets/greenhouse/rice.webp"],
  Apple: ["src/assets/resources/apple.png"],
  Orange: ["src/assets/resources/orange.png"],
  Blueberry: ["src/assets/resources/blueberry.png"],
  Banana: ["src/assets/resources/banana.png"],
  Lemon: ["src/assets/resources/lemon.webp"],
  Tomato: ["src/assets/fruit/tomato/tomato.webp"],
  Celestine: ["src/assets/fruit/celestine/celestine.webp"],
  Lunara: ["src/assets/fruit/lunara/lunara.webp"],
  Duskberry: ["src/assets/fruit/duskberry/duskberry.webp"],
};

function copyIfExists(rel: string, destName: string): string | undefined {
  const src = join(REFERENCE_DIR, rel);
  if (!existsSync(src)) return undefined;
  mkdirSync(PUBLIC_ICONS, { recursive: true });
  const dest = join(PUBLIC_ICONS, destName);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
  return `/icons/${destName}`;
}

function downloadCommunityCropIcon(name: string, id: string): string | undefined {
  mkdirSync(PUBLIC_ICONS, { recursive: true });
  const destName = `${id}.png`;
  const dest = join(PUBLIC_ICONS, destName);
  const url = `https://sfl.world/img/source/${encodeURIComponent(name)}.png`;
  try {
    execFileSync("curl", ["-fsSL", url, "-o", dest], { stdio: "ignore" });
    if (existsSync(dest)) return `/icons/${destName}`;
  } catch {
    return undefined;
  }
  return undefined;
}

/** Copy produce sprites from the game checkout; plot crops fall back to community crop icons. */
export function copyProduceIcon(name: string, id: string): string | undefined {
  for (const rel of NAMED_ASSETS[name] ?? []) {
    const copied = copyIfExists(rel, `${id}${extname(rel)}`);
    if (copied) return copied;
  }
  return downloadCommunityCropIcon(name, id);
}

export function copySeasonIcons(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const season of ["spring", "summer", "autumn", "winter"]) {
    const copied = copyIfExists(`src/assets/icons/${season}.webp`, `seasons/${season}.webp`);
    if (copied) out[season] = copied;
  }
  return out;
}
