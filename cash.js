function cashFunction(fn) {
    const cash = {};
    return function (n) {
        if (cash[n]) {
            console.log('Take from cash', cash[n]);
            return cash[n];
        }
        let result = fn(n);
        console.log('fn calculate = ', result);
        cash[n] = result;
        return result;
    };
}

function fuctorial(n) {
    let result = 1;
    while (n !== 1) {
        result *= n;
        n -= 1;
    }
    return result;
}

const cashFactorial = cashFunction(fuctorial);
cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(3);
cashFactorial(5);


