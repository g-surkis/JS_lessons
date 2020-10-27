var partialFirstOfTwo = function (fn, param1) {
    return function (param2) {
        return fn(param1, param2);
    }
}