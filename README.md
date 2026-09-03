# Sunflower Land Wiki

Fan wiki for [Sunflower Land](https://sunflower-land.com/), bilingual (**English** / **Français**), documented from the official game source:

- Game repo: [sunflower-land/sunflower-land](https://github.com/sunflower-land/sunflower-land)
- Play: [sunflower-land.com/play](https://sunflower-land.com/play)
- Official docs: [docs.sunflower-land.com](https://docs.sunflower-land.com/)

This is an **unofficial fan project**. It does not redistribute game code, media assets, or SunnySide tiles.

## Live site

GitHub only hosts the **static HTML** (branch `gh-pages`). Sync, editing, and build run **locally** — there is no GitHub Actions automation.

- Default (Français): `/fr/`
- English: `/en/`

Site URL (after first publish): https://avaloon.github.io/sunflowerland-wiki/fr/

## Local workflow

```bash
npm install
npm run sync            # clone/update full game repo under reference/sunflower-land/
npm run check-updates   # see if upstream main moved + which wiki areas to review
npm run dev             # preview while editing docs/
npm run publish:pages   # build + force-push static site to gh-pages
```

### When the game updates

1. `npm run check-updates` — compare the pinned SHA to upstream `main` and list changed game files
2. `npm run sync` — if you decide to align the local legend
3. Read the diff in `reference/sunflower-land/` for the files that changed
4. Edit **only** the matching pages under `docs/`
5. Commit the wiki repo and run `npm run publish:pages` if you want the public site updated

### Scripts

| Script | Purpose |
|--------|---------|
| `npm run sync` | Full clone/update of the game repo (local legend only) |
| `npm run check-updates` | Compare pinned SHA vs upstream `main` + wiki hints |
| `npm run build` | Production static site |
| `npm run publish:pages` | Build locally and push to `gh-pages` |

## Reference version

The pinned game commit is in [`reference/version.json`](reference/version.json). The full checkout under `reference/sunflower-land/` is gitignored and never published.

## Content status

- **Crops** (`docs/*/crops/`) — example section filled from the game sources
- Other sections — stubs to complete by reading the local legend

## Licence / disclaimer

- Wiki text and scripts in this repository: available for community use of this fan wiki.
- Sunflower Land game code: **No Licence** — do not reuse or redistribute.
- Game images and music: not available for commercial or private reuse; see the [upstream README](https://github.com/sunflower-land/sunflower-land).
