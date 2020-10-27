const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    console.log('_____');
    Cookies.set('name', 'value');
    Cookies.set('name', 'value', { expires: 7 });
    Cookies.set('name', 'value', { expires: 7, path: '' });
})
