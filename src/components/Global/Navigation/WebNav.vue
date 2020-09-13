<template>
  <ul class="nav-web-list">
    <li class="nav-web-link"><router-link :to="{name: 'Author'}" >Author</router-link></li>
    <li class="nav-web-link"><router-link  :to="{name: 'Store'}" >Store</router-link></li>
    <li class="nav-web-link"><router-link class="nav-right-link" :to="{name: '#'}" >FAQs</router-link></li>
    <li class="nav-web-link"><router-link class="nav-right-link" :to="{name: '#'}" >Contact</router-link></li>
  </ul>
</template>

<script>

export default {
  name: 'web-nav',
  methods: {
    isPage(route) {
      return this.$route.path === `/${route}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .nav-web-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
     &-web-link{
      text-align: center;
    }
  }
</style>
