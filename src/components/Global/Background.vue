<template>
  <div class="bg"></div>
</template>

<script>
export default {
  name: 'background',
};
</script>

<style lang="scss">
.bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
