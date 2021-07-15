<template>
  <div>
    <h1>Day7 : Vue router - Organize your routes</h1>
    <p>{{ $t('day7/example/list/title') }}</p>
    <div id="nav">
      <router-link :to="{ name: 'day7-static' }">/day7/static</router-link>
      <router-link :to="{ name: 'example.findOne', params: { example_id: 1 } }">day7/example/1</router-link>
      <router-link
        :to="{
          name: 'example.item.findOne',
          params: { example_id: 1, item_id: 1 },
        }"
        >day7/examples/1/items/1</router-link
      >
      <router-link :to="{ name: 'day7-static' }">Day 7 - Static</router-link>
      <router-link to="/day7/something-not-found">Day 7 - Something not found</router-link>
    </div>
    <div class="container">
      <div>
        <a class="btn btn-primary" v-on:click="navigateByRoute('/day7/examples/1/items/2')">Day 7 Item 2</a>
        <a class="btn btn-warning" v-on:click="navigateBack()">Back</a>
        <a class="btn btn-danger" v-on:click="myAlert('text')">My Alert</a>

        <a class="btn btn-danger" v-on:click="$helpText('tadata')">{{ 'help' | capitalize }}</a>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateByRoute(route) {
      this.$router.push(route);
    },
    navigateBack() {
      this.$router.back();
    },
    myAlert(text) {
      this.$myAlert(text);
    },
  },
};
</script>

<style></style>
