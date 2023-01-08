<template>
  <div class="piano-data">
    <PianoDataToggleTextSwitch @checked="emitChecked" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PianoData',
  methods: {
    emitChecked(newValue) {
      this.$emit('checked', newValue)
    }
  }
})
</script>

<style lang="scss" scoped>
.piano-data {
  margin-top: 2rem;
}
</style>
