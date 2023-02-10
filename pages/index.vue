<template>
  <div class="homepage">
    <div class="filter">
      <Logo />
      <Piano />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Reflective Keys'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped>
.homepage {
  background-image: url('~/assets/img/wallpaper.jpg');
  background-repeat: no-repeat;
  background-position: 0;
  background-size: cover;
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
}

.homepage .filter {
  align-items: center;
  background-color: rgba(23, 23, 23, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
}

@media screen and (min-width: 992px) {
  .homepage .filter {
    padding-top: 4vh;
  }
}

@media screen and (max-width: 992px) {
  .homepage .filter {
    padding-top: 10vh;
  }
}
</style>
