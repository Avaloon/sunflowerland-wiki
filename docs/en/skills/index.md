---
title: Skills
description: Bumpkin skill tree (revamp) — effects, ranks and costs.
---

# Skills

Skills are unlocked with **skill points** (1 per bumpkin level, including ascension bands). Open your bumpkin → **Skills** tab.

## How it works

- **Trees**: 12 categories (Crops, Cooking, Mining…).
- **Tiers**: each tree has 3 tiers. Spending enough points in a tree unlocks the next tier.
- **Island**: some skills require Spring / Desert / Volcano island.
- **Ranks (upgrades)**: most skills can be upgraded to rank 3. Cost per rank-up:
  - Tier 1 → **1 pt + 1 shard**
  - Tier 2 → **3 pts + 2 shards**
  - Tier 3 → **6 pts + 3 shards**
- **Power skills**: active skills (click to trigger, often with a cooldown).

_Source: `bumpkinSkills.ts` + i18n dictionaries in the local game legend._

## Index

<ul class="building-index">
  <li><a href="#crops">Crops <span style="opacity:.65">(14)</span></a></li>
  <li><a href="#trees">Trees <span style="opacity:.65">(9)</span></a></li>
  <li><a href="#fishing">Fishing <span style="opacity:.65">(11)</span></a></li>
  <li><a href="#mining">Mining <span style="opacity:.65">(15)</span></a></li>
  <li><a href="#cooking">Cooking <span style="opacity:.65">(12)</span></a></li>
  <li><a href="#fruit-patch">Fruit Patch <span style="opacity:.65">(12)</span></a></li>
  <li><a href="#animals">Animals <span style="opacity:.65">(18)</span></a></li>
  <li><a href="#bees-flowers">Bees & Flowers <span style="opacity:.65">(12)</span></a></li>
  <li><a href="#greenhouse">Greenhouse <span style="opacity:.65">(12)</span></a></li>
  <li><a href="#machinery">Machinery <span style="opacity:.65">(14)</span></a></li>
  <li><a href="#compost">Compost <span style="opacity:.65">(13)</span></a></li>
  <li><a href="#aging">Aging <span style="opacity:.65">(7)</span></a></li>
</ul>

## Crops {#crops}

### Tier 1

<div class="building-card" id="bettys-friend">

#### Betty's Friend

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Basic |
| NPC | betty |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `coinBonus` |

**Effect (rank 1)**

- Betty Coin delivery revenue increased by 30%

**Details**

Only boosts **Betty** delivery orders that pay **coins**.

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `aoe` |

**Effect (rank 1)**

- Increases Basic Scarecrow's area of effect (AOE) to a 7x7 area; Additional x0.9 basic crop growth time

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 7×7 |
| 2 | 8×8 · +0.05 yield |
| 3 | 9×9 · +0.1 yield |

</div>

<div class="building-card" id="experienced-farmer">

#### Experienced Farmer

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.1 Medium Crop yield

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.95 plot crop growth time

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.1 Advanced Crop yield

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.1 Basic Crop yield

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `coinBonus` |

**Effect (rank 1)**

- +10% coins when selling plot crops at the Market

**Details**

Boosts **coins** when selling plot crops at Betty's Market (not deliveries).

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `dropChance` |

**Effect (rank 1)**

- 1/700 chance for 0.35 gold when harvesting sunflowers (excluding Crop Machine)

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `aoe` |

**Effect (rank 1)**

- Increases Scary Mike's area of effect (AOE) to a 7x7 area; Additional +0.1 medium crop yield

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 7×7 · +0.1 yield |
| 2 | 8×8 · +0.15 yield |
| 3 | 9×9 · +0.2 yield |

</div>

<div class="building-card" id="lauries-gains">

#### Laurie's Gains

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `aoe` |

**Effect (rank 1)**

- Increases Laurie the Chuckle Crow's area of effect (AOE) to a 7x7 area; Additional +0.1 advanced crop yield

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 7×7 · +0.1 yield |
| 2 | 8×8 · +0.15 yield |
| 3 | 9×9 · +0.2 yield |

</div>

