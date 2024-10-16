<script setup>
import ChildComponent from "./ChildComponentEg3.vue";
import getRandomOption from "./HelperComponent";
import { onMounted, ref } from "vue";
import "../assets/Basicstyles.css";

const top = "shirt";
const footwear = "slipper";

onMounted(() => {
  randomNum.value = getRandomOption();
});
</script>
<template>
  <div>
    <ChildComponent>
      <template #[top]>
        <div class="clothing-item item-1">Wear t-shirt</div>
      </template>
      <div class="clothing-item item-2">Wear any lower</div>
      <template v-slot:[footwear]>
        <div class="clothing-item item-3">Wear slippers</div>
      </template>
    </ChildComponent>
  </div>
</template>
