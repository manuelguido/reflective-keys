<template>
  <span :class="classList">{{ text }}</span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      default: ''
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      return this.isWhite ? 'white-note-text' : 'black-note-text'
    }
  }
})
</script>

<style lang="scss" scoped>
$opacity: 0.15;

.white-note-text {
  color: rgba(23, 23, 23, $opacity);
  font-weight: 600;
}

.black-note-text {
  color: rgba(255, 255, 255, $opacity);
  font-weight: 600;
}
</style>
