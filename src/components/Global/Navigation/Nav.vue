<template>
    <div class="nav">
      <div class="nav-left">
        <div class="nav-logo">
          <router-link :to="home">
            <img src="@/assets/bendega-books-logo.svg" alt="Bendega Books Logo">
          </router-link>
        </div>
      </div>
      <div class="nav-right">
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
    width: 100%;
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    transition: transform 0.5s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    @media screen and (min-width: 960px) {
      z-index: 300;
    }
    &-left, &-right , &-logo {
      height: $nav-height;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    &-left{
      width: 30%;
    }
    &-right {
      justify-content: flex-end;
      width: 70%;
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
    &-mobile {
      float: right;
    }
  }
</style>
