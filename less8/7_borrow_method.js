function hash() {

console.log(arguments);

// console.log(arguments.join());

    console.log( [].join.call(arguments) ); 
  }
  
  hash(1, 2);



 