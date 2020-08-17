const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const foods = [
  { call: 'Радар', price: 1300, quantity: 4 },
  { call: 'Сканер', price: 2700, quantity: 3 },
  { call: 'Дроїд', price: 400, quantity: 7 },
  { call: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const a = []
  for (const iterator of arr) {
   a.push(iterator[prop]) 
  }
};


console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

console.log(getAllPropValues(foods, 'call')); // []