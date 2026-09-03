---
title: Cultures
description: Prix de vente, temps de récolte et prix d'achat des cultures.
---

# Cultures

## Pour commencer

1. **Acheter des graines** — cliquez sur le **Marché** de Betty
   <img class="item-icon" src="/icons/bettys-market.png" alt="Marché de Betty" width="48" height="41" />
   pour ouvrir sa boutique et acheter des graines avec des coins.
2. **Planter** — sélectionnez une graine dans votre inventaire, puis cliquez sur un **trou de culture vide**
   <img class="item-icon" src="/icons/soil2.png" alt="Trou de culture vide" width="32" height="32" />
   sur votre ferme.
3. **Attendre et récolter** — une fois le temps écoulé, cliquez sur la culture pour la récolter. Vous pouvez ensuite la **revendre** chez Betty contre des **coins**, ou sur la [**Marketplace**](/fr/marketplace/)
   <img class="item-icon" src="/icons/marketplace.png" alt="Marketplace" width="24" height="24" />
   à d’autres joueurs contre des **FLOWER**
   <img class="item-icon" src="/icons/flower-token.webp" alt="FLOWER" width="24" height="24" />.

Utilisez le filtre de saison ci-dessous pour voir ce qui se plante en ce moment (certaines graines ne poussent que pendant une saison).

<script setup>
const rows = [
  { id: "sunflower", name: "Sunflower", href: "/fr/crops/sunflower", icon: "/icons/sunflower.png", category: "Basic", seasons: ["spring", "summer"], sell: "0.02", time: "1 min", buyPrice: "0.01", level: "1" },
  { id: "potato", name: "Potato", href: "/fr/crops/potato", icon: "/icons/potato.png", category: "Basic", seasons: ["summer", "autumn", "winter"], sell: "0.14", time: "5 min", buyPrice: "0.1", level: "1" },
  { id: "rhubarb", name: "Rhubarb", href: "/fr/crops/rhubarb", icon: "/icons/rhubarb.png", category: "Basic", seasons: ["spring"], sell: "0.24", time: "10 min", buyPrice: "0.15", level: "1" },
  { id: "pumpkin", name: "Pumpkin", href: "/fr/crops/pumpkin", icon: "/icons/pumpkin.png", category: "Basic", seasons: ["autumn"], sell: "0.4", time: "30 min", buyPrice: "0.2", level: "2" },
  { id: "zucchini", name: "Zucchini", href: "/fr/crops/zucchini", icon: "/icons/zucchini.png", category: "Basic", seasons: ["summer"], sell: "0.4", time: "30 min", buyPrice: "0.2", level: "2" },
  { id: "carrot", name: "Carrot", href: "/fr/crops/carrot", icon: "/icons/carrot.png", category: "Medium", seasons: ["spring", "autumn"], sell: "0.8", time: "1 h", buyPrice: "0.5", level: "2" },
  { id: "yam", name: "Yam", href: "/fr/crops/yam", icon: "/icons/yam.png", category: "Medium", seasons: ["autumn"], sell: "0.8", time: "1 h", buyPrice: "0.5", level: "2" },
  { id: "cabbage", name: "Cabbage", href: "/fr/crops/cabbage", icon: "/icons/cabbage.png", category: "Medium", seasons: ["spring", "winter"], sell: "1.5", time: "2 h", buyPrice: "1", level: "3" },
  { id: "broccoli", name: "Broccoli", href: "/fr/crops/broccoli", icon: "/icons/broccoli.png", category: "Medium", seasons: ["autumn"], sell: "1.5", time: "2 h", buyPrice: "1", level: "3" },
  { id: "soybean", name: "Soybean", href: "/fr/crops/soybean", icon: "/icons/soybean.png", category: "Medium", seasons: ["spring", "autumn"], sell: "2.3", time: "3 h", buyPrice: "1.5", level: "3" },
  { id: "beetroot", name: "Beetroot", href: "/fr/crops/beetroot", icon: "/icons/beetroot.png", category: "Medium", seasons: ["summer", "winter"], sell: "2.8", time: "4 h", buyPrice: "2", level: "3" },
  { id: "pepper", name: "Pepper", href: "/fr/crops/pepper", icon: "/icons/pepper.png", category: "Medium", seasons: ["summer"], sell: "3", time: "4 h", buyPrice: "2", level: "3" },
  { id: "cauliflower", name: "Cauliflower", href: "/fr/crops/cauliflower", icon: "/icons/cauliflower.png", category: "Medium", seasons: ["summer", "winter"], sell: "4.25", time: "8 h", buyPrice: "3", level: "4" },
  { id: "parsnip", name: "Parsnip", href: "/fr/crops/parsnip", icon: "/icons/parsnip.png", category: "Medium", seasons: ["winter"], sell: "6.5", time: "12 h", buyPrice: "5", level: "4" },
  { id: "saltwort", name: "Saltwort", href: "/fr/crops/saltwort", icon: "/icons/saltwort.png", category: "Medium", seasons: ["event"], sell: "50", time: "12 h", buyPrice: "10", level: "1" },
  { id: "eggplant", name: "Eggplant", href: "/fr/crops/eggplant", icon: "/icons/eggplant.png", category: "Advanced", seasons: ["summer"], sell: "8", time: "16 h", buyPrice: "6", level: "5" },
  { id: "corn", name: "Corn", href: "/fr/crops/corn", icon: "/icons/corn.png", category: "Advanced", seasons: ["spring"], sell: "9", time: "20 h", buyPrice: "7", level: "5" },
  { id: "onion", name: "Onion", href: "/fr/crops/onion", icon: "/icons/onion.png", category: "Advanced", seasons: ["winter"], sell: "10", time: "20 h", buyPrice: "7", level: "5" },
  { id: "radish", name: "Radish", href: "/fr/crops/radish", icon: "/icons/radish.png", category: "Advanced", seasons: ["summer"], sell: "9.5", time: "24 h", buyPrice: "7", level: "5" },
  { id: "wheat", name: "Wheat", href: "/fr/crops/wheat", icon: "/icons/wheat.png", category: "Advanced", seasons: ["spring", "summer", "autumn", "winter"], sell: "7", time: "24 h", buyPrice: "5", level: "5" },
  { id: "turnip", name: "Turnip", href: "/fr/crops/turnip", icon: "/icons/turnip.png", category: "Advanced", seasons: ["winter"], sell: "8", time: "24 h", buyPrice: "5", level: "6" },
  { id: "kale", name: "Kale", href: "/fr/crops/kale", icon: "/icons/kale.png", category: "Advanced", seasons: ["spring", "winter"], sell: "10", time: "36 h", buyPrice: "7", level: "7" },
  { id: "artichoke", name: "Artichoke", href: "/fr/crops/artichoke", icon: "/icons/artichoke.png", category: "Advanced", seasons: ["autumn"], sell: "12", time: "36 h", buyPrice: "7", level: "8" },
  { id: "barley", name: "Barley", href: "/fr/crops/barley", icon: "/icons/barley.png", category: "Advanced", seasons: ["spring", "autumn"], sell: "12", time: "48 h", buyPrice: "10", level: "14" },
];
</script>

<CropsTable locale="fr" :rows="rows" />
