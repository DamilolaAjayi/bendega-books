<template>
  <ul class="nav-web-list">
    <li class="nav-web-link"><router-link :to="{name: 'Author'}" >Author</router-link></li>
    <li class="nav-web-link"><a href="store.html">store</a></li>
    <li class="nav-web-link"><router-link class="nav-right-link" :to="{name: 'Faq'}" >FAQs</router-link></li>
  </ul>
</template>

<script>

export default {
  name: 'web-nav',
};
</script>

<style lang="scss" scoped>
  .nav {
     &-web-list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
     }
     &-web-link{
        list-style: none;
        a:hover {
            font-weight: 800;
        }
    }
  } 
</style>
