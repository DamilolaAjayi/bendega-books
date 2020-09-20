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
        <div class="nav-mobile" v-if="isMobile">
            <img v-if="!menuClicked" src="@/assets/menu.svg" @click="toggleMenu" alt="Menu Icon">
            <img class="close-button" v-else src="@/assets/close-button.svg" @click="toggleMenu" alt="Close Icon">
            <mobile-nav v-if="showMobileNav" />
        </div>
        <div class="nav-web" v-else>
          <web-nav />
        </div>
      </div>
        <!-- shopping cart in here -->
    </div>
  </div>
</template>

<script>
import IsMobile from '@/mixins/IsMobile';
import WebNav from './WebNav';
import MobileNav from './MobileNav';

export default {
  mixins: [IsMobile],
  components: {
    MobileNav,
    WebNav,
  },
  data() {
    return {
      showMobileNav: false,
      menuClicked: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMobileNav = !this.showMobileNav;
      this.menuClicked = !this.menuClicked;
    },
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    color: #6794C4;    
    height: 3.5em;
    position: relative;
    width: 100%;
    display: flex;
    font-weight: 500;
    z-index: 3;
    padding: 0 6%;
    transition: transform 0.5s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
      justify-content: flex-end;
      width: 50%;
    }
    &-content {
      width: inherit;
      @media screen and (max-width: 767px) {
        display: flex;
        justify-content: flex-end;
      }
    }
    &-logo {
      height: 35px;
      img {
        height: 25px;
      }
    }
  }
</style>
