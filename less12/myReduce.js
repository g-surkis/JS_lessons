const myReduce = function (list, initialValue, reducer) {
    console.log('list: ', typeof list, list.constructor);
    if (list.length === 0) {
        return initialValue;
    } else {
        const [first, ...rest] = list;
        const updatedAcc = reducer(initialValue, first);
        return myReduce(rest, updatedAcc, reducer);
    }
}


const reducer = function (acc, word) {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}

const countWords = function (wordList) {
    return myReduce(wordList, {}, reducer);
};

const res = countWords(
    'With that in mind, let\'s handle the case where we get to use the given reducer function.'.split(' ')
)

console.log('res: ', res);

