// The factorial of a natural number is a number multiplied by "number minus one",
//  then by "number minus two", and so on till 1. The factorial of n is denoted as n!


function factorialize(num) {
  if (num < 0)
    return -1;
  else if (num == 0)
    return 1;
  else {
    return (num * factorialize(num - 1));
  }
}
factorialize(5);
console.log('factorialize(5): ', factorialize(5));



function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log('factorial(10)', factorial(10));

