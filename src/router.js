import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

import NotFound from "./pages/NotFound.vue";

const SplashScreen = defineAsyncComponent(() =>
  import("./pages/SplashScreen.vue")
);

const BasePage = defineAsyncComponent(() => import("./pages/BasePage.vue"));

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
  routes: [
    { path: "/", redirect: "/init" },
    { path: "/init", component: SplashScreen },
    { path: "/algorithms", component: BasePage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
