const getUsersWithFriend = (users, friendName) =>
  users.reduce((friendOfFriend, user) => {
    console.log(user.friends);
    if (user.friends.some((user) => user.friends === friendName)) {
      friendOfFriend.push(user.name);
      return friendOfFriend;
    }
    return friendOfFriend;
  }, []);


console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]