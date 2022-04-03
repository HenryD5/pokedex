import Vue from "vue";
import VueRouter from "vue-router";
import RoutesBoard from "../views/board";

Vue.use(VueRouter);

let routes = [];
routes = routes.concat(RoutesBoard);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
