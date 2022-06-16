<template>
  <div :class="classList" @mousedown="playNote" @mouseup="stopNote"></div>
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
    isWhite() {
      return this.pianoKey ? this.pianoKey.note.length === 1 : false;
    },
    note() {
      return `${this.pianoKey.note}${this.octave}`;
    },
    classList() {
      return [
        this.isWhite ? "key-white" : "key-black",
        this.pressing ? "pressing" : "",
      ];
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

<style scoped>
.key-white {
  border-left: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-radius: 0 0 5px 5px;
  box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,
    0 0 3px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #eee 0%, #fff 100%);
  margin: 0 0 0 -1em;
  width: 4.25rem;
  z-index: 1;
}

.key-white:active,
.key-white.pressing {
  border-top: 1px solid #777;
  border-left: 1px solid #999;
  border-bottom: 1px solid #999;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
    -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
}

.key-black {
  background: linear-gradient(45deg, #222 0%, #555 100%);
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
  background: linear-gradient(to right, #555 0%, #333 100%);
}
</style>
