import Vue from "vue";
import VueRouter from "vue-router";

import Client from "../views/Client.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    redirect: "/client"
  },
  {
    path: "/client",
    name: "Client",
    component: Client
  }
];

const router = new VueRouter({
  scrollBehavior() {
    return {
      selector: "tohash"
    };
  },
  routes: [...routes]
});

export default router;
