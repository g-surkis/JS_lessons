// https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Set

// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

// Его основные методы это:

// new Set(iterable) 
// – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.


const set = new Set();

set.add(5);
set.add(145);
set.add(45);
console.log('set: ', set);


set.add(5);


console.log('set: ', set);


// const arr = [2,3,5,6,2,3];


// const res = new Set(arr)
// console.log('res: ', res);