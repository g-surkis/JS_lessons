const bar = function () {
  console.log('bar');
};

const baz = function () {
  console.log('baz');
  bar();
};

const foo = function () {
  console.log('foo before bar');
  bar();
  console.log('foo before baz');
  baz();
  console.log('foo end');

};

foo();