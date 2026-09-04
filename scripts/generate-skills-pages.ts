/**
 * One-shot / maintainable generator for docs/{en,fr}/skills/index.md
 * from the local game legend (bumpkinSkills.ts + i18n dictionaries).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { DOCS_DIR, REFERENCE_DIR, readText } from "./lib/paths";

const SKILLS_TS = join(
  REFERENCE_DIR,
  "src/features/game/types/bumpkinSkills.ts",
);
const EN_JSON = join(
  REFERENCE_DIR,
  "src/lib/i18n/dictionaries/en.json",
);
const FR_JSON = join(
  REFERENCE_DIR,
  "src/lib/i18n/dictionaries/fr.json",
);

type Island = "basic" | "spring" | "desert" | "volcano";
type Locale = "en" | "fr";

type Skill = {
  name: string;
  tree: string;
  points: number;
  tier: number;
  island: Island;
  power: boolean;
  disabled: boolean;
  npc?: string;
  cooldown?: number;
  buffKey?: string;
  debuffKey?: string;
  upgrade?: {
    maxLevel: number;
    kind: string;
    raw: string;
  };
};

const TREE_ORDER = [
  "Crops",
  "Trees",
  "Fishing",
  "Mining",
  "Cooking",
  "Fruit Patch",
  "Animals",
  "Bees & Flowers",
  "Greenhouse",
  "Machinery",
  "Compost",
  "Aging",
] as const;

const ISLAND_LABEL: Record<Locale, Record<Island, string>> = {
  en: {
    basic: "Basic",
    spring: "Spring",
    desert: "Desert",
    volcano: "Volcano",
  },
  fr: {
    basic: "Basique",
    spring: "Printemps",
    desert: "Désert",
    volcano: "Volcan",
  },
};

const TREE_LABEL: Record<Locale, Record<string, string>> = {
  en: {
    Crops: "Crops",
    Trees: "Trees",
    Fishing: "Fishing",
    Mining: "Mining",
    Cooking: "Cooking",
    "Fruit Patch": "Fruit Patch",
    Animals: "Animals",
    "Bees & Flowers": "Bees & Flowers",
    Greenhouse: "Greenhouse",
    Machinery: "Machinery",
    Compost: "Compost",
    Aging: "Aging",
  },
  fr: {
    Crops: "Cultures",
    Trees: "Arbres",
    Fishing: "Pêche",
    Mining: "Minage",
    Cooking: "Cuisine",
    "Fruit Patch": "Parcelle de fruits",
    Animals: "Animaux",
    "Bees & Flowers": "Abeilles & fleurs",
    Greenhouse: "Serre",
    Machinery: "Machines",
    Compost: "Compost",
    Aging: "Affinage",
  },
};

/** Extra mechanics notes when the in-game blurb is ambiguous. */
const SKILL_NOTES: Record<Locale, Record<string, string>> = {
  en: {
    "Nom Nom":
      "Multiplies **coins** (and **FLOWER/SFL** if the order pays that) when delivering an order that includes at least one **prepared food** (any `CONSUMABLES` item that is not raw fish). Does **not** boost tickets, item rewards, cooking yield, or Market sales. Applies for any NPC.",
    "Betty's Friend":
      "Only boosts **Betty** delivery orders that pay **coins**.",
    "Victoria's Secretary":
      "Only boosts **Victoria** delivery orders that pay **coins**.",
    "Forge-Ward Profits":
      "Only boosts **Blacksmith** delivery orders that pay **coins**.",
    "Fruity Profit":
      "Only boosts **Tango** deliveries that include a **fruit-patch fruit** and pay **coins**.",
    "Fishy Fortune":
      "Only boosts **Corale** delivery orders that pay **coins**.",
    "Double Nom":
      "Ingredient multiplier is paid when cooking starts; the extra food is granted when collecting. Rank is stored on the cooking recipe.",
    "Coin Swindler":
      "Boosts **coins** when selling plot crops at Betty's Market (not deliveries).",
    "Oil Rig":
      "Rank values are the **Wool** amount required to craft an Oil Drill (replaces Leather).",
  },
  fr: {
    "Nom Nom":
      "Multiplie les **coins** (et le **FLOWER/SFL** si la commande paie ça) à la livraison d’une commande qui contient au moins un **plat préparé** (tout item `CONSUMABLES` qui n’est pas un poisson cru). **Ne booste pas** les tickets, les récompenses items, le rendement de cuisine, ni les ventes au Market. S’applique pour **n’importe quel** PNJ.",
    "Betty's Friend":
      "Boost uniquement les livraisons de **Betty** qui paient en **coins**.",
    "Victoria's Secretary":
      "Boost uniquement les livraisons de **Victoria** qui paient en **coins**.",
    "Forge-Ward Profits":
      "Boost uniquement les livraisons du **Blacksmith** qui paient en **coins**.",
    "Fruity Profit":
      "Boost uniquement les livraisons de **Tango** qui incluent un **fruit de parcelle** et paient en **coins**.",
    "Fishy Fortune":
      "Boost uniquement les livraisons de **Corale** qui paient en **coins**.",
    "Double Nom":
      "Le multiplicateur d’ingrédients est payé au lancement de la cuisine ; la nourriture bonus est donnée à la collecte. Le rang est mémorisé sur la recette en cours.",
    "Coin Swindler":
      "Boost les **coins** à la vente de cultures de parcelle au Market de Betty (pas les livraisons).",
    "Oil Rig":
      "Les valeurs de rang sont la quantité de **Wool** requise pour crafter un Oil Drill (à la place du Leather).",
  },
};

