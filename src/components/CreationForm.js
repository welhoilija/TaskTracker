export default {
    props: {
        parentId: {
            type: [Number, null],
            default: null
        }
    },
    data() {
        return {
            isModalOpen: false,
            task: {
                name: '',
                description: '',
                due_date: '',
                due_time: '',
                parent: this.parentId,
                id: null,
                state: -1
            }
        }
    },
    methods: {
        submitTask() {
            this.$emit('taskCreated', this.task)
            this.closeModal()
            this.task = {
                name: '',
                description: '',
                due_date: '',
                due_time: '',
                parent: this.parentId,
                id: null,
                state: -1
            }
        },
        openModal() {
            this.isModalOpen = true
        },
        closeModal() {
            this.isModalOpen = false
        },
    }
}