document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Add Task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value;
        const taskDate = taskDateTime.value;

        if (taskText === '') {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');

        li.innerHTML = `
            <span>${taskText} - <small>${taskDate ? new Date(taskDate).toLocaleString() : 'No date set'}</small></span>
            <div class="actions">
                <button class="completeBtn">✔️</button>
                <button class="editBtn">✏️</button>
                <button class="deleteBtn">❌</button>
            </div>
        `;

        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
        taskDateTime.value = '';

        // Mark Task as Completed
        li.querySelector('.completeBtn').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Edit Task
        li.querySelector('.editBtn').addEventListener('click', () => {
            const newTaskText = prompt("Edit your task", taskText);
            const newDateTime = prompt("Edit date & time", taskDate);
            if (newTaskText !== null) {
                li.querySelector('span').innerHTML = `${newTaskText} - <small>${newDateTime ? new Date(newDateTime).toLocaleString() : 'No date set'}</small>`;
            }
        });

        // Delete Task
        li.querySelector('.deleteBtn').addEventListener('click', () => {
            li.classList.add('fadeOut');
            setTimeout(() => li.remove(), 500);
        });
    });
});
