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

<style scoped>
.container {
  backdrop-filter: blur(12.1px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 20px 100px 20px rgba(45, 255, 178, 0.1);
  -webkit-backdrop-filter: blur(12.1px);
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
