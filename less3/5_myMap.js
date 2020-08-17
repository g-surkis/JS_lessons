
const array = [1, 2, 3, 4, 5];

function myMap(array, callback) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i]);
        resultArray.push(result);
    }
    return resultArray;
}


const multiply = function (el) { 
    return el * 2 
}

const abstract = function (el) { 
    return el * el;
}

const result1 = myMap(array, multiply);
const result2 = myMap(array, abstract);


console.log('result: ', result);