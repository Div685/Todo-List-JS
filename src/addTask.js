
const addTask = () => {

  const form = document.querySelector('#task-form');
  const taskList = document.querySelector('.collection');
  const clearBtn = document.querySelector('.clear-tasks');
  const filter = document.querySelector('#filter');
  const taskInput = document.querySelector('#task');

  loadEventListeners();

  function loadEventListeners() {
    form.addEventListener('submit', addNewTask);

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
    taskInput.value = ''

    e.preventDefault();
  }


}
export default addTask;