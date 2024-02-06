<template>
  <div
    class="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-40"
    v-show="isModalOpen"
    @click.self="closeModal"
  >
    <div class="bg-black p-5 border border-border w-1/2 rounded shadow-lg">
      <span
        class="float-right text-3xl font-bold cursor-pointer hover:text-black "
        @click="closeModal"
      >
        X
      </span>
      <h2 class="font-custom">Create New Task</h2>

      <form @submit.prevent="updateTask">
        <div class="mb-4">
          <label for="taskName" class="block text-sm font-bold mb-2">Task Name:</label>
          <input
            type="text"
            id="taskName"
            v-model="task.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            maxlength="50"
            required
          />
        </div>

        <div class="mb-4">
          <label for="taskDescription" class="block text-sm font-bold mb-2">Description:</label>
          <textarea
            id="taskDescription"
            v-model="task.description"
            class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            maxlength="255"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="taskDueDate" class="block  text-sm font-bold mb-2">Due date:</label>
          <input
            type="date"
            id="taskDueDate"
            v-model="task.due_date"
            class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div class="mb-4">
          <label for="taskDueTime" class="block  text-sm font-bold mb-2">Due Time:</label>
          <input
            type="time"
            id="taskDueTime"
            v-model="task.due_time"
            class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          class="bg-primary hover:bg-secondary text-foreground font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Task
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" src="./UpdateForm.tsx"></script>
