const addNewTask = () => {
  const taskInput = document.querySelector('#task');
  
  const newTask = (e) => {
    const taskList = document.querySelector('.collection');
    if(taskInput.value === '') {
      alert('Task cannot be empty')
    }else {
      const li = document.createElement('li');
      li.className = 'collection-item'
      li.appendChild(document.createTextNode(taskInput.value));
    
      const link = document.createElement('a');
      link.className = 'delete-item secondary-content'
      link.innerHTML = '<i class="fa fa-remove"></i>'
      li.appendChild(link);
      taskList.appendChild(li);
    }

    //Store in local storage!
    storeTaskInLocalStorage(taskInput.value);
  
    taskInput.value = ''
   
    e.preventDefault();

    return taskList;
  }

  //Store task
  const storeTaskInLocalStorage = (task) => {
  let tasks; 
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

  return newTask(event);
}

export default addNewTask;
