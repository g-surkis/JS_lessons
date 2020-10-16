import './styles.css';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';



const btn = document.getElementById('btn')


btn.addEventListener('click', ()=>{
    console.log('------------');
    PNotify.alert('Notice me, senpai!');
    defaultModules.set(PNotifyMobile, {});

    // alert('Notice me, senpai!');
})

