<template>
    <div class="modal-overlay" v-show="isModalOpen" @click.self="closeModal">
        <div class="modal-content">
            <span class="close" @click="closeModal">X</span>
            <h2>Create New Task {{ parentId ? "| Parent task: " + parentId : '' }}</h2>

            <form @submit.prevent="submitTask">
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
                <button type="submit" class="button submit">Create Task</button>
            </form>
        </div>
    </div>
</template>
  
<script src="./CreationForm.js"></script>
  
<style>
.modal-overlay {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.344);
}

.modal-content {
    background-color: white;
    padding: 20px;
    border: 1px solid gray;
    width: 50%;
    border-radius: 4px;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.344);
}

.close {
    color: gray;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.form-group {
    margin-bottom: 10px;
}

.input,
textarea {
    width: 100%;
    padding: 10px;
    margin: 6px 0;
    display: inline-block;
    border: 1px solid gray;
    border-radius: 4px;
    box-sizing: border-box;
}

.button.submit {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: auto;
    display: block;
}
</style>
  