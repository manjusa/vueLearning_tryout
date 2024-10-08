<style scoped>
/* Some basic styling the app */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
  margin-left: 200px;
}

/* Container for the todo list */
div {
  max-width: 600px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Heading styles */
h3 {
  color: #333;
}

/* Form styles */
form {
  margin-bottom: 20px;
  margin-left: 25em;
  margin-top: 10em;
}

/* Input field styles */
input[type="text"] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Button styles */
button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #218838;
}

/* List styles */
ul {
  list-style-type: none; /* Remove default list styling */
  padding: 0;
}

li {
  background: #e9ecef;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between; /* Align items in the list */
}

/* Radio button styles */
label {
  margin-right: 15px;
}

input[type="radio"] {
  margin-right: 5px;
}
</style>

<script setup>
import { onMounted, ref, computed } from "vue";
import TodoList from "./components/TodoList.vue";

onMounted(() => {
  console.log(`App vue is mounted`);
});

const handleTaskAdded = (val) => {
  listOfTodos.value.push(val);
};

const listOfTodos = ref([]);
const filteredTodos = computed(() => {
  return listOfTodos.value.filter((x) => x.completed != "yes");
});
const completed = computed(() => {
  return listOfTodos.value.filter((x) => x.completed == "yes");
});
</script>

<template>
  <TodoList @task-added="handleTaskAdded" />

  <div v-if="completed.length > 0">
    <b>Completed Tasks</b>
    <ul>
      <li v-for="(todo, index) in completed" :key="index">
        {{ todo.task }}
      </li>
    </ul>
  </div>
  <br />
  <div v-if="filteredTodos.length > 0">
    <b>Incomplete Tasks</b>
    <ul>
      <li v-for="(todo, index) in filteredTodos" :key="index">
        {{ todo.task }}
      </li>
    </ul>
  </div>
</template>
