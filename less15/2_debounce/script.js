
const list = document.querySelector('#debounceBtn');

// const debounce = (func, delay) => {    
//     let inDebounce
//     return function() {
//       const context = this
//       const args = arguments
//       clearTimeout(inDebounce)

//       inDebounce = setTimeout(() => func.apply(context, args), delay)
//     }
//   }


// function debounce(f, ms) {

//     let isCooldown = false;  
//     return function() {
//       if (isCooldown) return;  
//       f.apply(this, arguments);  
//       isCooldown = true;  
//       setTimeout(() => isCooldown = false, ms);
//     };

//   }


//   debounceBtn.addEventListener('click', debounce(function() {
//       console.info('Hey! It is', new Date().toUTCString());
//     }, 3000));


const throttle = (func, limit) => {
  let inThrottle
  return function () {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// const throttle = (func, limit) => {
//   let lastFunc
//   let lastRan
//   return function() {
//     const context = this
//     const args = arguments
//     if (!lastRan) {
//       func.apply(context, args)
//       lastRan = Date.now()
//     } else {
//       clearTimeout(lastFunc)
//       lastFunc = setTimeout(function() {
//         if ((Date.now() - lastRan) >= limit) {
//           func.apply(context, args)
//           lastRan = Date.now()
//         }
//       }, limit - (Date.now() - lastRan))
//     }
//   }
// }


debounceBtn.addEventListener('click', throttle(function () {
  return console.log('Hey! It is', new Date().toUTCString());
}, 1000));