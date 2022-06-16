<template>
  <div class="piano">
    <PianoKeys @playNote="playNote" @stopNote="stopNote" />
  </div>
</template>

<script>
import * as Tone from "tone";

export default {
  name: "Piano",
  data() {
    return {
      synth: new Tone.PolySynth(Tone.Synth).toDestination(),
    };
  },
  methods: {
    playNote(note) {
      this.synth.triggerAttackRelease(note, Tone.now());
    },
    stopNote(note) {
      const now = Tone.now();
      this.synth.triggerRelease([note], now);
    },
  },
};
</script>

<style scoped>
.piano {
  height: 25vh;
  position: relative;
}
</style>