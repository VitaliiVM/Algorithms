//Сортировка выбором
//Есть массив неупорядоченных эл,пробегаемся по нему и ищем минимальный,затем меняем местами с первым эл,
//затем опять проход по массиву и поиск минимального эл,но меняем уже со вторым и тд...
//Среди эл вложенного цикла будет находится минимальный и он будет заменять эл из внешнего цикла
//Внутренний цикл начинается индекса внешнего цикла +1,если эл был заменен то рассматривать
//еще раз его нам уже ненадо
//Сложность алгоритма O(n*n)

const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7] // [0,1,1,2,3.......]
let count = 0;
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[indexMin]) {
                indexMin = j;//Тоесть за полный проход по массиву мы должны найти мин число
            }
            count += 1;
        }
        let tmp = array[i];
        array[i] = array[indexMin];//Меняем два эл местами
        array[indexMin] = tmp;
    }
    return array;
}
console.log(selectionSort(arr));
console.log('Count = ' + count);
