<template>
    <div class="modal-overlay" v-show="isModalOpen" @click.self="closeModal">
        <div class="modal-content">
            <span class="close" @click="closeModal">X</span>
            <h2>Create New Task</h2>

            <form @submit.prevent="updateTask">
                <div class="form-group">
                    <label for="taskName">Task Name:</label>
                    <input type="text" id="taskName" v-model="task.name" class="input" maxlength="50" required>
                </div>

                <div class="form-group">
                    <label for="taskDescription">Description:</label>
                    <textarea id="taskDescription" v-model="task.description" class="input" maxlength="255"></textarea>
                </div>

                <div class="form-group">
                    <label for="taskDueDate">Due date:</label>
                    <input type="date" id="taskDueDate" v-model="task.due_date" class="input">
                </div>

                <div class="form-group">
                    <label for="taskDueTime">Due Time:</label>
                    <input type="time" id="taskDueTime" v-model="task.due_time" class="input">
                </div>
                <button type="submit" class="button submit">Update Task</button>
            </form>
        </div>
    </div>
</template>
  
<script src="./UpdateForm.js"></script>