<div class="building-card" id="strong-roots">

#### Strong Roots

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.9 Advanced crop growth time

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `yieldWithDebuff` |

**Effect (rank 1)**

- +1 Advanced crop yield
- **Debuff**: -0.5 Basic and Medium crop yield

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | buff +1 · debuff −0.5 |
| 2 | buff +1.4 · debuff −0.6 |
| 3 | buff +1.8 · debuff −0.7 |

</div>

<div class="building-card" id="hectare-farm">

#### Hectare Farm

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `yieldWithDebuff` |

**Effect (rank 1)**

- +1 Basic and Medium crop yield
- **Debuff**: -0.5 Advanced crop yield

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | buff +1 · debuff −0.5 |
| 2 | buff +1.4 · debuff −0.6 |
| 3 | buff +1.8 · debuff −0.7 |

</div>

<div class="building-card" id="instant-growth">

#### Instant Growth

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Basic |
| Cooldown | 3 d |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `cooldown` |

**Effect (rank 1)**

- Grants the ability to instantly harvest all currently growing crops in plots

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 3 d |
| 2 | 2.5 d |
| 3 | 2 d |

</div>

## Trees {#trees}

### Tier 1

<div class="building-card" id="insta-chop">

#### Insta-Chop

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Basic |

**Effect (rank 1)**

- 1 Tap Trees

</div>

<div class="building-card" id="lumberjacks-extra">

#### Lumberjack's Extra

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.1 wood yield

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `stockBonus` |

**Effect (rank 1)**

- +50 axe stock

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.9 tree growth time

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `costMultiplier` |

**Effect (rank 1)**

- x0.8 axe coin cost

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `chance` |

**Effect (rank 1)**

- 1% chance of finding 200 Coins when chopping trees

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `chance` |

**Effect (rank 1)**

- 1/10 chance of x3 wood yield

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Cooldown | 1 d |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `cooldown` |

**Effect (rank 1)**

- Ability to make all trees instantly grow

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 1 d |
| 2 | 18 h |
| 3 | 12 h |

</div>

<div class="building-card" id="tree-turnaround">

#### Tree Turnaround

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `chance` |

**Effect (rank 1)**

- 15% chance for trees to grow instantly

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 15% |
| 2 | 25% |
| 3 | 35% |

</div>

## Fishing {#fishing}

### Tier 1

<div class="building-card" id="fishermans-5-fold">

#### Fisherman's 5 Fold

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `dailyLimit` |

**Effect (rank 1)**

- +5 daily fishing reels

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `chance` |

**Effect (rank 1)**

- 10% chance of +1 basic fish

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `chance` |

**Effect (rank 1)**

- 10% chance of +1 advanced fish

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `costMultiplier` |

**Effect (rank 1)**

- x0.5 rod coin cost

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | ×0.5 |
| 2 | ×0.45 |
| 3 | ×0.4 |

</div>

### Tier 2

<div class="building-card" id="big-catch">

#### Big Catch

_Disabled in-game._

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Basic |

**Effect (rank 1)**

- Increase bar for catching game

</div>

<div class="building-card" id="fishermans-10-fold">

#### Fisherman's 10 Fold

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `dailyLimit` |

**Effect (rank 1)**

- +10 daily fishing reels

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| NPC | corale |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `coinBonus` |

**Effect (rank 1)**

- +100% coins from Corale's deliveries

**Details**

Only boosts **Corale** delivery orders that pay **coins**.

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `chance` |

**Effect (rank 1)**

- 20% chance of +1 expert fish

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `xpBonus` |

**Effect (rank 1)**

- +20% Bumpkin XP from Fish

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `frenziedFish` |

**Effect (rank 1)**

- During fish frenzy, +1 fish and 50% chance of +1 fish

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | +1 fish · 50% chance +1 |
| 2 | +2 fish · 50% chance +1 |
| 3 | +3 fish · 0% chance +1 |

</div>

<div class="building-card" id="more-with-less">

#### More With Less

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `dailyLimit` |

**Effect (rank 1)**

- +10 daily fishing reels

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | +10 |
| 2 | +25 |
| 3 | +50 |

