let tasks = [];
let completedTasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput'); 
    const taskText = taskInput.value.trim();

    if (taskText) {
        const task = {
            id: Date.now(),
            text: taskText,
            addedTime: new Date().toLocaleString(),
            completed: false
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');
    
    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
            ${task.text} <span class="task-time">(Added: ${task.addedTime})</span>
            <button class="complete-btn" onclick="completeTask(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;
        if (task.completed) {
            completedTasksList.appendChild(taskElement);
        } else {
            pendingTasksList.appendChild(taskElement);
        }
    });
}

function completeTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex > -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        if (tasks[taskIndex].completed) {
            tasks[taskIndex].completedTime = new Date().toLocaleString();
        }
        renderTasks();
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}


renderTasks();
