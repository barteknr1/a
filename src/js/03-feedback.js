import throttle from 'lodash.throttle';

const email = document.querySelector('input[name="email"]')
const message = document.querySelector('textarea[name="message"]')
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state'
const data = {};

form.addEventListener('input', throttle(() => {
    data.email = email.value;
    data.message = message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 500));
let storage = JSON.parse(localStorage.getItem(STORAGE_KEY))

form.addEventListener('submit', deleteMessage);
function deleteMessage(e) {
    e.preventDefault();
    console.log(email.value, message.value);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
};

if (storage !== null) {
    email.value = storage.email;
    message.value = storage.message;
}