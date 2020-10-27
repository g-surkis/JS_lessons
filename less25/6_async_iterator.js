let range = {
    from: 1,
    to: 5,

    // for await..of викликає цей метод один раз на самому початку
    [Symbol.asyncIterator]() {
        // ... повертає об'єкт-ітератор:
        // далі for await..of працює тільки з цим об'єктом,
        // запитуючи у нього такі значення викликом next ()
        return {
            current: this.from,
            last: this.to,
            async next() {
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};



(async () => {

    for await (let value of range) {
        console.log(value);
    }

})()