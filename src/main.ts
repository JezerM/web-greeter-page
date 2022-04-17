import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "inter-ui/inter.css";
import "./index.css";

createApp(App).use(router).mount("#app");
