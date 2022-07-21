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
      lowpassFilter: {
        level: 1,
        effect: new Tone.Filter(this.level, "lowpass").toDestination(),
      },
      highpassFilter: {
        level: 1,
        effect: new Tone.Filter(this.level, "highpass").toDestination(),
      },
      feedbackDelay: {
        level1: 0.1,
        level2: 0.001,
        effect: null,
      },
    };
  },
  mounted() {
    // this.setupEffects();
  },
  methods: {
    playNote(note) {
      this.synth.triggerAttackRelease(note, Tone.now());
    },

    stopNote(note) {
      this.synth.triggerRelease([note], Tone.now());
    },

    connectEffect(effect) {
      this.synth.connect(effect);
    },

    setupEffects() {
      // this.connectEffect(this.lowpassFilter.effect);
      // this.connectEffect(this.highpassFilter.effect);
      this.feedbackDelay.effect = new Tone.FeedbackDelay(
        this.feedbackDelay.level1,
        this.feedbackDelay.level2
      ).toDestination();
      this.connectEffect(this.feedbackDelay.effect);
      var $this = this;
      setTimeout(() => {
        $this.feedbackDelay.level1 = 0
        $this.feedbackDelay.level2 = 0
      }, 3000);
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
