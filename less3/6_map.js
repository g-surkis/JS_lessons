// https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Map

// const a = [1, 2, 3, 4, 5, 155]

// delete a[2];


// console.log('a: ', a, a.length);

// new Map() //– создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.


// const users = new Map();

// users.set('user1', 'Robert')
// users.set('user2', 'patrick')



// console.log('users: ', users);

// users.delete('user1')


// console.log('users: ', users);



// Перебор Map
// Для перебора коллекции Map есть 3 метода:

// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.


// let recipeMap = new Map([
//     ["cucumber", 500],
//     ["tomato", 350],
//     ["potato", 50]
// ]);


// console.log('recipeMap.keys(): ', recipeMap.values());

// for (let vegetable of recipeMap.keys()) {    
//     alert(vegetable);
// }

// for (let amount of recipeMap.entries()) {
//     console.log('amount: ', amount);
    
// }


// for (let entry of recipeMap) { 
//     console.log('amount: ', entry);
// }



// Object.entries: Map из Object
// При создании Map мы можем указать массив (или другой итерируемый объект) с парами ключ-значение для инициализации, как здесь:

// // массив пар [ключ, значение]
// let map = new Map([
//   ['1',  'str1'],
//   [1,    'num1'],
//   [true, 'bool1']
// ]);

// alert( map.get('1') ); // str1