</div>

## Mining {#mining}

### Tier 1

<div class="building-card" id="forge-ward-profits">

#### Forge-Ward Profits

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Basic |
| NPC | blacksmith |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `coinBonus` |

**Effect (rank 1)**

- +20% Blacksmith deliveries revenue

**Details**

Only boosts **Blacksmith** delivery orders that pay **coins**.

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.1 Iron Yield

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.1 Stone Yield

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.8 Stone recovery time

**Rank progression**

| Rank | Effect |
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
| Island | Basic |

**Effect (rank 1)**

- 1 tap small mineral nodes

</div>

### Tier 2

<div class="building-card" id="fire-kissed">

#### Fire Kissed

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +1 Crimstone yield on 5th consecutive mine

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `costMultiplier` |

**Effect (rank 1)**

- x0.8 all pickaxes coin cost

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.7 Iron recovery time

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.9 Gold recovery time

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `yieldWithDebuff` |

**Effect (rank 1)**

- +1 Stone yield
- **Debuff**: -0.5 Iron yield

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | buff +1 · debuff −0.5 |
| 2 | buff +1.4 · debuff −0.6 |
| 3 | buff +1.8 · debuff −0.7 |

</div>

### Tier 3

<div class="building-card" id="ferrous-favor">

#### Ferrous Favor

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `yieldWithDebuff` |

**Effect (rank 1)**

- +1 Iron yield
- **Debuff**: -0.5 Stone yield

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | buff +1 · debuff −0.5 |
| 2 | buff +1.5 · debuff −0.6 |
| 3 | buff +2 · debuff −0.7 |

</div>

<div class="building-card" id="fireside-alchemist">

#### Fireside Alchemist

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.85 Crimstone recovery time

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.5 Gold Yield

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.8 Gold recovery time

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `stockBonus` |

**Effect (rank 1)**

- Increased stock: +70 Pickaxe, +20 Stone Pickaxe, +7 Iron Pickaxe, +2 Gold Pickaxe

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | Stone Pickaxe +20 · Iron Pickaxe +7 · Gold Pickaxe +2 · Pickaxe +70 |
| 2 | Stone Pickaxe +40 · Iron Pickaxe +14 · Gold Pickaxe +4 · Pickaxe +140 |
| 3 | Stone Pickaxe +80 · Iron Pickaxe +28 · Gold Pickaxe +8 · Pickaxe +280 |

</div>

## Cooking {#cooking}

### Tier 1

<div class="building-card" id="fast-feasts">

#### Fast Feasts

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `timeReduction` |

**Effect (rank 1)**

- x0.9 Firepit and Kitchen cooking time

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | −10% time |
| 2 | −15% time |
| 3 | −20% time |

</div>

<div class="building-card" id="munching-mastery">

#### Munching Mastery

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `xpBonus` |

**Effect (rank 1)**

- +5% Bumpkin XP

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `coinBonus` |

**Effect (rank 1)**

- +10% Food deliveries revenue

**Details**

Multiplies **coins** (and **FLOWER/SFL** if the order pays that) when delivering an order that includes at least one **prepared food** (any `CONSUMABLES` item that is not raw fish). Does **not** boost tickets, item rewards, cooking yield, or Market sales. Applies for any NPC.

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `timeReduction` |

**Effect (rank 1)**

- x0.6 Fire Pit cooking time with oil

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | −40% time |
| 2 | −45% time |
| 3 | −50% time |

</div>

### Tier 2

<div class="building-card" id="drive-through-deli">

#### Drive-Through Deli

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `xpBonus` |

**Effect (rank 1)**

- +15% Bumpkin XP from Deli

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `timeReduction` |

**Effect (rank 1)**

- x0.9 Cakes cooking time

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | −10% time |
| 2 | −20% time |
| 3 | −30% time |

</div>

<div class="building-card" id="juicy-boost">

#### Juicy Boost

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `xpBonus` |

**Effect (rank 1)**

- +10% Bumpkin XP from drinks

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `timeReduction` |

**Effect (rank 1)**

- x0.5 Kitchen cooking time with oil

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | −50% time |
| 2 | −55% time |
| 3 | −60% time |

