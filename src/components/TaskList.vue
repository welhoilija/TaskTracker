<template>
  <ul>
    <li
      v-for="task in tasksToDisplay"
      :key="task.id"
      :style="{ paddingLeft: depth * 10 + 'px' }"
    >
      <TaskCard
        :task="task"
        :allowDescendants="depth < 6"
        @taskCreated="handleTaskCreated"
        @taskDeleted="handleTaskDeleted"
        @taskStateChanged="handleTaskStateChanged"
      ></TaskCard>
      <TaskList
        v-if="collectSubTasks(task.id).length > 0"
        :tasks="tasks"
        :subTasks="collectSubTasks(task.id)"
        :depth="depth + 1"
        @taskCreated="handleTaskCreated"
        @taskDeleted="handleTaskDeleted"
        @taskStateChanged="handleTaskStateChanged"
      />
    </li>
  </ul>
</template>

<script lang="ts" src="./TaskList.tsx" />
