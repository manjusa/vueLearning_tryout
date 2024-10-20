<template>
  <div class="form-group">
    <div class="form-field">
      <label for="gp">Your GP</label>
      <input type="text" name="gp" v-model="gp" />
    </div>
    <div class="form-field">
      <label for="allergy">Allergies</label>
      <input type="text" name="allergy" v-model="allergy" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const gp = ref("");
const allergy = ref("");
</script>

<style scoped>
label {
  padding-right: 10px; /* Add padding to the right of the label */
}
</style>
