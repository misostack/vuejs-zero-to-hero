<template>
  <div id="app">
    <app-language />
    <h1>{{ $t('app.title') }}</h1>
    <div id="nav">
      <router-link to="/">Today</router-link>
      <router-link to="/day1">Day1</router-link>
      <router-link to="/day2">Day2</router-link>
      <router-link to="/day3">Day3</router-link>
      <router-link to="/day4">Day4</router-link>
      <router-link to="/day5">Day5</router-link>
      <router-link to="/day6">Day6</router-link>
      <router-link to="/day7">Day7</router-link>
      <router-link to="/day8">Day8</router-link>
      <router-link to="/day9">Day9</router-link>
      <router-link to="/day10">Day10</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <app-loading />
  </div>
</template>

<style lang="scss">
@import 'styles/global.scss';
</style>
