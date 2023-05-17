/* Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
+ строку
+ значение от
+ значение по
После вызова функция должна вернуть переданную строку обрезанную по значениям от и по 
*/

//----------------------------------------------------------------------------------------
function trimString(str:string,from:number,to:number):string { 

    let cutSrt=str.slice(from,to)
    return cutSrt;
}

let result1=trimString("lovely_day",0,4)
console.log(result1)