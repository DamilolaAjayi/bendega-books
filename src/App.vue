<template>
  <div id="app">
    <background />
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import Navigation from '@/components/Global/Navigation/Nav';
import Background from '@/components/Global/Background';

Vue.component('navigation', Navigation);

export default {
  name: 'App',
  components: {
    Background,
  }
}
</script>

<style lang="scss" src="./scss/reset.scss"></style>
<style lang="scss">

</style>