</div>

### Tier 3

<div class="building-card" id="double-nom">

#### Double Nom

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `doubleNom` |

**Effect (rank 1)**

- +1 food from cooking
- **Debuff**: 2x ingredients required for cooking

**Details**

Ingredient multiplier is paid when cooking starts; the extra food is granted when collecting. Rank is stored on the cooking recipe.

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | +1 food · ×2 ingredients |
| 2 | +2 food · ×3 ingredients |
| 3 | +3 food · ×4 ingredients |

</div>

<div class="building-card" id="fiery-jackpot">

#### Fiery Jackpot

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `chance` |

**Effect (rank 1)**

- +20% Chance of +1 food from Firepit

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `timeReduction` |

**Effect (rank 1)**

- x0.4 Deli cooking time with oil

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | −60% time |
| 2 | −65% time |
| 3 | −70% time |

</div>

<div class="building-card" id="instant-gratification">

#### Instant Gratification

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Basic |
| Cooldown | 4 d |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `cooldown` |

**Effect (rank 1)**

- Ability to make all meals currently cooking ready to be eaten

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 4 d |
| 2 | 3.5 d |
| 3 | 3 d |

</div>

## Fruit Patch {#fruit-patch}

### Tier 1

<div class="building-card" id="fruitful-fumble">

#### Fruitful Fumble

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.1 Fruit Patch yield

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `costMultiplier` |

**Effect (rank 1)**

- x0.9 Fruit Patch seeds cost

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| NPC | tango |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `coinBonus` |

**Effect (rank 1)**

- +50% coins from Tango's deliveries

**Details**

Only boosts **Tango** deliveries that include a **fruit-patch fruit** and pay **coins**.

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- Double Macaw's effect

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `flatDebuff` |

**Effect (rank 1)**

- Chop fruit branches and stems without axes
- **Debuff**: -1 wood from fruit branches and stems

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `stockBonus` |

**Effect (rank 1)**

- +10 Tomato and Lemon seeds stock

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +1 wood from fruit branches and stems

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `multiplier` |

**Effect (rank 1)**

- Double Immortal Pear's effect

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `chance` |

**Effect (rank 1)**

- 20% chance of +1 Fruit Patch yield

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `growthWithDebuff` |

**Effect (rank 1)**

- x0.75 Apple and Banana growth time
- **Debuff**: +10% growth time for all other fruit patch fruits

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | favoured ×0.75 · others ×1.1 |
| 2 | favoured ×0.65 · others ×1.125 |
| 3 | favoured ×0.55 · others ×1.15 |

</div>

<div class="building-card" id="short-pickings">

#### Short Pickings

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `growthWithDebuff` |

**Effect (rank 1)**

- x0.75 Blueberry and Orange growth time
- **Debuff**: +10% growth time for all other fruit patch fruits

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | favoured ×0.75 · others ×1.1 |
| 2 | favoured ×0.65 · others ×1.125 |
| 3 | favoured ×0.55 · others ×1.15 |

</div>

<div class="building-card" id="zesty-vibes">

#### Zesty Vibes

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `yieldWithDebuff` |

**Effect (rank 1)**

- +1 Tomato and Lemon yield
- **Debuff**: -0.25 yield for all other fruit patch fruits

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | buff +1 · debuff −0.25 |
| 2 | buff +1.5 · debuff −0.4 |
| 3 | buff +2 · debuff −0.5 |

</div>

## Animals {#animals}

### Tier 1

<div class="building-card" id="bale-economy">

#### Bale Economy

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Spring |

**Effect (rank 1)**

- Bale affects milk and wool production

</div>

<div class="building-card" id="bountiful-bounties">

#### Bountiful Bounties

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `coinBonus` |

**Effect (rank 1)**

- +50% Coins from Animal Bounties

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `multiplier` |

**Effect (rank 1)**

- Double Bale's Effect

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `costMultiplier` |

**Effect (rank 1)**

- x0.95 feed to feed all animals

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.1 Feather, Leather and Merino Wool yield

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.9 Animal sleep time

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.2 Egg, Wool and Milk yield

