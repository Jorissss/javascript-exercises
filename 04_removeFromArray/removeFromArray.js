const removeFromArray = function(a, ...vs) {
    const result = [];
    for (i = 0; i < a.length; i++) {
        if (!vs.includes(a[i])) {
            result.push(a[i]);
        }
    }
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
