<template>
  <PianoContainer>
    <PianoInnerContainer>
      <div class="piano">
        <PianoKeys @playNote="playNote" @stopNote="stopNote" />
      </div>
    </PianoInnerContainer>
  </PianoContainer>
</template>

<script>
import Vue from 'vue'
import * as Tone from 'tone'

export default Vue.extend({
  name: 'Piano',
  data() {
    return {
      tone: Tone,
      // Synth
      synth: new Tone.PolySynth(Tone.Synth).toDestination(),
      // Lowpass Filter
      lowpassFilter: {
        level: 1,
        effect: new Tone.Filter(this.level, 'lowpass').toDestination()
      },
      // Highpass Filter
      highpassFilter: {
        level: 1,
        effect: new Tone.Filter(this.level, 'highpass').toDestination()
      },
      // Feedback delay
      feedbackDelay: {
        level1: 0.1,
        level2: 0.001,
        effect: null
      }
    }
  },
  // mounted() {
  //   this.setupEffects();
  // },
  methods: {
    playNote(note) {
      this.synth.triggerAttackRelease(note, Tone.now())
    },

    stopNote(note) {
      this.synth.triggerRelease([note], Tone.now())
    },

    connectEffect(effect) {
      this.synth.connect(effect)
    }

    // setupEffects() {
    //   this.connectEffect(this.lowpassFilter.effect);
    //   this.connectEffect(this.highpassFilter.effect);
    //   this.feedbackDelay.effect = new Tone.FeedbackDelay(
    //     this.feedbackDelay.level1,
    //     this.feedbackDelay.level2
    //   ).toDestination()
    //   this.connectEffect(this.feedbackDelay.effect)
    //   const $this = this
    //   setTimeout(() => {
    //     $this.feedbackDelay.level1 = 0
    //     $this.feedbackDelay.level2 = 0
    //   }, 3000)
    // }
  }
})
</script>

<style scoped>
.piano {
  height: 25vh;
  position: relative;
}
</style>
