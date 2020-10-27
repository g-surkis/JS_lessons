

const timerId = setInterval(sayHello, 1000);


function sayHello() {
  console.log('Hello!');
  count++;
  console.log('count: ', count);

  if (count > 10) {
    clearTimeout(timerId);
  }
}


const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise('promiseA', 1000);
const promiseB = makePromise('promiseB', 3000);




//   const arr = Promise.all([promiseA, promiseB])
//     .then(result => console.log(result)) //["promiseA", "promiseB"]
//     .catch(err => console.log(err));





// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(text), delay);
//     });
//   };

//   const promiseA = makePromise('promiseA', 4000);
//   const promiseB = makePromise('promiseB', 3000);


//   Promise.race([promiseA, promiseB])
//     .then(result => console.log(result))
//     .catch(err => console.log(err));




const getMessage = function () {
  const input = 'Введіть повідомлення';

  return Promise.finally(input);
};

const logger = message => console.log(message);

getMessage().then(message => logger(message));

// Або ще коротше
getMessage().then(logger);


Promise.finally('sdsd');