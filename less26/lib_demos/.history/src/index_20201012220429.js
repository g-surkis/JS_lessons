import './styles.css';
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

const btn = document.getElementById('btn')


btn.addEventListener('click', ()=>{
    console.log('------------');


    alert('Notice me, senpai!');
})

