<template>
  <div class="nav">
    <div class="nav-left">
      <div class="nav-logo">
        <router-link :to="{ name: 'Home' }">
          <img src="@/assets/bendega-books-logo.png" alt="Bendega Books Logo">
        </router-link>
      </div>
    </div>
    <div class="nav-right">
      <div class="nav-content">
        <div class="nav-web">
        <ul class="nav-web-list">
          <li class="nav-web-link"><router-link :to="{name: 'Author'}">Author</router-link></li>
        </ul>
        </div>
      </div>
        <!-- shopping cart in here -->
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  .nav {
    color: #6794C4;    
    height: 3.5em;
    padding: 0 90px;
    position: fixed;
    width: 100%;
    display: flex;
    z-index: 3; 
    transition: transform 0.5s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    @media screen and (min-width: 960px) {
      z-index: 300;
    }
    &-left, &-right , &-logo {
      height: 3.5em;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &-left{
      width: 50%;
    }
    &-right {
      padding-left: 13em;
      width: 50%;
    }
    &-content {
      width: inherit;
      .close-button {
        background: #e5e5e5;
      }
    }
    &-logo {
      height: 35px;
      img {
        height: 25px;
      }
    }
    // &-mobile {
    //   float: right;
    // }
    &-web-list {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &-web-link{
      text-align: center;
      font-weight: 500;
      a:hover {
        color: #1b262c;
      }
    }
  }
</style>
