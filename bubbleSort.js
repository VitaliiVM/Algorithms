const arr = require("./utils/arr");
const uniqueArray = [...new Set(arr)];
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

            }
            count += 1;
        }
    }
    return array;
}
console.log(uniqueArray);
console.log(uniqueArray.length);
console.log(bubbleSort(uniqueArray));
console.log('Count = ' + count);