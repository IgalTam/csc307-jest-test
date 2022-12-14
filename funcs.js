exports.sum = function sum (a,b) {
    return a + b;
}

exports.div = function div (a,b) {
    if(b === 0)
        throw new Error("div by zero");
    return a / b;
}

exports.containsNumbers = function containsNumbers(text) {
    for (let i = 0; i < text.length; i++) {
        if (!isNaN(parseInt((text.charAt(i)))))
            return true;
    }
    return false;
}