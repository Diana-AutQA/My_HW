/* 

#### Task 1 💻

Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 
------------------------------------------

*/
type ICate={
    nameCate : string,
    age ?: number,

}

const cat : ICate = { 
nameCate : "Myau",
age: 5,
}

console.log(cat)
delete cat.age 
console.log(cat)