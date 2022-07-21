<template>
  <div class="knob-container">
    <PianoEffectsKnobTitle :title="parameter.title" />
    <PianoEffectsKnobInner />
  </div>
</template>

<script>
export default {
  props: {
    parameter: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.knob-container {
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
}
</style>
