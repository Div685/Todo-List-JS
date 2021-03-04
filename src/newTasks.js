const addNewTask = () => {
  const taskInput = document.querySelector('#task');
  const taskDesc = document.querySelector('#description');
  const taskDueDate = document.querySelector('#due-date');
  const priority = document.querySelector('#priority')
  
  const newTask = (e) => {
    const taskList = document.querySelector('.collection');
    if(taskInput.value === '' || taskDesc.value === '' || taskDueDate === '' || priority === '') {
      alert('Task cannot be empty')
    }else {
      
      //Store in local storage!
      storeTaskInLocalStorage(taskInput.value);
      storeDescriptionInLocalStorage(taskDesc.value);
      storeDueDateInLocalStorage(taskDueDate.value);
      storePriorityInLocalStorage(priority.value);
    
      taskInput.value = '';
      taskDesc.value ='';
      taskDueDate.value ='';
      priority.value='';
     
      e.preventDefault();
    }

    

    return taskList;
  }

  //Store priority

  const storePriorityInLocalStorage = (priority) => {
    let priorities;
    if(localStorage.getItem('priorities') === nulll) {
      priorities = [];
    } else {
      priorities = JSON.parse(localStorage.getItem('priorities'))
    }
    priorities.push(priority);
    localStorage.setItem('priorities', JSON.stringify(priorities))
  }

  //Store due date
  const storeDueDateInLocalStorage = (dueDate) => {
    let dueDates;
    if(localStorage.getItem('dueDates') === null) {
      dueDates = [];
    } else {
      dueDates = JSON.parse(localStorage.getItem('dueDates'))
    }
    dueDates.push(dueDate);
    localStorage.setItem('dueDates', JSON.stringify(dueDates))
  }

  //Store description
  const storeDescriptionInLocalStorage = (description) => {
    let descriptions;
    if(localStorage.getItem('descriptions') === null) {
      descriptions = [];
    } else {
      descriptions = JSON.parse(localStorage.getItem('descriptions'))
    }
    descriptions.push(description);
    localStorage.setItem('descriptions', JSON.stringify(descriptions))
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

  return newTask();
}

export default addNewTask;
