/* 
#### Task 5 🖥

Дан обьект:

```javascript
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }
```
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

*/

let salaries = {
    andrey1: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199
};
    

function calculate_avgSalary(salaries) {
    
        let  totalSalary=0;
        let count= 0;

        for (let salariesKey in salaries) {
            totalSalary+= salaries[salariesKey];
            count++;
          }

          return totalSalary/count;
    }

    let averageSalary = calculate_avgSalary(salaries);
    console.log("Average Salary is:", averageSalary)





