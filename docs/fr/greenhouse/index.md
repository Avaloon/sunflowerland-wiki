---
title: Serre
---

# Serre

La **serre** (Greenhouse) ignore le cycle des saisons : riz, olive et raisin se plantent toute l’année une fois le bâtiment construit.

## Bâtiment

| | |
|---|---|
| Niveau requis | 46 |
| Coins | 4800 |
| Construction | 4 h |
| Île requise | desert |

### Ingrédients

| Ingrédient | Quantité |
|---|---:|
| Wood | 500 |
| Stone | 100 |
| Crimstone | 25 |
| Oil | 100 |

Fiche bâtiment : [Greenhouse](/fr/buildings/greenhouse).

## Plantes

<script setup>
const rows = [{"id":"rice","name":"Rice","href":"/fr/greenhouse/rice","icon":"/icons/rice.webp","seasons":["spring","summer","autumn","winter"],"sell":"320","time":"32 h","seedPrice":"240","level":"40"},{"id":"olive","name":"Olive","href":"/fr/greenhouse/olive","icon":"/icons/olive.webp","seasons":["spring","summer","autumn","winter"],"sell":"400","time":"44 h","seedPrice":"320","level":"40"},{"id":"grape","name":"Grape","href":"/fr/greenhouse/grape","icon":"/icons/grape.webp","seasons":["spring","summer","autumn","winter"],"sell":"240","time":"12 h","seedPrice":"160","level":"40"}];
</script>

<ProduceTable locale="fr" kind="greenhouse" :rows="rows" />

---

_Données extraites de `crops.ts + fruits.ts + buildings.ts` @ `3de9b18`. Wiki fan non officiel._
