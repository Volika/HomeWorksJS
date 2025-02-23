"use strict"
if (confirm('Почати тестування?')) {

/* 02
   Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.                     
*/

// Функція отримує номер дня від користувача
function getDayNumber() {
   let day = prompt("Введіть номер дня (1-7):", "1")
   day = parseInt(day)

   if (day < 1 || day > 7 || isNaN(day)) {
       day = 1 // Якщо число не в межах 1-7, замінюємо на 1
      document.write(`Введено некоректне значення, Присвоєно номер - 1 <br>`)

   }

   return day
}

// Функція перевіряє, чи день є робочим
function isWorkday(day) {
   return day >= 1 && day <= 5 
}

// Функція виводить результат
function displayResult(isWorkday) {
   if (isWorkday) {
      document.write("Це робочий день")
   } else {
      document.write("Це вихідний день")
   }
}

// Виклик функцій без main()
let day = getDayNumber()
document.write(`Введено - ${day} <br>`)
let workday = isWorkday(day)
displayResult(workday)


}