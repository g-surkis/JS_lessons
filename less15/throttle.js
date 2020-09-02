// https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf

const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }


  throttleBtn.addEventListener('click', throttle(function() {
    return console.log('Hey! It is', new Date().toUTCString());
  }, 1000));


//   But what about our last call? If it’s in the limit period it’s ignored and what if we don’t want that? For example, if we bound to mouse movement for a resize and missed the last call we’d never get the desired result. We need to catch this and execute it after the limit period (Thanks to worldwar for questioning the previous implementation which didn’t always work 100% as expected).
const throttle = (func, limit) => {
  let lastFunc
  let lastRan
  return function() {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}