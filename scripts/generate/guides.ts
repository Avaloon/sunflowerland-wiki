import { writePage, type Locale, readData } from "./helpers.ts";

type Meta = {
  shortSha?: string | null;
  sha?: string | null;
  date?: string | null;
  repo?: string;
};

export function generateGuides(meta: Meta) {
  for (const locale of ["en", "fr"] as Locale[]) {
    if (locale === "en") {
      writePage(
        "en",
        "guides/index.md",
        `---
title: Guides
---

# Guides

Mechanics explainers for Sunflower Land. Stats live on the item pages; these guides explain **how systems work**.

## Farming

- [Crops & planting](/en/guides/crops)
- [Seasons & weather](/en/guides/seasons)
- [Fruits](/en/guides/fruits)
- [Greenhouse](/en/greenhouse/)

## Production

- [Cooking & XP](/en/guides/cooking)
- [Animals & feed](/en/guides/animals)
- [Compost & resources](/en/guides/resources)

## Exploration & progression

- [Fishing & flowers](/en/guides/exploration)
- [Skills & buildings](/en/guides/progression)

---

_Reference commit: \`${meta.shortSha ?? "unknown"}\`_
`,
      );

      writePage(
        "en",
        "guides/crops.md",
        `---
title: Crops guide
---

# Crops & planting

Crops are the backbone of a farm: sell for coins, feed animals, cook food, and stock seasonal needs.

## Plots and seeds

1. Buy seeds from the market (or craft/obtain event seeds).
2. Plant on a **Crop Plot**. Rice, olive and grape: see [Greenhouse](/en/greenhouse/).
3. Wait for \`harvestSeconds\` / \`plantSeconds\` from the game data, then harvest.

Seed price, bumpkin level gate, and sell price for each crop are listed under [Crops](/en/crops/).

## Categories

The game code groups crops by grow time:

- **Basic** — up to Pumpkin-speed crops (fast turnover, low sell price)
- **Medium** — between basic and eggplant-speed
- **Advanced** — Eggplant and slower (includes animal-feed staples like Corn, Wheat, Barley)
- **Greenhouse** — Rice, Olive and Grape live on the [Greenhouse](/en/greenhouse/) page (not on crop plots)

**Overnight** crops take a day or more and reward planning around sleep / offline time.

## Animal feed crops

Keep **Corn**, **Wheat**, and **Barley** production healthy. They craft into Kernel Blend, Hay, and NutriBarley — the main animal feeds. Running out forces expensive marketplace buys.

## Crop Machine

On the desert island, the **Crop Machine** can plant certain crops outside their natural season. Use it to cover feed or lava-pit stockpiles when the calendar works against you.

## Tips

- Early game: spam basic crops for coins and unlocks.
- Mid game: reserve plots for feed + cooking ingredients before selling everything.
- Watch [Seasons](/en/seasons/) so you do not strand seeds off-season.

See also: [official how to play](https://docs.sunflower-land.com/getting-started/how-to-start).
`,
      );

      writePage(
        "en",
        "guides/seasons.md",
        `---
title: Seasons guide
---

# Seasons & weather

Sunflower Land rotates **which crops and fruits can be planted**. Off-season seeds generally cannot go into normal plots.

## The four seasons

Spring, Summer, Autumn, Winter each favour a different plant mix. **Sunflowers** are typically available year-round. Fruit availability also shifts (winter fruit can be scarce).

## New players

New farms often start in a **Summer tutorial window**, then join the live season cycle after a few days.

## Calendar events

The HUD / Codex calendar shows seasons and special events. Examples surfaced from game discussions and \`calendar.ts\` include:

- **Fish Frenzy** — boosted fishing
- **Full Moon** — marine marvels / nightshade-style seeds
- **Double Delivery** — double delivery rewards
- Risk events (floods, freeze, tornado, insect plague) that hurt crops unless you craft protections

Exact event rules change over time — re-run \`npm run pipeline\` after game updates and cross-check [Seasons](/en/seasons/).

## Preparation checklist

1. Note the next season in the Codex.
2. Hoard seeds/ingredients you will miss next season.
3. Keep feed crops (Corn / Wheat / Barley) covered via season or Crop Machine.
4. Craft weather protections if a destructive event is announced.
`,
      );

      writePage(
        "en",
        "guides/fruits.md",
        `---
title: Fruits guide
---

# Fruits

Fruit patches unlock later than basic crops and need higher Bumpkin levels. Some fruits are bushes. Grapes are grown in the [Greenhouse](/en/greenhouse/), not on fruit patches.

## Why grow fruit?

- Cooking ingredients (smoothies, kitchen recipes)
- Deliveries and chores
- Full-moon specialty fruits (Celestine, Lunara, Duskberry) for event windows

Browse [Fruits](/en/fruits/) for sell prices and seed timers.
`,
      );

      writePage(
        "en",
        "guides/cooking.md",
        `---
title: Cooking & XP guide
---

# Cooking & Bumpkin XP

**Important:** bumpkin experience comes primarily from **eating cooked food**, not from planting or harvesting. If you never cook, you level slowly.

## Buildings

Progress through cooking buildings as you level:

| Building | Role | Unlock | Cost |
|---|---|---|---|
| Fire Pit | Early recipes | Asc. 0 | Wood ×3, Stone ×2 |
| Kitchen | Broad recipe set (incl. fish / greenhouse) | Asc. 0 · lvl 5 | 10 coins · Wood ×30, Stone ×5 |
| Bakery | Cakes — high XP, heavy ingredients | Asc. 0 · lvl 8 | 200 coins · Wood ×50, Stone ×20, Gold ×5 |
| Deli | Long ferments, cheese, advanced foods | Asc. 0 · lvl 16 | 300 coins · Wood ×50, Stone ×50, Gold ×10 |
| Smoothie Shack | Juice / fruit blends | Asc. 0 · lvl 23 | Wood ×25, Stone ×25, Iron ×10 |

Details: [Buildings](/en/buildings/) · recipes: [Cooking](/en/cooking/).

## Workflow

1. Grow or buy ingredients.
2. Queue a recipe in a free building slot.
3. Optionally spend Gems to speed up.
4. Eat the food to gain XP (and satisfy deliveries/chores that need cooked items).

Oil (desert / oil wells) can be added to cooking buildings to reduce cook time.

## XP planning

- Prefer recipes with strong **XP / ingredient** value for your current farms.
- Cakes are XP-dense but expensive — save them for push levels.
- Animal products (eggs, milk) unlock higher kitchen tiers — pair with the [Animals guide](/en/guides/animals).
`,
      );

      writePage(
        "en",
        "guides/animals.md",
        `---
title: Animals guide
---

# Animals & feed

Chickens, cows, and sheep live in the **Hen House** or **Barn**. Feed them to gain animal XP; at level-ups they drop resources then sleep.

## Species snapshot

| Animal | Building | Typical products |
|---|---|---|
| Chicken | Hen House | Eggs, Feathers |
| Cow | Barn | Milk, Leather |
| Sheep | Barn | Wool, Merino Wool |

Exact drops and XP curves: [Animals](/en/animals/).

## Feed types

| Feed | Made from |
|---|---|
| Kernel Blend | Corn |
| Hay | Wheat |
| NutriBarley | Barley |
| Mixed Grain | Wheat + Corn + Barley |
| Omnifeed | Gems (premium) |
| Barn Delight | Medicine (Lemon + Honey) |

Preferred feed **changes with animal level** — the code’s \`ANIMAL_FOOD_EXPERIENCE\` table drives which feed gives 60 XP vs dump XP.

## Strategy

- Specialise skills/NFTs toward **one** animal type when possible.
- Always keep seasonal coverage for Corn, Wheat, or Barley.
- Eggs fuel baking; milk/cheese fuel high-end cooking; wool fuels crafting/dolls.
`,
      );

      writePage(
        "en",
        "guides/resources.md",
        `---
title: Resources & compost guide
---

# Resources, tools & compost

## Nodes

Trees, stone, iron, gold, crimstone, oil reserves and more regenerate on timers defined in \`resources.ts\`. See [Resources](/en/resources/) for extracted constants.

Craft axes/pickaxes at the Workbench — recipes under [Tools](/en/tools/).

## Composters

Compost Bin → Turbo → Premium unlock with Bumpkin level. They consume crops and output fertiliser / worms used to boost plots and fishing.

Building costs live under [Compost](/en/compost/) and [Buildings](/en/buildings/).
`,
      );

      writePage(
        "en",
        "guides/exploration.md",
        `---
title: Fishing & flowers guide
---

# Fishing & flowers

## Fishing

Cast with bait from the fishing spots. Calendar events like Fish Frenzy or Full Moon change catch tables. Processed fish can feed cooking or the Fish Market.

Catalogue: [Fishing](/en/fishing/).

## Flowers

Flower seeds cross-breed into many varieties for cosmetics, deliveries, and chapter goals. See [Flowers](/en/flowers/).

## Craftables

Collectibles and craft recipes are numerous (\`craftables.ts\`). Use [Craftables](/en/craftables/) as an index, then verify in-game for current chapter shops.
`,
      );

      writePage(
        "en",
        "guides/progression.md",
        `---
title: Skills & buildings guide
---

# Skills, buildings & expansions

## Bumpkin skills

Skill trees specialise your farm (crops, animals, fishing, etc.). Some pairs of skills stack net-positive; others conflict — read tooltips carefully. Index: [Skills](/en/skills/).

## Buildings

Unlock cooking, animals, compost, greenhouse, crop machine, and storage as you level. Full list: [Buildings](/en/buildings/).

## Expansions

Spending resources/coins expands land and unlocks more plots/nodes. Extracted costs (when parseable): [Expansions](/en/expansions/).
`,
      );
    } else {
      writePage(
        "fr",
        "guides/index.md",
        `---
title: Guides
---

# Guides

Guides de mécaniques pour Sunflower Land. Les stats sont sur les pages d’objets ; ici on explique **comment les systèmes marchent**.

## Agriculture

- [Cultures & plantation](/fr/guides/crops)
- [Saisons & météo](/fr/guides/seasons)
- [Fruits](/fr/guides/fruits)
- [Serre](/fr/greenhouse/)

## Production

- [Cuisine & XP](/fr/guides/cooking)
- [Animaux & nourriture](/fr/guides/animals)
- [Compost & ressources](/fr/guides/resources)

## Exploration & progression

- [Pêche & fleurs](/fr/guides/exploration)
- [Compétences & bâtiments](/fr/guides/progression)

---

_Commit de référence : \`${meta.shortSha ?? "inconnu"}\`_
`,
      );

      writePage(
        "fr",
        "guides/crops.md",
        `---
title: Guide des cultures
---

# Cultures & plantation

Les cultures sont le cœur de la ferme : coins, nourriture animale, cuisine, stocks saisonniers.

## Parcelles et graines

1. Achetez des graines au marché (ou via événements).
2. Plantez sur une **Crop Plot**. Riz, olive et raisin : page [Serre](/fr/greenhouse/).
3. Attendez le temps \`harvestSeconds\` / \`plantSeconds\`, puis récoltez.

Prix, niveau Bumpkin et vente : [Cultures](/fr/crops/).

## Catégories

Le code regroupe les cultures par temps de pousse :

- **Basique** — jusqu’au rythme Potiron (rapide, faible vente)
- **Moyenne** — entre basique et Aubergine
- **Avancée** — Aubergine et plus lent (dont Maïs, Blé, Orge pour les animaux)
- **Serre** — Riz, olive et raisin sont sur la page [Serre](/fr/greenhouse/) (pas sur les parcelles)

Les cultures **overnight** prennent un jour ou plus.

## Cultures pour les animaux

Gardez **Maïs**, **Blé** et **Orge** en production. Ils donnent Kernel Blend, Hay et NutriBarley. Sinon, le marketplace coûte cher.

## Crop Machine

Sur l’île désert, la **Crop Machine** plante certaines cultures hors saison — utile pour le feed ou les stocks Lava Pit.

## Conseils

- Début : cultures basiques pour coins et déblocages.
- Milieu : réservez des parcelles feed + cuisine avant de tout vendre.
- Surveillez les [Saisons](/fr/seasons/) pour ne pas bloquer des graines hors saison.

Voir aussi : [guide officiel](https://docs.sunflower-land.com/getting-started/how-to-start).
`,
      );

      writePage(
        "fr",
        "guides/seasons.md",
        `---
title: Guide des saisons
---

# Saisons & météo

Le jeu fait tourner **quelles cultures et fruits sont plantables**. Hors saison, les graines ne vont en général pas sur les parcelles normales.

## Quatre saisons

Printemps, été, automne, hiver : mixes différents. Les **tournesols** restent en général disponibles toute l’année. Les fruits d’hiver peuvent manquer.

## Nouveaux joueurs

Souvent une fenêtre tutoriel d’**été**, puis le cycle réel après quelques jours.

## Événements calendrier

Le Codex / HUD montre saisons et événements. Exemples : Fish Frenzy, Full Moon, Double Delivery, inondations, gel, tornade, peste d’insectes…

Les règles évoluent — relancez \`npm run pipeline\` après une maj et vérifiez [Saisons](/fr/seasons/).

## Checklist

1. Regardez la prochaine saison dans le Codex.
2. Stockez graines/ingrédients qui manqueront.
3. Couvrez Maïs / Blé / Orge (saison ou Crop Machine).
4. Crafttez des protections si un événement destructeur est annoncé.
`,
      );

      writePage(
        "fr",
        "guides/fruits.md",
        `---
title: Guide des fruits
---

# Fruits

Les fruit patches se débloquent plus tard et demandent un niveau Bumpkin plus élevé. Certains fruits sont des buissons. Le raisin se cultive dans la [Serre](/fr/greenhouse/), pas sur les patches.

## Pourquoi en cultiver ?

- Ingrédients de cuisine (smoothies, kitchen)
- Livraisons et chores
- Fruits de pleine lune (Celestine, Lunara, Duskberry)

Catalogue : [Fruits](/fr/fruits/).
`,
      );

      writePage(
        "fr",
        "guides/cooking.md",
        `---
title: Guide cuisine & XP
---

# Cuisine & XP Bumpkin

**Important :** l’XP vient surtout du fait de **manger** de la nourriture cuisinée, pas de planter/récolter.

## Bâtiments

| Bâtiment | Rôle | Déblocage | Coût |
|---|---|---|---|
| Fire Pit | Recettes de début | Asc. 0 | Wood ×3, Stone ×2 |
| Kitchen | Large set (poisson / serre) | Asc. 0 · niv. 5 | 10 coins · Wood ×30, Stone ×5 |
| Bakery | Gâteaux — beaucoup d’XP | Asc. 0 · niv. 8 | 200 coins · Wood ×50, Stone ×20, Gold ×5 |
| Deli | Ferments longs, fromage | Asc. 0 · niv. 16 | 300 coins · Wood ×50, Stone ×50, Gold ×10 |
| Smoothie Shack | Jus / blends de fruits | Asc. 0 · niv. 23 | Wood ×25, Stone ×25, Iron ×10 |

Détail : [Bâtiments](/fr/buildings/) · recettes : [Cuisine](/fr/cooking/).

## Déroulement

1. Produire ou acheter les ingrédients.
2. Lancer la recette dans un bâtiment libre.
3. Accélérer avec des Gems si besoin.
4. Manger pour l’XP (et les quêtes qui demandent du cooked).

L’huile (désert) peut réduire le temps de cuisson des bâtiments.

## Planifier l’XP

- Visez un bon ratio **XP / ingrédients**.
- Les gâteaux sont denses en XP mais chers.
- Œufs et lait ouvrent la haute cuisine — voir [Animaux](/fr/guides/animals).
`,
      );

      writePage(
        "fr",
        "guides/animals.md",
        `---
title: Guide des animaux
---

# Animaux & nourriture

Poules, vaches et moutons vivent dans le **Hen House** ou la **Barn**. Nourrissez-les pour l’XP ; à chaque niveau ils produisent puis dorment.

## Espèces

| Animal | Bâtiment | Produits typiques |
|---|---|---|
| Chicken | Hen House | Œufs, plumes |
| Cow | Barn | Lait, cuir |
| Sheep | Barn | Laine, Merino |

Détails : [Animaux](/fr/animals/).

## Feeds

| Feed | Ingrédients |
|---|---|
| Kernel Blend | Maïs |
| Hay | Blé |
| NutriBarley | Orge |
| Mixed Grain | Blé + Maïs + Orge |
| Omnifeed | Gems |
| Barn Delight | Médicament (Citron + Miel) |

Le feed préféré **change avec le niveau** (\`ANIMAL_FOOD_EXPERIENCE\`).

## Stratégie

- Spécialisez skills/NFT sur **un** type d’animal.
- Gardez toujours une couverture saisonnière Maïs / Blé / Orge.
- Œufs → pâtisserie ; lait → haute cuisine ; laine → craft.
`,
      );

      writePage(
        "fr",
        "guides/resources.md",
        `---
title: Guide ressources & compost
---

# Ressources, outils & compost

## Nœuds

Arbres, pierre, minerais, pétrole… se régénèrent selon \`resources.ts\`. Voir [Ressources](/fr/resources/).

Outils : [Outils](/fr/tools/).

## Composteurs

Compost Bin → Turbo → Premium selon le niveau. Ils consomment des cultures et donnent fertilisant / vers.

Voir [Compost](/fr/compost/) et [Bâtiments](/fr/buildings/).
`,
      );

      writePage(
        "fr",
        "guides/exploration.md",
        `---
title: Guide pêche & fleurs
---

# Pêche & fleurs

## Pêche

Appâts et spots de pêche ; les événements (Fish Frenzy, Full Moon) changent les tables. Catalogue : [Pêche](/fr/fishing/).

## Fleurs

Graines et croisements pour cosmétique, livraisons et chapitres. [Fleurs](/fr/flowers/).

## Craft

Beaucoup de collectibles (\`craftables.ts\`). Index : [Craft](/fr/craftables/).
`,
      );

      writePage(
        "fr",
        "guides/progression.md",
        `---
title: Guide compétences & bâtiments
---

# Compétences, bâtiments & expansions

## Compétences Bumpkin

Les arbres de skills spécialisent la ferme. Certaines se cumulent, d’autres se contrarient. Index : [Compétences](/fr/skills/).

## Bâtiments

Cuisine, animaux, compost, serre, crop machine… [Bâtiments](/fr/buildings/).

## Expansions

Étendre le terrain coûte ressources/coins. [Expansions](/fr/expansions/).
`,
      );
    }
  }
}

