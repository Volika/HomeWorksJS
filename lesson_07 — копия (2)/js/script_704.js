"use strict"
if (confirm('Почати тестування?')) {

/* 04
Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: 
кількість парних, кількість додатних, кількість більших за 100.
*/

// Функція отримує число від користувача
function getNumber(message) {
   return parseFloat(prompt(message, "0")) || 0
}

// Функція перевіряє, скільки чисел є парними
function countEven(a, b, c) {
   let count = 0
   if (a % 2 === 0) count++
   if (b % 2 === 0) count++
   if (c % 2 === 0) count++
   return count
}

// Функція перевіряє, скільки чисел є додатними
function countPositive(a, b, c) {
   let count = 0
   if (a > 0) count++
   if (b > 0) count++
   if (c > 0) count++
   return count
}

// Функція перевіряє, скільки чисел більше за 100
function countGreaterThan100(a, b, c) {
   let count = 0
   if (a > 100) count++
   if (b > 100) count++
   if (c > 100) count++
   return count
}

// Отримуємо числа від користувача
let num1 = getNumber("Введіть 1 число:")
let num2 = getNumber("Введіть 2 число:")
let num3 = getNumber("Введіть 3 число:")

// Виводимо початкові дані
document.write(`Введені числа: ${num1}, ${num2}, ${num3}<br><br>`)

// Викликаємо функції підрахунку та виводимо результати
document.write(`Кількість парних чисел: ${countEven(num1, num2, num3)}<br>`)
document.write(`Кількість додатних чисел: ${countPositive(num1, num2, num3)}<br>`)
document.write(`Кількість чисел більших за 100: ${countGreaterThan100(num1, num2, num3)}<br>`)


}