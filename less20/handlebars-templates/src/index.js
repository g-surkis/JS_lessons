import listTemplate from '../templates/list.handlebars';
import users from '../mock';
import "../styles/main.scss";


const listMarkup = listTemplate({users: users.result})

const list = document.querySelector('.list')
const title = document.querySelector('.title')
console.log('title: ', title);
console.log('list: ', list);

list.insertAdjacentHTML('afterbegin', listMarkup)

