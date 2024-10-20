<template>
  <div class="form-group">
    <div class="form-field">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div class="form-field">
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
</script>

<style scoped>
label {
  padding-right: 10px; /* Add padding to the right of the label */
}
</style>
