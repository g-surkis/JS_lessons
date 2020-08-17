let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  const demonstrate = (callback)=>{
      callback();
  }


//   demonstrate(user.sayHi)






  
//   demonstrate(function() {
//     user.sayHi(); 
//   })
//   Now it works, because it receives user from the outer lexical environment, and then calls the method normally.