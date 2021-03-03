import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import loadForm from './load_form';

console.log('Hello Todos');

const mainContent = document.getElementById('content');

const setSection = (section) => {
  mainContent.innerHTML = '';
  mainContent.append(section);
}

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'btnAddTask') {
    const section = loadForm();
    setSection(section);
  }
})