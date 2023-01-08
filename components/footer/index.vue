<template>
  <div class="footer">
    <FooterCopyright />
    <FooterAuthor />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer'
})
</script>

<style lang="scss" scoped>
.footer {
  bottom: 0;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
}

@media screen and (min-width: 992px) {
  .footer {
    padding: 2rem 8rem;
  }
}

@media screen and (max-width: 992px) {
  .footer {
    padding: 2rem;
  }
}
</style>
