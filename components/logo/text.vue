<template>
  <h1 class="logo-text">{{ text }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      text: 'Reflective  keys'
    }
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500&display=swap');

.logo-text {
  color: rgb(104, 104, 222);
  display: block;
  font-weight: 500;
  letter-spacing: 0.15rem;
  font-family: 'Nunito', sans-serif;
  margin-top: 2rem;
  position: relative;
}

@media screen and (min-width: 992px) {
  .logo-text {
    font-size: 4.5rem;
  }
}

@media screen and (max-width: 992px) {
  .logo-text {
    font-size: 3.5rem;
  }
}
</style>
