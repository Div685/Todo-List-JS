const clearTasks = () => {
  const taskList = document.querySelector('.collection');

  const clearTask = () => {
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild)
      }
      
      clearTasksFromLocalStorage();
  }
    
  const clearTasksFromLocalStorage = () => {
    localStorage.clear();
  }

  return clearTask();
}

export default clearTasks;