function extractTreeBlock(src: string): string {
  const start = src.indexOf("export const BUMPKIN_REVAMP_SKILL_TREE = {");
  if (start < 0) throw new Error("BUMPKIN_REVAMP_SKILL_TREE not found");
  const from = src.indexOf("{", start);
  let depth = 0;
  for (let i = from; i < src.length; i++) {
    const c = src[i];
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return src.slice(from + 1, i);
    }
  }
  throw new Error("Unclosed BUMPKIN_REVAMP_SKILL_TREE");
}

function splitTopLevelEntries(block: string): { key: string; body: string }[] {
  const entries: { key: string; body: string }[] = [];
  const re = /(?:^|\n)\s*(?:\/\/[^\n]*\n\s*)*"([^"]+)":\s*\{/g;
  const starts: { key: string; bodyStart: number; bracePos: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(block))) {
    starts.push({
      key: m[1],
      bodyStart: m.index + m[0].length,
      bracePos: m.index + m[0].length - 1,
    });
  }
  for (let i = 0; i < starts.length; i++) {
    const { key, bracePos } = starts[i];
    let depth = 0;
    let end = bracePos;
    for (let j = bracePos; j < block.length; j++) {
      if (block[j] === "{") depth++;
      else if (block[j] === "}") {
        depth--;
        if (depth === 0) {
          end = j;
          break;
        }
      }
    }
    entries.push({ key, body: block.slice(bracePos + 1, end) });
  }
  return entries;
}

function pick(body: string, re: RegExp): string | undefined {
  const m = body.match(re);
  return m?.[1];
}

function pickTranslateKey(body: string, field: "buff" | "debuff"): string | undefined {
  // boosts: { buff: { shortDescription: translate("skill.xxx"), ... }, debuff?: {...} }
  const sectionRe =
    field === "buff"
      ? /buff:\s*\{([\s\S]*?)\n\s*\},/
      : /debuff:\s*\{([\s\S]*?)\n\s*\},?/;
  const section = body.match(sectionRe)?.[1];
  if (!section) return undefined;
  return section.match(/translate\(\s*"([^"]+)"\s*\)/)?.[1];
}

function extractBalancedObject(src: string, openBraceIndex: number): string {
  let depth = 0;
  for (let i = openBraceIndex; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") {
      depth--;
      if (depth === 0) return src.slice(openBraceIndex + 1, i);
    }
  }
  return src.slice(openBraceIndex + 1);
}

