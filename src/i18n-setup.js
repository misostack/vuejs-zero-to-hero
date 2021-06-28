// i18n-setup.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
});

const loadedLanguages = [];

function setI18nLanguage(lang) {
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

export function loadLanguageAsync(lang) {
  if (loadedLanguages.includes(lang)) {
    if (i18n.locale !== lang) setI18nLanguage(lang);
    return Promise.resolve();
  }
  return axios
    .get(`${process.env.VUE_APP_API}/translations/${lang}`)
    .then((response) => {
      const { data } = response;
      if (data) {
        let messages = data.messages || {};
        loadedLanguages.push(lang);
        i18n.setLocaleMessage(lang, messages);
        setI18nLanguage(lang);
      }
    });
}
