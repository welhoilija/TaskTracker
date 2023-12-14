import TaskList from "./TaskList.vue";
import CreationForm from "./CreationForm.vue";
import { defineComponent } from "vue";
import type { Task } from "../types/Task";

type ComponentData = {
  tasks: Task[];
  idCounter: number;
};

export default defineComponent({
  components: {
    TaskList,
    CreationForm,
  },
  data(): ComponentData {
    return {
      tasks: [
        {
          name: "Welcome to my TODO-App!",
          description: "",
          due_date: "",
          due_time: "",
          parent: null,
          id: 1,
          state: -1,
        },
      ],
      idCounter: 1,
    };
  },
  watch: {
    tasks: {
      handler(newTasks: Task[]) {
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      },
      deep: true,
    },
  },
  methods: {
    openTaskCreationModal() {
      (this.$refs.creationForm as any).openModal();
    },
    handleTaskCreated(newTask: Task) {
      this.idCounter++;
      newTask.id = this.idCounter;
      this.tasks.push(newTask);
    },
    handleTaskDeleted(deletedTask: Task) {
      const subtasks = this.tasks.filter(
        (task: Task) => task.parent === deletedTask.id
      );
      subtasks.forEach((task: Task) => {
        // Directly update the parent of each subtask
        const taskIndex = this.tasks.findIndex((t: Task) => t.id === task.id);
        this.tasks[taskIndex].parent = deletedTask.parent;
      });

      // Then, filter out the deleted task from the tasks array
      this.tasks = this.tasks.filter((task) => task.id !== deletedTask.id);
    },
  },
  mounted() {
    const tasks: string | null = localStorage.getItem("tasks");
    if (tasks !== null) {
      const localTasks = JSON.parse(tasks);
      this.tasks = localTasks;
      const maxId = localTasks.reduce(
        (max: number, task: Task) => (task.id > max ? task.id : max),
        0
      );
      this.idCounter = maxId + 1;
    } else {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  },
});
