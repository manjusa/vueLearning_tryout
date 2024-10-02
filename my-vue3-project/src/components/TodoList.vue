<script setup>
import { ref } from "vue";
const task = ref();
</script>

<template>
  <form>
    <input type="text" name="task" v-model="task" />

    {{ task }}
    //now emit event from here to show on parent
  </form>
</template>
