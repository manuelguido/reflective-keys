<template>
  <p class="title">
    {{ title }}
  </p>
</template>

<script>
export default {
  name: 'PianoEffectsKnobTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.title {
  color: #ffffff;
  font-weight: 300;
  font-size: 0.85rem;
  margin-bottom: 0.85rem;
  text-align: center;
}
</style>
