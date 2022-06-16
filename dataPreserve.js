function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22

            || e.code === 1014

            || e.name === 'QuotaExceededError'

            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')

            && (storage && storage.length !== 0);
  }
}

const loadModal1 = function (string) {
  const bodyContainer = document.getElementById('modal');
  bodyContainer.innerHTML = string;
  const modal = document.querySelector('.modal');
  modal.classList.toggle('show-modal');
};

if (storageAvailable('localStorage')) {
  const formData = {
    name: '',
    email: '',
    comment: '',
  };
  const formName = document.getElementById('name-field');
  const formEmail = document.getElementById('email-form');
  const formComment = document.getElementById('message');
  formName.addEventListener('input', () => {
    formData.name = formName.value;
    localStorage.setItem('formDataItem', JSON.stringify(formData));
  });

  formEmail.addEventListener('input', () => {
    formData.email = formEmail.value;
    localStorage.setItem('formDataItem', JSON.stringify(formData));
  });
  formComment.addEventListener('input', () => {
    formData.comment = formComment.value;
    localStorage.setItem('formDataItem', JSON.stringify(formData));
  });

  if (localStorage.getItem('formDataItem')) {
    const dataFromStorage = JSON.parse(localStorage.getItem('formDataItem'));
    formName.value = dataFromStorage.name;
    formEmail.value = dataFromStorage.email;
    formComment.value = dataFromStorage.comment;
  } else {
    formData.name = formName.value;
    formData.email = formEmail.value;
    formComment.comment = formComment.value;
    localStorage.setItem('formDataItem', JSON.stringify(formData));
  }
} else {
  loadModal1('Please Enable the Local Storage');
}
