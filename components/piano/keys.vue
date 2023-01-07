<template>
  <div class="keys">
    <!-- <span v-for="octave in octaves" :key="octave" class="inner"> -->
    <PianoKey
      v-for="(k, i) in fullPianoKeys"
      :key="i"
      :piano-key="k"
      :octave="k.octave"
      @playNote="playNote"
      @stopNote="stopNote"
    />
    <!-- </span> -->
    <PianoKey :piano-key="keys[0]" :octave="6" @playNote="playNote" />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'PianoKeys',
  data() {
    return {
      octaves: [3, 4, 5],
      keys: [
        {
          id: 1,
          note: 'C',
          keys: ['z', 'q']
        },
        {
          id: 2,
          note: 'C#',
          keys: ['s', '2']
        },
        {
          id: 3,
          note: 'D',
          keys: ['x', 'w']
        },
        {
          id: 4,
          note: 'D#',
          keys: ['d', '3']
        },
        {
          id: 5,
          note: 'E',
          keys: ['c', 'e']
        },
        {
          id: 6,
          note: 'F',
          keys: ['v', 'r']
        },
        {
          id: 7,
          note: 'F#',
          keys: ['g', '5']
        },
        {
          id: 8,
          note: 'G',
          keys: ['b', 't']
        },
        {
          id: 9,
          note: 'G#',
          keys: ['h', '6']
        },
        {
          id: 10,
          note: 'A',
          keys: ['n', 'y']
        },
        {
          id: 11,
          note: 'A#',
          keys: ['j', '7']
        },
        {
          id: 12,
          note: 'B',
          keys: ['m', 'u']
        }
      ]
    }
  },
  computed: {
    fullPianoKeys() {
      const fullPianoKeys = []
      this.octaves.forEach((octave) => {
        this.keys.forEach((pianoKey) => {
          pianoKey.octave = octave
          fullPianoKeys.push(pianoKey)
        })
      })
      return fullPianoKeys
    }
  },
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
