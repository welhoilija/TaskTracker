<template>
  <div class="task" :class="taskStateStyling">
    <div class="task-text">
      <b> {{ task.name }} </b>
      {{ taskDueDate }}
    </div>
    <div class="actions">
      <button
        v-if="allowDescendants"
        class="button done"
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
        class="button done"
        :title="'Mark as done'"
        @click="switchState()"
      >
        ✓
      </button>

      <button class="button edit" :title="'Edit'" @click="editTask()">
        ✏️
      </button>
      <UpdateForm :task="task" ref="updateForm" />

      <button class="button remove" :title="'Remove'" @click="removeTask()">
        🗑️
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./TaskCard.tsx" />

<style scoped>
li {
  padding: 5px;
}

.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.task-text {
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: center;
}

.green::before,
.yellow::before,
.red::before {
  content: "";
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

.remove {
  background-color: red;
  width: 50px;
  color: whitesmoke;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.remove:hover {
  background-color: crimson;
}

.edit {
  background-color: yellow;
  width: 50px;
  color: whitesmoke;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.edit:hover {
  background-color: rgb(186, 186, 0);
}

.done {
  background-color: green;
  width: 50px;
  color: whitesmoke;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.done:hover {
  background-color: rgb(0, 106, 25);
}
</style>
