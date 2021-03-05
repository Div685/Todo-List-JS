const getTasks = () => {
  let tasks; 
  let projects;

  const taskList = document.querySelector('.collection');
  const projectList = document.querySelector('.card-action');

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  if(localStorage.getItem('projects') === null) {
    projects = [];
  } else {
    projects = JSON.parse(localStorage.getItem('projects'));
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

  projects.forEach(function(project) {
    const li = document.createElement('button');
    li.className = 'collection-item waves-light btn text-white padding';
    li.appendChild(document.createTextNode(project));
    projectList.appendChild(li);
   
  });

  return {
    tasks,
    projects
  };
}

export default getTasks;