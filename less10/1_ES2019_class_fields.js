class MyClass {
    a = 1;
    b = 2;
    c = 3;  
  }

  class MyNewClass extends MyClass {
  }

  const instance = new MyNewClass()
  console.log('instance: ', instance);
