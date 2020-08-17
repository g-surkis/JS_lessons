
const person = {
    name: 'Robert',
    surname: 'Bush',
    age: 27,
    address: {
        street: 'Shevchenko',
        number: 56
    },
   getName(){
        console.log(this.surname);
    }
}


console.log("name" in person);


