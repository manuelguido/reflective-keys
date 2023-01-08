<template>
  <div>
    <span class="text-white">
      {{ text }}
    </span>
    <TextLink :link="link" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      text: '© 2022 Copyright: ',
      link: {
        route: 'https://github.com/manuelguido/reflective-keys',
        text: 'Reflective Keys'
      }
    }
  }
})
</script>
