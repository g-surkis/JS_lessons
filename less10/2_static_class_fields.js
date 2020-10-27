class MyClass {

  x = 1;
  y = 2;
  static z = 3;

}

console.log(MyClass.z); // 3


//   This is equivalent to:

class MyClass2 {

  constructor() {
    this.x = 1;
    this.y = 2;
  }

}

MyClass2.z = 3;

console.log(MyClass2.z); // 3