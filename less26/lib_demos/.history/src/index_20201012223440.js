import './styles.css';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import "pnotify/dist/PNotifyBrightTheme.css"

PNotify.defaultStack = {
    dir1: 'down',
    dir2: 'left',
    firstpos1: 55,
    firstpos2: 55,
    spacing1: 56,
    spacing2: 56,
    push: 'bottom',
    context: document.body
  }


const btn = document.getElementById('btn')


btn.addEventListener('click', ()=>{
    console.log('------------');
    PNotify.info({
        text: "I'm an info message."
      });

      const notice = PNotify.alert({
        title: 'Confirmation Needed',
        text: 'Are you sure?',
        hide: false,
        addClass: 'pn',
        stack: PNotify.defaultStack

      });
    // defaultModules.set(PNotifyMobile, {});

    // alert('Notice me, senpai!');
})

