const newProject = () => {
  const project = document.querySelector('#project');
  


  const addNewProject = (e) => {
    const card = document.querySelector('.card-action');
    if(project.value === '') {
      alert('Cannot be empty')
    } else {
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(project.value));

      project.appendChild(li);

      //Store in local storage!
      storeProjectInLocalStorage(project.value);

      project.value = ''

      e.preventDefault();
    }
    return addNewProject(event);
  }

  const storeProjectInLocalStorage = (project) => {
    let projects;
    if(localStorage.getItem('projects') === nulll) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'))
    }
    projects.push(project);
    localStorage.setItem('priorities', JSON.stringify(projects))
  }
  
}

export default newProject;