function extractUpgrade(body: string): Skill["upgrade"] | undefined {
  const m = body.match(/upgrade:\s*\{/);
  if (!m || m.index === undefined) return undefined;
  const bracePos = m.index + m[0].length - 1;
  const inner = extractBalancedObject(body, bracePos);
  return parseUpgradeInner(inner);
}

function parseUpgradeInner(inner: string): Skill["upgrade"] | undefined {
  const maxLevel = Number(pick(inner, /maxLevel:\s*(\d+)/) ?? "3");
  const kind = pick(inner, /kind:\s*"([^"]+)"/);
  if (!kind) return undefined;
  const effectMatch = inner.match(/effect:\s*\{/);
  let raw = inner.trim();
  if (effectMatch && effectMatch.index !== undefined) {
    const bracePos = effectMatch.index + effectMatch[0].length - 1;
    raw = "{" + extractBalancedObject(inner, bracePos) + "}";
  }
  return { maxLevel, kind, raw };
}

function parseSkill(name: string, body: string): Skill {
  return {
    name,
    tree: pick(body, /tree:\s*"([^"]+)"/) ?? "?",
    points: Number(pick(body, /points:\s*(\d+)/) ?? "0"),
    tier: Number(pick(body, /tier:\s*(\d+)/) ?? "0"),
    island: (pick(body, /island:\s*"([^"]+)"/) ?? "basic") as Island,
    power: /power:\s*true/.test(body),
    disabled: /disabled:\s*true/.test(body),
    npc: pick(body, /npc:\s*"([^"]+)"/),
    cooldown: (() => {
      const c = pick(body, /cooldown:\s*([^,\n]+)/);
      if (!c) return undefined;
      const n = evalNumberExpr(c.trim().replace(/,$/, ""));
      return Number.isFinite(n) ? n : undefined;
    })(),
    buffKey: pickTranslateKey(body, "buff"),
    debuffKey: pickTranslateKey(body, "debuff"),
    upgrade: extractUpgrade(body),
  };
}

/** Evaluate simple numeric expressions: 1000 * 60 * 60 * 72, 1/7, 0.95 */
function evalNumberExpr(expr: string): number {
  const cleaned = expr
    .replace(/_/g, "")
    .replace(/as const/g, "")
    .trim();
  if (/^[\d.+*/\s()-]+$/.test(cleaned)) {
    try {
      // Safe enough: digits and arithmetic only
      // eslint-disable-next-line no-new-func
      return Function(`"use strict"; return (${cleaned});`)() as number;
    } catch {
      return Number.NaN;
    }
  }
  // Known named constants referenced in skill effects
  if (cleaned === "OIL_DRILL_WOOL_BY_RANK") return Number.NaN;
  return Number(cleaned);
}

function parseNumberList(inner: string): number[] {
  return inner
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => evalNumberExpr(s));
}

const KNOWN_RANK_CONSTANTS: Record<string, number[]> = {
  OIL_DRILL_WOOL_BY_RANK: [20, 15, 10],
};

function loadDict(path: string): Record<string, string> {
  return JSON.parse(readText(path)) as Record<string, string>;
}

function t(
  dict: Record<string, string>,
  key: string | undefined,
  fallback = "—",
): string {
  if (!key) return fallback;
  return dict[key] ?? fallback;
}

