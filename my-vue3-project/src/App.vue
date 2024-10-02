<script setup>
import { onMounted } from "vue";

import TodoList from "./components/TodoList.vue";

// lifecycle hooks
onMounted(() => {
  console.log(`App vue is mounted`);
});
</script>

<template>
  <TodoList />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
