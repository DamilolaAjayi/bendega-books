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
  background-image: url(../../assets/Background.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
  position: fixed;
  z-index: -1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba($color: #bbe1fa, $alpha: 0.4) 0%, #bbe1fa 35%, rgba($color: #bbe1fa, $alpha: 0.4) 80%);
  }
}
</style>
