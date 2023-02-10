<template>
  <h1 class="logo-text">{{ text }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      text: 'Reflective keys'
    }
  }
})
</script>

<style scoped>
.logo-text {
  color: rgb(104, 104, 222);
  display: block;
  margin-top: 2rem;
  position: relative;
}
</style>
