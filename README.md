# Sunflower Land Wiki

Fan wiki for [Sunflower Land](https://sunflower-land.com/), bilingual (**English** / **Français**), generated from the official game source:

- Game repo: [sunflower-land/sunflower-land](https://github.com/sunflower-land/sunflower-land)
- Play: [sunflower-land.com/play](https://sunflower-land.com/play)
- Official docs: [docs.sunflower-land.com](https://docs.sunflower-land.com/)

This is an **unofficial fan project**. It does not redistribute game code, media assets, or SunnySide tiles.

## Live site

GitHub only hosts the **static HTML** (branch `gh-pages`). All sync, extract, generate, and build run **locally** — there is no GitHub Actions automation.

- Default (Français): `/fr/`
- English: `/en/`

Site URL (after first publish): https://avaloon.github.io/sunflowerland-wiki/fr/

## Local workflow

```bash
npm install
npm run check-updates   # optional: see if game main moved
npm run pipeline        # sync reference → extract → generate markdown
npm run dev             # preview while editing
npm run publish:pages   # build + force-push static site to gh-pages
```

Commit and push `main` when you want to save source/scripts/data. Use `publish:pages` when you want the public site updated.

### Scripts

| Script | Purpose |
|--------|---------|
| `npm run sync` | Sparse-checkout the game repo (local only) |
| `npm run extract` | Parse game types → `data/*.json` |
| `npm run generate` | Markdown under `docs/en` and `docs/fr` |
| `npm run check-updates` | Compare pinned SHA vs upstream `main` |
| `npm run build` | Production static site |
| `npm run publish:pages` | Build locally and push to `gh-pages` |

## Reference version

The pinned game commit is in [`reference/version.json`](reference/version.json). The sparse checkout under `reference/sunflower-land/` is gitignored and never published.

## Licence / disclaimer

- Wiki text and scripts in this repository: available for community use of this fan wiki.
- Sunflower Land game code: **No Licence** — do not reuse or redistribute.
- Game images and music: not available for commercial or private reuse; see the [upstream README](https://github.com/sunflower-land/sunflower-land).
