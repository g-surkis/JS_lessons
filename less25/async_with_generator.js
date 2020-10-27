
function asynq(generatorFactory) {
    const generator = generatorFactory();

    return (function resolve(result) {
        if (result.done) {
            return Promise.resolve(result.value);
        }

        return Promise.resolve(result.value)
            .then((ensuredValue) => resolve(generator.next(ensuredValue)))
            .catch((error) => resolve(generator.throw(error)));
    })(generator.next());
}


// function* gen(url) {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json()).then(res => {
//             yield res
//         });
//     // return Promise.resolve(re)
// }

// const res = asynq(gen)
// console.log('res: ', res);

// function* gen(url) {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(resp => resp.json())
//         .then(users => {
//             console.log('users: ', users);
//             yield users;
//         });

// }


// function* fetchUsers() {
//     yield fetch('https://jsonplaceholder.typicode.com/users')
//         .then(resp => resp.json())
//         .then(users => {
//             return users;
//         });
// }



// function runner(genFn) {
//     const itr = genFn();

//     function run(args) {
//         const result = itr.next(args)
//         console.log('result: ', result);

//         if (result.done) {
//             return result.value
//         } else {
//             // return Promise.resolve(result.value).then(run)
//             return result.value.then(run)
//         }
//     }

//     return run()
// }


// const res = runner(gen)
// console.log('res: ', res);


// const usersIt = fetchUsers();
// usersIt.next().value.then(resp => console.log(resp));





// function runner(genFn) {
//     const itr = genFn();

//     function run(args) {
//         const re = itr.next().value.then(resp => {
//             console.log(resp)
//             return resp;
//         });

//         return re
//     }

//     return run()
// }

function* fetchUsers() {
    yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => {
            return users;
        });
}

// const res = runner(fetchUsers)
// console.log('res: ', res);


const res = asynq(fetchUsers)
console.log('res: ', res);
