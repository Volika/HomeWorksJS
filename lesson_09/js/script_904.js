"use strict"
if (confirm('Почати тестування?')) {

/* 01 
Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями

*/

function getArraySize() {
   let input = prompt("Введіть кількість елементів у масиві:", "5")
   let size = parseInt(input)

   if (isNaN(size) || size <= 0) {
       size = 1
   }

   return size
}

function createZeroArray(size) {
   return Array(size).fill(0)
}

let size = getArraySize()
let zeroArray = createZeroArray(size)

document.write(`Масив із ${size} нулів: [${zeroArray.join(", ")}]`)

}