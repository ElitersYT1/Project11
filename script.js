let taskInput = document.querySelector(".form-task");
console.log('taskInput:' , taskInput)
let addBtn = document.querySelector(".Button");
let taskList = document.querySelector(".task-List");

function addNewTask(event) {
    event.preventDefault();
    let task = taskInput.Value;

    if (!task) return

    let newItem = document.querySelector('#template').cloneNode(true).content;
    newItem.querySelector('.task__text').vaule = task;
    newItem.querySelector('.task__delete').addEventListener('click' , deleteTask);
    taskList.append(newItem);
    taskInput.value ="";
    taskInput.focus();
}

function deleteTask(event) {
    console.log('event:', event );
    let target = event.target.preventElement;
    target.remove();
}

addBtn.addEventListener('click', addNewTask);