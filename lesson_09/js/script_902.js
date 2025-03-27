"use strict"
if (confirm('Почати тестування?')) {

/* 01 
Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

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