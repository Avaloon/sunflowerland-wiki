---
title: Crops
description: Sell prices, harvest times and buy prices for crops.
---

# Crops

## Getting started

1. **Buy seeds** — click **Betty's Market**
   <img class="item-icon" src="/icons/bettys-market.png" alt="Betty's Market" width="48" height="41" />
   to open her shop and buy seeds with coins.
2. **Plant** — select a seed in your inventory, then click an **empty crop plot**
   <img class="item-icon" src="/icons/soil2.png" alt="Empty crop plot" width="32" height="32" />
   on your farm.
3. **Wait and harvest** — when the timer is done, click the crop to harvest. You can then **sell** to Betty for **coins**, or on the [**Marketplace**](/en/marketplace/)
   <img class="item-icon" src="/icons/marketplace.png" alt="Marketplace" width="24" height="24" />
   to other players for **FLOWER**
   <img class="item-icon" src="/icons/flower-token.webp" alt="FLOWER" width="24" height="24" />.

Use the season filter below to see what you can plant right now (some seeds only grow in certain seasons).

<script setup>
const rows = [
  { id: "sunflower", name: "Sunflower", href: "/en/crops/sunflower", icon: "/icons/sunflower.png", category: "Basic", seasons: ["spring", "summer"], sell: "0.02", time: "1 min", buyPrice: "0.01", level: "1" },
  { id: "potato", name: "Potato", href: "/en/crops/potato", icon: "/icons/potato.png", category: "Basic", seasons: ["summer", "autumn", "winter"], sell: "0.14", time: "5 min", buyPrice: "0.1", level: "1" },
  { id: "rhubarb", name: "Rhubarb", href: "/en/crops/rhubarb", icon: "/icons/rhubarb.png", category: "Basic", seasons: ["spring"], sell: "0.24", time: "10 min", buyPrice: "0.15", level: "1" },
  { id: "pumpkin", name: "Pumpkin", href: "/en/crops/pumpkin", icon: "/icons/pumpkin.png", category: "Basic", seasons: ["autumn"], sell: "0.4", time: "30 min", buyPrice: "0.2", level: "2" },
  { id: "zucchini", name: "Zucchini", href: "/en/crops/zucchini", icon: "/icons/zucchini.png", category: "Basic", seasons: ["summer"], sell: "0.4", time: "30 min", buyPrice: "0.2", level: "2" },
  { id: "carrot", name: "Carrot", href: "/en/crops/carrot", icon: "/icons/carrot.png", category: "Medium", seasons: ["spring", "autumn"], sell: "0.8", time: "1 h", buyPrice: "0.5", level: "2" },
  { id: "yam", name: "Yam", href: "/en/crops/yam", icon: "/icons/yam.png", category: "Medium", seasons: ["autumn"], sell: "0.8", time: "1 h", buyPrice: "0.5", level: "2" },
  { id: "cabbage", name: "Cabbage", href: "/en/crops/cabbage", icon: "/icons/cabbage.png", category: "Medium", seasons: ["spring", "winter"], sell: "1.5", time: "2 h", buyPrice: "1", level: "3" },
  { id: "broccoli", name: "Broccoli", href: "/en/crops/broccoli", icon: "/icons/broccoli.png", category: "Medium", seasons: ["autumn"], sell: "1.5", time: "2 h", buyPrice: "1", level: "3" },
  { id: "soybean", name: "Soybean", href: "/en/crops/soybean", icon: "/icons/soybean.png", category: "Medium", seasons: ["spring", "autumn"], sell: "2.3", time: "3 h", buyPrice: "1.5", level: "3" },
  { id: "beetroot", name: "Beetroot", href: "/en/crops/beetroot", icon: "/icons/beetroot.png", category: "Medium", seasons: ["summer", "winter"], sell: "2.8", time: "4 h", buyPrice: "2", level: "3" },
  { id: "pepper", name: "Pepper", href: "/en/crops/pepper", icon: "/icons/pepper.png", category: "Medium", seasons: ["summer"], sell: "3", time: "4 h", buyPrice: "2", level: "3" },
  { id: "cauliflower", name: "Cauliflower", href: "/en/crops/cauliflower", icon: "/icons/cauliflower.png", category: "Medium", seasons: ["summer", "winter"], sell: "4.25", time: "8 h", buyPrice: "3", level: "4" },
  { id: "parsnip", name: "Parsnip", href: "/en/crops/parsnip", icon: "/icons/parsnip.png", category: "Medium", seasons: ["winter"], sell: "6.5", time: "12 h", buyPrice: "5", level: "4" },
  { id: "saltwort", name: "Saltwort", href: "/en/crops/saltwort", icon: "/icons/saltwort.png", category: "Medium", seasons: ["event"], sell: "50", time: "12 h", buyPrice: "10", level: "1" },
  { id: "eggplant", name: "Eggplant", href: "/en/crops/eggplant", icon: "/icons/eggplant.png", category: "Advanced", seasons: ["summer"], sell: "8", time: "16 h", buyPrice: "6", level: "5" },
  { id: "corn", name: "Corn", href: "/en/crops/corn", icon: "/icons/corn.png", category: "Advanced", seasons: ["spring"], sell: "9", time: "20 h", buyPrice: "7", level: "5" },
  { id: "onion", name: "Onion", href: "/en/crops/onion", icon: "/icons/onion.png", category: "Advanced", seasons: ["winter"], sell: "10", time: "20 h", buyPrice: "7", level: "5" },
  { id: "radish", name: "Radish", href: "/en/crops/radish", icon: "/icons/radish.png", category: "Advanced", seasons: ["summer"], sell: "9.5", time: "24 h", buyPrice: "7", level: "5" },
  { id: "wheat", name: "Wheat", href: "/en/crops/wheat", icon: "/icons/wheat.png", category: "Advanced", seasons: ["spring", "summer", "autumn", "winter"], sell: "7", time: "24 h", buyPrice: "5", level: "5" },
  { id: "turnip", name: "Turnip", href: "/en/crops/turnip", icon: "/icons/turnip.png", category: "Advanced", seasons: ["winter"], sell: "8", time: "24 h", buyPrice: "5", level: "6" },
  { id: "kale", name: "Kale", href: "/en/crops/kale", icon: "/icons/kale.png", category: "Advanced", seasons: ["spring", "winter"], sell: "10", time: "36 h", buyPrice: "7", level: "7" },
  { id: "artichoke", name: "Artichoke", href: "/en/crops/artichoke", icon: "/icons/artichoke.png", category: "Advanced", seasons: ["autumn"], sell: "12", time: "36 h", buyPrice: "7", level: "8" },
  { id: "barley", name: "Barley", href: "/en/crops/barley", icon: "/icons/barley.png", category: "Advanced", seasons: ["spring", "autumn"], sell: "12", time: "48 h", buyPrice: "10", level: "14" },
];
</script>

<CropsTable locale="en" :rows="rows" />
