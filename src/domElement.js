import { listsContainer, lists , selectedListId, listDisplayContainer,
  listTitleElement, tasksContainer, taskTemplate, newTaskInput, newTaskDate, newTaskDescription,
 newTaskPriority, newTaskForm } from './storeData';
import colorTasks from './color';
import editTaskForm from './editTasks';
import removeTask from './removeTask';

function render() {
 clearElement(listsContainer);
 renderLists();
 const selectedList = lists.find((list) => list.id === selectedListId);

 if (selectedListId === null) {
   listDisplayContainer.style.display = "none";
   const dTask = {
     id:'123-555-555-555-99',
     name: 'Default',
     tasks: []
   }
  lists.push(dTask);
  localStorage.setItem("task.lists", JSON.stringify(lists));
  localStorage.setItem("task.selectedListId", selectedListId);
  location.reload();
 } else {
   listDisplayContainer.style.display = "";
   listTitleElement.innerHTML = `${selectedList.name}`;
   clearElement(tasksContainer);
   renderTasks(selectedList);
   colorTasks(selectedList);
 }
}

function clearElement(element) {
 while (element.firstChild) {
   element.removeChild(element.firstChild);
 }
}

function renderLists() {
 lists.forEach((list) => {
   const listElement = document.createElement("li");
   listElement.innerText = list.name;
   listElement.dataset.listId = list.id;
   if (list.id === selectedListId) {
     listElement.classList.add("active-list");
   }
   listsContainer.appendChild(listElement);
 });
}

function renderTasks(selectedList) {
 if (selectedList.tasks.length === 0) {
   listDisplayContainer.style.background =
     "#aaa";
 } else {
   listDisplayContainer.style.background = "";
 }

 selectedList.tasks.forEach((task) => {
   const taskElement = document.importNode(taskTemplate.content, true);

   const label = taskElement.querySelector("label");
   label.htmlFor = task.id;

   const lineBreak = document.createElement("br");
   const taskNameTitle = document.createElement('p');
   taskNameTitle.setAttribute('class', 'font-weight-bold h4')
   taskNameTitle.innerHTML = `${task.name} `;

   label.appendChild(taskNameTitle);

   label.append(task.date, lineBreak, task.description);
   const editPButton = document.createElement("a");
   editPButton.classList.add('delete-item');

   const editI = document.createElement('i');
   editI.setAttribute('class', 'far fa-edit edit');
   editI.addEventListener('click', ()=> editTask(task, label));

   editPButton.appendChild(editI);

   const deleteI = document.createElement('i');
   deleteI.setAttribute('class', 'fas fa-trash');
   deleteI.addEventListener('click', () => removeTask());
   deleteI.setAttribute('data-id', task.id);
   editPButton.appendChild(deleteI);

   const todoTask = taskElement.querySelector(".task");
   todoTask.append(editPButton);

   tasksContainer.appendChild(taskElement);
 });
}

function editTask(task, label) {
 editTaskForm();
 newTaskInput.value = task.name;
 newTaskDate.value = task.date;
 newTaskPriority.value = task.priority;
 newTaskDescription.value = task.description;

 newTaskForm.addEventListener("submit", () => {
   task.name = newTaskInput.value;
   task.date = newTaskDate.value;
   task.priority = newTaskPriority.value;
   task.description = newTaskDescription.value;
   label.innerHTML = `<span class="checkbox"></span>${task.name}<br>${task.date}<br>${task.description}`;
   render();
   localStorage.setItem("task.lists", JSON.stringify(lists));
   localStorage.setItem("task.selectedListId", selectedListId);
   location.reload();
 });

}

export {
 render,
 renderLists,
 editTask,
};