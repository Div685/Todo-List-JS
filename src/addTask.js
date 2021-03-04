import { forEach } from "lodash";
import addEventListener from './eventListeners'
import removeTask from './removeTask'
const addTask = () => {
  
  addEventListener();
  removeTask();


  function getTasks() {
    let tasks; 
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
      const li = document.createElement('li');
      li.className = 'collection-item'
      li.appendChild(document.createTextNode(task));

      const link = document.createElement('a');
      link.className = 'delete-item secondary-content'
      link.innerHTML = '<i class="fa fa-remove"></i>'

      li.appendChild(link);
      taskList.appendChild(li);
  
    });
  }


  function addNewTask(e) {
    if(taskInput.value === '') {
      alert('Task cannot be empty')
    }

    const li = document.createElement('li');
    li.className = 'collection-item'
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove"></i>'

    li.appendChild(link);
    taskList.appendChild(li);

    //Store in local storage!
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = ''


    e.preventDefault();
  }

//Store task
  function storeTaskInLocalStorage(task) {
    let tasks; 
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }


  

  function clearTasks() {


    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild)
    }

    clearTasksFromLocalStorage();
  }

  function clearTasksFromLocalStorage() {
    localStorage.clear();
  }

  function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task) {
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block'
      } else {
        task.style.display = 'none'
      }
    });
  }

}
export default addTask;