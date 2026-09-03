import { defineConfig } from "vitepress";

// For project Pages (https://user.github.io/repo/), set DOCS_BASE=/repo/ when building.
const base = process.env.DOCS_BASE || "/";

export default defineConfig({
  base,
  title: "Sunflower Land Wiki",
  description: "Unofficial bilingual wiki generated from the Sunflower Land game repository",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  locales: {
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Crops", link: "/en/crops/" },
          { text: "Cooking", link: "/en/cooking/" },
          { text: "Animals", link: "/en/animals/" },
          { text: "Guides", link: "/en/guides/" },
          { text: "About", link: "/en/about" },
        ],
        sidebar: {
          "/en/": [
            {
              text: "Start",
              items: [
                { text: "Home", link: "/en/" },
                { text: "Guides", link: "/en/guides/" },
                { text: "About & sources", link: "/en/about" },
              ],
            },
            {
              text: "Farming",
              items: [
                { text: "Crops", link: "/en/crops/" },
                { text: "Fruits", link: "/en/fruits/" },
                { text: "Seasons", link: "/en/seasons/" },
              ],
            },
            {
              text: "Production",
              items: [
                { text: "Cooking", link: "/en/cooking/" },
                { text: "Animals", link: "/en/animals/" },
                { text: "Compost", link: "/en/compost/" },
                { text: "Resources", link: "/en/resources/" },
                { text: "Tools", link: "/en/tools/" },
              ],
            },
            {
              text: "Exploration",
              items: [
                { text: "Fishing", link: "/en/fishing/" },
                { text: "Flowers", link: "/en/flowers/" },
                { text: "Craftables", link: "/en/craftables/" },
              ],
            },
            {
              text: "Progression",
              items: [
                { text: "Skills", link: "/en/skills/" },
                { text: "Buildings", link: "/en/buildings/" },
                { text: "Expansions", link: "/en/expansions/" },
              ],
            },
          ],
        },
        socialLinks: [
          { icon: "github", link: "https://github.com/sunflower-land/sunflower-land" },
        ],
        footer: {
          message: "Unofficial fan wiki. Not affiliated with Sunflower Land.",
          copyright: "Data sourced from the public game repository.",
        },
      },
    },
    fr: {
      label: "Français",
      lang: "fr",
      link: "/fr/",
      themeConfig: {
        nav: [
          { text: "Accueil", link: "/fr/" },
          { text: "Cultures", link: "/fr/crops/" },
          { text: "Cuisine", link: "/fr/cooking/" },
          { text: "Animaux", link: "/fr/animals/" },
          { text: "Guides", link: "/fr/guides/" },
          { text: "À propos", link: "/fr/about" },
        ],
        sidebar: {
          "/fr/": [
            {
              text: "Démarrer",
              items: [
                { text: "Accueil", link: "/fr/" },
                { text: "Guides", link: "/fr/guides/" },
                { text: "À propos & sources", link: "/fr/about" },
              ],
            },
            {
              text: "Agriculture",
              items: [
                { text: "Cultures", link: "/fr/crops/" },
                { text: "Fruits", link: "/fr/fruits/" },
                { text: "Saisons", link: "/fr/seasons/" },
              ],
            },
            {
              text: "Production",
              items: [
                { text: "Cuisine", link: "/fr/cooking/" },
                { text: "Animaux", link: "/fr/animals/" },
                { text: "Compost", link: "/fr/compost/" },
                { text: "Ressources", link: "/fr/resources/" },
                { text: "Outils", link: "/fr/tools/" },
              ],
            },
            {
              text: "Exploration",
              items: [
                { text: "Pêche", link: "/fr/fishing/" },
                { text: "Fleurs", link: "/fr/flowers/" },
                { text: "Craft", link: "/fr/craftables/" },
              ],
            },
            {
              text: "Progression",
              items: [
                { text: "Compétences", link: "/fr/skills/" },
                { text: "Bâtiments", link: "/fr/buildings/" },
                { text: "Expansions", link: "/fr/expansions/" },
              ],
            },
          ],
        },
        socialLinks: [
          { icon: "github", link: "https://github.com/sunflower-land/sunflower-land" },
        ],
        footer: {
          message: "Wiki fan non officiel. Non affilié à Sunflower Land.",
          copyright: "Données issues du dépôt public du jeu.",
        },
      },
    },
  },

  themeConfig: {
    search: {
      provider: "local",
    },
  },
});
