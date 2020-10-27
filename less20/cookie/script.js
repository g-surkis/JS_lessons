const btn = document.getElementById('btn');
console.log('btn: ', btn);


btn.addEventListener('click', () => {
  console.log('resetOnce: ');

  document.cookie = "doSomethingOnlyOnce=; expires=Thu, 01 Oct 2020 00:00:00 GMT";

  document.cookie = "test1=Hello";
  document.cookie = "test2=World";


  console.log('document.cookie: ', document.cookie);

})

