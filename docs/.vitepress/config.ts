import { defineConfig } from "vitepress";

// For project Pages (https://user.github.io/repo/), set DOCS_BASE=/repo/ when building.
const base = process.env.DOCS_BASE || "/";

const enNav = [
  { text: "Home", link: "/en/" },
  { text: "Buildings", link: "/en/buildings/" },
  { text: "Crops", link: "/en/crops/" },
  { text: "Fruits", link: "/en/fruits/" },
  { text: "Greenhouse", link: "/en/greenhouse/" },
  { text: "Seasons", link: "/en/seasons/" },
  { text: "Fishing", link: "/en/fishing/" },
  { text: "Flowers", link: "/en/flowers/" },
  { text: "Resources", link: "/en/resources/" },
  { text: "Compost", link: "/en/compost/" },
  { text: "Animals", link: "/en/animals/" },
  { text: "Cooking", link: "/en/cooking/" },
  { text: "Skills", link: "/en/skills/" },
  { text: "Expansions", link: "/en/expansions/" },
  { text: "Marketplace", link: "/en/marketplace/" },
];

const frNav = [
  { text: "Accueil", link: "/fr/" },
  { text: "Bâtiments", link: "/fr/buildings/" },
  { text: "Cultures", link: "/fr/crops/" },
  { text: "Fruits", link: "/fr/fruits/" },
  { text: "Serre", link: "/fr/greenhouse/" },
  { text: "Saisons", link: "/fr/seasons/" },
  { text: "Pêche", link: "/fr/fishing/" },
  { text: "Fleurs", link: "/fr/flowers/" },
  { text: "Ressources", link: "/fr/resources/" },
  { text: "Compost", link: "/fr/compost/" },
  { text: "Animaux", link: "/fr/animals/" },
  { text: "Cuisine", link: "/fr/cooking/" },
  { text: "Compétences", link: "/fr/skills/" },
  { text: "Expansions", link: "/fr/expansions/" },
  { text: "Marketplace", link: "/fr/marketplace/" },
];

export default defineConfig({
  base,
  title: "Sunflower Land Wiki",
  description:
    "Unofficial bilingual wiki documented from the Sunflower Land game repository",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  locales: {
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
        nav: [{ text: "Home", link: "/en/" }],
        sidebar: {
          "/en/": [
            {
              text: "Wiki",
              items: enNav,
            },
          ],
        },
        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/sunflower-land/sunflower-land",
          },
        ],
      },
    },
    fr: {
      label: "Français",
      lang: "fr",
      link: "/fr/",
      themeConfig: {
        nav: [{ text: "Accueil", link: "/fr/" }],
        sidebar: {
          "/fr/": [
            {
              text: "Wiki",
              items: frNav,
            },
          ],
        },
        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/sunflower-land/sunflower-land",
          },
        ],
      },
    },
  },

  themeConfig: {
    search: {
      provider: "local",
    },
  },
});
