import Vue from 'vue';
import App from './App.vue';
import Fragment from 'vue-fragment';
import AppHeader from '@/views/layouts/AppHeader.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.component('AppHeader', AppHeader);
Vue.use(Fragment.Plugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
