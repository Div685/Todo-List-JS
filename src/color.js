const colorTasks = (selectedList) => {
  const todos = [...document.querySelectorAll(".todo")];
  const taskDivcolor = [...document.querySelectorAll(".task")];
  for (let i = 0; i < todos.length; i++) {
    for (let i = 0; i < selectedList.tasks.length; i++) {
      if (selectedList.tasks[i].priority === "High") {
        taskDivcolor[i].style.background = "#ed1250";
      } else if (selectedList.tasks[i].priority === "Medium") {
        taskDivcolor[i].style.background = "#d3d00f";
      } else {
        taskDivcolor[i].style.background = "#0fc53d";
      }
    }
  }
}



export default colorTasks;