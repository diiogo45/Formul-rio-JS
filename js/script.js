const myForm = document.getElementById('my-form');

const nameInput = document.getElementById('name');

const emailInput = document.getElementById('email');

const msg = document.querySelector('.msg');

const userList = document.getElementById('users');

myForm.addEventListener('submit',onSubmit);


function onSubmit(e) {


e.preventDefault();

if (nameInput.value === '' || emailInput.value === '') {

msg.innerHTML = 'Por favor,digite alguma coisa';
msg.style.backgroundColor = 'red'


}else {

console.log('sucess')

}
}