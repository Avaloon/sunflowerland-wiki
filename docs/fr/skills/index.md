---
title: Compétences
description: Arbre de compétences bumpkin (revamp) — effets, rangs et coûts.
---

# Compétences

Les compétences se débloquent avec des **points de compétence** (1 par niveau bumpkin, y compris après ascension). Ouvre ton bumpkin → onglet **Skills**.

## Fonctionnement

- **Arbres** : 12 catégories (Cultures, Cuisine, Minage…).
- **Tiers** : chaque arbre a 3 tiers. Dépenser assez de points dans un arbre débloque le tier suivant.
- **Île** : certaines compétences exigent Spring / Desert / Volcano.
- **Rangs (upgrades)** : la plupart des compétences montent jusqu’au rang 3. Coût d’un rang-up :
  - Tier 1 → **1 pt + 1 shard**
  - Tier 2 → **3 pts + 2 shards**
  - Tier 3 → **6 pts + 3 shards**
- **Power skills** : compétences actives (clic pour déclencher, souvent avec cooldown).

_Source : `bumpkinSkills.ts` + dictionnaires i18n du clone local du jeu._

## Index

<ul class="building-index">
  <li><a href="#crops">Cultures <span style="opacity:.65">(14)</span></a></li>
  <li><a href="#trees">Arbres <span style="opacity:.65">(9)</span></a></li>
  <li><a href="#fishing">Pêche <span style="opacity:.65">(11)</span></a></li>
  <li><a href="#mining">Minage <span style="opacity:.65">(15)</span></a></li>
  <li><a href="#cooking">Cuisine <span style="opacity:.65">(12)</span></a></li>
  <li><a href="#fruit-patch">Parcelle de fruits <span style="opacity:.65">(12)</span></a></li>
  <li><a href="#animals">Animaux <span style="opacity:.65">(18)</span></a></li>
  <li><a href="#bees-flowers">Abeilles & fleurs <span style="opacity:.65">(12)</span></a></li>
  <li><a href="#greenhouse">Serre <span style="opacity:.65">(12)</span></a></li>
  <li><a href="#machinery">Machines <span style="opacity:.65">(14)</span></a></li>
  <li><a href="#compost">Compost <span style="opacity:.65">(13)</span></a></li>
  <li><a href="#aging">Affinage <span style="opacity:.65">(7)</span></a></li>
</ul>

## Cultures {#crops}

### Tier 1

<div class="building-card" id="bettys-friend">

#### Betty's Friend

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| NPC | betty |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `coinBonus` |

**Effet (rang 1)**

- Le chiffre d'affaires de livraison de Betty Coin a augmenté de 30 %

**Détail**

Boost uniquement les livraisons de **Betty** qui paient en **coins**.

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +30% |
| 2 | +45% |
| 3 | +60% |

</div>

<div class="building-card" id="chonky-scarecrow">

#### Chonky Scarecrow

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `aoe` |

**Effet (rang 1)**

- Augmente la zone d'effet (AOE) de l'épouvantail de base à 7x7 ; temps de croissance de base de la culture supplémentaire x0,9

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 7×7 |
| 2 | 8×8 · +0.05 rendement |
| 3 | 9×9 · +0.1 rendement |

</div>

<div class="building-card" id="experienced-farmer">

#### Experienced Farmer

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +0,1 Rendement moyen des cultures

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.1 |
| 2 | +0.125 |
| 3 | +0.15 |

</div>

<div class="building-card" id="green-thumb">

#### Green Thumb

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- Tracez le temps de croissance des cultures x0,95

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.95 |
| 2 | ×0.94 |
| 3 | ×0.925 |

</div>

<div class="building-card" id="old-farmer">

#### Old Farmer

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +0,1 Rendement des cultures avancé

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.1 |
| 2 | +0.125 |
| 3 | +0.15 |

</div>

<div class="building-card" id="young-farmer">

#### Young Farmer

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +0,1 Rendement des cultures de base

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.1 |
| 2 | +0.125 |
| 3 | +0.15 |

</div>

### Tier 2

<div class="building-card" id="coin-swindler">

#### Coin Swindler

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `coinBonus` |

**Effet (rang 1)**

- +10 % de pièces lors de la vente de cultures en parcelles au marché

**Détail**

Boost les **coins** à la vente de cultures de parcelle au Market de Betty (pas les livraisons).

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +10% |
| 2 | +20% |
| 3 | +30% |

</div>

<div class="building-card" id="golden-sunflower">

#### Golden Sunflower

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `dropChance` |

**Effet (rang 1)**

- 1/700 de chance de gagner 0,35 or lors de la récolte de tournesols (sauf Crop Machine)

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 1/7 (14.2857142857%) |
| 2 | 1/6 (18.1818181818%) |
| 3 | 1/4 (25%) |

</div>

<div class="building-card" id="horror-mike">

#### Horror Mike

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `aoe` |

**Effet (rang 1)**

- Augmente la zone d'effet (AOE) de Scary Mike à une zone 7x7 ; rendement moyen supplémentaire de +0,1

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 7×7 · +0.1 rendement |
| 2 | 8×8 · +0.15 rendement |
| 3 | 9×9 · +0.2 rendement |

</div>

<div class="building-card" id="lauries-gains">

#### Laurie's Gains

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `aoe` |

**Effet (rang 1)**

- Augmente la zone d'effet (AOE) de Laurie the Guckle Crow à une surface 7x7 ; rendement agricole avancé supplémentaire de +0,1

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 7×7 · +0.1 rendement |
| 2 | 8×8 · +0.15 rendement |
| 3 | 9×9 · +0.2 rendement |

</div>

<div class="building-card" id="strong-roots">

#### Strong Roots

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- x0.9 Temps de croissance avancé des cultures

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.875 |
| 3 | ×0.85 |

