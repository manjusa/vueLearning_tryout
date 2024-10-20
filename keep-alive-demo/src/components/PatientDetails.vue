<script setup>
import { ref, KeepAlive, computed } from "vue";
import BasicDetails from "./BasicDetails.vue";
import AllergyDetails from "./AllergyDetails.vue";

defineProps({
  id: String,
});

const showBasicDetails = ref(true);
const headerText = ref("Extra Details");

function toggleView() {
  showBasicDetails.value = !showBasicDetails.value;
}

const currentComponent = computed(() => {
  const component = showBasicDetails.value ? BasicDetails : AllergyDetails;
  const header = showBasicDetails.value ? "Misc Details" : "Basic Details";
  headerText.value = header; // Update headerText
  return { component, header }; // Return both values
});

const currentComponentKey = computed(() =>
  showBasicDetails.value ? "basic" : "allergy"
);
</script>

<template>
  <h1>Patient Id:{{ id }}</h1>
  <div class="max-w-md mx-auto mt-5">
    <button @click="toggleView">{{ headerText }}</button>
    <p><b>Without KeepAlive </b></p>
    <div v-if="showBasicDetails">
      <BasicDetails />
    </div>
    <div v-else>
      <AllergyDetails />
    </div>
    <br />
    <!-- Below won't work with Keep Alive. Instead has to be done dynamically
     <KeepAlive>
      <div v-if="showBasicDetails">
        <BasicDetails />
      </div>
      <div v-else>
        <AllergyDetails /></div
    ></KeepAlive> 
    -->
    <p><b>With KeepAlive</b></p>

    <KeepAlive>
      <component :is="currentComponent.component" :key="currentComponentKey" />
    </KeepAlive>
    <button type="submit">Submit</button>
  </div>
</template>

<style scoped>
h1 {
  color: #333; /* Darker text color for the heading */
  font-size: 24px; /* Larger font size */
  margin-bottom: 20px; /* Space below the heading */
}

button {
  background-color: #007bff; /* Bootstrap primary color */
  color: white; /* White text color */
  border: none; /* No border */
  padding: 10px 15px; /* Padding for the button */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}

.max-w-md {
  background-color: #f9f9f9; /* Light background for the container */
  border: 1px solid #ddd; /* Light border */
  border-radius: 8px; /* Rounded corners */
  padding: 20px; /* Padding inside the container */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

p {
  margin: 10px 0; /* Space above and below paragraphs */
}
.form-group {
  display: flex; /* Use flexbox for alignment */
  flex-direction: column; /* Stack fields vertically */
  gap: 15px; /* Space between fields */
}

.form-field {
  display: flex; /* Use flexbox for label and input */
  align-items: center; /* Center align items vertically */
}

label {
  padding-right: 10px; /* Add padding to the right of the label */
  width: 100px; /* Fixed width for labels to ensure alignment */
}

input {
  flex: 1; /* Allow input to take the remaining space */
}
</style>
