import CreationForm from "./CreationForm.vue"
import UpdateForm from "./UpdateForm.vue"

export default {
    name: "TaskCard",
    components: {
        CreationForm,
        UpdateForm
    },
    props: {
        task: Object,
        allowDescendants: Boolean,
    },
    computed: {
        taskStateStyling() {
            const taskColor = {
                '-1': 'red',
                '0': 'yellow',
                '1': 'green'
            }
            return taskColor[this.task.state]
        },
        taskStateText() {
            const taskSymbol = {
                '-1': 'Not completed',
                '0': 'Partially completed',
                '1': 'Completed'
            }
            return taskSymbol[this.task.state]
        },
        taskDueDate() {
            if (!this.task.due_date) {
                return 'No due date'
            }

            const dueDate = new Date(this.task.due_date)

            const formattedDate = dueDate.toISOString().substring(0, 10) // yyyy-mm-dd

            const formattedTime = this.task.due_time
                ? this.task.due_time.substring(0, 5) // HH:MM
                : ''

            return `Due date: ${formattedDate} ${formattedTime}`.trim()
        },
    },
    methods: {
        switchState() {
            this.$emit('taskStateChanged', this.task)
        },
        createNewDescendant() {
            this.$refs.subTaskCreationForm.openModal()
        },
        removeTask() {
            this.$emit('taskDeleted', this.task)
        },
        editTask() {
            this.$refs.updateForm.openModal()
        },
        handleTaskCreated(newTask) {
            this.$emit('taskCreated', newTask)
        },
    },
}