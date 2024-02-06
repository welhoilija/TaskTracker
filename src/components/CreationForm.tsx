import { defineComponent, type PropType } from 'vue'
import type { Task } from '../types/Task'

type ComponentData = {
  isModalOpen: boolean
  task: Task
}

export default defineComponent({
  props: {
    parentId: {
      type: Number as PropType<number | null>,
      default: null
    },
    parentName: {
      type: String as PropType<string | null>,
      default: null
    }
  },
  data (): ComponentData {
    return {
      isModalOpen: false,
      task: {
        name: '',
        description: '',
        due_date: '',
        due_time: '',
        parent: this.parentId,
        id: NaN,
        state: -1
      }
    }
  },
  methods: {
    submitTask () {
      this.$emit('taskCreated', this.task)
      this.closeModal()
      this.task = {
        name: '',
        description: '',
        due_date: '',
        due_time: '',
        parent: this.parentId,
        id: NaN,
        state: -1
      }
    },
    openModal () {
      this.isModalOpen = true
    },
    closeModal () {
      this.isModalOpen = false
    }
  }
})
