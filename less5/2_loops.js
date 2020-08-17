
const person = {
    name: 'Robert',
    surname: 'Bush',
    age: 27,
    address: {
        street: 'Shevchenko',
        number: 56
    },
   getName(){
        console.log(this.surname);
    }
}

const goods = {
    apples: 6,
    grapes: 3,
    bread: 4,
    cheese: 7,
  };
  
  const values = Object.values(goods);
  
  let total = 0;
  
  for (const value of values) {
    total += value;
  }
  
  console.log(total); // 20
