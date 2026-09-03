import DefaultTheme from "vitepress/theme";
import ProduceTable from "./ProduceTable.vue";
import CookingTables from "./CookingTables.vue";
import RedirectHome from "./RedirectHome.vue";
import type { Theme } from "vitepress";
import "./custom.css";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ProduceTable", ProduceTable);
    app.component("CookingTables", CookingTables);
    app.component("RedirectHome", RedirectHome);
  },
};

export default theme;
