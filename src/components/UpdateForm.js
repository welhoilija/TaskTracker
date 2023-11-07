export default {
    name: 'UpdateForm',
    props: {
        parentId: {
            type: [Number, null],
            default: null
        },
        task: {
            name: String,
            description: String | null,
            due_date: String | null,
            due_time: String | null,
            parent: Number | null,
        }
    },
    data() {
        return {
            isModalOpen: false,
        }
    },
    methods: {
        updateTask() {
            this.closeModal()
        },
        openModal() {
            this.isModalOpen = true
        },
        closeModal() {
            this.isModalOpen = false
        },
    }
}