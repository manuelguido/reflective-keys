<template>
  <div class="effect-container">
    <PianoEffectsEffectTitle :title="effect.title" />
    <div class="knob-container">
      <PianoEffectsKnob
        v-for="p in effect.parameters"
        :key="p.id"
        :parameter="p"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    effect: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.effect-container {
  display: flex;
  flex-direction: column;
}

.knob-container {
  display: flex;
  flex-direction: row;
}
</style>
