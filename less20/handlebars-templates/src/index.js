



import listTemplate from '../templates/list.handlebars';
import headerTemplate from '../templates/header.handlebars';
import condTemplate from '../templates/cond.handlebars';

import users from '../mock';
import "../styles/main.scss";


const listMarkup = listTemplate({ elements: users.result })
const headerMarkup = headerTemplate({ title: 'Custom title' })
const condMarkup = condTemplate({ isActive: false })
console.log('condMarkup: ', condMarkup);


const list = document.querySelector('.list')
const header = document.querySelector('#custom-header')



header.insertAdjacentHTML('afterbegin', headerMarkup)
header.insertAdjacentHTML('beforeend', condMarkup)
list.insertAdjacentHTML('afterbegin', listMarkup)

