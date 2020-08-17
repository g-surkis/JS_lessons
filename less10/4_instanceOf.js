class Animal {}


const animal = new Animal()

console.log(animal instanceof Animal);


class Rabbit extends Animal {}

let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit); 
console.log(rabbit instanceof Animal); 