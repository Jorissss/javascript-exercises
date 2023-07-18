const sumAll = function(x, y) {
    if (typeof(x) != "number" || typeof(y) != "number") {
        return "ERROR"
    }
    if (y < x) {
        const temp = x;
        x = y;
        y = temp;
    }

    if (x < 0) {
        return "ERROR";
    }

    var sum = 0;
    for (i = x; i <= y; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
