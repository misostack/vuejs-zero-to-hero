<template>
  <div>
    <AppHeader></AppHeader>
    <main id="content">
      <h1>Ads</h1>
      <div class="ads">
        <div v-for="ad in ads" :key="ad" class="ad_300x250"></div>
      </div>
      <h1>{{ JSON.stringify(taskSubject) }}</h1>
      <button class="btn btn-danger" @click="toggleTick">
        {{ isTickEnabled ? 'STOP' : 'START' }} : {{ items.length }}
      </button>
      <div v-for="(listItem, listItemIdx) in list" :key="'k' + listItemIdx">
        {{ listItem }}
      </div>
      <task-list :items="items" v-if="false" />
      <div v-for="(item, key) in items" :key="key">
        {{ item.description }} - {{ item.status }}
      </div>
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
  methods: {
    toggleTick() {
      this.isTickEnabled = !this.isTickEnabled;
      if (this.isTickEnabled) {
        // this.tickTimer = setInterval(() => {
        this.items.push({
          description: `Day${this.items.length + 1} : lorem upsim`,
          status: 'pending',
        });
        this.taskSubject.totalItems = this.items.length;
        this.list[0] = 'x';
        const toggleStatus = (items) => {
          const idx = items.length % 10;
          items[idx].status =
            items[idx].status === 'pending' ? 'done' : 'pending';
        };
        toggleStatus(this.items);
        console.error(this.taskSubject);
        console.error('tick ..');
      }
      //   }, 2000);
      // } else {
      //   clearInterval(this.tickTimer);
      // }
      // // the right one should be
      // this.$once('hook:beforeDestroy', function () {
      //   if (this.tickTimer) {
      //     clearInterval(this.tickTimer);
      //   }
      // });
    },
  },
  created() {},
  data: function () {
    return {
      list: ['a', 'b', 'c'],
      taskSubject: {
        name: 'Task example',
      },
      tickTimer: null,
      isTickEnabled: false,
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
