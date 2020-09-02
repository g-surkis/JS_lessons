const input = {
    " ": [5],
    d: [10],
    e: [1],
    H: [0],
    l: [2, 3, 9],
    o: [4, 7],
    r: [8],
    w: [6]
};

const buildString = (o) => {
    const result = [];
    for (let i in o) {
        for (let j of o[i]) {
            console.log(j);
            result[j] = i
        }
        console.log(result);
    }
    return result.join("");
};
const buildString = (o = {}) => {
    const result = [];
    return Object.keys(o).reduce((acc, key) => {
        o[key].forEach(j => { acc[j] = key })
        return acc
    }, []).join('')
};


'Hello world' === buildString(input) && console.log('First Case')
'' === buildString() && console.log("Second Case")