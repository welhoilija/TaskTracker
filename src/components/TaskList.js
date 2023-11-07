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
            if (this.depth === 0) {
                console.log(this.tasks.filter(task => !task.parent))
                return this.tasks.filter(task => !task.parent)
            } else {
                return this.subTasks
            }
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
            updatedTask.state = updatedTask.state === 1 ? -1 : 1
            if (updatedTask.state === 1) {
                this.updateParentTaskState(updatedTask.parent)
            } else {
                this.updateSubTasks(updatedTask.id, false, -1)
                this.updateParentForNotCompletedTask(updatedTask.parent)
            }
        },

        updateParentTaskState(parentId) {
            if (parentId !== null) {
                const siblings = this.collectSubTasks(parentId)
                const allSiblingsCompleted = siblings.every(sib => sib.state === 1)
                const newState = allSiblingsCompleted ? 1 : 0

                let parentTask = this.tasks.find(t => t.id === parentId)
                parentTask.state = newState

                this.updateParentTaskState(parentTask.parent)
            }
        },
        updateParentForNotCompletedTask(parentId) {
            if (parentId !== null) {
                // Get the parent task
                const parent = this.tasks.find(t => t.id === parentId)
                if (parent) {
                    const siblings = this.tasks.filter(t => t.parent === parentId)
                    // Check if there is a task that's not completed and change the state accordingly.
                    const anyNotCompleted = siblings.some(sib => sib.state === -1)
                    const newState = anyNotCompleted ? -1 : 0

                    parent.state = newState

                    this.updateParentForNotCompletedTask(parent.parent)
                }
            }
        },
        updateSubTasks(taskId, excludeSelf, newState) {
            const subTasks = this.collectSubTasks(taskId)
            subTasks.forEach(subTask => {
                if (!excludeSelf || subTask.id !== taskId) {
                    if (subTask.state !== newState) {
                        subTask.state = newState
                        this.updateSubTasks(subTask.id, false, newState)
                    }
                }
            })
        },
    },
}