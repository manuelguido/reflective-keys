<template>
  <PianoContainer>
    <PianoContainerInner>
      <div class="piano">
        <PianoKeys
          :display-text="displayText"
          @playNote="playNote"
          @stopNote="stopNote"
        />
      </div>
    </PianoContainerInner>
    <PianoData @checked="setDisplayText" />
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
      },
      displayText: 'note'
    }
  },
  mounted() {
    // this.setupEffects();
  },
  methods: {
    playNote(note) {
      this.synth.triggerAttackRelease(note, Tone.now())
    },

    stopNote(note) {
      this.synth.triggerRelease([note], Tone.now())
    },

    connectEffect(effect) {
      this.synth.connect(effect)
    },

    setupEffects() {
      this.connectEffect(this.lowpassFilter.effect)
      this.connectEffect(this.highpassFilter.effect)
      this.feedbackDelay.effect = new Tone.FeedbackDelay(
        this.feedbackDelay.level1,
        this.feedbackDelay.level2
      ).toDestination()
      this.connectEffect(this.feedbackDelay.effect)
      const $this = this
      setTimeout(() => {
        $this.feedbackDelay.level1 = 100
        $this.feedbackDelay.level2 = 100
      }, 3000)
    },

    setDisplayText(newValue) {
      this.displayText = newValue
    }
  }
})
</script>

<style scoped>
.piano {
  height: 25vh;
  position: relative;
}

@media screen and (max-width: 992px) {
  .piano {
    width: 80vw;
  }
}
</style>
