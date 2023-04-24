import throttle from 'lodash/throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let inputData = JSON.parse(localStorage.getItem('LOCAL_STORAGE_KEY'));
let { email, message } = form.elements;

form.addEventListener('input', throttle(dataInput, 500));
form.addEventListener('submit', onFormSubmit);

populateTextarea();

function populateTextarea() {
  if (inputData) {
    email.value = inputData.email;
    message.value = inputData.message;
  }
}

function dataInput(evt) {
  inputData = { email: email.value, message: message.value };
  localStorage.setItem('LOCAL_STORAGE_KEY', JSON.stringify(inputData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (inputData.email === '' || inputData.message === '') {
    return alert('Please, fill in all fields!');
  }
  console.log(inputData);
  evt.currentTarget.reset();
  localStorage.removeItem('LOCAL_STORAGE_KEY');
}
