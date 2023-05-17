/* Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

+ процентная ставка в год — 17%,
+ количество лет — 5.

> Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

*/

function calculateOverpayment (loanAmount:number):number { 

    let interestRate=0.17;
    let paymentYears= 5;
    
    const overpayment =((loanAmount* interestRate)*paymentYears);

    return overpayment;
}

let result = calculateOverpayment (300.000)
console.log ("calculation's  result of the overpayment:", result)
