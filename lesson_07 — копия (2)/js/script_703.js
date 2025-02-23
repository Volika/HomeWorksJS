"use strict"
if (confirm('Почати тестування?')) {

/* 03
Створити окремі функції, які для 4 чисел знаходять:
                        1 суму;
                        2 добуток;
                        3 середнє арифметичне;
                        4 мінімальне значення.
*/

// Функція отримує число від користувача
function getNumber(message) {
   return parseFloat(prompt(message, "1")) || 0
}

// Функція знаходить суму 4 чисел
function getSum(a, b, c, d) {
   return a + b + c + d
}

// Функція знаходить добуток 4 чисел
function getProduct(a, b, c, d) {
   return a * b * c * d
}

// Функція знаходить середнє арифметичне 4 чисел
function getAverage(a, b, c, d) {
   return (a + b + c + d) / 4
}

// Функція знаходить мінімальне значення серед 4 чисел без Math.min()
function getMin(a, b, c, d) {
   let min = a

   if (b < min) min = b
   if (c < min) min = c
   if (d < min) min = d

   return min
}

// Отримуємо числа від користувача
let num1 = getNumber("Введіть 1 число:")
let num2 = getNumber("Введіть 2 число:")
let num3 = getNumber("Введіть 3 число:")
let num4 = getNumber("Введіть 4 число:")
document.write(`Введено числа: ${num1}, ${num2}, ${num3}, ${num4} <br> <br>`)

// Викликаємо функції та виводимо результати
document.write(`Сума: ${getSum(num1, num2, num3, num4)}<br>`)
document.write(`Добуток: ${getProduct(num1, num2, num3, num4)}<br>`)
document.write(`Середнє арифметичне: ${getAverage(num1, num2, num3, num4)}<br>`)
document.write(`Мінімальне значення: ${getMin(num1, num2, num3, num4)}<br>`)



}