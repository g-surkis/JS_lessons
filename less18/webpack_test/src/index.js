import "../styles/style.scss";

const moment = require('moment')


import ob from './menu.json'

console.log('ob: ', ob);



const scroller = document.querySelector('#scroller');
const sentinel = document.querySelector('#sentinel');
let counter = 10;

function loadItems(n) {
  setTimeout(() => {
    for (let i = 0; i < n; i++) {
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.textContent = 'Item ' + counter++;
      scroller.appendChild(newItem);
    }

    scroller.appendChild(sentinel);

  }, 1000)
}

loadItems(10);

const arr = [
  {
    path: '/captcha'
  },
  {
    path: '/login'
  },
  {
    path: '/goods/tv/sumsung'
  },
  {
    path: '/goods/tv/Xiomi'
  },
  {
    path: '/goods/tv/LG'
  },
]

// localStorage.setItem('theme', 'dark')
// const key = localStorage.getItem('theme')
// console.log('key: ', key);
// const unExist = localStorage.getItem('theme1')
// console.log('unExist: ', unExist);


// localStorage.setItem('history', JSON.stringify(arr))
// const routes = JSON.parse(localStorage.getItem('history')) 
// console.log('routes: ', routes);

// localStorage.clear();


// let openRequest = indexedDB.open("store", 2);

// openRequest.onupgradeneeded = function() {
//   openRequest.result.createObjectStore('users', {keyPath: 'id'});
// };

// openRequest.onerror = function() {
//   console.error("Error", openRequest.error);
// };




// throw new Error ('This is a new error')


// // var data = '{ "age: 30 }'; 
// // var user = JSON.parse(data);

// // console.log( "Извините, в данных ошибка" );


