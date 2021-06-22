import Vue from "vue";
import VueRouter from "vue-router";
import Day1 from "@/views/Day1.vue";
import Day2 from "@/views/Day2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Day2",
    component: Day2,
  },
  {
    path: "/day1",
    name: "Day1",
    component: Day1,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
