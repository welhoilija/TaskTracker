<template>
  <div class="max-w-3xl mx-auto pt-16 text-gray-900 dark:text-gray-100">
    <div class="flex items-center justify-between">
      <button @click="openTaskCreationModal" class=" my-5 py-2 px-4 bg-green-500 hover:bg-green-700 font-bold rounded shadow-lg hover:shadow transition-colors duration-300 ease-in-out">
        Create a new task
      </button>
      <CreationForm ref="creationForm" @taskCreated="handleTaskCreated" />
    </div>
    <TaskList
      :tasks="tasks"
      @taskCreated="handleTaskCreated"
      @taskDeleted="handleTaskDeleted"
    />
  </div>
</template>

<script lang="ts" src="./TaskTracker.tsx" />
