<template>
  <div class="nav-mobile">
    <ul class="nav-mobile-list">
      <li><router-link :to="{name: 'Author'}">Author</router-link></li>
      <li><a href="store.html">Store</a></li>
      <li><router-link :to="{name: 'Faq'}">FAQs</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'mobile-nav',
};
</script>

<style lang="scss" scoped>
  .nav-mobile {
    position: absolute;
    top: 100%;
    font-size: 1.2em;
    left: 0px;
    width: 100%;
    height: 100vh;
    margin: 0px;
    background: white;
    box-shadow: inset 0 2px 15px -9px rgba(68, 57, 57, 0.5);
    .nav-mobile-list {
      text-align: center;
      line-height: 5em;
      background: white;
      :first-child{
        margin-top: 2em;
      }
    }
  }
</style>
