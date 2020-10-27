// const arr = [1, 2, 3, 4, 5];

// for (const item of arr) {
//     // IDE named each element as iterator
//     console.log('item: ', item);
// }


// -----------------------------------


// let range = {
//     from: 1,
//     to: 5
// };


// range[Symbol.iterator] = function () {
//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// };


// console.log(range);

// for (let num of range) {
//     console.log(num); 
// }

// ----------------------------------


// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },

//     next() {
//         if (this.current <= this.to) {
//             return { done: false, value: this.current++ };
//         } else {
//             return { done: true };
//         }
//     }
// };

// for (let num of range) {
//     console.log(num);
// }


// -------------------------------------


// let line = "Hello World";


// let iterator = line[Symbol.iterator]();

// while (true) {
//     let result = iterator.next();
//     if (result.done) break;
//     console.log(result.value);
// }



// Ітеруючі об'єкти - це об'єкти, які реалізують метод Symbol.iterator, 
// як було описано вище.
// Псевдомасиви - це об'єкти, які мають індекси і властивість length, тобто, 
// вони виглядають як масиви.


// робить з ітеруючих обєктів масиви
// let arr = Array.from(range);

// Повний синтаксис Array.from дозволяє вказати необов'язкову «трансформуючу» функцію:

// Array.from(obj[, mapFn, thisArg])