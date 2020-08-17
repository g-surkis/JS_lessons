const FoodMixin = superclass => class extends superclass {
    eat(food) {
      console.log(`Eating ${food}`);
    }
  
    drink() {
      console.log("Drinking 🍼");
    }
  };


  class Animal {
    constructor(name) {
      this.name = name
    }
  }
  
  class Dog extends FoodMixin(Animal) {
    constructor(...args) {
      super(...args)
    }
  
    bark() {
      console.log("Woff woff!")
    }
  
    haveLunch(food) {
      this.eat(food);
      this.drink();
    }
  }
  
  const jack = new Dog("jack");
  jack.haveLunch("little mouse");


//   Since mixins are just factory functions, we can use several of them:

// const MixinA = superclass => class extends superclass {};
// const MixinB = superclass => class extends superclass {};

// class Base {}
// class Child extends MixinB(MixinA(Base)) {}

// We can also create mixins that extend other mixins, although that creates dependencies so try to not overuse it:

// const MixinA = superclass => class extends superclass {};
// const MixinB = superclass => class extends MixinA(superclass) {};

// class Base {}
// class Child extends MixinB(Base) {}