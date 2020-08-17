

// Напишіть програму яка виводить числа від 1 до 100.
// Для чисел які діляться без залишку на 3(але не на 5) виведіть "Fizz" 
// а для чисел які діляться без залишку на 5 (але не на 3) - "Buzz"
// для чисел які одночасно діляться на 3 і на 5 - "FizzBuzz"



console.time('2')
for (let index = 0; index <= 100; index++) {

    const fizz = index % 3 === 0 && index % 5 !== 0;
    const buzz = index % 3 !== 0 && index % 5 === 0;
    const fizzBuzz = index % 3 === 0 && index % 5 === 0;

    if (fizz) console.log('Fizz');
    if (buzz) console.log('Buzz');
    if (fizzBuzz) console.log('FizzBuzz');
    if (!fizz && !buzz && !fizzBuzz) console.log(index);}
console.timeEnd('2')

console.time('1')
for (let index = 0; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 !== 0) {
        console.log('Fizz');
    }
    else if (index % 3 !== 0 && index % 5 === 0) {
        console.log('Buzz');
    } else if (index % 3 === 0 && index % 5 === 0) {
        console.log('FizzBuzz');
    } else {
        console.log(index);
    }
}
console.timeEnd('1')




// const res1 = prompt('dfdjfgdf');
// console.log('res: ', res1);