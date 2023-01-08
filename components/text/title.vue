<template>
  <h1 class="title text-white">{{ text }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TextTItle',
  props: {
    text: {
      type: String,
      default: 'Reflective Keys'
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 10vh;
}

@media (max-width: 332px) {
  .title {
    font-size: 3rem;
  }
}

@media (min-width: 332px) and (max-width: 576px) {
  .title {
    font-size: 3rem;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .title {
    font-size: 4rem;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .title {
    font-size: 4.5rem;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .title {
    font-size: 5rem;
  }
}

@media (min-width: 1200px) {
  .title {
    font-size: 6rem;
  }
}
</style>
