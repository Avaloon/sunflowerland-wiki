/**
 * Lightweight helpers to pull object-literal tables out of game TypeScript files.
 * These are intentional best-effort parsers for Sunflower Land type modules.
 */

/** Extract the body of `export const NAME = { ... };` (brace-balanced). */
export function extractConstObject(source: string, exportName: string): string | null {
  const patterns = [
    new RegExp(`export\\s+const\\s+${exportName}\\s*(?::\\s*[^=]+)?=\\s*\\{`),
    new RegExp(`const\\s+${exportName}\\s*(?::\\s*[^=]+)?=\\s*\\{`),
  ];

  let start = -1;
  for (const re of patterns) {
    const m = re.exec(source);
    if (m) {
      start = m.index + m[0].length - 1;
      break;
    }
  }
  if (start < 0) return null;

  let depth = 0;
  let inString: string | null = null;
  let escaped = false;

  for (let i = start; i < source.length; i++) {
    const ch = source[i];
    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === inString) inString = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inString = ch;
      continue;
    }
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  return null;
}

/** Split top-level `Key: { ... },` entries from an object literal body. */
export function splitObjectEntries(objectLiteral: string): Array<{ key: string; body: string }> {
  const inner = objectLiteral.trim().replace(/^\{/, "").replace(/\}$/, "");
  const entries: Array<{ key: string; body: string }> = [];

  let i = 0;
  while (i < inner.length) {
    while (i < inner.length && /[\s,]/.test(inner[i])) i++;
    if (i >= inner.length) break;

    // skip line comments
    if (inner.startsWith("//", i)) {
      const nl = inner.indexOf("\n", i);
      i = nl < 0 ? inner.length : nl + 1;
      continue;
    }
    // skip block comments
    if (inner.startsWith("/*", i)) {
      const end = inner.indexOf("*/", i + 2);
      i = end < 0 ? inner.length : end + 2;
      continue;
    }

    let key = "";
    if (inner[i] === '"' || inner[i] === "'") {
      const quote = inner[i];
      i++;
      let buf = "";
      while (i < inner.length && inner[i] !== quote) {
        if (inner[i] === "\\") {
          buf += inner[i + 1] ?? "";
          i += 2;
          continue;
        }
        buf += inner[i++];
      }
      i++; // closing quote
      key = buf;
    } else {
      const m = /^([A-Za-z0-9_]+)/.exec(inner.slice(i));
      if (!m) break;
      key = m[1];
      i += m[1].length;
    }

    while (i < inner.length && /\s/.test(inner[i])) i++;
    if (inner[i] !== ":") {
      // spread or invalid — skip until next top-level comma heuristically
      break;
    }
    i++; // :
    while (i < inner.length && /\s/.test(inner[i])) i++;

    const valueStart = i;
    let depth = 0;
    let inString: string | null = null;
    let escaped = false;
    let ended = false;

    for (; i < inner.length; i++) {
      const ch = inner[i];
      if (inString) {
        if (escaped) {
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          escaped = true;
          continue;
        }
        if (ch === inString) inString = null;
        continue;
      }
      if (ch === '"' || ch === "'" || ch === "`") {
        inString = ch;
        continue;
      }
      if (ch === "{" || ch === "[" || ch === "(") depth++;
      else if (ch === "}" || ch === "]" || ch === ")") depth--;
      else if (ch === "," && depth === 0) {
        entries.push({ key, body: inner.slice(valueStart, i).trim() });
        i++;
        ended = true;
        break;
      }
    }
    if (!ended) {
      entries.push({ key, body: inner.slice(valueStart).trim().replace(/,\s*$/, "") });
      break;
    }
  }

  return entries;
}

export function readNumberProp(body: string, prop: string): number | undefined {
  const re = new RegExp(`${prop}\\s*:\\s*([\\d.]+(?:\\s*\\*\\s*[\\d.]+)*)`);
  const m = re.exec(body);
  if (!m) return undefined;
  return evalArithmetic(m[1]);
}

export function readStringProp(body: string, prop: string): string | undefined {
  const re = new RegExp(`${prop}\\s*:\\s*(?:translate\\([^)]*\\)|"([^"]*)"|'([^']*)')`);
  const m = re.exec(body);
  if (!m) return undefined;
  return m[1] ?? m[2];
}

export function readNamedProp(body: string, prop: string): string | undefined {
  const re = new RegExp(`${prop}\\s*:\\s*"([^"]+)"`);
  const m = re.exec(body);
  return m?.[1];
}

