// The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
// Each subsequent number is the sum of the previous two.



const fibonacci_series = function (n) {
        if (n === 1) {
        return [0, 1];
    }
    else {
        const s = fibonacci_series(n - 1);        
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fibonacci_series(8));

// fibonacci_series(8)

