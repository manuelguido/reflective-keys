<template>
  <PianoKeyWhite v-if="isWhite" @click.native="playNote" ref="pianoKey" />
  <PianoKeyBlack v-else @click.native="playNote" ref="pianoKey" />
</template>

<script>
export default {
  props: {
    keyboardKey: {
      type: String,
      default: "",
    },
    octave: {
      type: Number,
      default: 4,
    },
    pianoKey: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    duration() {
      return "8n";
    },
    isWhite() {
      return this.pianoKey ? this.pianoKey.note.length === 1 : false;
    },
    note() {
      return `${this.pianoKey.note}${this.octave}`;
    },
  },
  mounted() {
    this.addEventListeners();
  },
  beforeDestroy() {
    this.removeEventListeners();
  },
  methods: {
    addEventListeners() {
      let self = this;
      window.addEventListener("keyup", function (event) {
        self.handleKeyPress(event);
      });
    },

    removeEventListeners() {
      window.removeEventListener("keyup", () => {});
    },

    pressedMyKey(position, key) {
      return this.pianoKey.keys[position] === key;
    },

    pressedMyOctave(octave) {
      return this.octave === octave;
    },

    imPressed(position, octave, key) {
      return this.pressedMyKey(position, key) && this.pressedMyOctave(octave);
    },

    handleKeyPress(event) {
      if (this.imPressed(0, 3, event.key) || this.imPressed(1, 4, event.key)) {
        this.$refs.pianoKey.$el.click();
      }
    },

    playNote() {
      const pianoKey = {
        note: this.note,
        duration: this.duration,
      };
      this.$emit("playNote", pianoKey);
    },
  },
};
</script>