/** Format numeric ranks for display by effect kind */
function formatRanks(skill: Skill, locale: Locale): string[] | null {
  const up = skill.upgrade;
  if (!up) return null;
  const raw = up.raw;
  const fr = locale === "fr";

  const numList = (field: string): number[] | null => {
    const m = raw.match(new RegExp(`${field}:\\s*\\[([^\\]]+)\\]`));
    if (!m) {
      // Named constant: ranks: OIL_DRILL_WOOL_BY_RANK
      const named = raw.match(new RegExp(`${field}:\\s*([A-Z][A-Z0-9_]+)`));
      if (named && KNOWN_RANK_CONSTANTS[named[1]]) {
        return KNOWN_RANK_CONSTANTS[named[1]];
      }
      return null;
    }
    return parseNumberList(m[1]);
  };

  const pctFromFraction = (n: number) => {
    const v = Number((n * 100).toPrecision(12));
    return `${v}%`;
  };
  const plusPctFrac = (n: number) => `+${pctFromFraction(n)}`;
  const xMul = (n: number) => `×${n}`;
  const plus = (n: number) => (n >= 0 ? `+${n}` : `${n}`);
  const minus = (n: number) => `−${n}`;

  switch (up.kind) {
    case "growthMultiplier":
    case "costMultiplier":
    case "multiplier": {
      const ranks = numList("ranks");
      return ranks ? ranks.map(xMul) : null;
    }
    case "timeReduction": {
      const ranks = numList("ranks");
      return ranks
        ? ranks.map(
            (n) => `−${pctFromFraction(n)} ${fr ? "temps" : "time"}`,
          )
        : null;
    }
    case "oilReduction":
    case "productionRate": {
      const ranks = numList("ranks");
      return ranks ? ranks.map(plusPctFrac) : null;
    }
    case "coinBonus":
    case "xpBonus": {
      const ranks = numList("ranks");
      return ranks ? ranks.map(plusPctFrac) : null;
    }
    case "additiveYield":
    case "dailyLimit":
    case "flatBonus":
    case "flatDebuff":
    case "flatReduction":
    case "flatTimeBonus": {
      const ranks = numList("ranks");
      if (!ranks) return null;
      if (up.kind === "flatDebuff") return ranks.map(minus);
      if (up.kind === "flatReduction") return ranks.map(minus);
      if (up.kind === "flatTimeBonus") {
        return ranks.map((ms) => `−${formatDuration(ms, locale)}`);
      }
      return ranks.map(plus);
    }
    case "chance": {
      // Stored as percent arg to prngChance (20 = 20%)
      const ranks = numList("ranks");
      return ranks ? ranks.map((n) => `${n}%`) : null;
    }
    case "dropChance": {
      const ranks = numList("ranks");
      if (!ranks) return null;
      return ranks.map((n) => {
        const inv = Math.round(1 / n);
        return n > 0 && n < 0.5
          ? `1/${inv} (${pctFromFraction(n)})`
          : pctFromFraction(n);
      });
    }
    case "cooldown": {
      const ranks = numList("ranks");
      return ranks ? ranks.map((ms) => formatDuration(ms, locale)) : null;
    }
    case "doubleNom": {
      const food = numList("food");
      const ingredients = numList("ingredients");
      if (!food || !ingredients) return null;
      return food.map((f, i) =>
        fr
          ? `+${f} nourriture · ×${ingredients[i]} ingrédients`
          : `+${f} food · ×${ingredients[i]} ingredients`,
      );
    }
    case "aoe": {
      const yieldM = numList("aoeYield") ?? [0, 0, 0];
      const sizes = ["7×7", "8×8", "9×9"];
      return sizes.map((size, i) => {
        const y = yieldM[i];
        if (y)
          return fr ? `${size} · +${y} rendement` : `${size} · +${y} yield`;
        return size;
      });
    }
    case "stockBonus": {
      const ranksObj = raw.match(/ranks:\s*\{([\s\S]*?)\}(?:\s*as const)?/);
      if (!ranksObj) return null;
      const parts = [
        ...ranksObj[1].matchAll(/"([^"]+)"\s*:\s*\[([^\]]+)\]/g),
        ...ranksObj[1].matchAll(/(\w+)\s*:\s*\[([^\]]+)\]/g),
      ];
      // Dedupe by key
      const seen = new Set<string>();
      const items: { key: string; vals: number[] }[] = [];
      for (const p of parts) {
        if (seen.has(p[1])) continue;
        seen.add(p[1]);
        items.push({ key: p[1], vals: parseNumberList(p[2]) });
      }
      if (!items.length) return null;
      return [0, 1, 2].map((i) =>
        items.map((it) => `${it.key} +${it.vals[i]}`).join(" · "),
      );
    }
    case "yieldWithDebuff": {
      const buff = numList("buff");
      const debuff = numList("debuff");
      if (!buff || !debuff) return null;
      return buff.map(
        (b, i) =>
          (fr ? `buff ${plus(b)} · débuff ${minus(debuff[i])}` : `buff ${plus(b)} · debuff ${minus(debuff[i])}`),
      );
    }
    case "growthWithDebuff": {
      const buff = numList("buff");
      const debuff = numList("debuff");
      if (!buff || !debuff) return null;
      return buff.map(
        (b, i) =>
          fr
            ? `favorisé ×${b} · autres ×${debuff[i]}`
            : `favoured ×${b} · others ×${debuff[i]}`,
      );
    }
    case "growthWithOilDebuff": {
      const growth = numList("growth");
      const oil = numList("oilPenalty");
      if (!growth || !oil) return null;
      return growth.map(
        (g, i) =>
          fr
            ? `croissance ×${g} · huile +${pctFromFraction(oil[i])}`
            : `growth ×${g} · oil +${pctFromFraction(oil[i])}`,
      );
    }
    case "yieldWithOilDebuff": {
      const y = numList("yield");
      const oil = numList("oilMultiplier");
      if (!y || !oil) return null;
      return y.map(
        (v, i) =>
          fr
            ? `rendement ${plus(v)} · huile ×${oil[i]}`
            : `yield ${plus(v)} · oil ×${oil[i]}`,
      );
    }
    case "rateWithGrowthDebuff": {
      const rate = numList("rate");
      const growth = numList("growth");
      if (!rate || !growth) return null;
      return rate.map(
        (r, i) =>
          fr
            ? `miel +${r} · croissance fleurs ×${growth[i]}`
            : `honey +${r} · flower growth ×${growth[i]}`,
      );
    }
    case "costWithDebuff": {
      const buff = numList("buff");
      const debuff = numList("debuff");
      if (!buff || !debuff) return null;
      return buff.map(
        (b, i) =>
          fr
            ? `favorisé ×${b} · autres ×${debuff[i]}`
            : `favoured ×${b} · others ×${debuff[i]}`,
      );
    }
    case "xpWithFeedDebuff": {
      const xp = numList("xp");
      const feed = numList("feed");
      if (!xp || !feed) return null;
      return xp.map(
        (x, i) =>
          fr
            ? `XP ×${x} · nourriture ×${feed[i]}`
            : `XP ×${x} · feed ×${feed[i]}`,
      );
    }
    case "sicknessWithSpread": {
      const sickness = numList("sickness");
      const spread = numList("spread");
      if (!sickness || !spread) return null;
      return sickness.map(
        (s, i) =>
          fr
            ? `maladie ×${s} · contagion ×${spread[i]}`
            : `sickness ×${s} · spread ×${spread[i]}`,
      );
    }
    case "frenziedFish": {
      const flat = numList("flat");
      const crit = numList("crit");
      if (!flat || !crit) return null;
      return flat.map(
        (f, i) =>
          fr
            ? `+${f} poisson · ${crit[i]}% chance +1`
            : `+${f} fish · ${crit[i]}% chance +1`,
      );
    }
    default: {
      const ranks = numList("ranks");
      if (ranks) return ranks.map(String);
      return null;
    }
  }
}

