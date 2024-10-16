<script setup>
import ChildComponent from "./ChildComponentEg2.vue";
import getRandomOption from "./HelperComponent";
import { onMounted, ref } from "vue";
import "../assets/Basicstyles.css";

onMounted(() => {
  randomNum.value = getRandomOption();
});
</script>

<template>
  <div>
    <ChildComponent>
      <template v-slot:header>
        <div class="clothing-item item-1">This is the header</div></template
      >
      <template v-slot:main>
        <div class="clothing-item item-2">This is your main</div></template
      >
      <template v-slot:footer
        ><div class="clothing-item item-3">This is your footer</div></template
      >
      <div class="clothing-item item-4">This is default</div>
    </ChildComponent>
  </div>
</template>
