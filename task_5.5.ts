/*#### Task 5 💻

  Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, 
- найти сумму всех чисел между ними, включая их, и вернуть ее. 
- Если два числа равны, верните a или b.

```
    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2 
    */
   //---------------------------------------------------------------------------------------------------------------------------

   function getSum1 (a:number,b:number):number {
       
    if (a === b) {
        console.log ("два числа равны", a)
        return a;
        }

        let sum =0;
        for (let i = a; i <= b; i++) {
            sum += i;
          }
   
    return sum;
   }

     //let result3= getSum1(115,202)
    // let result3= getSum1(5,5)
    // let result3= getSum1(5,-5)
    // let result3= getSum1(-1,2)
     let result3= getSum1(-1, 0) 
   console.log(result3)