import uuid from 'uuid-random';
import { render } from './domElement';

const listsContainer = document.querySelector('.project-ul-list');
const newListForm = document.querySelector('#project-list-form');
const newListInput = document.querySelector('#project-title-input');
const listDisplayContainer = document.querySelector('.display-todo-container');
const listTitleElement = document.querySelector('.todo-h2');
const listCountElement = document.querySelector('.todo-p');
const tasksContainer = document.querySelector('#data-tasks');
const taskTemplate = document.querySelector('#task-template');
const newTaskForm = document.querySelector('#new-task-form');
const newTaskInput = document.querySelector('.task-title');
const newTaskDate = document.querySelector('#due-date');
const newTaskPriority = document.querySelector('#priority');
const newTaskDescription = document.querySelector('#description');

const lists = JSON.parse(localStorage.getItem('task.lists')) || [];
let selectedListId = localStorage.getItem('task.selectedListId');
const overlay = document.querySelector('#overlay');
const formContainer = document.querySelector('.container');
const closeButton = document.querySelector('.close');
const addButton = document.querySelector('.add-btn');
let modalOpen = false;

function renderAndSave() {
  render();
  localStorage.setItem('task.lists', JSON.stringify(lists));
  localStorage.setItem('task.selectedListId', selectedListId);
}

function createList() {
  return { id: uuid(), name: newListInput.value, tasks: [] };
}

// make new projects
newListForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName === null || listName === '') return;
  const list = createList();
  newListInput.value = null;
  lists.push(list);
  renderAndSave();
});

function createTask() {
  return {
    id: uuid(),
    name: newTaskInput.value,
    date: newTaskDate.value,
    priority: newTaskPriority.value,
    description: newTaskDescription.value,
  };
}


// make new task
newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  const h2 = document.querySelector('.container h2');
  if (h2.textContent === 'Update Task') return;
  if (taskName === null || taskName === '') return;
  const task = createTask();
  newTaskInput.value = null;
  newTaskDescription.value = null;
  newTaskDate.value = null;
  newTaskPriority.value = null;
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  renderAndSave();
});


// when user wants to add a new task
function addTasksForm() {
  const h2 = document.querySelector('.container h2');
  const submitInput = document.querySelector('input[type="submit"]');

  if (modalOpen) {
    formContainer.style.pointerEvents = 'none';
    formContainer.style.transform = 'scale(0)';
    overlay.style.opacity = 0;
    modalOpen = false;
  } else {
    h2.textContent = 'New Task';
    submitInput.value = 'Submit';
    formContainer.style.pointerEvents = 'auto';
    formContainer.style.transform = 'scale(1)';
    overlay.style.opacity = 1;
    modalOpen = true;
  }
}


// close modal
function closeModal() {
  formContainer.style.transform = 'scale(0)';
  overlay.style.opacity = 0;
  modalOpen = false;
}

// display list tasks
listsContainer.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId;
    renderAndSave();
  }
});

// open form when user clicks on + button
addButton.addEventListener('click', () => {
  newTaskForm.reset();
  formContainer.classList.remove('d-none');
  formContainer.setAttribute('class', 'd-flex flex-column container w-50 p-4 card');
  addTasksForm();

  if (modalOpen) {
    addButton.setAttribute('class', 'primary');
  } else {
    addButton.setAttribute('class', 'success');
  }
});

// close form when user clicks on X
closeButton.addEventListener('click', () => {
  closeModal();
  addButton.style.transform = 'rotate(0)';
});

// close form after it's submitted
formContainer.addEventListener('submit', (e) => {
  e.preventDefault();
  addTasksForm();
  addButton.style.transform = 'rotate(0)';
  modalOpen = false;
});


export {
  lists,
  selectedListId,
  formContainer,
  newTaskDate,
  newTaskInput,
  newTaskPriority,
  newTaskDescription,
  newTaskForm,
  listsContainer,
  listDisplayContainer,
  listTitleElement,
  tasksContainer,
  taskTemplate,
  listCountElement,
  overlay,
};