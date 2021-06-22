<template>
  <div>
    <AppHeader></AppHeader>
    <main id="content">
      <h1>Ads</h1>
      <div class="ads">
        <div v-for="ad in ads" :key="ad" class="ad_300x250"></div>
      </div>
      <task-list :items="items" />
    </main>
  </div>
</template>

<script>
import TaskListItem from './components/TaskListItem.vue';
import TaskList from './components/TaskList.vue';
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TaskListItem,
    TaskList,
  },
  computed: {
    ads() {
      return Array.from(Array(this.numberOfAds)).map((v, k) => k);
    },
  },
  data: function () {
    return {
      numberOfAds: 3,
      items: [
        { description: 'Day1 : Init project', status: 'done' },
        {
          description: 'Day2 : Components, shared components',
          status: 'inprogress',
        },
        {
          description: 'Day3 : Local state, props, rendering',
          status: 'pending',
        },
        {
          description: 'Day4 : Forms, Model, Validations & Events',
          status: 'pending',
        },
        { description: 'Day5 : State Exchange', status: 'pending' },
        { description: 'Day6 : Vuex mastere', status: 'pending' },
        {
          description: 'Day7 : Vue router - organize your project',
          status: 'pending',
        },
        {
          description: 'Day8 : Mixins, Directives, Filters',
          status: 'pending',
        },
        { description: 'Day9 : VueJS Indev', status: 'pending' },
        { description: 'Day10 : VueJS Architecture', status: 'pending' },
      ],
    };
  },
};
</script>

<style></style>
