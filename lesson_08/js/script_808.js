"use strict"
if (confirm('Почати тестування?')) {

/* 08
Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). 
Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.                    
*/

// Функція отримує розмір масиву від користувача
function getArraySize() {
   return parseInt(prompt("Введіть розмір масиву:", "10")) || 1
}

// Функція генерує масив випадкових виграшних сум (від -500 до 500)
function generateWinningAmounts(size) {
   //   -500 + Math.floor(Math.random() * (500 - (-500) + 1)) )
   let winnings = []
   for (let i = 0; i < size; i++) {
       winnings.push(Math.floor(Math.random() * 1001) - 500) // Генеруємо від -500 до 500
   }
   return winnings
}

// Функція отримує номери елементів від користувача (поки він не натисне "Cancel")
function getUserChoices(length) {
   let choices = []
   while (true) {
      let choice = prompt(`Введіть номер елемента (1-${length}). Якщо не хочете більше вводити, натисніть Cancel.`)
       if (choice === null) break // Вихід при натисканні "Cancel"

      let index = parseInt(choice) - 1
      if (index >= 0 && index < length) {
         choices.push(index)
      } else {
         document.write(`Неправильний номер, спробуйте ще раз.<br>`)
      }
   }
   return choices
}

// Функція підраховує загальний виграш за вибраними номерами
function calculateTotalWinning(winnings, choices) {
   let total = 0
   for (let i = 0; i < choices.length; i++) {
      let index = choices[i]
      total += winnings[index]
      document.write(`Ви вибрали елемент ${index + 1}, сума: ${winnings[index]} грн<br>`)
   }
   return total < 0 ? 0 : total // Якщо загальний виграш від’ємний, замінюємо його на 0
}

// Отримуємо розмір масиву від користувача
let arraySize = getArraySize()

// Генеруємо виграшні суми
let winnings = generateWinningAmounts(arraySize)

// Виводимо весь масив на екран
document.write(`Виграшні суми:<br> <hr> `)
for (let i = 0; i < winnings.length; i++) {
   document.write(`Елемент ${i + 1}: ${winnings[i]} грн<br>`)
}

// Отримуємо номери вибраних елементів
document.write(`<br> <hr> <br>`)
let userChoices = getUserChoices(winnings.length)

// Підраховуємо підсумковий виграш
let totalWinning = calculateTotalWinning(winnings, userChoices)

// Виводимо підсумковий виграш (мінімум 0)
document.write(`<br> <hr> <br>`)
document.write(`<br>Ваш загальний виграш: ${totalWinning} грн`)





}