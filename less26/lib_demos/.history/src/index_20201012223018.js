import './styles.css';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import "pnotify/dist/PNotifyBrightTheme.css"

// PNotify.defaults = {
//     addClass: 'pn',
//     icons: 'brighttheme',
//     icon: true
// }

PNotify.defaultStack = {
    dir1: 'down',
    dir2: 'left',
    firstpos1: 25,
    firstpos2: 25,
    spacing1: 36,
    spacing2: 36,
    push: 'bottom',
    context: document.body
  }


const btn = document.getElementById('btn')


btn.addEventListener('click', ()=>{
    console.log('------------');
    const notice = PNotify.alert({
        title: 'Confirmation Needed',
        text: 'Are you sure?',
        hide: false,
      });
    // defaultModules.set(PNotifyMobile, {});

    // alert('Notice me, senpai!');
})

