const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};


Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const mango = new Hero('Mango', 1000);
console.log(mango);

mango.gainXp(500);
console.log(mango);



const Warrior = function (name, xp, weapon) {

  Hero.call(this, name, xp);
  this.weapon = weapon;
  this.attack = function () {
    console.log(`${this.name} attacks with ${this.weapon}`);
  };

};

Warrior.prototype = Object.create(Hero.prototype);

Warrior.prototype.constructor = Warrior;


// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// Warrior {name: "Poly", xp: 200, weapon: "sword"}

const poly1 = new Warrior('Poly1', 200, 'sword');
const poly2 = new Warrior('Poly2', 200, 'sword');
const poly3 = new Warrior('Poly3', 200, 'sword');

// console.log(poly); 
console.log(poly1);
console.log(poly2);
console.log(poly3);
// poly.attack(); // Poly attacks with sword




// console.log(poly.gainXp);