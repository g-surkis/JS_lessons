

const btnFetch = document.getElementById('btn-fetch');
const btnAxios = document.getElementById('btn-axios');

btnFetch.addEventListener('click', () => {



  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(e => e)




  // fetch('http://  localhost:3000   /users?filter=a-z&order=newest')
  // .then(res=>res.json())
  // .then(res=>console.log(res))


})

// let url = new URL('https://jsonplaceholder.typicode.com/users?filter=a-z&order=newest&search=house#gag');
// console.log('url: ', url);



btnFetch.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users', { method: 'POST' })
    .then((res) => res.json())
    .then(res => console.log(res))
})



btnAxios.addEventListener('click', () => {
  lEt
  axios.get('http://localhost:3000/goods?action=delete&id=3')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })


  axios.delete('http://localhost:3000/goods/2')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })

})

