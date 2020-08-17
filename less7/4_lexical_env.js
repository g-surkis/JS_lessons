const { func } = require('./lexical_mock');

const test = () => {
    const res = func();
    console.log(res);
}

test();