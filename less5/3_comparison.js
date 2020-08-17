// Обєкти рівні один одному тільки тоді якщо це оди і той же обєкт


const obj = {
    name: 'Piter'
}

const obj2 = {
    name: 'Robert'
}

const obj3 = obj;

console.log(obj === obj1);
console.log(obj === obj2);