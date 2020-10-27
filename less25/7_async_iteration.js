



// async function logUsers(userIds) {
//     userIds.forEach(async userId => {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         const user = await response.json();
//         arr.push(user)
//         console.log(user);
//     });
// }

// logUsers([1, 2, 3, 4, 5])


// (async () => {
//     for await (let value of logUsers([1, 2, 3, 4, 5])) {
//         console.log(value);
//     }
// })()




// async function asyncLogUsers(userIds) {
//     const results = []
//     for (const userId of userIds) {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         const user = await response.json();
//         results.push(user)
//     }
//     console.log('Done!');
//     return results

// }


// (async () => {

//     const response = await asyncLogUsers([1, 2, 3, 4, 5])
//     console.log('response: ', response);

// })()


    // послідовний цикл
    async (items) => {
        for (let i = 0; i < items.length; i++) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${item}`);
            const user = await response.json();
            return user;
        }
    }

    // відложений цикл
    // const randForTen = async () => {
    //     let results = [];

    //     for (let i = 0; i < 10; i++) {
    //         await timeoutPromise(1000);
    //         results.push(Math.random());
    //     }

    //     return results;
    // }

    // паралельний цикл
    // async (items) => {
    //     let promises = [];

    //     for (let i = 0; i < items.length; i++) {
    //         promises.push(db.get(items[i]));
    //     }

    //     const [dbRes, dbRes2, apiRes] = await Promise.all([0, 1, 2]);
    //     console.log(results);
    // }

    // async function getU(items) {
    //     const promises = items.map(async (item) => {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${item}`);
    //         const user = await response.json();
    //         return user;
    //     });
    //     const results = await Promise.all(promises);
    //     console.log(results);
    // }


    // (async () => {
    //     getU([1, 2, 3, 4, 5])
    // })()

    // -------------------

    // reduce

    // (async () => {
    //     // const sleep = (n) => new Promise((res) => setTimeout(res, n));
    //     const arr = [1, 2, 3];

    //     const asyncRes = await arr.reduce(async (acc, item) => {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${item}`);
    //         console.log('memo: ', acc);

    //         const user = await response.json();

    //         return [...await acc, user];

    //     }, []);

    //     console.log(asyncRes);

    // })()