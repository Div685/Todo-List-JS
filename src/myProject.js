import { createHtmlElement, setId } from './domElements';

const gproject = document.querySelector('#projects .card');

class Project {
  constructor(title) {
    this.title = title;
    this.id = setId();
    this.tasks = [];
  }

  render() {
    const gdiv = createHtmlElement('div', this.id, ['project'], null);
    const gtitle = createHtmlElement('p', null, null, this.title);
    const gdelete = createHtmlElement('img', null, ['delete'], null);
    gdelete.src = './img/delete.svg';
    gdelete.addEventListener('click', () => {
      this.delete();
    });

    gdiv.appendChild(gtitle);
    gdiv.appendChild(gdelete);

    gproject.appendChild(gdiv);
    gdiv.addEventListener('click', () => {
      /* eslint-disable no-use-before-define */
      currentProject = this;
      currentProject.active = false;
      this.renderTasks();
      const projectsClass = document.querySelectorAll('.project');
      projectsClass.forEach((f) => { f.classList.value = 'project'; });
      const delButtons = document.querySelectorAll('.delete');
      delButtons.forEach((button) => { button.src = './img/delete.svg'; });
      if (!gdiv.classList.value.includes('active')) {
        gdiv.classList.add('active');
        gdelete.src = './img/delete-white.svg';
      }
    });
  }

  delete() {
    projectsArray = projectsArray.filter((project) => project.id !== this.id);
    Project.renderProjects();
  }

  renderTasks() {
    const gtasks = document.querySelector('#task-container');
    gtasks.innerHTML = '';
    this.tasks.forEach((task) => task.render());
  }

  static renderProjects() {
    gproject.innerHTML = '';
    projectsArray.forEach((project) => project.render());
  }

  static setCurrentProject(project) {
    currentProject = project;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  }
}

/* eslint-disable import/no-mutable-exports */

let projectsArray = [new Project('Test Project')];
let currentProject = projectsArray[0];

/* eslint-enable import/no-mutable-exports */

export { Project, projectsArray, currentProject };

/* eslint-enable no-use-before-define */