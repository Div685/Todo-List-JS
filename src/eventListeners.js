import getTasks from './addTask'
const addEventListener = () => {
  const form = document.querySelector('#task-form');
  const taskList = document.querySelector('.collection');
  const clearBtn = document.querySelector('.clear-tasks');
  const filter = document.querySelector('#filter');
  const taskInput = document.querySelector('#task');

  loadEventListeners();

  function loadEventListeners() {

    document.addEventListener('DOMContentLoaded', getTasks);

    form.addEventListener('submit', addNewTask);

    taskList.addEventListener('click', removeTask);

    clearBtn.addEventListener('click', clearTasks);

    filter.addEventListener('keyup', filterTasks)

  }

  return loadEventListeners;
}

export default addEventListener