<template>
  <div class="top-nav">
    <h1>TaskTracker</h1>
    <button @click="openTaskCreationModal" class="button create">
      Create a new task
    </button>
    <CreationForm ref="creationForm" @taskCreated="handleTaskCreated" />
  </div>
  <TaskList
    :tasks="tasks"
    @taskCreated="handleTaskCreated"
    @taskDeleted="handleTaskDeleted"
  />
</template>

<script lang="ts" src="./TaskTracker.tsx" />
<style>
body {
  max-width: 50em;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button {
  margin: 3px;
  height: 50px;
  border: hidden;
  border-radius: 3px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.create {
  width: 200px;
  background-color: green;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: whitesmoke;
}

.create:hover {
  background-color: rgb(0, 137, 32);
}
</style>