function formatDuration(ms: number, locale: Locale): string {
  const sec = ms / 1000;
  if (sec < 60) return locale === "fr" ? `${sec} s` : `${sec} s`;
  const min = sec / 60;
  if (min < 60) return locale === "fr" ? `${min} min` : `${min} min`;
  const h = min / 60;
  if (h < 24) return locale === "fr" ? `${h} h` : `${h} h`;
  const d = h / 24;
  return locale === "fr" ? `${d} j` : `${d} d`;
}

function slug(name: string): string {
  return name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function upgradeCostLabel(tier: number, locale: Locale): string {
  const points = ({ 1: 1, 2: 3, 3: 6 } as Record<number, number>)[tier] ?? tier;
  const shards = tier;
  return locale === "fr"
    ? `${points} pt · ${shards} shard${shards > 1 ? "s" : ""}`
    : `${points} pt · ${shards} shard${shards > 1 ? "s" : ""}`;
}

function renderPage(
  skills: Skill[],
  locale: Locale,
  dict: Record<string, string>,
): string {
  const byTree = new Map<string, Skill[]>();
  for (const tree of TREE_ORDER) byTree.set(tree, []);
  for (const s of skills) {
    if (!byTree.has(s.tree)) byTree.set(s.tree, []);
    byTree.get(s.tree)!.push(s);
  }

  const title = locale === "fr" ? "Compétences" : "Skills";
  const desc =
    locale === "fr"
      ? "Arbre de compétences bumpkin (revamp) — effets, rangs et coûts."
      : "Bumpkin skill tree (revamp) — effects, ranks and costs.";

  const lines: string[] = [];
  lines.push("---");
  lines.push(`title: ${title}`);
  lines.push(`description: ${desc}`);
  lines.push("---");
  lines.push("");
  lines.push(`# ${title}`);
  lines.push("");

  if (locale === "fr") {
    lines.push(
      "Les compétences se débloquent avec des **points de compétence** (1 par niveau bumpkin, y compris après ascension). Ouvre ton bumpkin → onglet **Skills**.",
    );
    lines.push("");
    lines.push("## Fonctionnement");
    lines.push("");
    lines.push("- **Arbres** : 12 catégories (Cultures, Cuisine, Minage…).");
    lines.push(
      "- **Tiers** : chaque arbre a 3 tiers. Dépenser assez de points dans un arbre débloque le tier suivant.",
    );
    lines.push(
      "- **Île** : certaines compétences exigent Spring / Desert / Volcano.",
    );
    lines.push(
      "- **Rangs (upgrades)** : la plupart des compétences montent jusqu’au rang 3. Coût d’un rang-up :",
    );
    lines.push("  - Tier 1 → **1 pt + 1 shard**");
    lines.push("  - Tier 2 → **3 pts + 2 shards**");
    lines.push("  - Tier 3 → **6 pts + 3 shards**");
    lines.push(
      "- **Power skills** : compétences actives (clic pour déclencher, souvent avec cooldown).",
    );
    lines.push("");
    lines.push(
      "_Source : `bumpkinSkills.ts` + dictionnaires i18n du clone local du jeu._",
    );
  } else {
    lines.push(
      "Skills are unlocked with **skill points** (1 per bumpkin level, including ascension bands). Open your bumpkin → **Skills** tab.",
    );
    lines.push("");
    lines.push("## How it works");
    lines.push("");
    lines.push("- **Trees**: 12 categories (Crops, Cooking, Mining…).");
    lines.push(
      "- **Tiers**: each tree has 3 tiers. Spending enough points in a tree unlocks the next tier.",
    );
    lines.push(
      "- **Island**: some skills require Spring / Desert / Volcano island.",
    );
    lines.push(
      "- **Ranks (upgrades)**: most skills can be upgraded to rank 3. Cost per rank-up:",
    );
    lines.push("  - Tier 1 → **1 pt + 1 shard**");
    lines.push("  - Tier 2 → **3 pts + 2 shards**");
    lines.push("  - Tier 3 → **6 pts + 3 shards**");
    lines.push(
      "- **Power skills**: active skills (click to trigger, often with a cooldown).",
    );
    lines.push("");
    lines.push(
      "_Source: `bumpkinSkills.ts` + i18n dictionaries in the local game legend._",
    );
  }

  lines.push("");
  lines.push(locale === "fr" ? "## Index" : "## Index");
  lines.push("");
  lines.push('<ul class="building-index">');
  for (const tree of TREE_ORDER) {
    const list = byTree.get(tree) ?? [];
    if (!list.length) continue;
    const label = TREE_LABEL[locale][tree] ?? tree;
    lines.push(
      `  <li><a href="#${slug(tree)}">${label} <span style="opacity:.65">(${list.length})</span></a></li>`,
    );
  }
  lines.push("</ul>");
  lines.push("");

  for (const tree of TREE_ORDER) {
    const list = byTree.get(tree) ?? [];
    if (!list.length) continue;
    const label = TREE_LABEL[locale][tree] ?? tree;
    lines.push(`## ${label} {#${slug(tree)}}`);
    lines.push("");

    // Sort by tier then name
    list.sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));

    for (const tier of [1, 2, 3]) {
      const tierSkills = list.filter((s) => s.tier === tier);
      if (!tierSkills.length) continue;
      lines.push(
        locale === "fr" ? `### Tier ${tier}` : `### Tier ${tier}`,
      );
      lines.push("");

      for (const s of tierSkills) {
        const id = slug(s.name);
        const buff = t(dict, s.buffKey);
        const debuff = s.debuffKey ? t(dict, s.debuffKey) : undefined;
        const ranks = formatRanks(s, locale);

        lines.push(`<div class="building-card" id="${id}">`);
        lines.push("");
        lines.push(`#### ${s.name}`);
        lines.push("");
        if (s.power) {
          lines.push(
            locale === "fr"
              ? "**Power skill** (active)"
              : "**Power skill** (active)",
          );
          lines.push("");
        }
        if (s.disabled) {
          lines.push(
            locale === "fr" ? "_Désactivée dans le jeu._" : "_Disabled in-game._",
          );
          lines.push("");
        }

        lines.push("| | |");
        lines.push("|---|---|");
        lines.push(
          `| ${locale === "fr" ? "Points" : "Points"} | ${s.points} |`,
        );
        lines.push(`| Tier | ${s.tier} |`);
        lines.push(
          `| ${locale === "fr" ? "Île" : "Island"} | ${ISLAND_LABEL[locale][s.island]} |`,
        );
        if (s.npc) lines.push(`| NPC | ${s.npc} |`);
        if (s.cooldown) {
          lines.push(
            `| Cooldown | ${formatDuration(s.cooldown, locale)} |`,
          );
        }
        if (s.upgrade) {
          lines.push(
            `| ${locale === "fr" ? "Rangs max" : "Max rank"} | ${s.upgrade.maxLevel} |`,
          );
          lines.push(
            `| ${locale === "fr" ? "Coût rang-up" : "Rank-up cost"} | ${upgradeCostLabel(s.tier, locale)} |`,
          );
          lines.push(`| ${locale === "fr" ? "Type d’effet" : "Effect kind"} | \`${s.upgrade.kind}\` |`);
        }
        lines.push("");

        lines.push(
          locale === "fr" ? "**Effet (rang 1)**" : "**Effect (rank 1)**",
        );
        lines.push("");
        lines.push(`- ${buff}`);
        if (debuff) {
          lines.push(
            `- ${locale === "fr" ? "**Débuff**" : "**Debuff**"}: ${debuff}`,
          );
        }
        const note = SKILL_NOTES[locale][s.name];
        if (note) {
          lines.push("");
          lines.push(locale === "fr" ? "**Détail**" : "**Details**");
          lines.push("");
          lines.push(note);
        }
        lines.push("");

        if (ranks && ranks.length) {
          lines.push(
            locale === "fr" ? "**Progression des rangs**" : "**Rank progression**",
          );
          lines.push("");
          lines.push(
            locale === "fr"
              ? "| Rang | Effet |"
              : "| Rank | Effect |",
          );
          lines.push("|---:|---|");
          ranks.forEach((r, i) => {
            lines.push(`| ${i + 1} | ${r} |`);
          });
          lines.push("");
        }

        lines.push("</div>");
        lines.push("");
      }
    }
  }

  return lines.join("\n");
}

