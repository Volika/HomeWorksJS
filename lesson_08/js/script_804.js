"use strict"
if (confirm('Почати тестування?')) {

/* 04
   Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :<br>
   ●	починаються на букву «А»;<br>
   ●	перша і остання літери співпадають;<br>
   ●	складаються з більше ніш 5 символів.

*/

// Функція отримує кількість номерів від користувача
function getCarNumberCount() {
   return parseInt(prompt(`Введіть кількість номерів автомобілів:`, "5")) || 1
}

// Функція отримує номери автомобілів від користувача
function getCarNumbers(count) {
   let numbers = []
   for (let i = 0; i < count; i++) {
      let number = prompt(`Введіть номер автомобіля №${i + 1}:`, "АВ12В")
       numbers.push(number.trim()) // Видаляємо зайві пробіли і додаємо в масив
   }
   return numbers
}

// Функція підраховує номери, які починаються з "А"
function countStartsWithA(numbers) {
   let count = 0
   for (let i = 0; i < numbers.length; i++) {
       if (numbers[i][0].toUpperCase() === "А") { // Перевіряємо першу букву у верхньому регістрі
         count++
      }
   }
   return count
}

// Функція підраховує номери, де перша і остання літери співпадають
function countSameFirstLast(numbers) {
   let count = 0
   for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i].toUpperCase() 
      if (num[0] === num[num.length - 1]) { 
         count++
      }
   }
   return count
}

// Функція підраховує номери, які мають більше ніж 5 символів
function countMoreThanFiveChars(numbers) {
   let count = 0
   for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].length > 5) {
         count++
      }
   }
   return count
}

// Отримуємо кількість номерів
let carNumberCount = getCarNumberCount()

// Отримуємо номери від користувача
let carNumbers = getCarNumbers(carNumberCount)

// Підраховуємо необхідні категорії
let startsWithA = countStartsWithA(carNumbers)
let sameFirstLast = countSameFirstLast(carNumbers)
let moreThanFiveChars = countMoreThanFiveChars(carNumbers)

// Виводимо результати

document.write(`Номери  ${carNumberCount} автомобілів:<br>`)
document.write(` <hr> `)
for (let i = 0; i < carNumberCount; i++) {
   document.write(` ${i+1} номер: ${carNumbers[i]}, <br> `)
}
document.write(` <hr> <br> `)
document.write(`Кількість номерів, які починаються на "А": ${startsWithA}<br>`)
document.write(`Кількість номерів, де перша і остання буква співпадають: ${sameFirstLast}<br>`)
document.write(`Кількість номерів, які мають більше ніж 5 символів: ${moreThanFiveChars}<br>`)



}