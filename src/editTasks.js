import { formContainer, overlay } from './storeData';

function editTaskForm() {
  const h2 = document.querySelector('.container h2');
  const submitInput = document.querySelector('input[type="submit"]');
  let modalOpen = false;

  if (modalOpen) {
    formContainer.style.pointerEvents = 'none';
    formContainer.style.transform = 'scale(0)';
    overlay.style.opacity = 0;
    modalOpen = false;
  } else {
    h2.textContent = 'Update Task';
    submitInput.value = 'Update';
    formContainer.style.pointerEvents = 'auto';
    formContainer.style.transform = 'scale(1)';
    overlay.style.opacity = 1;
    modalOpen = true;
  }
}

export default editTaskForm;