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
@import '@/assets/scss/_background.scss';

.footer {
  @include backdropFilterLight;

  bottom: 0;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
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
