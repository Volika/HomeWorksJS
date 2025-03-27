"use strict"
if (confirm('Почати тестування?')) {

/* 01 
3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

*/
function getArraySize() {
   const size = parseInt(prompt("Введіть кількість елементів у масиві:", "8"))
   return (Number.isInteger(size) && size > 0) ? size : 1
}


function createArrayWithFixedStart(size) {
   let arr = Array(size)
   arr.fill(1, 0, 5)     // заповнюємо 1 від індексу 0 до 5 (не включно)
   arr.fill(7, 5)        // заповнюємо 7 з індексу 5 і до кінця
   return arr
}

let size = getArraySize()
let resultArray = createArrayWithFixedStart(size)

document.write(`Масив із ${size} елементів: [${resultArray.join(", ")}]`)


}