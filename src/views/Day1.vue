<template>
  <div class="container">
    <h1>{{ appName }}</h1>
    <p>User: {{ getUser }}</p>
    <p><button @click="doLogin" class="btn btn-primary">Login</button></p>
    <input v-model="selectedDate" type="text" ref="flatpickr" />
    <p class="bg-danger">SELECTED: {{ selectedDate }}</p>
    <h3>Tabs</h3>
    <ul
      v-if="tabs.length > 0"
      class="nav nav-pills mb-3"
      id="pills-tab"
      role="tablist"
    >
      <li
        v-for="tab in tabs"
        :key="tab.name"
        class="nav-item"
        role="presentation"
      >
        <button
          class="nav-link"
          v-on:click="activeTab = tab.name"
          :class="{ active: activeTab === tab.name }"
          :id="'pills-' + tab.name + '-tab'"
          data-bs-toggle="pill"
          v-bind:data-bs-target="'#pills-' + tab.name"
          type="button"
          role="tab"
          v-bind:aria-controls="'pills-' + tab.name"
          aria-selected="true"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <keep-alive>
        <tab-content :tab-content="currentTabComponent" />
      </keep-alive>
    </div>
    <div class="row">
      <h1>VueJS Lifecycle</h1>
      <blockquote>
        <pre>
          const exampleMixin = {
            created: function () {
              console.log("created:MOT DANG PARENT METHOD TRONG LIFECYLE CUA VUE");
            },
          };        
        </pre>
        <pre>
          mixins: [exampleMixin],
        </pre>
      </blockquote>
      <p>Một dạng parent method trong lifecycle của VUE</p>
      <ul class="list-group col-6">
        <li v-for="phase in phases" :key="phase.name" class="list-group-item">
          <div class="card" :class="phase.cls">
            <div class="card-body">
              <h5 class="card-title">{{ phase.name }}</h5>
              <h6 class="card-subtitle mb-2">
                {{ phase.description }}
              </h6>
              <p class="card-text" v-show="false">
                {{ JSON.stringify(phase.meta) }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import flatpickr from 'flatpickr';
import Vue from 'vue';

const TabContent = Vue.component('tab-content', {
  template: '<div>{{tabContent}}</div>',
  props: ['tabContent'],
  created: function () {
    console.error('tab-content:created');
  },
  mounted: function () {
    console.error('tab-content:mounted');
  },
  updated: function () {
    console.error('tab-content:updated');
  },
  activated: function () {
    console.error('tab-content:ACTIVATED .......');
  },
  deactivated: function () {
    console.error('tab-content:DEACTIVATED .......');
  },
  destroyed: function () {
    console.error('tab-content:DESTROYED .......');
  },
  watch: {
    tabContent: function (current, prev) {
      console.error(
        'tab-content:tabContent',
        `current:${current}`,
        `prev:${prev}`,
      );
    },
  },
});

const exampleMixin = {
  created: function () {
    console.log('created:MOT DANG PARENT METHOD TRONG LIFECYLE CUA VUE');
  },
  mounted: function () {
    this.user = {
      name: 'wait a minute',
    };
  },
  beforeUpdate: function () {
    console.error('beforeUpdate', this.$root, this.$el.classList);
  },
};

export default {
  name: 'Home',
  components: {
    TabContent,
    // HelloWorld,
  },
  mixins: [exampleMixin],
  beforeCreate() {
    console.log('beforeCreate: init events & lifecycle', this.$data);
  },
  created() {
    console.log('created: init injections & reactivity', this.$data);
    // for (let i = 0; i < this.phases.length; i++) {
    //   if (this.phases[i].name === "created") {
    //     this.phases[i].meta.push({
    //       action: "created",
    //       $data: JSON.stringify(this.$data),
    //     });
    //   }
    // }
  },
  beforeMount() {
    console.log('beforeMount: compiled html', this.$el, this.$data);
  },
  mounted() {
    console.log('mounted:', this.$el);
    // this.$el.classList.add("bg-light");
    let theDayPicker = flatpickr(this.$refs['flatpickr'], {
      defaultDate: this.selectedDate,
      minDate: new Date(),
    });
    // can interact with DOM : https://www.w3schools.com/jsref/met_node_appendchild.asp
    this.$nextTick(function () {
      console.error('Chac chan toan bo child components da duoc mount');
    });

    // the right one should be
    this.$once('hook:beforeDestroy', function () {
      theDayPicker.destroy();
    });
  },
  computed: {
    getUser() {
      const { user } = this.$store.state;
      return user ? user : this.user;
    },
    currentTabComponent() {
      return this.tabs.filter((t) => t.name === this.activeTab)[0].content;
    },
  },
  watch: {
    user: function (newUser, oldUser) {
      console.error('new', newUser, 'old', oldUser);
    },
  },
  beforeUpdate: function () {},
  updated: function () {
    this.$nextTick(function () {
      // close loading
      console.error('updated.........');
    });
  },
  beforeDestroy: function () {
    // not good
    console.error('cleanup things');
    // this.flatpickr.destroy();
  },
  destroyed: function () {
    console.error('all destroyed: directives, event listeners, child');
  },
  // state
  data() {
    console.log('1st');
    return {
      appName: process.env.VUE_APP_NAME,
      user: null,
      selectedDate: new Date(),
      flatpickr: null,
      tabs: [
        {
          name: 'home',
          title: 'home',
          content: 'home content',
        },
        {
          name: 'about',
          title: 'about',
          content: 'about content',
        },
        {
          name: 'contact',
          title: 'contact',
          content: 'contact content',
        },
      ],
      activeTab: 'home',
      phases: [
        {
          name: 'beforeCreate',
          description: 'synchronously: Tại thời điểm này state chưa tồn tại',
          meta: [],
          cls: 'bg-warning',
        },
        {
          name: 'created(*)',
          description: `synchronously: Tại thời điểm có thể bắt đầu set state cho component. Và state cũng đang ở dạng Observer. Eg: this.$data.
             Use cases: call API, init web socket connection
            `,
          meta: [],
          cls: 'bg-warning',
        },
        {
          name: 'beforeMount',
          description: `Tại thời điểm có thể bắt đầu set state cho component. 
            Tại bước này, VueComponent sẽ đọc template(template tag) và chạy render function hoặc
            compile thẳng template của ele's outerHTML
            Và state cũng đang ở dạng Observer. Eg: this.$data.\n
            Tuy nhiên lúc này this.$ele ( DOM ) chưa tồn tại.
            Chú ý: SSR không tồn tại hook này
            `,
          meta: [],
          cls: 'bg-success',
        },
        {
          name: 'mounted(*)',
          description: `Tại thời điểm có thể bắt đầu set state cho component. Và state cũng đang ở dạng Observer. Eg: this.$data.\n
            Tuy nhiên lúc này this.$ele ( DOM ) chưa tồn tại.
            Có 1 điểm thú vị là lúc này chưa chắc toàn bộ child components đã được mounted.
            Vue cung cấp 1 cách để đợi thời điểm này.
            Sử dụng this.$nextTick(function() { // render toàn bộ }) trong function mounted
            `,
          meta: [],
          cls: 'bg-success',
        },
        {
          name: 'actived|deactivated',
          description: `Dùng trong trường hợp liên quan tới keep-alive.
          Ví dụ như tab content.
            `,
          meta: [],
          cls: 'bg-info',
        },
        {
          name: 'beforeUpdate',
          description: `được gọi khi data(state) thay đổi trước khi DOM được cập nhật.
          Thời điểm thích hợp để remove các event listenrs manually.
            `,
          meta: [],
          cls: 'bg-primary',
        },
        {
          name: 'updated',
          description: `được gọi khi data(state) thay đổi trước khi DOM được cập nhật.
          Không nên thay đổi state trong hook. Để react với state sử dụng:
          computed property và watcher thay thế. Lưu ý nên sử dụng nextTick để đảm bảo
          entinre view đã được render
            `,
          meta: [],
          cls: 'bg-primary',
        },
        {
          name: 'beforeDestroy(*)',
          description: `được gọi trước khi Vue instance bị destroy.
          Thời điểm thích hợp để remove các instance tạo bởi third party lib.
          Ví dụ: calendar các kiểu : flatpickr, Pikaday.
            `,
          meta: [],
          cls: 'bg-danger',
        },
        {
          name: 'destroyed',
          description: `được gọi sau khi Vue instance bị destroy.
          Bao gồm cả: directives, event listeners, child Vue instances.
          Thời điểm thích hợp để hủy các event
          onscroll, hay các sự kiện lắng nghe socket.io, larave-echo
            `,
          meta: [],
          cls: 'bg-danger',
        },
      ],
    };
  },
  methods: {
    doLogin() {
      const loginPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve({ name: 'tada' });
        }, 500);
      });
      loginPromise.then((user) => {
        this.user = user;
      });
    },
    printUser() {
      alert(this.user);
    },
  },
};
</script>

<style lang="scss" scoped></style>
