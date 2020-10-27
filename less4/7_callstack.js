function findJinny() {
  debugger;
  console.log('It seems you get confused with universe');
}

function goToTheCave() {
  findJinny();
}
function becomeAPrince() {
  goToTheCave();
}
function findAFriend() {
  // ¯\_(ツ)_/¯
}
function startDndGame() {
  const friends = [];
  while (friends.length < 2) {
    friends.push(findAFriend());
  }
  becomeAPrince();
}
console.log(startDndGame());