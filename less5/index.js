
// const key = 'value';

const person = {
  name: 'Robert',
  surname: 'Bush',
  age: 27,
  address: {
    street: 'Shevchenko',
    number: 56
  },
  getName() {
    console.log(this.surname);
  }
}

// person.getName()


const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

hotel.getHotel = person.getName;
//   console.log('hotel: ', hotel);


hotel.getHotel();


//   hotel.greetInES5(); // Welcome!
//   console.log('hotel: ', hotel);
//   hotel.greetInES6(); // Welcome!


// console.log(this);

// const func = function investigateThis(){
//     console.log('--------',this);
// }


// func()


// }
// let user = {
//     name: "Джон",
//     age: 30,

//     sayHi() {
//       // this - это "текущий объект"
//       console.log(this.name);
//     }

//   };

//   user.sayHi(); // Джон