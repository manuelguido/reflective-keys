<template>
  <div class="piano">
    <PianoKeys @playNote="playNote" />
  </div>
</template>

<script>
import * as Tone from "tone";

export default {
  name: "Piano",
  methods: {
    playNote(play) {
      const synth = new Tone.Synth().toDestination();
      synth.triggerAttackRelease(play.note, play.duration);
    },
  },
};
</script>

<style scoped>
.piano {
  height: 25vh;
  padding: 0.15rem;
  width: 45vw;
}
</style>