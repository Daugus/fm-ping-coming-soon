const input = document.querySelector('.notify__email');
const button = document.querySelector('.notify__button');
const message = document.querySelector('#message');

input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});
button.addEventListener('click', showMessage);

function showMessage() {
  if (input.checkValidity()) {
    input.classList.remove('invalid');
    message.classList.remove('error');
  } else {
    input.classList.add('invalid');
    message.classList.add('error');
  }
}
