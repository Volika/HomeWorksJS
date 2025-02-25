"use strict"
if (confirm('Почати тестування?')) {

/* 09
   Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.           
*/

// Функція отримує кількість клітинок від користувача
function getGridSize() {
   return parseInt(prompt("Введіть кількість клітинок у масиві:", "10")) || 1
}

// Функція отримує кількість кораблів від користувача
function getShipCount(gridSize) {
   let count = parseInt(prompt(`Введіть кількість кораблів (не більше ${gridSize}):`, "3")) || 0
   return count > gridSize ? gridSize : count // Не більше розміру масиву
}

// Функція створює масив і розміщує кораблі випадково
function generateBattlefield(size, ships) {
   let battlefield = [] 

   // Заповнюємо масив нулями вручну
   for (let i = 0; i < size; i++) {
      battlefield[i] = 0
   }

   let placedShips = 0
   while (placedShips < ships) {
       let position = Math.floor(Math.random() * size) // Випадковий номер клітинки
       if (battlefield[position] === 0) { // Якщо клітинка пуста
           battlefield[position] = 1 // Розміщуємо корабель
         placedShips++
      }
   }
   return battlefield
}

// Функція підраховує кількість кораблів у полі
function countShips(battlefield) {
   let count = 0
   for (let i = 0; i < battlefield.length; i++) {
      if (battlefield[i] === 1) {
         count++
      }
   }
   return count
}

// Функція отримує вибір користувача (номер клітинки)
function getUserShot(gridSize) {
   let choice = prompt(`Введіть номер клітинки (1-${gridSize}):`)
   return choice === null ? null : parseInt(choice) - 1
}

// Функція виводить сповіщення на екран (після кожного ходу)
function showMessage(message) {
   alert(message)
}

// Функція обробляє постріли і грає, поки не знищать всі кораблі
function playGame(battlefield) {
   let remainingShips = countShips(battlefield) 
   let shots = 0

   showMessage(`--- Початок гри ---`)

   while (remainingShips > 0) {
      let shot = getUserShot(battlefield.length)
      if (shot === null) break // Вихід із гри

      if (shot >= 0 && shot < battlefield.length) {
         if (battlefield[shot] === 1) {
               battlefield[shot] = 0 // Потопили корабель
               remainingShips--
               showMessage(`Попадання! Корабель у клітинці ${shot + 1} потоплено. Залишилось кораблів: ${remainingShips}`)
         } else {
               showMessage(`Промах! У клітинці ${shot + 1} немає корабля.`)
         }
         shots++
      } else {
         showMessage(`Невірний номер клітинки. Введіть від 1 до ${battlefield.length}.`)
      }
   }

   showMessage(`Гру завершено! Всі кораблі потоплено за ${shots} пострілів.`)
}

// Додаємо елемент для виводу гри
// document.write('<div id="game-output"></div>')

// Отримуємо параметри гри
let gridSize = getGridSize()
let shipCount = getShipCount(gridSize)

// Створюємо поле битви
let battlefield = generateBattlefield(gridSize, shipCount)

// Запускаємо гру
playGame(battlefield)



}