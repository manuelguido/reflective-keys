<template>
  <p class="title">{{ title }}</p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.title {
  color: #ffffff;
  font-weight: 200;
  font-size: 1.25rem;
  margin-bottom: 3rem;
}
</style>
