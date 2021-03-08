import {
  listsContainer, lists, selectedListId, listDisplayContainer,
  listTitleElement, tasksContainer, taskTemplate, newTaskInput, newTaskDate, newTaskDescription,
  newTaskPriority, newTaskForm, deleteTask
} from './storeData';
import colorTasks from './color';
import editTaskForm from './editTasks';
import removeTask from './removeTask';

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const renderLists = () => {
  lists.forEach((list) => {
    const listElement = document.createElement('li');
    listElement.setAttribute('class', 'delete-projectt d-flex justify-content-between align-items-center')
    listElement.innerText = list.name;

    const deleteII = document.createElement('i');
    deleteII.setAttribute('class', 'fas fa-trash ml-5');
    deleteII.addEventListener('click', () => deleteTask());
    deleteII.setAttribute('data-id', list.id);
    listElement.appendChild(deleteII);

    listElement.dataset.listId = list.id;
    if (list.id === selectedListId) {
      listElement.classList.add('active-list');
    }
    listsContainer.appendChild(listElement);
  });
}

const editTask = (task, label) => {
  editTaskForm();
  newTaskInput.value = task.name;
  newTaskDate.value = task.date;
  newTaskPriority.value = task.priority;
  newTaskDescription.value = task.description;

  newTaskForm.addEventListener('submit', () => {
    task.name = newTaskInput.value;
    task.date = newTaskDate.value;
    task.priority = newTaskPriority.value;
    task.description = newTaskDescription.value;
    label.innerHTML = `<span class="checkbox"></span>${task.name}<br>${task.date}<br>${task.description}`;
    render();
    localStorage.setItem('task.lists', JSON.stringify(lists));
    localStorage.setItem('task.selectedListId', selectedListId);
    window.location.reload();
  });
}

const renderTasks = (selectedList) => {
  if (selectedList.tasks.length === 0) {
    listDisplayContainer.setAttribute('class', 'bg-light col-9');
  } else {
    listDisplayContainer.setAttribute('class', 'bg-light col-9');
  }

  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);

    const label = taskElement.querySelector('label');
    label.htmlFor = task.id;
    label.setAttribute('class', 'w-100');

    const lineBreak = document.createElement('br');
    const taskNameTitle = document.createElement('p');
    taskNameTitle.setAttribute('class', 'font-weight-bold h4');
    taskNameTitle.innerHTML = `${task.name} `;

    label.appendChild(taskNameTitle);

    label.append(task.date, lineBreak);

    const taskDescription = document.createElement('p');
    taskDescription.setAttribute('class', 'm-0 p-0 w-100');
    taskDescription.innerHTML = `${task.description}`;

    label.appendChild(taskDescription);

    const editPButton = document.createElement('a');
    editPButton.classList.add('delete-item');

    const editI = document.createElement('i');
    editI.setAttribute('class', 'far fa-edit edit');
    editI.addEventListener('click', () => editTask(task, label));

    editPButton.appendChild(editI);

    const deleteI = document.createElement('i');
    deleteI.setAttribute('class', 'fas fa-trash');
    deleteI.addEventListener('click', () => removeTask());
    deleteI.setAttribute('data-id', task.id);
    editPButton.appendChild(deleteI);

    const todoTask = taskElement.querySelector('.task');
    todoTask.append(editPButton);

    tasksContainer.appendChild(taskElement);
  });
}

const render = () => {
  clearElement(listsContainer);
  renderLists();
  const selectedList = lists.find((list) => list.id === selectedListId);

  if (selectedListId === null) {
    listDisplayContainer.setAttribute('class', 'd-none w-100');
    const dTask = {
      id: '123-555-555-555-99',
      name: 'Default',
      tasks: [],
    };
    lists.push(dTask);
    localStorage.setItem('task.lists', JSON.stringify(lists));
    localStorage.setItem('task.selectedListId', selectedListId);
    window.location.reload();
  } else {
    listTitleElement.innerHTML = `${selectedList.name}`;
    clearElement(tasksContainer);
    renderTasks(selectedList);
    colorTasks(selectedList);
  }
}

export {
  render,
  renderLists,
  editTask,
};