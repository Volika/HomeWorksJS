"use strict"
if (confirm('Почати тестування?')) {

/* 07
Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
1)	за весь рік;
2)	у першій половині року;
3)	у другій половині року;
4)	за літо;
5)	за ІІ квартал;
6)	за парні місяці (з парними номерами);
7)	за місяці, які є початковими у сезоні (весна, літо, осінь, зима).                    
*/
// Функція генерує випадкові платежі на кожен місяць (від 1000 до 10000 грн)
function generatePayments() {
   let payments = []
   for (let i = 0; i < 12; i++) {
       payments.push(Math.floor(Math.random() * 9001) + 1000) // Випадкове число від 1000 до 10000
   }
   return payments
}

// Функція підраховує загальну суму платежів у вказаних місяцях
function sumPayments(payments, start, end) {
   let sum = 0
   for (let i = start; i < end; i++) {
      sum += payments[i]
   }
   return sum
}

// Функція підраховує платежі за парні місяці
function sumEvenMonths(payments) {
   let sum = 0
   for (let i = 1; i < payments.length; i += 2) { 
      // Починаємо з другого місяця (індекс 1)
      sum += payments[i]
   }
   return sum
}

// Функція підраховує платежі за початкові місяці сезонів (березень, червень, вересень, грудень)
function sumSeasonStartMonths(payments) {
   let seasonMonths = [2, 5, 8, 11] 
   // Індекси березень (3-й), червень (6-й), вересень (9-й), грудень (12-й)
   let sum = 0
   for (let i = 0; i < seasonMonths.length; i++) {
      sum += payments[seasonMonths[i]]
   }
   return sum
}

// Генеруємо випадкові платежі на кожен місяць року
let payments = generatePayments()

// Підраховуємо необхідні суми
let totalYear = sumPayments(payments, 0, 12) 
let firstHalf = sumPayments(payments, 0, 6) 
let secondHalf = sumPayments(payments, 6, 12) 
let summer = sumPayments(payments, 5, 8) 
let secondQuarter = sumPayments(payments, 3, 6) 
let evenMonths = sumEvenMonths(payments) 
let seasonStartMonths = sumSeasonStartMonths(payments) 

// Виводимо результати
document.write(`Платежі по місяцях:<br> <hr>`)
for (let i = 0; i < payments.length; i++) {
   document.write(`Місяць ${i + 1}: ${payments[i]} грн<br>`)
}
document.write(`<br> <hr> `)
document.write(`Сумарні платежі:<br> <hr>`)
document.write(`За весь рік: ${totalYear} грн<br>`)
document.write(`У першій половині року: ${firstHalf} грн<br>`)
document.write(`У другій половині року: ${secondHalf} грн<br>`)
document.write(`За літо: ${summer} грн<br>`)
document.write(`За ІІ квартал: ${secondQuarter} грн<br>`)
document.write(`За парні місяці: ${evenMonths} грн<br>`)
document.write(`За початкові місяці сезонів: ${seasonStartMonths} грн<br>`)

// document.write(`<br> <hr> `)

}