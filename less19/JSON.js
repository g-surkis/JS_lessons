const dog = {
  name: 'Mango',
  age: 3,
  isHappy: true,
};

const arr = ['str1', 'str2', 'str3']

const dogJSON = JSON.stringify(dog);
console.log('dogJSON: ', dogJSON);
//   const arrJSON = JSON.stringify(arr);



const dogJSON2 = JSON.parse(dogJSON);
console.log('dogJSON2: ', dogJSON2);
