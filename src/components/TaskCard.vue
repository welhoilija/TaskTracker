<template>
  <div
    :class="`task flex justify-between items-center mb-2.5 relative pl-5 rounded shadow-md ${taskStateStyling}`"
  >
    <div class="task-text flex flex-col justify-center p-1.25">
      <b> {{ task.name }} </b>
      {{ taskDueDate }}
    </div>
    <div class="flex space-x-2">
      <button
        v-if="allowDescendants"
        class="button h-10 w-10 bg-green-500 shadow hover:bg-green-700 rounded-md"
        :title="'Create new subtask'"
        @click="createNewDescendant()"
      >
        +
      </button>
      <CreationForm
        :parent-id="task.id"
        :parent-name="task.name"
        ref="subTaskCreationForm"
        @taskCreated="handleTaskCreated"
      />
      <button
        class="button h-10 w-10 bg-green-500 shadow hover:bg-green-700 rounded-md"
        :title="'Mark as done'"
        @click="switchState()"
      >
        ✓
      </button>

      <button
        class="button h-10 w-10 bg-yellow-500 shadow hover:bg-yellow-700 rounded-md"
        :title="'Edit'"
        @click="editTask()"
      >
        ✏️
      </button>
      <UpdateForm :task="task" ref="updateForm" />

      <button
        class="button h-10 w-10 bg-red-500 shadow hover:bg-red-700 rounded-md"
        :title="'Remove'"
        @click="removeTask()"
      >
        🗑️
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./TaskCard.tsx"></script>

<style scoped>
  .green::before,
  .yellow::before,
  .red::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 10px;
  }

  .green::before {
    background-color: green;
  }

  .yellow::before {
    background-color: yellow;
  }

  .red::before {
    background-color: red;
  }
</style>
