// Веб - Воркер - це потоки, що належать браузеру, які можна використовувати для виконання JS - коду без блокування циклу подій.
// start Live Server
let worker;
function testWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (worker) == "undefined") {
            worker = new Worker("worker.js");
            console.log('worker: ', worker);
        }
        worker.onmessage = function (event) {
            document.getElementById("workerOutput").innerHTML = event.data;
        };
    } else {
        document.getElementById("workerOutput").innerHTML = "Web Workers are not supported in your browser";
    }
}

function terminateWorker() {
    worker.terminate();
    worker = undefined;
}

function testMainThread() {
    for (var i = 0; i < 200000; i++) {
        console.log('i: ', i);
        document.getElementById("mainThreadOutput").innerHTML = "Main Thread Counter: " + i;
    }
}



// Візуалізація тривимірних сцен
// Шифрування
// Попереднє завантаження даних
// Прогресивні веб - додатки
// Перевірка правопису