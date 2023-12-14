import { defineComponent, type PropType } from 'vue'
import TaskCard from './TaskCard.vue'
import type { Task } from '../types/Task'

export default defineComponent({
  name: 'TaskList',
  components: {
    TaskCard,
  },
  props: {
    tasks: {
      type: Array as PropType<Task[]>,
      required: true,
    },
    subTasks: {
      type: Array as PropType<Task[]>,
      default: () => [],
    },
    depth: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    tasksToDisplay (): Task[] {
      return this.depth === 0
        ? this.tasks.filter((task) => !task.parent)
        : this.subTasks
    },
  },
  methods: {
    collectSubTasks (id: number): Task[] {
      return this.tasks.filter((task) => task.parent === id)
    },
    handleTaskCreated (newTask: Task) {
      this.$emit('taskCreated', newTask)
    },
    handleTaskDeleted (deletedTask: Task) {
      this.$emit('taskDeleted', deletedTask)
    },
    handleTaskStateChanged (updatedTask: Task) {
      updatedTask.state = updatedTask.state === 1 ? -1 : 1
      this.updateParentTaskState(updatedTask.parent)
      this.updateSubTasks(updatedTask.id, updatedTask.state)
    },
    updateParentTaskState (parentId: number | null) {
      if (parentId !== null) {
        const siblings = this.collectSubTasks(parentId)
        const allSiblingsCompleted = siblings.every((sib) => sib.state === 1)
        const someSiblingsCompleted = siblings.some((sib) => sib.state >= 0)
        const newState = allSiblingsCompleted
          ? 1
          : someSiblingsCompleted
            ? 0
            : -1

        const parentTask = this.tasks.find((t) => t.id === parentId)
        if (parentTask) {
          parentTask.state = newState
          if (parentTask.parent) {
            this.updateParentTaskState(parentTask.parent)
          }
        }
      }
    },
    updateSubTasks (taskId: number, newState: number) {
      const subTasks = this.collectSubTasks(taskId)
      if (subTasks.length > 0) {
        subTasks.forEach((subTask) => {
          subTask.state = newState
          this.updateSubTasks(subTask.id, newState)
        })
      }
    },
  },
})
