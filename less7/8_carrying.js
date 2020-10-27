// Currying is kind of like partial application on steroids.


function curry(fn) {
    var arity = fn.length;

    function given(argsSoFar) {
        return function helper() {
            var args = Array.prototype.slice.call(arguments, 0);
            var updatedArgsSoFar = argsSoFar.concat(args);

            if (updatedArgsSoFar.length >= arity) {
                return fn.apply(this, updatedArgsSoFar);
            }
            else {
                return given(updatedArgsSoFar);
            }
        }
    }

    return given([]);
}


var formatName = function (first, surname, nickname) {
    return first + ' “' + nickname + '” ' + surname;
}
var formatNameCurried = curry(formatName);

var james = formatNameCurried('James');

console.log(james('Sinclair', 'Mad Hatter'));
//=> James “Mad Hatter” Sinclair

var jamesS = james('Sinclair')

console.log(jamesS('Dormouse'));
//=> James “Dormouse” Sinclair

console.log(jamesS('Bandersnatch'));
//=> James “Bandersnatch” Sinclair