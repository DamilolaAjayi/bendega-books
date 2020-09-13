<template>
  <div class="nav-mobile">
    <ul class="nav-mobile-list">
      <li><router-link :to="{name: 'WhyTix'}" >why tix.africa?</router-link></li>
      <li><router-link  :to="{name: 'Pricing'}" >pricing</router-link></li>
      <li><router-link class="nav-right-link" :to="{name: '#'}" >product</router-link></li>
      <li><router-link class="nav-right-link" :to="{name: '#'}" >blog</router-link></li>
      <li><img src="@/assets/tixcustomers.svg" alt="Tix Customers"></li>
      <li><router-link class="u-button nav-right-link" :to="{name: 'Signup'}">sign up</router-link></li>
      <li><router-link class="nav-right-link" :to="{name: 'Login'}" >log in</router-link></li>
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
    left: 0px;
    width: 100%;
    height: 100vh;
    margin: 0px;
    background: $--color-white;
    box-shadow: inset 0 2px 15px -9px rgba(68, 57, 57, 0.5);
    .nav-mobile-list {
      text-align: center;
      line-height: 4em;
      background: $--color-white;
      :first-child{
        margin-top: 2em;
      }
      .u-button{
        line-height: 1em;
        padding: 1em;
        width: 10em;
      }
    }
  }
</style>