</div>

### Tier 3

<div class="building-card" id="acre-farm">

#### Acre Farm

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `yieldWithDebuff` |

**Effet (rang 1)**

- +1 Rendement des cultures avancé
- **Débuff**: -0,5 Rendement des cultures de base et moyen

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | buff +1 · débuff −0.5 |
| 2 | buff +1.4 · débuff −0.6 |
| 3 | buff +1.8 · débuff −0.7 |

</div>

<div class="building-card" id="hectare-farm">

#### Hectare Farm

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `yieldWithDebuff` |

**Effet (rang 1)**

- +1 Rendement des cultures de base et moyen
- **Débuff**: -0,5 Rendement des cultures avancé

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | buff +1 · débuff −0.5 |
| 2 | buff +1.4 · débuff −0.6 |
| 3 | buff +1.8 · débuff −0.7 |

</div>

<div class="building-card" id="instant-growth">

#### Instant Growth

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Cooldown | 3 j |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `cooldown` |

**Effet (rang 1)**

- Permet de récolter instantanément toutes les cultures en cours de croissance dans les parcelles

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 3 j |
| 2 | 2.5 j |
| 3 | 2 j |

</div>

## Arbres {#trees}

### Tier 1

<div class="building-card" id="insta-chop">

#### Insta-Chop

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |

**Effet (rang 1)**

- 1 Tap Trees

</div>

<div class="building-card" id="lumberjacks-extra">

#### Lumberjack's Extra

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- Rendement en bois +0,1

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.1 |
| 2 | +0.15 |
| 3 | +0.2 |

</div>

<div class="building-card" id="more-axes">

#### More Axes

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `stockBonus` |

**Effet (rang 1)**

- Crosse pour haches +50

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | Axe +50 |
| 2 | Axe +100 |
| 3 | Axe +150 |

</div>

<div class="building-card" id="tree-charge">

#### Tree Charge

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- Temps de croissance de l'arbre x0,9

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.875 |
| 3 | ×0.85 |

</div>

### Tier 2

<div class="building-card" id="fellers-discount">

#### Feller's Discount

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `costMultiplier` |

**Effet (rang 1)**

- Coût d'une pièce à la hache x0,8

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.8 |
| 2 | ×0.75 |
| 3 | ×0.7 |

</div>

<div class="building-card" id="money-tree">

#### Money Tree

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `chance` |

**Effet (rang 1)**

- 1 % de chances de trouver 200 pièces en coupant des arbres

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 1% |
| 2 | 2% |
| 3 | 3% |

</div>

<div class="building-card" id="tough-tree">

#### Tough Tree

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `chance` |

**Effet (rang 1)**

- 1/10 de chance d'obtenir un rendement en bois multiplié par 3

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 10% |
| 2 | 20% |
| 3 | 30% |

</div>

### Tier 3

<div class="building-card" id="tree-blitz">

#### Tree Blitz

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Cooldown | 1 j |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `cooldown` |

**Effet (rang 1)**

- Possibilité de faire pousser instantanément tous les arbres

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 1 j |
| 2 | 18 h |
| 3 | 12 h |

</div>

<div class="building-card" id="tree-turnaround">

#### Tree Turnaround

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `chance` |

**Effet (rang 1)**

- 15 % de chances que les arbres poussent instantanément

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 15% |
| 2 | 25% |
| 3 | 35% |

</div>

## Pêche {#fishing}

### Tier 1

<div class="building-card" id="fishermans-5-fold">

#### Fisherman's 5 Fold

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `dailyLimit` |

**Effet (rang 1)**

- +5 moulinets de pêche quotidiens

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +5 |
| 2 | +7 |
| 3 | +10 |

</div>

<div class="building-card" id="fishy-chance">

#### Fishy Chance

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `chance` |

**Effet (rang 1)**

- 10 % de chances d'obtenir +1 poisson de base

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 10% |
| 2 | 12.5% |
| 3 | 15% |

</div>

<div class="building-card" id="fishy-roll">

#### Fishy Roll

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `chance` |

**Effet (rang 1)**

- 10 % de chances d'obtenir +1 poisson avancé

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 10% |
| 2 | 12.5% |
| 3 | 15% |

</div>

<div class="building-card" id="reel-deal">

#### Reel Deal

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `costMultiplier` |

**Effet (rang 1)**

- coût d'une pièce de 0,5 tige

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.5 |
| 2 | ×0.45 |
| 3 | ×0.4 |

</div>

### Tier 2

<div class="building-card" id="big-catch">

#### Big Catch

_Désactivée dans le jeu._

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |

**Effet (rang 1)**

- Augmenter la barre pour attraper le gibier

</div>

<div class="building-card" id="fishermans-10-fold">

#### Fisherman's 10 Fold

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `dailyLimit` |

**Effet (rang 1)**

- +10 moulinets de pêche quotidiens

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +10 |
| 2 | +18 |
| 3 | +25 |

</div>

<div class="building-card" id="fishy-fortune">

#### Fishy Fortune

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| NPC | corale |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `coinBonus` |

**Effet (rang 1)**

- +100 % de pièces provenant des livraisons de Corale

**Détail**

Boost uniquement les livraisons de **Corale** qui paient en **coins**.

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +100% |
| 2 | +125% |
| 3 | +150% |

</div>

<div class="building-card" id="fishy-gamble">

#### Fishy Gamble

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `chance` |

**Effet (rang 1)**

- 20 % de chances d'obtenir +1 poisson expert

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 20% |
| 2 | 25% |
| 3 | 30% |

</div>

### Tier 3

<div class="building-card" id="fishy-feast">

#### Fishy Feast

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `xpBonus` |

**Effet (rang 1)**

