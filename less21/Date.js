// const date = Date.now();

const { timeStamp } = require("console");


console.log('date: ', date);

const date = new Date();
console.log(date);


const date = new Date(2000, 0, 8, 12, 0, 0, 0);
const date = new Date(timeStamp, 'DD-MMM-YYYY');

// // Індекси місяців починаються з 0, тому 5-й місяць це липень.
// console.log(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);


let date = new Date();

// формат виведення
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
// };

// // Україна
// const localeUk = date.toLocaleString('Uk-uk', options);
// console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42

// // USA
// const localeUs = date.toLocaleString('en-US', options);
// console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM



console.log(date.toString(), '----', date.toDateString(), '----', date.toTimeString());