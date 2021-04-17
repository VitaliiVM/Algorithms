//В двойном цикле пробегаемся по всему массиву и сравниваем по парно елем,если следующий ел меньше чем
//предидущий-меняем их местами,самый большой ел с каждой иттеррацией всплывает на верх
//Сложность алгоритма O(n*n)

const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7];
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j+1] < array[j]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

            }
            count += 1;
        }
    }
    return array;
}

console.log(arr.length);
console.log(bubbleSort(arr));
console.log('Count = ' + count);