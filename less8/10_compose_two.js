// compose always works with single argument functions

var composeTwo = function(funcA, funcB) {
    return function(x) {
        return funcA(funcB(x));
    }
}

var nohow = function(sentence) {
    return sentence + ', nohow!';
}
var contrariwise = function(sentence) {
    return sentence + ' Contrariwise…';
}

var statement = 'Not nothin&amp;rsquo;';
var nohowContrariwise = composeTwo(contrariwise, nohow);
console.log(nohowContrariwise(statement));
