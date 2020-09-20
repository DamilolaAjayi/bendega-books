<template>
  <div id="app" class="app">
    <background />
    <router-view class="app__frame" />
  </div>
</template>

<script>
import Vue from 'vue';
import Navigation from '@/components/Global/Navigation/Nav';
import Background from '@/components/Global/Background';
import Footer from '@/components/Global/Footer';

Vue.component('navigation', Navigation);
Vue.component('el-footer', Footer);

export default {
  name: 'app',
  components: {
    Background,
  }
}
</script>

<style lang="scss" src="./scss/helper.scss"></style>
<style lang="scss" src="./scss/reset.scss"></style>
<style lang="scss">
  .app {
    position: relative;
    height: 100vh;
    overflow: auto;
    &__frame {
      display: flex;
      flex-direction: column;
      height: 100%;
      > main {
        overflow: auto;
        flex: 1;
      }
    }
  }
</style>
