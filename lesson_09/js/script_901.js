"use strict"
if (confirm('Почати тестування?')) {

/* 01 
Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями

*/

function getArraySize() {
   return parseInt(prompt("Введіть кількість елементів у масиві:", "5")) || 1
}

function createZeroArray(size) {
   let arr = []
   for (let i = 0; i < size; i++) {
       arr[i] = 0
   }
   return arr
}

let size = getArraySize()
let zeroArray = createZeroArray(size)

document.write(`Масив із ${size} нулів: [${zeroArray.join(", ")}]`)

}