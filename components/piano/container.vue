<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PianoContainer'
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_background.scss';

.container {
  @include backdropFilterLight;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

@media screen and (min-width: 992px) {
  .container {
    padding: 5rem;
  }
}

@media screen and (max-width: 992px) {
  .container {
    max-width: 95vw;
    padding: 1rem;
  }
}
</style>
