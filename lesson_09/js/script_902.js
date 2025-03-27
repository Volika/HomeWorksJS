"use strict"
if (confirm('Почати тестування?')) {

/* 01 
Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

*/

function getArraySize() {
   let input = prompt("Введіть кількість елементів у масиві:", "6")
   let size = parseInt(input)
   if (isNaN(size) || size <= 0) {
       size = 1
   }
   return size
}

function createCustomArray(size) {
   let arr = Array(size)
   let half = Math.floor(size / 2)

   arr.fill(1, 0, half)          
   arr.fill(7, half)            

   return arr
}

let size = getArraySize()
let resultArray = createCustomArray(size)

document.write(`Масив із ${size} елементів: [${resultArray.join(", ")}]`)

}