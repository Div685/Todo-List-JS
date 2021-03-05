import getTasks from './getTask';
import addNewTask from './newTasks';
import removeTask from './removeTask';
import clearTasks from './clearTask';
import filterTasks from './filterTasks';
import newProject from './newProject';


const addEventListener = () => {
  const form = document.querySelector('#task-form');
  const taskList = document.querySelector('.collection');
  const clearBtn = document.querySelector('.clear-tasks');
  const filter = document.querySelector('#filter');
  const taskInput = document.querySelector('#task');
  const form2 = document.querySelector('#project-form')

  loadEventListeners();

  function loadEventListeners() {

    document.addEventListener('DOMContentLoaded', getTasks);

    form.addEventListener('submit', addNewTask);

    taskList.addEventListener('click', removeTask);

    clearBtn.addEventListener('click', clearTasks);

    filter.addEventListener('keyup', filterTasks);

    form2.addEventListener('submit', newProject);
  }

  return loadEventListeners();
}

export default addEventListener;