<template>
  <PianoKeyWhite
    v-if="isWhite"
    :pressing="pressing"
    @mousedown.native="playNote"
    @mouseup.native="stopNote"
  />
  <PianoKeyBlack
    v-else
    :pressing="pressing"
    @mousedown.native="playNote"
    @mouseup.native="stopNote"
  />
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
  data() {
    return {
      pressing: false,
    };
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
      window.addEventListener("keydown", function (event) {
        self.handleKeyDown(event);
      });

      window.addEventListener("keyup", function (event) {
        self.handleKeyUp(event);
      });
    },

    removeEventListeners() {
      window.removeEventListener("keydown", () => {});
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

    playCondition(event) {
      return this.imPressed(0, 3, event.key) || this.imPressed(1, 4, event.key);
    },

    handleKeyDown(event) {
      if (!this.pressing && this.playCondition(event)) {
        this.playNote();
      }
    },

    handleKeyUp(event) {
      if (this.pressing && this.playCondition(event)) {
        this.stopNote();
      }
    },

    playNote() {
      this.pressing = true;
      this.$emit("playNote", this.note);
    },

    stopNote() {
      this.$emit("stopNote", this.note);
      this.pressing = false;
    },
  },
};
</script>
