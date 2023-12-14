import TaskCard from "./TaskCard.vue"

export default {
    name: "TaskList",
    components: {
        TaskCard
    },
    props: {
        tasks: Array,
        subTasks: {
            type: Array,
            default: []
        },
        depth: {
            type: Number,
            default: 0
        }
    },
    computed: {
        tasksToDisplay() {
            return this.depth === 0 ? this.tasks.filter(task => !task.parent) : this.subTasks
        }
    },
    methods: {
        collectSubTasks(id) {
            return this.tasks.filter(task => task.parent === id)
        },
        handleTaskCreated(newTask) {
            this.$emit('taskCreated', newTask)
        },
        handleTaskDeleted(deletedTask) {
            // Emit an event to the parent component with the deleted task
            this.$emit('taskDeleted', deletedTask);
        },

        // In the event of a task state change fire this function
        handleTaskStateChanged(updatedTask) {
            console.log('statechange')
            updatedTask.state = updatedTask.state === 1 ? -1 : 1
            this.updateParentTaskState(updatedTask.parent)
            this.updateSubTasks(updatedTask.id, updatedTask.state)
        },

        updateParentTaskState(parentId) {
            if (parentId !== null) {
                const siblings = this.collectSubTasks(parentId)
                const allSiblingsCompleted = siblings.every(sib => sib.state === 1)
                const someSiblingsCompleted = siblings.some(sib => sib.state >= 0)

                const newState = allSiblingsCompleted ? 1 : someSiblingsCompleted ? 0 : -1

                let parentTask = this.tasks.find(t => t.id === parentId)
                parentTask.state = newState
                if (parentTask.parent) {
                    this.updateParentTaskState(parentTask.parent)
                }
            }
        },
        updateSubTasks(taskId, newState) {
            const subTasks = this.collectSubTasks(taskId)
            if (subTasks.length > 0) {
                subTasks.forEach(subTask => {
                    subTask.state = newState
                    this.updateSubTasks(subTask.id, false, newState)
                })
            }
        },
    },
}