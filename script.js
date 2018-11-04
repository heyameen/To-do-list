const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterTask = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadAllEventListeners();

function loadAllEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', deleteTask);
    clearBtn.addEventListener('click', clearTasks);
    filterTask.addEventListener('keyup', filterTasks);

}

function addTask(e) {
    if (taskInput.value === "") {
        alert('please enter a value');
    }

    const li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = "secondary-content delete-item";
    link.innerHTML = '<i class="fa fa-remove"> </i>'
    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value = "";

    e.preventDefault();
}


function deleteTask(e) {
    if (e.target.parentElement.classList.contains("delete-btn")) {
        e.target.parentElement.parentElement.remove();
    }

}

function clearTasks(e) {
    taskList.value = "";
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function (task) {
            const item = task.firstChild.textContent;
        if (item.toLowercase().indexOf(text) != -1) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
        }
    });

}