<template>
  <div>
    <h1>Day7 : Vue router - Organize your routes</h1>
    <div id="nav">
      <router-link :to="{ name: 'day7-static' }">/day7/static</router-link>
      <router-link :to="{ name: 'example.findOne', params: { example_id: 1 } }"
        >day7/example/1</router-link
      >
      <router-link
        :to="{
          name: 'example.item.findOne',
          params: { example_id: 1, item_id: 1 },
        }"
        >day7/examples/1/items/1</router-link
      >
      <router-link :to="{ name: 'day7-static' }">Day 7 - Static</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
