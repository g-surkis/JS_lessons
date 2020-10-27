
String.prototype.firstUpper = function () {
    return this[0].toUpperCase() + this.slice(1)
}


const res = 'dsa'.firstUpper()
console.log('res: ', res);


