

function foo() {
    console.log('foo');
}

function bar() {
    setTimeout(foo);
    console.log('bar');
}

function baz() {
    setTimeout(() => console.log('baz'));
}

// function liz() {
//     requestAnimationFrame(() => console.log('liz'));
// }

function rep() {
    Promise.resolve().then(() => console.log('rep'));
}

console.log('start');

foo();
bar();
baz();
// liz();
rep();
console.log('end');



await
await