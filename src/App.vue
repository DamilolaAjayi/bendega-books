<template>
  <div id="app">
    <background />
    <router-view></router-view>
  </div>
</template>

<script>
import Background from '@/components/Global/Background';

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
