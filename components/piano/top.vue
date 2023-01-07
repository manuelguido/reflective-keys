<template>
  <div class="piano-top">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PianoTop'
})
</script>

<style lang="scss" scoped>
.piano-top {
  height: 4vh;
  width: 100%;
  background: #eee;
}
</style>
