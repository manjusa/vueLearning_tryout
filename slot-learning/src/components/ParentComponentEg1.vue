<script setup>
import ChildComponent from "./ChildComponentEg1.vue";
import getRandomOption from "./HelperComponent";
import { onMounted, ref } from "vue";
import "../assets/Basicstyles.css";

const randomNum = ref();

onMounted(() => {
  randomNum.value = getRandomOption();
});
</script>

<template>
  <div>
    <ChildComponent>
      <div v-if="randomNum === 1">
        <button class="styled-button-green">Success</button>
      </div>
      <div v-else-if="randomNum === 2">
        <button class="styled-button-blue">Try again</button>
      </div></ChildComponent
    >
  </div>
</template>
