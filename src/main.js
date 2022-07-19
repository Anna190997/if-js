const formEl = document.getElementById('formEl');
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);

  fetch(`https://fe-student-api.herokuapp.com/api/file`, {
    method: 'POST',
    body: formData,
    mode: 'no-cors',
  }).then((response) => {
    console.log(response);
  });
});