function main() {
  const src = readText(SKILLS_TS);
  const block = extractTreeBlock(src);
  const entries = splitTopLevelEntries(block);
  const skills = entries.map((e) => parseSkill(e.key, e.body));

  // Filter out accidental non-skills if any
  const cleaned = skills.filter(
    (s) => s.tree !== "?" && s.points > 0 && s.tier > 0,
  );

  console.log(`Parsed ${cleaned.length} skills (${skills.length} raw entries)`);

  const en = loadDict(EN_JSON);
  const fr = loadDict(FR_JSON);

  const enMd = renderPage(cleaned, "en", en);
  const frMd = renderPage(cleaned, "fr", fr);

  const enDir = join(DOCS_DIR, "en/skills");
  const frDir = join(DOCS_DIR, "fr/skills");
  mkdirSync(enDir, { recursive: true });
  mkdirSync(frDir, { recursive: true });
  writeFileSync(join(enDir, "index.md"), enMd, "utf8");
  writeFileSync(join(frDir, "index.md"), frMd, "utf8");

  console.log(`Wrote ${join(enDir, "index.md")}`);
  console.log(`Wrote ${join(frDir, "index.md")}`);

  // Sanity: missing translations
  const missingEn = cleaned.filter((s) => s.buffKey && !en[s.buffKey]);
  const missingFr = cleaned.filter((s) => s.buffKey && !fr[s.buffKey!]);
  if (missingEn.length) {
    console.warn(
      "Missing EN keys:",
      missingEn.map((s) => s.buffKey).join(", "),
    );
  }
  if (missingFr.length) {
    console.warn(
      "Missing FR keys:",
      missingFr.map((s) => s.buffKey).join(", "),
    );
  }
}

main();
