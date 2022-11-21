const form = document.getElementById('submit-btn');
const formContainer = document.getElementById('form-error');
let errorMessage = '';
function isLowerCase(str) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}
form.addEventListener('click', (e) => {
  const name = document.getElementById('name-field');
  const email = document.getElementById('email-form');
  const message = document.getElementById('message');
  const emailValue = email.value;
  if (isLowerCase(String(emailValue)) === false) {
    errorMessage = 'Error: form is not sent. Make sure the email is in lowercase';
    formContainer.innerHTML = errorMessage;
  } else {
    e.preventDefault();
    fetch('https://hammadevs.ly/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Email: email.value, Name: name.value, Message: message.value }),
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          formContainer.innerHTML = `${response.message}`;
        } else {
          // formContainer.innerHTML = 'Sorry an Expected error occured';
          console.log(response.message);
          formContainer.innerHTML = `${response.message}`;
        }
      });
  }
});
