
function minCoinChange(coins, amount) {
    const cache = [];
    const makeChange = (value) => {
        if (!value) {
            return [];
        }
        if (cache[value]) {
            return cache[value];
        }
        let min = [];
        let newMin;
        let newAmount;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            newAmount = value - coin;
            if (newAmount >= 0) {
                newMin = makeChange(newAmount);
            }
            if (
                newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length) &&
                (newMin.length || !newAmount)
            ) {
                min = [coin].concat(newMin);
                console.log('new Min ' + min + ' for ' + amount);
            }
        }
        return (cache[value] = min);

    };
    return makeChange(amount);
}



function minCoinChange(coins, amount) {
    const change = [];
    let total = 0;
    for (let i = coins.length - 1; i >= 0; i--) {
        const coin = coins[i];
        while (total + coin <= amount) {
            change.push(coin);
            total += coin;
        }
    }
    return change;
}



const change = minCoinChange([1, 2, 10, 25, 50], 100)
console.log('change: ', change);