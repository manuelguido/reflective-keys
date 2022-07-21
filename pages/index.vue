<template>
  <div class="homepage">
    <div class="filter">
      <Piano />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      title: 'Reflective Keys',
    };
  },
};
</script>

<style scoped>
.homepage {
  background-image: url("~/assets/img/wallpaper.jpg");
  background-repeat: no-repeat;
  background-position: 0;
  background-size: cover;
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
}

.homepage .filter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
