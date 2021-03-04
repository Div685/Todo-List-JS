const getTasks = () => {
  let tasks; 
  const taskList = document.querySelector('.collection');
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

  return tasks;
}

export default getTasks;