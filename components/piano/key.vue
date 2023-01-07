<template>
  <div :class="classList" @mousedown="playNote" @mouseup="stopNote" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PianoKey',
  props: {
    pianoKey: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      pressing: false
    }
  },
  computed: {
    isWhite() {
      return this.pianoKey ? this.pianoKey.note.length === 1 : false
    },

    note() {
      return `${this.pianoKey.note}${this.pianoKey.octave}`
    },

    keyColorClass() {
      return this.isWhite ? 'key-white' : 'key-black'
    },

    pressingClass() {
      return this.pressing ? 'pressing' : ''
    },

    classList() {
      return [this.keyColorClass, this.pressingClass]
    }
  },
  mounted() {
    this.addEventListeners()
  },
  beforeDestroy() {
    this.removeEventListeners()
  },
  methods: {
    addEventListeners() {
      const self = this
      window.addEventListener('keydown', function (event) {
        self.handleKeyDown(event)
      })

      window.addEventListener('keyup', function (event) {
        self.handleKeyUp(event)
      })
    },

    removeEventListeners() {
      window.removeEventListener('keydown', () => {})
      window.removeEventListener('keyup', () => {})
    },

    imPressed(key) {
      return this.pianoKey.key === key
    },

    playCondition(event) {
      return this.imPressed(event.key)
    },

    handleKeyDown(event) {
      if (!this.pressing && this.playCondition(event)) {
        this.playNote()
      }
    },

    handleKeyUp(event) {
      if (this.pressing && this.playCondition(event)) {
        this.stopNote()
      }
    },

    playNote() {
      this.pressing = true
      this.$emit('playNote', this.note)
    },

    stopNote() {
      this.$emit('stopNote', this.note)
      this.pressing = false
    }
  }
})
</script>

<style lang="scss" scoped>
$white: #fff;

$grey-light: #f9fafc;
$grey-medium-light: #bbb;
$grey-medium: #999;
$grey-dark: #777;

$black-light: #555;
$black-medium: #333;
$black-dark: #222;

.key-white {
  border-left: 1px solid $grey-medium;
  border-bottom: 1px solid $grey-medium;
  // border-radius: 0 0 5px 5px;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,
    0 0 3px rgba(0, 0, 0, 0.2);
  // background: linear-gradient(to bottom, $grey-light 0%, $white 100%);
  background: #fff;

  margin: 0 0 0 -1em;
  width: 4.25rem;
  z-index: 1;
}

.key-white:first-child {
  margin: 0 !important;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
}

.key-white:last-child {
  width: 3.25rem;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  border-right: 1px solid $grey-medium;
}

.key-white:active,
.key-white.pressing {
  border-top: 1px solid $grey-dark;
  border-left: 1px solid $grey-medium;
  border-bottom: 1px solid $grey-medium;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
    -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
}

.key-black {
  background: linear-gradient(45deg, $black-dark 0%, $black-light 100%);
  border: 1px solid #333;
  border-radius: 0 0 4px 4px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
    0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(10, 10, 10, 0.75);
  height: 8rem;
  margin: 0 0 0 -2rem;
  width: 2rem;
  z-index: 2;
}

.key-black:active,
.key-black.pressing {
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
    0 -2px 2px 3px rgba(10, 10, 10, 0.6) inset, 0 1px 2px rgba(10, 10, 10, 0.5);
  background: linear-gradient(to right, $black-light 0%, $black-medium 100%);
}
</style>
