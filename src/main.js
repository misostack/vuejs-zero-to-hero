import Vue from 'vue';
import App from './App.vue';
import Fragment from 'vue-fragment';
import AppHeader from '@/views/layouts/AppHeader.vue';
import AppLoading from '@/views/layouts/AppLoading.vue';
import vSelect from 'vue-select';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.component('v-select', vSelect);
Vue.component('app-header', AppHeader);
Vue.component('app-loading', AppLoading);
Vue.use(Fragment.Plugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
