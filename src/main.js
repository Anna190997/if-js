const formEl = document.getElementById('form');
const fileValue = document.getElementById('file')
formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  const file = fileValue.value;
  const fd = new FormData();
  fd.append('file', file);

  const fetchOptions = {
    method: 'POST',
    body: fd,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    mode: 'no-cors',
  };

  const res = await fetch(`https://fe-student-api.herokuapp.com/api/file`, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((result) => result)
    .catch((error) => console.log(error.message));
  console.log(res);
  console.log(file);
  console.log(fd);
});




