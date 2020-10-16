import './styles.css';
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';


const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    defaultModules.set(PNotifyMobile, {});
})

