/* 
#### Task 3 🖥

Дан обьект:

```javascript
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
```

C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта. 
*/


    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }

    for (const studentKey in student ){
         console.log(studentKey);
         console.log(student [studentKey]);
    }

//-------------------------------------

for (const studentKey in student ){
    console.log(`Key is ${studentKey}`);
    console.log(`Key is ${student[studentKey]}`);
}
//---------------------------------------------