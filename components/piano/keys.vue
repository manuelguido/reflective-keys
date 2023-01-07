<template>
  <div class="keys">
    <PianoKey
      v-for="(k, i) in pianoKeys"
      :key="i"
      :piano-key="k"
      @playNote="playNote"
      @stopNote="stopNote"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import pianoKeysMixin from '@/mixins/pianokeysMixin'

export default Vue.extend({
  name: 'PianoKeys',
  mixins: [pianoKeysMixin],
  methods: {
    playNote(note) {
      this.$emit('playNote', note)
    },
    stopNote(note) {
      this.$emit('stopNote', note)
    }
  }
})
</script>

<style lang="scss" scoped>
$size: 100%;

.keys {
  display: flex;
  width: $size;
  height: $size;
}

.keys .inner {
  display: flex;
}
</style>
