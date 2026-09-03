import DefaultTheme from "vitepress/theme";
import RedirectHome from "./RedirectHome.vue";
import type { Theme } from "vitepress";
import "./custom.css";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("RedirectHome", RedirectHome);
  },
};

export default theme;
