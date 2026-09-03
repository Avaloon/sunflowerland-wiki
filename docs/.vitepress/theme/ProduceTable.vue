<script setup lang="ts">
import { computed, ref } from "vue";
import { withBase } from "vitepress";

export type ProduceRow = {
  id: string;
  name: string;
  href: string;
  icon?: string;
  category?: string;
  seasons: string[];
  sell: string;
  time: string;
  seedPrice: string;
  level?: string;
  extra?: string;
};

const props = defineProps<{
  locale: "en" | "fr";
  kind: "crops" | "fruits" | "greenhouse";
  rows: ProduceRow[];
}>();

const seasonFilter = ref("all");
const categoryFilter = ref("all");

const labels = computed(() =>
  props.locale === "fr"
    ? {
        allSeasons: "Toutes les saisons",
        allCategories: "Toutes les catégories",
        season: "Saison",
        category: "Catégorie de graine",
        name: props.kind === "fruits" ? "Fruit" : props.kind === "greenhouse" ? "Plante" : "Culture",
        sell: "Vente",
        time: "Temps",
        seed: "Prix graine",
        level: "Niveau",
        extra: props.kind === "fruits" ? "Buisson" : "Type",
        spring: "Printemps",
        summer: "Été",
        autumn: "Automne",
        winter: "Hiver",
        event: "Événement",
        "full-moon": "Pleine lune",
      }
    : {
        allSeasons: "All seasons",
        allCategories: "All categories",
        season: "Season",
        category: "Seed category",
        name: props.kind === "fruits" ? "Fruit" : props.kind === "greenhouse" ? "Plant" : "Crop",
        sell: "Sell",
        time: "Time",
        seed: "Seed price",
        level: "Level",
        extra: props.kind === "fruits" ? "Bush" : "Type",
        spring: "Spring",
        summer: "Summer",
        autumn: "Autumn",
        winter: "Winter",
        event: "Event",
        "full-moon": "Full moon",
      },
);

const seasonIds = ["spring", "summer", "autumn", "winter", "event", "full-moon"] as const;

const usedSeasons = computed(() =>
  seasonIds.filter((id) => props.rows.some((r) => r.seasons.includes(id))),
);

const usedCategories = computed(() => {
  const set = new Set(props.rows.map((r) => r.category).filter(Boolean) as string[]);
  return [...set];
});

const filtered = computed(() =>
  props.rows.filter((row) => {
    if (seasonFilter.value !== "all" && !row.seasons.includes(seasonFilter.value)) return false;
    if (categoryFilter.value !== "all" && row.category !== categoryFilter.value) return false;
    return true;
  }),
);

function iconSrc(row: ProduceRow): string {
  if (row.icon) return withBase(row.icon);
  return communityIcon(row.name);
}

function communityIcon(name: string): string {
  return `https://sfl.world/img/source/${encodeURIComponent(name)}.png`;
}

function onIconError(ev: Event) {
  const img = ev.target as HTMLImageElement;
  const fallback = img.getAttribute("data-fallback");
  if (fallback && img.src !== fallback) {
    img.src = fallback;
    return;
  }
  img.style.visibility = "hidden";
}

function seasonLabel(id: string): string {
  return (labels.value as Record<string, string>)[id] ?? id;
}
</script>

<template>
  <div class="produce-table">
    <div class="produce-filters">
      <label>
        {{ labels.season }}
        <select v-model="seasonFilter">
          <option value="all">{{ labels.allSeasons }}</option>
          <option v-for="id in usedSeasons" :key="id" :value="id">{{ seasonLabel(id) }}</option>
        </select>
      </label>
      <label v-if="kind === 'crops' && usedCategories.length > 1">
        {{ labels.category }}
        <select v-model="categoryFilter">
          <option value="all">{{ labels.allCategories }}</option>
          <option v-for="c in usedCategories" :key="c" :value="c">{{ c }}</option>
        </select>
      </label>
    </div>

    <div class="vp-raw">
      <table>
        <thead>
          <tr>
            <th>{{ labels.name }}</th>
            <th v-if="kind === 'crops'">{{ labels.category }}</th>
            <th>{{ labels.season }}</th>
            <th>{{ labels.sell }}</th>
            <th>{{ labels.time }}</th>
            <th>{{ labels.seed }}</th>
            <th v-if="kind !== 'fruits'">{{ labels.level }}</th>
            <th v-if="kind === 'fruits'">{{ labels.extra }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filtered" :key="row.id">
            <td>
              <a class="produce-name" :href="withBase(row.href)">
                <img
                  class="produce-icon"
                  :src="iconSrc(row)"
                  :alt="row.name"
                  :data-fallback="communityIcon(row.name)"
                  @error="onIconError"
                />
                {{ row.name }}
              </a>
            </td>
            <td v-if="kind === 'crops'">{{ row.category }}</td>
            <td>{{ row.seasons.map(seasonLabel).join(", ") }}</td>
            <td>{{ row.sell }}</td>
            <td>{{ row.time }}</td>
            <td>{{ row.seedPrice }}</td>
            <td v-if="kind !== 'fruits'">{{ row.level ?? "—" }}</td>
            <td v-if="kind === 'fruits'">{{ row.extra }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.produce-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin: 1rem 0 1.25rem;
}
.produce-filters label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.85rem;
  font-weight: 600;
}
.produce-filters select {
  min-width: 11rem;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
}
.produce-name {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}
.produce-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  image-rendering: pixelated;
  flex-shrink: 0;
}
</style>
