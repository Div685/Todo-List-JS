const colorTasks = (selectedList) => {
  const todos = [...document.querySelectorAll('.todo')];
  const taskDivcolor = [...document.querySelectorAll('.task')];
  for (let i = 0; i < todos.length; i += 1) {
    for (let i = 0; i < selectedList.tasks.length; i += 1) {
      if (selectedList.tasks[i].priority === 'High') {
        taskDivcolor[i].setAttribute('class', 'high-priority');
      } else if (selectedList.tasks[i].priority === 'Medium') {
        taskDivcolor[i].setAttribute('class', 'medium-priority');
      } else {
        taskDivcolor[i].setAttribute('class', 'low-priority');
      }
    }
  }
};


export default colorTasks;