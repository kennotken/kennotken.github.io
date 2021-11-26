"use strict";

const taskForm = document.querySelector('.task__form'),
      taskInput = document.querySelector('#task'),
      defaultTasks = [{taskName: "Украсть гусей", status: 0},{taskName: "Побрить гусей", status: 1},{taskName: "Вернуть гусей", status: 2}];

let taskList;
!localStorage.taskList ? taskList = [] : taskList = JSON.parse(localStorage.getItem('taskList'));

taskForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    let newTask = taskInput.value;
    if (newTask){
        console.log(newTask);
        taskList.push(new addTask(newTask));
        updateLocal();
        event.target.reset();
    }
});


document.querySelectorAll('.material-icons').forEach((btn, i)=> {
    btn.addEventListener('click', ()=> {
        btn.parentElement.parentElement.remove();
    });
});

class addTask {
    constructor(description) {
        this.taskName = description;
        this.status = 0;
    }
}

const updateLocal = () => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}