// Partial application

const multiply = (a, b,) => a * b;

function partial(fn, ...outer) {
  return function (...inner) {
    const res = fn.apply(this, outer.concat(inner));

    return res;
  }
}

const multiply3 = partial(multiply, 3);



console.log(multiply3(7)) // 21