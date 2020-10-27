const checkRequestAnimationDiff = () => {
    let prev;
    function call() {
        requestAnimationFrame((timestamp) => {
            if (prev) {
                console.log(timestamp - prev); // Должно быть в районе 16.6 мс, при 60FPS
            }
            prev = timestamp;
            call();
        });
    }
    call();
}
checkRequestAnimationDiff();