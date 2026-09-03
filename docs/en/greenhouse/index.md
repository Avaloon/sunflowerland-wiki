---
title: Greenhouse
---

# Greenhouse

The **Greenhouse** ignores the season cycle: rice, olive and grape can be planted year-round once the building is up.

## Building

| | |
|---|---|
| Required level | 46 |
| Coins | 4800 |
| Build time | 4 h |
| Required island | desert |

### Ingredients

| Ingredient | Amount |
|---|---:|
| Wood | 500 |
| Stone | 100 |
| Crimstone | 25 |
| Oil | 100 |

Building page: [Greenhouse](/en/buildings/greenhouse).

## Plants

<script setup>
const rows = [{"id":"rice","name":"Rice","href":"/en/greenhouse/rice","icon":"/icons/rice.webp","seasons":["spring","summer","autumn","winter"],"sell":"320","time":"32 h","seedPrice":"240","level":"40"},{"id":"olive","name":"Olive","href":"/en/greenhouse/olive","icon":"/icons/olive.webp","seasons":["spring","summer","autumn","winter"],"sell":"400","time":"44 h","seedPrice":"320","level":"40"},{"id":"grape","name":"Grape","href":"/en/greenhouse/grape","icon":"/icons/grape.webp","seasons":["spring","summer","autumn","winter"],"sell":"240","time":"12 h","seedPrice":"160","level":"40"}];
</script>

<ProduceTable locale="en" kind="greenhouse" :rows="rows" />

---

_Data extracted from `crops.ts + fruits.ts + buildings.ts` @ `3de9b18`. Unofficial fan wiki._
