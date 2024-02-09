// Assuming #container is a form and contains inputs with names 'inputTask' and 'inputTime'
const container = document.querySelector('#container');
const showTask = document.getElementById('showTask');
const savedTask = document.getElementById('savedTask');
const task = container.elements.inputTask.value;
const time = container.elements.inputTime.value;
const lineSpace = document.createElement('br');

// Listen for the form submission
container.addEventListener('submit', function(e) {
    e.preventDefault();
    showTask.style.visibility = 'visible';
    const task = container.elements.inputTask.value;
    const time = container.elements.inputTime.value;
    addTask(time, task);
    // Reset the form fields
    container.elements.inputTask.value = '';
    container.elements.inputTime.value = '';
});

// Function to add a task
const addTask = (time, task) => {
    if (task === "" || time === "") {
        alert("Please enter your task and time");
    } else {
        const newTask = document.createElement('li');
        const bTag = document.createElement('b');
        const doneButton = document.createElement('label');
        const deleteButton = document.createElement('label');

        // Configure the 'Done' button
        doneButton.textContent = 'Done';
        doneButton.style.backgroundColor = 'green';
        doneButton.className = 'doneButton';
        // Configure the 'Delete' button
        deleteButton.textContent = 'Delete';
        deleteButton.style.backgroundColor = 'red';
        deleteButton.className = 'deleteButton';

        // Append the time and task to the new task element
        bTag.textContent = time;
        newTask.appendChild(bTag);
        newTask.append(`: ${task}`);
        newTask.append(" ");
        newTask.append(" ");
        newTask.appendChild(doneButton);
        newTask.append(" ");
        newTask.appendChild(deleteButton);
        showTask.appendChild(newTask);
        showTask.append(lineSpace);

    }
};



// Event delegation for Done and Delete buttons
showTask.addEventListener('click', function(e) {
    if (e.target.className === 'doneButton') {
        // Move the task to saved tasks or handle it as needed
        savedTask.appendChild(e.target.parentElement);
        savedTask.style.visibility = 'visible'
    } else if (e.target.className === 'deleteButton') {
        // Remove the task
        e.target.parentElement.remove();
    }
});