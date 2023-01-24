const arr = require("./utils/arr");// [0,1,1,2,3.......]
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[indexMin]) {
                indexMin = j;
            }
        }

        [array[i], array[indexMin]] = [array[indexMin], array[i]];
    }

    return array;
}

console.log(selectionSort(arr));
console.log('Count = ' + count);
