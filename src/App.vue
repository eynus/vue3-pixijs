<template>
  <rect x="100" y="100">
    <Circle x="120" y="120" />
  </rect>
</template>

<script>
import Circle from "./Circle.vue";
export default {
  name: "App",
  components: { Circle },
};
</script>

<style>
canvas {
  background-color: rgba(0, 0, 0, 0.25);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
