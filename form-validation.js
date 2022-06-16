const form = document.getElementById('submit-btn');
const formContainer = document.getElementById('form-error');
let errorMessage = '';
function isLowerCase(str) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}
form.addEventListener('click', () => {
  const email = document.getElementById('email-form');
  const emailValue = email.value;
  console.log(isLowerCase(String(emailValue)));
  if (isLowerCase(String(emailValue)) === false) {
    errorMessage = 'Error: form is not sent. Make sure the email is in lowercase';
    formContainer.innerHTML = errorMessage;
  } else {
    formContainer.innerHTML = '';
  }
});
