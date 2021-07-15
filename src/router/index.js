import Vue from 'vue';
import VueRouter from 'vue-router';
import Day1 from '@/views/Day1.vue';
import Day2 from '@/views/Day2.vue';
import Day3 from '@/views/Day3.vue';
import Day4 from '@/views/Day4.vue';
import Day5 from '@/views/Day5.vue';
import Day6 from '@/views/Day6.vue';
import Day7 from '@/views/Day7.vue';
import Day8 from '@/views/Day8.vue';
import Day9 from '@/views/Day9.vue';
import Day10 from '@/views/Day10.vue';

import { loadLanguageAsync } from '@/i18n-setup';

Vue.use(VueRouter);
const randomContent =
  '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quaerat, voluptas iusto illum rem corporis atque hic impedit, tempore, repudiandae quo. Optio ut delectus quibusdam veritatis beatae atque, mollitia minima.</p>';
const StaticPage = {
  template: `<div class="row"><h1>Day 7 - Static Page</h1> ${randomContent}</div>`,
};
const ExamplePage = {
  props: {
    exampleId: Number,
    itemId: Number,
  },
  computed: {
    item: function () {
      return {
        id: this.itemId,
        name: `Item ${this.itemId}`,
      };
    },
  },
  created: function () {
    console.error('created:only once');
  },
  mounted: function () {
    console.error('mounted:ony once');
  },
  watch: {
    exampleId: function (val, oldVal) {
      console.error(val, oldVal);
    },
    $route(to, from) {
      // react to route changes...
      console.error('from', from, 'to', to);
    },
  },

  data: function () {
    return {};
  },
  template: `
    <div class="row">
      <div class="col-12">
        <h1>Day7 - Example Page {{ $route.params.example_id }}</h1>        
        <h2 v-if="$route.params.item_id">Item {{$route.params.item_id}}</h2>
        ${randomContent}
        {{ JSON.stringify(item) }}
      </div>
    </div>
  `,
};

const NotFound = {
  template: `
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>404 - Notfound</h1>
        <p>$route.params.pathMatch : {{ $route.params.pathMatch }}</p>
      </div>
    </div>
  </div>
  `,
};

import Tasks from '@/views/day10/Tasks.vue';
import TaskNew from '@/views/day10/TaskNew.vue';
import TaskEdit from '@/views/day10/TaskEdit.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Day10' },
  },
  {
    path: '/day10',
    name: 'Day10',
    component: Day10,
    children: [
      {
        path: 'tasks',
        component: Tasks,
      },
      {
        path: 'tasks/new',
        component: TaskNew,
      },
      {
        path: 'tasks/edit/:id',
        component: TaskEdit,
        props: true,
      },
    ],
  },
  {
    path: '/day9',
    name: 'Day9',
    component: Day9,
  },
  {
    path: '/day8',
    name: 'Day8',
    component: Day8,
  },
  {
    path: '/day7',
    name: 'Day7',
    component: Day7,
    children: [
      {
        path: '',
        component: {
          template: '<h1>Day 7 - Landing Page</h1>',
        },
      },
      {
        path: 'static',
        name: 'day7-static',
        component: StaticPage,
      },
      {
        path: 'examples/:example_id',
        name: 'example.findOne',
        component: ExamplePage,
      },
      {
        path: 'examples/:example_id/items/:item_id',
        name: 'example.item.findOne',
        component: ExamplePage,
        props: (route) => {
          return {
            exampleId: parseInt(route.params.example_id),
            itemId: parseInt(route.params.item_id),
          };
        },
      },
      {
        path: '*',
        component: {
          template: '<h1>Day 7 - 404 Notfound</h1>',
        },
      },
    ],
  },
  {
    path: '/day6',
    name: 'Day6',
    component: Day6,
  },
  {
    path: '/day5',
    name: 'Day5',
    component: Day5,
  },
  {
    path: '/day4',
    name: 'Day4',
    component: Day4,
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
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '*',
    component: NotFound,
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
