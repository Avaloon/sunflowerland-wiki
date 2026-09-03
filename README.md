# Sunflower Land Wiki

Fan wiki for [Sunflower Land](https://sunflower-land.com/), bilingual (**English** / **Français**), generated from the official game source:

- Game repo: [sunflower-land/sunflower-land](https://github.com/sunflower-land/sunflower-land)
- Play: [sunflower-land.com/play](https://sunflower-land.com/play)
- Official docs: [docs.sunflower-land.com](https://docs.sunflower-land.com/)

This is an **unofficial fan project**. It does not redistribute game code, media assets, or SunnySide tiles.

## Live site

GitHub Pages only hosts the static VitePress site. **Sync / extract / generate stay local** — nothing on GitHub pulls the game repo or refreshes data automatically.

- English: `/en/`
- Français: `/fr/`

## Local workflow (source of truth)

```bash
npm install
npm run check-updates   # optional: see if game main moved
npm run pipeline        # sync reference → extract → generate markdown
npm run dev             # preview locally
```

Then commit and push the updated `data/` + `docs/` so Pages rebuilds.

### Scripts

| Script | Purpose |
|--------|---------|
| `npm run sync` | Sparse-checkout the game repo into `reference/sunflower-land` (local only) |
| `npm run extract` | Parse game types → `data/*.json` |
| `npm run generate` | Build markdown under `docs/en` and `docs/fr` |
| `npm run check-updates` | Compare pinned SHA vs upstream `main` |
| `npm run build` | Production static site (also used by Pages CI) |

## Reference version

The pinned game commit is stored in [`reference/version.json`](reference/version.json). The sparse checkout under `reference/sunflower-land/` is gitignored and never published.

## Licence / disclaimer

- Wiki text and scripts in this repository: available for community use of this fan wiki.
- Sunflower Land game code: **No Licence** — do not reuse or redistribute.
- Game images and music: not available for commercial or private reuse; see the [upstream README](https://github.com/sunflower-land/sunflower-land).
