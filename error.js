const email = document.querySelector('.notify__email');
const input = document.querySelector('.notify__button');
const message = document.querySelector('#message');

input.addEventListener('click', showMessage);

function showMessage() {
  if (email.checkValidity()) {
    console.log(true);
    email.classList.remove('invalid');
    message.classList.remove('error');
  } else {
    console.log(false);
    email.classList.add('invalid');
    message.classList.add('error');
  }
}