/** Parse `prop: [ "a", "b", // comment \n "c" ]` from an object literal. */
export function readStringArrayProp(objectLiteral: string, prop: string): string[] | undefined {
  const re = new RegExp(`${prop}\\s*:\\s*\\[`);
  const m = re.exec(objectLiteral);
  if (!m) return undefined;
  const start = m.index + m[0].length - 1;
  let depth = 0;
  let inString: string | null = null;
  let escaped = false;
  for (let i = start; i < objectLiteral.length; i++) {
    const ch = objectLiteral[i];
    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === inString) inString = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inString = ch;
      continue;
    }
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        const inner = objectLiteral.slice(start + 1, i);
        return [...inner.matchAll(/"([^"]+)"/g)].map((x) => x[1]);
      }
    }
  }
  return undefined;
}

export function readBoolProp(body: string, prop: string): boolean | undefined {
  const re = new RegExp(`${prop}\\s*:\\s*(true|false)`);
  const m = re.exec(body);
  if (!m) return undefined;
  return m[1] === "true";
}

/** Evaluate simple `a * b * c` numeric expressions used in game timers. */
export function evalArithmetic(expr: string): number {
  const parts = expr.split("*").map((p) => Number(p.trim()));
  if (parts.some((n) => Number.isNaN(n))) return Number(expr);
  return parts.reduce((a, b) => a * b, 1);
}

/** Parse `5`, `5 * 60`, or `new Decimal(5)` into a number. */
export function parseNumericValue(raw: string): number | undefined {
  const trimmed = raw.replace(/,$/, "").trim();
  const decimal = /new\s+Decimal\s*\(\s*([\d.]+)\s*\)/.exec(trimmed);
  if (decimal) return Number(decimal[1]);
  if (/^[\d.\s*]+$/.test(trimmed)) return evalArithmetic(trimmed);
  const plain = Number(trimmed);
  return Number.isNaN(plain) ? undefined : plain;
}

/** Extract ingredients / ingredients map like `{ Wheat: 5, Egg: new Decimal(2) }` */
export function readRecordNumberMap(body: string, prop: string): Record<string, number> | undefined {
  const re = new RegExp(`${prop}\\s*:\\s*\\{`);
  const m = re.exec(body);
  if (!m) return undefined;
  const start = m.index + m[0].length - 1;
  let depth = 0;
  let end = -1;
  for (let i = start; i < body.length; i++) {
    if (body[i] === "{") depth++;
    else if (body[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end < 0) return undefined;
  const lit = body.slice(start, end + 1);
  const out: Record<string, number> = {};
  for (const entry of splitObjectEntries(lit)) {
    const num = parseNumericValue(entry.body);
    if (num !== undefined) out[entry.key] = num;
  }
  return out;
}

/** Parse nested `Animal: { 0: { Egg: new Decimal(1) }, ... }` style maps. */
export function readNestedNumericMaps(objectLiteral: string): Record<string, Record<string, Record<string, number>>> {
  const outer: Record<string, Record<string, Record<string, number>>> = {};
  for (const animal of splitObjectEntries(objectLiteral)) {
    const levels: Record<string, Record<string, number>> = {};
    if (!animal.body.trim().startsWith("{")) continue;
    for (const level of splitObjectEntries(animal.body)) {
      const drops: Record<string, number> = {};
      if (!level.body.trim().startsWith("{")) continue;
      for (const item of splitObjectEntries(level.body)) {
        const num = parseNumericValue(item.body);
        if (num !== undefined) drops[item.key] = num;
      }
      levels[level.key] = drops;
    }
    outer[animal.key] = levels;
  }
  return outer;
}

/** Parse `Animal: { 0: 0, 1: 60, ... }` */
export function readNestedNumberMap(objectLiteral: string): Record<string, Record<string, number>> {
  const outer: Record<string, Record<string, number>> = {};
  for (const entry of splitObjectEntries(objectLiteral)) {
    const inner: Record<string, number> = {};
    if (!entry.body.trim().startsWith("{")) continue;
    for (const level of splitObjectEntries(entry.body)) {
      const num = parseNumericValue(level.body);
      if (num !== undefined) inner[level.key] = num;
    }
    outer[entry.key] = inner;
  }
  return outer;
}

export function readNestedLevel(
  body: string,
  prop: string,
): { ascension?: number; level?: number } | undefined {
  const re = new RegExp(`${prop}\\s*:\\s*\\{([^}]*)\\}`);
  const m = re.exec(body);
  if (!m) return undefined;
  const inner = m[1];
  const ascension = /ascension\s*:\s*(\d+)/.exec(inner);
  const level = /level\s*:\s*(\d+)/.exec(inner);
  return {
    ascension: ascension ? Number(ascension[1]) : undefined,
    level: level ? Number(level[1]) : undefined,
  };
}