export function refreshHomes(meta: Meta) {
  const crops = readData<{ items: Array<{ kind?: string }> }>("crops.json");
  const foods = readData<{ items: unknown[] }>("consumables.json");
  const cropCount = crops.items.filter((c) => c.kind === "crop").length;
  writePage(
    "en",
    "index.md",
    `---
title: Home
description: Unofficial Sunflower Land wiki (English)
---

# Sunflower Land Wiki

Welcome to this **unofficial fan wiki**. Stats are generated from the public [sunflower-land](https://github.com/sunflower-land/sunflower-land) repository (\`${meta.shortSha ?? "…"}\`), with bilingual mechanics guides.

**Snapshot:** ${cropCount} crops · ${foods.items.length} recipes · pin \`${meta.shortSha ?? "n/a"}\`

## Browse

- [Crops](/en/crops/) · [Fruits](/en/fruits/) · [Greenhouse](/en/greenhouse/) · [Seasons](/en/seasons/)
- [Cooking](/en/cooking/) · [Animals](/en/animals/) · [Buildings](/en/buildings/)
- [Fishing](/en/fishing/) · [Flowers](/en/flowers/) · [Skills](/en/skills/)
- [Guides](/en/guides/)

## Play

- [Play Sunflower Land](https://sunflower-land.com/play)
- [Official docs](https://docs.sunflower-land.com/)

[Français](/fr/)
`,
  );

  writePage(
    "fr",
    "index.md",
    `---
title: Accueil
description: Wiki non officiel Sunflower Land (français)
---

# Wiki Sunflower Land

Bienvenue sur ce **wiki fan non officiel**. Les stats viennent du dépôt public [sunflower-land](https://github.com/sunflower-land/sunflower-land) (\`${meta.shortSha ?? "…"}\`), avec des guides de mécaniques bilingues.

**Instantané :** ${cropCount} cultures · ${foods.items.length} recettes · pin \`${meta.shortSha ?? "n/a"}\`

## Parcourir

- [Cultures](/fr/crops/) · [Fruits](/fr/fruits/) · [Serre](/fr/greenhouse/) · [Saisons](/fr/seasons/)
- [Cuisine](/fr/cooking/) · [Animaux](/fr/animals/) · [Bâtiments](/fr/buildings/)
- [Pêche](/fr/fishing/) · [Fleurs](/fr/flowers/) · [Compétences](/fr/skills/)
- [Guides](/fr/guides/)

## Jouer

- [Jouer à Sunflower Land](https://sunflower-land.com/play)
- [Docs officielles](https://docs.sunflower-land.com/)

[English](/en/)
`,
  );
}
