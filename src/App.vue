<template>
  <div id="app">
    <app-language />
    <h1>{{ $t('app.title') }}</h1>
    <div id="nav">
      <router-link to="/">Today</router-link> |
      <router-link to="/day1">Day1</router-link> |
      <router-link to="/day2">Day2</router-link> |
      <router-link to="/day3">Day3</router-link> |
      <router-link to="/day4">Day4</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <app-loading />
  </div>
</template>

<style lang="scss">
@import 'styles/global.scss';
</style>
