import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import "pnotify/dist/PNotifyBrightTheme.css"
import "./pnotify.scss"

// PNotify.defaultStack = {
//   dir1: 'down',
//   dir2: 'left',
//   firstpos1: 55,
//   firstpos2: 55,
//   spacing1: 56,
//   spacing2: 56,
//   push: 'bottom',
//   context: document.body,
//   width: '500px'
// }

PNotify.defaults = {
  width: '500px',
  delay: 2000
}

const btn = document.createElement('button')
btn.insertAdjacentText('afterbegin', 'Pnotify')
btn.classList.add('pnotify-btn')

export default (message) => {
  PNotify.info({
    text: message
  });
}