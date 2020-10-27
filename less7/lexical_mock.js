
const a = 5;
const b = 12;

const plus = (first, second) => {
    return first + second
}

const func = () => {
    console.log(this);
    return plus(a, b)
}

module.exports = { func }