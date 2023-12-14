import { defineComponent, type PropType } from 'vue'
import CreationForm from './CreationForm.vue'
import UpdateForm from './UpdateForm.vue'
import type { Task } from '../types/Task'

export default defineComponent({
  name: 'TaskCard',
  components: {
    CreationForm,
    UpdateForm,
  },
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
    allowDescendants: Boolean,
  },
  computed: {
    taskStateStyling (): string {
      const taskColor: Record<number, string> = {
        '-1': 'red',
        '0': 'yellow',
        '1': 'green',
      }
      return taskColor[this.task.state]
    },
    taskStateText (): string {
      const taskSymbol: Record<number, string> = {
        '-1': 'Not completed',
        '0': 'Partially completed',
        '1': 'Completed',
      }
      return taskSymbol[this.task.state]
    },
    taskDueDate (): string {
      if (!this.task.due_date) {
        return 'No due date'
      }
      const dueDate = new Date(this.task.due_date)
      const formattedDate = dueDate.toISOString().substring(0, 10) // yyyy-mm-dd
      const formattedTime = this.task.due_time
        ? this.task.due_time.substring(0, 5)
        : '' // HH:MM

      return `Due date: ${formattedDate} ${formattedTime}`.trim()
    },
  },
  methods: {
    switchState () {
      this.$emit('taskStateChanged', this.task)
    },
    createNewDescendant () {
      ;(this.$refs.subTaskCreationForm as any).openModal()
    },
    removeTask () {
      this.$emit('taskDeleted', this.task)
    },
    editTask () {
      ;(this.$refs.updateForm as any).openModal()
    },
    handleTaskCreated (newTask: Task) {
      this.$emit('taskCreated', newTask)
    },
  },
})
