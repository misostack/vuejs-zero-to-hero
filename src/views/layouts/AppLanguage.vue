<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import { loadLanguageAsync } from '@/i18n-setup';
export default {
  name: 'locale-changer',
  watch: {
    '$i18n.locale': function (val) {
      loadLanguageAsync(val);
    },
  },
  data() {
    return { langs: ['en', 'vn'] };
  },
};
</script>

<style></style>
