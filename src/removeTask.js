const removeTask = () => {
  const selectedListId = localStorage.getItem('task.selectedListId');

  const lists = JSON.parse(localStorage.getItem('task.lists')) || [];

  // remove from local storage
  function removeTaskFromLocalStorage({ target: { dataset: { id } } }) {
    const selectedList = lists.find((list) => list.id === selectedListId);
    const selectedTasks = selectedList.tasks;

    selectedTasks.forEach((task, index) => {
      if (id === task.id) {
        selectedTasks.splice(index, 1);
      }
    });

    localStorage.setItem('task.lists', JSON.stringify(lists));
    localStorage.setItem('task.selectedListId', selectedListId);
    window.location.reload();
  }

  const removeTasks = (e) => {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
        removeTaskFromLocalStorage(e);
    }
  };

  return removeTasks(event);
};

export default removeTask;