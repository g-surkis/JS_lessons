


const Singleton = (function () {
  let instance = null;

  function Singleton() {
    if (instance) return instance;
    const instance = new WebSocket(`ws://127.0.0.1:5656?id=${id}`);
  }

  return Singleton;
})();

const instance1 = new Singleton()
const instance2 = new Singleton()

console.log(instance1 === instance1);