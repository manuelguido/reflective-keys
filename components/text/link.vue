<template>
  <a class="link" :href="link.route" :target="target">
    {{ link.text }}
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TextLink',
  props: {
    link: {
      type: Object,
      required: true
    },
    target: {
      type: String,
      default: '_blank'
    }
  }
})
</script>

<style lang="scss" scoped>
.link {
  cursor: pointer;
  text-decoration: none;
}

.link:not(:hover) {
  color: rgb(104, 104, 222);
}

.link:hover {
  color: rgb(66, 66, 192);
}

.link:active {
  color: rgb(104, 104, 222);
}
</style>
