<template>
  <div class="key white"></div>
</template>

<style scoped>
.key {
  border: 0.15rem solid #333;
  border-radius: 1rem;
  cursor: pointer;
}
.key.white {
  background: #ffffff;
  height: 100%;
  width: 14.28%;
}

.key.white:hover {
  background: #eeeeee;
}

.key.white:active {
  background: #cccccc;
}
</style>