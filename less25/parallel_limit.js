
const parallelLimit = async (funcList, limit = 3) => {
    let inFlight = new Set();

    return funcList.map(async (func, i) => {

        console.log('inFlight.size: ', inFlight);
        //  Придерживаем цикл, другим циклом
        //  пока следующий промис решается
        while (inFlight.size >= limit) {
            console.log('(inFlight.size: ', inFlight.size);
            await Promise.race(inFlight);
        }

        console.log(`STARTING ROUND->${i} SIZE->${inFlight.size}`);

        const promise = func();
        // Add promise to inFlight Set
        inFlight.add(promise);
        //  Добавляем промис inFlight Set
        await promise;
        inFlight.delete(promise);
    });
};


(async () => {
    const timeoutPromise = (timeout) => {
        return new Promise((resolve) => setTimeout(resolve, timeout));
    };
    const waitTwoSeconds = async () => await timeoutPromise(Math.random() * (3000));

    const promises = await parallelLimit([
        waitTwoSeconds,
        waitTwoSeconds,
        waitTwoSeconds,
        waitTwoSeconds,
        waitTwoSeconds,
        waitTwoSeconds,
        waitTwoSeconds,
        waitTwoSeconds
    ], 3);

    await Promise.all(promises);
    console.log("DONE");
})();