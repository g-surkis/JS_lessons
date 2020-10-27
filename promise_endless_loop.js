function loop() {
    Promise.resolve().then(loop);
}
setTimeout(() => { console.log(1) }, 0);
loop();