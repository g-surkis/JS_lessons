const { rejects } = require("assert");
const { METHODS } = require("http");
// // https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke#tasks

const { resolve } = require("path");



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('lol')
    }, 1000)
});

console.log('promise: ', promise);


promise
    .then((res) => {
        console.log('res: ', res);
        return res
    })
    .then((res) => {
        console.log('res: NEXT', res);
    })
    .catch((err) => {
        console.log('err: ', err);
    })


// console.log('___________')





// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5);
//     }, 2000);
//   });

//   promise
//     .then(value => {
//       console.log(value); // 5
//       return value * 2;
//     })
//     .then(value => {
//       console.log(value); // 10
//       return value * 3;
//     })
//     .then(value => {
//       console.log(value); // 30
//     })
//     .catch(error => {
//       console.log(error);
//     });



// let loadScriptPromise = function(src) {
//     return new Promise((resolve, reject) => {
//       loadScript(src, (err, script) => {
//         if (err) reject(err)
//         else resolve(script);
//       });
//     })
//   }






//   loadScriptPromise.then(()=>{

//   })
//   .catch()

const array = [1, 21, 2, 31, 231, 21, 1, 1, 115, 1, 5, 42, 21]

const pow = (el) => el * el;

function mymap(arr, callback) {
    const resultArray = [];
    for (let index = 0; index < arr.length; index++) {
        resultArray.push(callback(arr[index], index));
    }
    return resultArray;
}

const callFn = (res) => {
    // console.log('res: ', res);
}


// function getResult(arr, callback) {
//     return callback(mymap(arr, pow))
// }


function getResult(arr, callback) {
    return new Promise((resolve, rejects) => {
        const newArr = mymap(arr, pow);
        callback(newArr)
        resolve(newArr)
    })
}

const promise = getResult(array, callFn);


promise
    .then((res) => {
        console.log('res: ', res);
    });


console.log('after work');