- +20 % d'expérience Bumpkin avec Fish

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +20% |
| 2 | +30% |
| 3 | +40% |

</div>

<div class="building-card" id="frenzied-fish">

#### Frenzied Fish

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `frenziedFish` |

**Effet (rang 1)**

- Pendant la frénésie des poissons, +1 poisson et 50 % de chances d'obtenir +1 poisson

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +1 poisson · 50% chance +1 |
| 2 | +2 poisson · 50% chance +1 |
| 3 | +3 poisson · 0% chance +1 |

</div>

<div class="building-card" id="more-with-less">

#### More With Less

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `dailyLimit` |

**Effet (rang 1)**

- +10 moulinets de pêche quotidiens

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +10 |
| 2 | +25 |
| 3 | +50 |

</div>

## Minage {#mining}

### Tier 1

<div class="building-card" id="forge-ward-profits">

#### Forge-Ward Profits

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| NPC | blacksmith |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `coinBonus` |

**Effet (rang 1)**

- +20 % de revenus provenant des livraisons de forgerons

**Détail**

Boost uniquement les livraisons du **Blacksmith** qui paient en **coins**.

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +20% |
| 2 | +30% |
| 3 | +40% |

</div>

<div class="building-card" id="iron-bumpkin">

#### Iron Bumpkin

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- Rendement en fer +0,1

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.1 |
| 2 | +0.15 |
| 3 | +0.2 |

</div>

<div class="building-card" id="rocknroll">

#### Rock'N'Roll

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +0,1 Rendement en pierres

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.1 |
| 2 | +0.15 |
| 3 | +0.2 |

</div>

<div class="building-card" id="speed-miner">

#### Speed Miner

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- x0.8 Temps de récupération des pierres

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.8 |
| 2 | ×0.75 |
| 3 | ×0.7 |

</div>

<div class="building-card" id="tap-prospector">

#### Tap Prospector

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |

**Effet (rang 1)**

- 1 robinet pour petits nœuds minéraux

</div>

### Tier 2

<div class="building-card" id="fire-kissed">

#### Fire Kissed

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +1 rendement Crimstone pour la 5e mine consécutive

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +1 |
| 2 | +1.35 |
| 3 | +1.75 |

</div>

<div class="building-card" id="frugal-miner">

#### Frugal Miner

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `costMultiplier` |

**Effet (rang 1)**

- Coût des pièces x0,8 pour toutes les pioches

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.8 |
| 2 | ×0.7 |
| 3 | ×0.6 |

</div>

<div class="building-card" id="iron-hustle">

#### Iron Hustle

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- x0.7 Temps de récupération du fer

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.7 |
| 2 | ×0.65 |
| 3 | ×0.6 |

</div>

<div class="building-card" id="midas-sprint">

#### Midas Sprint

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- Temps de récupération de l'or x0.9

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.875 |
| 3 | ×0.85 |

</div>

<div class="building-card" id="rocky-favor">

#### Rocky Favor

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `yieldWithDebuff` |

**Effet (rang 1)**

- +1 Rendement en pierres
- **Débuff**: -0,5 Rendement en fer

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | buff +1 · débuff −0.5 |
| 2 | buff +1.4 · débuff −0.6 |
| 3 | buff +1.8 · débuff −0.7 |

</div>

### Tier 3

<div class="building-card" id="ferrous-favor">

#### Ferrous Favor

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `yieldWithDebuff` |

**Effet (rang 1)**

- +1 Rendement en fer
- **Débuff**: -0,5 Rendement en pierres

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | buff +1 · débuff −0.5 |
| 2 | buff +1.5 · débuff −0.6 |
| 3 | buff +2 · débuff −0.7 |

</div>

<div class="building-card" id="fireside-alchemist">

#### Fireside Alchemist

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- Temps de restauration de Crimstone x0.85

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.85 |
| 2 | ×0.75 |
| 3 | ×0.6 |

</div>

<div class="building-card" id="golden-touch">

#### Golden Touch

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- Rendement en or +0,5

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.5 |
| 2 | +0.75 |
| 3 | +1 |

</div>

<div class="building-card" id="midas-rush">

#### Midas Rush

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- Temps de récupération de x0.8 Gold

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.8 |
| 2 | ×0.75 |
| 3 | ×0.7 |

</div>

<div class="building-card" id="more-picks">

#### More Picks

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `stockBonus` |

**Effet (rang 1)**

- Stock augmenté : +70 pioche, +20 pioche en pierre, +7 pioche en fer, +2 pioche en or

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | Stone Pickaxe +20 · Iron Pickaxe +7 · Gold Pickaxe +2 · Pickaxe +70 |
| 2 | Stone Pickaxe +40 · Iron Pickaxe +14 · Gold Pickaxe +4 · Pickaxe +140 |
| 3 | Stone Pickaxe +80 · Iron Pickaxe +28 · Gold Pickaxe +8 · Pickaxe +280 |

</div>

## Cuisine {#cooking}

### Tier 1

<div class="building-card" id="fast-feasts">

#### Fast Feasts

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `timeReduction` |

**Effet (rang 1)**

- x0.9 Temps de cuisson au foyer et dans la cuisine

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | −10% temps |
| 2 | −15% temps |
| 3 | −20% temps |

</div>

<div class="building-card" id="munching-mastery">

#### Munching Mastery

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `xpBonus` |

**Effet (rang 1)**

- +5 % d'expérience sur Bumpkin

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +5% |
| 2 | +7.5% |
| 3 | +10% |

</div>

<div class="building-card" id="nom-nom">

#### Nom Nom

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `coinBonus` |

**Effet (rang 1)**

- +10 % de recettes liées aux livraisons de nourriture

**Détail**

