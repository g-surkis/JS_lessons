// Звичайні функції повертають тільки одне - єдине значення(або нічого).

// Генератори можуть породжувати(yield) безліч значень одне за іншим, 
// у міру необхідності. Генератори відмінно працюють з перебираючими об'єктами 
// і дозволяють легко створювати потоки даних.

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// const generator = generateSequence();
// console.log(generator); // [object Generator]



// const one = generator.next();
// console.log('one: ', one);

// const two = generator.next();
// console.log('two: ', two);

// const three = generator.next();
// console.log('three: ', three);


// Як ви, напевно, вже здогадалися за наявністю методу next(), генератори є ітеруючими об'єктами.

// for (let value of generator) {
//     console.log(value);
// }




// for..of ігнорує останнє значення, при якому done: true. Тому, якщо ми хочемо, 
// щоб були всі значення при переборі через for..of, то треба повертати їх через yield:


// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator = generateSequence();


// for (let value of generator) {
//     console.log(value);
// }


// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let sequence = [0, ...generateSequence()];

// console.log(sequence);



// let range = {
//     from: 1,
//     to: 5,

//     *[Symbol.iterator]() {
//         for (let value = this.from; value <= this.to; value++) {
//             yield value;
//         }
//     }
// };

// console.log([...range]);


// let range = {
//     from: 1,
//     to: 5,

//     *() {
//         for (let value = this.from; value <= this.to; value++) {
//             yield value;
//         }
//     }
// };

// console.log([...range]);



// yield - дорога в дві сторони

// function* gen() {
//     let ask1 = yield "2 + 2 = ?";
//     console.log(ask1);

//     let ask2 = yield "3 * 3 = ?"

//     console.log(ask2);
// }

// let generator = gen();

// console.log(generator.next().value); // "2 + 2 = ?"

// console.log(generator.next(4).value); // "3 * 3 = ?"

// console.log(generator.next(9).done); // true


// const generator = (function* () {
//     // waiting for .next()
//     const a = yield 5;
//     // waiting for .next()
//     console.log(a); // => 15
// })();

// console.log(generator.next()); // => { done: false, value: 5 }
// console.log(generator.next(15)); // => { done: true, value: undefined }