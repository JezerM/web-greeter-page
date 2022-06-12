import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import "inter-ui/inter.css";
import "./index.css";

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "./views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/web-greeter-page/",
    name: "Home",
    component: Home,
  },
  {
    path: "/web-greeter-page/themes",
    name: "Themes",
    component: () => import("./views/Themes.vue"),
  },
];

//createApp(App).use(router).mount("#app");

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  {
    routes: routes,
  }
);
