/* 

#### Task 2 🖥

Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

*/

const employee = {
    name : "Tom ",
    profession: 'QA' ,
 
 };

 console.log("name" in employee )// true
 console.log("age" in employee ) // false