**Rank progression**

| Rank | Effect |
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
| Island | Spring |

**Effect (rank 1)**

- Barn Delight requires 1 less Lemon and Honey to mix

</div>

<div class="building-card" id="healthy-livestock">

#### Healthy Livestock

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `sicknessWithSpread` |

**Effect (rank 1)**

- x0.5 chance of sickness

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | sickness ×0.5 · spread ×1 |
| 2 | sickness ×0.5 · spread ×0.5 |
| 3 | sickness ×0.5 · spread ×0.01 |

</div>

<div class="building-card" id="heartwarming-instruments">

#### Heartwarming Instruments

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `xpBonus` |

**Effect (rank 1)**

- +50% Animal XP from Animal Affection tools

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `flatBonus` |

**Effect (rank 1)**

- Mixed Grain requires 3 kale to mix instead

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `yieldWithDebuff` |

**Effect (rank 1)**

- +0.35 Merino Wool yield
- **Debuff**: -0.1 Leather & Feather yield

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | buff +0.35 · debuff −0.1 |
| 2 | buff +0.6 · debuff −0.15 |
| 3 | buff +0.9 · debuff −0.2 |

</div>

### Tier 3

<div class="building-card" id="barnyard-rouse">

#### Barnyard Rouse

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Spring |
| Cooldown | 5 d |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `cooldown` |

**Effect (rank 1)**

- Instantly wakes up all animals

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 5 d |
| 2 | 4 d |
| 3 | 3.5 d |

</div>

<div class="building-card" id="chonky-feed">

#### Chonky Feed

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `xpWithFeedDebuff` |

**Effect (rank 1)**

- 2x animal xp from animal feed
- **Debuff**: +50% feed to feed all animals

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | XP ×2 · feed ×1.5 |
| 2 | XP ×2.5 · feed ×1.75 |
| 3 | XP ×3 · feed ×2 |

</div>

<div class="building-card" id="clucky-grazing">

#### Clucky Grazing

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `costWithDebuff` |

**Effect (rank 1)**

- x0.75 feed to feed Chickens
- **Debuff**: +50% feed to feed other animals

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | favoured ×0.75 · others ×1.5 |
| 2 | favoured ×0.65 · others ×1.55 |
| 3 | favoured ×0.5 · others ×1.65 |

</div>

<div class="building-card" id="cow-smart-nutrition">

#### Cow-Smart Nutrition

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `costWithDebuff` |

**Effect (rank 1)**

- x0.75 feed to feed Cows
- **Debuff**: +50% feed to feed other animals

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | favoured ×0.75 · others ×1.5 |
| 2 | favoured ×0.65 · others ×1.55 |
| 3 | favoured ×0.5 · others ×1.65 |

</div>

<div class="building-card" id="leathercraft-mastery">

#### Leathercraft Mastery

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `yieldWithDebuff` |

**Effect (rank 1)**

- +0.35 Leather yield
- **Debuff**: -0.1 Feather & Merino Wool yield

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | buff +0.35 · debuff −0.1 |
| 2 | buff +0.6 · debuff −0.15 |
| 3 | buff +0.8 · debuff −0.2 |

</div>

<div class="building-card" id="sheepwise-diet">

#### Sheepwise Diet

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `costWithDebuff` |

**Effect (rank 1)**

- x0.75 feed to feed Sheep
- **Debuff**: +50% feed to feed other animals

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | favoured ×0.75 · others ×1.5 |
| 2 | favoured ×0.65 · others ×1.55 |
| 3 | favoured ×0.5 · others ×1.65 |

</div>

## Bees & Flowers {#bees-flowers}

### Tier 1

<div class="building-card" id="blooming-boost">

#### Blooming Boost

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.9 Flower growth time

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `costMultiplier` |

**Effect (rank 1)**

- x0.8 Flower Seeds cost

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `productionRate` |

**Effect (rank 1)**

- +0.1 Honey production speed

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.1 Honey per hive

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `flatBonus` |

**Effect (rank 1)**

- +2 relationship points for gifting flowers

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `xpBonus` |

