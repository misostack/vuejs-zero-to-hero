<template>
  <div class="container">
    <div class="row">
      <div class="col"><h1>Day3 : Local State, Props & Rendering</h1></div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Manage customers</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            b5
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Customers</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <table class="table">
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Order(sort index)</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <draggable v-model="customers" tag="tbody">
                <tr v-for="(customer, cid) in customers" :key="cid">
                  <td>{{ customer.id }}</td>
                  <td>{{ getFullName(customer) }}</td>
                  <td>{{ customer.email }}</td>
                  <td>{{ customer.order }}</td>
                  <td>Actions</td>
                </tr>
              </draggable>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { randomName, randomIntNumber } from '@/shared';
export default {
  components: {
    draggable,
  },
  methods: {
    getFullName(customer) {
      return `${customer.lastName} + ${customer.middleName} + ${customer.firstName}`;
    },
  },
  // computed: {
  //   sortCustomers: {
  //     get() {
  //       return this.customers.map((c) => c).sort((a, b) => a.order - b.order);
  //     },
  //     set(value) {
  //       this.customers = value;
  //       console.log(this.customers[0].id, '---', value[0].id);
  //       this.$forceUpdate();
  //     },
  //   },
  // },

  data: function () {
    let customers = Array.from(new Array(10));
    customers = customers.map((_, id) => {
      const names = randomName();
      return {
        id: Math.max(1, randomIntNumber(customers.length)),
        firstName: names.firstName,
        middleName: names.middleName,
        lastName: names.lastName,
        email: `customer${id.toString().padStart(2, '0')}@yopmail.com`,
        order: id,
      };
    });
    return {
      customers,
    };
  },
};
</script>

<style></style>
