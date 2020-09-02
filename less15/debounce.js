// https://learn.javascript.ru/call-apply-decorators#tasks

// We are passing a function(func) and a delay(delay) into the debounce function. inDebounce is a variable that we use to track the delay period.
// If we are invoking for the first time, our function will execute at the end of our delay. If we invoke and then invoke again before the end of our delay, the delay restarts. It’s much easier to understand by reading the code and playing with the demo 😉.

//   const debounce = (func, delay) => {
//   let inDebounce
//   return function() {
//     const context = this
//     const args = arguments
//     clearTimeout(inDebounce)
//     inDebounce = setTimeout(() => func.apply(context, args), delay)
//   }
// }

function debounce(f, ms) {
  
  let isCooldown = false;

  return function() {
    if (isCooldown) return;
    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}


debounceBtn.addEventListener('click', debounce(function() {
    console.info('Hey! It is', new Date().toUTCString());
  }, 3000));