**Effect (rank 1)**

- +10% Bumpkin XP from Honey Foods

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `chance` |

**Effect (rank 1)**

- 10% chance of +1 Flower

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- Additional +0.1 crop yield after pollination (total +0.3)

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `chance` |

**Effect (rank 1)**

- +20% Bee Swarm chance

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.8 Flower growth time

**Rank progression**

| Rank | Effect |
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
| Island | Spring |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `rateWithGrowthDebuff` |

**Effect (rank 1)**

- +0.5 Honey production speed
- **Debuff**: +50% Flower growth time

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | honey +0.5 · flower growth ×1.5 |
| 2 | honey +0.75 · flower growth ×1.6 |
| 3 | honey +1 · flower growth ×1.7 |

</div>

<div class="building-card" id="petal-blessed">

#### Petal Blessed

**Power skill** (active)

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Spring |
| Cooldown | 4 d |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `cooldown` |

**Effect (rank 1)**

- Ability to make all flowers currently growing ready to be harvested

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 4 d |
| 2 | 3.5 d |
| 3 | 3 d |

</div>

## Greenhouse {#greenhouse}

### Tier 1

<div class="building-card" id="glass-room">

#### Glass Room

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.1 Greenhouse produce yield

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.95 growth time for greenhouse produce

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `costMultiplier` |

**Effect (rank 1)**

- x0.85 Greenhouse seeds cost

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| NPC | victoria |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `coinBonus` |

**Effect (rank 1)**

- +50% Coins from Victoria's deliveries

**Details**

Only boosts **Victoria** delivery orders that pay **coins**.

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.9 Olive growth time

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.9 Rice growth time

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +0.5 Greenhouse produce yield
- **Debuff**: +1 Greenhouse seed to plant

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.9 Grape growth time

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `yieldWithOilDebuff` |

**Effect (rank 1)**

- +1 Greenhouse produce yield
- **Debuff**: +100% Oil consumption in greenhouse

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | yield +1 · oil ×2 |
| 2 | yield +1.5 · oil ×3 |
| 3 | yield +2 · oil ×4 |

</div>

<div class="building-card" id="greenhouse-gamble">

#### Greenhouse Gamble

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `chance` |

**Effect (rank 1)**

- 30% chance of +1 greenhouse produce

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Cooldown | 4 d |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `cooldown` |

**Effect (rank 1)**

- Ability to make all greenhouse produce currently growing ready to be harvested

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 4 d |
| 2 | 3.5 d |
| 3 | 3 d |

</div>

<div class="building-card" id="slick-saver">

#### Slick Saver

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `flatReduction` |

**Effect (rank 1)**

- -1 Oil to grow greenhouse produce

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | −1 |
| 2 | −1.5 |
| 3 | −2 |

</div>

## Machinery {#machinery}

### Tier 1

<div class="building-card" id="crop-extension-module-i">

#### Crop Extension Module I

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Desert |

**Effect (rank 1)**

- Allow Rhubarb and Zucchini seeds to be used in crop machine

</div>

<div class="building-card" id="crop-processor-unit">

#### Crop Processor Unit

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `growthWithOilDebuff` |

**Effect (rank 1)**

- x0.95 Crop Machine growth time
- **Debuff**: +10% Oil consumption in Crop Machine

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | growth ×0.95 · oil +10% |
| 2 | growth ×0.9 · oil +15% |
| 3 | growth ×0.85 · oil +20% |

</div>

<div class="building-card" id="leak-proof-tank">

#### Leak-Proof Tank

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `multiplier` |

**Effect (rank 1)**

- Triple oil tank capacity in crop machine

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +1 Oil when collecting from reserves

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `oilReduction` |

**Effect (rank 1)**

- x0.9 Oil consumption in Crop Machine

**Rank progression**

| Rank | Effect |
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
| Island | Desert |

**Effect (rank 1)**

- Allow Carrot and Cabbage seeds to be used in crop machine

</div>

<div class="building-card" id="crop-extension-module-iii">

#### Crop Extension Module III

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Desert |

**Effect (rank 1)**

- Allow Yam and Broccoli seeds to be used in crop machine

