<template>
  <div class="logo-icon">
    <img :src="require('~/assets/img/logo.png')" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LogoIcon'
})
</script>

<style scoped>
.logo-icon {
  display: flex;
  top: 1rem;
  margin: 0;
  position: relative;
  z-index: 1080;
}

@media screen and (min-width: 992px) {
  .logo-icon img {
    width: 30vw;
  }
}
@media screen and (max-width: 992px) {
  .logo-icon img {
    width: 80vw;
  }
}
</style>
