import DefaultTheme from "vitepress/theme";
import RedirectHome from "./RedirectHome.vue";
import CropsTable from "./CropsTable.vue";
import type { Theme } from "vitepress";
import "./custom.css";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("RedirectHome", RedirectHome);
    app.component("CropsTable", CropsTable);
  },
};

export default theme;
