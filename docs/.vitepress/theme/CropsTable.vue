<script setup lang="ts">
import { computed, ref } from "vue";
import { withBase } from "vitepress";

export type CropRow = {
  id: string;
  name: string;
  href: string;
  icon: string;
  category: string;
  seasons: string[];
  sell: string;
  time: string;
  buyPrice: string;
  level: string;
};

const props = defineProps<{
  locale: "en" | "fr";
  rows: CropRow[];
}>();

/** Same rotation as the game (`populateSeason` in upgradeFarm.ts). */
const SEASON_ROTATION = ["spring", "summer", "autumn", "winter"] as const;
const FIRST_WEEK_START_AT = Date.parse("2024-12-16T00:00:00Z");

function getTemperateSeason(now = Date.now()) {
  const daysSinceStart = Math.floor((now - FIRST_WEEK_START_AT) / 86_400_000);
  const weeksSinceStart = Math.max(Math.floor(daysSinceStart / 7), 0);
  const startedAt = FIRST_WEEK_START_AT + weeksSinceStart * 7 * 86_400_000;
  const endsAt = startedAt + 7 * 86_400_000;
  const season = SEASON_ROTATION[weeksSinceStart % 4];
  return { season, startedAt, endsAt };
}

const current = getTemperateSeason();
const seasonFilter = ref<string>(current.season);

const labels = computed(() =>
  props.locale === "fr"
    ? {
        all: "Toutes",
        season: "Saison",
        currentSeason: "Saison actuelle",
        until: "jusqu’au",
        name: "Culture",
        category: "Catégorie",
        sell: "Vente",
        time: "Récolte",
        buyPrice: "Prix d'achat",
        level: "Niveau",
        spring: "Printemps",
        summer: "Été",
        autumn: "Automne",
        winter: "Hiver",
        event: "Événement",
        basic: "Basique",
        medium: "Moyenne",
        advanced: "Avancée",
      }
    : {
        all: "All",
        season: "Season",
        currentSeason: "Current season",
        until: "until",
        name: "Crop",
        category: "Category",
        sell: "Sell",
        time: "Harvest",
        buyPrice: "Buy price",
        level: "Level",
        spring: "Spring",
        summer: "Summer",
        autumn: "Autumn",
        winter: "Winter",
        event: "Event",
        basic: "Basic",
        medium: "Medium",
        advanced: "Advanced",
      },
);

const seasonIds = ["spring", "summer", "autumn", "winter", "event"] as const;

const usedSeasons = computed(() =>
  seasonIds.filter((id) => props.rows.some((r) => r.seasons.includes(id))),
);

const filtered = computed(() =>
  props.rows.filter((row) => {
    if (seasonFilter.value === "all") return true;
    return row.seasons.includes(seasonFilter.value);
  }),
);

function seasonLabel(id: string): string {
  return (labels.value as Record<string, string>)[id] ?? id;
}

function categoryLabel(id: string): string {
  const key = id.toLowerCase();
  return (labels.value as Record<string, string>)[key] ?? id;
}

function iconSrc(row: CropRow): string {
  return withBase(row.icon);
}

function onIconError(ev: Event) {
  const img = ev.target as HTMLImageElement;
  img.style.visibility = "hidden";
}

function formatEndDate(ts: number): string {
  return new Date(ts).toLocaleDateString(
    props.locale === "fr" ? "fr-FR" : "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    },
  );
}
</script>

<template>
  <div class="crops-table">
    <div class="current-season" :class="current.season">
      <span class="current-season-label">{{ labels.currentSeason }} :</span>
      <button
        type="button"
        class="current-season-value"
        :class="current.season"
        @click="seasonFilter = current.season"
      >
        {{ seasonLabel(current.season) }}
      </button>
      <span class="current-season-until">
        ({{ labels.until }} {{ formatEndDate(current.endsAt) }} UTC)
      </span>
    </div>

    <div class="season-filters" role="group" :aria-label="labels.season">
      <button
        type="button"
        class="season-chip"
        :class="{ active: seasonFilter === 'all' }"
        @click="seasonFilter = 'all'"
      >
        {{ labels.all }}
      </button>
      <button
        v-for="id in usedSeasons"
        :key="id"
        type="button"
        class="season-chip"
        :class="[id, { active: seasonFilter === id }]"
        @click="seasonFilter = id"
      >
        {{ seasonLabel(id) }}
      </button>
    </div>

    <div class="vp-raw">
      <table>
        <thead>
          <tr>
            <th>{{ labels.name }}</th>
            <th>{{ labels.category }}</th>
            <th>{{ labels.season }}</th>
            <th>{{ labels.sell }}</th>
            <th>{{ labels.time }}</th>
            <th>{{ labels.buyPrice }}</th>
            <th>{{ labels.level }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filtered" :key="row.id">
            <td>
              <a class="crop-name" :href="withBase(row.href)">
                <img
                  class="crop-icon"
                  :src="iconSrc(row)"
                  :alt="row.name"
                  @error="onIconError"
                />
                {{ row.name }}
              </a>
            </td>
            <td>{{ categoryLabel(row.category) }}</td>
            <td>{{ row.seasons.map(seasonLabel).join(", ") }}</td>
            <td>{{ row.sell }}</td>
            <td>{{ row.time }}</td>
            <td>{{ row.buyPrice }}</td>
            <td>{{ row.level }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.current-season {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 0.6rem;
  margin: 0.25rem 0 1rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}

.current-season-label {
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.current-season-value {
  appearance: none;
  border: none;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
}

.current-season-value.spring {
  background: #3d9a5f;
}

.current-season-value.summer {
  background: #e0a21a;
}

.current-season-value.autumn {
  background: #c45c26;
}

.current-season-value.winter {
  background: #3b7cc4;
}

.current-season-until {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.season-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 1.25rem;
}

.season-chip {
  appearance: none;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  border-radius: 999px;
  padding: 0.35rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.season-chip:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}

.season-chip.active {
  color: #fff;
  border-color: transparent;
  box-shadow: 0 1px 2px rgb(0 0 0 / 12%);
}

.season-chip.active:not(.spring):not(.summer):not(.autumn):not(.winter):not(.event) {
  background: var(--vp-c-brand-1);
}

.season-chip.spring.active {
  background: #3d9a5f;
}

.season-chip.summer.active {
  background: #e0a21a;
}

.season-chip.autumn.active {
  background: #c45c26;
}

.season-chip.winter.active {
  background: #3b7cc4;
}

.season-chip.event.active {
  background: #8b5cf6;
}

.crop-name {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.crop-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  image-rendering: pixelated;
  flex-shrink: 0;
}
</style>
