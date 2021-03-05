const newProject = () => {
  const project = document.querySelector('#project');
  const ul = document.querySelector('.card-action ')
  


  function addNewProject(e) {
    if(project.value === '') {
      alert('Cannot be empty')
    } else {

      const li = document.createElement('li');
      li.className = 'collection-item'
      li.appendChild(document.createTextNode(project.value));

      ul.appendChild(li)
      storeProjectInLocalStorage(project.value);

      project.value = '';

     
    }
  }
  

  const storeProjectInLocalStorage = (project) => {
    let projects;
    if(localStorage.getItem('projects') === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'))
    }
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects))
  }

  return addNewProject();
}

export default newProject;