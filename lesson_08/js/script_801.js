"use strict"
if (confirm('Почати тестування?')) {

/* 00 
Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

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

// Функція визначає пору року за номером місяця
function getSeason(month) {
   if (month >= 3 && month <= 5) {
      return "Весна"
   } else if (month >= 6 && month <= 8) {
      return "Літо"
   } else if (month >= 9 && month <= 11) {
      return "Осінь"
   } else {
      return "Зима"
   }
}


// Виклик функцій без main()
let month = getMonthNumber()
let season = getSeason(month)

document.write(`номер місяця: ${month} -  Пора року: ${season}`)
}