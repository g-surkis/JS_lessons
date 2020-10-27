function TestPistons() {
  this.action = () => log("The test pistons do nothing.");
  log("Made some test pistons.");
}

function Engine(pistons) {
  this.pistons = pistons;
  this.action = () => {
    this.pistons.action();
    log("The engine goes vroom vroom.");
  };
  log("Made an engine.");
}

function Car(wheels, engine) {
  this.wheels = wheels;
  this.engine = engine;
  this.action = () => {
    this.wheels.action();
    this.engine.action();
    log("The car drives by.");
  }
  log("Made a car.");
}

var pistons = new Pistons();
var testPistons = new TestPistons();
var wheels = new Wheels();
var engine = new Engine(pistons);
var testEngine = new Engine(testPistons);
var car = new Car(wheels, engine);
car.action();
testEngine.action();