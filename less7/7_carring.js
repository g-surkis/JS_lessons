

function curry(f) { 
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  
  function sum(a, b) {
    return a + b;
  }
  
const carriedSum = curry(sum);
const caried1 = carriedSum(5)



