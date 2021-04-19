//В первую очередь получаю центральный элемент массива,для этого мне нужно знать
// позицию первого и позицию последнего элемента

const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let count = 0;
function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;//Если эл.небыл найден вернем -1
    while (found === false && start <= end){  //Крутимся в цикле пока не нашли эл или пока начальный и конечный эл не поравнялись
      count += 1;
        middle = Math.floor((start + end) / 2);//Ищем центральный эл.
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;//Тогда останавливаем
        }
        if (item < array[middle]) {//Если эл меньше чем позиция центрального,тогда интересует левая часть массива
            end = middle - 1;//Тогда конечному эл присваиваем позицию центрального
        } else {
            start = middle + 1;//это в случае если искомый эл больше чем центральный
        }

    }
    return position;
}


function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    count += 1;
    if (item === array[middle]) {
        return middle;
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1);
    }else {
        return recursiveBinarySearch(array, item, middle + 1, end);
    }
}
console.log(recursiveBinarySearch(array,12, 0, array.length));
// console.log(binarySearch(array, 12));
console.log('Count = ' + count);
