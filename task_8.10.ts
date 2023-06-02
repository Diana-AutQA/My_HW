/*Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3. Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee', а если нет второго - в переменную elem2 запишите значение 'bbb'. Первый элемент никуда записывать не надо.

> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.*/


const array = ['a', 'b', 'c', 'd'];

function processArray(arr) {
  let elem2;
  let elem3;

  if (arr.length >= 2) {
    elem2 = arr[1];
  } else {
    elem2 = 'bbb';
  }

  if (arr.length >= 3) {
    elem3 = arr[2];
  } else {
    elem3 = 'eee';
  }

  return [elem2, elem3];
}

const [elem2, elem3] = processArray(array);
console.log(elem2); 
console.log(elem3); 