// HOF

const a = () => {
  let a = 0;
  const fn = () => {
    a++;
    return a;
  }

  return fn;
}

const res = a();
console.log('res: ', res);


const res1 = res();
console.log('res1: ', res1);


const res2 = res();
console.log('res2: ', res2);