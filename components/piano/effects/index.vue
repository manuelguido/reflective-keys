<template>
  <div class="effects">
    <PianoEffectsEffect v-for="e in effects" :key="e.id" :effect="e" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      effects: [
        {
          id: 1,
          title: "Delay",
          parameters: [
            {
              id: 1,
              title: "Length",
              value: 0.125,
            },
            {
              id: 2,
              title: "Duration",
              value: 0.5,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.effects {
  margin-bottom: 4rem;
}
</style>

