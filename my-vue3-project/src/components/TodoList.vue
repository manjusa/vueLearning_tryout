<script setup>
import { ref, defineEmits } from "vue";

const task = ref();
const selectedOption = ref("");
const emit = defineEmits(["task-added"]);

const addTask = () => {
  if (task.value.trim()) {
    emit("task-added", { task: task.value, completed: selectedOption.value });
    task.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="addTask">
    <label><b>Task: </b></label><input type="text" name="task" v-model="task" />
    <div>
      <h3>Is task completed</h3>
      <label>
        <input type="radio" value="yes" v-model="selectedOption" />
        Yes
      </label>
      <label>
        <input type="radio" value="no" v-model="selectedOption" />
        No
      </label>
    </div>
    <br />
    <button type="submit">Add task</button>
  </form>
</template>
