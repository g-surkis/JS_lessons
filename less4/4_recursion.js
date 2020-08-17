// рекурсія


function sumFromZeroToNumber(num) {
    const res =  num ? num + sumFromZeroToNumber(num - 1) : num;
    return res;
}

console.log(sumFromZeroToNumber(3));

// напишіть таку ж для діапазону двох чисел