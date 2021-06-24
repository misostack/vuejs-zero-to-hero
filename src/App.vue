<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Today</router-link> |
      <router-link to="/day1">Day1</router-link> |
      <router-link to="/day2">Day2</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'styles/global.scss';
</style>