Multiplie les **coins** (et le **FLOWER/SFL** si la commande paie ça) à la livraison d’une commande qui contient au moins un **plat préparé** (tout item `CONSUMABLES` qui n’est pas un poisson cru). **Ne booste pas** les tickets, les récompenses items, le rendement de cuisine, ni les ventes au Market. S’applique pour **n’importe quel** PNJ.

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +10% |
| 2 | +30% |
| 3 | +50% |

</div>

<div class="building-card" id="swift-sizzle">

#### Swift Sizzle

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `timeReduction` |

**Effet (rang 1)**

- x0.6 Temps de cuisson dans le foyer avec de l'huile

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | −40% temps |
| 2 | −45% temps |
| 3 | −50% temps |

</div>

### Tier 2

<div class="building-card" id="drive-through-deli">

#### Drive-Through Deli

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `xpBonus` |

**Effet (rang 1)**

- +15 % d'expérience Bumpkin grâce à Deli

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +15% |
| 2 | +20% |
| 3 | +25% |

</div>

<div class="building-card" id="frosted-cakes">

#### Frosted Cakes

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `timeReduction` |

**Effet (rang 1)**

- x0.9 Temps de cuisson des gâteaux

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | −10% temps |
| 2 | −20% temps |
| 3 | −30% temps |

</div>

<div class="building-card" id="juicy-boost">

#### Juicy Boost

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `xpBonus` |

**Effet (rang 1)**

- +10 % d'expérience Bumpkin grâce aux boissons

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +10% |
| 2 | +20% |
| 3 | +30% |

</div>

<div class="building-card" id="turbo-fry">

#### Turbo Fry

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `timeReduction` |

**Effet (rang 1)**

- x0.5 Temps de cuisson de la cuisine avec de l'huile

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | −50% temps |
| 2 | −55% temps |
| 3 | −60% temps |

</div>

### Tier 3

<div class="building-card" id="double-nom">

#### Double Nom

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `doubleNom` |

**Effet (rang 1)**

- +1 aliment provenant de la cuisine
- **Débuff**: 2 x ingrédients nécessaires à la cuisson

**Détail**

Le multiplicateur d’ingrédients est payé au lancement de la cuisine ; la nourriture bonus est donnée à la collecte. Le rang est mémorisé sur la recette en cours.

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +1 nourriture · ×2 ingrédients |
| 2 | +2 nourriture · ×3 ingrédients |
| 3 | +3 nourriture · ×4 ingrédients |

</div>

<div class="building-card" id="fiery-jackpot">

#### Fiery Jackpot

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `chance` |

**Effet (rang 1)**

- +20 % de chances d'obtenir +1 nourriture avec Firepit

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 20% |
| 2 | 35% |
| 3 | 50% |

</div>

<div class="building-card" id="fry-frenzy">

#### Fry Frenzy

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `timeReduction` |

**Effet (rang 1)**

- x0.4 Temps de cuisson de la charcuterie à l'huile

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | −60% temps |
| 2 | −65% temps |
| 3 | −70% temps |

</div>

<div class="building-card" id="instant-gratification">

#### Instant Gratification

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Cooldown | 4 j |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `cooldown` |

**Effet (rang 1)**

- Possibilité de préparer tous les repas en cours de cuisson prêts à être consommés

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 4 j |
| 2 | 3.5 j |
| 3 | 3 j |

</div>

## Parcelle de fruits {#fruit-patch}

### Tier 1

<div class="building-card" id="fruitful-fumble">

#### Fruitful Fumble

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- Rendement des parcelles fruitières de +0,1

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.1 |
| 2 | +0.15 |
| 3 | +0.2 |

</div>

<div class="building-card" id="fruity-heaven">

#### Fruity Heaven

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `costMultiplier` |

**Effet (rang 1)**

- x0.9 Coût des graines Fruit Patch

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.85 |
| 3 | ×0.8 |

</div>

<div class="building-card" id="fruity-profit">

#### Fruity Profit

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| NPC | tango |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `coinBonus` |

**Effet (rang 1)**

- +50 % de pièces provenant des livraisons de Tango

**Détail**

Boost uniquement les livraisons de **Tango** qui incluent un **fruit de parcelle** et paient en **coins**.

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +50% |
| 2 | +75% |
| 3 | +100% |

</div>

<div class="building-card" id="loyal-macaw">

#### Loyal Macaw

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- L'effet de Double Macaw

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.2 |
| 2 | +0.25 |
| 3 | +0.3 |

</div>

<div class="building-card" id="no-axe-no-worries">

#### No Axe No Worries

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `flatDebuff` |

**Effet (rang 1)**

- Hachez les branches et les tiges des fruits sans hache
- **Débuff**: -1 bois provenant de branches et de tiges de fruits

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | −1 |
| 2 | −0.9 |
| 3 | −0.8 |

</div>

### Tier 2

<div class="building-card" id="crime-fruit">

#### Crime Fruit

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `stockBonus` |

**Effet (rang 1)**

- +10 Bouillon de graines de tomates et de citron

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | Tomato Seed +10 · Lemon Seed +10 |
| 2 | Tomato Seed +25 · Lemon Seed +25 |
| 3 | Tomato Seed +50 · Lemon Seed +50 |

</div>

<div class="building-card" id="fruity-woody">

#### Fruity Woody

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +1 bois provenant de branches et de tiges de fruits

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +1 |
| 2 | +1.25 |
| 3 | +1.5 |

</div>

<div class="building-card" id="pear-turbocharge">

#### Pear Turbocharge

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `multiplier` |

**Effet (rang 1)**

- Effet de Double Immortal Pear

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×2 |
| 2 | ×3 |
| 3 | ×4 |

</div>

### Tier 3

<div class="building-card" id="generous-orchard">

#### Generous Orchard

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `chance` |

