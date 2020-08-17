// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);

// console.log(c); // {x: 0, y: 2, z: 3}

// Те ж саме використовуючи операцію spread
// const d = { ...a, ...b };


const add = function (...args) {
    console.log(value); // перший аргумент
    console.log(arr); // масив всіх інших аргументів
  };
  
  add(10, 1, 2, 3);
  add(15, 1, 2, 3, 4, 5);