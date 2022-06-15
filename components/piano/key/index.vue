<template>
  <PianoKeyWhite v-if="isWhite" @keypress="keyUp" @click.native="playNote" />
  <PianoKeyBlack v-else @keypress="keyUp" @click.native="playNote" />
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
  methods: {
    keyUp() {
      console.log(this.pianoKey);
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