**Effet (rang 1)**

- 20 % de chances d'obtenir un rendement de +1 lot de fruits

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 20% |
| 2 | 30% |
| 3 | 50% |

</div>

<div class="building-card" id="long-pickings">

#### Long Pickings

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `growthWithDebuff` |

**Effet (rang 1)**

- x0.75 Temps de croissance des pommes et des bananes
- **Débuff**: Temps de croissance supérieur à 10 % pour tous les autres fruits du potager

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | favorisé ×0.75 · autres ×1.1 |
| 2 | favorisé ×0.65 · autres ×1.125 |
| 3 | favorisé ×0.55 · autres ×1.15 |

</div>

<div class="building-card" id="short-pickings">

#### Short Pickings

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `growthWithDebuff` |

**Effet (rang 1)**

- x0.75 Temps de croissance des bleuets et des oranges
- **Débuff**: Temps de croissance supérieur à 10 % pour tous les autres fruits du potager

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | favorisé ×0.75 · autres ×1.1 |
| 2 | favorisé ×0.65 · autres ×1.125 |
| 3 | favorisé ×0.55 · autres ×1.15 |

</div>

<div class="building-card" id="zesty-vibes">

#### Zesty Vibes

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `yieldWithDebuff` |

**Effet (rang 1)**

- +1 Rendement en tomates et citrons
- **Débuff**: Rendement de -0,25 pour tous les autres fruits du potager

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | buff +1 · débuff −0.25 |
| 2 | buff +1.5 · débuff −0.4 |
| 3 | buff +2 · débuff −0.5 |

</div>

## Animaux {#animals}

### Tier 1

<div class="building-card" id="bale-economy">

#### Bale Economy

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |

**Effet (rang 1)**

- Bale affecte la production de lait et de laine

</div>

<div class="building-card" id="bountiful-bounties">

#### Bountiful Bounties

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `coinBonus` |

**Effet (rang 1)**

- + 50 % de pièces provenant d'Animal Bounties

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +50% |
| 2 | +75% |
| 3 | +100% |

</div>

<div class="building-card" id="double-bale">

#### Double Bale

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `multiplier` |

**Effet (rang 1)**

- L'effet de Double Bale

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×2 |
| 2 | ×2.5 |
| 3 | ×3 |

</div>

<div class="building-card" id="efficient-feeding">

#### Efficient Feeding

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `costMultiplier` |

**Effet (rang 1)**

- x0,95 nourriture pour nourrir tous les animaux

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.95 |
| 2 | ×0.94 |
| 3 | ×0.925 |

</div>

<div class="building-card" id="fine-fibers">

#### Fine Fibers

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +0,1 Rendement en plumes, cuir et laine mérinos

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.1 |
| 2 | +0.15 |
| 3 | +0.2 |

</div>

<div class="building-card" id="restless-animals">

#### Restless Animals

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- x0.9 Durée de sommeil des animaux

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.85 |
| 3 | ×0.8 |

</div>

### Tier 2

<div class="building-card" id="abundant-harvest">

#### Abundant Harvest

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +0,2 Rendement en œufs, en laine et en lait

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.2 |
| 2 | +0.35 |
| 3 | +0.5 |

</div>

<div class="building-card" id="alternate-medicine">

#### Alternate Medicine

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |

**Effet (rang 1)**

- Barn Delight nécessite 1 citron et 1 miel en moins pour être mélangé

</div>

<div class="building-card" id="healthy-livestock">

#### Healthy Livestock

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `sicknessWithSpread` |

**Effet (rang 1)**

- x 0,5 risque de maladie

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | maladie ×0.5 · contagion ×1 |
| 2 | maladie ×0.5 · contagion ×0.5 |
| 3 | maladie ×0.5 · contagion ×0.01 |

</div>

<div class="building-card" id="heartwarming-instruments">

#### Heartwarming Instruments

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `xpBonus` |

**Effet (rang 1)**

- +50 % d'expérience animale grâce aux outils Animal Affection

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +50% |
| 2 | +60% |
| 3 | +70% |

</div>

<div class="building-card" id="kale-mix">

#### Kale Mix

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `flatBonus` |

**Effet (rang 1)**

- Mixed Grain nécessite 3 choux pour être mélangé à la place

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +3 |
| 2 | +2.5 |
| 3 | +2 |

</div>

<div class="building-card" id="merino-whisperer">

#### Merino Whisperer

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `yieldWithDebuff` |

**Effet (rang 1)**

- Rendement en laine mérinos +0,35
- **Débuff**: -0,1 Rendement en cuir et en plumes

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | buff +0.35 · débuff −0.1 |
| 2 | buff +0.6 · débuff −0.15 |
| 3 | buff +0.9 · débuff −0.2 |

</div>

### Tier 3

<div class="building-card" id="barnyard-rouse">

#### Barnyard Rouse

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Cooldown | 5 j |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `cooldown` |

**Effet (rang 1)**

- Réveille instantanément tous les animaux

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 5 j |
| 2 | 4 j |
| 3 | 3.5 j |

</div>

<div class="building-card" id="chonky-feed">

#### Chonky Feed

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `xpWithFeedDebuff` |

**Effet (rang 1)**

- 2 fois plus d'expérience animale provenant de l'alimentation animale
- **Débuff**: + 50 % de nourriture pour nourrir tous les animaux

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | XP ×2 · nourriture ×1.5 |
| 2 | XP ×2.5 · nourriture ×1.75 |
| 3 | XP ×3 · nourriture ×2 |

</div>

<div class="building-card" id="clucky-grazing">

#### Clucky Grazing

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `costWithDebuff` |

**Effet (rang 1)**

