<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vitepress";

export type CookingBuildingRow = {
  id: string;
  name: string;
  href: string;
  icon?: string;
  ascension: string;
  level: string;
  cost: string;
  buildTime: string;
};

export type CookingRecipeRow = {
  id: string;
  name: string;
  href: string;
  icon?: string;
  xp: string;
  time: string;
};

export type CookingGroup = {
  building: string;
  recipes: CookingRecipeRow[];
};

const props = defineProps<{
  locale: "en" | "fr";
  buildings: CookingBuildingRow[];
  groups: CookingGroup[];
}>();

const labels = computed(() =>
  props.locale === "fr"
    ? {
        buildings: "Bâtiments de cuisine",
        building: "Bâtiment",
        ascension: "Ascension",
        level: "Niveau",
        cost: "Coût",
        buildTime: "Construction",
        recipes: "Recettes",
        recipe: "Recette",
        xp: "XP",
        time: "Temps",
      }
    : {
        buildings: "Cooking buildings",
        building: "Building",
        ascension: "Ascension",
        level: "Level",
        cost: "Cost",
        buildTime: "Build time",
        recipes: "Recipes",
        recipe: "Recipe",
        xp: "XP",
        time: "Time",
      },
);

function isKnownBuilding(name: string): boolean {
  return ["Fire Pit", "Kitchen", "Bakery", "Deli", "Smoothie Shack"].includes(name);
}

function iconSrc(name: string, icon?: string): string {
  if (icon) return withBase(icon);
  return `https://sfl.world/img/source/${encodeURIComponent(name)}.png`;
}
</script>

<template>
  <div class="cooking-tables">
    <h2>{{ labels.buildings }}</h2>
    <div class="vp-raw">
      <table>
        <thead>
          <tr>
            <th>{{ labels.building }}</th>
            <th>{{ labels.ascension }}</th>
            <th>{{ labels.level }}</th>
            <th>{{ labels.cost }}</th>
            <th>{{ labels.buildTime }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="b in buildings" :key="b.id">
            <td>
              <a class="item-name" :href="withBase(b.href)">
                <img class="item-icon" :src="iconSrc(b.name, b.icon)" :alt="b.name" />
                {{ b.name }}
              </a>
            </td>
            <td>{{ b.ascension }}</td>
            <td>{{ b.level }}</td>
            <td>{{ b.cost }}</td>
            <td>{{ b.buildTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>{{ labels.recipes }}</h2>
    <template v-for="group in groups" :key="group.building">
      <h3 class="building-heading">
        <img
          v-if="isKnownBuilding(group.building)"
          class="item-icon"
          :src="iconSrc(group.building)"
          :alt="group.building"
        />
        {{ group.building }}
      </h3>
      <div class="vp-raw">
        <table>
          <thead>
            <tr>
              <th>{{ labels.recipe }}</th>
              <th>{{ labels.xp }}</th>
              <th>{{ labels.time }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in group.recipes" :key="r.id">
              <td>
                <a class="item-name" :href="withBase(r.href)">
                  <img class="item-icon" :src="iconSrc(r.name, r.icon)" :alt="r.name" />
                  {{ r.name }}
                </a>
              </td>
              <td>{{ r.xp }}</td>
              <td>{{ r.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>

<style scoped>
.building-heading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.75rem;
}
.item-name {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}
.item-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  image-rendering: pixelated;
  flex-shrink: 0;
}
</style>
