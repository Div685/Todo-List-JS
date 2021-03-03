const loadForm = () => {
  const formDiv = document.createElement('div');
  formDiv.classList.add('card');
  formDiv.classList.add('p-4');
  formDiv.setAttribute('id', 'form-div');

  const form = document.createElement('form');
  form.setAttribute('id', 'form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', '');

  
  const h1 = document.createElement('h1');
  h1.classList.add('text-danger');
  h1.classList.add('font-weight-bold');
  h1.classList.add('my-4')
  h1.innerText = 'New Project';
  form.appendChild(h1);

  const titleLabel = document.createElement('label');
  titleLabel.classList.add('h4')
  titleLabel.innerText = 'Title';
  form.appendChild(titleLabel);

  const title = document.createElement('input');
  title.classList.add('form-control')
  title.setAttribute('type', 'text');
  title.setAttribute('name', "title");
  title.setAttribute('placeholder', 'Title');
  form.appendChild(title);

  const submit = document.createElement('input');
  submit.classList.add('form-control');
  submit.classList.add('my-3');
  submit.classList.add('btn-danger')
  submit.setAttribute('type', 'submit');
  submit.setAttribute('name', 'submit');
  submit.innerText = 'Submit';
  form.appendChild(submit);
  

  formDiv.appendChild(form);
  return formDiv;
}

export default loadForm;