- x0,75 nourriture pour nourrir les poulets
- **Débuff**: +50 % de nourriture pour nourrir d'autres animaux

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | favorisé ×0.75 · autres ×1.5 |
| 2 | favorisé ×0.65 · autres ×1.55 |
| 3 | favorisé ×0.5 · autres ×1.65 |

</div>

<div class="building-card" id="cow-smart-nutrition">

#### Cow-Smart Nutrition

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `costWithDebuff` |

**Effet (rang 1)**

- x0,75 nourriture pour nourrir les vaches
- **Débuff**: +50 % de nourriture pour nourrir d'autres animaux

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | favorisé ×0.75 · autres ×1.5 |
| 2 | favorisé ×0.65 · autres ×1.55 |
| 3 | favorisé ×0.5 · autres ×1.65 |

</div>

<div class="building-card" id="leathercraft-mastery">

#### Leathercraft Mastery

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `yieldWithDebuff` |

**Effet (rang 1)**

- +0,35 Rendement en cuir
- **Débuff**: -0,1 Rendement en plumes et en laine mérinos

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | buff +0.35 · débuff −0.1 |
| 2 | buff +0.6 · débuff −0.15 |
| 3 | buff +0.8 · débuff −0.2 |

</div>

<div class="building-card" id="sheepwise-diet">

#### Sheepwise Diet

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `costWithDebuff` |

**Effet (rang 1)**

- x0,75 aliment pour nourrir les moutons
- **Débuff**: +50 % de nourriture pour nourrir d'autres animaux

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | favorisé ×0.75 · autres ×1.5 |
| 2 | favorisé ×0.65 · autres ×1.55 |
| 3 | favorisé ×0.5 · autres ×1.65 |

</div>

## Abeilles & fleurs {#bees-flowers}

### Tier 1

<div class="building-card" id="blooming-boost">

#### Blooming Boost

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- x0.9 Temps de croissance des fleurs

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.875 |
| 3 | ×0.85 |

</div>

<div class="building-card" id="flower-sale">

#### Flower Sale

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `costMultiplier` |

**Effet (rang 1)**

- x0.8 Coût des graines de fleurs

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.8 |
| 2 | ×0.75 |
| 3 | ×0.7 |

</div>

<div class="building-card" id="hyper-bees">

#### Hyper Bees

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `productionRate` |

**Effet (rang 1)**

- +0,1 Vitesse de production de miel

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +10% |
| 2 | +15% |
| 3 | +20% |

</div>

<div class="building-card" id="sweet-bonus">

#### Sweet Bonus

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +0,1 miel par ruche

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.1 |
| 2 | +0.15 |
| 3 | +0.2 |

</div>

### Tier 2

<div class="building-card" id="blossom-bonding">

#### Blossom Bonding

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `flatBonus` |

**Effet (rang 1)**

- +2 points de relation pour les cadeaux de fleurs

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +2 |
| 2 | +3 |
| 3 | +4 |

</div>

<div class="building-card" id="buzzworthy-treats">

#### Buzzworthy Treats

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `xpBonus` |

**Effet (rang 1)**

- +10 % d'expérience Bumpkin grâce à Honey Foods

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +10% |
| 2 | +20% |
| 3 | +30% |

</div>

<div class="building-card" id="petalled-perk">

#### Petalled Perk

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `chance` |

**Effet (rang 1)**

- 10 % de chances d'obtenir +1 fleur

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 10% |
| 2 | 17.5% |
| 3 | 25% |

</div>

<div class="building-card" id="pollen-power-up">

#### Pollen Power Up

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- Rendement agricole supplémentaire de +0,1 après pollinisation (total +0,3)

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.1 |
| 2 | +0.15 |
| 3 | +0.2 |

</div>

### Tier 3

<div class="building-card" id="bee-collective">

#### Bee Collective

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `chance` |

**Effet (rang 1)**

- +20 % de chances d'essaim d'abeilles

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 20% |
| 2 | 27.5% |
| 3 | 35% |

</div>

<div class="building-card" id="flower-power">

#### Flower Power

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- x0.8 Temps de croissance des fleurs

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.8 |
| 2 | ×0.7 |
| 3 | ×0.6 |

</div>

<div class="building-card" id="flowery-abode">

#### Flowery Abode

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `rateWithGrowthDebuff` |

**Effet (rang 1)**

- Vitesse de production de miel +0,5
- **Débuff**: +50 % de temps de croissance des fleurs

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | miel +0.5 · croissance fleurs ×1.5 |
| 2 | miel +0.75 · croissance fleurs ×1.6 |
| 3 | miel +1 · croissance fleurs ×1.7 |

</div>

<div class="building-card" id="petal-blessed">

#### Petal Blessed

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Printemps |
| Cooldown | 4 j |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `cooldown` |

**Effet (rang 1)**

- Possibilité de préparer toutes les fleurs en cours de croissance à être récoltées

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 4 j |
| 2 | 3.5 j |
| 3 | 3 j |

</div>

## Serre {#greenhouse}

### Tier 1

<div class="building-card" id="glass-room">

#### Glass Room

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +0,1 Rendement des produits de serre

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.1 |
| 2 | +0.15 |
| 3 | +0.2 |

</div>

<div class="building-card" id="rice-and-shine">

#### Rice and Shine

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- Temps de croissance x0,95 pour les produits de serre

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.95 |
| 2 | ×0.94 |
| 3 | ×0.925 |

</div>

<div class="building-card" id="seedy-business">

#### Seedy Business

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `costMultiplier` |

**Effet (rang 1)**

- x0.85 Coût des semences de serre

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.85 |
| 2 | ×0.8 |
| 3 | ×0.75 |

</div>

<div class="building-card" id="victorias-secretary">

#### Victoria's Secretary

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Désert |
| NPC | victoria |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `coinBonus` |

**Effet (rang 1)**

