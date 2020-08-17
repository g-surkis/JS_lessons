function multiply(x, y) { 
    return x * y; 
}

let multiplyBy10 = multiply.bind(null, 10);

console.log(multiplyBy10(5));



const a = function(arg, arg1){
    const b = arg;

    return function(){
        console.log(b);     
    }
}


const newF = a(10)