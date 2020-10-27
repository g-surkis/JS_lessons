var argsToArray(args) {
    return Array.prototype.slice.call(args, 0);
}

var partial = function () {
    // Convert the arguments variable to an array
    var args = argsToArray(arguments);

    // Grab the function (the first argument). args now contains the remaining args.
    var fn = args.shift();

    // Return a function that calls fn
    return function () {
        var remainingArgs = argsToArray(arguments);
        return fn.apply(this, args.concat(remainingArgs));
    }
}


var twinkle = function (noun, wonderAbout) {
    return 'Twinkle, twinkle, little ' +
        noun + '\nHow I wonder where you ' +
        wonderAbout;
}

var twinkleBat = partial(twinkle, 'bat', 'are at');
var twinkleStar = partial(twinkle, 'star', 'are');