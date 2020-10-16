import './styles.css';
import PNotify from 'node_modules/pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'node_modules/pnotify/dist/es/PNotifyButtons.js';



const btn = document.getElementById('btn')


btn.addEventListener('click', ()=>{
    console.log('------------');
    PNotify.alert('Notice me, senpai!');
    defaultModules.set(PNotifyMobile, {});

    // alert('Notice me, senpai!');
})