- +50 % de pièces provenant des livraisons de Victoria

**Détail**

Boost uniquement les livraisons de **Victoria** qui paient en **coins**.

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +50% |
| 2 | +75% |
| 3 | +100% |

</div>

### Tier 2

<div class="building-card" id="olive-express">

#### Olive Express

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- x0.9 Temps de croissance des olives

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.85 |
| 3 | ×0.8 |

</div>

<div class="building-card" id="rice-rocket">

#### Rice Rocket

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- x0.9 Temps de croissance du riz

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.85 |
| 3 | ×0.8 |

</div>

<div class="building-card" id="seeded-bounty">

#### Seeded Bounty

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +0,5 Rendement des produits de serre
- **Débuff**: +1 graine de serre à planter

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +0.5 |
| 2 | +0.75 |
| 3 | +1 |

</div>

<div class="building-card" id="vine-velocity">

#### Vine Velocity

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- x0.9 Temps de croissance du raisin

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.85 |
| 3 | ×0.8 |

</div>

### Tier 3

<div class="building-card" id="greasy-plants">

#### Greasy Plants

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `yieldWithOilDebuff` |

**Effet (rang 1)**

- +1 Rendement des produits de serre
- **Débuff**: +100 % de consommation de pétrole en serre

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | rendement +1 · huile ×2 |
| 2 | rendement +1.5 · huile ×3 |
| 3 | rendement +2 · huile ×4 |

</div>

<div class="building-card" id="greenhouse-gamble">

#### Greenhouse Gamble

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `chance` |

**Effet (rang 1)**

- 30 % de chances d'obtenir +1 produit de serre

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 30% |
| 2 | 40% |
| 3 | 50% |

</div>

<div class="building-card" id="greenhouse-guru">

#### Greenhouse Guru

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Désert |
| Cooldown | 4 j |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `cooldown` |

**Effet (rang 1)**

- Capacité de préparer à la récolte tous les produits de serre en cours de croissance

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 4 j |
| 2 | 3.5 j |
| 3 | 3 j |

</div>

<div class="building-card" id="slick-saver">

#### Slick Saver

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `flatReduction` |

**Effet (rang 1)**

- -1 De l'huile pour faire pousser des produits de serre

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | −1 |
| 2 | −1.5 |
| 3 | −2 |

</div>

## Machines {#machinery}

### Tier 1

<div class="building-card" id="crop-extension-module-i">

#### Crop Extension Module I

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Désert |

**Effet (rang 1)**

- Autoriser l'utilisation des graines de rhubarbe et de courgette dans la machine de culture

</div>

<div class="building-card" id="crop-processor-unit">

#### Crop Processor Unit

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `growthWithOilDebuff` |

**Effet (rang 1)**

- Temps de croissance de la machine à cultures x0.95
- **Débuff**: +10 % de consommation d'huile dans la machine de récolte

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | croissance ×0.95 · huile +10% |
| 2 | croissance ×0.9 · huile +15% |
| 3 | croissance ×0.85 · huile +20% |

</div>

<div class="building-card" id="leak-proof-tank">

#### Leak-Proof Tank

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `multiplier` |

**Effet (rang 1)**

- Capacité du réservoir d'huile triple dans la machine de récolte

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×3 |
| 2 | ×4 |
| 3 | ×5 |

</div>

<div class="building-card" id="oil-extraction">

#### Oil Extraction

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +1 Pétrole lors de la collecte dans les réserves

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +1 |
| 2 | +1.5 |
| 3 | +2 |

</div>

<div class="building-card" id="oil-gadget">

#### Oil Gadget

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `oilReduction` |

**Effet (rang 1)**

- x0.9 Consommation d'huile dans la machine de récolte

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +10% |
| 2 | +15% |
| 3 | +20% |

</div>

### Tier 2

<div class="building-card" id="crop-extension-module-ii">

#### Crop Extension Module II

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Désert |

**Effet (rang 1)**

- Permettre d'utiliser les graines de carottes et de choux dans les machines de culture

</div>

<div class="building-card" id="crop-extension-module-iii">

#### Crop Extension Module III

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Désert |

**Effet (rang 1)**

- Autoriser l'utilisation des graines d'igname et de brocoli dans les machines de culture

</div>

<div class="building-card" id="oil-be-back">

#### Oil Be Back

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- x0.8 Temps de remplissage d'huile

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.8 |
| 2 | ×0.7 |
| 3 | ×0.6 |

</div>

<div class="building-card" id="oil-rig">

#### Oil Rig

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `flatBonus` |

**Effet (rang 1)**

- La perceuse à huile nécessite 20 de laine au lieu de cuir pour être fabriquée

**Détail**

Les valeurs de rang sont la quantité de **Wool** requise pour crafter un Oil Drill (à la place du Leather).

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +20 |
| 2 | +15 |
| 3 | +10 |

</div>

<div class="building-card" id="rapid-rig">

#### Rapid Rig

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `growthWithOilDebuff` |

**Effet (rang 1)**

- x0.8 Temps de croissance de Crop Machine
- **Débuff**: +40 % de consommation d'huile dans Crop Machine

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | croissance ×0.8 · huile +40% |
| 2 | croissance ×0.7 · huile +50% |
| 3 | croissance ×0.6 · huile +60% |

</div>

### Tier 3

<div class="building-card" id="efficiency-extension-module">

#### Efficiency Extension Module

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `oilReduction` |

**Effet (rang 1)**

- x0.7 Consommation d'huile dans la machine de récolte

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +30% |
| 2 | +40% |
| 3 | +50% |

</div>

<div class="building-card" id="field-expansion-module">

#### Field Expansion Module

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `flatBonus` |

**Effet (rang 1)**

