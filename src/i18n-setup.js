// i18n-setup.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  missing: (locale, key, vm, values) => {
    // handle translation missing
    if (!values[key]) {
      return `${locale}:MISSING.${key}`;
    }
  },
  silentTranslationWarn: true,
});

const loadedLanguages = [];

function setI18nLanguage(lang) {
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

function loadLocaleMessages() {
  const locales = require.context('@/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export function loadLanguageAsync(lang) {
  if (loadedLanguages.includes(lang)) {
    if (i18n.locale !== lang) setI18nLanguage(lang);
    return Promise.resolve();
  }
  return axios.get(`${process.env.VUE_APP_API}/translations/${lang}`).then((response) => {
    const { data } = response;
    if (data) {
      const localMessages = loadLocaleMessages();
      let messages = data.messages || {};
      messages = { ...localMessages[lang], ...messages };
      loadedLanguages.push(lang);
      i18n.setLocaleMessage(lang, messages);
      setI18nLanguage(lang);
    }
  });
}
