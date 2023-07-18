const repeatString = function(s, n) {
    if (n < 0) {
        return "ERROR";
    }
    if (n == 0) {
        return "";
    }
    return s + repeatString(s, n - 1);
    

};

// Do not edit below this line
module.exports = repeatString;
