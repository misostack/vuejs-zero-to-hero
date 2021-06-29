import debounce from 'lodash/debounce';
export default {
  created: function () {
    process.env.NODE_ENV != 'production' ? console.log('debounce mixin') : '';
  },
  methods: {
    debounce: function (func, timeout = 300) {
      return debounce(func, timeout);
    },
  },
};
