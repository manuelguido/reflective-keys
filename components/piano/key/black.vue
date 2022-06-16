<template>
  <div :class="classList"></div>
</template>

<script>
export default {
  props: {
    pressing: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return ["key-black", this.pressing ? "pressing" : ""];
    },
  },
};
</script>

<style scoped>
.key-black {
  background: linear-gradient(45deg, #222 0%, #555 100%);
  border: 1px solid #333;
  border-radius: 0 0 4px 4px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
    0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(10, 10, 10, 0.75);
  height: 8rem;
  margin: 0 0 0 -2rem;
  width: 2rem;
  z-index: 2;
}

.key-black:active,
.key-black.pressing {
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
    0 -2px 2px 3px rgba(10, 10, 10, 0.6) inset, 0 1px 2px rgba(10, 10, 10, 0.5);
  background: linear-gradient(to right, #555 0%, #333 100%);
}
</style>
