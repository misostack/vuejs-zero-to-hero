<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Day10 : VueJS The right way</h1>
      </div>
      <div class="col-9">
        <h4>Demo</h4>
        Link : <input type="text" v-model="link" /><button v-on:click="fetch">Fetch</button>
        <pre>
          {{ JSON.stringify(res) }}
        </pre>
        <p>
          <button v-on:click="save">Save</button>
        </p>
        <p>
          <router-link to="/day10/tasks">Manage tasks</router-link> |
          <router-link to="/day10/tasks/new">New Task</router-link>
        </p>
        <router-view></router-view>
      </div>
      <div class="col-3">
        <h4>Requirements</h4>

        <ol>
          <li>List tasks with filters: status, group, search with name</li>
          <li>New task</li>
          <li>Edit task</li>
        </ol>
        <h4>Todo</h4>
        <ol>
          <li>Define Layout structure</li>
          <li>Define Route</li>
          <li>Define Container's state</li>
          <li>Working with form: input: property:task, eventHandle</li>
          <li>Working with components: Table, Filter, Pagination</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default;

export default {
  data() {
    return {
      link: '',
      res: {},
    };
  },
  async created() {},
  methods: {
    async fetch() {
      const apiInstance = axios.create({
        baseURL: this.link,
        headers: {
          common: {
            Authorization: localStorage.getItem('token') || sessionStorage.getItem('token'),
          },
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      try {
        // let queryParams = params.params ? params.params : params;
        // queryParams = qs.stringify(queryParams, {
        //   addQueryPrefix: true,
        //   encode: false,
        //   indices: false,
        // });

        // data, status, statusText
        const res = await apiInstance.get(`/users`);
        this.res = res;
      } catch (err) {
        this.res = err;
      }
    },
    async save() {
      console.error('save');
      const apiInstance = axios.create({
        baseURL: this.link,
        headers: {
          common: {
            Authorization: localStorage.getItem('token') || sessionStorage.getItem('token'),
          },
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      try {
        // let queryParams = params.params ? params.params : params;
        // queryParams = qs.stringify(queryParams, {
        //   addQueryPrefix: true,
        //   encode: false,
        //   indices: false,
        // });

        // data, status, statusText
        const payload = {
          userId: '5ffc3b87-a8db-4f12-b192-5be956bbb76b',
          personalInfo: {
            userTypeId: 1,
            roleId: 1,
            username: 'APITestAdmin',
            titleId: 1,
            firstname: 'APITestAdmin',
            lastname: 'Dev',
            address1: 'address 1',
            address2: 'address 2',
            town: 'Ho Chi Minh',
            countryId: 232,
            postCode: '76000',
            email: '12345@emial',
            telephoneOffice: '+1234567891',
            telephoneMobile: '+9876543210',
          },
        };
        const { userId, ...data } = payload;
        console.error(userId, data);
        const res = await apiInstance.put(`/users/${userId}`, data);
        this.res = res;
      } catch (err) {
        console.error(err);
        this.res = err;
      }
    },
  },
};
</script>

<style></style>
