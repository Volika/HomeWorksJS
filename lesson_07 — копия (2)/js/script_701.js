"use strict"
if (confirm('Почати тестування?')) {

/* 01
Створити функцію, яка за номером місяця повертає його назву.
*/
// Функція отримує номер місяця від користувача
function getMonthNumber() {

   let month = parseInt(prompt("Введіть номер місяця (1-12):", "1"))

   if (month < 1 || month > 12 || isNaN(month)) {

      month = 1 // Якщо число не в межах 1-12, замінюємо на 1
      document.write(`Введено некоректне значення, Присвоєно номер - ${month} <br>`)
   }
   return month
}

function getMonthName(month) {
   switch (month) {
      case 1: return "Січень"
      case 2: return "Лютий"
      case 3: return "Березень"
      case 4: return "Квітень"
      case 5: return "Травень"
      case 6: return "Червень"
      case 7: return "Липень"
      case 8: return "Серпень"
      case 9: return "Вересень"
      case 10: return "Жовтень"
      case 11: return "Листопад"
      case 12: return "Грудень"
   }
}


let month = getMonthNumber()
let monthName  = getMonthName(month)

document.write(`номер місяця: ${month} -  назва: ${monthName }`)
}