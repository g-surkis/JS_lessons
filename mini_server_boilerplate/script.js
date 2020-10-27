import users from '/users.js'


const getUsersWithFriend = (users, friendName) =>
  users.reduce((friendOfFriend, user) => {
    // console.log(user.friends);
    if (user.friends.some((user) => user.friends === friendName)) {
      friendOfFriend.push(user.name);
      return friendOfFriend;
    }
    return friendOfFriend;
  }, []);


// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

const btn = document.getElementById('btn');
console.log('btn: ', btn);

btn.addEventListener('click', () => {
  console.log('resetOnce: ');

  document.cookie = "doSomethingOnlyOnce=; expires=Thu, 01 Oct 2020 00:00:00 GMT";

  document.cookie = "test1=Hello";
  document.cookie = "test2=World";
  console.log('document.cookie: ', document.cookie);

})

