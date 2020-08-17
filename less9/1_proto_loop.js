let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  

  console.log('Object.keys',Object.keys(rabbit)); 
  

  for(let prop in rabbit)  console.log('for..in', prop);