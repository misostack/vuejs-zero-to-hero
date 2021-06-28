import Vue from 'vue';
import VueRouter from 'vue-router';
import Day1 from '@/views/Day1.vue';
import Day2 from '@/views/Day2.vue';
import Day3 from '@/views/Day3.vue';
import Day4 from '@/views/Day4.vue';
import { loadLanguageAsync } from '@/i18n-setup';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Day4',
    component: Day4,
  },
  {
    path: '/day4',
    name: 'Day4',
    component: Day3,
  },
  {
    path: '/day3',
    name: 'Day3',
    component: Day3,
  },
  {
    path: '/day2',
    name: 'Day2',
    component: Day2,
  },
  {
    path: '/day1',
    name: 'Day1',
    component: Day1,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.js
router.beforeEach((to, from, next) => {
  const lang = to.params.lang || 'en';
  loadLanguageAsync(lang).then(() => next());
});

export default router;
