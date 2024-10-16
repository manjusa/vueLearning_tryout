<template>
  <div id="app">
    <h1>My Vue App</h1>
    <ParentComponent />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import ParentComponent from "./components/ParentComponentEg1.vue";

onMounted(() => {
  console.log(`App vue is mounted`);
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #27394b;
  margin-top: 60px;
}
</style>
