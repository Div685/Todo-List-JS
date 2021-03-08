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


const deleteTask = () => {

  const removeProjectFromLocalStorage = ({ target: { dataset: { id } } }) => {
    const selectedLists = lists.find((list) => list.id === selectedListId);
    console.log( id);



      // selectedTaskss.forEach((task, index) => {
      //   if (id === task.id) {
      //     selectedTaskss.splice(index, 1);
      //   }
      // });
  
      // localStorage.setItem('task.lists', JSON.stringify(lists));
      // localStorage.setItem('task.selectedListId', selectedListId);
      // window.location.reload();
  }

  
  const deleteTasks = (e) => {
    if (e.target.parentElement.classList.contains('delete-projectt')) {
      console.log(e.target.parentElement.parentElement);
      // e.target.parentElement.parentElement.remove();
      removeProjectFromLocalStorage(e);
    }
  }

  return deleteTasks(event);

}


const renderAndSave = () => {
  render();
  localStorage.setItem('task.lists', JSON.stringify(lists));
  localStorage.setItem('task.selectedListId', selectedListId);
}

const createList = () => {
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

const createTask = () => {
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
const addTasksForm = () => {
  const h2 = document.querySelector('.container h2');
  const submitInput = document.querySelector('input[type="submit"]');

  if (modalOpen) {
    formContainer.setAttribute('class', 'pointer-none');
    formContainer.setAttribute('class', 'transform-z container w-50 p-4 card');;
    overlay.setAttribute('class', 'opacity-z');
    modalOpen = false;
  } else {
    h2.textContent = 'New Task';
    submitInput.value = 'Submit';
    formContainer.setAttribute('class', 'pointer-auto');
    formContainer.setAttribute('class', 'transform-one container w-50 p-4 card');
    overlay.setAttribute('class', 'opacity-one');
    modalOpen = true;
  }
}


// close modal
const closeModal = () => {
  formContainer.setAttribute('class', 'transform-z');
  overlay.setAttribute('class', 'opacity-z');
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
    addButton.setAttribute('class', 'btn btn-primary');
  } else {
    addButton.setAttribute('class', 'btn btn-primary');
  }
});

// close form when user clicks on X
closeButton.addEventListener('click', () => {
  closeModal();
  addButton.setAttribute('class', 'transform-rz btn btn-primary');
});

// close form after it's submitted
formContainer.addEventListener('submit', (e) => {
  e.preventDefault();
  addTasksForm();
  addButton.setAttribute('class', 'transform-rz btn btn-primary');
  modalOpen = false;
  window.location.reload();
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
  deleteTask,
};