<template>
  <div class="form-content">
    <p class="standout-text">
      Eg1-Using watch on a ref and a computed property
    </p>
    totalSum: {{ totalSum }} maxBudget: {{ maxBudget }}
    <div class="form-group">
      <input
        v-model="product1"
        placeholder="Enter product 1"
        :disabled="isBudgetExceeded"
      />
    </div>
    <div class="form-group">
      <input
        v-model="product2"
        placeholder="Enter product 2"
        :disabled="isBudgetExceeded"
      />
    </div>
    <p v-if="message" :class="{ 'text-red-500': isBudgetExceeded }">
      {{ message }}
    </p>
    <p v-if="apiLoading">Requesting more funds...</p>
    <!-- Refresh Button -->
    <button v-if="refreshBtn" @click="resetInputs">Refresh</button>
    <p class="standout-text">Eg2- Using watch on an object</p>
    <div class="form-group">
      <select v-model="selectedOption">
        <option value="" disabled>Select an option</option>
        <option v-for="option in options" :key="option.value" :value="option">
          {{ option.option }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <p class="choice-message">{{ choice }}</p>

      <p v-if="justTheValue.length > 0" class="value-message">
        justTheValue: {{ justTheValue }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const product1 = ref("");
const product2 = ref("");
const selectedOption = ref("");
const product1RandomVal = ref(0);
const product2RandomVal = ref(0);
const message = ref("");
const isBudgetExceeded = ref(false);
const refreshBtn = ref(false);
const maxBudget = 75;
const apiLoading = ref(false); // Loading flag for the API call
let apiCalled = false; // Flag to prevent multiple API calls
const choice = ref("");
const justTheValue = ref("");
const options = ref([
  { option: "Truck", val: "4k" },
  { option: "Car", val: "2k" },
  { option: "Bike", val: "1K" },
]);

watch(selectedOption, (x) => {
  () => x;
  choice.value = "Choice: " + x.option + " and it's value is " + x.val;
});

//Below won't trigger
// watch(selectedOption.value.val, (x) => {
//   justTheValue.value = x;
// });
watch(
  () => selectedOption.value.val,
  (count) => {
    justTheValue.value = count;
  }
);

// Fake API call function
const fakeApiCall = async () => {
  apiLoading.value = true; // Set loading to true
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Funds requested successfully!");
      apiLoading.value = false; // Set loading to false after the call
    }, 2000); // Simulate a delay
  });
};

// Computed property to calculate the total sum of random numbers
const totalSum = computed(() => {
  let sum = 0;
  if (product1RandomVal?.value > 0) sum += product1RandomVal?.value;
  if (product2RandomVal?.value > 0) sum += product2RandomVal?.value;
  return sum;
});
watch(totalSum, async () => {
  if (totalSum.value > maxBudget) {
    message.value = "Budget hit! Ask for more....";
    isBudgetExceeded.value = true;
    refreshBtn.value = true;
    if (!apiCalled) {
      // Make a fake API call to ask for more funds only if it hasn't been called yet
      apiCalled = true; // Set the flag to true to prevent further calls
      const response = await fakeApiCall();
      message.value += " " + response; // Update the message with the response
      // Reset totalSum and apiCalled after the API call is done
      apiCalled = false; // Reset the flag
    }
  } else {
    message.value = "Budget is within limits.";
    isBudgetExceeded.value = false;
    apiCalled = false; // Reset the flag if the budget is within limits
  }
});
// Watcher to monitor the products and the computed totalSum
watch([product1, product2], async () => {
  if (product1.value.includes("?") && product1RandomVal.value <= 0) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    product1RandomVal.value = randomNumber; // Add the random number to the sum
  }
  if (product2.value.includes("?") && product2RandomVal.value <= 0) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    product2RandomVal.value = randomNumber; // Add the random number to the sum
  }
  if (!product1.value.includes("?") && !product2.value.includes("?")) {
    product1RandomVal.value = 0;
    product2RandomVal.value = 0;
  }
  if (product1.value.includes("?") && product2.value.includes("?")) {
    refreshBtn.value = true;
  }
});

// Function to reset inputs and total sum
const resetInputs = () => {
  product1.value = "";
  product2.value = "";
  selectedOption.value = "";
  message.value = "";
  isBudgetExceeded.value = false; // Reset budget exceeded flag
  refreshBtn.value = false;
  apiCalled = false; // Reset API call flag
};
</script>

<style scoped>
.form-content {
  display: flex;
  align-items: center;
  background-color: #f0f4f8;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
}
.form-group {
  margin-bottom: 10px;
  display: flex;
}
.text-red-500 {
  color: red;
}
.standout-text {
  font-size: 1.2em; /* Slightly larger font size */
  font-weight: bold; /* Bold text */
  color: #333; /* Dark text color */
  background-color: #f0f4f8; /* Light background color */
  padding: 10px; /* Padding around the text */
  border: 1px solid #ccc; /* Light border */
  border-radius: 5px; /* Rounded corners */
  margin-bottom: 20px; /* Space below the standout text */
}
.choice-message {
  font-size: 1.2em; /* Slightly larger font size */
  font-weight: bold; /* Bold text */
  color: #d9534f; /* Bootstrap danger color for emphasis */
  background-color: #f9f2f4; /* Light red background */
  padding: 10px; /* Padding around the text */
  border: 1px solid #d9534f; /* Border matching the text color */
  border-radius: 5px; /* Rounded corners */
  margin-bottom: 15px; /* Space below the message */
}

.value-message {
  font-size: 1.1em; /* Slightly larger font size */
  color: #5bc0de; /* Bootstrap info color */
  background-color: #d9edf7; /* Light blue background */
  padding: 10px; /* Padding around the text */
  border: 1px solid #5bc0de; /* Border matching the text color */
  border-radius: 5px; /* Rounded corners */
}
</style>
