const filterTasks = () => {

  const searchTasks = (e) => {
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

  return searchTasks(event);
}

export default filterTasks;
