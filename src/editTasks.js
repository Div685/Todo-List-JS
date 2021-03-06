import { formContainer, overlay } from './storeData';

function editTaskForm() {
  const h2 = document.querySelector('.container h2');
  const submitInput = document.querySelector('input[type="submit"]');
  let modalOpen = false;

  if (modalOpen) {
    formContainer.setAttribute('class', 'pointer-none');
    formContainer.setAttribute('class', 'transform-z container w-50 p-4 card');
    overlay.setAttribute('class', 'opacity-z');
    modalOpen = false;
  } else {
    h2.textContent = 'Update Task';
    submitInput.value = 'Update';
    formContainer.setAttribute('class', 'pointer-auto');
    formContainer.setAttribute('class', 'transform-one container w-50 p-4 card');
    overlay.setAttribute('class', 'opacity-one');
    modalOpen = true;
  }
}

export default editTaskForm;