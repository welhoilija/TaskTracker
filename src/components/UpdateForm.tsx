import { defineComponent, type PropType } from 'vue'
import type { Task } from '../types/Task'

export default defineComponent({
  name: 'UpdateForm',
  props: {
    parentId: {
      type: Number as PropType<number | null>,
      default: null,
    },
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
  data () {
    return {
      isModalOpen: false,
    }
  },
  methods: {
    updateTask () {
      this.closeModal()
    },
    openModal () {
      this.isModalOpen = true
    },
    closeModal () {
      this.isModalOpen = false
    },
  },
})
