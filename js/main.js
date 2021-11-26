"use strict";

const taskForm = document.querySelector('.task__form'),
      taskInput = document.querySelector('#task'),
      taskListTable = document.querySelector('table'),
      defaultTasks = [{taskName: "Украсть гусей", status: 0},
                      {taskName: "Побрить гусей", status: 1},
                      {taskName: "Вернуть гусей", status: 2}];

let taskList;
taskList = defaultTasks;

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





class addTask {
    constructor(description) {
        this.taskName = description;
        this.status = 0;
    }
}

const updateLocal = () => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
};


function createTaskList(tasks, parent) {
    parent.innerHTML = "";
    let td = ""
    tasks.forEach((task, i) => {
        switch(task.status) {
            case 0:
                td = '<td class="finished">Закончено</td>';
                break;
            case 1:
                td = '<td class="in-progress">Выполняется</td>';
                break;
            case 2:
                td = '<td class="todo">Будет</td>';
                break;
            default:
                console.log('globalError');
                break;
            
            }


        parent.innerHTML += `
        <tr>
        <td>${task.taskName}</td>
        ${td}
        <td>
            <span class="material-icons">delete</span>
        </td>
    </tr>
        `;
 
    });

}
createTaskList(defaultTasks, taskListTable);


document.querySelectorAll('.material-icons').forEach((btn, i)=> {
    btn.addEventListener('click', ()=> {
        btn.parentElement.parentElement.remove();
    });
});