const removeTask = () => {
  const selectedListId = localStorage.getItem('task.selectedListId');

  const lists = JSON.parse(localStorage.getItem('task.lists')) || [];

  const removeTasks = (e) => {
    if (e.target.parentElement.classList.contains('delete-item')) {
      if (window.confirm('Are you sure')) {
        e.target.parentElement.parentElement.remove();
        removeTaskFromLocalStorage(e);
      }
    }
  };

  // remove from local storage
  function removeTaskFromLocalStorage({ target: { dataset: { id } } }) {
    console.log(id, lists);
    const selectedList = lists.find((list) => list.id === selectedListId);
    const selectedTasks = selectedList.tasks;

    console.log(selectedTasks);

    selectedTasks.forEach((task, index) => {
      console.log(task.id);

      if (id === task.id) {
        selectedTasks.splice(index, 1);
      }
    });


    localStorage.setItem('task.lists', JSON.stringify(lists));
    localStorage.setItem('task.selectedListId', selectedListId);
    location.reload();
  }

  return removeTasks(event);
};

export default removeTask;