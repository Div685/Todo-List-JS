const removeTask = () => {
  
  function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
      if(confirm('Are you sure')){
        e.target.parentElement.parentElement.remove();
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      }
    }
  }

  //remove from local storage
  function removeTaskFromLocalStorage(taskItem) {
    let tasks; 
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
      if(taskItem.textContent === task) {
        tasks.splice(index, 1)
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

export default removeTask;