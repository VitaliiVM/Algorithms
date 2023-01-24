const arr = require("./utils/arr");
const uniqueArray = [...new Set(arr)];
let count = 0;
const selectionSort = (inputArr) => {
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        count += 1;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    return inputArr;
};

console.log(selectionSort(uniqueArray));
console.log('Count = ' + count);
