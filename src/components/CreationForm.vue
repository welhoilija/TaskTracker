<template>
  <div
    class="modal-overlay fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-40"
    v-show="isModalOpen"
    @click.self="closeModal"
  >
    <div class="modal-content bg-white p-5 border border-gray-300 w-1/2 rounded shadow-lg dark:bg-gray-900">
      <span
        class="close float-right text-3xl font-bold cursor-pointer hover:text-black "
        @click="closeModal"
      >
        X
      </span>
      <h2>
        Create New Task {{ parentName ? "| Parent task: " + parentName : "" }}
      </h2>

      <form @submit.prevent="submitTask">
        <div class="form-group mb-2.5">
          <label for="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            v-model="task.name"
            class="input w-full px-2.5 py-1.5 my-1.5 border border-gray-300 rounded box-border"
            maxlength="50"
            required
          />
        </div>

        <div class="form-group mb-2.5">
          <label for="taskDescription">Description:</label>
          <textarea
            id="taskDescription"
            v-model="task.description"
            class="input w-full px-2.5 py-1.5 my-1.5 border border-gray-300 rounded box-border"
            maxlength="255"
          ></textarea>
        </div>

        <div class="form-group mb-2.5">
          <label for="taskDueDate">Due date:</label>
          <input
            type="date"
            id="taskDueDate"
            v-model="task.due_date"
            class="input w-full px-2.5 py-1.5 my-1.5 border border-gray-300 rounded box-border"
          />
        </div>

        <div class="form-group mb-2.5">
          <label for="taskDueTime">Due Time:</label>
          <input
            type="time"
            id="taskDueTime"
            v-model="task.due_time"
            class="input w-full px-2.5 py-1.5 my-1.5 border border-gray-300 rounded box-border"
          />
        </div>
        <button
          type="submit"
          class="button submit bg-green-500  px-5 py-3.5 my-2 rounded cursor-pointer w-auto block"
        >
          Create Task
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" src="./CreationForm.tsx"></script>
