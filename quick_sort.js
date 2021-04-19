//O(log2n * n)
//Алгоритм работает по принципу разделяй и властвуй.Суть в том что мы делим массив на подмассивы и каждый раз
//рекурсивно
//Выбираем опорный елемент у каждого массива(можно выбрать случайно)центральный,пробегаемся по массиву,
//все ел,которые меньше чем опорный-добавляем в один массив,который больше-в другой...
//Для каждого из этих подмассивов выполняется точно такая же операция,и так будет до тех пор пока длинна массива не
//станет 1-именно это условие и будет базовым случаем выхода из рекурсии...

const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7];
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);//центральный ел..
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}
console.log(quickSort(arr));
console.log( "Count: " + count);
