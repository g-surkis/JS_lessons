const filter = function (array) {
    const filteredElements = [];

    const func = (fruit, i) => {return fruit.quantity >= 120}
  
    for (const element of array) {
      const passed = func(element, i);
  
      if (passed) {
        filteredElements.push(element);
      }
    }
  
    return filteredElements;
  };
  
  const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
  ];

  const isFresh = (fruit) => {
      return fruit.isFresh
    }
  
//   const freshFruits = filter(fruits, isFresh);
//   console.log(freshFruits); 

const func = (a) => {return a.quantity >= 120}
  
  const fruitsWithQuantity = filter(fruits);
  console.log(fruitsWithQuantity); 
