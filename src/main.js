import Vue from 'vue';
import App from './App.vue';
import Fragment from 'vue-fragment';
import AppHeader from '@/views/layouts/AppHeader.vue';
import AppLoading from '@/views/layouts/AppLoading.vue';
import AppLanguage from '@/views/layouts/AppLanguage.vue';
import vSelect from 'vue-select';
import router from './router';
import store from './store';
import Example from './plugins/example';
import { i18n } from './i18n-setup';
// plugins
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import './vee-validate';

Vue.config.productionTip = false;
vSelect.props.components.default = () => ({
  Deselect: {
    render: (createElement) => createElement('span', '❌'),
  },
  OpenIndicator: {
    render: (createElement) => createElement('span', '🔽'),
  },
});
Vue.component('v-select', vSelect);
Vue.component('app-header', AppHeader);
Vue.component('app-loading', AppLoading);
Vue.component('app-language', AppLanguage);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.use(Fragment.Plugin);
Vue.use(Example);

// Globally register all `_base`-prefixed components
import './components/_globals';

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