</div>

<div class="building-card" id="oil-be-back">

#### Oil Be Back

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.8 Oil refill time

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `flatBonus` |

**Effect (rank 1)**

- Oil Drill requires 20 Wool instead of Leather to craft

**Details**

Rank values are the **Wool** amount required to craft an Oil Drill (replaces Leather).

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `growthWithOilDebuff` |

**Effect (rank 1)**

- x0.8 Crop Machine growth time
- **Debuff**: +40% Oil consumption in Crop Machine

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | growth ×0.8 · oil +40% |
| 2 | growth ×0.7 · oil +50% |
| 3 | growth ×0.6 · oil +60% |

</div>

### Tier 3

<div class="building-card" id="efficiency-extension-module">

#### Efficiency Extension Module

| | |
|---|---|
| Points | 3 |
| Tier | 3 |
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `oilReduction` |

**Effect (rank 1)**

- x0.7 Oil consumption in Crop Machine

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `flatBonus` |

**Effect (rank 1)**

- +5 packs added to machine queue system

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `flatBonus` |

**Effect (rank 1)**

- +5 plots added to machine

**Rank progression**

| Rank | Effect |
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
| Island | Desert |
| Cooldown | 4 d |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `cooldown` |

**Effect (rank 1)**

- Ability to make empty oil wells instantly refill

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 4 d |
| 2 | 3.5 d |
| 3 | 3 d |

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
| Island | Basic |

**Effect (rank 1)**

- —

</div>

<div class="building-card" id="efficient-bin">

#### Efficient Bin

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +5 Sprout Mix

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `costMultiplier` |

**Effect (rank 1)**

- Use feathers instead of eggs to boost composters
- **Debuff**: 2x feathers to boost composters

**Rank progression**

| Rank | Effect |
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
| Island | Basic |

**Effect (rank 1)**

- —

</div>

<div class="building-card" id="turbo-charged">

#### Turbo Charged

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +5 Fruitful Blend

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +1 Worm

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `flatTimeBonus` |

**Effect (rank 1)**

- Speed up composters by an additional hour when boosting
- **Debuff**: 2x resources to boost composters

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `multiplier` |

**Effect (rank 1)**

- Double Fruitful Blend's Effect

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +10 Rapid Root

**Rank progression**

| Rank | Effect |
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
| Island | Basic |

**Effect (rank 1)**

- —

</div>

<div class="building-card" id="swift-decomposer">

#### Swift Decomposer

| | |
|---|---|
| Points | 2 |
| Tier | 2 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.9 compost time

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +2 Worms

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `yieldWithDebuff` |

**Effect (rank 1)**

- +5 fertilisers
- **Debuff**: -2 Worms

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | buff +5 · debuff −2 |
| 2 | buff +8 · debuff −3 |
| 3 | buff +10 · debuff −4 |

</div>

## Aging {#aging}

### Tier 1

<div class="building-card" id="cheap-rakes">

#### Cheap Rakes

| | |
|---|---|
| Points | 1 |
| Tier | 1 |
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `costMultiplier` |

**Effect (rank 1)**

- x0.8 salt rake coin cost

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.9 salt charge replenishment time

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `growthMultiplier` |

**Effect (rank 1)**

- x0.9 Fish Aging time

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 1 pt · 1 shard |
| Effect kind | `additiveYield` |

**Effect (rank 1)**

- +2 Salt per harvest

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `multiplier` |

**Effect (rank 1)**

- Doubled chance Aged Fish becomes Prime Aged

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 3 pt · 2 shards |
| Effect kind | `chance` |

**Effect (rank 1)**

- 5% chance to restore 1 charge to 4 Salt Nodes on harvest

**Rank progression**

| Rank | Effect |
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
| Island | Basic |
| Max rank | 3 |
| Rank-up cost | 6 pt · 3 shards |
| Effect kind | `cooldown` |

**Effect (rank 1)**

- Recharge all Salt Nodes to max

**Rank progression**

| Rank | Effect |
|---:|---|
| 1 | 3 d |
| 2 | 2.5 d |
| 3 | 2 d |

</div>
