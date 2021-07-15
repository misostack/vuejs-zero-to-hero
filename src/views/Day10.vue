<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Day10 : VueJS The right way</h1>
      </div>
      <div class="col-9">
        <h4>Demo</h4>
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
export default {};
</script>

<style></style>
