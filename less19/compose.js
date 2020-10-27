import compose from "lodash/fp/compose"

export const EatMixin = superclass => class extends superclass {
  eat(food) {
    console.log(`Eating ${food}`);
  }
};

export const PoopMixin = superclass => class extends superclass {
  poop() {
    console.log("Going to 💩");
  }
};

export const FlyMixin = superclass => class extends superclass {
  fly() {
    console.log("Flying for real!");
  }
};


class Animal {
  constructor(name) {
    this.name = name
  }
}

const SuperPoweredDog = compose(EatMixin, PoopMixin, FlyMixin)(Animal);


class Dog extends SuperPoweredDog {
  bark() {
    console.log("Woff woff!")
  }

  haveLunch(food) {
    this.eat(food);
    this.poop();
  }
}

const jack = new Dog("jack");
jack.bark(); // Woff woff!
jack.haveLunch("little mouse"); // Eating little mouse. Going to 💩