<template>
  <div id="app">
    <base-layout>
      <template slot="header">
        <app-navigation></app-navigation>
      </template>
      <router-view/>
      <app-whitespace></app-whitespace>
    </base-layout>
  </div>
</template>


<script>
import BaseLayout from './layouts/BaseLayout';
import AppNavigation from './components/AppNavigation';
import AppWhitespace from './components/AppWhitespace';


export default {
  components: {
    BaseLayout,
    AppNavigation,
    AppWhitespace,
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i');

html {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
}

* {
  box-sizing: border-box;
}

*:focus {
  outline: none !important;
}
</style>
