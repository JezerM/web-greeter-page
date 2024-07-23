// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Themes from "./Themes.vue";
import ReadOnly from "./components/ReadOnly.vue";
import Writable from "./components/Writable.vue";
import Deprecated from "./components/Deprecated.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("themes", Themes);

    app.component("ReadOnly", ReadOnly);
    app.component("Writable", Writable);
    app.component("Deprecated", Deprecated);
  },
} satisfies Theme;
