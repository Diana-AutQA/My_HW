/* #### Task 4 💻

Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.

> Для 2021 это будет 5. */

//--------------------------------------------------------------------------------------------------------------------

function getSumNumbers(num: number): number {
    
    let sum = 0;
   
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
      return sum;
    }

const result2 = getSumNumbers(2023);
console.log(result2); // Выведет 5