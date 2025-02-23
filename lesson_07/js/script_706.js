"use strict"
if (confirm('Почати тестування?')) {

/* 06
Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

*/

// Функція отримує кількість рядків від користувача
function getRowCount() {
   return parseInt(prompt("Введіть кількість рядків:", "3")) || 1
}

// Функція отримує кількість стовпців від користувача
function getColumnCount() {
   return parseInt(prompt("Введіть кількість стовпців:", "3")) || 1
}

// Функція отримує повідомлення для заповнення таблиці
function getMessage() {
   return prompt("Введіть текст для комірок:", "Текст") || "Текст"
}

// Функція створює таблицю з вказаною кількістю рядків, стовпців і повідомленням
function createTable(rows, cols, message) {
   document.write("<table border='1' cellspacing='0' cellpadding='5'>")

   for (let i = 0; i < rows; i++) {
      document.write("<tr>")
      for (let j = 0; j < cols; j++) {
         document.write(`<td class="td-56">${message}</td>`)
      }
      document.write("</tr>")
   }

   document.write("</table>")
}

// Отримуємо значення від користувача
let rows = getRowCount()
let cols = getColumnCount()
let message = getMessage()

// Виводимо початкові дані
document.write(`Кількість рядків: ${rows}<br>`)
document.write(`Кількість стовпців: ${cols}<br>`)
document.write(`Повідомлення: ${message}<br><br>`)

// Створюємо таблицю
createTable(rows, cols, message)



}