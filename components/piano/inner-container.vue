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

<style scoped>
.inner-container {
  backdrop-filter: blur(12.1px);
  background: rgba(189, 189, 189, 0.3);
  border-radius: 16px;
  -webkit-backdrop-filter: blur(12.1px);
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
