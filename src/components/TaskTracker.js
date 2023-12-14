import TaskList from './TaskList.vue';
import CreationForm from './CreationForm.vue';

export default {
    components: {
        TaskList,
        CreationForm,
    },
    data() {
        return {
            tasks: [
                {
                    name: 'Welcome to my TODO-App!',
                    description: '',
                    due_date: '',
                    due_time: '',
                    parent: null,
                    id: 1,
                    state: -1
                }
            ],
            idCounter: 1,
        }
    },
    watch: {
        tasks: {
            handler(newTasks) {
                localStorage.setItem('tasks', JSON.stringify(newTasks));
            },
            deep: true
        }
    },
    methods: {
        openTaskCreationModal() {
            this.$refs.creationForm.openModal();
        },
        handleTaskCreated(newTask) {
            newTask.id = this.idCounter++
            this.tasks.push(newTask)
        },
        handleTaskDeleted(deletedTask) {
            const subtasks = this.tasks.filter(task => task.parent === deletedTask.id)
            subtasks.forEach((task) => {
                // Directly update the parent of each subtask
                const taskIndex = this.tasks.findIndex(t => t.id === task.id)
                this.tasks[taskIndex].parent = deletedTask.parent
            })

            // Then, filter out the deleted task from the tasks array
            this.tasks = this.tasks.filter(task => task.id !== deletedTask.id)
        },
    },
    mounted() {
        const localTasks = JSON.parse(localStorage.getItem('tasks'))
        if (localTasks !== null && localTasks.length > 0) {
            this.tasks = localTasks;
            const maxId = localTasks.reduce((max, task) => task.id > max ? task.id : max, 0);
            this.idCounter = maxId + 1;
        } else {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
};