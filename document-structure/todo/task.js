const tasksAddButton = document.getElementById('tasks__add');
const tasksInput = document.getElementById('task__input');
let tasks = document.getElementById('tasks__list');

tasksAddButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (tasksInput.value.trim().length > 0) {
        addTask(tasksInput.value);
    };
});

tasksInput.addEventListener('keypress', (evt) => {
    if ((evt.key === "Enter") && (tasksInput.value.trim().length > 0)) {
        addTask(tasksInput.value);
    };
});

function addTask(taskText) {
    let task = document.createElement('div');
    task.classList.add('task');
    
    let taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = taskText;
    task.appendChild(taskTitle);

    let taskRemove = document.createElement('a');
    taskRemove.classList.add('task__remove');
    taskRemove.textContent = 'x';
    task.appendChild(taskRemove);
    
    tasks.appendChild(task);
    taskRemove.addEventListener('click', (evt) => {
        evt.preventDefault();
        tasks.removeChild(task);
    });

    tasksInput.value = null;
};