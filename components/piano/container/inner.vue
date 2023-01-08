<template>
  <div class="inner-container">
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

.inner-container {
  @include backdropFilterDark;
  border-radius: 16px;
}

@media screen and (min-width: 992px) {
  .inner-container {
    padding: 1rem;
  }
}

@media screen and (max-width: 992px) {
  .inner-container {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
  }
}
</style>