- +5 packs ajoutés au système de file d'attente des machines

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +5 |
| 2 | +7 |
| 3 | +10 |

</div>

<div class="building-card" id="field-extension-module">

#### Field Extension Module

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Désert |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `flatBonus` |

**Effet (rang 1)**

- +5 parcelles ajoutées à la machine

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +5 |
| 2 | +7 |
| 3 | +10 |

</div>

<div class="building-card" id="grease-lightning">

#### Grease Lightning

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Désert |
| Cooldown | 4 j |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `cooldown` |

**Effet (rang 1)**

- Possibilité de recharger instantanément les puits de pétrole vides

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 4 j |
| 2 | 3.5 j |
| 3 | 3 j |

</div>

## Compost {#compost}

### Tier 1

<div class="building-card" id="blend-tastic">

#### Blend-tastic

**Power skill** (active)

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |

**Effet (rang 1)**

- —

</div>

<div class="building-card" id="efficient-bin">

#### Efficient Bin

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- Mélange à germes +5

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +5 |
| 2 | +7 |
| 3 | +9 |

</div>

<div class="building-card" id="feathery-business">

#### Feathery Business

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `costMultiplier` |

**Effet (rang 1)**

- Utilisez des plumes plutôt que des œufs pour stimuler les composteurs
- **Débuff**: 2 plumes pour dynamiser les composteurs

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×2 |
| 2 | ×1.5 |
| 3 | ×1 |

</div>

<div class="building-card" id="sprout-surge">

#### Sprout Surge

**Power skill** (active)

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |

**Effet (rang 1)**

- —

</div>

<div class="building-card" id="turbo-charged">

#### Turbo Charged

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +5 Mélange fructueux

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +5 |
| 2 | +7 |
| 3 | +9 |

</div>

<div class="building-card" id="wormy-treat">

#### Wormy Treat

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +1 ver

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +1 |
| 2 | +2 |
| 3 | +3 |

</div>

### Tier 2

<div class="building-card" id="composting-bonanza">

#### Composting Bonanza

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `flatTimeBonus` |

**Effet (rang 1)**

- Accélérez les composteurs d'une heure supplémentaire lors de la stimulation
- **Débuff**: 2 fois plus de ressources pour dynamiser les composteurs

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | −1 h |
| 2 | −1.5 h |
| 3 | −2 h |

</div>

<div class="building-card" id="fruitful-bounty">

#### Fruitful Bounty

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `multiplier` |

**Effet (rang 1)**

- Effet du Double Fruitful Blend

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×2 |
| 2 | ×3 |
| 3 | ×4 |

</div>

<div class="building-card" id="premium-worms">

#### Premium Worms

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +10 Rapid Root

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +10 |
| 2 | +15 |
| 3 | +20 |

</div>

<div class="building-card" id="root-rocket">

#### Root Rocket

**Power skill** (active)

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |

**Effet (rang 1)**

- —

</div>

<div class="building-card" id="swift-decomposer">

#### Swift Decomposer

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- Temps de compostage x0,9

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.875 |
| 3 | ×0.85 |

</div>

### Tier 3

<div class="building-card" id="composting-overhaul">

#### Composting Overhaul

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +2 Worms

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +2 |
| 2 | +5 |
| 3 | +8 |

</div>

<div class="building-card" id="composting-revamp">

#### Composting Revamp

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `yieldWithDebuff` |

**Effet (rang 1)**

- +5 engrais
- **Débuff**: -2 vers

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | buff +5 · débuff −2 |
| 2 | buff +8 · débuff −3 |
| 3 | buff +10 · débuff −4 |

</div>

## Affinage {#aging}

### Tier 1

<div class="building-card" id="cheap-rakes">

#### Cheap Rakes

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `costMultiplier` |

**Effet (rang 1)**

- Coût par pièce d'un râteau à sel x0,8

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.8 |
| 2 | ×0.7 |
| 3 | ×0.6 |

</div>

<div class="building-card" id="salty-seas">

#### Salty Seas

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- Temps de réapprovisionnement de la charge en sel x0.9

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.85 |
| 3 | ×0.8 |

</div>

<div class="building-card" id="speedy-aging">

#### Speedy Aging

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `growthMultiplier` |

**Effet (rang 1)**

- x0.9 Temps de vieillissement du poisson

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×0.9 |
| 2 | ×0.85 |
| 3 | ×0.8 |

</div>

<div class="building-card" id="wide-rakes">

#### Wide Rakes

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 1 pt · 1 shard |
| Type d’effet | `additiveYield` |

**Effet (rang 1)**

- +2 sels par récolte

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | +2 |
| 2 | +3 |
| 3 | +4 |

</div>

### Tier 2

<div class="building-card" id="fish-smoking">

#### Fish Smoking

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `multiplier` |

**Effet (rang 1)**

- Deux fois plus de chances que Aged Fish devienne Prime Aged

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | ×2 |
| 2 | ×3 |
| 3 | ×4 |

</div>

<div class="building-card" id="sea-blessed">

#### Sea Blessed

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 3 pt · 2 shards |
| Type d’effet | `chance` |

**Effet (rang 1)**

- 5 % de chances de restaurer 1 charge sur 4 nœuds de sel lors de la récolte

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 5% |
| 2 | 6.5% |
| 3 | 8% |

</div>

### Tier 3

<div class="building-card" id="salt-surge">

#### Salt Surge

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Île | Basique |
| Rangs max | 3 |
| Coût rang-up | 6 pt · 3 shards |
| Type d’effet | `cooldown` |

**Effet (rang 1)**

- Rechargez tous les Salt Nodes au maximum

**Progression des rangs**

| Rang | Effet |
|---:|---|
| 1 | 3 j |
| 2 | 2.5 j |
| 3 | 2 j |

</div>
