import { defineClientConfig } from "@vuepress/client";
import Deprecated from "./components/Deprecated.vue";
import ReadOnly from "./components/ReadOnly.vue";
import Internal from "./components/Internal.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("Deprecated", Deprecated);
    app.component("ReadOnly", ReadOnly);
    app.component("Internal", Internal);
  },
  setup() {},
  rootComponents: [],
});
