const state = {
    login: '',
    pass: ''
}


const button = document.getElementById('btn');
const textfield = document.getElementById('textfield');


const handler = (event) => {
    console.log('event: ', event);
    console.log('keydown');
}

// textfield.addEventListener('keydown', handler)

// textfield.addEventListener('keypress', ()=>{
//     console.log('keypress');
// })

// textfield.addEventListener('keyup',()=>{
//     console.log('keyup');
// } )
// textfield.addEventListener('focus',(event)=>{
//     const {target} = event
//     target.classList.toggle('gray')
//     target.classList.toggle('size')
//     console.log('target: ', target);


//     console.log('focus');
// } )
// textfield.addEventListener('blur',()=>{
//     const {target} = event
//     target.classList.toggle('gray')
//     target.classList.toggle('size')
//     console.log('blur');
// } )
textfield.addEventListener('input', () => {
    const { target } = event

    console.log(target.value);
    // target.classList.toggle('gray')
    // target.classList.toggle('size')
    // console.log('blur');
})

window.addEventListener('beforeunload', (event) => {
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = '';
});



// button.removeEventListener('click', handler)