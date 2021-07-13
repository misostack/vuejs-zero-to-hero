const Example = {};
import { mapActions } from 'vuex';
Example.install = function (Vue, options = {}) {
  // 1. add global method or property
  Vue.myGlobalMethod = function () {
    console.error(options);
    // some logic ...
  };

  // 2. add a global asset
  Vue.directive('my-directive', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
      // Focus the element
      el.focus();
    },
  });

  // 3. inject some component options
  Vue.mixin({
    // created: function () {
    //   console.error('never used this !!!always runned!!');
    // },
    // kind of global mixin
    methods: {
      ...mapActions('app', ['showLoading', 'hideLoading']),
      $helpText: function (helpText) {
        alert(`[HELP]: ${helpText}`);
      },
    },
  });

  // 4. add an instance method
  Vue.prototype.$myAlert = function (text) {
    // some logic ...
    alert(text);
  };

  // 5. add filter
  Vue.filter('capitalize', function (value) {
    console.error('filter:capitalize', value);
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  });
};

export default Example;
