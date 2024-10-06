document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();
    
    if (taskValue) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        
        li.textContent = taskValue;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        taskInput.value = ''; // Clear input field
    } else {
        alert('Please enter a task');
    }
});
